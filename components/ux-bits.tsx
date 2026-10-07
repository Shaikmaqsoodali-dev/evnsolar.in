'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { ChevronRight, Phone } from 'lucide-react'
import { BrandArrow } from '@/components/brand-arrow'
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
      <BrandArrow direction="up" size={19} />
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
      <BrandArrow size={15} />
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
      {items.map(([q, a], i) => (
        <details key={q} className="group py-5" name="faq">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-[15px] font-semibold text-[#072A45] [&::-webkit-details-marker]:hidden">
            <span className="flex items-center gap-3">
              <span className="hidden text-[12px] font-bold text-[#93A5B5] sm:inline">
                {String(i + 1).padStart(2, '0')}
              </span>
              {q}
            </span>
            <span className="grid size-8 shrink-0 place-items-center border border-[#C3D2DE] text-[18px] font-normal leading-none text-[#0B6AA0] transition-all duration-300 group-open:rotate-180 group-open:border-[#072A45] group-open:bg-[#072A45] group-open:text-[#62D984]" style={{ borderRadius: 8 }}>
              <span className="group-open:hidden">+</span>
              <span className="hidden group-open:inline">−</span>
            </span>
          </summary>
          <div className="faq-a">
            <div>
              <p className="max-w-2xl pt-3 text-[14.5px] leading-relaxed text-[#54687A]">{a}</p>
            </div>
          </div>
        </details>
      ))}
    </div>
  )
}

/* Agency trust strip — rating, delivery proof, service promise */
export function TrustBar() {
  const cells = [
    { k: '4.9★ Google', v: '1,000+ reviews across Nashik–Malegaon' },
    { k: '1,607 MWp', v: 'Turnkey EPC delivered since 2020' },
    { k: '5,700+ acres', v: 'Solar-park land acquired for clients' },
    { k: '5-yr service', v: 'Monitoring + on-call O&M included' },
  ]
  return (
    <section aria-label="Why customers trust EVN" className="border-b border-[#D9E2EA] bg-white">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-px overflow-hidden px-6 py-0 lg:grid-cols-4">
        {cells.map(({ k, v }) => (
          <div key={k} className="group flex items-center gap-3.5 px-2 py-5 sm:px-5">
            <span className="grid size-10 shrink-0 place-items-center rounded-full bg-[#EDF3F7] transition-colors duration-300 group-hover:bg-[#62D984]" aria-hidden>
              <span className="live-dot size-2 rounded-full bg-[#33A94F]" />
            </span>
            <div className="min-w-0">
              <p className="text-[15px] font-bold text-[#072A45]" style={{ fontFamily: 'var(--font-display)' }}>{k}</p>
              <p className="truncate text-[13px] text-[#5B6E80] sm:whitespace-normal">{v}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

/* Testimonials — auto-rotating agency carousel with manual controls */
const QUOTES = [
  {
    q: 'EVN combined our rooftop plant and depot charging in one project. Generation reporting just works. Bills down 68% in six months.',
    by: 'Logistics depot · Malegaon',
    tag: 'Commercial + EV',
  },
  {
    q: 'Survey to subsidy to net-metering — they handled DISCOM paperwork end to end. Our 5 kW plant paid back faster than promised.',
    by: 'Homeowner · Nashik Road',
    tag: 'Residential 5 kW',
  },
  {
    q: 'Galvanised structure, clean cabling, earthing reports in writing. The monitoring app flagged a string fault before we noticed.',
    by: 'Rice mill · Nandgaon',
    tag: 'Industrial 100 kW',
  },
]

export function Testimonials() {
  const [idx, setIdx] = useState(0)
  const [paused, setPaused] = useState(false)

  useEffect(() => {
    if (paused) return
    const t = setInterval(() => setIdx((i) => (i + 1) % QUOTES.length), 5200)
    return () => clearInterval(t)
  }, [paused])

  const cur = QUOTES[idx]

  return (
    <div
      className="agency-panel grain relative overflow-hidden bg-[#072A45] text-white"
      style={{ borderRadius: 16 }}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div aria-hidden className="bg-grid-dark absolute inset-0 opacity-60" />
      <div aria-hidden className="orb left-[-10%] top-[-40%] size-72 bg-[#62D984]/25" />
      <div aria-hidden className="orb orb-2 right-[-8%] bottom-[-50%] size-80 bg-[#0F88C7]/25" />
      <div className="relative p-7 sm:p-10">
        <div className="flex items-center justify-between gap-4">
          <p className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.16em] text-[#62D984]">
            <span className="live-dot size-1.5 rounded-full bg-[#62D984]" aria-hidden />
            {cur.tag}
          </p>
          <div className="flex gap-2">
            <button
              onClick={() => setIdx((idx + QUOTES.length - 1) % QUOTES.length)}
              aria-label="Previous testimonial"
              className="press grid size-9 place-items-center rounded-full border border-white/20 text-white/80 transition-colors hover:border-[#62D984] hover:text-[#62D984]"
            >
              ←
            </button>
            <button
              onClick={() => setIdx((idx + 1) % QUOTES.length)}
              aria-label="Next testimonial"
              className="press grid size-9 place-items-center rounded-full border border-white/20 text-white/80 transition-colors hover:border-[#62D984] hover:text-[#62D984]"
            >
              →
            </button>
          </div>
        </div>
        <div key={idx} className="tst-slide mt-6 min-h-[132px] sm:min-h-[112px]">
          <blockquote className="max-w-2xl text-[17px] font-normal leading-[1.7] text-white/90">
            &ldquo;{cur.q}&rdquo;
          </blockquote>
          <p className="mt-4 text-[12px] font-semibold uppercase tracking-[0.12em] text-[#62D984]" style={{ fontFamily: 'var(--font-display)' }}>
            {cur.by}
          </p>
        </div>
        <div className="mt-6 flex items-center gap-2">
          {QUOTES.map((_, i) => (
            <button
              key={i}
              onClick={() => setIdx(i)}
              aria-label={`Go to testimonial ${i + 1}`}
              className={`tst-dot h-1.5 rounded-full ${i === idx ? 'w-8 bg-[#62D984]' : 'w-3 bg-white/25 hover:bg-white/50'}`}
            />
          ))}
          <span className="ml-auto text-[12px] text-white/45">
            {String(idx + 1).padStart(2, '0')} / {String(QUOTES.length).padStart(2, '0')}
          </span>
        </div>
      </div>
    </div>
  )
}
