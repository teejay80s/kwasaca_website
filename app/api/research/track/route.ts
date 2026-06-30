import { NextRequest, NextResponse } from 'next/server'
import { createAdminClient } from '@/lib/supabase'

export async function POST(req: NextRequest) {
  try {
    const { referenceId } = await req.json()

    if (!referenceId || typeof referenceId !== 'string') {
      return NextResponse.json({ error: 'Reference ID is required' }, { status: 400 })
    }

    const admin = createAdminClient()
    const { data, error } = await admin
      .from('research_submissions')
      .select('reference_id, title, author_name, category, status, created_at')
      .eq('reference_id', referenceId.trim().toUpperCase())
      .single()

    if (error || !data) {
      return NextResponse.json({ error: 'Submission not found' }, { status: 404 })
    }

    return NextResponse.json({ submission: data })
  } catch {
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
