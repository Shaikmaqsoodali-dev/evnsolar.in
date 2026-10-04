import type { Metadata, Viewport } from 'next'
import { Manrope, Roboto } from 'next/font/google'
import './globals.css'
import { SiteFooter } from '@/components/site-chrome'
import { SiteHeader } from '@/components/site-header'
import { BackToTop, FloatCta, MobileCtaBar } from '@/components/ux-bits'
import { ScrollProgress } from '@/components/motion'

/* BODY + DISPLAY — SUKI / Energium reference: Manrope everywhere (body 400, headings 700). */
const body = Manrope({
  subsets: ['latin'],
  variable: '--font-body',
  weight: ['400', '500', '600', '700', '800'],
  display: 'swap',
})
/* DISPLAY — same Manrope family, bold headings like SUKI h1–h6. */
const display = Manrope({
  subsets: ['latin'],
  variable: '--font-display',
  weight: ['600', '700', '800'],
  display: 'swap',
})
const grot = Manrope({
  subsets: ['latin'],
  variable: '--font-grot',
  weight: ['400', '500', '600', '700', '800'],
  display: 'swap',
})
/* SPECIAL TITLES — Roboto regular for subheadings / backward titles, like SUKI. */
const serifEd = Roboto({
  subsets: ['latin'],
  variable: '--font-serif-ed',
  weight: ['400', '500'],
  display: 'swap',
})
/* META / BUTTONS — Manrope 500 (SUKI buttons 14px/500). Kept under --font-tech name so existing classes keep working. */
const tech = Manrope({
  subsets: ['latin'],
  variable: '--font-tech',
  weight: ['400', '500', '600', '700'],
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
