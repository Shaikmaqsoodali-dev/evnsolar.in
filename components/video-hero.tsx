import Link from 'next/link'
import { ArrowRight, Star } from 'lucide-react'
import { IMG } from '@/lib/brand'
import { Reveal, ScrollFade } from '@/components/motion'

const VIDEO_SRC =
  'https://res.cloudinary.com/qxjpbgh6/video/upload/v1790691758/evn_videoplayback_2.mp4'

const AVATARS = [
  { initial: 'R', bg: '#33A94F' },
  { initial: 'S', bg: '#072A45' },
  { initial: 'A', bg: '#0B6AA0' },
  { initial: 'M', bg: '#0F88C7' },
]

export function VideoHero() {
  return (
    <section className="relative overflow-hidden bg-[#072A45] text-white">
      {/* background video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
        poster={IMG.solarField}
        className="hero-zoom absolute inset-0 h-full w-full object-cover"
      >
        <source src={VIDEO_SRC} type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-gradient-to-r from-[#072A45] via-[#072A45]/80 to-[#072A45]/20" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#072A45]/70 via-transparent to-[#072A45]/25" />

      <div className="relative mx-auto max-w-7xl px-6 pb-14 pt-14 sm:pb-20 sm:pt-20">
        <Reveal variant="fade" delay={50}>
          <p
            className="micro text-[#62D984]"
          >
            <span className="mr-2 inline-block size-2 rounded-full bg-[#62D984]" aria-hidden />
            Welcome to EVN Solar
          </p>
        </Reveal>

        <p aria-hidden className="vertical-micro absolute right-6 top-24 hidden text-white/40 xl:block">
          Rooftop Solar — EV Charging
        </p>

        <ScrollFade distance={110} fade={0.6}>
        <div className="mt-8 grid items-end gap-12 lg:grid-cols-[1.25fr_0.75fr]">
          <div>
              <h1 className="hero-display text-white">
                <span className="line-mask"><span style={{ animationDelay: '120ms' }}>Powering the Future</span></span>
                <span className="line-mask"><span style={{ animationDelay: '230ms' }}>With <em>Renewable.</em></span></span>
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
                <Link
                  href="/services"
                  className="btn-shine inline-flex items-center gap-2 rounded-lg bg-[#62D984] px-7 py-3.5 text-[14px] font-semibold uppercase tracking-[0.08em] text-[#072A45] transition-colors hover:bg-white"
                  style={{ fontFamily: 'var(--font-display)' }}
                >
                  Our services <ArrowRight size={15} />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-lg border border-white/40 px-7 py-3.5 text-[14px] font-semibold uppercase tracking-[0.08em] text-white transition-colors hover:border-white hover:bg-white/10"
                  style={{ fontFamily: 'var(--font-display)' }}
                >
                  Contact now
                </Link>
              </div>
            </Reveal>
          </div>

          {/* right: Solor mini proof card */}
          <Reveal variant="scale" delay={600} className="lg:pb-2">
            <div
              className="ml-auto w-full border border-white/15 bg-[#051E33]/70 p-4 shadow-[0_20px_60px_rgba(0,0,0,0.35)] backdrop-blur-md sm:max-w-[340px]"
              style={{ borderRadius: 10 }}
            >
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
              <div className="bg-[#072A45]/60 p-3.5" style={{ borderRadius: 6 }}>
                <div className="mb-2 flex gap-0.5" aria-label="5 star rating">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <Star key={s} size={11} className="fill-[#62D984] text-[#62D984]" />
                  ))}
                </div>
                <blockquote className="text-[14px] font-normal leading-[1.7] text-white/90">
                  &ldquo;EVN combined our rooftop plant and depot charging in one
                  project. Generation reporting just works. Bills down 68% in
                  six months.&rdquo;
                </blockquote>
                <p className="mt-2 text-[12px] font-semibold uppercase tracking-[0.1em] text-[#62D984]" style={{ fontFamily: 'var(--font-display)' }}>
                  Logistics depot, Malegaon
                </p>
              </div>
            </div>
          </Reveal>
        </div>
        </ScrollFade>
      </div>
    </section>
  )
}
