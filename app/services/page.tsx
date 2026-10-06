import Link from 'next/link'
import {
  ArrowLeftRight,
  BatteryCharging,
  CarFront,
  Check,
  Factory,
  Home,
  PlugZap,
  Sun,
  Gauge,
} from 'lucide-react'
import { BrandArrow } from '@/components/brand-arrow'
import { IMG } from '@/lib/brand'
import { PageIntro, CtaBand } from '@/components/site-chrome'
import { Faq } from '@/components/ux-bits'
import { Reveal, Stagger, Tilt } from '@/components/motion'

export const metadata = { title: 'Solar Services | EVN Solar Energy Solutions', description: 'Turnkey solar EPC in Maharashtra: on/off-grid rooftop, ground-mounted plants, carports, inverters, storage and net-metering with DISCOM liaison and subsidy support.' }

const SERVICES = [
  {
    img: IMG.rooftop, n: '01', icon: Home, badge: 'Rooftop', tag: 'On-grid / Off-grid, 1-100 kW', t: 'On-grid & off-grid rooftop systems',
    d: 'Tailored to meet diverse energy needs — on-grid solutions that connect to the local utility grid, and off-grid options for full independence. Designed for efficiency and reliability, ensuring a consistent power supply.',
    points: ['Load + shadow study before sizing', 'Net-metering or battery-ready design', 'Monitoring app with 5-year service'],
  },
  {
    img: IMG.ground, n: '02', icon: Factory, badge: 'EPC', tag: 'Turnkey EPC, up to 1,607 MWp', t: 'Solar EPC services',
    d: 'We manage every aspect of solar project development, from initial design and procurement to final construction. Focus on quality assurance ensures each project meets the highest standards for performance and longevity.',
    points: ['Engineering, procurement, construction', 'Land liaison — 5,700+ acres delivered', 'Testing, commissioning & O&M'],
  },
  {
    img: IMG.engineer2, n: '03', icon: Gauge, badge: 'MPPT', tag: 'MPPT / PWM, battery-safe', t: 'Solar charge controllers',
    d: 'Advanced controllers regulate power from solar panels to batteries, preventing overcharging and ensuring efficient energy storage. Extends battery life and enhances system performance.',
    points: ['Overcharge & deep-discharge protection', 'MPPT for higher harvest', 'Sized to panel + battery bank'],
  },
  {
    img: IMG.fleetDepot, n: '04', icon: BatteryCharging, badge: 'Hybrid', tag: 'Solar + grid / DG hybrid', t: 'Solar hybrid power packs',
    d: 'Combining solar energy with other power sources, our hybrid systems provide a reliable and uninterrupted power supply, adaptable to various applications and environments.',
    points: ['Uninterrupted supply for outages', 'Adaptable for home, shop, farm', 'Pre-wired for EV charging'],
  },
  {
    img: IMG.panel, n: '05', icon: Sun, badge: 'PV', tag: 'Tier-1, high-efficiency PV', t: 'Solar PV panels',
    d: 'High-quality photovoltaic panels that convert sunlight into electricity with exceptional efficiency, supporting a wide range of energy requirements — from homes to solar parks.',
    points: ['Tier-1 modules with warranty', 'TOPCon high-efficiency options', 'Structure + tilt engineered per roof'],
  },
  {
    img: IMG.industrial, n: '06', icon: PlugZap, badge: 'AC Power', tag: 'String / micro + UPS', t: 'Inverters & UPS systems',
    d: 'Our inverters convert DC power from solar panels into AC power for household or commercial use, while UPS systems ensure continuous power during outages, maintaining operational continuity.',
    points: ['String, hybrid & micro-inverters', 'UPS backup for critical loads', 'Surge, earthing & protection tested'],
  },
  {
    img: IMG.solarField, n: '07', icon: ArrowLeftRight, badge: 'Credits', tag: 'DISCOM liaison included', t: 'Net metering solutions',
    d: 'Feed excess solar energy back into the grid, earning credits on your utility bill and promoting environmental sustainability. We handle application, liaison and approvals end-to-end.',
    points: ['DISCOM application + follow-up', 'Bi-directional meter coordination', 'Subsidy filing under PM Surya Ghar'],
  },
]

const PORTFOLIO = [
  { icon: Home, t: 'Rooftop Plants', d: 'On-grid, hybrid and battery-ready systems for homes and shops.' },
  { icon: Factory, t: 'Ground-Mounted Plants', d: 'Land-optimized rows with SCADA-ready monitoring.' },
  { icon: CarFront, t: 'Solar Carports', d: 'Waterproof parking structures, EV-charger ready.' },
  { icon: PlugZap, t: 'EV Charging', d: '7.4-60 kW AC and DC chargers with billing and load management.' },
  { icon: BatteryCharging, t: 'Storage & Hybrid', d: 'Lithium backup and hybrid packs for outage protection.' },
]

