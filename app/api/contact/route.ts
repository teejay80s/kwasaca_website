import { NextRequest, NextResponse } from 'next/server'
import { createAdminClient } from '@/lib/supabase'
import { sendComplaintNotification, sendAcknowledgement } from '@/lib/resend'
import { contactSchema } from '@/lib/validations'

export async function POST(req: NextRequest) {
  try {
    const body   = await req.json()
    const parsed = contactSchema.safeParse(body)
    if (!parsed.success) {
      return NextResponse.json({ error: 'Validation failed' }, { status: 400 })
    }

    const data     = parsed.data
    const supabase = createAdminClient()
    const table    = data.category.startsWith('Complaint') ? 'complaints' : 'contact_messages'

    const { error: dbError } = await supabase.from(table).insert({
      full_name: data.fullName,
      email:     data.email,
      phone:     data.phone,
      category:  data.category,
      subject:   data.subject,
      message:   data.message,
      status:    'open',
    })

    if (dbError) {
      console.error('DB error:', dbError)
      return NextResponse.json({ error: 'Failed to save message' }, { status: 500 })
    }

    await Promise.allSettled([
      sendComplaintNotification({ name: data.fullName, category: data.category, subject: data.subject, email: data.email }),
      sendAcknowledgement(data.email, data.fullName, 'complaint'),
    ])

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Contact API error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
