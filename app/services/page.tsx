import Link from 'next/link'
import { ArrowRight, Check } from 'lucide-react'
import { IMG } from '@/lib/brand'
import { PageIntro, CtaBand } from '@/components/site-chrome'
import { Faq } from '@/components/ux-bits'

export const metadata = { title: 'Solar Services — EVN Solar Energy Solutions' }

const SERVICES = [
  {
    img: IMG.rooftop, n: '01', tag: '1–100 kW · On-grid / Hybrid', t: 'Rooftop solar',
    d: 'Homes, shops, schools, hospitals and factories. Shadow analysis, structure design, high-efficiency TOPCon modules with string or micro-inverters.',
    points: ['Site survey with generation estimate', 'Net-metering and subsidy filing', 'Monitoring app with 5-year service'],
  },
  {
    img: IMG.ground, n: '02', tag: '100 kW – 2 MW · SCADA-ready', t: 'Ground-mounted plants',
    d: 'Farms, industry and campuses. Soil, drainage and row spacing engineered for yield and straightforward maintenance access.',
    points: ['Land and evacuation study', 'Structure with DC/AC design', 'O&M contracts available'],
  },
  {
    img: IMG.carport, n: '03', tag: '2–50 cars · EV-ready', t: 'Solar carports',
    d: 'Turn parking into a power plant. Waterproof structures with EV-conduit pre-wiring, lighting and CCTV provision.',
    points: ['Steel and waterproof design', 'EV charger pre-wiring', 'Lighting integration'],
  },
  {
    img: IMG.panel, n: '04', tag: 'AMC · Health checks', t: 'Maintenance & upgrades',
    d: 'Cleaning plans, thermography, inverter service, capacity additions and battery retrofits for existing plants.',
    points: ['AMC with breakdown support', 'Performance audits', 'Battery and EV add-ons'],
  },
]

export default function ServicesPage() {
  return (
    <main className="bg-white">
      <PageIntro
        kicker="Solar services"
        title="Solar for every roof, plot and parking lot."
        lede="On-grid, hybrid and battery-ready systems with engineering drawings, DISCOM liaison and verified generation — not just installation."
        meta={['On-grid · Hybrid · Battery-ready', 'Tier-1 modules, tested inverters', 'Subsidy & net-metering handled']}
        crumb={[['Solar', '/services']]}
      />

      <section className="mx-auto max-w-7xl px-6 py-14 sm:py-20">
        <div className="space-y-12">
          {SERVICES.map(({ img, n, tag, t, d, points }, i) => (
            <article key={t} className={`grid gap-0 overflow-hidden border border-[#E2E8EC] lg:grid-cols-2 ${i % 2 ? 'lg:[&>*:first-child]:order-2' : ''}`} style={{ borderRadius: 10 }}>
              <div className="relative min-h-[280px]">
                <img src={img} alt={t} className="absolute inset-0 h-full w-full object-cover" />
                <span className="absolute left-5 top-5 bg-[#0C1E28] px-3 py-1.5 text-[12px] font-semibold text-white" style={{ borderRadius: 6 }}>{tag}</span>
              </div>
              <div className="p-8 sm:p-10">
                <p className="text-[13px] font-semibold tabular-nums text-[#0083CB]">{n}</p>
                <h2 className="font-display mt-2 text-[26px] font-semibold text-[#0C1E28]">{t}</h2>
                <p className="mt-3 text-[15px] leading-relaxed text-[#5B6D77]">{d}</p>
                <ul className="mt-6 space-y-2.5 border-t border-[#E2E8EC] pt-6">
                  {points.map((p) => (
                    <li key={p} className="flex items-start gap-2.5 text-[14.5px] text-[#14242E]">
                      <Check size={17} className="mt-0.5 shrink-0 text-[#1E7A3C]" /> {p}
                    </li>
                  ))}
                </ul>
                <div className="mt-7 flex flex-wrap gap-3">
                  <Link href="/contact" className="inline-flex items-center gap-2 bg-[#0083CB] px-5 py-2.5 text-[14px] font-semibold text-white hover:bg-[#00659D]" style={{ borderRadius: 6 }}>
                    Get sizing <ArrowRight size={15} />
                  </Link>
                  <Link href="/pricing" className="border border-[#CBD6DD] px-5 py-2.5 text-[14px] font-semibold text-[#0C1E28] hover:border-[#0083CB] hover:text-[#0083CB]" style={{ borderRadius: 6 }}>
                    Sizes & pricing
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="border-t border-[#E2E8EC] bg-[#F4F6F8]">
        <div className="mx-auto max-w-7xl px-6 py-14">
          <p className="text-[12px] font-semibold uppercase tracking-[0.14em] text-[#0083CB]">Included in every project</p>
          <div className="mt-5 grid gap-px overflow-hidden border border-[#E2E8EC] bg-[#E2E8EC] sm:grid-cols-3" style={{ borderRadius: 8 }}>
            {['Earthing & lightning protection', 'Surge, MCB & MCCB protection', 'Cable routing & labelling', 'Generation & consumption monitoring', 'DISCOM & subsidy documentation', 'Handover training & manuals'].map((x) => (
              <p key={x} className="bg-white px-5 py-4 text-[14px] font-medium text-[#14242E]">{x}</p>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-14 sm:py-20">
        <p className="text-[12px] font-bold uppercase tracking-[0.22em] text-[#0083CB]">Common questions</p>
        <h2 className="section-title mt-3 text-[26px] text-[#0C1E28] sm:text-[32px]">Before you ask.</h2>
        <div className="mt-8">
          <Faq
            items={[
              ['How much will a rooftop really generate?', 'A well-oriented 1 kW in Maharashtra generates roughly 4–4.5 units a day — so a 5 kW system delivers about 20–22 units daily. Your survey report states the estimate in writing before you commit.'],
              ['Do you handle net-metering and subsidy paperwork?', 'Yes. We file the DISCOM net-metering application and the PM Surya Ghar subsidy application as part of every residential project.'],
              ['On-grid, hybrid or battery — which do I need?', 'On-grid if your supply is stable and you want fastest payback. Hybrid with batteries if you need backup during cuts. We recommend only after studying your outage pattern.'],
              ['What maintenance does the plant need?', 'Panel cleaning every 2–4 weeks in dusty season, plus an annual health check. AMC plans cover both, with thermography and inverter service.'],
            ]}
          />
        </div>
      </section>

      <CtaBand />
    </main>
  )
}
