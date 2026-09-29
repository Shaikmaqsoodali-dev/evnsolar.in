import Link from 'next/link'
import { ArrowRight, Check, Sun, Mountain, Warehouse, Wrench } from 'lucide-react'
import { IMG } from '@/lib/brand'
import { Eyebrow, PageHero, CtaBand } from '@/components/site-chrome'

export const metadata = { title: 'Solar Services | EV & Solar' }

const SERVICES = [
  { img: IMG.rooftop, icon: Sun, tag: '1–100 kW • On-grid / Hybrid', t: 'Rooftop Solar', d: 'Homes, shops, schools, hospitals and factories. Shadow analysis, structure design, high-efficiency TOPCon panels and string / micro-inverters.', points: ['Site survey + generation estimate', 'Net-metering + subsidy filing', 'Monitoring app + 5-yr service'] },
  { img: IMG.ground, icon: Mountain, tag: '100 kW – 2 MW • SCADA', t: 'Ground-Mounted Plants', d: 'Farms, industry and campuses. Soil, drainage and row-spacing engineered for maximum yield and easy O&M.', points: ['Land + evacuation study', 'Structure + DC/AC design', 'O&M contracts available'] },
  { img: IMG.carport, icon: Warehouse, tag: '2–50 cars • EV-ready', t: 'Solar Carports', d: 'Turn parking into a power plant. Waterproof structures, EV-conduit pre-wiring and lighting integration.', points: ['Steel + waterproof design', 'EV charger pre-wiring', 'Lighting + CCTV provision'] },
  { img: IMG.panel, icon: Wrench, tag: 'O&M • Health checks', t: 'Maintenance & Upgrades', d: 'Cleaning plans, thermography, inverter service, panel additions and battery retrofits for existing plants.', points: ['AMC + breakdown support', 'Performance audits', 'Battery + EV add-ons'] },
]

export default function ServicesPage() {
  return (
    <main className="bg-[#F8FAFC]">
      <PageHero
        tag="SOLAR SERVICES"
        title={<>Solar for every roof, plot and <span className="text-[#0083CB]">parking lot.</span></>}
        desc="On-grid, hybrid and battery-ready systems with engineering docs, DISCOM liaison and verified generation."
      />
      <section className="mx-auto max-w-6xl space-y-6 px-5 py-14">
        {SERVICES.map(({ img, icon: Icon, tag, t, d, points }, i) => (
          <article key={t} className={`grid overflow-hidden rounded-[24px] border border-[#DCE5EA] bg-white lg:grid-cols-2 ${i % 2 ? 'lg:[&>*:first-child]:order-2' : ''}`}>
            <div className="relative h-64 lg:h-auto">
              <img src={img} alt={t} className="absolute inset-0 h-full w-full object-cover" />
              <span className="absolute left-5 top-5 rounded-full bg-[#0B1720]/85 px-3 py-1 text-[11px] font-extrabold text-white">{tag}</span>
            </div>
            <div className="p-8 sm:p-10">
              <span className="grid size-12 place-items-center rounded-2xl bg-[#0083CB] text-white"><Icon size={23} /></span>
              <h2 className="mt-4 text-[26px] font-extrabold">{t}</h2>
              <p className="mt-2 text-[14.5px] leading-relaxed text-[#52616B]">{d}</p>
              <ul className="mt-5 space-y-2.5 text-[14px] font-medium">
                {points.map((p) => (
                  <li key={p} className="flex items-center gap-2.5"><span className="grid size-5 place-items-center rounded-full bg-[#1F8A42] text-white"><Check size={12} /></span>{p}</li>
                ))}
              </ul>
              <div className="mt-6 flex gap-3">
                <Link href="/contact" className="inline-flex items-center gap-2 rounded-full bg-[#0083CB] px-6 py-3 text-sm font-bold text-white hover:bg-[#006FAE]">Get sizing <ArrowRight size={15} /></Link>
                <Link href="/pricing" className="rounded-full border border-[#DCE5EA] px-6 py-3 text-sm font-bold hover:border-[#0083CB] hover:text-[#0083CB]">See sizes</Link>
              </div>
            </div>
          </article>
        ))}
      </section>
      <section className="mx-auto max-w-6xl px-5 pb-14">
        <div className="rounded-[22px] border border-[#DCE5EA] bg-white p-8">
          <Eyebrow>ALSO INCLUDED</Eyebrow>
          <div className="mt-4 grid gap-3 text-[14px] font-semibold sm:grid-cols-3">
            {['Earthing + lightning protection', 'Surge + MCB/MCCB protection', 'Cable routing + labelling', 'Generation + consumption monitoring', 'DISCOM + subsidy documentation', 'Handover training + manuals'].map((x) => (
              <p key={x} className="flex items-center gap-2.5 rounded-xl bg-[#F8FAFC] p-3.5"><Check size={16} className="shrink-0 text-[#1F8A42]" />{x}</p>
            ))}
          </div>
        </div>
      </section>
      <CtaBand />
      <div className="h-4" />
    </main>
  )
}