export default function ServicesPage() {
  return (
    <main className="bg-[#F0F5F9]">
      <PageIntro
        kicker="Solar services — Est. 2020"
        title={<>Solar EPC + products for every roof, plot and <em className="editorial-accent text-[#0F88C7]">parking lot.</em></>}
        lede="Turnkey EPC with 1,607 MWp delivered and 5,700+ acres acquired. On-grid, off-grid and hybrid systems with drawings, DISCOM liaison and verified generation."
        crumb={[['Solar', '/services']]}
        image="https://res.cloudinary.com/qxjpbgh6/image/upload/v1791106731/Rooftop_solar_installation.webp"
        imageAlt="Rooftop solar installation"
      />

      <section className="mx-auto max-w-7xl px-6 py-14 sm:py-20">
        <div className="space-y-8">
          {SERVICES.slice(0, 2).map(({ img, n, icon: Icon, badge, tag, t, d, points }, i) => (
            <Reveal key={t} variant={i % 2 ? 'right' : 'left'}>
            <article className={`lift grid gap-0 overflow-hidden border border-[#D9E2EA] bg-white hover:border-[#62D984] lg:grid-cols-2 ${i % 2 ? 'lg:[&>*:first-child]:order-2' : ''}`} style={{ borderRadius: 10 }}>
              <div className="photo-frame relative min-h-[280px]">
                <img src={img} alt={`${t} — ${badge} system photo`} className="absolute inset-0 h-full w-full object-cover" />
                <span aria-hidden className="photo-scrim photo-scrim--left" />
                <span className="card-cat card-cat--on-dark absolute left-5 top-5 z-[2] bg-[#072A45] px-3 py-1.5" style={{ borderRadius: 6 }}>{tag}</span>
              </div>
              <div className="p-8 sm:p-10">
                <p className="font-tech text-[11px] font-medium tracking-[0.08em] text-[#0F88C7]">{n}</p>
                <h2 className="font-display mt-2 flex items-center gap-3 text-[26px] font-bold tracking-tight text-[#072A45]">
                  <span className="title-icon size-11 bg-[#072A45] text-[#62D984]" aria-hidden>
                    <Icon size={20} strokeWidth={2} />
                  </span>
                  {t}
                </h2>
                <p className="mt-3 text-[15px] leading-relaxed text-[#54687A]">{d}</p>
                <ul className="mt-6 space-y-2.5 border-t border-[#D9E2EA] pt-6">
                  {points.map((p) => (
                    <li key={p} className="flex items-start gap-2.5 text-[14.5px] text-[#14242E]">
                      <Check size={17} className="mt-0.5 shrink-0 text-[#0F88C7]" /> {p}
                    </li>
                  ))}
                </ul>
                <div className="mt-7 flex flex-wrap gap-3">
                  <Link href="/contact" className="inline-flex items-center gap-2 bg-[#0F88C7] px-5 py-2.5 text-[14px] font-semibold text-white hover:bg-[#0B6AA0]" style={{ borderRadius: 6 }}>
                    Get a free site assessment <BrandArrow size={15} />
                  </Link>
                  <Link href="/pricing" className="border border-[#C3D2DE] px-5 py-2.5 text-[14px] font-semibold text-[#072A45] hover:border-[#0F88C7] hover:text-[#0F88C7]" style={{ borderRadius: 6 }}>
                    Sizes & pricing
                  </Link>
                </div>
              </div>
            </article>
            </Reveal>
          ))}
        </div>
        <Stagger className="mt-8 grid gap-5 md:grid-cols-2" itemClassName="h-full" step={100}>
          {SERVICES.slice(2).map(({ img, n, icon: Icon, badge, tag, t, d, points }) => (
            <Tilt key={t} className="h-full">
            <article className="group lift flex h-full flex-col overflow-hidden border border-[#D9E2EA] bg-white hover:border-[#62D984]" style={{ borderRadius: 10 }}>
              <div className="photo-frame relative overflow-hidden">
                <img src={img} alt={`${t} — ${badge} system photo`} className="aspect-[16/9] w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]" />
                <span aria-hidden className="photo-scrim" />
                <span className="card-cat card-cat--on-dark absolute left-5 top-5 z-[2] bg-[#072A45] px-3 py-1.5" style={{ borderRadius: 6 }}>{tag}</span>
                <span className="photo-caption" style={{ paddingLeft: '1.25rem', paddingRight: '1.25rem' }}>
                  <h2 className="photo-title photo-title--sm">{t}</h2>
                </span>
              </div>
              <div className="flex flex-1 flex-col p-8">
                <p className="mt-3 text-[15px] leading-relaxed text-[#54687A]">{d}</p>
                <ul className="mt-6 flex-1 space-y-2.5 border-t border-[#D9E2EA] pt-6">
                  {points.map((p) => (
                    <li key={p} className="flex items-start gap-2.5 text-[14.5px] text-[#14242E]">
                      <Check size={17} className="mt-0.5 shrink-0 text-[#0F88C7]" /> {p}
                    </li>
                  ))}
                </ul>
                <div className="mt-7 flex flex-wrap gap-3">
                  <Link href="/contact" className="inline-flex items-center gap-2 bg-[#0F88C7] px-5 py-2.5 text-[14px] font-semibold text-white hover:bg-[#0B6AA0]" style={{ borderRadius: 6 }}>
                    Get a free site assessment <BrandArrow size={15} />
                  </Link>
                  <Link href="/pricing" className="border border-[#C3D2DE] px-5 py-2.5 text-[14px] font-semibold text-[#072A45] hover:border-[#0F88C7] hover:text-[#0F88C7]" style={{ borderRadius: 6 }}>
                    Sizes & pricing
                  </Link>
                </div>
              </div>
            </article>
            </Tilt>
          ))}
        </Stagger>
        <p className="mx-auto mt-8 max-w-3xl text-center text-[14px] leading-relaxed text-[#54687A]">
          All our products are eco-friendly, versatile, user-friendly and highly energy-efficient — superior design quality, high performance and affordability, making sustainable energy accessible for all.
        </p>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-14 sm:pb-20">
        <div className="overflow-hidden rounded-xl border border-[#D9E2EA] bg-white">
          <div className="border-b border-[#D9E2EA] px-6 py-5 sm:px-8">
            <p className="text-[12px] font-semibold uppercase tracking-[0.1em] text-[#0F88C7]" style={{ fontFamily: 'var(--font-display)' }}>Our services — solar + EV portfolio</p>
            <h2 className="mt-1 text-[22px] font-bold text-[#072A45]" style={{ fontFamily: 'var(--font-display)' }}>One team for generation, storage and charging.</h2>
          </div>
          <div className="grid gap-px bg-[#D9E2EA] sm:grid-cols-2 lg:grid-cols-5">
            {PORTFOLIO.map(({ icon: Icon, t, d }) => (
              <div key={t} className="bg-white px-5 py-6">
                <span className="title-icon size-10 bg-[#EDF3F7] text-[#072A45]" aria-hidden>
                  <Icon size={19} strokeWidth={2} />
                </span>
                <p className="mt-3 text-[15px] font-bold tracking-tight text-[#072A45]" style={{ fontFamily: 'var(--font-display)' }}>{t}</p>
                <p className="mt-1.5 text-[13.5px] leading-relaxed text-[#54687A]">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#072A45]">
        <div className="h-1" style={{ background: 'linear-gradient(90deg, #0F88C7 0%, #62D984 50%, #33A94F 100%)' }} aria-hidden />
        <div className="mx-auto max-w-7xl px-6 py-14">
          <h2 className="sx sx-md max-w-2xl text-white">Included in every project.</h2>
          <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {['Earthing & lightning protection', 'Surge, MCB & MCCB protection', 'Cable routing & labelling', 'Generation & consumption monitoring', 'DISCOM & subsidy documentation', 'Handover training & manuals'].map((x) => (
              <p key={x} className="border border-white/10 bg-white/[0.06] px-5 py-4 text-[14px] font-medium text-white" style={{ borderRadius: 8 }}>{x}</p>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-14 sm:py-20">
        <h2 className="section-title mt-3 text-[26px] text-[#072A45] sm:text-[32px]">Before you ask.</h2>
        <div className="mt-8">
          <Faq
            items={[
              ['How much will a rooftop really generate?', 'A well-oriented 1 kW in Maharashtra generates roughly 4-4.5 units a day, so a 5 kW system delivers about 20-22 units daily. Your survey report states the estimate in writing before you commit.'],
              ['Do you handle net-metering and subsidy paperwork?', 'Yes. We file the DISCOM net-metering application and the PM Surya Ghar subsidy application as part of every residential project.'],
              ['On-grid, hybrid or battery: which do I need?', 'On-grid if your supply is stable and you want fastest payback. Hybrid with batteries if you need backup during cuts. We recommend only after studying your outage pattern.'],
              ['What maintenance does the plant need?', 'Panel cleaning every 2-4 weeks in dusty season, plus an annual health check. AMC plans cover both, with thermography and inverter service.'],
            ]}
          />
        </div>
      </section>

      <CtaBand />
    </main>
  )
}
