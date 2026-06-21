import type { Metadata } from 'next'
import Link from 'next/link'
import { MapPin, ArrowRight } from 'lucide-react'

export const metadata: Metadata = { title: 'Programs & Services' }

const programs = [
  {
    id:'prevention', num:'01', emoji:'🛡️', title:'HIV Prevention',
    summary:'Community-based HIV prevention across all 16 LGAs.',
    details:'Our HIV prevention programs include community sensitization, condom distribution, behavior change communication, and mass awareness campaigns. We engage religious leaders, community heads, and youth organizations to spread accurate HIV/AIDS information.',
    activities:['Condom distribution and promotion','Community sensitization campaigns','School-based HIV education','Behavior Change Communication (BCC)','Key Populations (KP) outreach','Youth HIV prevention programs'],
  },
  {
    id:'art', num:'02', emoji:'💊', title:'Treatment & ART',
    summary:'Antiretroviral therapy for people living with HIV.',
    details:'KWASACA coordinates the delivery of Antiretroviral Therapy (ART) through government health facilities across Kwara State. We ensure that people living with HIV have uninterrupted access to life-saving medications.',
    activities:['ART initiation and monitoring','Viral load monitoring','Adherence counseling and support','Drug supply chain management','Advanced HIV care','Differentiated Service Delivery (DSD)'],
  },
  {
    id:'pmtct', num:'03', emoji:'👶', title:'PMTCT Program',
    summary:'Preventing HIV transmission from mothers to babies.',
    details:'The Prevention of Mother-to-Child Transmission (PMTCT) program ensures HIV-positive pregnant women receive ART to protect their unborn children. We work through antenatal clinics across all 16 LGAs.',
    activities:['Antenatal HIV testing','ART for HIV-positive pregnant women','Postnatal care and infant follow-up','Breastfeeding counseling','Early Infant Diagnosis (EID)','PMTCT training for health workers'],
  },
  {
    id:'testing', num:'04', emoji:'🧪', title:'Testing & Counseling',
    summary:'Free, confidential HIV testing at 30+ facilities.',
    details:'KWASACA coordinates free, confidential HIV testing and counseling (HTC) services at certified facilities across all 16 LGAs. We also run mobile testing drives to reach communities and markets.',
    activities:['Provider-Initiated Testing and Counseling (PITC)','Voluntary Counseling and Testing (VCT)','Mobile HIV testing outreach','Index testing and partner notification','Self-testing kits distribution','HIV status confirmation and linkage to care'],
  },
  {
    id:'ovc', num:'05', emoji:'👨‍👩‍👧', title:'OVC Support',
    summary:'Care for Orphans and Vulnerable Children.',
    details:'The OVC program provides comprehensive care and psychosocial support for Orphans and Vulnerable Children (OVC) affected by HIV/AIDS in Kwara State, working through LACA committees and community structures.',
    activities:['Psychosocial support for OVC families','Food and nutrition support','Educational assistance','Healthcare access facilitation','Economic strengthening for households','Community-based care networks'],
  },
  {
    id:'outreach', num:'06', emoji:'🌍', title:'Community Outreach',
    summary:'Grassroots engagement across Kwara communities.',
    details:'Through our 16 LACA committees, faith-based organizations, and trained community health volunteers, KWASACA brings HIV/AIDS services and information directly to communities at the grassroots level.',
    activities:['LACA committee coordination','Faith-based organization engagement','Community health volunteer training','Market and workplace outreach','Media and radio campaigns','Community HIV sensitization events'],
  },
]

const lgaTestingCenters = [
  'Ilorin East','Ilorin West','Ilorin South','Asa','Baruten','Edu',
  'Ekiti','Ifelodun','Irepodun','Isin','Kaiama','Moro',
  'Offa','Oke-Ero','Oyun','Pategi',
]

export default function ProgramsPage() {
  return (
    <>
      <div className="page-hero">
        <div className="absolute inset-0 opacity-[0.03]"
          style={{ backgroundImage:'linear-gradient(white 1px,transparent 1px),linear-gradient(90deg,white 1px,transparent 1px)', backgroundSize:'64px 64px' }} />
        <div className="max-w-[1280px] mx-auto px-0 relative z-10">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-7 h-0.5 bg-red-warm" />
            <span className="text-[11px] font-semibold text-white/50 uppercase tracking-[0.14em]">What We Do</span>
          </div>
          <h1 className="font-serif text-[clamp(36px,5vw,64px)] font-semibold text-white leading-tight mb-4">Programs & Services</h1>
          <p className="text-base text-white/60 max-w-[540px] leading-[1.75] font-light">
            Comprehensive HIV/AIDS interventions delivered across all 16 Local Government Areas of Kwara State.
          </p>
        </div>
      </div>

      {/* Programs */}
      <section className="py-24 px-12 bg-white">
        <div className="max-w-[1280px] mx-auto space-y-6">
          {programs.map((p, i) => (
            <div key={p.id} id={p.id}
              className="grid grid-cols-1 lg:grid-cols-[auto_1fr] gap-0 border border-gray-200 rounded-2xl overflow-hidden hover:shadow-md transition-all group">
              <div className={`flex items-center justify-center p-10 text-5xl min-w-[140px] ${i % 2 === 0 ? 'bg-green-pale' : 'bg-cream'}`}>
                {p.emoji}
              </div>
              <div className="p-10">
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div>
                    <span className="font-serif text-5xl font-bold text-gray-100 group-hover:text-green-light transition-colors leading-none block mb-2">{p.num}</span>
                    <h2 className="font-serif text-2xl font-semibold text-ink">{p.title}</h2>
                    <p className="text-sm text-gray-400 mt-1">{p.summary}</p>
                  </div>
                </div>
                <p className="text-[15px] text-gray-500 leading-[1.75] font-light mb-6">{p.details}</p>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                  {p.activities.map((a, j) => (
                    <div key={j} className="flex items-center gap-2 text-sm text-gray-600 bg-gray-50 border border-gray-100 rounded-lg px-3 py-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-green-DEFAULT flex-shrink-0" />
                      <span className="font-light">{a}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Testing Centers by LGA */}
      <section id="testing-centers" className="py-24 px-12 bg-cream">
        <div className="max-w-[1280px] mx-auto">
          <div className="text-center mb-14">
            <span className="section-pill mb-4 inline-flex"><MapPin size={12} className="mr-1" /> Testing Centers</span>
            <h2 className="section-heading">Find a Testing Center <em className="italic text-green-DEFAULT">Near You</em></h2>
            <p className="text-gray-400 mt-3 font-light max-w-md mx-auto text-sm">Free and confidential HIV testing available in all 16 LGAs of Kwara State.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-10">
            {lgaTestingCenters.map(lga => (
              <div key={lga} className="bg-white border border-gray-200 rounded-xl px-5 py-4 flex items-center gap-3 hover:border-green-DEFAULT hover:shadow-sm transition-all cursor-pointer group">
                <MapPin size={16} className="text-green-DEFAULT flex-shrink-0" />
                <div>
                  <p className="text-sm font-semibold text-ink">{lga}</p>
                  <p className="text-[11px] text-gray-400">LGA Testing Center</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center">
            <Link href="/contact" className="btn-outline-green">
              Contact Us for Exact Facility Address <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
