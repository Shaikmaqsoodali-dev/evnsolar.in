import type { Metadata, Viewport } from 'next'
import { Space_Grotesk, Inter, DM_Serif_Display, IBM_Plex_Mono } from 'next/font/google'
import './globals.css'
import { SiteFooter } from '@/components/site-chrome'
import { SiteHeader } from '@/components/site-header'
import { BackToTop, FloatCta, MobileCtaBar } from '@/components/ux-bits'
import { ScrollProgress } from '@/components/motion'

/* BODY - Inter: paragraphs, lists, UI text. Readable at 14-16px. */
const body = Inter({
  subsets: ['latin'],
  variable: '--font-body',
  weight: ['400', '500', '600'],
  display: 'swap',
})
/* DISPLAY - Space Grotesk: headings, numbers, nav, buttons only. Never body copy. */
const display = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-display',
  weight: ['500', '600', '700'],
  display: 'swap',
})
const grot = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-grot',
  weight: ['500', '600', '700'],
  display: 'swap',
})
/* QUOTES ONLY - DM Serif italic for testimonial quotes. Nowhere else. */
const serifEd = DM_Serif_Display({
  subsets: ['latin'],
  variable: '--font-serif-ed',
  style: ['normal', 'italic'],
  weight: ['400'],
  display: 'swap',
})
/* DATA ONLY - IBM Plex Mono: stat numbers labels + footer meta. Not eyebrows. */
const tech = IBM_Plex_Mono({
  subsets: ['latin'],
  variable: '--font-tech',
  weight: ['400', '500'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'EVN Solar Energy Solutions - Rooftop Solar & EV Charging, Maharashtra',
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
  themeColor: '#071D26',
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${body.variable} ${display.variable} ${grot.variable} ${serifEd.variable} ${tech.variable}`}>
      <body className="bg-white text-[#071D26] antialiased">
        <ScrollProgress />
        <SiteHeader />
        {children}
        <SiteFooter />
        <BackToTop />
        <FloatCta />
        <MobileCtaBar />
        <div className="h-[54px] bg-[#071D26] sm:hidden" aria-hidden />
      </body>
    </html>
  )
}
