-- ═══════════════════════════════════════════════════════════
--  KWASACA DATABASE SETUP
--  Run this entire file in your Supabase SQL Editor
--  Dashboard → SQL Editor → New Query → Paste → Run
-- ═══════════════════════════════════════════════════════════

-- ── Research Submissions ─────────────────────────────────
CREATE TABLE IF NOT EXISTS research_submissions (
  id            UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  reference_id  TEXT UNIQUE NOT NULL,
  title         TEXT NOT NULL,
  author_name   TEXT NOT NULL,
  institution   TEXT NOT NULL,
  email         TEXT NOT NULL,
  phone         TEXT,
  category      TEXT NOT NULL,
  abstract      TEXT NOT NULL,
  file_url      TEXT,
  status        TEXT NOT NULL DEFAULT 'pending'
                  CHECK (status IN ('pending','under_review','approved','rejected')),
  admin_notes   TEXT,
  created_at    TIMESTAMPTZ DEFAULT NOW(),
  updated_at    TIMESTAMPTZ DEFAULT NOW()
);

-- ── Complaints ───────────────────────────────────────────
CREATE TABLE IF NOT EXISTS complaints (
  id         UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  full_name  TEXT NOT NULL,
  email      TEXT NOT NULL,
  phone      TEXT,
  category   TEXT NOT NULL,
  subject    TEXT NOT NULL,
  message    TEXT NOT NULL,
  status     TEXT NOT NULL DEFAULT 'open'
               CHECK (status IN ('open','in_progress','resolved')),
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- ── Contact Messages ─────────────────────────────────────
CREATE TABLE IF NOT EXISTS contact_messages (
  id         UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  full_name  TEXT NOT NULL,
  email      TEXT NOT NULL,
  phone      TEXT,
  category   TEXT NOT NULL,
  subject    TEXT NOT NULL,
  message    TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- ── Updated_at trigger ───────────────────────────────────
CREATE OR REPLACE FUNCTION update_updated_at()
RETURNS TRIGGER AS $$
BEGIN NEW.updated_at = NOW(); RETURN NEW; END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER research_updated_at
  BEFORE UPDATE ON research_submissions
  FOR EACH ROW EXECUTE FUNCTION update_updated_at();

-- ── Row Level Security ───────────────────────────────────
ALTER TABLE research_submissions ENABLE ROW LEVEL SECURITY;
ALTER TABLE complaints           ENABLE ROW LEVEL SECURITY;
ALTER TABLE contact_messages     ENABLE ROW LEVEL SECURITY;

-- Public can INSERT (submit forms)
CREATE POLICY "public_insert_research"
  ON research_submissions FOR INSERT TO anon WITH CHECK (true);

CREATE POLICY "public_insert_complaints"
  ON complaints FOR INSERT TO anon WITH CHECK (true);

CREATE POLICY "public_insert_contact"
  ON contact_messages FOR INSERT TO anon WITH CHECK (true);

-- Only service role (admin server) can SELECT/UPDATE
CREATE POLICY "service_select_research"
  ON research_submissions FOR SELECT TO service_role USING (true);

CREATE POLICY "service_update_research"
  ON research_submissions FOR UPDATE TO service_role USING (true);

CREATE POLICY "service_select_complaints"
  ON complaints FOR SELECT TO service_role USING (true);

CREATE POLICY "service_update_complaints"
  ON complaints FOR UPDATE TO service_role USING (true);

CREATE POLICY "service_select_contact"
  ON contact_messages FOR SELECT TO service_role USING (true);

-- ── Supabase Storage bucket for research PDFs ────────────
INSERT INTO storage.buckets (id, name, public)
  VALUES ('research-files', 'research-files', false)
  ON CONFLICT (id) DO NOTHING;

CREATE POLICY "authenticated_upload_research"
  ON storage.objects FOR INSERT TO anon
  WITH CHECK (bucket_id = 'research-files');

-- ── Done ─────────────────────────────────────────────────
SELECT 'KWASACA database setup complete!' AS status;
