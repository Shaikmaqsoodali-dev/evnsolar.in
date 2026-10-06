import type { Metadata, Viewport } from 'next'
import { Rajdhani, Rubik } from 'next/font/google'
import './globals.css'
import { SiteFooter } from '@/components/site-chrome'
import { SiteHeader } from '@/components/site-header'
import { BackToTop, FloatCta, MobileCtaBar } from '@/components/ux-bits'
import { ScrollProgress } from '@/components/motion'

/* BODY + DISPLAY — SOLOR reference: Rajdhani headings (600/700), Rubik body (400/500). */
const body = Rubik({
  subsets: ['latin'],
  variable: '--font-body',
  weight: ['400', '500', '600'],
  display: 'swap',
})
/* DISPLAY — Rajdhani bold headings like Solor h1–h6. */
const display = Rajdhani({
  subsets: ['latin'],
  variable: '--font-display',
  weight: ['500', '600', '700'],
  display: 'swap',
})
const grot = Rajdhani({
  subsets: ['latin'],
  variable: '--font-grot',
  weight: ['500', '600', '700'],
  display: 'swap',
})
/* SPECIAL TITLES — Rubik for subheadings, like Solor body. */
const serifEd = Rubik({
  subsets: ['latin'],
  variable: '--font-serif-ed',
  weight: ['400', '500'],
  display: 'swap',
})
/* META / BUTTONS — Rajdhani 600 uppercase (Solor buttons). Kept under --font-tech name so existing classes keep working. */
const tech = Rajdhani({
  subsets: ['latin'],
  variable: '--font-tech',
  weight: ['500', '600', '700'],
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
  themeColor: '#072A45',
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${body.variable} ${display.variable} ${grot.variable} ${serifEd.variable} ${tech.variable}`}>
      <body className="bg-white text-[#072A45] antialiased">
        <ScrollProgress />
        <SiteHeader />
        {children}
        <SiteFooter />
        <BackToTop />
        <FloatCta />
        <MobileCtaBar />
        <div className="h-[54px] bg-[#072A45] sm:hidden" aria-hidden />
      </body>
    </html>
  )
}
