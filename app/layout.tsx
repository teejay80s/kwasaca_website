import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import Chatbot from '@/components/layout/Chatbot'
import ThemeToggle from '@/components/ui/ThemeToggle'
import { createClient } from '@/utils/supabase/server'
import { Analytics } from '@vercel/analytics/react'

export const metadata: Metadata = {
  title: { default: 'KWASACA — Kwara State Agency for Control of AIDS', template: '%s | KWASACA' },
  description: 'The official website of the Kwara State Agency for Control of AIDS (KWASACA). HIV prevention, treatment, research and community support across all 16 LGAs of Kwara State, Nigeria.',
  keywords: ['HIV', 'AIDS', 'Kwara State', 'KWASACA', 'Nigeria', 'HIV Testing', 'ART', 'PMTCT'],
  icons: {
    icon: '/kwasaca-logo.png',
    shortcut: '/kwasaca-logo.png',
    apple: '/kwasaca-logo.png',
  },
  openGraph: {
    type: 'website',
    locale: 'en_NG',
    siteName: 'KWASACA',
  },
}

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  const isAdmin = !!user

  return (
    <html lang="en">
      <body>
        <script dangerouslySetInnerHTML={{
          __html: `(function(){try{var t=localStorage.getItem("mobile-theme");if(t==="light")document.body.classList.add("light-theme")}catch(e){}})()`
        }} />
        <Navbar isAdmin={isAdmin} />
        <main>{children}</main>
        <Footer />
        <Chatbot />
        <ThemeToggle />
        <Analytics />
      </body>
    </html>
  )
}
