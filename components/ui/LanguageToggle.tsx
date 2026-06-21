'use client'
import { usePathname } from 'next/navigation'

const labels: Record<string, string> = {
  en: 'EN',
  yo: 'Yoruba',
  ha: 'Hausa',
}

export default function LanguageToggle({ current }: { current: string }) {
  const pathname = usePathname()

  const switchTo = (lang: string) => {
    const params = new URLSearchParams(window.location.search)
    params.set('lang', lang)
    const qs = params.toString()
    window.location.href = qs ? `${pathname}?${qs}` : pathname
  }

  const langs = ['en', 'yo', 'ha']

  return (
    <div className="flex items-center gap-1">
      {langs.map((l) => (
        <button
          key={l}
          onClick={() => l !== current && switchTo(l)}
          className={`text-[10px] font-semibold px-2 py-1 rounded transition-colors ${
            l === current
              ? 'bg-green-base text-white'
              : 'text-white/50 hover:text-white hover:bg-white/10'
          }`}
        >
          {labels[l]}
        </button>
      ))}
    </div>
  )
}
