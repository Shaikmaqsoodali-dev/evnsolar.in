'use client'

import Link from 'next/link'
import { useState } from 'react'
import { ArrowRight, ArrowUpRight, Check, Phone } from 'lucide-react'
import { IMG } from '@/lib/brand'
import { CtaBand, Kicker } from '@/components/site-chrome'
import { CountUp, Marquee, Reveal, ScrollWords, Stagger, Tilt } from '@/components/motion'
import { VideoHero } from '@/components/video-hero'

const TICKER = [
  'Generate your own power',
  'Reap the returns',
  'Heal the world',
  'MNRE-aligned engineering',
  'Tier-1 modules',
  '2.4 MW+ installed',
  'PM Surya Ghar guidance',
]

const SERVICES = [
  { img: IMG.rooftop, t: 'Solar Maintenance', d: 'Health checks, cleaning and generation audits that keep output high.', href: '/services' },
  { img: IMG.engineer2, t: 'Energy Saving Devices', d: 'Load management and monitoring that cut waste before you add kW.', href: '/services' },
  { img: IMG.ground, t: 'Solar Solutions', d: 'Rooftop and ground plants engineered to your bill and shadow profile.', href: '/services' },
  { img: IMG.panel, t: 'Solar PV Systems', d: 'Tier-1 TOPCon arrays with tested string and micro-inverters.', href: '/services' },
  { img: IMG.fleetDepot, t: 'Hybrid Energy', d: 'Hybrid + battery backup for outages, pre-wired for EV charging.', href: '/ev-charging' },
  { img: IMG.solarField, t: 'Renewable Energy', d: 'Solar carports and EV chargers combined into one clean system.', href: '/ev-charging' },
]

const STEPS = [
  { n: '01', t: 'Project Planning', d: 'Load study, shadow analysis and structure check before any quote is issued.' },
  { n: '02', t: 'Research & Analysis', d: 'Generation modelling, DISCOM paperwork and subsidy filing handled for you.' },
  { n: '03', t: 'Solar Installation', d: 'Galvanised structures, tested protection and app monitoring handover.' },
]

const BARS = [
  { t: 'Solar Panels', v: 92 },
  { t: 'Hybrid Energy', v: 85 },
  { t: 'EV Charging', v: 78 },
]

const WHY = [
  { img: IMG.panel, t: 'Efficiency & Power', d: 'TOPCon arrays to 23%+ efficiency, sized from real shadow data.' },
  { img: IMG.engineer1, t: 'Trust & Warranty', d: 'Written warranties, DISCOM liaison and 5-year service support.' },
  { img: IMG.industrial, t: 'High Quality Work', d: 'Galvanised structures, earthing and surge tests you receive in writing.' },
  { img: IMG.evCharge, t: '24×7 Support', d: 'Monitoring alerts plus call support across Nashik and Malegaon.' },
]

