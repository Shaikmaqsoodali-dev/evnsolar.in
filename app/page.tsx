'use client'

import Link from 'next/link'
import { useState } from 'react'
import {
  BatteryCharging,
  Check,
  Cpu,
  Factory,
  Gauge,
  Home,
  Leaf,
  Phone,
  PlugZap,
  Award,
  ShieldCheck,
  Zap,
  ClipboardList,
  Search,
  Wrench,
  Sun,
} from 'lucide-react'
import { BrandArrow } from '@/components/brand-arrow'
import { IMG } from '@/lib/brand'
import { CtaBand, Kicker } from '@/components/site-chrome'
import { AnimatedBar, CountUp, Magnetic, Marquee, Parallax, Reveal, ScrollWords, Spot, Stagger, Tilt } from '@/components/motion'
import { Faq, Testimonials } from '@/components/ux-bits'
import { VideoHero } from '@/components/video-hero'

const TICKER = [
  'Generate your own power',
  'Reap the returns',
  'Heal the world',
  'Est. 2020 — solar park pioneers',
  '1,607 MWp implemented',
  '5,700+ acres acquired',
  'Turnkey solar EPC',
  'PM Surya Ghar guidance',
]

const SERVICES = [
  { img: IMG.rooftop, icon: Home, badge: 'Rooftop', t: 'On/Off-Grid Rooftop', d: 'On-grid for savings, off-grid for independence — sized to bill + shadow.', href: '/services' },
  { img: IMG.epc, icon: Factory, badge: 'EPC', t: 'Solar EPC', d: 'Turnkey design, procurement & construction — 1,607 MWp delivered.', href: '/services' },
  { img: IMG.panel, icon: Sun, badge: 'PV + Inverter', t: 'PV Panels & Inverters', d: 'Tier-1 PV, inverters + UPS for continuity and outage protection.', href: '/services' },
  { img: IMG.fleetDepot, icon: BatteryCharging, badge: 'Hybrid', t: 'Hybrid Power Packs', d: 'Solar + grid backup for uninterrupted supply in any environment.', href: '/services' },
  { img: IMG.ground, icon: Gauge, badge: 'MPPT', t: 'Charge Controllers', d: 'MPPT regulation that protects batteries and lifts harvest.', href: '/services' },
  { img: IMG.solarField, icon: PlugZap, badge: 'Grid', t: 'Net Metering', d: 'Feed excess to the grid, earn credits — DISCOM filing included.', href: '/services' },
]

const STEPS = [
  { n: '01', icon: ClipboardList, t: 'Project Planning', d: 'Load study, shadow analysis and structure check before any quote is issued.' },
  { n: '02', icon: Search, t: 'Research & Analysis', d: 'Generation modelling, DISCOM paperwork and subsidy filing handled for you.' },
  { n: '03', icon: Wrench, t: 'Solar Installation', d: 'Galvanised structures, tested protection and app monitoring handover.' },
]

const BARS = [
  { t: 'Solar Panels', v: 92, icon: Sun },
  { t: 'Hybrid Energy', v: 85, icon: BatteryCharging },
  { t: 'EV Charging', v: 78, icon: PlugZap },
]

const WHY = [
  { img: IMG.whyEfficiency, icon: Zap, badge: 'Output', t: 'Efficiency & Power', d: 'TOPCon arrays to 23%+ efficiency, sized from real shadow data.' },
  { img: IMG.whyTrust, icon: ShieldCheck, badge: 'Warranty', t: 'Trust & Warranty', d: 'Written warranties, DISCOM liaison and 5-year service support.' },
  { img: IMG.whyQuality, icon: Award, badge: 'Quality', t: 'High Quality Work', d: 'Galvanised structures, earthing and surge tests you receive in writing.' },
  { img: IMG.whySupport, icon: Phone, badge: '24×7', t: '24×7 Support', d: 'Monitoring alerts plus call support across Nashik and Malegaon.' },
]

