'use client'
import { useState, useRef, useEffect } from 'react'
import { MessageCircle, X, Send, Bot } from 'lucide-react'

type Message = { role: 'user' | 'assistant'; content: string }

const suggestions = [
  '📍 Find a testing center near me',
  '💊 Learn about ART treatment',
  '👶 What is PMTCT?',
  '📞 How do I contact KWASACA?',
]

export default function Chatbot() {
  const [open, setOpen]       = useState(false)
  const [messages, setMessages] = useState<Message[]>([])
  const [input, setInput]     = useState('')
  const [loading, setLoading] = useState(false)
  const [shown, setShown]     = useState(false)
  const bottomRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const t = setTimeout(() => setShown(true), 3000)
    return () => clearTimeout(t)
  }, [])

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  async function send(text?: string) {
    const userMsg = text || input
    if (!userMsg.trim()) return
    setInput('')
    setMessages(prev => [...prev, { role: 'user', content: userMsg }])
    setLoading(true)
    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: [...messages, { role: 'user', content: userMsg }] }),
      })
      const data = await res.json()
      if (!res.ok) {
        setMessages(prev => [...prev, { role: 'assistant', content: data.error || 'Sorry, I encountered an error. Please try again or contact us directly.' }])
      } else {
        setMessages(prev => [...prev, { role: 'assistant', content: data.message }])
      }
    } catch {
      setMessages(prev => [...prev, { role: 'assistant', content: 'Sorry, I encountered an error. Please try again or contact us directly.' }])
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="fixed bottom-8 right-8 z-[1000] flex flex-col items-end gap-3">

      {/* Popup */}
      {open && (
        <div className="w-[340px] border border-white/10 rounded-2xl shadow-2xl overflow-hidden flex flex-col"
          style={{ background: '#0d3320', maxHeight: '520px', animation: 'popUp .25s ease' }}>

          {/* Header */}
          <div className="flex items-center gap-3 px-5 py-4" style={{ background: '#0a2417' }}>
            <div className="w-9 h-9 bg-green-base/40 rounded-xl flex items-center justify-center">
              <Bot size={18} className="text-green-glow" />
            </div>
            <div className="flex-1">
              <p className="text-sm font-semibold text-white">KWASACA Assistant</p>
              <p className="text-[11px] text-white/40 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
                Online · AI Powered
              </p>
            </div>
            <button onClick={() => setOpen(false)} className="text-white/30 hover:text-white transition-colors">
              <X size={18} />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3" style={{ background: '#0d3320', minHeight: '200px', maxHeight: '300px' }}>
            {messages.length === 0 ? (
              <div className="space-y-3">
                <div className="bg-white/5 border border-white/10 rounded-2xl rounded-bl-sm px-4 py-3 text-[13px] text-white/80 leading-relaxed">
                  Hi! I&apos;m the KWASACA AI Assistant. I can help you find testing centers, learn about HIV services, or answer questions about our programs. How can I help you today?
                </div>
                <div className="space-y-2">
                  {suggestions.map((s, i) => (
                    <button key={i} onClick={() => send(s)}
                      className="w-full text-left text-[12px] text-white/70 border border-white/10 rounded-lg px-3 py-2 hover:bg-white/10 transition-colors font-medium"
                      style={{ background: 'rgba(20,83,45,0.4)' }}>
                      {s}
                    </button>
                  ))}
                </div>
              </div>
            ) : (
              messages.map((m, i) => (
                <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[80%] px-4 py-2.5 rounded-2xl text-[13px] leading-relaxed
                    ${m.role === 'user'
                      ? 'bg-green-base text-white rounded-br-sm'
                      : 'bg-white/10 border border-white/10 text-white/90 rounded-bl-sm'}`}>
                    {m.content}
                  </div>
                </div>
              ))
            )}
            {loading && (
              <div className="flex justify-start">
                <div className="bg-white/10 border border-white/10 rounded-2xl rounded-bl-sm px-4 py-3">
                  <div className="flex gap-1">
                    {[0,1,2].map(i => (
                      <span key={i} className="w-1.5 h-1.5 rounded-full bg-white/30"
                        style={{ animation: `blink 1.4s ${i * 0.2}s infinite` }} />
                    ))}
                  </div>
                </div>
              </div>
            )}
            <div ref={bottomRef} />
          </div>

          {/* Input */}
          <div className="px-4 py-3 border-t border-white/10 flex gap-2" style={{ background: '#0a2417' }}>
            <input
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={e => e.key === 'Enter' && send()}
              placeholder="Ask me anything..."
              className="flex-1 text-sm bg-white/5 border border-white/10 rounded-lg px-3 py-2 outline-none text-white placeholder:text-white/30 focus:border-green-glow/50"
            />
            <button onClick={() => send()}
              className="w-9 h-9 bg-green-base rounded-lg flex items-center justify-center hover:bg-green-mid transition-colors flex-shrink-0">
              <Send size={15} className="text-white" />
            </button>
          </div>
        </div>
      )}

      {/* FAB Button */}
      {shown && (
        <button onClick={() => setOpen(!open)}
          className="w-14 h-14 rounded-full bg-green-base flex items-center justify-center shadow-xl hover:bg-green-mid transition-all hover:scale-105 relative"
          style={{ boxShadow: '0 6px 24px rgba(20,83,45,0.35)' }}>
          {open
            ? <X size={22} className="text-white" />
            : <MessageCircle size={24} className="text-white" />
          }
          {!open && (
            <span className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-red-warm rounded-full border-2 border-white text-[9px] text-white flex items-center justify-center font-bold">1</span>
          )}
        </button>
      )}
    </div>
  )
}
