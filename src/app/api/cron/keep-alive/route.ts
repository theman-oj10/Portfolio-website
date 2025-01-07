import { NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase'

export const dynamic = 'force-dynamic'
export const revalidate = 0

export async function GET(request: Request) {
  try {
    // Simple query to keep the connection alive
    const { data, error } = await supabase
      .from('testimonials')
      .select('count(*)', { count: 'exact' })
    
    if (error) {
      console.error('Keep-alive query failed:', error)
      return NextResponse.json(
        { error: 'Database ping failed' },
        { status: 500 }
      )
    }

    return NextResponse.json(
      { 
        success: true, 
        message: 'Database pinged successfully',
        timestamp: new Date().toISOString()
      },
      { status: 200 }
    )
  } catch (error) {
    console.error('Keep-alive endpoint error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}