function SolarCalculator() {
  const [kind, setKind] = useState<'Residential' | 'Commercial'>('Residential')
  const [bill, setBill] = useState(3000)
  const rate = kind === 'Residential' ? 8 : 10
  const units = Math.round(bill / rate)
  const kw = Math.max(1, Math.round((units / 120) * 10) / 10)
  const monthly = Math.round(kw * 120 * rate)
  const yearly = monthly * 12
  return (
    <div className="overflow-hidden rounded-xl border border-[#DFE5DC] bg-white">
      <div className="flex">
        {(['Residential', 'Commercial'] as const).map((k) => (
          <button
            key={k}
            onClick={() => setKind(k)}
            className={`flex-1 px-4 py-3.5 text-[14px] font-semibold uppercase tracking-[0.08em] transition-colors ${kind === k ? 'bg-[#163300] text-[#89EA5F]' : 'bg-[#EFF1ED] text-[#4C554B] hover:bg-[#DFE5DC]'}`}
            style={{ fontFamily: 'var(--font-display)' }}
          >
            {k}
          </button>
        ))}
      </div>
      <div className="p-6 sm:p-8">
        <p className="text-[14px] font-semibold uppercase tracking-[0.08em] text-[#4C554B]" style={{ fontFamily: 'var(--font-display)' }}>
          Monthly electricity bill — ₹{bill.toLocaleString('en-IN')}
        </p>
        <input
          type="range"
          min={1000}
          max={50000}
          step={500}
          value={bill}
          onChange={(e) => setBill(Number(e.target.value))}
          className="field mt-4 w-full accent-[#5EC73A]"
          aria-label="Monthly electricity bill"
        />
        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          {[
            [`${units.toLocaleString('en-IN')}`, 'Units / month'],
            [`${kw} kW`, 'Suggested system'],
            [`₹${yearly.toLocaleString('en-IN')}`, 'Est. yearly savings'],
          ].map(([v, l]) => (
            <div key={l} className="rounded-lg bg-[#EFF1ED] p-4 text-center">
              <p className="text-[24px] font-bold text-[#163300]" style={{ fontFamily: 'var(--font-display)' }}>{v}</p>
              <p className="mt-1 text-[12px] font-semibold uppercase tracking-[0.08em] text-[#5C665A]" style={{ fontFamily: 'var(--font-display)' }}>{l}</p>
            </div>
          ))}
        </div>
        <p className="mt-4 text-[13px] leading-relaxed text-[#6B7268]">
          Indicative only — final size follows site survey, shadow analysis and DISCOM rules. Subsidy extra under PM Surya Ghar.
        </p>
        <Link
          href="/contact"
          className="btn-shine mt-5 inline-flex items-center gap-2 rounded-lg bg-[#163300] px-7 py-3.5 text-[14px] font-semibold uppercase tracking-[0.08em] text-white transition-colors hover:bg-[#5EC73A] hover:text-[#163300]"
          style={{ fontFamily: 'var(--font-display)' }}
        >
          Get exact quote <ArrowRight size={15} />
        </Link>
      </div>
    </div>
  )
}

