import type { Metadata } from 'next'
import Link from 'next/link'
import { getAllNews } from '@/lib/sanity'
import { formatDate } from '@/lib/utils'

export const metadata: Metadata = { title: 'News & Events' }

const placeholderNews = [
  { _id:'1', title:'KWASACA Launches Mobile HIV Testing Drive Across Ilorin Metropolis', category:'Press Release', publishedAt:'2025-03-18', excerpt:'The agency has deployed mobile testing units to 12 communities across Ilorin.', slug:{ current:'#' } },
  { _id:'2', title:'World AIDS Day 2025 Planning Meeting Convenes in Ilorin',            category:'Event',         publishedAt:'2025-03-10', excerpt:'Stakeholders gathered to plan this year\'s commemoration activities.',          slug:{ current:'#' } },
  { _id:'3', title:'2024 Annual HIV Situation Report Now Available for Download',         category:'Report',        publishedAt:'2025-02-28', excerpt:'The full state HIV situation analysis report is published on the data portal.', slug:{ current:'#' } },
  { _id:'4', title:'KWASACA Distributes Food Parcels to OVC Families Across 16 LGAs',   category:'Program',       publishedAt:'2025-02-15', excerpt:'Over 800 orphans and vulnerable children received food support.',               slug:{ current:'#' } },
  { _id:'5', title:'Kwara Records Improved ART Adherence Rates — Q4 2024 Report',       category:'Report',        publishedAt:'2025-02-01', excerpt:'Adherence rates improved to 87% across supported facilities in Q4 2024.',      slug:{ current:'#' } },
  { _id:'6', title:'KWASACA Partners with SFH Nigeria on New PMTCT Campaign',           category:'Partnership',   publishedAt:'2025-01-20', excerpt:'A new PMTCT awareness campaign launched in 8 LGAs with SFH support.',          slug:{ current:'#' } },
]

const catColors: Record<string, string> = {
  'Press Release':'bg-red-warm',
  'Event':        'bg-red-warm',
  'Report':       'bg-green-DEFAULT',
  'Program':      'bg-green-glow',
  'Partnership':  'bg-blue-600',
}

export default async function NewsPage() {
  let news: any[] = []
  try { news = await getAllNews() } catch { news = [] }
  if (news.length === 0) news = placeholderNews

  return (
    <>
      <div className="page-hero">
        <div className="absolute inset-0 opacity-[0.03]"
          style={{ backgroundImage:'linear-gradient(white 1px,transparent 1px),linear-gradient(90deg,white 1px,transparent 1px)', backgroundSize:'64px 64px' }} />
        <div className="max-w-[1280px] mx-auto px-0 relative z-10">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-7 h-0.5 bg-red-warm" />
            <span className="text-[11px] font-semibold text-white/50 uppercase tracking-[0.14em]">Stay Informed</span>
          </div>
          <h1 className="font-serif text-[clamp(36px,5vw,64px)] font-semibold text-white leading-tight mb-4">News & Events</h1>
          <p className="text-base text-white/60 max-w-[540px] leading-[1.75] font-light">
            Latest updates, press releases, event announcements and program news from KWASACA.
          </p>
        </div>
      </div>

      <section className="py-24 px-12 bg-white">
        <div className="max-w-[1280px] mx-auto">
          {/* Featured */}
          {news[0] && (
            <Link href={`/news/${news[0].slug?.current || '#'}`}
              className="block border border-gray-200 rounded-2xl overflow-hidden mb-8 group hover:shadow-lg transition-all">
              <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr]">
                <div className="h-64 lg:h-auto relative bg-green-deep min-h-[260px]">
                  <div className="absolute inset-0 opacity-[0.04]"
                    style={{ backgroundImage:'linear-gradient(white 1px,transparent 1px),linear-gradient(90deg,white 1px,transparent 1px)', backgroundSize:'40px 40px' }} />
                  <span className="absolute top-5 left-5 text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded bg-red-warm text-white">Latest</span>
                </div>
                <div className="p-10">
                  <p className="text-[11.5px] text-gray-400 uppercase tracking-wider mb-3 font-medium">
                    {formatDate(news[0].publishedAt)} · {news[0].category}
                  </p>
                  <h2 className="font-serif text-3xl font-semibold text-ink leading-[1.25] mb-4 group-hover:text-green-DEFAULT transition-colors">{news[0].title}</h2>
                  <p className="text-[15px] text-gray-500 leading-[1.75] font-light mb-6">{news[0].excerpt}</p>
                  <span className="text-sm font-semibold text-green-DEFAULT">Read full story →</span>
                </div>
              </div>
            </Link>
          )}

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {news.slice(1).map((n: any) => (
              <Link key={n._id} href={`/news/${n.slug?.current || '#'}`}
                className="card group flex flex-col">
                <div className="h-[140px] bg-green-pale relative flex-shrink-0">
                  <div className="absolute inset-0"
                    style={{ backgroundImage:'repeating-linear-gradient(-45deg,transparent 0px,transparent 12px,rgba(20,83,45,0.05) 12px,rgba(20,83,45,0.05) 13px)' }} />
                  <span className={`absolute top-3 left-3 text-[9.5px] font-bold uppercase tracking-wider px-2 py-1 rounded text-white ${catColors[n.category] || 'bg-green-DEFAULT'}`}>
                    {n.category}
                  </span>
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <p className="text-[11px] text-gray-400 uppercase tracking-wide mb-2 font-medium">{formatDate(n.publishedAt)}</p>
                  <h3 className="font-serif text-lg font-semibold text-ink leading-[1.35] mb-3 group-hover:text-green-DEFAULT transition-colors flex-1">{n.title}</h3>
                  {n.excerpt && <p className="text-sm text-gray-400 font-light leading-relaxed mb-4">{n.excerpt}</p>}
                  <span className="text-[13px] font-semibold text-green-DEFAULT flex items-center gap-1.5">Read more →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
