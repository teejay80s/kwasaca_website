"use client"

import { useEffect, useState } from "react"
import { Sun, Moon } from "lucide-react"

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false)
  const [isLight, setIsLight] = useState(false)

  useEffect(() => {
    setMounted(true)
    const saved = localStorage.getItem("mobile-theme")
    if (saved === "light") {
      document.body.classList.add("light-theme")
      setIsLight(true)
    }
  }, [])

  const toggle = () => {
    const next = !isLight
    setIsLight(next)
    document.body.classList.toggle("light-theme", next)
    localStorage.setItem("mobile-theme", next ? "light" : "dark")
  }

  if (!mounted) return null

  return (
    <button
      onClick={toggle}
      className="fixed bottom-5 left-5 z-[1001] w-11 h-11 rounded-full flex items-center justify-center shadow-lg transition-all sm:hidden"
      style={{
        background: isLight ? "#ffffff" : "#0a2212",
        border: `1px solid ${isLight ? "#e5e7eb" : "rgba(255,255,255,0.1)"}`,
        color: isLight ? "#0a1a0e" : "#f0f0e8",
        boxShadow: isLight
          ? "0 2px 12px rgba(0,0,0,0.1)"
          : "0 2px 12px rgba(0,0,0,0.3)",
      }}
      aria-label={isLight ? "Switch to dark mode" : "Switch to light mode"}
    >
      {isLight ? <Moon size={18} /> : <Sun size={18} />}
    </button>
  )
}
