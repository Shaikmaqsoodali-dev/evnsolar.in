import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { PageIntro, CtaBand } from '@/components/site-chrome'
import { Reveal, Stagger, Tilt } from '@/components/motion'

export const metadata = { title: 'Blog — EVN Solar Energy Solutions' }

const POSTS = [
  { img: 'https://res.cloudinary.com/qxjpbgh6/image/upload/v1791122119/04-vikram-solar-multi-crystalline-solar-panels.webp', cat: 'Buying guide', date: 'Oct 2026', t: 'Best solar panels for home in India — 10 options explained', d: 'Spark, Vikram, Tata, REC, Luminous, Loom and more: mono vs poly vs multi-crystalline, who each suits, and five questions to ask before buying.', href: '/blog/best-solar-panels-home-india', cta: 'Read the guide' },
  { img: 'https://res.cloudinary.com/qxjpbgh6/image/upload/v1791122120/10-rec-solar-monocrystalline-solar-panels.webp', cat: 'Sizing guide', date: 'Sep 2026', t: 'What size rooftop do you actually need?', d: 'How we convert monthly units and EV kilometres into kW — with the worksheet we use on surveys.', href: '/contact', cta: 'Ask us about this' },
  { img: 'https://res.cloudinary.com/qxjpbgh6/image/upload/v1791122120/08-microtek-multi-crystalline-solar-panels.webp', cat: 'EV charging', date: 'Aug 2026', t: 'Home EV charger: sanction load, wiring and safety', d: 'When you need a load upgrade, what cable to run, and why load management matters.', href: '/contact', cta: 'Ask us about this' },
  { img: 'https://res.cloudinary.com/qxjpbgh6/image/upload/v1791122120/01-spark-solar-polycrystalline-solar-panels.webp', cat: 'Subsidy', date: 'Aug 2026', t: 'PM Surya Ghar subsidy, explained plainly', d: 'Eligibility, application steps and timelines for residential applicants in Maharashtra.', href: '/contact', cta: 'Ask us about this' },
  { img: 'https://res.cloudinary.com/qxjpbgh6/image/upload/v1791122119/09-loom-solar-monocrystalline-solar-panels.webp', cat: 'Maintenance', date: 'Jul 2026', t: 'Why generation drops — and the 30-minute health check', d: 'Soiling, shading growth, inverter faults: the checks that protect your payback.', href: '/contact', cta: 'Ask us about this' },
  { img: 'https://res.cloudinary.com/qxjpbgh6/image/upload/v1791122119/05-luminus-solar-polycrystalline-solar-panel.webp', cat: 'Commercial', date: 'Jul 2026', t: 'Solar carports: when parking pays for itself', d: 'Costs, generation and EV-readiness for offices, hospitals and institutions.', href: '/contact', cta: 'Ask us about this' },
  { img: 'https://res.cloudinary.com/qxjpbgh6/image/upload/v1791122118/03-navitas-solar-multi-crystalline-solar-panels.webp', cat: 'Industry', date: 'Jun 2026', t: 'Ground-mounted plants: land, evacuation and O&M', d: 'What we verify before recommending a captive plant on open land.', href: '/contact', cta: 'Ask us about this' },
]

const GUIDE_PANELS = [
  { img: 'https://res.cloudinary.com/qxjpbgh6/image/upload/v1791122120/01-spark-solar-polycrystalline-solar-panels.webp', name: 'Spark Solar' },
  { img: 'https://res.cloudinary.com/qxjpbgh6/image/upload/v1791122119/04-vikram-solar-multi-crystalline-solar-panels.webp', name: 'Vikram Solar' },
  { img: 'https://res.cloudinary.com/qxjpbgh6/image/upload/v1791122118/03-navitas-solar-multi-crystalline-solar-panels.webp', name: 'Navitas Solar' },
  { img: 'https://res.cloudinary.com/qxjpbgh6/image/upload/v1791122119/02-tata-power-solar-panels-300-400w.webp', name: 'Tata Power Solar' },
  { img: 'https://res.cloudinary.com/qxjpbgh6/image/upload/v1791122120/10-rec-solar-monocrystalline-solar-panels.webp', name: 'REC Solar' },
  { img: 'https://res.cloudinary.com/qxjpbgh6/image/upload/v1791122119/05-luminus-solar-polycrystalline-solar-panel.webp', name: 'Luminous Solar' },
  { img: 'https://res.cloudinary.com/qxjpbgh6/image/upload/v1791122119/09-loom-solar-monocrystalline-solar-panels.webp', name: 'Loom Solar' },
  { img: 'https://res.cloudinary.com/qxjpbgh6/image/upload/v1791122120/08-microtek-multi-crystalline-solar-panels.webp', name: 'Microtek Solar' },
  { img: 'https://res.cloudinary.com/qxjpbgh6/image/upload/v1791122119/07-exide-polycrystalline-solar-panels.webp', name: 'Exide Solar' },
  { img: 'https://res.cloudinary.com/qxjpbgh6/image/upload/v1791122119/06-havells-polycrystalline-solar-panels.webp', name: 'Havells Solar' },
]

