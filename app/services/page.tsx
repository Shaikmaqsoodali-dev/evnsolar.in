import Link from 'next/link'
import { ArrowRight, Check } from 'lucide-react'
import { IMG } from '@/lib/brand'
import { PageIntro, CtaBand } from '@/components/site-chrome'
import { Faq } from '@/components/ux-bits'
import { Reveal, Stagger, Tilt } from '@/components/motion'

export const metadata = { title: 'Solar Services | EVN Solar Energy Solutions' }

const SERVICES = [
  {
    img: IMG.rooftop, n: '01', tag: '1-100 kW, On-grid / Hybrid', t: 'Rooftop solar',
    d: 'Homes, shops, schools, hospitals and factories. Shadow analysis, structure design, high-efficiency TOPCon modules with string or micro-inverters.',
    points: ['Site survey with generation estimate', 'Net-metering and subsidy filing', 'Monitoring app with 5-year service'],
  },
  {
    img: IMG.ground, n: '02', tag: '100 kW-2 MW, SCADA-ready', t: 'Ground-mounted plants',
    d: 'Farms, industry and campuses. Soil, drainage and row spacing engineered for yield and straightforward maintenance access.',
    points: ['Land and evacuation study', 'Structure with DC/AC design', 'O&M contracts available'],
  },
  {
    img: IMG.carport, n: '03', tag: '2-50 cars, EV-ready', t: 'Solar carports',
    d: 'Turn parking into a power plant. Waterproof structures with EV-conduit pre-wiring, lighting and CCTV provision.',
    points: ['Steel and waterproof design', 'EV charger pre-wiring', 'Lighting integration'],
  },
  {
    img: IMG.panel, n: '04', tag: 'AMC, Health checks', t: 'Maintenance & upgrades',
    d: 'Cleaning plans, thermography, inverter service, capacity additions and battery retrofits for existing plants.',
    points: ['AMC with breakdown support', 'Performance audits', 'Battery and EV add-ons'],
  },
]

export default function ServicesPage() {
  return (
    <main className="bg-[#F0F5F9]">
      <PageIntro
        kicker="Solar services"
        title={<>Solar for every roof, plot and <em className="editorial-accent text-[#0F88C7]">parking lot.</em></>}
        lede="On-grid, hybrid and battery-ready systems with engineering drawings, DISCOM liaison and verified generation, not just installation."
        crumb={[['Solar', '/services']]}
        image="https://res.cloudinary.com/qxjpbgh6/image/upload/v1791106731/Rooftop_solar_installation.webp"
        imageAlt="Rooftop solar installation"
      />

      <section className="mx-auto max-w-7xl px-6 py-14 sm:py-20">
        <div className="space-y-8">
          {SERVICES.slice(0, 2).map(({ img, n, tag, t, d, points }, i) => (
            <Reveal key={t} variant={i % 2 ? 'right' : 'left'}>
            <article className={`lift grid gap-0 overflow-hidden border border-[#D9E2EA] bg-white hover:border-[#62D984] lg:grid-cols-2 ${i % 2 ? 'lg:[&>*:first-child]:order-2' : ''}`} style={{ borderRadius: 10 }}>
              <div className="relative min-h-[280px]">
                <img src={img} alt={t} className="absolute inset-0 h-full w-full object-cover" />
                <span className="card-cat card-cat--on-dark absolute left-5 top-5 bg-[#072A45] px-3 py-1.5" style={{ borderRadius: 6 }}>{tag}</span>
              </div>
              <div className="p-8 sm:p-10">
                <p className="font-tech text-[11px] font-medium tracking-[0.08em] text-[#0F88C7]">{n}</p>
                <h2 className="font-display mt-2 text-[26px] font-semibold tracking-[-0.02em] text-[#072A45]">{t}</h2>
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
                    Get a free site assessment <ArrowRight size={15} />
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
          {SERVICES.slice(2).map(({ img, n, tag, t, d, points }) => (
            <Tilt key={t} className="h-full">
            <article className="group lift flex h-full flex-col overflow-hidden border border-[#D9E2EA] bg-white hover:border-[#62D984]" style={{ borderRadius: 10 }}>
              <div className="relative overflow-hidden">
                <img src={img} alt={t} className="aspect-[16/9] w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]" />
                <span className="card-cat card-cat--on-dark absolute left-5 top-5 bg-[#072A45] px-3 py-1.5" style={{ borderRadius: 6 }}>{tag}</span>
              </div>
              <div className="flex flex-1 flex-col p-8">
                <p className="font-tech text-[11px] font-medium tracking-[0.08em] text-[#0F88C7]">{n}</p>
                <h2 className="font-display mt-2 text-[26px] font-semibold tracking-[-0.02em] text-[#072A45]">{t}</h2>
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
                    Get a free site assessment <ArrowRight size={15} />
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
