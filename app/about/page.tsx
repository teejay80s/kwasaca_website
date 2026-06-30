import type { Metadata } from 'next'
import { ArrowRight, Shield, Users, Globe, Target, Award, Building } from 'lucide-react'

export const metadata: Metadata = { title: 'About Us' }

const leadership = [
  { name: 'Deputy Governor, Kwara State', role: 'Chairman, KWASACA Board', initials: 'DG' },
  { name: 'Dr. Saleem Alabi',             role: 'Executive Secretary / Programme Manager', initials: 'SA' },
  { name: 'Technical Advisory Team',       role: 'HIV/AIDS Technical Specialists', initials: 'TA' },
]

const milestones = [
  { year:'2003', title:'Agency Established', desc:'KWASACA created as the state-level coordinating body for HIV/AIDS response.' },
  { year:'2010', title:'LGA Expansion',      desc:'Programme extended to all 16 Local Government Areas with LACA committees.' },
  { year:'2015', title:'PEPFAR Partnership', desc:'Formal partnership with PEPFAR and Global Fund secured for ART scale-up.' },
  { year:'2019', title:'World Bank Grant',   desc:'World Bank support secured for community outreach and healthcare facility strengthening.' },
  { year:'2022', title:'1% Prevalence',      desc:'Kwara achieves 1% HIV prevalence — below the national average of 1.5%.' },
  { year:'2024', title:'Donor Sustainability',desc:'Agency begins transition to domestic funding with Global Fund GC7 N-THRIP grant.' },
]

