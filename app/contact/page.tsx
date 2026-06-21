import type { Metadata } from 'next'
import ContactForm from '@/components/forms/ContactForm'
import { MapPin, Phone, Mail, Clock } from 'lucide-react'

export const metadata: Metadata = { title: 'Contact Us' }

export default function ContactPage() {
  return (
    <>
      <div className="page-hero">
        <div className="absolute inset-0 opacity-[0.03]"
          style={{ backgroundImage:'linear-gradient(white 1px,transparent 1px),linear-gradient(90deg,white 1px,transparent 1px)', backgroundSize:'64px 64px' }} />
        <div className="max-w-[1280px] mx-auto px-0 relative z-10">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-7 h-0.5 bg-red-warm" />
            <span className="text-[11px] font-semibold text-white/50 uppercase tracking-[0.14em]">Reach Us</span>
          </div>
          <h1 className="font-serif text-[clamp(36px,5vw,64px)] font-semibold text-white leading-tight mb-4">Contact & Complaints</h1>
          <p className="text-base text-white/60 max-w-[540px] leading-[1.75] font-light">
            Get in touch with KWASACA — general enquiries, complaints, feedback, or partnership requests.
          </p>
        </div>
      </div>

      <section className="py-24 px-12 bg-white">
        <div className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-[400px_1fr] gap-16">

          {/* Contact info */}
          <div className="space-y-6">
            <div>
              <h2 className="font-serif text-2xl font-semibold text-ink mb-6">Contact Information</h2>
              <div className="space-y-4">
                {[
                  { icon: MapPin, label:'Address',     val:'KWASACA Headquarters, Ilorin, Kwara State, Nigeria' },
                  { icon: Phone,  label:'Phone',       val:'+234 (0) 800 000 0000' },
                  { icon: Mail,   label:'Email',       val:'info@kwasaca.kw.gov.ng' },
                  { icon: Clock,  label:'Office Hours',val:'Monday – Friday: 8:00am – 5:00pm WAT' },
                ].map(({ icon: Icon, label, val }, i) => (
                  <div key={i} className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl border border-gray-100">
                    <div className="w-10 h-10 bg-green-pale border border-green-light rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon size={18} className="text-green-DEFAULT" />
                    </div>
                    <div>
                      <p className="text-[11px] font-semibold text-gray-400 uppercase tracking-wider mb-0.5">{label}</p>
                      <p className="text-sm text-ink font-light">{val}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Emergency */}
            <div className="bg-red-pale border border-red-100 rounded-2xl p-6">
              <h3 className="font-semibold text-red-warm text-sm mb-2">HIV Emergency Line</h3>
              <p className="text-[13px] text-gray-600 font-light leading-relaxed mb-3">
                For urgent HIV-related medical assistance or referrals, contact your nearest government health facility or call:
              </p>
              <p className="font-bold text-red-warm text-xl font-serif">0800-HIV-HELP</p>
              <p className="text-xs text-gray-400 mt-1">Toll-free · Available 24/7</p>
            </div>

            {/* Social */}
            <div>
              <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-4">Follow KWASACA</p>
              <div className="flex gap-3">
                {[
                  { label:'Twitter/X',  icon:'𝕏' },
                  { label:'Facebook',   icon:'f' },
                  { label:'LinkedIn',   icon:'in' },
                  { label:'YouTube',    icon:'▶' },
                ].map((s, i) => (
                  <a key={i} href="#"
                    className="w-11 h-11 border border-gray-200 rounded-xl flex items-center justify-center text-gray-400 hover:border-green-DEFAULT hover:text-green-DEFAULT hover:bg-green-pale transition-all text-sm font-bold">
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-white border border-gray-200 rounded-2xl p-10">
            <h2 className="font-serif text-2xl font-semibold text-ink mb-2">Send Us a Message</h2>
            <p className="text-sm text-gray-400 mb-8 font-light">Use this form for general enquiries, complaints, feedback or partnership requests. We respond within 3–5 working days.</p>
            <ContactForm />
          </div>
        </div>
      </section>

      {/* Map */}
      <div className="h-[400px] border-t border-gray-200 overflow-hidden">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3946.086399964029!2d4.58588531137222!3d8.49098026643746!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x10364d0e06e09525%3A0x8b54b24be5048e47!2sSayomi%20Road%2C%20Oko%20Erin%20240102%2C%20Kwara!5e0!3m2!1sen!2sng!4v1781994358121!5m2!1sen!2sng"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="KWASACA Location"
        />
      </div>
    </>
  )
}
