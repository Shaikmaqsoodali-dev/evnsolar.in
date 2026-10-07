 'use client'

import Link from 'next/link'
import { useRef } from 'react'
import { Star } from 'lucide-react'
import { BrandArrow } from '@/components/brand-arrow'
import { IMG } from '@/lib/brand'
import { Magnetic, Reveal, ScrollFade } from '@/components/motion'

const VIDEO_SRC =
  'https://res.cloudinary.com/qxjpbgh6/video/upload/v1790691758/evn_videoplayback_2.mp4'

const AVATARS = [
  { initial: 'R', bg: '#33A94F' },
  { initial: 'S', bg: '#072A45' },
  { initial: 'A', bg: '#0B6AA0' },
  { initial: 'M', bg: '#0F88C7' },
]

export function VideoHero() {
  const glow = useRef<HTMLDivElement>(null)
  const onMove = (e: React.MouseEvent<HTMLElement>) => {
    const el = glow.current
    if (!el || window.matchMedia('(pointer: coarse)').matches) return
    const r = e.currentTarget.getBoundingClientRect()
    el.style.left = `${e.clientX - r.left}px`
    el.style.top = `${e.clientY - r.top}px`
    el.style.opacity = '1'
  }
  const onLeave = () => {
    if (glow.current) glow.current.style.opacity = '0'
  }
  return (
    <section onMouseMove={onMove} onMouseLeave={onLeave} className="grain relative overflow-hidden bg-[#072A45] text-white">
      {/* background video */}
      {/* Fallback photo — visible instantly + if video fails */}
      <img
        src={IMG.solarField}
        alt=""
        aria-hidden
        className="absolute inset-0 h-full w-full object-cover"
      />
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
        poster={IMG.solarField}
        className="hero-zoom absolute inset-0 h-full w-full object-cover brightness-[1.08] contrast-[1.04]"
      >
        <source src={VIDEO_SRC} type="video/mp4" />
      </video>
      {/* Text-zone scrim — dark backing only behind the headline (left), video stays open on the right */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#04182B]/90 via-[#072A45]/55 to-[#072A45]/0" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#04182B]/50 via-transparent to-transparent" />
      <div aria-hidden className="absolute left-[-12%] top-1/2 hidden h-[85%] w-[62%] -translate-y-1/2 rounded-full bg-[#04182B]/55 blur-[110px] lg:block" />
      <div ref={glow} aria-hidden className="hero-glow left-1/2 top-1/3 z-[1] opacity-0" />
      {/* brand sweep hairline at hero base */}
      <div aria-hidden className="absolute inset-x-0 bottom-0 z-[3] h-[2px]" style={{ background: 'linear-gradient(90deg, #0E8ACB 0%, #43A85C 55%, #7BC24A 100%)' }} />

      <div className="relative z-[2] mx-auto max-w-7xl px-6 pb-14 pt-14 sm:pb-20 sm:pt-20">
        <Reveal variant="fade" delay={50}>
          <p className="micro inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-[#62D984] backdrop-blur-md">
            <span className="live-dot size-2 rounded-full bg-[#62D984]" aria-hidden />
            Welcome to EVN Solar
          </p>
        </Reveal>

        <p aria-hidden className="vertical-micro absolute right-6 top-24 hidden text-white/40 xl:block">
          Rooftop Solar — EV Charging
        </p>

        <ScrollFade distance={110} fade={0.6}>
        <div className="mt-6 grid items-end gap-10 lg:grid-cols-[1.6fr_0.9fr]">
          <div>
              <h1 className="hero-display hero-tight hero-clear text-white">
                <span className="line-mask"><span style={{ animationDelay: '120ms' }}>Powering the</span></span>
                <span className="line-mask"><span style={{ animationDelay: '230ms' }}>Future With</span></span>
                <span className="line-mask"><span style={{ animationDelay: '340ms' }}><em>Renewable.</em></span></span>
              </h1>
            <Reveal variant="up" delay={320}>
              <p
                className="mt-5 max-w-md text-[16px] font-normal leading-[1.75] text-white/75"
              >
                Rooftop solar, ground plants, carports and EV charging — surveyed,
                installed and serviced across Maharashtra with subsidy support.
              </p>
            </Reveal>
            <Reveal variant="up" delay={460}>
              <div className="mt-7 flex flex-wrap gap-3">
                <Magnetic>
                  <Link
                    href="/services"
                    className="btn-shine press inline-flex items-center gap-2 rounded-lg bg-[#62D984] px-7 py-3.5 text-[14px] font-semibold uppercase tracking-[0.08em] text-[#072A45] transition-colors hover:bg-white"
                    style={{ fontFamily: 'var(--font-display)' }}
                  >
                    Our services <BrandArrow size={15} />
                  </Link>
                </Magnetic>
                <Magnetic>
                  <Link
                    href="/contact"
                    className="press inline-flex items-center gap-2 rounded-lg border border-white/40 px-7 py-3.5 text-[14px] font-semibold uppercase tracking-[0.08em] text-white transition-colors hover:border-white hover:bg-white/10"
                    style={{ fontFamily: 'var(--font-display)' }}
                  >
                    Contact now
                  </Link>
                </Magnetic>
              </div>
            </Reveal>
          </div>

          {/* right: Solor mini proof card */}
          <Reveal variant="scale" delay={600} className="lg:pb-2">
            <div className="float-y">
            <div
              className="glass-dark agency-panel ml-auto w-full p-4 sm:max-w-[340px]"
              style={{ borderRadius: 14 }}
            >
              <p className="mb-3 inline-flex items-center gap-2 rounded-full bg-[#62D984]/15 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.14em] text-[#62D984]" style={{ fontFamily: 'var(--font-display)' }}>
                <span className="live-dot size-1.5 rounded-full bg-[#62D984]" aria-hidden />
                Live from site monitoring
              </p>
              <div className="mb-3 flex items-center gap-3">
                <div className="flex -space-x-2">
                  {AVATARS.map(({ initial, bg }) => (
                    <span
                      key={initial}
                      className="grid size-7 place-items-center rounded-full border-2 border-white/60 text-[12px] font-bold text-white"
                      style={{ background: bg, fontFamily: 'var(--font-display)' }}
                    >
                      {initial}
                    </span>
                  ))}
                </div>
                <span className="text-[12px] font-normal tracking-[0] text-white/70" style={{ fontFamily: 'var(--font-body)' }}>
                  Trusted by 1,000+ homes & businesses
                </span>
              </div>
              <div className="rounded-lg border border-white/10 bg-[#072A45]/60 p-3.5">
                <div className="mb-2 flex items-center justify-between gap-2">
                  <div className="flex gap-0.5" aria-label="5 star rating">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <Star key={s} size={11} className="fill-[#62D984] text-[#62D984]" />
                    ))}
                  </div>
                  <span className="text-[11px] font-bold uppercase tracking-[0.12em] text-white/50" style={{ fontFamily: 'var(--font-display)' }}>Verified</span>
                </div>
                <blockquote className="text-[14px] font-normal leading-[1.7] text-white/90">
                  &ldquo;EVN combined our rooftop plant and depot charging in one
                  project. Generation reporting just works. Bills down 68% in
                  six months.&rdquo;
                </blockquote>
                <div className="mt-3 flex items-center justify-between gap-3 border-t border-white/10 pt-3">
                  <p className="text-[12px] font-semibold uppercase tracking-[0.1em] text-[#62D984]" style={{ fontFamily: 'var(--font-display)' }}>
                    Logistics depot, Malegaon
                  </p>
                  <Link href="/projects" className="press inline-flex items-center gap-1 rounded-full bg-[#62D984] px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.08em] text-[#072A45] transition-colors hover:bg-white" style={{ fontFamily: 'var(--font-display)' }}>
                    View proof →
                  </Link>
                </div>
              </div>
            </div>
            </div>
          </Reveal>
        </div>
        </ScrollFade>
      </div>
    </section>
  )
}
