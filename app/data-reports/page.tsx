import type { Metadata } from 'next'
import { Download, FileText, BarChart3, TrendingDown } from 'lucide-react'
import { getAllReports } from '@/lib/sanity'

export const metadata: Metadata = { title: 'Data & Reports' }

const placeholderReports = [
  { _id:'1', title:'2024 Annual HIV Situation Report — Kwara State',      year:2024, category:'Annual Report',  description:'Comprehensive annual review of HIV response indicators across all 16 LGAs.' },
  { _id:'2', title:'Q3 2024 HIV Programme Implementation Report',          year:2024, category:'Quarterly',     description:'Quarterly progress report on ART, PMTCT and prevention program outputs.' },
  { _id:'3', title:'Kwara State HIV Fact Sheet 2024',                       year:2024, category:'Fact Sheet',    description:'Key HIV statistics and epidemiological data for Kwara State.' },
  { _id:'4', title:'2023 Annual HIV Situation Report — Kwara State',      year:2023, category:'Annual Report',  description:'Full year review with case studies and program achievements.' },
  { _id:'5', title:'PMTCT Program Performance Report 2023',                year:2023, category:'Program Report', description:'Mother-to-child transmission prevention program outcomes and analysis.' },
  { _id:'6', title:'OVC Program Assessment Report 2023',                   year:2023, category:'Program Report', description:'Orphans and Vulnerable Children program reach and impact assessment.' },
]

const keyStats = [
  { icon: TrendingDown, num:'1.0%',  label:'HIV Prevalence',     sub:'Kwara State 2024', color:'text-green-DEFAULT', bg:'bg-green-pale' },
  { icon: BarChart3,    num:'48K+',  label:'People Reached',     sub:'2024 programs',    color:'text-blue-600',      bg:'bg-blue-50' },
  { icon: FileText,     num:'87%',   label:'ART Adherence Rate', sub:'Q4 2024',           color:'text-green-DEFAULT', bg:'bg-green-pale' },
  { icon: BarChart3,    num:'16',    label:'LGAs with Services', sub:'Full statewide coverage', color:'text-purple-600', bg:'bg-purple-50' },
]

export default async function DataReportsPage() {
  let reports: any[] = []
  try { reports = await getAllReports() } catch { reports = [] }
  if (reports.length === 0) reports = placeholderReports

  return (
    <>
      <div className="page-hero">
        <div className="absolute inset-0 opacity-[0.03]"
          style={{ backgroundImage:'linear-gradient(white 1px,transparent 1px),linear-gradient(90deg,white 1px,transparent 1px)', backgroundSize:'64px 64px' }} />
        <div className="max-w-[1280px] mx-auto px-0 relative z-10">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-7 h-0.5 bg-red-warm" />
            <span className="text-[11px] font-semibold text-white/50 uppercase tracking-[0.14em]">Evidence & Transparency</span>
          </div>
          <h1 className="font-serif text-[clamp(36px,5vw,64px)] font-semibold text-white leading-tight mb-4">Data & Reports</h1>
          <p className="text-base text-white/60 max-w-[540px] leading-[1.75] font-light">
            HIV prevalence statistics, annual reports, program data, and research publications from KWASACA.
          </p>
        </div>
      </div>

      {/* Key stats */}
      <section className="py-16 px-12 bg-white border-b border-gray-100">
        <div className="max-w-[1280px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
          {keyStats.map(({ icon: Icon, num, label, sub, color, bg }, i) => (
            <div key={i} className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-md transition-all">
              <div className={`w-11 h-11 ${bg} rounded-xl flex items-center justify-center mb-4`}>
                <Icon size={20} className={color} />
              </div>
              <div className={`font-serif text-4xl font-bold ${color} leading-none mb-1`}>{num}</div>
              <div className="text-sm font-semibold text-ink mb-0.5">{label}</div>
              <div className="text-xs text-gray-400 font-light">{sub}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Reports */}
      <section className="py-24 px-12 bg-cream">
        <div className="max-w-[1280px] mx-auto">
          <div className="flex justify-between items-end mb-10 gap-4">
            <div>
              <span className="section-pill mb-4 inline-flex">Publications</span>
              <h2 className="section-heading">Reports & <em className="italic text-green-DEFAULT">Publications</em></h2>
            </div>
          </div>
          <div className="space-y-4">
            {reports.map((r: any) => (
              <div key={r._id}
                className="bg-white border border-gray-200 rounded-2xl p-6 flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 hover:border-green-light hover:shadow-md transition-all group">
                <div className="w-14 h-14 bg-green-pale border border-green-light rounded-xl flex items-center justify-center flex-shrink-0">
                  <FileText size={22} className="text-green-DEFAULT" />
                </div>
                <div className="flex-1 min-w-0 w-full">
                  <div className="flex items-center gap-3 mb-1">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-green-mid bg-green-light px-2 py-0.5 rounded">{r.category}</span>
                    <span className="text-[11px] text-gray-400">{r.year}</span>
                  </div>
                  <h3 className="text-[15px] font-semibold text-ink mb-1 group-hover:text-green-DEFAULT transition-colors sm:truncate">{r.title}</h3>
                  <p className="text-sm text-gray-400 font-light">{r.description}</p>
                </div>
                <a href={r.fileUrl || '#'}
                  className="flex items-center gap-2 text-sm font-semibold text-green-DEFAULT border-2 border-green-DEFAULT px-4 py-2 rounded-lg hover:bg-green-DEFAULT hover:text-white transition-all flex-shrink-0">
                  <Download size={15} /> Download
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* National data link */}
      <section className="py-16 px-12 bg-green-deep text-white">
        <div className="max-w-[1280px] mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h2 className="font-serif text-2xl font-semibold text-white mb-2">Access National HIV Data</h2>
            <p className="text-white/60 font-light text-sm max-w-md">For national HIV prevalence data, NAIIS reports and federal guidelines, visit the NACA data portal.</p>
          </div>
          <a href="https://naca.gov.ng" target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white text-ink font-bold px-8 py-3.5 rounded-xl hover:bg-green-light hover:text-green-deep transition-all flex-shrink-0 text-sm">
            Visit NACA Data Portal →
          </a>
        </div>
      </section>
    </>
  )
}