const partners = [
  { name:'NACA',        desc:'National Agency for Control of AIDS — Federal coordination' },
  { name:'UNAIDS',      desc:'Joint UN Programme on HIV/AIDS — Technical support' },
  { name:'PEPFAR',      desc:'US President\'s Emergency Plan for AIDS Relief — Funding' },
  { name:'Global Fund', desc:'Global Fund for AIDS, TB & Malaria — Programme grants' },
  { name:'World Bank',  desc:'International development financing' },
  { name:'SFH Nigeria', desc:'Society for Family Health — Implementation partner' },
  { name:'WHO Nigeria', desc:'World Health Organization — Technical guidance' },
  { name:'UNICEF',      desc:'Children\'s fund — OVC and PMTCT support' },
]

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <div className="page-hero">
        <div className="absolute inset-0 opacity-[0.03]"
          style={{ backgroundImage:'linear-gradient(white 1px,transparent 1px),linear-gradient(90deg,white 1px,transparent 1px)', backgroundSize:'64px 64px' }} />
        <div className="max-w-[1280px] mx-auto px-0 relative z-10">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-7 h-0.5 bg-red-warm" />
            <span className="text-[11px] font-semibold text-white/50 uppercase tracking-[0.14em]">Who We Are</span>
          </div>
          <h1 className="font-serif text-[clamp(36px,5vw,64px)] font-semibold text-white leading-tight mb-4">About KWASACA</h1>
          <p className="text-base text-white/60 max-w-[540px] leading-[1.75] font-light">
            The Kwara State AIDS Control Agency — coordinating the state's multisectoral HIV/AIDS response since 2003.
          </p>
        </div>
      </div>

      {/* Mandate */}
      <section id="mandate" className="py-24 px-12 bg-white">
        <div className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          <div>
            <span className="section-pill mb-5 inline-flex">Our Mandate</span>
            <h2 className="section-heading mb-6">What KWASACA <em className="italic text-green-DEFAULT">Is Mandated</em> To Do</h2>
            <p className="text-[15.5px] text-gray-500 leading-[1.8] mb-6 font-light">
              KWASACA was established as the State Agency for Control of AIDS to coordinate a comprehensive multisectoral response to the HIV/AIDS epidemic in Kwara State. As the state-level counterpart to the National Agency for the Control of AIDS (NACA), our mandate spans coordination, prevention, treatment, research, and advocacy.
            </p>
            <div className="space-y-3">
              {[
                'Plan and coordinate all HIV/AIDS activities across all sectors in Kwara State',
                'Facilitate engagement of all tiers of government on HIV/AIDS prevention, care and support',
                'Advocate for mainstreaming of HIV/AIDS interventions across all sectors',
                'Formulate policies and guidelines on HIV/AIDS at the state level',
                'Support and promote HIV/AIDS research in Kwara State',
                'Mobilize resources and coordinate equitable application for HIV/AIDS activities',
                'Monitor and evaluate all HIV/AIDS activities in the state',
                'Coordinate linkages with national and global HIV/AIDS community',
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3 p-4 bg-gray-50 rounded-xl border border-gray-100 hover:bg-green-pale hover:border-green-light transition-all">
                  <div className="w-2 h-2 rounded-full bg-green-DEFAULT mt-1.5 flex-shrink-0" />
                  <p className="text-sm text-gray-600 font-light leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="space-y-6">
            <div className="bg-green-deep text-white rounded-2xl p-8">
              <h3 className="font-serif text-2xl font-semibold mb-3">Our Vision</h3>
              <p className="text-white/70 leading-[1.75] font-light">A Kwara State free from new HIV infections, AIDS-related deaths, and discrimination — achieving the UNAIDS 95-95-95 targets by 2030.</p>
            </div>
            <div className="bg-green-pale border border-green-light rounded-2xl p-8">
              <h3 className="font-serif text-2xl font-semibold text-ink mb-3">Our Mission</h3>
              <p className="text-gray-500 leading-[1.75] font-light">To coordinate a comprehensive, evidence-based, multisectoral HIV/AIDS response that ensures universal access to prevention, treatment, care and support services for all people in Kwara State.</p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: Shield, label:'Prevention First',     val:'HIV awareness in all 16 LGAs' },
                { icon: Target, label:'Treatment Access',     val:'ART for all who need it' },
                { icon: Award,  label:'Below National Avg',   val:'1% HIV prevalence rate' },
                { icon: Users,  label:'Community Led',        val:'16 LACA committees' },
              ].map(({ icon: Icon, label, val }, i) => (
                <div key={i} className="bg-white border border-gray-200 rounded-xl p-5 text-center">
                  <div className="w-10 h-10 bg-green-pale rounded-lg flex items-center justify-center mx-auto mb-3">
                    <Icon size={18} className="text-green-DEFAULT" />
                  </div>
                  <p className="text-sm font-semibold text-ink mb-1">{label}</p>
                  <p className="text-xs text-gray-400 font-light">{val}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section id="leadership" className="py-24 px-12 bg-cream">
        <div className="max-w-[1280px] mx-auto">
          <div className="text-center mb-14">
            <span className="section-pill mb-4 inline-flex">Leadership</span>
            <h2 className="section-heading">Our <em className="italic text-green-DEFAULT">Leadership</em></h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {leadership.map((l, i) => (
              <div key={i} className="bg-white border border-gray-200 rounded-2xl p-8 text-center hover:shadow-md transition-all">
                <div className="w-20 h-20 rounded-full bg-green-deep flex items-center justify-center text-xl font-bold text-green-400 mx-auto mb-5 font-serif">
                  {l.initials}
                </div>
                <h3 className="font-semibold text-ink text-lg mb-1">{l.name}</h3>
                <p className="text-sm text-gray-400 font-light">{l.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* History / Milestones */}
      <section className="py-24 px-12 bg-white">
        <div className="max-w-[1280px] mx-auto">
          <div className="text-center mb-14">
            <span className="section-pill mb-4 inline-flex">Our History</span>
            <h2 className="section-heading">Key <em className="italic text-green-DEFAULT">Milestones</em></h2>
          </div>
          <div className="relative">
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gray-200 -translate-x-1/2 hidden md:block" />
            <div className="space-y-8">
              {milestones.map((m, i) => (
                <div key={i} className={`flex items-start gap-8 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  <div className={`flex-1 ${i % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                    <div className="bg-white border border-gray-200 rounded-2xl p-6 hover:border-green-light hover:shadow-md transition-all inline-block w-full md:max-w-[360px]">
                      <span className="font-serif text-3xl font-bold text-green-DEFAULT block mb-2">{m.year}</span>
                      <h3 className="font-semibold text-ink mb-2">{m.title}</h3>
                      <p className="text-sm text-gray-400 font-light leading-relaxed">{m.desc}</p>
                    </div>
                  </div>
                  <div className="w-4 h-4 rounded-full bg-green-DEFAULT border-4 border-white shadow-md mt-6 flex-shrink-0 hidden md:block z-10" />
                  <div className="flex-1 hidden md:block" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Partners */}
      <section id="partners" className="py-24 px-12 bg-green-deep text-white">
        <div className="max-w-[1280px] mx-auto">
          <div className="text-center mb-14">
            <span className="inline-flex items-center text-green-400 bg-green-400/10 border border-green-400/20 font-semibold px-3 py-1 rounded-full text-[11px] uppercase tracking-widest mb-4">Partners</span>
            <h2 className="font-serif text-4xl font-semibold text-white">Our Partners & <em className="italic text-green-400">Funders</em></h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {partners.map((p, i) => (
              <div key={i} className="bg-white/[0.06] border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all">
                <h3 className="font-bold text-white text-lg mb-2">{p.name}</h3>
                <p className="text-sm text-white/50 font-light leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
