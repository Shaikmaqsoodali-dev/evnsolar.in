import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { IMG } from '@/lib/brand'
import { PageIntro, CtaBand } from '@/components/site-chrome'
import { Stagger, Tilt } from '@/components/motion'

export const metadata = { title: 'Blog — EVN Solar Energy Solutions' }

const POSTS = [
  { img: IMG.blog1, cat: 'Sizing guide', date: 'Sep 2026', t: 'What size rooftop do you actually need?', d: 'How we convert monthly units and EV kilometres into kW — with the worksheet we use on surveys.' },
  { img: IMG.blog2, cat: 'EV charging', date: 'Aug 2026', t: 'Home EV charger: sanction load, wiring and safety', d: 'When you need a load upgrade, what cable to run, and why load management matters.' },
  { img: IMG.blog3, cat: 'Subsidy', date: 'Aug 2026', t: 'PM Surya Ghar subsidy, explained plainly', d: 'Eligibility, application steps and timelines for residential applicants in Maharashtra.' },
  { img: IMG.panel, cat: 'Maintenance', date: 'Jul 2026', t: 'Why generation drops — and the 30-minute health check', d: 'Soiling, shading growth, inverter faults: the checks that protect your payback.' },
  { img: IMG.carport, cat: 'Commercial', date: 'Jul 2026', t: 'Solar carports: when parking pays for itself', d: 'Costs, generation and EV-readiness for offices, hospitals and institutions.' },
  { img: IMG.solarField, cat: 'Industry', date: 'Jun 2026', t: 'Ground-mounted plants: land, evacuation and O&M', d: 'What we verify before recommending a captive plant on open land.' },
]

export default function BlogPage() {
  return (
    <main className="bg-[#F2F7F4]">
      <PageIntro
        kicker="Notes from site"
        title={<>Practical guides, <em className="editorial-accent text-[#008ED6]">not brochures.</em></>}
        lede="Sizing worksheets, subsidy walkthroughs and maintenance checklists from our survey and service teams."
        crumb={[['Blog', '/blog']]}
      />
      <section className="mx-auto max-w-7xl px-6 py-14 sm:py-20">
        <Stagger className="grid gap-6 md:grid-cols-2 lg:grid-cols-3" step={90}>
          {POSTS.map(({ img, cat, date, t, d }) => (
            <Tilt key={t}>
            <Link href="/contact" className="group lift block border border-[#E2E8EC] bg-white transition-shadow hover:border-[#25C7E8] hover:shadow-[0_12px_36px_rgba(12,30,40,0.10)]" style={{ borderRadius: 8, overflow: 'hidden' }}>
              <div className="overflow-hidden">
                <img src={img} alt={t} className="aspect-[16/10] w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]" />
              </div>
              <div className="p-6">
                <p className="card-cat flex items-center justify-between">
                  {cat} <span className="font-tech font-medium normal-case tracking-[0.04em] text-[#8A9AA3]">{date}</span>
                </p>
                <h2 className="card-title mt-2 text-[#071D26]" style={{ fontSize: '18px', lineHeight: 1.35 }}>{t}</h2>
                <p className="card-desc mt-2 text-[#50656A]" style={{ fontSize: '13px' }}>{d}</p>
                <p className="font-display mt-4 flex items-center gap-1 text-[13px] font-semibold tracking-[-0.01em] text-[#071D26] group-hover:text-[#008ED6]">
                  Ask us about this <ArrowUpRight size={14} className="card-arrow transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </p>
              </div>
            </Link>
            </Tilt>
          ))}
        </Stagger>
      </section>
      <CtaBand />
    </main>
  )
}
