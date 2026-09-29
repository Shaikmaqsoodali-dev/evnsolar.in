import Link from 'next/link'
import { ArrowRight, ArrowUpRight } from 'lucide-react'
import { LOGO_URL } from '@/lib/brand'

export function Kicker({ children, center = false }: { children: string; center?: boolean }) {
  return (
    <p
      className={`flex items-center gap-3 text-[12px] font-bold uppercase tracking-[0.22em] text-[#0083CB] ${
        center ? 'justify-center' : ''
      }`}
    >
      <span className="inline-block h-[2px] w-8 bg-[#0083CB]" aria-hidden />
      {children}
      {center && <span className="inline-block h-[2px] w-8 bg-[#0083CB]" aria-hidden />}
    </p>
  )
}

export function SectionHeading({
  kicker,
  title,
  lede,
  center = false,
}: {
  kicker: string
  title: React.ReactNode
  lede?: string
  center?: boolean
}) {
  return (
    <div className={`max-w-2xl ${center ? 'mx-auto text-center' : ''}`}>
      <Kicker center={center}>{kicker}</Kicker>
      <h2 className="section-title mt-4 text-[28px] text-[#0C1E28] sm:text-[34px]">
        {title}
      </h2>
      {lede && (
        <p className={`mt-4 text-[15.5px] leading-relaxed text-[#5B6D77] ${center ? 'mx-auto' : ''}`}>
          {lede}
        </p>
      )}
    </div>
  )
}

export function PageIntro({
  kicker,
  title,
  lede,
  meta,
}: {
  kicker: string
  title: React.ReactNode
  lede?: string
  meta?: string[]
}) {
  return (
    <section className="border-b border-[#E2E8EC] bg-white">
      <div className="mx-auto max-w-7xl px-6 pb-10 pt-12 sm:pb-14 sm:pt-16">
        <Kicker>{kicker}</Kicker>
        <h1 className="section-title mt-4 max-w-3xl text-[32px] text-[#0C1E28] sm:text-[44px]">
          {title}
        </h1>
        {lede && (
          <p className="mt-5 max-w-2xl text-[17px] leading-relaxed text-[#5B6D77]">{lede}</p>
        )}
        {meta && (
          <dl className="mt-8 grid gap-px overflow-hidden border border-[#E2E8EC] bg-[#E2E8EC] sm:grid-cols-3" style={{ borderRadius: 8 }}>
            {meta.map((m) => (
              <div key={m} className="bg-[#E7F2F9] px-5 py-4 text-[13.5px] font-medium text-[#0C1E28]">
                {m}
              </div>
            ))}
          </dl>
        )}
      </div>
    </section>
  )
}

export function CtaBand() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-14 sm:py-20">
        <div className="grid gap-8 border border-[#E2E8EC] bg-[#0C1E28] p-8 text-white sm:p-12 lg:grid-cols-[1.5fr_1fr] lg:items-center" style={{ borderRadius: 10 }}>
          <div>
            <p className="text-[12px] font-semibold uppercase tracking-[0.14em] text-white/60">
              Free site assessment
            </p>
            <h2 className="font-display mt-3 text-[28px] font-semibold sm:text-[34px]">
              Send us your electricity bill. We&rsquo;ll size the right system.
            </h2>
            <p className="mt-3 max-w-xl text-[15px] leading-relaxed text-white/65">
              Share monthly units, terrace or parking photos, and any EV plans. You receive a
              system size, generation estimate and subsidy breakup — usually within one
              working day.
            </p>
          </div>
          <div className="flex flex-col gap-3 lg:items-end">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-[#0083CB] px-7 py-3.5 text-[15px] font-semibold text-white transition-colors hover:bg-[#00659D]"
              style={{ borderRadius: 6 }}
            >
              Request assessment <ArrowRight size={17} />
            </Link>
            <a href="tel:+917040506295" className="text-[14px] font-medium text-white/75 hover:text-white">
              or call +91 70405 06295
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

const FOOT_COLS: [string, [string, string][]][] = [
  ['Company', [['Home', '/'], ['About', '/about'], ['Projects', '/projects'], ['Blog', '/blog'], ['Contact', '/contact']]],
  ['Solar', [['Rooftop solar', '/services'], ['Ground-mounted', '/services'], ['Solar carports', '/services'], ['Sizes & pricing', '/pricing']]],
  ['EV charging', [['Home charging', '/ev-charging'], ['Workplace', '/ev-charging'], ['Fleet & DC fast', '/ev-charging'], ['Solar + EV bundles', '/pricing']]],
]

export function SiteFooter() {
  return (
    <footer className="bg-[#0C1E28] text-white">
      <div className="h-1.5" style={{ background: 'linear-gradient(90deg, #0083CB 0%, #12A9E2 50%, #1E7A3C 100%)' }} aria-hidden />
      <div className="mx-auto max-w-7xl px-6 pb-10 pt-14">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_2fr]">
          <div>
            <div className="flex items-center gap-3">
              <img src={LOGO_URL} alt="EVN Solar" className="h-11 w-auto bg-white object-contain px-1.5 py-1" style={{ borderRadius: 6 }} />
              <div className="leading-none">
                <p className="font-display text-[17px] font-semibold">EV&amp;SOLAR</p>
                <p className="mt-1 text-[10px] uppercase tracking-[0.16em] text-white/55">
                  EVN Solar Energy Solutions
                </p>
              </div>
            </div>
            <p className="mt-5 max-w-sm text-[14px] leading-relaxed text-white/60">
              Rooftop and ground-mounted solar, solar carports and EV charging
              infrastructure — surveyed, designed, installed and serviced by one
              accountable team across Maharashtra.
            </p>
            <div className="mt-6 space-y-1.5 text-[14px]">
              <p><a href="mailto:info@evnsolar.in" className="text-white/80 hover:text-white">info@evnsolar.in</a></p>
              <p><a href="tel:+917040506295" className="text-white/80 hover:text-white">+91 70405 06295</a></p>
              <p className="text-white/50">79 Mahada Colony, Malegaon 423203</p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
            {FOOT_COLS.map(([title, links]) => (
              <div key={title}>
                <p className="text-[12px] font-semibold uppercase tracking-[0.14em] text-white/50">{title}</p>
                <ul className="mt-4 space-y-2.5">
                  {links.map(([label, href]) => (
                    <li key={label}>
                      <Link href={href} className="group inline-flex items-center gap-1 text-[14px] text-white/75 hover:text-white">
                        {label}
                        <ArrowUpRight size={13} className="opacity-0 transition-opacity group-hover:opacity-60" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-12 flex flex-col gap-2 border-t border-white/10 pt-6 text-[12.5px] text-white/45 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 EVN Solar Energy Solutions Pvt. Ltd. All rights reserved.</p>
          <p>Works: 79 Mahada Colony, Malegaon 423203, Maharashtra, India · MNRE-aligned · 5-year service</p>
        </div>
      </div>
    </footer>
  )
}
