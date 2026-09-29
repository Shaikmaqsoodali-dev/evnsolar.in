import Link from 'next/link'
import { ArrowRight, MapPin } from 'lucide-react'
import { IMG } from '@/lib/brand'
import { Eyebrow, PageHero, CtaBand } from '@/components/site-chrome'

export const metadata = { title: 'Projects | EV & Solar' }

const PROJECTS = [
  { img: IMG.rooftop, t: '5 kW Home + 7.4 kW EV Charger', loc: 'Nashik, Maharashtra', tag: 'RESIDENTIAL + EV', d: 'Hybrid-ready rooftop with solar-priority EV charging and app monitoring.' },
  { img: IMG.ground, t: '120 kW Ground Plant + Fleet Charging', loc: 'Malegaon, Maharashtra', tag: 'COMMERCIAL + FLEET', d: 'Warehouse plant with scheduled depot charging and billing.' },
  { img: IMG.carport, t: '40-Car Solar Carport', loc: 'Industrial Campus', tag: 'CARPORT + EV', d: 'Waterproof carport generating daytime power with EV-ready bays.' },
  { img: IMG.solarField, t: '500 kW Industrial Rooftop', loc: 'MIDC Area', tag: 'INDUSTRIAL', d: 'Multi-shed installation with SCADA and O&M contract.' },
  { img: IMG.evCharge, t: 'Workplace Charging Hub (6 points)', loc: 'Corporate Park', tag: 'EV CHARGING', d: 'Load-balanced 22 kW points with RFID billing and reports.' },
  { img: IMG.panel, t: '10 kW Hybrid with Storage', loc: 'Farmhouse', tag: 'HYBRID + BACKUP', d: 'Outage-proof design with batteries and critical-load backup.' },
]

export default function ProjectsPage() {
  return (
    <main className="bg-[#F8FAFC]">
      <PageHero
        tag="PROJECTS & CASE STUDIES"
        title={<>Work that generates — <span className="text-[#0083CB]">and charges.</span></>}
        desc="A sample of homes, businesses and fleets running on EVN-engineered solar + EV infrastructure."
      />
      <section className="mx-auto max-w-6xl px-5 py-14">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.map(({ img, t, loc, tag, d }) => (
            <article key={t} className="group overflow-hidden rounded-[22px] border border-[#DCE5EA] bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(0,131,203,0.15)]">
              <div className="relative h-52 overflow-hidden">
                <img src={img} alt={t} className="h-full w-full object-cover transition group-hover:scale-105" />
                <span className="absolute left-4 top-4 rounded-full bg-[#0B1720]/85 px-3 py-1 text-[10.5px] font-extrabold text-white">{tag}</span>
              </div>
              <div className="p-6">
                <h2 className="text-[16.5px] font-extrabold leading-snug">{t}</h2>
                <p className="mt-1.5 flex items-center gap-1.5 text-[12.5px] font-semibold text-[#0083CB]"><MapPin size={13} /> {loc}</p>
                <p className="mt-2 text-[13.5px] text-[#52616B]">{d}</p>
                <Link href="/contact" className="mt-4 inline-flex items-center gap-1.5 text-[13px] font-bold text-[#1F8A42]">Get a similar system <ArrowRight size={14} /></Link>
              </div>
            </article>
          ))}
        </div>
        <div className="mt-10 rounded-[22px] border border-[#DCE5EA] bg-white p-8 text-center">
          <Eyebrow>YOUR SITE COULD BE NEXT</Eyebrow>
          <p className="mx-auto mt-3 max-w-md text-[14px] text-[#52616B]">Send terrace / parking photos + latest bill — we&apos;ll share a preliminary size and generation estimate.</p>
          <Link href="/contact" className="mt-5 inline-block rounded-full bg-[#0083CB] px-8 py-3 text-sm font-bold text-white hover:bg-[#006FAE]">Start with a free survey</Link>
        </div>
      </section>
      <CtaBand />
      <div className="h-4" />
    </main>
  )
}
