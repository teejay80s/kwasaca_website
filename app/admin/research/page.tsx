'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Download, X, ExternalLink } from 'lucide-react'
import { formatDate } from '@/lib/utils'
import LoadingSpinner from '@/components/ui/LoadingSpinner'
import type { ResearchSubmission } from '@/lib/supabase'

const statusColor: Record<string,string> = {
  pending:      'bg-amber-50 text-amber-600',
  under_review: 'bg-blue-50 text-blue-600',
  approved:     'bg-green-light text-green-DEFAULT',
  rejected:     'bg-red-pale text-red-warm',
}

export default function AdminResearchPage() {
  const [submissions, setSubmissions] = useState<ResearchSubmission[]>([])
  const [loading, setLoading] = useState(true)
  const [updating, setUpdating] = useState<string | null>(null)
  const [error, setError] = useState('')
  const [selected, setSelected] = useState<ResearchSubmission | null>(null)
  const [adminNotes, setAdminNotes] = useState('')

  useEffect(() => {
    fetch('/api/admin/research')
      .then(r => r.json())
      .then(data => { setSubmissions(data); setLoading(false) })
      .catch(() => { setError('Failed to load'); setLoading(false) })
  }, [])

  async function updateStatus(id: string, status: string) {
    setUpdating(id)
    const res = await fetch('/api/admin/research', {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id, status, admin_notes: adminNotes }),
    })
    if (res.ok) {
      setSubmissions(prev => prev.map(s => s.id === id ? { ...s, status: status as ResearchSubmission['status'], admin_notes: adminNotes } : s))
    }
    setUpdating(null)
  }

  function openReview(s: ResearchSubmission) {
    setSelected(s)
    setAdminNotes(s.admin_notes || '')
  }

  if (loading) {
    return <LoadingSpinner />
  }

  return (
    <div className="min-h-screen bg-gray-50">
        <div className="bg-green-deep text-white px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Link href="/admin" className="text-white/50 hover:text-white text-xs transition-colors">{String.fromCharCode(8592)} Dashboard</Link>
            <span className="text-white/30">|</span>
            <span className="font-semibold text-sm">Research Submissions</span>
          </div>
          <div className="flex items-center gap-4">
            <button onClick={() => fetch('/api/auth/signout', { method: 'POST' }).then(() => window.location.href = '/')} className="text-xs text-white/50 hover:text-white transition-colors bg-transparent border-0 cursor-pointer">Sign Out</button>
            <Link href="/" className="text-xs text-white/50 hover:text-white transition-colors">Back to Website</Link>
          </div>
        </div>
      <div className="max-w-[1200px] mx-auto px-8 py-10">
        <h1 className="font-serif text-3xl font-semibold text-ink mb-8">Research Submissions</h1>
        {error && (
          <div className="bg-red-pale border border-red-100 text-red-warm text-sm p-4 rounded-xl mb-6">{error}</div>
        )}
        <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-100 bg-gray-50">
                  {['Ref ID','Title','Author','Institution','Category','Status','Submitted','File','Action'].map(h => (
                    <th key={h} className="px-5 py-4 text-left text[11px] font-semibold text-gray-400 uppercase tracking-wider whitespace-nowrap">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                  {submissions.length === 0 && (
                  <tr><td colSpan={9} className="px-5 py-12 text-center text-gray-400 text-sm font-light">No submissions yet</td></tr>
                )}
                {submissions.map((s) => (
                  <tr key={s.id} className="hover:bg-gray-50 transition-colors">
                    <td className="px-5 py-4 font-mono text-xs text-gray-400 whitespace-nowrap">{s.reference_id}</td>
                    <td className="px-5 py-4 font-medium text-ink max-w-[200px] truncate">{s.title}</td>
                    <td className="px-5 py-4 text-gray-600 whitespace-nowrap">{s.author_name}</td>
                    <td className="px-5 py-4 text-gray-400 font-light whitespace-nowrap">{s.institution}</td>
                    <td className="px-5 py-4 whitespace-nowrap">
                      <span className="text-[10px] bg-green-pale text-green-mid px-2 py-0.5 rounded font-semibold uppercase">{s.category}</span>
                    </td>
                    <td className="px-5 py-4 whitespace-nowrap">
                      <select
                        value={s.status}
                        onChange={(e) => updateStatus(s.id, e.target.value)}
                        disabled={updating === s.id}
                        className={"text-[10px] px-2 py-1 rounded font-semibold uppercase border-0 cursor-pointer " + (statusColor[s.status] || 'bg-gray-100 text-gray-400')}
                      >
                        <option value="pending">Pending</option>
                        <option value="under_review">Under Review</option>
                        <option value="approved">Approved</option>
                        <option value="rejected">Rejected</option>
                      </select>
                    </td>
                    <td className="px-5 py-4 text-gray-400 text-xs whitespace-nowrap">{s.created_at ? formatDate(s.created_at) : String.fromCharCode(8212)}</td>
                    <td className="px-5 py-4 whitespace-nowrap text-center">
                      {s.file_url ? (
                        <a href={s.file_url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center text-green-DEFAULT hover:text-green-mid transition-colors" title="Download file">
                          <Download size={16} />
                        </a>
                      ) : (
                        <span className="text-gray-300">{String.fromCharCode(8212)}</span>
                      )}
                    </td>
                    <td className="px-5 py-4 whitespace-nowrap">
                      {updating === s.id ? (
                        <span className="text-xs text-gray-400">Updating...</span>
                      ) : (
                        <button onClick={() => openReview(s)} className="text-xs font-semibold text-green-DEFAULT hover:underline bg-transparent border-0 cursor-pointer">Review</button>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Review Modal */}
      {selected && (
        <div className="fixed inset-0 z-50 flex items-start justify-center pt-10 pb-10 bg-black/40 backdrop-blur-sm overflow-y-auto">
          <div className="bg-white rounded-2xl max-w-2xl w-full mx-4 shadow-2xl">
            <div className="flex items-center justify-between px-8 py-5 border-b border-gray-100">
              <h2 className="font-serif text-xl font-semibold text-ink">Review Submission</h2>
              <button onClick={() => setSelected(null)} className="text-gray-400 hover:text-ink bg-transparent border-0 cursor-pointer p-1">
                <X size={20} />
              </button>
            </div>
            <div className="px-8 py-6 space-y-5">
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1 min-w-0">
                  <p className="text-xs text-gray-400 mb-1">Reference ID</p>
                  <p className="font-mono text-sm font-bold text-green-DEFAULT">{selected.reference_id}</p>
                </div>
                <span className={"text-[10px] px-2 py-1 rounded font-semibold uppercase whitespace-nowrap " + (statusColor[selected.status] || 'bg-gray-100 text-gray-400')}>{selected.status}</span>
              </div>

              <hr className="border-gray-100" />

              <div className="grid grid-cols-2 gap-5">
                <div>
                  <p className="text-xs text-gray-400 mb-1">Title</p>
                  <p className="text-sm font-medium text-ink">{selected.title}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-400 mb-1">Category</p>
                  <span className="text-[10px] bg-green-pale text-green-mid px-2 py-0.5 rounded font-semibold uppercase">{selected.category}</span>
                </div>
                <div>
                  <p className="text-xs text-gray-400 mb-1">Author</p>
                  <p className="text-sm text-ink">{selected.author_name}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-400 mb-1">Institution</p>
                  <p className="text-sm text-ink">{selected.institution}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-400 mb-1">Email</p>
                  <p className="text-sm text-ink">{selected.email}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-400 mb-1">Submitted</p>
                  <p className="text-sm text-ink">{selected.created_at ? formatDate(selected.created_at) : String.fromCharCode(8212)}</p>
                </div>
              </div>

              <div>
                <p className="text-xs text-gray-400 mb-1">Abstract</p>
                <p className="text-sm text-gray-600 leading-relaxed bg-gray-50 rounded-xl p-4">{selected.abstract}</p>
              </div>

              <div className="flex items-center gap-4">
                {selected.file_url ? (
                  <a href={selected.file_url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm font-semibold text-green-DEFAULT border-2 border-green-DEFAULT px-4 py-2 rounded-lg hover:bg-green-DEFAULT hover:text-white transition-all">
                    <Download size={15} /> Download Document
                  </a>
                ) : (
                  <span className="text-sm text-gray-400 italic">No file attached</span>
                )}
              </div>

              <hr className="border-gray-100" />

              <div>
                <p className="text-xs text-gray-400 mb-2">Admin Notes</p>
                <textarea
                  value={adminNotes}
                  onChange={(e) => setAdminNotes(e.target.value)}
                  rows={3}
                  className="w-full border border-gray-200 rounded-xl p-3 text-sm resize-none focus:outline-none focus:ring-2 focus:ring-green-DEFAULT/20 focus:border-green-DEFAULT"
                  placeholder="Add internal notes..."
                />
              </div>

              <div className="flex items-center justify-between pt-2">
                <div className="flex items-center gap-2">
                  <span className="text-xs text-gray-400">Status:</span>
                  <select
                    value={selected.status}
                    onChange={(e) => {
                      const newStatus = e.target.value
                      setSelected({ ...selected, status: newStatus as ResearchSubmission['status'] })
                      updateStatus(selected.id, newStatus)
                    }}
                    className={"text-[10px] px-2 py-1 rounded font-semibold uppercase border-0 cursor-pointer " + (statusColor[selected.status] || 'bg-gray-100 text-gray-400')}
                  >
                    <option value="pending">Pending</option>
                    <option value="under_review">Under Review</option>
                    <option value="approved">Approved</option>
                    <option value="rejected">Rejected</option>
                  </select>
                </div>
                <button onClick={() => setSelected(null)} className="text-sm font-semibold text-green-DEFAULT hover:underline bg-transparent border-0 cursor-pointer">Close</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
