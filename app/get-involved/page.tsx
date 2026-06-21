import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Heart, Building, DollarSign, Users } from 'lucide-react'

export const metadata: Metadata = { title: 'Get Involved' }

const ways = [
  {
    icon: Building, color:'bg-green-pale border-green-light', iconColor:'text-green-DEFAULT',
    title:'NGOs & CSOs', subtitle:'Civil Society Partners',
    desc:'If your organization works on HIV/AIDS, health, or community welfare, partner with KWASACA to scale impact across Kwara State. We provide technical support, data access, and coordination frameworks.',
    cta:'Apply for Partnership', href:'/contact?type=partnership',
    benefits:['Technical and programmatic support','Data sharing and joint reporting','Co-implementation of programs','Access to training and capacity building'],
  },
  {
    icon: DollarSign, color:'bg-amber-50 border-amber-100', iconColor:'text-amber-600',
    title:'Donors & Funders', subtitle:'Funding Partners',
    desc:'Support Kwara State\'s HIV response through direct funding of KWASACA programs. All funds are managed transparently with full reporting to donors.',
    cta:'Explore Funding Opportunities', href:'/contact?type=donor',
    benefits:['Full program reporting and accountability','Brand recognition in program communications','Joint press releases and visibility','Tax documentation where applicable'],
  },
  {
    icon: Heart, color:'bg-red-pale border-red-100', iconColor:'text-red-warm',
    title:'Volunteers', subtitle:'Community Champions',
    desc:'Join KWASACA\'s volunteer network to support HIV testing drives, community sensitization events, and administrative work at our Ilorin office.',
    cta:'Apply to Volunteer', href:'/contact?type=volunteer',
    benefits:['HIV/AIDS training and certification','Community health experience','Reference letters upon completion','Network with public health professionals'],
  },
  {
    icon: Users, color:'bg-purple-50 border-purple-100', iconColor:'text-purple-600',
    title:'Faith Organizations', subtitle:'Religious Leaders',
    desc:'Faith leaders play a critical role in reducing HIV stigma. KWASACA works with mosques, churches, and other faith bodies to integrate HIV messaging into religious activities.',
    cta:'Join the Faith Network', href:'/contact?type=faith',
    benefits:['HIV sensitization training for leaders','Educational materials in Hausa & English','Community testing event support','Partnership certificates'],
  },
]

export default function GetInvolvedPage() {
  return (
    <>
      <div className="page-hero">
        <div className="absolute inset-0 opacity-[0.03]"
          style={{ backgroundImage:'linear-gradient(white 1px,transparent 1px),linear-gradient(90deg,white 1px,transparent 1px)', backgroundSize:'64px 64px' }} />
        <div className="max-w-[1280px] mx-auto px-0 relative z-10">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-7 h-0.5 bg-red-warm" />
            <span className="text-[11px] font-semibold text-white/50 uppercase tracking-[0.14em]">Join The Fight</span>
          </div>
          <h1 className="font-serif text-[clamp(36px,5vw,64px)] font-semibold text-white leading-tight mb-4">Get Involved</h1>
          <p className="text-base text-white/60 max-w-[540px] leading-[1.75] font-light">
            Whether you are an NGO, donor, volunteer, or faith leader — there is a place for you in Kwara's HIV response.
          </p>
        </div>
      </div>

      <section className="py-24 px-12 bg-white">
        <div className="max-w-[1280px] mx-auto">
          <div className="text-center mb-16">
            <span className="section-pill mb-4 inline-flex">How You Can Help</span>
            <h2 className="section-heading">Ways to <em className="italic text-green-DEFAULT">Get Involved</em></h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {ways.map(({ icon: Icon, color, iconColor, title, subtitle, desc, cta, href, benefits }, i) => (
              <div key={i} className={`border ${color} rounded-2xl p-10 hover:shadow-lg transition-all`}>
                <div className={`w-14 h-14 ${color} border rounded-2xl flex items-center justify-center mb-6`}>
                  <Icon size={24} className={iconColor} />
                </div>
                <div className="mb-1">
                  <span className="text-[10px] font-semibold uppercase tracking-widest text-gray-400">{subtitle}</span>
                </div>
                <h2 className="font-serif text-2xl font-semibold text-ink mb-4">{title}</h2>
                <p className="text-[15px] text-gray-500 leading-[1.75] mb-6 font-light">{desc}</p>
                <div className="space-y-2 mb-8">
                  {benefits.map((b, j) => (
                    <div key={j} className="flex items-center gap-2.5 text-sm text-gray-600">
                      <div className="w-1.5 h-1.5 rounded-full bg-green-DEFAULT flex-shrink-0" />
                      <span className="font-light">{b}</span>
                    </div>
                  ))}
                </div>
                <Link href={href} className="btn-green inline-flex items-center gap-2 text-sm rounded-lg px-6 py-3">
                  {cta} <ArrowRight size={15} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact statement */}
      <section className="py-20 px-12 bg-green-deep text-white">
        <div className="max-w-[1280px] mx-auto text-center">
          <h2 className="font-serif text-4xl font-semibold text-white mb-4">Together We Can End AIDS in Kwara</h2>
          <p className="text-white/60 font-light max-w-xl mx-auto mb-10 leading-[1.75]">
            Join hundreds of organizations, volunteers, and community champions already working with KWASACA to achieve an AIDS-free Kwara State by 2030.
          </p>
          <Link href="/contact" className="inline-flex items-center gap-2 bg-white text-ink font-bold px-10 py-4 rounded-xl hover:bg-green-light hover:text-green-deep transition-all text-sm">
            Get in Touch Today <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  )
}
