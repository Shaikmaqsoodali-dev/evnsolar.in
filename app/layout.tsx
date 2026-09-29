import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import './globals.css'
import { SiteFooter } from '@/components/site-chrome'
import { SiteHeader } from '@/components/site-header'
import { Phone } from 'lucide-react'

export const metadata: Metadata = {
  title: 'EV & Solar | EVN Solar Energy Solutions — Charge Forward, Powered by the Sun',
  description: 'EVN Solar Energy Solutions: rooftop & ground-mounted solar, solar carports and EV charging infrastructure. Blue #0083CB + Green #1F8A42 engineered clean technology.',
  generator: 'v0.app',
  icons: {
    icon: [
      { url: '/icon-light-32x32.png', media: '(prefers-color-scheme: light)' },
      { url: '/icon-dark-32x32.png', media: '(prefers-color-scheme: dark)' },
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: [{ media: '(prefers-color-scheme: light)', color: '#F8FAFC' }],
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="bg-[#F8FAFC] text-[#0B1720] antialiased">
        <SiteHeader />
        {children}
        <SiteFooter />
        <a href="tel:+917040506295" aria-label="call" className="fixed bottom-5 right-5 z-50 grid place-items-center rounded-full bg-[#0083CB] p-3.5 text-white shadow-[0_15px_40px_rgba(0,131,203,0.45)] transition hover:bg-[#006FAE]">
          <Phone size={22} />
        </a>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
