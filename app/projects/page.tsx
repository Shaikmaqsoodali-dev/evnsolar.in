import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { IMG } from '@/lib/brand'
import { PageIntro, CtaBand } from '@/components/site-chrome'
import { Stagger, Tilt } from '@/components/motion'

export const metadata = { title: 'Projects — EVN Solar Energy Solutions' }

const PROJECTS = [
  { img: IMG.rooftop, sector: 'Residential · Nashik', size: '5 kW + 7.4 kW charger', t: 'Rooftop with home EV charging', d: 'Battery-ready hybrid, subsidy filing and app-based generation tracking for a two-storey home.' },
  { img: IMG.industrial, sector: 'Industrial · Malegaon', size: '120 kW', t: 'Ground-mounted plant + fleet charging', d: 'Land-optimized rows with scheduled depot charging and monthly generation reporting.' },
  { img: IMG.carport, sector: 'Commercial · Office campus', size: '40 kW', t: 'Solar carport, EV-ready', d: 'Waterproof parking structure with charger conduits, lighting and CCTV provision.' },
  { img: IMG.panel, sector: 'Commercial · Hospital', size: '30 kW', t: 'Hospital rooftop with O&M', d: 'High-uptime design with cleaning plan, thermography and annual maintenance contract.' },
  { img: IMG.evCharge, sector: 'Fleet · Logistics depot', size: '60 kW DC + 22 kW AC', t: 'Depot charging hub', d: 'DC fast plus multi-point AC with load management, RFID billing and fleet reports.' },
  { img: IMG.solarField, sector: 'Industrial · Farm', size: '250 kW', t: 'Captive ground-mounted plant', d: 'Captive generation with SCADA-ready monitoring and staged expansion provision.' },
]

export default function ProjectsPage() {
  return (
    <main className="bg-[#F2F7F4]">
      <PageIntro
        kicker="Projects"
        title={<>Work we will stand behind <em className="editorial-accent text-[#008ED6]">in writing.</em></>}
        lede="A selection of residential, commercial and industrial installations across Maharashtra. Every project includes drawings, test records and a monitoring handover."
        meta={['2.4 MW+ installed', 'Residential to MW-scale', 'Drawings & test records included']}
        crumb={[['Projects', '/projects']]}
        image="https://res.cloudinary.com/qxjpbgh6/image/upload/v1791106731/Solar_carport_EV-ready_parking.jpg"
        imageAlt="Solar carport EV-ready parking"
      />
      <section className="mx-auto max-w-7xl px-6 py-14 sm:py-20">
        <Stagger className="grid gap-6 md:grid-cols-2 lg:grid-cols-3" step={90}>
          {PROJECTS.map(({ img, sector, size, t, d }) => (
            <Tilt key={t}>
            <article className="group lift border border-[#E2E8EC] bg-white transition-shadow hover:border-[#25C7E8] hover:shadow-[0_12px_36px_rgba(12,30,40,0.10)]" style={{ borderRadius: 8, overflow: 'hidden' }}>
              <div className="overflow-hidden">
                <img src={img} alt={t} className="aspect-[16/10] w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]" />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between gap-3">
                  <p className="card-cat">{sector}</p>
                  <p className="font-tech shrink-0 border border-[#E2E8EC] bg-[#F4F6F8] px-2.5 py-1 text-[10px] uppercase tracking-[0.08em] text-[#50656A]" style={{ borderRadius: 6 }}>{size}</p>
                </div>
                <h2 className="card-title mt-3 text-[#071D26]" style={{ fontSize: '19px' }}>{t}</h2>
                <p className="card-desc mt-2 text-[#50656A]" style={{ fontSize: '13px' }}>{d}</p>
              </div>
            </article>
            </Tilt>
          ))}
        </Stagger>
        <div className="mt-10 flex flex-col items-start justify-between gap-4 border border-[#E2E8EC] bg-[#F4F6F8] p-6 sm:flex-row sm:items-center" style={{ borderRadius: 8 }}>
          <p className="text-[15px] text-[#42545F]">
            <span className="font-semibold text-[#071D26]">Have a similar site?</span> Send your bill and photos — we respond with size, generation and subsidy breakup.
          </p>
          <Link href="/contact" className="font-display inline-flex shrink-0 items-center gap-2 bg-[#008ED6] px-6 py-3 text-[13px] font-semibold tracking-[-0.01em] text-white hover:bg-[#00659D]" style={{ borderRadius: 6 }}>
            Discuss your site <ArrowRight size={15} />
          </Link>
        </div>
      </section>
      <CtaBand />
    </main>
  )
}
