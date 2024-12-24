// app/actions/testimonials.ts
'use server'

import { supabase } from '@/lib/supabase'
import { Testimonial } from '@/types/testimonial'
import { ratelimit } from '@/lib/ratelimit'
import { headers } from 'next/headers'

export async function getTestimonials(): Promise<Testimonial[]> {
  const { data, error } = await supabase
    .from('testimonials')
    .select('*')
    .filter('approved', 'eq', true)
    .order('date', { ascending: false })

  if (error) {
    console.error('Error fetching testimonials:', error)
    return []
  }

  return data || []
}

interface SentimentResponse {
  text: string;
  result: {
    sentiment: 'positive' | 'neutral' | 'negative';
    scores: {
      negative: number;
      neutral: number;
      positive: number;
    };
  };
  status: 'success' | 'error';
}

export async function addTestimonial(testimonial: Omit<Testimonial, 'id' | 'date' | 'approved'>) {
  try {
     // Get IP for rate limiting
    const ip = headers().get('x-forwarded-for') || 'anonymous'
    
    // Check rate limit
    const { success, reset, remaining } = await ratelimit.check(ip)
    
    if (!success) {
      const now = Date.now()
      const timeRemaining = Math.floor((reset - now) / 1000 / 60) // minutes remaining
      throw new Error(
        `Rate limit exceeded. Please try again in ${timeRemaining} minutes. ` +
        `You have ${remaining} submissions remaining.`
      )
    }

    // Analyze sentiment using the NLP API
    const nlpResponse = await fetch(`${process.env.REACT_APP_NLP_URI}/analyze`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ text: testimonial.message })
    });

    if (!nlpResponse.ok) {
      throw new Error('Failed to analyze sentiment');
    }

    const sentimentResult: SentimentResponse = await nlpResponse.json();

    if (sentimentResult.status === 'error') {
      throw new Error(sentimentResult.text);
    }

    // Auto-approve if sentiment is positive and the positive score is high enough
    const isPositive = sentimentResult.result.sentiment === 'positive' && 
                      sentimentResult.result.scores.positive > 0.7;

    // Insert testimonial with sentiment analysis results
    const { error } = await supabase
      .from('testimonials')
      .insert([{ 
        ...testimonial,
        approved: isPositive,
        sentiment_scores: sentimentResult.result.scores // Store the scores for future reference
      }])

    if (error) {
      throw error;
    }

    return { 
      success: true, 
      approved: isPositive,
      sentiment: sentimentResult.result.sentiment,
      scores: sentimentResult.result.scores
    };

  } catch (error) {
    console.error('Error processing testimonial:', error)
    throw new Error('Failed to process testimonial')
  }
}