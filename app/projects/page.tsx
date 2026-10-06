import Link from 'next/link'
import { Building2, CarFront, Factory, Home, Hospital, Truck } from 'lucide-react'
import { BrandArrow } from '@/components/brand-arrow'
import { IMG } from '@/lib/brand'
import { PageIntro, CtaBand } from '@/components/site-chrome'
import { Stagger, Tilt } from '@/components/motion'

export const metadata = { title: 'Projects | EVN Solar Energy Solutions', description: 'Residential, commercial and industrial solar + EV charging projects across Maharashtra by EVN Solar — rooftops, ground mounts, carports and depot charging hubs.' }

const PROJECTS = [
  { img: IMG.rooftop, icon: Home, badge: 'Home', sector: 'Residential, Nashik', size: '5 kW + 7.4 kW charger', t: 'Rooftop with home EV charging', d: 'Battery-ready hybrid, subsidy filing and app-based generation tracking for a two-storey home.' },
  { img: IMG.industrial, icon: Factory, badge: 'Plant', sector: 'Industrial, Malegaon', size: '120 kW', t: 'Ground-mounted plant + fleet charging', d: 'Land-optimized rows with scheduled depot charging and monthly generation reporting.' },
  { img: IMG.carport, icon: CarFront, badge: 'Carport', sector: 'Commercial, Office campus', size: '40 kW', t: 'Solar carport, EV-ready', d: 'Waterproof parking structure with charger conduits, lighting and CCTV provision.' },
  { img: IMG.panel, icon: Hospital, badge: 'Hospital', sector: 'Commercial, Hospital', size: '30 kW', t: 'Hospital rooftop with O&M', d: 'High-uptime design with cleaning plan, thermography and annual maintenance contract.' },
  { img: IMG.fleetDepot, icon: Truck, badge: 'Fleet', sector: 'Fleet, Logistics depot', size: '60 kW DC + 22 kW AC', t: 'Depot charging hub', d: 'DC fast plus multi-point AC with load management, RFID billing and fleet reports.' },
  { img: IMG.solarField, icon: Building2, badge: 'Captive', sector: 'Industrial, Farm', size: '250 kW', t: 'Captive ground-mounted plant', d: 'Captive generation with SCADA-ready monitoring and staged expansion provision.' },
]

export default function ProjectsPage() {
  return (
    <main className="bg-[#F0F5F9]">
      <PageIntro
        kicker="Projects"
        title={<>Work we will stand behind <em className="editorial-accent text-[#0F88C7]">in writing.</em></>}
        lede="A selection of residential, commercial and industrial installations across Maharashtra. Every project includes drawings, test records and a monitoring handover."
        crumb={[['Projects', '/projects']]}
        image="https://res.cloudinary.com/qxjpbgh6/image/upload/v1791106731/Solar_carport_EV-ready_parking.jpg"
        imageAlt="Solar carport EV-ready parking"
      />
      <section className="mx-auto max-w-7xl px-6 py-14 sm:py-20">
        <Stagger className="grid gap-6 md:grid-cols-2 lg:grid-cols-3" step={90}>
          {PROJECTS.map(({ img, icon: Icon, badge, sector, size, t, d }) => (
            <Tilt key={t}>
            <article className="group lift border border-[#D9E2EA] bg-white transition-shadow hover:border-[#62D984] hover:shadow-[0_12px_36px_rgba(7,42,69,0.10)]" style={{ borderRadius: 8, overflow: 'hidden' }}>
              <div className="photo-frame relative overflow-hidden">
                <img src={img} alt={`${t} — ${sector} ${badge} project photo`} className="aspect-[16/10] w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]" />
                <span aria-hidden className="photo-scrim" />
                <span className="photo-badge photo-badge--top" aria-hidden>
                  <Icon size={15} strokeWidth={2.2} />
                  <span className="photo-badge__label">{badge}</span>
                </span>
                <span className="photo-caption">
                  <h2 className="photo-title photo-title--sm">{t}</h2>
                </span>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between gap-3">
                  <p className="card-cat">{sector}</p>
                  <p className="font-tech shrink-0 border border-[#D9E2EA] bg-[#F4F6F8] px-2.5 py-1 text-[10px] uppercase tracking-[0.08em] text-[#54687A]" style={{ borderRadius: 6 }}>{size}</p>
                </div>
                <p className="card-desc mt-2.5 flex items-start gap-2.5 text-[#54687A]" style={{ fontSize: '13px' }}>
                  <span className="title-icon size-8 shrink-0 bg-[#072A45] text-[#62D984]" aria-hidden>
                    <Icon size={15} strokeWidth={2} />
                  </span>
                  {d}
                </p>
              </div>
            </article>
            </Tilt>
          ))}
        </Stagger>
        <div className="mt-10 flex flex-col items-start justify-between gap-4 border border-[#D9E2EA] bg-[#F4F6F8] p-6 sm:flex-row sm:items-center" style={{ borderRadius: 8 }}>
          <p className="text-[15px] text-[#42545F]">
            <span className="font-semibold text-[#072A45]">Have a similar site?</span> Send your bill and photos. We respond with size, generation and subsidy breakup.
          </p>
          <Link href="/contact" className="font-display inline-flex shrink-0 items-center gap-2 bg-[#0F88C7] px-6 py-3 text-[13px] font-semibold tracking-[-0.01em] text-white hover:bg-[#0B6AA0]" style={{ borderRadius: 6 }}>
            Get a free site assessment <BrandArrow size={15} />
          </Link>
        </div>
      </section>
      <CtaBand />
    </main>
  )
}
