import { NextRequest, NextResponse } from 'next/server'
import { createAdminClient } from '@/lib/supabase'
import { sendResearchNotification, sendAcknowledgement } from '@/lib/resend'
import { researchSchema } from '@/lib/validations'

function generateReferenceId() {
  const ts   = Date.now().toString(36).toUpperCase()
  const rand = Math.random().toString(36).substring(2,6).toUpperCase()
  return `KWR-${ts}-${rand}`
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const parsed = researchSchema.safeParse(body)
    if (!parsed.success) {
      return NextResponse.json({ error: 'Validation failed', details: parsed.error.flatten() }, { status: 400 })
    }

    const data = parsed.data
    const referenceId = generateReferenceId()
    const supabase = createAdminClient()

    const { error: dbError } = await supabase.from('research_submissions').insert({
      reference_id: referenceId,
      title:        data.title,
      author_name:  data.authorName,
      institution:  data.institution,
      email:        data.email,
      phone:        data.phone,
      category:     data.category,
      abstract:     data.abstract,
      file_url:     data.fileUrl || null,
      status:       'pending',
    })

    if (dbError) {
      console.error('DB error:', dbError)
      return NextResponse.json({ error: 'Failed to save submission' }, { status: 500 })
    }

    // Send notifications (non-blocking)
    await Promise.allSettled([
      sendResearchNotification({ title: data.title, author: data.authorName, institution: data.institution, category: data.category, email: data.email }),
      sendAcknowledgement(data.email, data.authorName, 'research'),
    ])

    return NextResponse.json({ success: true, referenceId })
  } catch (error) {
    console.error('Research API error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
