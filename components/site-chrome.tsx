import Link from 'next/link'
import { BrandArrow } from '@/components/brand-arrow'

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
      className={`micro flex items-center gap-2.5 text-[#1E7A38] ${
        center ? 'justify-center' : ''
      }`}
    >
      <span className="inline-block size-2 rounded-full bg-[#62D984]" aria-hidden />
      {children}
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
  kicker?: string
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
      {kicker ? <Kicker center={a === 'center'}>{kicker}</Kicker> : null}
      <h2 className={`sx sx-${size} mt-3 text-[#072A45]`}>
        {title}
      </h2>
      {lede && (
        <p className={`mt-4 text-[15px] font-normal leading-relaxed text-[#54687A] ${a === 'center' ? 'mx-auto' : ''}`}>
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
      <section className="relative overflow-hidden border-b border-[#072A45] bg-[#072A45]">
        <img
          src={image}
          alt={imageAlt}
          className="absolute inset-0 h-full w-full object-cover"
          loading="eager"
        />
        {/* Left-heavy dark gradient: photo stays visible right, text readable left */}
        <div aria-hidden className="absolute inset-0 bg-gradient-to-r from-[#072A45]/95 via-[#072A45]/60 to-[#072A45]/15" />
        <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-[#072A45]/60 via-transparent to-[#072A45]/10" />
        <div className="relative mx-auto max-w-7xl px-6 pb-10 pt-12 sm:pb-14 sm:pt-16">
          {crumb && (
            <Reveal variant="fade" delay={0}>
              <Breadcrumbs trail={crumb} dark />
            </Reveal>
          )}
          <Reveal variant="up" delay={70}>
            <p className="micro flex items-center gap-2.5 text-[#62D984]">
              <span className="inline-block size-2 rounded-full bg-[#62D984]" aria-hidden />
              {kicker}
            </p>
          </Reveal>
          <Reveal variant="blur" delay={150}>
            <h1 className="page-hero mt-5 max-w-4xl text-white [&_em]:text-[#62D984]">
              {title}
            </h1>
          </Reveal>
          {lede && (
            <Reveal variant="up" delay={250}>
              <p className="mt-5 max-w-2xl text-[16px] font-normal leading-relaxed text-white/75">{lede}</p>
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
      lineColor="98, 217, 132"
      className="border-b border-[#D9E2EA] bg-[#EDF3F7]"
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
          <h1 className="page-hero mt-5 max-w-4xl text-[#072A45]">
            {title}
          </h1>
        </Reveal>
        {lede && (
          <Reveal variant="up" delay={250}>
            <p className="mt-5 max-w-2xl text-[16px] font-normal leading-relaxed text-[#54687A]">{lede}</p>
          </Reveal>
        )}
      </div>
    </MotionGrid>
  )
}

export function CtaBand() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-14 sm:py-20">
        {/* SOLOR CTA banner — deep navy panel, brand-green accents, “Have Questions? Call Us” pattern */}
        <div className="relative grid gap-8 overflow-hidden bg-[#072A45] p-8 text-white sm:p-12 lg:grid-cols-[1.5fr_1fr] lg:items-center" style={{ borderRadius: 12 }}>
          <div className="orb left-[-8%] top-[-30%] size-72 bg-[#62D984]/20" aria-hidden />
          <div className="relative">
            <p className="micro text-[#62D984]">
              Have questions? Call us +91 70405 06295
            </p>
            <h2 className="sx sx-lg mt-3 max-w-xl text-white">
              Send us your electricity bill. We&rsquo;ll size the right system.
            </h2>
            <p className="mt-3 max-w-xl text-[15px] font-normal leading-relaxed text-white/70">
              Share monthly units, terrace or parking photos, and any EV plans. You receive a
              system size, generation estimate and subsidy breakup, usually within one
              working day.
            </p>
          </div>
          <div className="relative flex flex-col gap-3 lg:items-end">
            <Link
              href="/contact"
              className="btn-shine inline-flex items-center justify-center gap-2 rounded-lg bg-[#62D984] px-7 py-3.5 text-[14px] font-semibold uppercase tracking-[0.08em] text-[#072A45] transition-colors hover:bg-white"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Get a free site assessment <BrandArrow size={17} />
            </Link>
            <a href="tel:+917040506295" className="text-[13px] uppercase tracking-[0.1em] text-white/60 hover:text-white" style={{ fontFamily: 'var(--font-display)', fontWeight: 600 }}>
              or call +91 70405 06295
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

const FOOT_COLS: [string, [string, string][]][] = [
  ['Quick Links', [['Home', '/'], ['About Us', '/about'], ['Services', '/services'], ['Blog', '/blog'], ['Contact Us', '/contact']]],
  ['Services', [['Rooftop Solar', '/services'], ['Ground-Mounted', '/services'], ['Solar Carports', '/services'], ['EV Charging', '/ev-charging'], ['Sizes & Pricing', '/pricing']]],
  ['Useful Links', [['Privacy Policy', '/contact'], ['Terms & Conditions', '/contact'], ['Warranty', '/services'], ['Support', '/contact'], ['Subsidy Help', '/pricing']]],
]

export function SiteFooter() {
  return (
    <footer className="bg-[#072A45] text-white">
      {/* SOLOR footer top strip — Generate / Reap / Heal */}
      <div className="border-b border-white/10">
        <div className="mx-auto grid max-w-7xl gap-6 px-6 py-8 sm:grid-cols-3">
          {[
            ['Generate Your Own Power', 'Rooftop, ground & carport plants sized to your bill.'],
            ['Reap the Returns', 'Subsidy filing + net-metering so payback starts fast.'],
            ['Heal the World', 'Every kW cuts grid draw and tailpipe kilometres.'],
          ].map(([t, d]) => (
            <div key={t} className="flex items-start gap-4">
              <span className="mt-1 inline-block size-2.5 shrink-0 rounded-full bg-[#62D984]" aria-hidden />
              <div>
                <p className="text-[16px] font-bold uppercase tracking-[0.04em]" style={{ fontFamily: 'var(--font-display)' }}>{t}</p>
                <p className="mt-1 text-[13.5px] leading-relaxed text-white/60">{d}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="mx-auto max-w-7xl px-6 pb-10 pt-14">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_2fr]">
          <div>
            <div className="flex items-center gap-3">
              <img src={LOGO_URL} alt="EVN Solar" className="h-11 w-auto bg-white object-contain px-1.5 py-1" style={{ borderRadius: 6 }} />
              <div className="leading-none">
                <p className="text-[19px] font-bold uppercase tracking-[0.02em]" style={{ fontFamily: 'var(--font-display)' }}>EV&amp;SOLAR</p>
                <p className="mt-1 text-[11px] uppercase tracking-[0.14em] text-white/50" style={{ fontFamily: 'var(--font-display)', fontWeight: 600 }}>
                  EVN Solar Energy Solutions
                </p>
              </div>
            </div>
            <p className="mt-5 max-w-sm text-[14px] font-normal leading-relaxed text-white/60">
              Green energy is the future — EVN designs rooftop solar, ground-mounted plants,
              solar carports and EV charging as one accountable system across Maharashtra.
            </p>
            <div className="mt-6 space-y-1.5 text-[13px]">
              <p><a href="mailto:info@evnsolar.in" className="text-white/75 hover:text-[#62D984]">info@evnsolar.in</a></p>
              <p><a href="tel:+917040506295" className="text-white/75 hover:text-[#62D984]">+91 70405 06295</a></p>
              <p className="text-white/45">79 Mahada Colony, Malegaon 423203</p>
            </div>
            <div className="mt-5 flex flex-wrap gap-2.5">
              <a
                href="https://www.instagram.com/evnsolar.in/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2.5 border border-white/15 px-4 py-2.5 text-[13px] font-semibold uppercase tracking-[0.06em] text-white/75 transition-colors hover:border-[#62D984] hover:text-white"
                style={{ borderRadius: 8, fontFamily: 'var(--font-display)' }}
              >
                <InstagramIcon size={15} className="text-[#62D984]" /> IG
              </a>
              <a
                href="https://www.facebook.com/evsolar.in"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2.5 border border-white/15 px-4 py-2.5 text-[13px] font-semibold uppercase tracking-[0.06em] text-white/75 transition-colors hover:border-[#62D984] hover:text-white"
                style={{ borderRadius: 8, fontFamily: 'var(--font-display)' }}
              >
                <FacebookIcon size={15} className="text-[#62D984]" /> FB
              </a>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
            {FOOT_COLS.map(([title, links]) => (
              <div key={title}>
                <p className="foot-title text-white">{title}</p>
                <ul className="mt-4 space-y-2.5">
                  {links.map(([label, href]) => (
                    <li key={label}>
                      <Link href={href} className="foot-link group inline-flex items-center gap-1 text-white/65 hover:text-[#62D984]">
                        {label}
                        <BrandArrow direction="up-right" size={13} className="text-[#62D984] opacity-0 transition-opacity group-hover:opacity-70" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="foot-copy mt-12 flex flex-col gap-2 border-t border-white/10 pt-6 text-white/40 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 EVN Solar Energy Solutions Pvt. Ltd. All rights reserved.</p>
          <p>Works: 79 Mahada Colony, Malegaon 423203, Maharashtra, India. MNRE-aligned, 5-year service</p>
        </div>
      </div>
    </footer>
  )
}