export default function HomePage() {
  return (
    <main className="bg-white">
      {/* 1 — SOLOR HERO */}
      <VideoHero />

      <Marquee
        items={TICKER}
        duration={36}
        className="border-y border-white/10 bg-[#163300] py-3.5 text-white/75"
      />

      {/* 2 — ABOUT (Solor: 2 images + About us + checklist 2×2) */}
      <section className="bg-white">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-14 sm:py-20 lg:grid-cols-2 lg:items-center">
          <Reveal variant="left">
            <div className="grid grid-cols-12 gap-4">
              <img src={IMG.engineer1} alt="EVN engineering team installing rooftop solar" className="col-span-7 aspect-[3/4] w-full rounded-xl object-cover" />
              <div className="col-span-5 flex flex-col gap-4">
                <img src={IMG.rooftop} alt="Rooftop solar array in Nashik" className="aspect-square w-full rounded-xl object-cover" />
                <div className="flex flex-1 flex-col justify-center rounded-xl bg-[#163300] p-6 text-white">
                  <p className="stat-number text-[#89EA5F]">25+</p>
                  <p className="mt-2 text-[13px] font-semibold uppercase leading-snug tracking-[0.08em] text-white/85" style={{ fontFamily: 'var(--font-display)' }}>
                    Years of clean-energy practice
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
          <Reveal variant="right" delay={120}>
            <Kicker>About us</Kicker>
            <ScrollWords
              text="About Green Energy Solar *— EVN.*"
              className="sx sx-lg mt-3 text-[#163300]"
            />
            <p className="mt-4 max-w-lg text-[15px] font-normal leading-[1.75] text-[#4C554B]">
              EVN Solar Energy Solutions designs rooftop solar, ground-mounted plants,
              solar carports and EV charging as one electrical system — generation sized
              to your bill and your kilometres, with protection, approvals and
              monitoring included from day one.
            </p>
            <ul className="mt-6 grid gap-x-6 sm:grid-cols-2">
              {[
                'Solar Inverter Setup',
                'Battery Storage Solutions',
                'Subsidy & Material Financing',
                '24×7 Call & Chat Support',
              ].map((li) => (
                <li key={li} className="flex items-start gap-3 border-b border-[#E5EAE3] py-3 text-[14.5px] font-normal leading-relaxed text-[#163300]">
                  <span className="mt-0.5 grid size-6 shrink-0 place-items-center rounded-full bg-[#89EA5F] text-[#163300]">
                    <Check size={13} strokeWidth={3} />
                  </span>
                  {li}
                </li>
              ))}
            </ul>
            <div className="mt-7">
              <Link href="/about" className="btn-shine inline-flex items-center gap-2 rounded-lg bg-[#163300] px-7 py-3.5 text-[14px] font-semibold uppercase tracking-[0.08em] text-white transition-colors hover:bg-[#5EC73A] hover:text-[#163300]" style={{ fontFamily: 'var(--font-display)' }}>
                More about us <ArrowRight size={15} />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 3 — SERVICES (Solor: 6 image cards) */}
      <section className="bg-[#EFF1ED]">
        <div className="mx-auto max-w-7xl px-6 py-14 sm:py-20">
          <div className="mx-auto max-w-2xl text-center">
            <div className="flex justify-center"><Kicker center>Our services</Kicker></div>
            <ScrollWords
              text="Best Offer For *Renewable Energy.*"
              className="sx sx-lg mt-3 text-[#163300]"
            />
            <p className="mx-auto mt-4 max-w-xl text-[15px] font-normal leading-[1.75] text-[#4C554B]">
              Six factory-tested disciplines, each with drawings, protection design and a monitoring handover.
            </p>
          </div>
          <Stagger className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3" itemClassName="h-full" step={90}>
            {SERVICES.map(({ img, t, d, href }) => (
              <Tilt key={t} className="h-full">
                <Link href={href} className="group lift block h-full overflow-hidden rounded-xl border border-[#DFE5DC] bg-white transition-shadow hover:shadow-[0_14px_40px_rgba(22,51,0,0.12)]">
                  <div className="relative overflow-hidden">
                    <img src={img} alt={t} className="aspect-[16/10] w-full object-cover transition-transform duration-500 group-hover:scale-[1.05]" />
                  </div>
                  <div className="flex items-start justify-between gap-4 p-5">
                    <div>
                      <h3 className="card-title text-[#163300]">{t}</h3>
                      <p className="card-desc mt-1.5 text-[#5C665A]">{d}</p>
                    </div>
                    <span className="grid size-10 shrink-0 place-items-center rounded-full bg-[#EFF1ED] text-[#163300] transition-colors group-hover:bg-[#89EA5F]" aria-hidden>
                      <ArrowUpRight size={16} />
                    </span>
                  </div>
                </Link>
              </Tilt>
            ))}
          </Stagger>
        </div>
      </section>

      {/* 4 — WORK PROCESS (Solor: 01 / 02 / 03) */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-14 sm:py-20">
          <div className="mx-auto max-w-2xl text-center">
            <div className="flex justify-center"><Kicker center>Our latest process</Kicker></div>
            <ScrollWords text="Our *Work Process.*" className="sx sx-lg mt-3 text-[#163300]" />
          </div>
          <Stagger className="mt-10 grid gap-5 md:grid-cols-3" step={110}>
            {STEPS.map(({ n, t, d }) => (
              <div key={n} className="relative overflow-hidden rounded-xl border border-[#DFE5DC] bg-white p-7 text-center transition-shadow hover:shadow-[0_14px_40px_rgba(22,51,0,0.10)]">
                <span className="solor-step mx-auto size-14 text-[18px]">{n}</span>
                <h3 className="mt-5 text-[22px] font-bold text-[#163300]" style={{ fontFamily: 'var(--font-display)' }}>{t}</h3>
                <p className="mx-auto mt-2 max-w-xs text-[14.5px] leading-relaxed text-[#5C665A]">{d}</p>
                <span aria-hidden className="sx-index pointer-events-none absolute -bottom-3 right-3 opacity-60">{n}</span>
              </div>
            ))}
          </Stagger>
        </div>
      </section>

      {/* 5 — ENERGY PROGRESS (Solor: image + progress bars) */}
      <section className="bg-[#163300] text-white">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-14 sm:py-20 lg:grid-cols-2 lg:items-center">
          <Reveal variant="left">
            <img src={IMG.ground} alt="Solar plant at golden hour" className="aspect-[4/3] w-full rounded-xl object-cover" />
          </Reveal>
          <Reveal variant="right" delay={120}>
            <p className="micro text-[#89EA5F]">
              <span className="mr-2 inline-block size-2 rounded-full bg-[#89EA5F]" aria-hidden />
              Energy progress
            </p>
            <h2 className="sx sx-lg mt-3 text-white">Best Solution For Your Solar Energy</h2>
            <p className="mt-4 max-w-lg text-[15px] leading-relaxed text-white/65">
              Every site is metered and reported — generation, savings and charger use visible in one app.
            </p>
            <div className="mt-7 space-y-5">
              {BARS.map(({ t, v }) => (
                <div key={t}>
                  <div className="mb-2 flex items-center justify-between">
                    <p className="text-[15px] font-semibold uppercase tracking-[0.06em]" style={{ fontFamily: 'var(--font-display)' }}>{t}</p>
                    <p className="text-[15px] font-bold text-[#89EA5F]" style={{ fontFamily: 'var(--font-display)' }}>{v}%</p>
                  </div>
                  <div className="h-2 overflow-hidden rounded-full bg-white/15">
                    <Reveal variant="left" delay={100}>
                      <div className="h-full rounded-full" style={{ width: `${v}%`, background: 'linear-gradient(90deg,#5EC73A,#89EA5F)' }} />
                    </Reveal>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* 6 — CTA BANNER (Solor: Have Questions? Call Us) */}
      <section className="relative overflow-hidden">
        <img src={IMG.solarField} alt="Solar panels under blue sky" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-[#163300]/80" />
        <div className="relative mx-auto flex max-w-7xl flex-col items-center px-6 py-14 text-center sm:py-20">
          <Reveal variant="up">
            <p className="micro justify-center text-[#89EA5F]">
              <span className="mr-2 inline-block size-2 rounded-full bg-[#89EA5F]" aria-hidden />
              Ready when you are
            </p>
            <h2 className="sx sx-xl mx-auto mt-3 max-w-3xl text-white">Have Questions? Call Us +91 70405 06295</h2>
            <p className="mx-auto mt-3 max-w-xl text-[15px] leading-relaxed text-white/70">
              Send your bill and site photos — receive size, generation and subsidy breakup within one working day.
            </p>
            <div className="mt-7 flex flex-wrap justify-center gap-3">
              <Link href="/contact" className="btn-shine inline-flex items-center gap-2 rounded-lg bg-[#89EA5F] px-7 py-3.5 text-[14px] font-semibold uppercase tracking-[0.08em] text-[#163300] transition-colors hover:bg-white" style={{ fontFamily: 'var(--font-display)' }}>
                Contact now <ArrowRight size={15} />
              </Link>
              <a href="tel:+917040506295" className="inline-flex items-center gap-2 rounded-lg border border-white/40 px-7 py-3.5 text-[14px] font-semibold uppercase tracking-[0.08em] text-white transition-colors hover:bg-white/10" style={{ fontFamily: 'var(--font-display)' }}>
                <Phone size={15} /> +91 70405 06295
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 7 — WHY CHOOSE US (Solor: 4 image items) */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-14 sm:py-20">
          <div className="max-w-2xl">
            <Kicker>Why choose us</Kicker>
            <ScrollWords text="Providing Solar *Energy Solutions.*" className="sx sx-lg mt-3 text-[#163300]" />
          </div>
          <Stagger className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4" step={90}>
            {WHY.map(({ img, t, d }) => (
              <div key={t} className="group overflow-hidden rounded-xl border border-[#DFE5DC] bg-white transition-shadow hover:shadow-[0_14px_40px_rgba(22,51,0,0.10)]">
                <div className="overflow-hidden">
                  <img src={img} alt={t} className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-[1.05]" />
                </div>
                <div className="p-5">
                  <h3 className="text-[19px] font-bold text-[#163300]" style={{ fontFamily: 'var(--font-display)' }}>{t}</h3>
                  <p className="mt-1.5 text-[14px] leading-relaxed text-[#5C665A]">{d}</p>
                </div>
              </div>
            ))}
          </Stagger>
        </div>
      </section>

      {/* 8 — COUNTERS (Solor: Project Done / Happy Clients / Awards / Rating) */}
      <section className="bg-[#EFF1ED]">
        <div className="mx-auto max-w-7xl px-6 py-12 sm:py-14">
          <div className="grid gap-px overflow-hidden rounded-xl border border-[#DFE5DC] bg-[#DFE5DC] sm:grid-cols-4">
            {[
              { v: 1000, s: '+', l: 'Project Done' },
              { v: 1000, s: '+', l: 'Happy Clients' },
              { v: 15, s: '+', l: 'Award Winning' },
              { v: 4.9, s: '★', l: 'Rating Customer', d: 1 },
            ].map(({ v, s, l, d = 0 }) => (
              <div key={l} className="bg-white px-6 py-8 text-center">
                <p className="stat-number text-[#163300]"><CountUp to={v} decimals={d} suffix={s} /></p>
                <p className="mt-2 text-[13px] font-semibold uppercase tracking-[0.1em] text-[#5C665A]" style={{ fontFamily: 'var(--font-display)' }}>{l}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9 — SOLAR CALCULATOR (Solor) */}
      <section className="bg-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 sm:py-20 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <Kicker>Solar calculator</Kicker>
            <ScrollWords text="Your Solar *Savings Calculator.*" className="sx sx-lg mt-3 text-[#163300]" />
            <p className="mt-4 max-w-md text-[15px] leading-relaxed text-[#4C554B]">
              Pick Residential or Commercial, slide your monthly bill — get an instant size and savings estimate.
            </p>
          </div>
          <Reveal variant="right" delay={120}>
            <SolarCalculator />
          </Reveal>
        </div>
      </section>

      {/* 10 — LATEST NEWS (Solor: 3 blog cards) */}
      <section className="bg-[#EFF1ED]">
        <div className="mx-auto max-w-7xl px-6 py-14 sm:py-20">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div className="max-w-2xl">
              <Kicker>Recent articles</Kicker>
              <ScrollWords text="Our *Latest News.*" className="sx sx-lg mt-3 text-[#163300]" />
            </div>
            <Link href="/blog" className="inline-flex items-center gap-1.5 text-[14px] font-semibold uppercase tracking-[0.08em] text-[#3F7A28]" style={{ fontFamily: 'var(--font-display)' }}>
              All articles <ArrowRight size={14} />
            </Link>
          </div>
          <Stagger className="mt-10 grid gap-5 md:grid-cols-3" itemClassName="h-full" step={100}>
            {[
              { img: IMG.blog1, cat: 'Solar Technology', t: 'Exploring the Latest Innovations in Solar Technology', d: 'TOPCon gains, micro-inverters and what they mean for your terrace.' },
              { img: IMG.blog2, cat: 'Sustainability', t: 'Solar Solutions for a Sustainable Tomorrow', d: 'How homes and depots pair solar with EV charging in one project.' },
              { img: IMG.blog3, cat: 'Renewable Power', t: 'Advancements in Renewable Power & Storage', d: 'Hybrid inverters and batteries that ride through evening cuts.' },
            ].map(({ img, cat, t, d }) => (
              <Tilt key={t} className="h-full">
                <Link href="/blog" className="group lift block h-full overflow-hidden rounded-xl border border-[#DFE5DC] bg-white transition-shadow hover:shadow-[0_12px_36px_rgba(22,51,0,0.10)]">
                  <div className="overflow-hidden">
                    <img src={img} alt={t} className="aspect-[16/10] w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]" />
                  </div>
                  <div className="p-5">
                    <p className="card-cat">{cat}</p>
                    <h3 className="card-title mt-2 text-[#163300]">{t}</h3>
                    <p className="card-desc mt-1.5 text-[#5C665A]">{d}</p>
                    <p className="mt-3 inline-flex items-center gap-1.5 text-[13px] font-semibold uppercase tracking-[0.08em] text-[#3F7A28]" style={{ fontFamily: 'var(--font-display)' }}>
                      Read more <ArrowUpRight size={14} />
                    </p>
                  </div>
                </Link>
              </Tilt>
            ))}
          </Stagger>
        </div>
      </section>

      <CtaBand />
    </main>
  )
}
