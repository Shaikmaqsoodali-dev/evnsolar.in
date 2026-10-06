'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { ArrowRight, ArrowUp, ChevronRight, Phone } from 'lucide-react'
import { Reveal as MotionReveal } from '@/components/motion'

export function Reveal({
  children,
  className = '',
  delay = 0,
}: {
  children: React.ReactNode
  className?: string
  delay?: number
}) {
  return (
    <MotionReveal variant="up" className={className} delay={delay}>
      {children}
    </MotionReveal>
  )
}

export function Breadcrumbs({ trail, dark = false }: { trail: [string, string][]; dark?: boolean }) {
  return (
    <nav aria-label="Breadcrumb" className="mb-5 flex flex-wrap items-center gap-1.5 text-[13px]">
      <Link href="/" className={`font-medium ${dark ? 'text-white/70 hover:text-white' : 'text-[#54687A] hover:text-[#0B6AA0]'}`}>
        Home
      </Link>
      {trail.map(([label, href], i) => {
        const last = i === trail.length - 1
        return (
          <span key={label} className="flex items-center gap-1.5">
            <ChevronRight size={13} className={dark ? 'text-white/40' : 'text-[#93A5B5]'} />
            {last ? (
              <span aria-current="page" className={`font-semibold ${dark ? 'text-white' : 'text-[#072A45]'}`}>
                {label}
              </span>
            ) : (
              <Link href={href} className={`font-medium ${dark ? 'text-white/70 hover:text-white' : 'text-[#54687A] hover:text-[#0B6AA0]'}`}>
                {label}
              </Link>
            )}
          </span>
        )
      })}
    </nav>
  )
}

export function BackToTop() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  if (!show) return null

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label="Back to top"
      className="fixed bottom-[124px] right-4 z-50 grid size-11 place-items-center bg-[#072A45] text-white shadow-lg transition-colors hover:bg-[#33A94F] hover:text-[#072A45] sm:bottom-[100px] sm:right-6"
      style={{ borderRadius: 8 }}
    >
      <ArrowUp size={19} />
    </button>
  )
}

export function FloatCta() {
  const pathname = usePathname()
  // Redundant on the contact page itself.
  if (pathname === '/contact') return null

  return (
    <Link
      href="/contact"
      aria-label="Get a free quote"
      className="btn-shine font-display fixed bottom-[66px] right-4 z-50 flex items-center gap-2 rounded-lg bg-[#072A45] py-3 pl-4 pr-4 text-[13px] font-semibold uppercase tracking-[0.06em] text-white shadow-[0_12px_32px_rgba(7,42,69,0.45)] transition-all hover:bg-[#33A94F] hover:text-[#072A45] sm:bottom-6 sm:right-6 sm:py-3.5 sm:pl-5 sm:pr-5"
      style={{ borderRadius: 8 }}
    >
      <span className="relative flex size-2 shrink-0" aria-hidden>
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#62D984] opacity-75 motion-reduce:animate-none" />
        <span className="relative inline-flex size-2 rounded-full bg-[#62D984]" />
      </span>
      <span className="sm:hidden">Free Quote</span>
      <span className="hidden sm:inline">Get Free Quote</span>
      <ArrowRight size={15} />
    </Link>
  )
}

export function MobileCtaBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-2 border-t border-[#D9E2EA] bg-white/95 backdrop-blur sm:hidden">
      <a
        href="tel:+917040506295"
        className="font-display flex items-center justify-center gap-2 py-3.5 text-[13px] font-semibold uppercase tracking-[0.06em] text-[#072A45]"
      >
        <Phone size={16} className="text-[#33A94F]" /> Call now
      </a>
      <Link
        href="/contact"
        className="font-display flex items-center justify-center bg-[#072A45] py-3.5 text-[13px] font-semibold uppercase tracking-[0.06em] text-white"
      >
        Get free quote
      </Link>
    </div>
  )
}

export function Faq({ items }: { items: [string, string][] }) {
  return (
    <div className="divide-y divide-[#D9E2EA] border-y border-[#D9E2EA]">
      {items.map(([q, a]) => (
        <details key={q} className="group py-5">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-[15px] font-semibold text-[#072A45] [&::-webkit-details-marker]:hidden">
            {q}
            <span className="grid size-7 shrink-0 place-items-center border border-[#C3D2DE] text-[18px] font-normal leading-none text-[#0B6AA0] transition-colors group-open:border-[#072A45] group-open:bg-[#072A45] group-open:text-[#62D984]" style={{ borderRadius: 6 }}>
              <span className="group-open:hidden">+</span>
              <span className="hidden group-open:inline">−</span>
            </span>
          </summary>
          <p className="mt-3 max-w-2xl text-[14.5px] leading-relaxed text-[#54687A]">{a}</p>
        </details>
      ))}
    </div>
  )
}
