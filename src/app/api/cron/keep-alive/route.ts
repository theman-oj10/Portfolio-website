// app/api/cron/keep-alive/route.ts
import { NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'

export const dynamic = 'force-dynamic'
export const revalidate = 0

export async function GET() {
  try {
    // Use the exact environment variable names from your Vercel config
    const supabaseUrl = process.env.REACT_APP_SUPABASE_PROJECT_URL
    const supabaseKey = process.env.REACT_APP_SUPABASE_API_KEY
    
    if (!supabaseUrl || !supabaseKey) {
      throw new Error('Supabase credentials are missing')
    }

    const supabase = createClient(supabaseUrl, supabaseKey)
    
    const { data, error } = await supabase
      .from('testimonials')
      .select('count')
      .limit(1)
    
    if (error) {
      console.error('Keep-alive query failed:', error)
      return NextResponse.json({ 
        error: 'Database ping failed',
        details: error.message,
        timestamp: new Date().toISOString()
      }, { status: 500 })
    }

    return NextResponse.json({ 
      success: true, 
      timestamp: new Date().toISOString(),
      message: 'Database pinged successfully'
    })
  } catch (error) {
    console.error('Unexpected error:', error)
    return NextResponse.json({ 
      error: 'Internal server error',
      details: error instanceof Error ? error.message : 'Unknown error',
      timestamp: new Date().toISOString()
    }, { status: 500 })
  }
}