export default function BlogPage() {
  return (
    <main className="bg-[#F2F7F4]">
      <PageIntro
        kicker="Notes from site"
        title={<>Practical guides, <em className="editorial-accent text-[#008ED6]">not brochures.</em></>}
        lede="Sizing worksheets, subsidy walkthroughs and maintenance checklists from our survey and service teams."
        crumb={[['Blog', '/blog']]}
        image="https://res.cloudinary.com/qxjpbgh6/image/upload/v1791106731/Solar-Water-Heater.webp"
        imageAlt="Solar water heater"
      />
      <section className="mx-auto max-w-7xl px-6 py-14 sm:py-20">
        <Stagger className="grid gap-6 md:grid-cols-2 lg:grid-cols-3" itemClassName="h-full" step={90}>
          {POSTS.map(({ img, cat, date, t, d, href, cta }) => (
            <Tilt key={t} className="h-full">
            <Link href={href} className="group lift flex h-full flex-col border border-[#E2E8EC] bg-white transition-shadow hover:border-[#25C7E8] hover:shadow-[0_12px_36px_rgba(12,30,40,0.10)]" style={{ borderRadius: 8, overflow: 'hidden' }}>
              <div className="overflow-hidden">
                <img src={img} alt={t} className="aspect-[16/10] w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]" />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <p className="card-cat flex items-center justify-between">
                  {cat} <span className="font-tech font-medium normal-case tracking-[0.04em] text-[#8A9AA3]">{date}</span>
                </p>
                <h2 className="card-title mt-2 text-[#071D26]" style={{ fontSize: '18px', lineHeight: 1.35 }}>{t}</h2>
                <p className="card-desc mt-2 flex-1 text-[#50656A]" style={{ fontSize: '13px' }}>{d}</p>
                <p className="font-display mt-4 flex items-center gap-1 text-[13px] font-semibold tracking-[-0.01em] text-[#071D26] group-hover:text-[#008ED6]">
                  {cta} <ArrowUpRight size={14} className="card-arrow transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </p>
              </div>
            </Link>
            </Tilt>
          ))}
        </Stagger>
        <Reveal className="mt-10">
          <div className="border border-[#E2E8EC] bg-white p-6 sm:p-8" style={{ borderRadius: 10 }}>
            <div className="flex flex-wrap items-end justify-between gap-3">
              <div>
                <p className="card-cat">Inside the buying guide</p>
                <h2 className="card-title mt-1.5 text-[#071D26]" style={{ fontSize: '19px' }}>All 10 panels, compared side by side</h2>
              </div>
              <Link href="/blog/best-solar-panels-home-india" className="font-display inline-flex items-center gap-1.5 text-[13px] font-semibold text-[#008ED6] hover:text-[#00659D]">
                Read the guide <ArrowUpRight size={14} />
              </Link>
            </div>
            <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-5">
              {GUIDE_PANELS.map(({ img, name }) => (
                <Link key={name} href="/blog/best-solar-panels-home-india" className="group block overflow-hidden border border-[#EAEFF2]" style={{ borderRadius: 8 }}>
                  <img src={img} alt={`${name} solar panels`} loading="lazy" className="aspect-square w-full object-cover transition-transform duration-300 group-hover:scale-[1.04]" />
                  <p className="px-3 py-2 text-[12px] font-semibold text-[#071D26]">{name}</p>
                </Link>
              ))}
            </div>
          </div>
        </Reveal>
      </section>
      <CtaBand />
    </main>
  )
}