function SolarCalculator() {
  const [kind, setKind] = useState<'Residential' | 'Commercial'>('Residential')
  const [bill, setBill] = useState(3000)
  const rate = kind === 'Residential' ? 8 : 10
  const units = Math.round(bill / rate)
  const kw = Math.max(1, Math.round((units / 120) * 10) / 10)
  const monthly = Math.round(kw * 120 * rate)
  const yearly = monthly * 12
  const fill = ((bill - 1000) / (50000 - 1000)) * 100
  const roofFt = Math.round(kw * 100)
  return (
    <Spot className="agency-card hairline overflow-hidden rounded-2xl border border-[#D9E2EA] bg-white">
      <div className="flex">
        {(['Residential', 'Commercial'] as const).map((k) => (
          <button
            key={k}
            onClick={() => setKind(k)}
            className={`press flex-1 px-4 py-3.5 text-[14px] font-semibold uppercase tracking-[0.08em] transition-colors ${kind === k ? 'bg-[#072A45] text-[#62D984]' : 'bg-[#EDF3F7] text-[#3E5162] hover:bg-[#D9E2EA]'}`}
            style={{ fontFamily: 'var(--font-display)' }}
          >
            {k}
          </button>
        ))}
      </div>
      <div className="p-6 sm:p-8">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <p className="text-[14px] font-semibold uppercase tracking-[0.08em] text-[#3E5162]" style={{ fontFamily: 'var(--font-display)' }}>
            Monthly bill — ₹{bill.toLocaleString('en-IN')}
          </p>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-[#62D984]/15 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.1em] text-[#1d7a38]" style={{ fontFamily: 'var(--font-display)' }}>
            <span className="live-dot size-1.5 rounded-full bg-[#33A94F]" aria-hidden />
            Live estimate
          </span>
        </div>
        <input
          type="range"
          min={1000}
          max={50000}
          step={500}
          value={bill}
          onChange={(e) => setBill(Number(e.target.value))}
          className="calc-range field mt-4 w-full"
          style={{ ['--fill' as string]: `${fill}%` }}
          aria-label="Monthly electricity bill"
        />
        <div className="mt-2 flex justify-between text-[11px] font-semibold uppercase tracking-[0.1em] text-[#93A5B5]" style={{ fontFamily: 'var(--font-display)' }}>
          <span>₹1k</span>
          <span>₹50k</span>
        </div>
        {/* visual system meter */}
        <div className="mt-5 rounded-xl border border-[#D9E2EA] bg-[#EDF3F7] p-4">
          <div className="flex items-center justify-between">
            <p className="text-[12px] font-semibold uppercase tracking-[0.1em] text-[#54687A]" style={{ fontFamily: 'var(--font-display)' }}>System size · ~{roofFt} sq.ft roof</p>
            <p className="text-[13px] font-bold text-[#072A45]" style={{ fontFamily: 'var(--font-display)' }}>{kw} kW</p>
          </div>
          <div className="mt-2.5 flex gap-1" aria-hidden>
            {Array.from({ length: 12 }).map((_, i) => (
              <span key={i} className="h-2.5 flex-1 rounded-full transition-colors duration-300" style={{ background: i < Math.min(12, Math.ceil(kw)) ? 'linear-gradient(90deg,#33A94F,#62D984)' : '#D9E2EA' }} />
            ))}
          </div>
        </div>
        <div className="mt-4 grid gap-4 sm:grid-cols-3">
          {[
            [`${units.toLocaleString('en-IN')}`, 'Units / month', false],
            [`${kw} kW`, 'Suggested system', false],
            [`₹${yearly.toLocaleString('en-IN')}`, 'Est. yearly savings', true],
          ].map(([v, l, hot]) => (
            <div key={l as string} className={`rounded-xl p-4 text-center transition-colors ${hot ? 'bg-[#072A45] text-white' : 'bg-[#EDF3F7]'}`}>
              <p className={`text-[24px] font-bold ${hot ? 'text-[#62D984]' : 'text-[#072A45]'}`} style={{ fontFamily: 'var(--font-display)' }}>{v}</p>
              <p className={`mt-1 text-[12px] font-semibold uppercase tracking-[0.08em] ${hot ? 'text-white/70' : 'text-[#54687A]'}`} style={{ fontFamily: 'var(--font-display)' }}>{l}</p>
            </div>
          ))}
        </div>
        <p className="mt-4 text-[13px] leading-relaxed text-[#5B6E80]">
          Indicative only — final size follows site survey, shadow analysis and DISCOM rules. Subsidy extra under PM Surya Ghar.
        </p>
        <Magnetic>
          <Link
            href="/contact"
            className="btn-shine press mt-5 inline-flex items-center gap-2 rounded-lg bg-[#072A45] px-7 py-3.5 text-[14px] font-semibold uppercase tracking-[0.08em] text-white transition-colors hover:bg-[#33A94F] hover:text-[#072A45]"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Get exact quote <BrandArrow size={15} />
          </Link>
        </Magnetic>
      </div>
    </Spot>
  )
}

export default function HomePage() {
  return (
    <main className="bg-white">
      {/* 1 — SOLOR HERO */}
      <VideoHero />

      <div className="relative border-y border-white/10 bg-[#072A45] py-3.5 text-white/75">
        <Marquee items={TICKER} duration={36} className="marquee-fade" />
        <div aria-hidden className="pointer-events-none absolute inset-y-0 left-0 w-28 bg-gradient-to-r from-[#072A45] via-[#072A45]/70 to-transparent" />
        <div aria-hidden className="pointer-events-none absolute inset-y-0 right-0 w-28 bg-gradient-to-l from-[#072A45] via-[#072A45]/70 to-transparent" />
      </div>

      {/* 2 — ABOUT (Solor: 2 images + About us + checklist 2×2) */}
      <section className="relative overflow-hidden bg-white">
        <div aria-hidden className="bg-grid-light absolute inset-0 opacity-40 [mask-image:radial-gradient(ellipse_70%_60%_at_50%_40%,black,transparent)]" />
        <div className="relative mx-auto grid max-w-7xl gap-12 px-6 py-14 sm:py-20 lg:grid-cols-2 lg:items-center">
          <Reveal variant="left">
            <div className="relative grid grid-cols-12 gap-4">
              <div className="img-zoom col-span-7 overflow-hidden rounded-2xl">
                <Parallax speed={0.08} className="aspect-[3/4] w-full rounded-2xl">
                  <img src={IMG.engineer1} alt="EVN engineering team installing rooftop solar" className="h-full w-full object-cover" />
                </Parallax>
              </div>
              <div className="col-span-5 flex flex-col gap-4">
                <div className="img-zoom overflow-hidden rounded-2xl">
                  <img src={IMG.rooftop} alt="Rooftop solar array in Nashik" className="aspect-square w-full object-cover" />
                </div>
                <div className="agency-panel grain relative flex flex-1 flex-col justify-center overflow-hidden rounded-2xl bg-[#072A45] p-6 text-white">
                  <div aria-hidden className="orb right-[-30%] top-[-40%] size-40 bg-[#62D984]/30" />
                  <p className="stat-number relative text-[#62D984]"><CountUp to={1607} /></p>
                  <p className="relative mt-2 text-[13px] font-semibold uppercase leading-snug tracking-[0.08em] text-white/85" style={{ fontFamily: 'var(--font-display)' }}>
                    MWp solar delivered since 2020
                  </p>
                </div>
              </div>
              {/* floating agency badge */}
              <div className="float-y absolute -bottom-5 left-6 flex items-center gap-3 rounded-2xl border border-[#D9E2EA] bg-white/90 px-4 py-3 shadow-[0_18px_44px_-18px_rgba(7,42,69,0.4)] backdrop-blur-md">
                <span className="grid size-10 place-items-center rounded-full bg-[#62D984] text-[#072A45]" aria-hidden>
                  <ShieldCheck size={18} strokeWidth={2.4} />
                </span>
                <div>
                  <p className="text-[14px] font-bold text-[#072A45]" style={{ fontFamily: 'var(--font-display)' }}>MNRE-aligned EPC</p>
                  <p className="text-[12px] text-[#5B6E80]">5-yr service · DISCOM liaison</p>
                </div>
              </div>
            </div>
          </Reveal>
          <Reveal variant="right" delay={120}>
            <Kicker>About us</Kicker>
            <ScrollWords
              text="Early solar-park movers, *now turnkey EPC.*"
              className="sx sx-lg mt-3 text-[#072A45] [&_em]:text-[#33A94F]"
            />
            <p className="mt-4 max-w-lg text-[15px] font-normal leading-[1.75] text-[#3E5162]">
              Established in 2020, we grew from solar-park pioneers into an integrated
              solar company with 1,607 MWp implemented and 5,700+ acres acquired for
              customers across India — consultative, customized, and built for longevity.
            </p>
            <ul className="mt-6 grid gap-x-6 sm:grid-cols-2">
              {[
                'Turnkey Solar EPC',
                'On-Grid / Off-Grid Rooftop',
                'Net Metering & Subsidy Filing',
                'Panels, Inverters, Hybrid Packs',
              ].map((li) => (
                <li key={li} className="group flex items-start gap-3 border-b border-[#DCE6EE] py-3 text-[14.5px] font-normal leading-relaxed text-[#072A45]">
                  <span className="mt-0.5 grid size-6 shrink-0 place-items-center rounded-full bg-[#62D984] text-[#072A45] transition-transform duration-300 group-hover:scale-110">
                    <Check size={13} strokeWidth={3} />
                  </span>
                  <span className="transition-transform duration-300 group-hover:translate-x-0.5">{li}</span>
                </li>
              ))}
            </ul>
            <div className="mt-7 flex flex-wrap items-center gap-5">
              <Magnetic>
                <Link href="/about" className="btn-shine press inline-flex items-center gap-2 rounded-lg bg-[#072A45] px-7 py-3.5 text-[14px] font-semibold uppercase tracking-[0.08em] text-white transition-colors hover:bg-[#33A94F] hover:text-[#072A45]" style={{ fontFamily: 'var(--font-display)' }}>
                  More about us <BrandArrow size={15} />
                </Link>
              </Magnetic>
              <a href="tel:+917040506295" className="group flex items-center gap-3">
                <span className="press grid size-11 place-items-center rounded-full border border-[#D9E2EA] text-[#072A45] transition-colors group-hover:border-[#33A94F] group-hover:bg-[#62D984]">
                  <Phone size={16} />
                </span>
                <span>
                  <span className="block text-[11px] font-semibold uppercase tracking-[0.12em] text-[#5B6E80]" style={{ fontFamily: 'var(--font-display)' }}>Talk to an engineer</span>
                  <span className="block text-[15px] font-bold text-[#072A45]" style={{ fontFamily: 'var(--font-display)' }}>+91 70405 06295</span>
                </span>
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 3 — SERVICES (Solor: 6 image cards) */}
      <section className="hairline relative overflow-hidden bg-[#EDF3F7]">
        <div aria-hidden className="bg-dots absolute inset-0 opacity-40 [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,black,transparent)]" />
        <div className="relative mx-auto max-w-7xl px-6 py-14 sm:py-20">
          <div className="mx-auto max-w-2xl text-center">
            <div className="flex justify-center"><Kicker center>Our services</Kicker></div>
            <ScrollWords
              text="Best Offer For *Renewable Energy.*"
              className="sx sx-lg mt-3 text-[#072A45] [&_em]:text-[#33A94F]"
            />
            <p className="mx-auto mt-4 max-w-xl text-[15px] font-normal leading-[1.75] text-[#3E5162]">
              Six factory-tested disciplines, each with drawings, protection design and a monitoring handover.
            </p>
          </div>
          <Stagger className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3" itemClassName="h-full" step={90}>
            {SERVICES.map(({ img, icon: Icon, badge, t, d, href }) => (
              <Tilt key={t} className="h-full">
                <Spot className="agency-card h-full overflow-hidden rounded-2xl border border-[#D9E2EA] bg-white">
                  <Link href={href} className="group lift block h-full overflow-hidden rounded-2xl">
                    <div className="photo-frame relative overflow-hidden">
                      <img src={img} alt={`${t} — ${badge} installation photo`} className="aspect-[16/10] w-full object-cover object-center transition-transform duration-500 group-hover:scale-[1.05]" />
                      <span aria-hidden className="photo-scrim" />
                      <span className="photo-badge photo-badge--top" aria-hidden>
                        <Icon size={15} strokeWidth={2.2} />
                        <span className="photo-badge__label">{badge}</span>
                      </span>
                      <span className="photo-caption">
                        <h3 className="photo-title">{t}</h3>
                      </span>
                    </div>
                    <div className="flex items-start justify-between gap-4 p-5">
                      <div className="flex items-start gap-3">
                        <span className="title-icon size-10 bg-[#072A45] text-[#62D984] transition-colors duration-300 group-hover:bg-[#33A94F] group-hover:text-[#072A45]" aria-hidden>
                          <Icon size={18} strokeWidth={2} />
                        </span>
                        <p className="card-desc pt-1 text-[#54687A]">{d}</p>
                      </div>
                      <span className="arrow-slide grid size-10 shrink-0 place-items-center rounded-full bg-[#EDF3F7] text-[#072A45] group-hover:bg-[#62D984]" aria-hidden>
                        <BrandArrow direction="up-right" size={16} />
                      </span>
                    </div>
                  </Link>
                </Spot>
              </Tilt>
            ))}
          </Stagger>
          <Reveal variant="up" delay={100} className="mt-8 text-center">
            <Link href="/services" className="inline-flex items-center gap-2 rounded-full border border-[#072A45]/15 bg-white px-6 py-3 text-[13px] font-semibold uppercase tracking-[0.08em] text-[#072A45] transition-colors hover:border-[#072A45] hover:bg-[#072A45] hover:text-[#62D984]" style={{ fontFamily: 'var(--font-display)' }}>
              View all solar + EV services <BrandArrow size={14} />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* 4 — WORK PROCESS (Solor: 01 / 02 / 03) */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-14 sm:py-20">
          <div className="mx-auto max-w-2xl text-center">
            <div className="flex justify-center"><Kicker center>Our latest process</Kicker></div>
            <ScrollWords text="Our *Work Process.*" className="sx sx-lg mt-3 text-[#072A45] [&_em]:text-[#33A94F]" />
            <p className="mx-auto mt-4 max-w-xl text-[15px] leading-relaxed text-[#54687A]">Survey to switch-on in three accountable stages — you approve every drawing before we build.</p>
          </div>
          <Stagger className="process-rail mt-12 grid gap-6 md:grid-cols-3" step={110}>
            {STEPS.map(({ n, icon: Icon, t, d }) => (
              <Spot key={n} className="agency-card relative overflow-hidden rounded-2xl border border-[#D9E2EA] bg-white p-7 text-center">
                <span className="solor-step relative z-[1] mx-auto size-14 text-[18px] ring-4 ring-[#EDF3F7]">{n}</span>
                <span className="title-icon relative z-[1] mx-auto mt-4 size-11 bg-[#EDF3F7] text-[#072A45]" aria-hidden>
                  <Icon size={20} strokeWidth={2} />
                </span>
                <h3 className="relative z-[1] mt-4 text-[22px] font-bold tracking-tight text-[#072A45]" style={{ fontFamily: 'var(--font-display)' }}>{t}</h3>
                <p className="relative z-[1] mx-auto mt-2 max-w-xs text-[14.5px] leading-relaxed text-[#54687A]">{d}</p>
                <span aria-hidden className="sx-index pointer-events-none absolute -bottom-3 right-3 opacity-60">{n}</span>
              </Spot>
            ))}
          </Stagger>
          <Reveal variant="up" delay={120} className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Magnetic>
              <Link href="/contact" className="btn-shine press inline-flex items-center gap-2 rounded-lg bg-[#072A45] px-7 py-3.5 text-[14px] font-semibold uppercase tracking-[0.08em] text-white transition-colors hover:bg-[#33A94F] hover:text-[#072A45]" style={{ fontFamily: 'var(--font-display)' }}>
                Start with a free survey <BrandArrow size={15} />
              </Link>
            </Magnetic>
            <span className="text-[13px] text-[#5B6E80]">Site photos + bill → quote in 1 working day</span>
          </Reveal>
        </div>
      </section>

      {/* 5 — ENERGY PROGRESS (Solor: image + progress bars) */}
      <section className="grain relative overflow-hidden bg-[#072A45] text-white">
        <div aria-hidden className="bg-grid-dark absolute inset-0 opacity-50 [mask-image:radial-gradient(ellipse_70%_70%_at_50%_30%,black,transparent)]" />
        <div aria-hidden className="orb left-[-8%] top-[-20%] size-80 bg-[#62D984]/20" />
        <div aria-hidden className="orb orb-2 right-[-10%] bottom-[-30%] size-96 bg-[#0F88C7]/20" />
        <div className="relative mx-auto grid max-w-7xl gap-12 px-6 py-14 sm:py-20 lg:grid-cols-2 lg:items-center">
          <Reveal variant="left">
            <div className="agency-panel photo-frame overflow-hidden rounded-2xl">
              <Parallax speed={0.08} className="aspect-[4/3] w-full rounded-2xl">
                <img src={IMG.ground} alt="Solar plant at golden hour" className="h-full w-full object-cover" />
              </Parallax>
              <span aria-hidden className="photo-scrim rounded-2xl" />
              <span aria-hidden className="photo-caption">
                <span className="photo-eyebrow"><span className="live-dot mr-1 size-1.5 rounded-full bg-[#62D984]" /> Live telemetry</span>
                <span className="photo-title photo-title--lg">1,607 MWp monitored daily</span>
                <span className="photo-sub">Generation · savings · charger use — one app</span>
              </span>
              <span className="absolute right-4 top-4 z-[2] rounded-full border border-white/20 bg-black/40 px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.12em] text-[#62D984] backdrop-blur-md" style={{ fontFamily: 'var(--font-display)' }} aria-hidden>
                ● Generating now
              </span>
            </div>
          </Reveal>
          <Reveal variant="right" delay={120}>
            <p className="micro inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-[#62D984]">
              <span className="mr-0 inline-block size-2 rounded-full bg-[#62D984]" aria-hidden />
              Energy progress
            </p>
            <h2 className="sx sx-lg mt-4 text-white">Best Solution For Your Solar Energy</h2>
            <p className="mt-4 max-w-lg text-[15px] leading-relaxed text-white/65">
              Every site is metered and reported — generation, savings and charger use visible in one app.
            </p>
            <div className="mt-7 space-y-5">
              {BARS.map(({ t, v, icon: Icon }) => (
                <div key={t} className="rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm transition-colors hover:border-[#62D984]/40">
                  <div className="mb-2.5 flex items-center justify-between">
                    <p className="flex items-center gap-2 text-[15px] font-bold uppercase tracking-[0.06em]" style={{ fontFamily: 'var(--font-display)' }}>
                      <span className="title-icon size-8 bg-white/10 text-[#62D984]" aria-hidden>
                        <Icon size={16} strokeWidth={2.2} />
                      </span>
                      {t}
                    </p>
                    <p className="text-[15px] font-bold text-[#62D984]" style={{ fontFamily: 'var(--font-display)' }}><CountUp to={v} suffix="%" /></p>
                  </div>
                  <AnimatedBar value={v} />
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* 6 — CTA BANNER (Solor: Have Questions? Call Us) */}
      <section className="grain relative overflow-hidden">
        <Parallax speed={0.1} scale={1.18} className="absolute inset-0">
          <img src={IMG.solarField} alt="Solar panels under blue sky" className="h-full w-full object-cover brightness-[1.06]" />
        </Parallax>
        <div className="absolute inset-0 bg-gradient-to-r from-[#072A45]/80 via-[#072A45]/45 to-[#072A45]/15" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#041824]/60 via-transparent to-transparent" />
        <div className="relative mx-auto flex max-w-7xl flex-col items-center px-6 py-14 text-center sm:py-20">
          <Reveal variant="up">
            <p className="micro inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-[#62D984] backdrop-blur-md">
              <span className="live-dot size-2 rounded-full bg-[#62D984]" aria-hidden />
              Ready when you are · replies in 1 working day
            </p>
            <h2 className="sx sx-xl mx-auto mt-4 max-w-3xl text-white">Have Questions? Call Us +91 70405 06295</h2>
            <p className="mx-auto mt-3 max-w-xl text-[15px] leading-relaxed text-white/75">
              Send your bill and site photos — receive size, generation and subsidy breakup within one working day.
            </p>
            <div className="mt-7 flex flex-wrap justify-center gap-3">
              <Magnetic>
                <Link href="/contact" className="btn-shine press inline-flex items-center gap-2 rounded-lg bg-[#62D984] px-7 py-3.5 text-[14px] font-semibold uppercase tracking-[0.08em] text-[#072A45] transition-colors hover:bg-white" style={{ fontFamily: 'var(--font-display)' }}>
                  Contact now <BrandArrow size={15} />
                </Link>
              </Magnetic>
              <Magnetic>
                <a href="tel:+917040506295" className="press inline-flex items-center gap-2 rounded-lg border border-white/40 bg-black/20 px-7 py-3.5 text-[14px] font-semibold uppercase tracking-[0.08em] text-white backdrop-blur-md transition-colors hover:bg-white/10" style={{ fontFamily: 'var(--font-display)' }}>
                  <Phone size={15} /> +91 70405 06295
                </a>
              </Magnetic>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 7 — WHY CHOOSE US (Solor: 4 image items) */}
      <section className="hairline bg-white">
        <div className="mx-auto max-w-7xl px-6 py-14 sm:py-20">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div className="max-w-2xl">
              <Kicker>Why choose us</Kicker>
              <ScrollWords text="Providing Solar *Energy Solutions.*" className="sx sx-lg mt-3 text-[#072A45] [&_em]:text-[#33A94F]" />
            </div>
            <Reveal variant="right" delay={100}>
              <Link href="/projects" className="press inline-flex items-center gap-2 rounded-full border border-[#D9E2EA] px-5 py-2.5 text-[13px] font-semibold uppercase tracking-[0.08em] text-[#072A45] transition-colors hover:border-[#072A45] hover:bg-[#072A45] hover:text-[#62D984]" style={{ fontFamily: 'var(--font-display)' }}>
                See proof in projects <BrandArrow direction="up-right" size={14} />
              </Link>
            </Reveal>
          </div>
          <Stagger className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4" step={90}>
            {WHY.map(({ img, icon: Icon, badge, t, d }) => (
              <Spot key={t} className="agency-card group overflow-hidden rounded-2xl border border-[#D9E2EA] bg-white">
                <div className="photo-frame relative overflow-hidden">
                  <img src={img} alt={`${t} — ${badge} illustrative photo`} className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-[1.05]" />
                  <span aria-hidden className="photo-scrim" />
                  <span className="photo-badge photo-badge--top" aria-hidden>
                    <Icon size={15} strokeWidth={2.2} />
                    <span className="photo-badge__label">{badge}</span>
                  </span>
                  <span className="photo-caption">
                    <h3 className="photo-title photo-title--sm">{t}</h3>
                  </span>
                </div>
                <div className="flex items-start gap-3 p-5">
                  <span className="title-icon size-9 shrink-0 bg-[#072A45] text-[#62D984] transition-colors duration-300 group-hover:bg-[#33A94F] group-hover:text-[#072A45]" aria-hidden>
                    <Icon size={17} strokeWidth={2} />
                  </span>
                  <p className="card-desc pt-0.5 text-[#54687A]">{d}</p>
                </div>
              </Spot>
            ))}
          </Stagger>
        </div>
      </section>

      {/* 8 — COUNTERS (agency dark proof band) */}
      <section className="grain relative overflow-hidden bg-[#051E33] text-white">
        <div aria-hidden className="bg-grid-dark absolute inset-0 opacity-50" />
        <div aria-hidden className="absolute inset-x-0 top-0 h-[2px]" style={{ background: 'linear-gradient(90deg, #0E8ACB 0%, #43A85C 55%, #7BC24A 100%)' }} />
        <div className="relative mx-auto max-w-7xl px-6 py-12 sm:py-14">
          <div className="grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-4">
            {[
              { v: 1607, s: '', l: 'MWp Delivered', d: 0 },
              { v: 5700, s: '+', l: 'Acres Acquired', d: 0 },
              { v: 1000, s: '+', l: 'Happy Clients', d: 0 },
              { v: 4.9, s: '★', l: 'Google Rating', d: 1 },
            ].map(({ v, s, l, d = 0 }) => (
              <div key={l} className="group bg-[#072A45]/90 px-6 py-8 text-center backdrop-blur transition-colors duration-300 hover:bg-[#0A3A5E]">
                <p className="stat-number text-white transition-colors group-hover:text-[#62D984]"><CountUp to={v} decimals={d} suffix={s} /></p>
                <p className="mt-2 flex items-center justify-center gap-2 text-[13px] font-semibold uppercase tracking-[0.1em] text-white/60" style={{ fontFamily: 'var(--font-display)' }}>
                  <span className="inline-block h-px w-5 bg-[#62D984]/60" aria-hidden />{l}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8b — SOCIAL PROOF (testimonials + faq) */}
      <section className="relative overflow-hidden bg-[#EDF3F7]">
        <div aria-hidden className="bg-dots absolute inset-0 opacity-50 [mask-image:radial-gradient(ellipse_60%_60%_at_50%_20%,black,transparent)]" />
        <div className="relative mx-auto grid max-w-7xl gap-10 px-6 py-14 sm:py-20 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
          <div>
            <Kicker>Client proof</Kicker>
            <ScrollWords text="Trusted Where *Uptime Matters.*" className="sx sx-lg mt-3 text-[#072A45] [&_em]:text-[#33A94F]" />
            <p className="mt-4 max-w-md text-[15px] leading-relaxed text-[#3E5162]">
              Homes, mills and depots that meter every unit — hover to pause, tap arrows to browse.
            </p>
            <Reveal variant="up" delay={120} className="mt-7">
              <Testimonials />
            </Reveal>
          </div>
          <div>
            <Kicker>Good to know</Kicker>
            <ScrollWords text="Answers *Before You Ask.*" className="sx sx-lg mt-3 text-[#072A45] [&_em]:text-[#33A94F]" />
            <Reveal variant="up" delay={120} className="mt-6 rounded-2xl border border-[#D9E2EA] bg-white p-6 sm:p-7">
              <Faq
                items={[
                  ['How fast can my plant go live?', 'Survey in 2–3 days, DISCOM + net-metering in 2–4 weeks typical. Most rooftops install in 3–5 working days once approvals land.'],
                  ['Do you handle subsidy and net-metering?', 'Yes — PM Surya Ghar filing, DISCOM liaison, testing and meter swap are included in every residential quote.'],
                  ['What about maintenance?', '5-year service with app monitoring, cleaning schedules and on-call O&M across Nashik and Malegaon.'],
                  ['Can solar + EV charging combine?', 'Yes — our signature package sizes one plant for home load plus depot or car charging, metered separately in one app.'],
                ]}
              />
              <Link href="/contact" className="mt-5 inline-flex items-center gap-1.5 text-[14px] font-semibold uppercase tracking-[0.08em] text-[#0B6AA0]" style={{ fontFamily: 'var(--font-display)' }}>
                Still curious? Talk to us <BrandArrow size={14} />
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 9 — SOLAR CALCULATOR (Solor) */}
      <section id="calculator" className="relative overflow-hidden bg-white">
        <div aria-hidden className="bg-grid-light absolute inset-0 opacity-40 [mask-image:radial-gradient(ellipse_60%_60%_at_20%_40%,black,transparent)]" />
        <div className="relative mx-auto grid max-w-7xl gap-10 px-6 py-14 sm:py-20 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <Kicker>Solar calculator</Kicker>
            <ScrollWords text="Your Solar *Savings Calculator.*" className="sx sx-lg mt-3 text-[#072A45] [&_em]:text-[#33A94F]" />
            <p className="mt-4 max-w-md text-[15px] leading-relaxed text-[#3E5162]">
              Pick Residential or Commercial, slide your monthly bill — get an instant size and savings estimate.
            </p>
            <ul className="mt-6 space-y-3">
              {[
                ['01', 'No email needed — instant math'],
                ['02', 'Roof area auto-estimated'],
                ['03', 'Subsidy breakup on quote call'],
              ].map(([n, t]) => (
                <li key={n} className="flex items-center gap-3 text-[14px] text-[#072A45]">
                  <span className="grid size-8 place-items-center rounded-full bg-[#EDF3F7] text-[12px] font-bold text-[#0B6AA0]" style={{ fontFamily: 'var(--font-display)' }}>{n}</span>
                  {t}
                </li>
              ))}
            </ul>
          </div>
          <Reveal variant="right" delay={120}>
            <SolarCalculator />
          </Reveal>
        </div>
      </section>

      {/* 10 — LATEST NEWS (Solor: 3 blog cards) */}
      <section className="bg-[#EDF3F7]">
        <div className="mx-auto max-w-7xl px-6 py-14 sm:py-20">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div className="max-w-2xl">
              <Kicker>Recent articles</Kicker>
              <ScrollWords text="Our *Latest News.*" className="sx sx-lg mt-3 text-[#072A45] [&_em]:text-[#33A94F]" />
            </div>
            <Link href="/blog" className="inline-flex items-center gap-1.5 text-[14px] font-semibold uppercase tracking-[0.08em] text-[#0B6AA0]" style={{ fontFamily: 'var(--font-display)' }}>
              All articles <BrandArrow size={14} />
            </Link>
          </div>
          <Stagger className="mt-10 grid gap-6 md:grid-cols-3" itemClassName="h-full" step={100}>
            {[
              { img: IMG.blog1, icon: Cpu, badge: 'Tech', cat: 'Solar Technology', t: 'Exploring the Latest Innovations in Solar Technology', d: 'TOPCon gains, micro-inverters and what they mean for your terrace.' },
              { img: IMG.blog2, icon: Leaf, badge: 'Green', cat: 'Sustainability', t: 'Solar Solutions for a Sustainable Tomorrow', d: 'How homes and depots pair solar with EV charging in one project.' },
              { img: IMG.blog3, icon: BatteryCharging, badge: 'Storage', cat: 'Renewable Power', t: 'Advancements in Renewable Power & Storage', d: 'Hybrid inverters and batteries that ride through evening cuts.' },
            ].map(({ img, icon: Icon, badge, cat, t, d }) => (
              <Tilt key={t} className="h-full">
                <Spot className="agency-card h-full overflow-hidden rounded-2xl border border-[#D9E2EA] bg-white">
                  <Link href="/blog" className="group lift img-zoom block h-full overflow-hidden rounded-2xl">
                    <div className="photo-frame relative overflow-hidden">
                      <img src={img} alt={`${t} — ${cat} article cover photo`} className="aspect-[16/10] w-full object-cover" />
                      <span aria-hidden className="photo-scrim" />
                      <span className="photo-badge photo-badge--top" aria-hidden>
                        <Icon size={15} strokeWidth={2.2} />
                        <span className="photo-badge__label">{cat}</span>
                      </span>
                      <span className="photo-caption">
                        <h3 className="photo-title photo-title--sm">{t}</h3>
                      </span>
                    </div>
                    <div className="p-5">
                      <p className="card-desc text-[#54687A]">{d}</p>
                      <p className="mt-3 inline-flex items-center gap-1.5 text-[13px] font-semibold uppercase tracking-[0.08em] text-[#0B6AA0]" style={{ fontFamily: 'var(--font-display)' }}>
                        Read more <span className="arrow-slide inline-flex"><BrandArrow direction="up-right" size={14} /></span>
                      </p>
                    </div>
                  </Link>
                </Spot>
              </Tilt>
            ))}
          </Stagger>
        </div>
      </section>

      <CtaBand />
    </main>
  )
}
