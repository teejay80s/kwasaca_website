import type { Metadata } from 'next'
import { notFound }      from 'next/navigation'
import Link              from 'next/link'
import { getNewsBySlug, getAllNews } from '@/lib/sanity'
import { formatDate }    from '@/lib/utils'
import { ArrowLeft }     from 'lucide-react'

export async function generateStaticParams() {
  try {
    const news = await getAllNews()
    return news.map((n: any) => ({ slug: n.slug?.current }))
  } catch { return [] }
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  try {
    const article = await getNewsBySlug(params.slug)
    if (!article) return { title: 'Article Not Found' }
    return { title: article.title, description: article.excerpt }
  } catch { return { title: 'News Article' } }
}

export default async function NewsArticlePage({ params }: { params: { slug: string } }) {
  let article: any = null
  try { article = await getNewsBySlug(params.slug) } catch {}
  if (!article) notFound()

  return (
    <>
      <div className="page-hero py-16">
        <div className="absolute inset-0 opacity-[0.03]"
          style={{ backgroundImage:'linear-gradient(white 1px,transparent 1px),linear-gradient(90deg,white 1px,transparent 1px)', backgroundSize:'64px 64px' }} />
        <div className="max-w-[900px] mx-auto px-0 relative z-10">
          <Link href="/news" className="inline-flex items-center gap-2 text-white/50 hover:text-white text-sm mb-6 transition-colors">
            <ArrowLeft size={14} /> Back to News
          </Link>
          <div className="flex items-center gap-3 mb-4">
            <span className="text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded bg-red-warm text-white">
              {article.category || 'News'}
            </span>
            <span className="text-white/40 text-sm">{formatDate(article.publishedAt)}</span>
          </div>
          <h1 className="font-serif text-[clamp(28px,4vw,52px)] font-semibold text-white leading-tight">
            {article.title}
          </h1>
          {article.author && (
            <div className="flex items-center gap-3 mt-6">
              <div className="w-8 h-8 rounded-full bg-green-light flex items-center justify-center text-xs font-bold text-green-mid">
                {article.author.charAt(0)}
              </div>
              <span className="text-white/50 text-sm">{article.author}</span>
            </div>
          )}
        </div>
      </div>

      <section className="py-16 px-12 bg-white">
        <div className="max-w-[900px] mx-auto">
          {article.excerpt && (
            <p className="text-xl text-gray-500 font-light leading-[1.75] mb-10 pb-10 border-b border-gray-100">
              {article.excerpt}
            </p>
          )}
          <div className="space-y-5">
            {Array.isArray(article.body)
              ? article.body
                  .filter((b: any) => b._type === 'block')
                  .map((b: any, i: number) => (
                    <p key={i} className="text-[16px] text-gray-600 leading-[1.85] font-light">
                      {b.children?.map((c: any) => c.text).join('')}
                    </p>
                  ))
              : <p className="text-gray-400 font-light">Article content will appear here once published in the CMS.</p>
            }
          </div>
          <div className="mt-12 pt-8 border-t border-gray-100">
            <Link href="/news" className="link-arrow">
              <ArrowLeft size={14} /> Back to all news
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
