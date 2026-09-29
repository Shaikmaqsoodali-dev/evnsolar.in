import type { Metadata, Viewport } from 'next'
import { Inter, Montserrat, Archivo, Fraunces } from 'next/font/google'
import './globals.css'
import { SiteFooter } from '@/components/site-chrome'
import { SiteHeader } from '@/components/site-header'
import { BackToTop, MobileCtaBar } from '@/components/ux-bits'

const body = Inter({ subsets: ['latin'], variable: '--font-body', display: 'swap' })
const display = Montserrat({
  subsets: ['latin'],
  variable: '--font-display',
  weight: ['500', '600', '700', '800'],
  display: 'swap',
})
/* Editorial grotesk for oversized headlines — tight, high-contrast scale */
const grot = Archivo({
  subsets: ['latin'],
  variable: '--font-grot',
  weight: ['500', '700', '800', '900'],
  display: 'swap',
})
/* Editorial serif for italic accent words + pull quotes */
const serifEd = Fraunces({
  subsets: ['latin'],
  variable: '--font-serif-ed',
  style: ['normal', 'italic'],
  weight: ['400', '500', '600'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'EVN Solar Energy Solutions — Rooftop Solar & EV Charging, Maharashtra',
  description:
    'EVN Solar Energy Solutions designs and installs rooftop solar, ground-mounted plants, solar carports and EV charging infrastructure. Site survey, DISCOM liaison, subsidy support and 5-year service.',
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
  themeColor: '#ffffff',
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${body.variable} ${display.variable} ${grot.variable} ${serifEd.variable}`}>
      <body className="bg-white text-[#14242E] antialiased">
        <SiteHeader />
        {children}
        <SiteFooter />
        <BackToTop />
        <MobileCtaBar />
        <div className="h-[54px] bg-white sm:hidden" aria-hidden />
      </body>
    </html>
  )
}
