import { createClient } from '@supabase/supabase-js'

const supabaseUrl  = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnon = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export const supabase = createClient(supabaseUrl, supabaseAnon)

// Server-side admin client (bypasses RLS — use only in API routes)
export function createAdminClient() {
  return createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!,
    { auth: { autoRefreshToken: false, persistSession: false } }
  )
}

// ─── Database Types ──────────────────────────────────────
export type ResearchSubmission = {
  id: string
  reference_id: string
  title: string
  author_name: string
  institution: string
  email: string
  category: string
  abstract: string
  file_url: string
  status: 'pending' | 'under_review' | 'approved' | 'rejected'
  admin_notes?: string
  created_at: string
  updated_at: string
}

export type ReplyEntry = {
  reply: string
  timestamp: string
  admin: string
}

export type Complaint = {
  id: string
  full_name: string
  email: string
  phone?: string
  category: string
  subject: string
  message: string
  admin_reply?: string
  status: 'open' | 'in_progress' | 'resolved'
  created_at: string
}

export type ContactMessage = {
  id: string
  full_name: string
  email: string
  phone?: string
  subject: string
  message: string
  created_at: string
}
