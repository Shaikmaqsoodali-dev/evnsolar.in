import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { PageIntro, CtaBand } from '@/components/site-chrome'
import { Reveal } from '@/components/motion'

export const metadata = { title: 'Blog — EVN Solar Energy Solutions' }

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
        lede="Panel comparisons and practical notes from our survey and service teams."
        crumb={[['Blog', '/blog']]}
        image="https://res.cloudinary.com/qxjpbgh6/image/upload/v1791106731/Solar-Water-Heater.webp"
        imageAlt="Solar water heater"
      />
      <section className="mx-auto max-w-7xl px-6 py-14 sm:py-20">
        <Reveal>
          <div className="border border-[#E2E8EC] bg-white p-6 sm:p-8" style={{ borderRadius: 10 }}>
            <div className="flex flex-wrap items-end justify-between gap-3">
              <div>
                <p className="card-cat">Buying guide · Oct 2026</p>
                <h2 className="card-title mt-1.5 text-[#071D26]" style={{ fontSize: '19px' }}>Best solar panels for home in India — 10 options explained</h2>
                <p className="card-desc mt-1.5 max-w-2xl text-[#50656A]">
                  Spark, Vikram, Tata, REC, Luminous, Loom and more: mono vs poly vs multi-crystalline,
                  who each suits, and five questions to ask before buying.
                </p>
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
