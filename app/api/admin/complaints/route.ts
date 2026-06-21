import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@/utils/supabase/server'
import { createAdminClient, type ReplyEntry } from '@/lib/supabase'
import { sendReplyNotification } from '@/lib/resend'

export async function GET() {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()

  if (!user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const admin = createAdminClient()
  const { data, error } = await admin
    .from('complaints')
    .select('*')
    .order('created_at', { ascending: false })

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }

  return NextResponse.json(data)
}

export async function PATCH(req: NextRequest) {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()

  if (!user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const body = await req.json()
  const { id, status, admin_reply } = body

  if (!id) {
    return NextResponse.json({ error: 'Missing id' }, { status: 400 })
  }

  const admin = createAdminClient()
  const updateData: Record<string, any> = {}
  if (status) updateData.status = status

  if (admin_reply !== undefined) {
    const { data: existing } = await admin
      .from('complaints')
      .select('admin_reply, email, full_name, subject')
      .eq('id', id)
      .single()

    let replies: ReplyEntry[] = []
    if (existing?.admin_reply) {
      try {
        const parsed = JSON.parse(existing.admin_reply)
        if (Array.isArray(parsed)) replies = parsed
      } catch {
        replies = [{
          reply: existing.admin_reply,
          timestamp: '',
          admin: 'legacy',
        }]
      }
    }

    const entry: ReplyEntry = {
      reply: admin_reply,
      timestamp: new Date().toISOString(),
      admin: user.email || 'admin@kwasaca.kw.gov.ng',
    }
    replies.push(entry)
    updateData.admin_reply = JSON.stringify(replies)

    if (existing?.email) {
      sendReplyNotification(existing.email, existing.full_name, admin_reply, existing.subject).catch(() => {})
    }
  }

  const { error } = await admin
    .from('complaints')
    .update(updateData)
    .eq('id', id)

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }

  return NextResponse.json({ success: true })
}
