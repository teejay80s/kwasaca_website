'use client'
import { useState } from 'react'
import { Loader2, Search, CheckCircle, Clock, XCircle, FileText } from 'lucide-react'

const statusConfig: Record<string, { label: string, icon: any, color: string, bg: string }> = {
  pending:      { label: 'Pending Review',      icon: Clock,      color: 'text-amber-600', bg: 'bg-amber-50' },
  under_review: { label: 'Under Review',        icon: Search,     color: 'text-blue-600',  bg: 'bg-blue-50' },
  approved:     { label: 'Approved',            icon: CheckCircle, color: 'text-green-DEFAULT', bg: 'bg-green-pale' },
  rejected:     { label: 'Not Approved',        icon: XCircle,    color: 'text-red-warm',  bg: 'bg-red-pale' },
}

export default function TrackSubmission() {
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  const [result, setResult] = useState<any>(null)
  const [error, setError] = useState('')

  async function handleTrack() {
    if (!input.trim()) return
    setLoading(true)
    setError('')
    setResult(null)
    try {
      const res = await fetch('/api/research/track', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ referenceId: input.trim() }),
      })
      const json = await res.json()
      if (!res.ok) throw new Error(json.error)
      setResult(json.submission)
    } catch (e: any) {
      setError(e.message || 'Submission not found')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="bg-green-pale border border-green-light rounded-2xl p-7">
      <h3 className="font-semibold text-ink mb-2">Track Your Submission</h3>
      <p className="text-sm text-gray-500 font-light mb-4">Already submitted? Enter your reference ID to check the status.</p>
      <div className="flex gap-2">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleTrack()}
          className="input-field flex-1"
          placeholder="e.g. KWR-XXXX-XXXX"
        />
        <button
          onClick={handleTrack}
          disabled={loading || !input.trim()}
          className="btn-green px-4 py-2.5 text-sm whitespace-nowrap rounded-lg disabled:opacity-50 flex items-center gap-1.5"
        >
          {loading ? <Loader2 size={14} className="animate-spin" /> : <Search size={14} />}
          Check
        </button>
      </div>

      {error && (
        <div className="mt-4 text-sm text-red-warm bg-red-pale border border-red-100 rounded-xl px-4 py-3">
          {error}
        </div>
      )}

      {result && (
        <div className="mt-4 bg-white border border-green-light rounded-xl p-4 space-y-3">
          <div className="flex items-center justify-between">
            <span className="font-mono text-xs font-bold text-green-DEFAULT">{result.reference_id}</span>
            <span className={"inline-flex items-center gap-1 text-[10px] font-semibold px-2 py-0.5 rounded " + (statusConfig[result.status]?.bg || 'bg-gray-100') + " " + (statusConfig[result.status]?.color || 'text-gray-400')}>
              {result.status && (() => {
                const Icon = statusConfig[result.status]?.icon || FileText
                return <Icon size={10} />
              })()}
              {statusConfig[result.status]?.label || result.status}
            </span>
          </div>
          <div>
            <p className="text-sm font-medium text-ink">{result.title}</p>
            <p className="text-xs text-gray-400 mt-0.5">{result.author_name} · {result.category}</p>
          </div>
          <p className="text-xs text-gray-400">Submitted {result.created_at ? new Date(result.created_at).toLocaleDateString() : '—'}</p>
        </div>
      )}
    </div>
  )
}
