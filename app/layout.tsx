import type { Metadata, Viewport } from 'next'
import './globals.css'
import { SiteFooter } from '@/components/site-chrome'
import { SiteHeader } from '@/components/site-header'
import { BackToTop, FloatCta, MobileCtaBar } from '@/components/ux-bits'
import { ScrollProgress } from '@/components/motion'

/* AGENCY TYPE SYSTEM — loaded via Google Fonts <link> (Turbopack-safe).
   Display: Archivo 700/800 tight. Body: Plus Jakarta Sans. Accent: Instrument Serif italic. */

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
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Archivo:wght@600;700;800&family=Plus+Jakarta+Sans:wght@400;500;600;700&family=Instrument+Serif:ital@0;1&display=swap"
          rel="stylesheet"
        />
      </head>
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
