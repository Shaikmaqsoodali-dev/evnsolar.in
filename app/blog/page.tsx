import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { IMG } from '@/lib/brand'
import { PageHero, CtaBand } from '@/components/site-chrome'

export const metadata = { title: 'Blog | EV & Solar' }

const POSTS = [
  { img: IMG.blog1, cat: 'SOLAR + EV SIZING', t: 'How much solar do you need for an EV?', d: 'Convert your daily kilometres into units, then into kW — with real examples for scooters, cars and fleets.' },
  { img: IMG.blog2, cat: 'HYBRID VS ON-GRID', t: 'On-grid vs hybrid for homes with EVs', d: 'When battery backup is worth it, what it costs, and how to stay hybrid-ready without overspending.' },
  { img: IMG.blog3, cat: 'COMMERCIAL ROI', t: 'Commercial solar + fleet charging ROI', d: 'Payback math for warehouses and depots combining daytime generation with scheduled charging.' },
  { img: IMG.rooftop, cat: 'MAINTENANCE', t: 'Why generation drops (and how we prevent it)', d: 'Soiling, shading, hotspots and inverter clipping — plus our O&M checklist.' },
  { img: IMG.evCharge, cat: 'EV CHARGING', t: 'Do you need a load upgrade for home charging?', d: 'How 7.4 kW chargers work on Indian sanction loads with load management.' },
  { img: IMG.ground, cat: 'SUBSIDY GUIDE', t: 'PM Surya Ghar subsidy, explained simply', d: 'Eligibility, amounts, timeline and documents — without the jargon.' },
]

export default function BlogPage() {
  return (
    <main className="bg-[#F8FAFC]">
      <PageHero
        tag="KNOWLEDGE HUB"
        title={<>Solar + EV guides, <span className="text-[#0083CB]">without jargon.</span></>}
        desc="Sizing, ROI, subsidy and maintenance explainers from our engineering team."
      />
      <section className="mx-auto max-w-6xl px-5 py-14">
        <div className="grid gap-5 md:grid-cols-3">
          {POSTS.map(({ img, cat, t, d }) => (
            <article key={t} className="group flex flex-col overflow-hidden rounded-[20px] border border-[#DCE5EA] bg-white">
              <div className="h-48 overflow-hidden"><img src={img} alt={t} className="h-full w-full object-cover transition group-hover:scale-105" /></div>
              <div className="flex flex-1 flex-col p-5">
                <p className="text-[11px] font-extrabold tracking-wider text-[#0083CB]">{cat}</p>
                <h2 className="mt-2 font-extrabold leading-snug">{t}</h2>
                <p className="mt-2 flex-1 text-[13.5px] text-[#52616B]">{d}</p>
                <Link href="/contact" className="mt-4 inline-flex items-center gap-1.5 text-[13px] font-bold text-[#1F8A42]">Ask about this <ArrowRight size={14} /></Link>
              </div>
            </article>
          ))}
        </div>
      </section>
      <CtaBand />
      <div className="h-4" />
    </main>
  )
}
