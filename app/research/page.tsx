import type { Metadata } from 'next'
import ResearchForm from '@/components/forms/ResearchForm'
import TrackSubmission from '@/components/forms/TrackSubmission'
import { CheckCircle, Clock, Award, BookOpen } from 'lucide-react'

export const metadata: Metadata = { title: 'Research Submission Portal' }

const steps = [
  { icon: BookOpen,    num:'1', title:'Prepare Submission',      desc:'Full paper or abstract, author details, institutional affiliation, and ethics approval confirmation.' },
  { icon: CheckCircle, num:'2', title:'Submit via Portal',        desc:'Fill out the submission form and upload your research document (PDF, max 20MB).' },
  { icon: Clock,       num:'3', title:'Expert Review (6–8 wks)', desc:'KWASACA\'s technical committee reviews methodology, relevance to Kwara\'s HIV response, and evidence quality.' },
  { icon: Award,       num:'4', title:'Endorsement Decision',     desc:'Approved research receives an official KWASACA endorsement letter and may be featured in our publications.' },
]

const categories = ['Prevention','Treatment & ART','PMTCT','Epidemiology','Behavioral Science','Health Systems','OVC & Social Support','Key Populations','Policy & Advocacy','Other']

export default function ResearchPage() {
  return (
    <>
      <div className="page-hero" style={{ background:'#0a1a0e' }}>
        <div className="absolute inset-0 opacity-[0.02]"
          style={{ backgroundImage:'linear-gradient(white 1px,transparent 1px),linear-gradient(90deg,white 1px,transparent 1px)', backgroundSize:'80px 80px' }} />
        <div className="max-w-[1280px] mx-auto px-0 relative z-10">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-7 h-0.5 bg-red-warm" />
            <span className="text-[11px] font-semibold text-white/40 uppercase tracking-[0.14em]">For Researchers</span>
          </div>
          <h1 className="font-serif text-[clamp(36px,5vw,64px)] font-semibold text-white leading-tight mb-4">Research Submission Portal</h1>
          <p className="text-base text-white/55 max-w-[600px] leading-[1.75] font-light">
            Submit your HIV/AIDS research for official KWASACA review, recommendation and endorsement. We welcome evidence-based research that strengthens Kwara State's HIV response.
          </p>
        </div>
      </div>

      {/* Process steps */}
      <section className="py-20 px-12 bg-white">
        <div className="max-w-[1280px] mx-auto">
          <div className="text-center mb-14">
            <span className="section-pill mb-4 inline-flex">The Process</span>
            <h2 className="section-heading">How <em className="italic text-green-DEFAULT">Submission Works</em></h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {steps.map(({ icon: Icon, num, title, desc }, i) => (
              <div key={i} className="relative">
                {i < 3 && <div className="hidden md:block absolute top-7 left-full w-full h-px bg-gray-200 z-0 -translate-x-6" />}
                <div className="relative z-10 text-center">
                  <div className="w-14 h-14 bg-green-light border-2 border-green-DEFAULT rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Icon size={22} className="text-green-DEFAULT" />
                  </div>
                  <div className="w-6 h-6 bg-green-DEFAULT rounded-full flex items-center justify-center text-xs font-bold text-white mx-auto mb-3 -mt-2">{num}</div>
                  <h3 className="font-semibold text-ink text-sm mb-2">{title}</h3>
                  <p className="text-xs text-gray-400 font-light leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Form + Guidelines */}
      <section className="py-24 px-12 bg-cream">
        <div className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-12 items-start">
          {/* Form */}
          <div className="bg-white border border-gray-200 rounded-2xl p-10">
            <h2 className="font-serif text-2xl font-semibold text-ink mb-2">Submit Your Research</h2>
            <p className="text-sm text-gray-400 mb-8 font-light">All fields marked * are required.</p>
            <ResearchForm />
          </div>

          {/* Guidelines sidebar */}
          <div className="space-y-5">
            <div className="bg-green-deep text-white rounded-2xl p-7">
              <h3 className="font-serif text-xl font-semibold mb-4 text-white">Submission Guidelines</h3>
              <ul className="space-y-3">
                {[
                  'Research must be related to HIV/AIDS in Kwara State or Nigeria',
                  'Full paper or detailed abstract accepted',
                  'Ethics committee approval required for human subjects research',
                  'PDF format only, maximum 20MB file size',
                  'Include complete author and institutional information',
                  'Declare all conflicts of interest',
                  'Previously published work is acceptable',
                  'Submissions in English only',
                ].map((g, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-sm text-white/70 font-light">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-400 mt-1.5 flex-shrink-0" />
                    {g}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white border border-gray-200 rounded-2xl p-7">
              <h3 className="font-semibold text-ink mb-3">Research Categories</h3>
              <div className="flex flex-wrap gap-2">
                {categories.map(c => (
                  <span key={c} className="text-xs bg-green-pale border border-green-light text-green-mid px-3 py-1.5 rounded-full font-medium">{c}</span>
                ))}
              </div>
            </div>

            <TrackSubmission />
          </div>
        </div>
      </section>
    </>
  )
}
