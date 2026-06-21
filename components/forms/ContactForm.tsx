'use client'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { contactSchema, type ContactFormData } from '@/lib/validations'
import { CheckCircle, Loader2 } from 'lucide-react'

const categories = ['General Enquiry','Complaint — Staff Conduct','Complaint — Service Quality','Complaint — Program Delivery','Partnership Request','Volunteer Application','Donor Enquiry','Media / Press','Other']

export default function ContactForm() {
  const [status, setStatus] = useState<'idle'|'loading'|'success'|'error'>('idle')

  const { register, handleSubmit, reset, formState:{ errors } } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  })

  async function onSubmit(data: ContactFormData) {
    setStatus('loading')
    try {
      const res = await fetch('/api/contact', {
        method:'POST',
        headers:{ 'Content-Type':'application/json' },
        body: JSON.stringify(data),
      })
      if (!res.ok) throw new Error()
      setStatus('success')
      reset()
    } catch {
      setStatus('error')
    }
  }

  if (status === 'success') return (
    <div className="text-center py-10">
      <div className="w-16 h-16 bg-green-light rounded-full flex items-center justify-center mx-auto mb-4">
        <CheckCircle size={28} className="text-green-DEFAULT" />
      </div>
      <h3 className="font-serif text-xl font-semibold text-ink mb-2">Message Sent!</h3>
      <p className="text-sm text-gray-400 font-light">Thank you for contacting KWASACA. We will respond within 3–5 working days.</p>
      <button onClick={() => setStatus('idle')} className="btn-outline-green mt-6 text-sm px-6 py-2.5 rounded-lg">Send Another</button>
    </div>
  )

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label className="label">Full Name *</label>
          <input {...register('fullName')} className="input-field" placeholder="Your full name" />
          {errors.fullName && <p className="text-xs text-red-warm mt-1">{errors.fullName.message}</p>}
        </div>
        <div>
          <label className="label">Email Address *</label>
          <input {...register('email')} type="email" className="input-field" placeholder="your@email.com" />
          {errors.email && <p className="text-xs text-red-warm mt-1">{errors.email.message}</p>}
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label className="label">Phone (optional)</label>
          <input {...register('phone')} className="input-field" placeholder="+234..." />
        </div>
        <div>
          <label className="label">Category *</label>
          <select {...register('category')} className="input-field">
            <option value="">Select category...</option>
            {categories.map(c => <option key={c} value={c}>{c}</option>)}
          </select>
          {errors.category && <p className="text-xs text-red-warm mt-1">{errors.category.message}</p>}
        </div>
      </div>
      <div>
        <label className="label">Subject *</label>
        <input {...register('subject')} className="input-field" placeholder="Brief subject of your message" />
        {errors.subject && <p className="text-xs text-red-warm mt-1">{errors.subject.message}</p>}
      </div>
      <div>
        <label className="label">Message *</label>
        <textarea {...register('message')} rows={5} className="input-field resize-none"
          placeholder="Please provide as much detail as possible..." />
        {errors.message && <p className="text-xs text-red-warm mt-1">{errors.message.message}</p>}
      </div>
      {status === 'error' && (
        <div className="bg-red-pale border border-red-100 text-red-warm text-sm p-4 rounded-xl">
          Something went wrong. Please try again or email us directly.
        </div>
      )}
      <button type="submit" disabled={status === 'loading'}
        className="w-full btn-green py-3.5 rounded-xl flex items-center justify-center gap-2 text-sm font-semibold disabled:opacity-60">
        {status === 'loading' ? <><Loader2 size={16} className="animate-spin" /> Sending...</> : 'Send Message →'}
      </button>
    </form>
  )
}
