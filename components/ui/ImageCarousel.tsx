'use client'
import { useState, useEffect } from 'react'

const images = [
  { src: 'https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=800&q=85', alt: 'Community outreach in rural Nigeria' },
  { src: 'https://images.unsplash.com/photo-1509099836639-18ba1795216d?w=800&q=85', alt: 'Women support group gathering' },
  { src: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=800&q=85', alt: 'Children in community program' },
  { src: 'https://images.unsplash.com/photo-1516627145497-ae6968895b40?w=800&q=85', alt: 'Mother and child at health outreach' },
]

export default function ImageCarousel() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length)
    }, 4000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="w-full aspect-[4/5] rounded-[20px] overflow-hidden border border-gray-200 relative bg-gradient-to-br from-green-pale to-green-light">
      {images.map((img, i) => (
        <div
          key={img.src}
          className="absolute inset-0 transition-opacity duration-1000"
          style={{ opacity: i === current ? 1 : 0 }}
        >
          <img
            src={img.src}
            alt={img.alt}
            className="w-full h-full object-cover"
            loading={i === 0 ? undefined : 'lazy'}
          />
        </div>
      ))}
      <div className="absolute inset-0 pointer-events-none" style={{ background: 'linear-gradient(to top, rgba(13,51,32,0.4) 0%, transparent 40%)' }} />
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              i === current ? 'bg-white w-5' : 'bg-white/40 hover:bg-white/60'
            }`}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
