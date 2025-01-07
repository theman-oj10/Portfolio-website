// app/api/cron/keep-alive/route.ts
import { NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'

// Create a new Supabase client just for this endpoint
const supabase = createClient(
  process.env.REACT_APP_SUPABASE_URL!,
  process.env.REACT_APP_SUPABASE_ANON_KEY!
)

export const dynamic = 'force-dynamic'
export const revalidate = 0

export async function GET() {
  try {
    console.log('Starting keep-alive ping...')
    
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