'use client'
import { useEffect } from 'react'

export default function ScrollReveal() {
  useEffect(() => {
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) e.target.classList.add('visible')
      })
    }, { threshold: 0.12 })
    document.querySelectorAll('.reveal').forEach((el) => obs.observe(el))

    const cnt = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting && !(e.target as HTMLElement).dataset.counted) {
          const el = e.target as HTMLElement
          el.dataset.counted = '1'
          const t = parseFloat(el.dataset.target || '0')
          const f = t % 1 !== 0
          const d = 1500
          const s = performance.now()
          const u = (n: number) => {
            const p = Math.min((n - s) / d, 1)
            const ev = 1 - Math.pow(1 - p, 3)
            const v = ev * t
            el.textContent = f ? v.toFixed(1) : Math.round(v).toString()
            if (p < 1) requestAnimationFrame(u)
          }
          requestAnimationFrame(u)
        }
      })
    }, { threshold: 0.5 })
    document.querySelectorAll('.count').forEach((el) => cnt.observe(el))

    return () => { obs.disconnect(); cnt.disconnect() }
  }, [])

  return null
}
