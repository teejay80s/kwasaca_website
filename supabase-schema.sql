-- ══════════════════════════════════════════════════════════════
-- KWASACA Supabase Database Schema (single source of truth)
-- Run this in your Supabase SQL Editor (supabase.com → SQL Editor)
-- ══════════════════════════════════════════════════════════════

-- ─── Research Submissions ─────────────────────────────────────
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
  reviewed_by   TEXT,
  reviewed_at   TIMESTAMPTZ,
  created_at    TIMESTAMPTZ DEFAULT NOW(),
  updated_at    TIMESTAMPTZ DEFAULT NOW()
);

-- ─── Complaints ───────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS complaints (
  id          UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  full_name   TEXT NOT NULL,
  email       TEXT NOT NULL,
  phone       TEXT,
  category    TEXT NOT NULL,
  subject     TEXT NOT NULL,
  message     TEXT NOT NULL,
  status      TEXT NOT NULL DEFAULT 'open'
                CHECK (status IN ('open','in_progress','resolved')),
  admin_reply TEXT,
  created_at  TIMESTAMPTZ DEFAULT NOW(),
  updated_at  TIMESTAMPTZ DEFAULT NOW()
);

-- ─── Contact Messages ─────────────────────────────────────────
CREATE TABLE IF NOT EXISTS contact_messages (
  id         UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  full_name  TEXT NOT NULL,
  email      TEXT NOT NULL,
  phone      TEXT,
  category   TEXT NOT NULL,
  subject    TEXT NOT NULL,
  message    TEXT NOT NULL,
  status     TEXT NOT NULL DEFAULT 'open'
               CHECK (status IN ('open','replied','closed')),
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- ─── Auto-update updated_at ───────────────────────────────────
CREATE OR REPLACE FUNCTION update_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER research_updated_at
  BEFORE UPDATE ON research_submissions
  FOR EACH ROW EXECUTE FUNCTION update_updated_at();

CREATE TRIGGER complaints_updated_at
  BEFORE UPDATE ON complaints
  FOR EACH ROW EXECUTE FUNCTION update_updated_at();

CREATE TRIGGER contact_updated_at
  BEFORE UPDATE ON contact_messages
  FOR EACH ROW EXECUTE FUNCTION update_updated_at();

-- ─── Row Level Security (RLS) ─────────────────────────────────
ALTER TABLE research_submissions ENABLE ROW LEVEL SECURITY;
ALTER TABLE complaints            ENABLE ROW LEVEL SECURITY;
ALTER TABLE contact_messages      ENABLE ROW LEVEL SECURITY;

-- Public can INSERT (submit forms)
CREATE POLICY "public_insert_research"
  ON research_submissions FOR INSERT TO anon WITH CHECK (true);

CREATE POLICY "public_insert_complaints"
  ON complaints FOR INSERT TO anon WITH CHECK (true);

CREATE POLICY "public_insert_contact"
  ON contact_messages FOR INSERT TO anon WITH CHECK (true);

-- Only service role (admin server) can SELECT / UPDATE / DELETE
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

CREATE POLICY "service_update_contact"
  ON contact_messages FOR UPDATE TO service_role USING (true);

-- ─── Indexes ──────────────────────────────────────────────────
CREATE INDEX IF NOT EXISTS idx_research_status   ON research_submissions(status);
CREATE INDEX IF NOT EXISTS idx_research_created  ON research_submissions(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_complaints_status ON complaints(status);
CREATE INDEX IF NOT EXISTS idx_complaints_created ON complaints(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_contact_created   ON contact_messages(created_at DESC);

-- ─── Supabase Storage bucket for research PDFs ────────────────
INSERT INTO storage.buckets (id, name, public)
  VALUES ('research-files', 'research-files', true)
  ON CONFLICT (id) DO UPDATE SET public = true;

-- Allow anyone (anon) to upload files
CREATE POLICY "public_upload_research"
  ON storage.objects FOR INSERT TO anon
  WITH CHECK (bucket_id = 'research-files');

-- Allow anyone (anon) to download files
CREATE POLICY "public_download_research"
  ON storage.objects FOR SELECT TO anon
  USING (bucket_id = 'research-files');

/* ── If you already created the bucket as private, run this in SQL Editor:
UPDATE storage.buckets SET public = true WHERE id = 'research-files';
CREATE POLICY IF NOT EXISTS "public_download_research"
  ON storage.objects FOR SELECT TO anon
  USING (bucket_id = 'research-files');
*/

-- ══════════════════════════════════════════════════════════════
-- DONE! Your database is ready.
-- ══════════════════════════════════════════════════════════════
