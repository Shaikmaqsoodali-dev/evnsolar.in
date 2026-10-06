import type { Metadata, Viewport } from 'next'
import './globals.css'
import { SiteFooter } from '@/components/site-chrome'
import { SiteHeader } from '@/components/site-header'
import { BackToTop, FloatCta, MobileCtaBar } from '@/components/ux-bits'
import { ScrollProgress } from '@/components/motion'

/* SYSTEM TYPE — Arial / Inter system stacks only, no Google Fonts. */

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
