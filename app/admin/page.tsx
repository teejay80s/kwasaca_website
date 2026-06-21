import { formatDate } from '@/lib/utils'
import Link from 'next/link'
import { FileText, MessageSquare, CheckCircle, Clock, AlertCircle, Newspaper, Calendar, BarChart3, GraduationCap, Mail } from 'lucide-react'
import { signOut } from '@/app/auth/actions'
import { getAllNews, getAllPrograms, getAllReports, getUpcomingEvents } from '@/lib/sanity'
import { createAdminClient } from '@/lib/supabase'

export const dynamic = 'force-dynamic'

export default async function AdminPage() {
  const admin = createAdminClient()

  const [
    { data: researchSubmissions },
    { data: complaints },
    { data: contactMessages },
    news, programs, reports, events
  ] = await Promise.all([
    admin.from('research_submissions').select('*').order('created_at', { ascending: false }),
    admin.from('complaints').select('*').order('created_at', { ascending: false }),
    admin.from('contact_messages').select('*').order('created_at', { ascending: false }),
    getAllNews(),
    getAllPrograms(),
    getAllReports(),
    getUpcomingEvents(),
  ])

  const totalResearch = researchSubmissions?.length || 0
  const pendingResearch = (researchSubmissions || []).filter((r: any) => r.status === 'pending').length
  const totalComplaints = complaints?.length || 0
  const openComplaints = (complaints || []).filter((c: any) => c.status === 'open').length
  const totalMessages = contactMessages?.length || 0

  const stats = [
    { icon: FileText,      label: 'Research Submissions', val: totalResearch,   color: 'text-green-DEFAULT', bg: 'bg-green-pale' },
    { icon: Clock,         label: 'Pending Review',       val: pendingResearch, color: 'text-amber-600',    bg: 'bg-amber-50' },
    { icon: MessageSquare, label: 'Total Complaints',     val: totalComplaints, color: 'text-blue-600',     bg: 'bg-blue-50' },
    { icon: AlertCircle,   label: 'Open Complaints',      val: openComplaints,  color: 'text-red-warm',     bg: 'bg-red-pale' },
    { icon: Mail,          label: 'Contact Messages',     val: totalMessages,   color: 'text-purple-600',  bg: 'bg-purple-50' },
  ]

  const contentStats = [
    { icon: Newspaper,    label: 'News Articles', val: news.length,   href: '/studio',        color: 'text-sky-600',     bg: 'bg-sky-50' },
    { icon: GraduationCap, label: 'Programs',     val: programs.length, href: '/studio',      color: 'text-purple-600',  bg: 'bg-purple-50' },
    { icon: BarChart3,    label: 'Reports',       val: reports.length, href: '/studio',       color: 'text-orange-600',  bg: 'bg-orange-50' },
    { icon: Calendar,     label: 'Upcoming Events', val: events.length,href: '/studio',       color: 'text-pink-600',    bg: 'bg-pink-50' },
  ]

  const recentResearch = (researchSubmissions || []).slice(0, 5)
  const recentComplaints = (complaints || []).slice(0, 5)

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-green-deep text-white px-8 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="font-serif font-bold text-lg">KWASACA Admin</span>
          <span className="text-white/40 text-xs">|</span>
          <span className="text-white/50 text-xs">Staff Dashboard</span>
        </div>
        <div className="flex items-center gap-4">
          <form action={signOut}>
            <button type="submit" className="text-xs text-white/50 hover:text-white transition-colors">Sign Out</button>
          </form>
          <Link href="/" className="text-xs text-white/50 hover:text-white transition-colors">Back to Website</Link>
        </div>
      </div>

      <div className="max-w-[1200px] mx-auto px-8 py-10">
        <h1 className="font-serif text-3xl font-semibold text-ink mb-8">Dashboard Overview</h1>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-6">
          {stats.map(({ icon: Icon, label, val, color, bg }, i) => (
            <div key={i} className="bg-white border border-gray-200 rounded-2xl p-6">
              <div className={"w-11 h-11 " + bg + " rounded-xl flex items-center justify-center mb-3"}>
                <Icon size={20} className={color} />
              </div>
              <div className={"font-serif text-4xl font-bold " + color + " leading-none mb-1"}>{val}</div>
              <div className="text-sm text-gray-400 font-light">{label}</div>
            </div>
          ))}
        </div>

        <h2 className="font-serif text-xl font-semibold text-ink mb-4">Content Library</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
          {contentStats.map(({ icon: Icon, label, val, color, bg }, i) => (
            <Link key={i} href="/studio" className="bg-white border border-gray-200 rounded-2xl p-6 hover:border-green-DEFAULT hover:shadow-sm transition-all group">
              <div className={"w-11 h-11 " + bg + " rounded-xl flex items-center justify-center mb-3"}>
                <Icon size={20} className={color} />
              </div>
              <div className={"font-serif text-4xl font-bold " + color + " leading-none mb-1 group-hover:text-green-DEFAULT transition-colors"}>{val}</div>
              <div className="text-sm text-gray-400 font-light">{label}</div>
            </Link>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white border border-gray-200 rounded-2xl p-6">
            <div className="flex items-center justify-between mb-5">
              <h2 className="font-semibold text-ink">Recent Research Submissions</h2>
              <Link href="/admin/research" className="text-xs text-green-DEFAULT font-semibold hover:underline">View all</Link>
            </div>
            <div className="space-y-3">
              {recentResearch.length === 0 && (
                <p className="text-sm text-gray-400 font-light py-4 text-center">No submissions yet</p>
              )}
              {recentResearch.map((r: any) => (
                <div key={r.id} className="flex items-start gap-3 p-3 bg-gray-50 rounded-xl border border-gray-100">
                  <div className={"w-2 h-2 rounded-full mt-1.5 flex-shrink-0 " +
                    (r.status === 'pending' ? 'bg-amber-400' : r.status === 'approved' ? 'bg-green-DEFAULT' : 'bg-gray-300')} />
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-ink truncate">{r.title}</p>
                    <p className="text-xs text-gray-400">{r.author_name}  {r.category}</p>
                  </div>
                  <span className={"text-[10px] font-semibold uppercase px-2 py-0.5 rounded flex-shrink-0 " +
                    (r.status === 'pending' ? 'bg-amber-50 text-amber-600' : r.status === 'approved' ? 'bg-green-light text-green-DEFAULT' : 'bg-gray-100 text-gray-400')}>
                    {r.status}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white border border-gray-200 rounded-2xl p-6">
            <div className="flex items-center justify-between mb-5">
              <h2 className="font-semibold text-ink">Recent Complaints</h2>
              <Link href="/admin/complaints" className="text-xs text-green-DEFAULT font-semibold hover:underline">View all</Link>
            </div>
            <div className="space-y-3">
              {recentComplaints.length === 0 && (
                <p className="text-sm text-gray-400 font-light py-4 text-center">No complaints yet</p>
              )}
              {recentComplaints.map((c: any) => (
                <div key={c.id} className="flex items-start gap-3 p-3 bg-gray-50 rounded-xl border border-gray-100">
                  <div className={"w-2 h-2 rounded-full mt-1.5 flex-shrink-0 " +
                    (c.status === 'open' ? 'bg-red-warm' : c.status === 'in_progress' ? 'bg-amber-400' : 'bg-green-DEFAULT')} />
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-ink truncate">{c.subject}</p>
                    <p className="text-xs text-gray-400">{c.full_name}  {c.category}</p>
                  </div>
                  <span className={"text-[10px] font-semibold uppercase px-2 py-0.5 rounded flex-shrink-0 " +
                    (c.status === 'open' ? 'bg-red-pale text-red-warm' : c.status === 'in_progress' ? 'bg-amber-50 text-amber-600' : 'bg-green-light text-green-DEFAULT')}>
                    {c.status}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-4 gap-4">
          {[
            { label: 'Manage Research Submissions', href: '/admin/research',   desc: 'Review, approve or reject submitted research papers' },
            { label: 'View Complaints Inbox',       href: '/admin/complaints', desc: 'Read and respond to public complaints and messages' },
            { label: 'Manage Content (Sanity Studio)', href: '/studio',        desc: 'Add news, events, programs, reports and more' },
            { label: 'Sanity Cloud Dashboard',      href: 'https://sanity.io/manage', desc: 'Project settings, members, API keys', external: true },
          ].map((l, i) => (
            <Link key={i} href={l.href} target={l.external ? '_blank' : undefined}
              className="bg-white border border-gray-200 rounded-xl p-5 hover:border-green-DEFAULT hover:shadow-sm transition-all group">
              <h3 className="font-semibold text-ink text-sm mb-1 group-hover:text-green-DEFAULT transition-colors">{l.label}</h3>
              <p className="text-xs text-gray-400 font-light">{l.desc}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
