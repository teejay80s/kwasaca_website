'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Download } from 'lucide-react'
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
      body: JSON.stringify({ id, status }),
    })
    if (res.ok) {
      setSubmissions(prev => prev.map(s => s.id === id ? { ...s, status: status as ResearchSubmission['status'] } : s))
    }
    setUpdating(null)
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
                        <span className="text-xs font-semibold text-green-DEFAULT cursor-pointer hover:underline">Review</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}
