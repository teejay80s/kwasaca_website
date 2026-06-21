'use client'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { researchSchema, type ResearchFormData } from '@/lib/validations'
import { CheckCircle, Loader2, Upload } from 'lucide-react'

const categories = ['Prevention','Treatment & ART','PMTCT','Epidemiology','Behavioral Science','Health Systems','OVC & Social Support','Key Populations','Policy & Advocacy','Other']

export default function ResearchForm() {
  const [status, setStatus] = useState<'idle'|'loading'|'success'|'error'>('idle')
  const [refId,  setRefId]  = useState('')
  const [file, setFile] = useState<File | null>(null)
  const [uploading, setUploading] = useState(false)

  const { register, handleSubmit, reset, formState:{ errors } } = useForm<ResearchFormData>({
    resolver: zodResolver(researchSchema),
  })

  async function onSubmit(data: ResearchFormData) {
    setStatus('loading')
    try {
      let fileUrl = ''

      if (file) {
        setUploading(true)
        const fd = new FormData()
        fd.append('file', file)
        const uploadRes = await fetch('/api/upload', { method:'POST', body: fd })
        const uploadJson = await uploadRes.json()
        if (!uploadRes.ok) throw new Error(uploadJson.error || 'Upload failed')
        fileUrl = uploadJson.url
        setUploading(false)
      }

      const res = await fetch('/api/research', {
        method:'POST',
        headers:{ 'Content-Type':'application/json' },
        body: JSON.stringify({ ...data, fileUrl }),
      })
      const json = await res.json()
      if (!res.ok) throw new Error(json.error)
      setRefId(json.referenceId)
      setStatus('success')
      reset()
      setFile(null)
    } catch {
      setStatus('error')
      setUploading(false)
    }
  }

  if (status === 'success') return (
    <div className="text-center py-10">
      <div className="w-16 h-16 bg-green-light rounded-full flex items-center justify-center mx-auto mb-4">
        <CheckCircle size={28} className="text-green-DEFAULT" />
      </div>
      <h3 className="font-serif text-xl font-semibold text-ink mb-2">Submission Received!</h3>
      <p className="text-sm text-gray-400 mb-4 font-light">Your research has been submitted for review. We will contact you within 6–8 weeks.</p>
      {refId && (
        <div className="bg-green-pale border border-green-light rounded-xl px-6 py-4 inline-block">
          <p className="text-xs text-gray-400 mb-1">Your Reference ID</p>
          <p className="font-mono font-bold text-green-DEFAULT text-lg">{refId}</p>
          <p className="text-xs text-gray-400 mt-1">Save this to track your submission</p>
        </div>
      )}
      <button onClick={() => setStatus('idle')} className="btn-outline-green mt-6 text-sm px-6 py-2.5 rounded-lg">Submit Another</button>
    </div>
  )

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      <div>
        <label className="label">Research Title *</label>
        <input {...register('title')} className="input-field" placeholder="Enter the full title of your research paper" />
        {errors.title && <p className="text-xs text-red-warm mt-1">{errors.title.message}</p>}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label className="label">Lead Author Full Name *</label>
          <input {...register('authorName')} className="input-field" placeholder="Full name" />
          {errors.authorName && <p className="text-xs text-red-warm mt-1">{errors.authorName.message}</p>}
        </div>
        <div>
          <label className="label">Institution / Organization *</label>
          <input {...register('institution')} className="input-field" placeholder="University, hospital, NGO..." />
          {errors.institution && <p className="text-xs text-red-warm mt-1">{errors.institution.message}</p>}
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label className="label">Email Address *</label>
          <input {...register('email')} type="email" className="input-field" placeholder="your@email.com" />
          {errors.email && <p className="text-xs text-red-warm mt-1">{errors.email.message}</p>}
        </div>
        <div>
          <label className="label">Phone (optional)</label>
          <input {...register('phone')} className="input-field" placeholder="+234..." />
        </div>
      </div>
      <div>
        <label className="label">Research Category *</label>
        <select {...register('category')} className="input-field">
          <option value="">Select category...</option>
          {categories.map(c => <option key={c} value={c}>{c}</option>)}
        </select>
        {errors.category && <p className="text-xs text-red-warm mt-1">{errors.category.message}</p>}
      </div>
      <div>
        <label className="label">Abstract / Summary *</label>
        <textarea {...register('abstract')} rows={5} className="input-field resize-none"
          placeholder="Provide a summary of your research — objectives, methodology, key findings and recommendations (min. 100 characters)..." />
        {errors.abstract && <p className="text-xs text-red-warm mt-1">{errors.abstract.message}</p>}
      </div>

      {/* File Upload */}
      <div>
        <label className="label">Research Document (PDF)</label>
        <label className={"border-2 border-dashed border-gray-200 rounded-xl p-6 text-center hover:border-green-DEFAULT transition-colors cursor-pointer block " + (file ? 'bg-green-pale border-green-light' : '')}>
          <input
            type="file"
            accept=".pdf"
            className="hidden"
            onChange={(e) => setFile(e.target.files?.[0] || null)}
          />
          {file ? (
            <div className="flex items-center justify-center gap-2">
              <Upload size={18} className="text-green-DEFAULT" />
              <span className="text-sm text-green-DEFAULT font-medium">{file.name}</span>
              <span className="text-xs text-gray-400">({(file.size / 1024 / 1024).toFixed(1)} MB)</span>
            </div>
          ) : (
            <>
              <div className="text-3xl mb-2 opacity-40">📄</div>
              <p className="text-sm text-gray-400 font-light">Click to upload your research document (PDF)</p>
              <p className="text-xs text-gray-300 mt-1">Max 20MB · PDF only</p>
            </>
          )}
        </label>
      </div>

      <div className="flex items-start gap-3 p-4 bg-amber-50 border border-amber-100 rounded-xl">
        <input {...register('ethicsApproval')} type="checkbox" id="ethics" className="mt-0.5 accent-green-DEFAULT w-4 h-4 flex-shrink-0" />
        <label htmlFor="ethics" className="text-sm text-gray-600 font-light cursor-pointer">
          I confirm that this research involving human subjects has received ethics committee approval, or that ethics approval is not required for this type of research. *
        </label>
      </div>
      {errors.ethicsApproval && <p className="text-xs text-red-warm -mt-3">{errors.ethicsApproval.message}</p>}

      {status === 'error' && (
        <div className="bg-red-pale border border-red-100 text-red-warm text-sm p-4 rounded-xl">
          Something went wrong. Please try again or contact us directly.
        </div>
      )}

      <button type="submit" disabled={status === 'loading' || uploading}
        className="w-full btn-green py-3.5 rounded-xl flex items-center justify-center gap-2 text-sm font-semibold disabled:opacity-60">
        {uploading ? <><Loader2 size={16} className="animate-spin" /> Uploading file...</> :
         status === 'loading' ? <><Loader2 size={16} className="animate-spin" /> Submitting...</> : 'Submit Research for Review →'}
      </button>
    </form>
  )
}
