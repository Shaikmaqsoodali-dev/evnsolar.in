import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { IMG } from '@/lib/brand'
import { PageIntro, CtaBand } from '@/components/site-chrome'

export const metadata = { title: 'Projects — EVN Solar Energy Solutions' }

const PROJECTS = [
  { img: IMG.rooftop, sector: 'Residential · Nashik', size: '5 kW + 7.4 kW charger', t: 'Rooftop with home EV charging', d: 'Battery-ready hybrid, subsidy filing and app-based generation tracking for a two-storey home.' },
  { img: IMG.ground, sector: 'Industrial · Malegaon', size: '120 kW', t: 'Ground-mounted plant + fleet charging', d: 'Land-optimized rows with scheduled depot charging and monthly generation reporting.' },
  { img: IMG.carport, sector: 'Commercial · Office campus', size: '40 kW', t: 'Solar carport, EV-ready', d: 'Waterproof parking structure with charger conduits, lighting and CCTV provision.' },
  { img: IMG.panel, sector: 'Commercial · Hospital', size: '30 kW', t: 'Hospital rooftop with O&M', d: 'High-uptime design with cleaning plan, thermography and annual maintenance contract.' },
  { img: IMG.evCharge, sector: 'Fleet · Logistics depot', size: '60 kW DC + 22 kW AC', t: 'Depot charging hub', d: 'DC fast plus multi-point AC with load management, RFID billing and fleet reports.' },
  { img: IMG.solarField, sector: 'Industrial · Farm', size: '250 kW', t: 'Captive ground-mounted plant', d: 'Captive generation with SCADA-ready monitoring and staged expansion provision.' },
]

export default function ProjectsPage() {
  return (
    <main className="bg-white">
      <PageIntro
        kicker="Projects"
        title={<>Work we will stand behind <em className="serif-accent text-[#0083CB]">in writing.</em></>}
        lede="A selection of residential, commercial and industrial installations across Maharashtra. Every project includes drawings, test records and a monitoring handover."
        meta={['2.4 MW+ installed', 'Residential to MW-scale', 'Drawings & test records included']}
        crumb={[['Projects', '/projects']]}
      />
      <section className="mx-auto max-w-7xl px-6 py-14 sm:py-20">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.map(({ img, sector, size, t, d }) => (
            <article key={t} className="group border border-[#E2E8EC] bg-white transition-shadow hover:shadow-[0_12px_36px_rgba(12,30,40,0.10)]" style={{ borderRadius: 8, overflow: 'hidden' }}>
              <div className="overflow-hidden">
                <img src={img} alt={t} className="aspect-[16/10] w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]" />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between gap-3">
                  <p className="text-[12px] font-semibold uppercase tracking-[0.12em] text-[#0083CB]">{sector}</p>
                  <p className="shrink-0 border border-[#E2E8EC] bg-[#F4F6F8] px-2.5 py-1 text-[12px] font-semibold text-[#42545F]" style={{ borderRadius: 6 }}>{size}</p>
                </div>
                <h2 className="font-display mt-3 text-[19px] font-semibold text-[#0C1E28]">{t}</h2>
                <p className="mt-2 text-[14px] leading-relaxed text-[#5B6D77]">{d}</p>
              </div>
            </article>
          ))}
        </div>
        <div className="mt-10 flex flex-col items-start justify-between gap-4 border border-[#E2E8EC] bg-[#F4F6F8] p-6 sm:flex-row sm:items-center" style={{ borderRadius: 8 }}>
          <p className="text-[15px] text-[#42545F]">
            <span className="font-semibold text-[#0C1E28]">Have a similar site?</span> Send your bill and photos — we respond with size, generation and subsidy breakup.
          </p>
          <Link href="/contact" className="inline-flex shrink-0 items-center gap-2 bg-[#0083CB] px-6 py-3 text-[14px] font-semibold text-white hover:bg-[#00659D]" style={{ borderRadius: 6 }}>
            Discuss your site <ArrowRight size={15} />
          </Link>
        </div>
      </section>
      <CtaBand />
    </main>
  )
}
