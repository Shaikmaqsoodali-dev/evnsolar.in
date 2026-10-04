import Link from 'next/link'
import { ArrowRight, ArrowUpRight } from 'lucide-react'

export function InstagramIcon({ size = 15, className }: { size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  )
}

export function FacebookIcon({ size = 15, className }: { size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden
    >
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  )
}
import { LOGO_URL } from '@/lib/brand'
import { Breadcrumbs } from '@/components/ux-bits'
import { MotionGrid } from '@/components/ui/motion-grid'
import { Reveal } from '@/components/motion'

export function Kicker({ children, center = false }: { children: string; center?: boolean }) {
  return (
    <p
      className={`micro flex items-center gap-3 text-[#008ED6] ${
        center ? 'justify-center' : ''
      }`}
    >
      <span className="inline-block h-[2px] w-8 bg-[#25C7E8]" aria-hidden />
      {children}
      {center && <span className="inline-block h-[2px] w-8 bg-[#25C7E8]" aria-hidden />}
    </p>
  )
}

export function SectionHeading({
  kicker,
  title,
  lede,
  center = false,
  align = 'left',
  size = 'lg',
}: {
  kicker: string
  title: React.ReactNode
  lede?: string
  center?: boolean
  align?: 'left' | 'center' | 'right'
  size?: 'xl' | 'lg' | 'md'
}) {
  const a = center ? 'center' : align
  const alignCls =
    a === 'center' ? 'mx-auto text-center' : a === 'right' ? 'ml-auto text-right' : ''
  return (
    <div className={`max-w-2xl ${alignCls}`}>
      <Kicker center={a === 'center'}>{kicker}</Kicker>
      <h2 className={`sx sx-${size} mt-4 text-[#071D26]`}>
        {title}
      </h2>
      {lede && (
        <p className={`mt-4 text-[15px] font-normal leading-relaxed text-[#50656A] ${a === 'center' ? 'mx-auto' : ''}`}>
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
  crumb,
  image,
  imageAlt = '',
}: {
  kicker: string
  title: React.ReactNode
  lede?: string
  crumb?: [string, string][]
  image?: string
  imageAlt?: string
}) {
  if (image) {
    return (
      <section className="relative overflow-hidden border-b border-[#071D26] bg-[#071D26]">
        <img
          src={image}
          alt={imageAlt}
          className="absolute inset-0 h-full w-full object-cover"
          loading="eager"
        />
        {/* Left-heavy dark gradient: photo stays visible right, text readable left */}
        <div aria-hidden className="absolute inset-0 bg-gradient-to-r from-[#071D26]/90 via-[#071D26]/55 to-[#071D26]/15" />
        <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-[#071D26]/60 via-transparent to-[#071D26]/10" />
        <div className="relative mx-auto max-w-7xl px-6 pb-10 pt-12 sm:pb-14 sm:pt-16">
          {crumb && (
            <Reveal variant="fade" delay={0}>
              <Breadcrumbs trail={crumb} dark />
            </Reveal>
          )}
          <Reveal variant="up" delay={70}>
            <p className="micro flex items-center gap-3 text-[#25C7E8]">
              <span className="inline-block h-[2px] w-8 bg-[#25C7E8]" aria-hidden />
              {kicker}
            </p>
          </Reveal>
          <Reveal variant="blur" delay={150}>
            <h1 className="page-hero mt-5 max-w-4xl text-white [&_em]:text-[#25C7E8]">
              {title}
            </h1>
          </Reveal>
          {lede && (
            <Reveal variant="up" delay={250}>
              <p className="mt-5 max-w-2xl text-[17px] font-normal leading-relaxed text-white/75">{lede}</p>
            </Reveal>
          )}
        </div>
      </section>
    )
  }

  return (
    <MotionGrid
      speed="3s"
      opacity={0.15}
      enableGlow={true}
      lineColor="20, 184, 166"
      className="border-b border-[#E2E8EC] bg-[#F2F7F4]"
    >
      <div className="relative mx-auto max-w-7xl px-6 pb-10 pt-12 sm:pb-14 sm:pt-16">
        {crumb && (
          <Reveal variant="fade" delay={0}>
            <Breadcrumbs trail={crumb} />
          </Reveal>
        )}
        <Reveal variant="up" delay={70}>
          <Kicker>{kicker}</Kicker>
        </Reveal>
        <Reveal variant="blur" delay={150}>
          <h1 className="page-hero mt-5 max-w-4xl text-[#071D26]">
            {title}
          </h1>
        </Reveal>
        {lede && (
          <Reveal variant="up" delay={250}>
            <p className="mt-5 max-w-2xl text-[17px] font-normal leading-relaxed text-[#50656A]">{lede}</p>
          </Reveal>
        )}
      </div>
    </MotionGrid>
  )
}

export function CtaBand() {
  return (
    <section className="bg-[#071D26]">
      <div className="mx-auto max-w-7xl px-6 py-14 sm:py-20">
        <div className="bg-brand-grad relative grid gap-8 overflow-hidden p-8 text-white sm:p-12 lg:grid-cols-[1.5fr_1fr] lg:items-center" style={{ borderRadius: 10 }}>
          <div className="orb left-[-8%] top-[-30%] size-72 bg-[#25C7E8]/40" aria-hidden />
          <div className="orb orb-2 bottom-[-40%] right-[-6%] size-80 bg-[#3BB54A]/40" aria-hidden />
          <div className="relative">
            <p className="micro text-white/85">
              Free site assessment
            </p>
            <h2 className="sx sx-lg mt-4 max-w-xl text-white">
              <span className="cta-bold">Send us your
              <br />
              electricity bill.</span>
              <br />
              <span className="cta-med">We&rsquo;ll size the</span>{' '}
              <em className="editorial-accent text-white">right system.</em>
            </h2>
            <p className="mt-3 max-w-xl text-[15px] font-normal leading-relaxed text-white/85">
              Share monthly units, terrace or parking photos, and any EV plans. You receive a
              system size, generation estimate and subsidy breakup — usually within one
              working day.
            </p>
          </div>
          <div className="relative flex flex-col gap-3 lg:items-end">
            <Link
              href="/contact"
              className="btn-shine font-display inline-flex items-center justify-center gap-2 bg-white px-7 py-3.5 text-[13px] font-semibold tracking-[-0.01em] text-[#071D26] transition-all hover:bg-[#071D26] hover:text-white"
              style={{ borderRadius: 6 }}
            >
              Request assessment <ArrowRight size={17} />
            </Link>
            <a href="tel:+917040506295" className="font-tech text-[10px] uppercase tracking-[0.12em] text-white/75 hover:text-white">
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
    <footer className="bg-[#071D26] text-[#F7F4EC]">
      <div className="h-1.5" style={{ background: 'linear-gradient(90deg, #008ED6 0%, #25C7E8 50%, #3BB54A 100%)' }} aria-hidden />
      <div className="mx-auto max-w-7xl px-6 pb-10 pt-14">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_2fr]">
          <div>
            <div className="flex items-center gap-3">
              <img src={LOGO_URL} alt="EVN Solar" className="h-11 w-auto bg-white object-contain px-1.5 py-1" style={{ borderRadius: 6 }} />
              <div className="leading-none">
                <p className="font-display text-[17px] font-bold tracking-[-0.02em]">EV&amp;SOLAR</p>
                <p className="font-tech mt-1 text-[9px] uppercase tracking-[0.12em] text-[#F7F4EC]/50">
                  EVN Solar Energy Solutions
                </p>
              </div>
            </div>
            <p className="mt-5 max-w-sm text-[14px] font-normal leading-relaxed text-[#F7F4EC]/60">
              Rooftop and ground-mounted solar, solar carports and EV charging
              infrastructure — surveyed, designed, installed and serviced by one
              accountable team across Maharashtra.
            </p>
            <div className="mt-6 space-y-1.5 text-[13px]">
              <p><a href="mailto:info@evnsolar.in" className="text-[#F7F4EC]/75 hover:text-[#F7F4EC]">info@evnsolar.in</a></p>
              <p><a href="tel:+917040506295" className="text-[#F7F4EC]/75 hover:text-[#F7F4EC]">+91 70405 06295</a></p>
              <p className="text-[#F7F4EC]/45">79 Mahada Colony, Malegaon 423203</p>
            </div>
            <div className="mt-5 flex flex-wrap gap-2.5">
              <a
                href="https://www.instagram.com/evnsolar.in/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2.5 border border-white/15 px-4 py-2.5 text-[13px] font-medium text-[#F7F4EC]/75 transition-colors hover:border-[#25C7E8] hover:text-white"
                style={{ borderRadius: 8 }}
              >
                <InstagramIcon size={15} className="text-[#25C7E8]" /> @evnsolar.in
              </a>
              <a
                href="https://www.facebook.com/evsolar.in"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2.5 border border-white/15 px-4 py-2.5 text-[13px] font-medium text-[#F7F4EC]/75 transition-colors hover:border-[#25C7E8] hover:text-white"
                style={{ borderRadius: 8 }}
              >
                <FacebookIcon size={15} className="text-[#25C7E8]" /> @evsolar.in
              </a>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
            {FOOT_COLS.map(([title, links]) => (
              <div key={title}>
                <p className="foot-title text-[#F7F4EC]/45">{title}</p>
                <ul className="mt-4 space-y-2.5">
                  {links.map(([label, href]) => (
                    <li key={label}>
                      <Link href={href} className="foot-link group inline-flex items-center gap-1 text-[#F7F4EC]/70 hover:text-[#F7F4EC]">
                        {label}
                        <ArrowUpRight size={13} className="text-[#25C7E8] opacity-0 transition-opacity group-hover:opacity-70" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="foot-copy mt-12 flex flex-col gap-2 border-t border-white/10 pt-6 text-[#F7F4EC]/40 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 EVN Solar Energy Solutions Pvt. Ltd. All rights reserved.</p>
          <p>Works: 79 Mahada Colony, Malegaon 423203, Maharashtra, India · MNRE-aligned · 5-year service</p>
        </div>
      </div>
    </footer>
  )
}
