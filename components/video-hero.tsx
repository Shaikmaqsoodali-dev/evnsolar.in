import Link from 'next/link'
import { ArrowRight, Star } from 'lucide-react'
import { IMG } from '@/lib/brand'
import { Reveal, ScrollFade } from '@/components/motion'

const VIDEO_SRC =
  'https://res.cloudinary.com/qxjpbgh6/video/upload/v1790691758/evn_videoplayback_2.mp4'

const AVATARS = [
  { initial: 'R', bg: '#008ED6' },
  { initial: 'S', bg: '#3BB54A' },
  { initial: 'A', bg: '#071D26' },
  { initial: 'M', bg: '#25C7E8' },
]

export function VideoHero() {
  return (
    <section className="relative overflow-hidden bg-[#071D26] text-[#F7F4EC]">
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
      <div className="absolute inset-0 bg-gradient-to-r from-[#071D26] via-[#071D26]/80 to-[#071D26]/20" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#071D26]/70 via-transparent to-[#071D26]/25" />

      <div className="relative mx-auto max-w-7xl px-6 pb-14 pt-14 sm:pb-20 sm:pt-20">
        <Reveal variant="fade" delay={50}>
          <p
            className="micro micro-pill text-white/85"
          >
            <span className="inline-block size-2 rounded-full bg-[#25C7E8]" aria-hidden />
            2.4 MW+ solar installed across Maharashtra
          </p>
        </Reveal>

        <p aria-hidden className="vertical-micro absolute right-6 top-24 hidden text-white/40 xl:block">
          EVN Solar — Rooftop · EV Charging
        </p>

        <ScrollFade distance={110} fade={0.6}>
        <div className="mt-8 grid items-end gap-12 lg:grid-cols-[1.25fr_0.75fr]">
          <div>
              <h1 className="hero-display text-white">
                <span className="line-mask"><span style={{ animationDelay: '120ms' }}>Power your home,</span></span>
                <span className="line-mask"><span style={{ animationDelay: '230ms' }}>business and EV</span></span>
                <span className="line-mask"><span style={{ animationDelay: '340ms' }}>on <em>sunlight.</em></span></span>
              </h1>
            <Reveal variant="up" delay={320}>
              <p
                className="mt-5 max-w-md text-[15.5px] font-normal leading-[1.7] text-white/75"
              >
                Rooftop solar, ground-mounted plants, solar carports and EV
                charging — engineered as one system, so you cut the bill and
                drive on sunshine.
              </p>
            </Reveal>
            <Reveal variant="up" delay={460}>
              <div className="mt-7 flex flex-wrap gap-3">
                <Link
                  href="/contact"
                  className="btn-shine font-display inline-flex items-center gap-2 bg-white px-6 py-3 text-[12.5px] font-semibold tracking-[0.02em] text-[#071D26] transition-colors hover:bg-[#E8EEF1]"
                  style={{ borderRadius: 6 }}
                >
                  Get a free site assessment <ArrowRight size={15} />
                </Link>
                <Link
                  href="/services"
                  className="font-display inline-flex items-center gap-2 border border-white/40 px-6 py-3 text-[12.5px] font-semibold tracking-[0.02em] text-white transition-colors hover:border-white hover:bg-white/10"
                  style={{ borderRadius: 6 }}
                >
                  Explore solutions
                </Link>
              </div>
            </Reveal>
          </div>

          {/* right: testimonial glass card */}
          <Reveal variant="scale" delay={600} className="lg:pb-2">
            <div
              className="ml-auto w-full border border-white/20 bg-[#0E2A38]/60 p-4 shadow-[0_20px_60px_rgba(0,0,0,0.35)] backdrop-blur-md sm:max-w-[340px]"
              style={{ borderRadius: 10 }}
            >
              <div className="mb-3 flex items-center gap-3">
                <div className="flex -space-x-2">
                  {AVATARS.map(({ initial, bg }) => (
                    <span
                      key={initial}
                      className="font-display grid size-7 place-items-center rounded-full border-2 border-white/60 text-[11px] font-semibold text-white"
                      style={{ background: bg }}
                    >
                      {initial}
                    </span>
                  ))}
                </div>
                <span className="text-[11px] font-medium tracking-[0.04em] text-white/70">
                  Trusted by 1,000+ homes & businesses
                </span>
              </div>
              <div className="bg-[#071D26]/40 p-3.5" style={{ borderRadius: 6 }}>
                <div className="mb-2 flex gap-0.5" aria-label="5 star rating">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <Star key={s} size={11} className="fill-[#FFC531] text-[#FFC531]" />
                  ))}
                </div>
                <blockquote className="text-[14px] font-normal leading-[1.7] text-white/90">
                  &ldquo;EVN combined our rooftop plant and depot charging in one
                  project. Generation reporting just works — bills down 68% in
                  six months.&rdquo;
                </blockquote>
                <p className="mt-2 text-[10.5px] font-semibold uppercase tracking-[0.1em] text-white/60">
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
