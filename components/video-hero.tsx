import Link from 'next/link'
import { ArrowRight, Star } from 'lucide-react'
import { IMG } from '@/lib/brand'

const VIDEO_SRC =
  'https://res.cloudinary.com/qxjpbgh6/video/upload/v1790691758/evn_videoplayback_2.mp4'

const AVATARS = [
  { initial: 'R', bg: '#0083CB' },
  { initial: 'S', bg: '#1E7A3C' },
  { initial: 'A', bg: '#0C1E28' },
  { initial: 'M', bg: '#2EA3E0' },
]

export function VideoHero() {
  return (
    <section className="relative overflow-hidden bg-[#0C1E28] text-white">
      {/* background video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
        poster={IMG.solarField}
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source src={VIDEO_SRC} type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-gradient-to-r from-[#0C1E28] via-[#0C1E28]/78 to-[#0C1E28]/20" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0C1E28]/70 via-transparent to-[#0C1E28]/25" />

      <div className="relative mx-auto max-w-7xl px-6 pb-14 pt-14 sm:pb-20 sm:pt-20">
        {/* campaign micro-label — top area */}
        <p
          className="hero-rise micro flex items-center gap-3 text-white/70"
          style={{ animationDelay: '0.05s' }}
        >
          <span className="relative flex size-3">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#2EA3E0] opacity-75" />
            <span className="relative inline-flex size-3 rounded-full bg-[#2EA3E0]" />
          </span>
          2.4 MW+ solar installed — Maharashtra
        </p>

        {/* edge micro-label, desktop only */}
        <p aria-hidden className="vertical-micro micro absolute right-6 top-24 hidden text-white/40 xl:block">
          EVN Solar — Rooftop · EV Charging
        </p>

        <div className="mt-8 grid items-end gap-12 lg:grid-cols-[1.25fr_0.75fr]">
          {/* left — HERO composition: oversized grotesk, intentional breaks,
              weight contrast 900/500, serif-italic focal word */}
          <div>
            <h1 className="hero-rise hero-display text-white" style={{ animationDelay: '0.15s' }}>
              Power your
              <br />
              home, business
              <br />
              <span className="thin">& EV on </span>
              <em className="serif-accent text-[#8FD6A4]">sunlight.</em>
            </h1>
            <p
              className="hero-rise mt-7 max-w-md text-[15.5px] font-normal leading-relaxed text-white/65"
              style={{ animationDelay: '0.3s' }}
            >
              Rooftop solar, ground-mounted plants, solar carports and EV
              charging — engineered as one system.
            </p>
            <div className="hero-rise mt-8 flex flex-wrap gap-3" style={{ animationDelay: '0.45s' }}>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-white px-7 py-3.5 text-[14px] font-bold uppercase tracking-[0.06em] text-[#0C1E28] transition-colors hover:bg-[#E8EEF1]"
                style={{ borderRadius: 4 }}
              >
                Get a free site assessment <ArrowRight size={16} />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center gap-2 border border-white/40 px-7 py-3.5 text-[14px] font-bold uppercase tracking-[0.06em] text-white transition-colors hover:border-white hover:bg-white/10"
                style={{ borderRadius: 4 }}
              >
                Explore solutions
              </Link>
            </div>
          </div>

          {/* right: testimonial glass card */}
          <div className="hero-rise lg:pb-2" style={{ animationDelay: '0.6s' }}>
            <div
              className="ml-auto w-full border border-white/20 bg-white/10 p-4 shadow-[0_20px_60px_rgba(0,0,0,0.35)] backdrop-blur-md sm:max-w-md"
              style={{ borderRadius: 10 }}
            >
              <div className="mb-4 flex items-center gap-4">
                <div className="flex -space-x-2.5">
                  {AVATARS.map(({ initial, bg }) => (
                    <span
                      key={initial}
                      className="grid size-9 place-items-center rounded-full border-2 border-white/60 text-[13px] font-bold text-white"
                      style={{ background: bg }}
                    >
                      {initial}
                    </span>
                  ))}
                </div>
                <span className="text-[13px] font-medium text-white/85">
                  Trusted by 1,000+ homes & businesses
                </span>
              </div>
              <div className="bg-black/25 p-4" style={{ borderRadius: 6 }}>
                <div className="mb-2 flex gap-1" aria-label="5 star rating">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <Star key={s} size={13} className="fill-[#FFC531] text-[#FFC531]" />
                  ))}
                </div>
                <blockquote className="text-[13.5px] leading-relaxed text-white/90">
                  &ldquo;EVN combined our rooftop plant and depot charging in one
                  project. Generation reporting just works — bills down 68% in
                  six months.&rdquo;
                </blockquote>
                <p className="mt-2 text-[13px] font-semibold text-white">
                  Logistics depot, Malegaon
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* trust row */}
        <div
          className="hero-rise mt-14 flex flex-wrap items-center justify-between gap-x-8 gap-y-4 border-t border-white/15 pt-6"
          style={{ animationDelay: '0.75s' }}
        >
          <p className="flex items-center gap-2 text-[13px] font-semibold text-white/80">
            <span className="font-display text-[16px] font-extrabold text-white">5.0</span>
            rated service, MNRE-aligned engineering
            <span className="flex gap-0.5" aria-hidden>
              {[1, 2, 3, 4, 5].map((s) => (
                <Star key={s} size={12} className="fill-[#FFC531] text-[#FFC531]" />
              ))}
            </span>
          </p>
          <div className="flex flex-wrap gap-x-8 gap-y-2 text-[13px] font-bold uppercase tracking-[0.14em] text-white/55">
            <span>Residential</span>
            <span>Commercial</span>
            <span>Industrial</span>
            <span>Fleet & EV</span>
          </div>
        </div>
      </div>
    </section>
  )
}
