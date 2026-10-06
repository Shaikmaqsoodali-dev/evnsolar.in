import Link from 'next/link'
import { BookOpen, Sun } from 'lucide-react'
import { BrandArrow } from '@/components/brand-arrow'
import { PageIntro, CtaBand } from '@/components/site-chrome'
import { Reveal } from '@/components/motion'

export const metadata = { title: 'Blog | EVN Solar Energy Solutions' }

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
    <main className="bg-[#F0F5F9]">
      <PageIntro
        kicker="Notes from site"
        title={<>Practical guides, <em className="editorial-accent text-[#0F88C7]">not brochures.</em></>}
        lede="Panel comparisons and practical notes from our survey and service teams."
        crumb={[['Blog', '/blog']]}
        image="https://res.cloudinary.com/qxjpbgh6/image/upload/v1791106731/Solar-Water-Heater.webp"
        imageAlt="Solar water heater"
      />
      <section className="mx-auto max-w-7xl px-6 py-14 sm:py-20">
        <Reveal>
          <div className="border border-[#D9E2EA] bg-white p-6 sm:p-8" style={{ borderRadius: 10 }}>
            <div className="flex flex-wrap items-end justify-between gap-3">
              <div>
                <p className="card-cat flex items-center gap-2">
                  <span className="title-icon size-8 bg-[#072A45] text-[#62D984]" aria-hidden>
                    <BookOpen size={15} strokeWidth={2} />
                  </span>
                  Buying guide, Oct 2026
                </p>
                <h2 className="card-title-strong mt-1.5 font-bold text-[#072A45]" style={{ fontSize: '19px' }}>Best solar panels for home in India: 10 options explained</h2>
                <p className="card-desc mt-1.5 max-w-2xl text-[#54687A]">
                  Spark, Vikram, Tata, REC, Luminous, Loom and more: mono vs poly vs multi-crystalline,
                  who each suits, and five questions to ask before buying.
                </p>
              </div>
              <Link href="/blog/best-solar-panels-home-india" className="font-display inline-flex items-center gap-1.5 text-[13px] font-semibold text-[#0F88C7] hover:text-[#0B6AA0]">
                Read the guide <BrandArrow direction="up-right" size={14} />
              </Link>
            </div>
            <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-5">
              {GUIDE_PANELS.map(({ img, name }) => (
                <Link key={name} href="/blog/best-solar-panels-home-india" className="group block overflow-hidden border border-[#DCE6EE]" style={{ borderRadius: 8 }}>
                  <span className="block overflow-hidden">
                    <img src={img} alt={`${name} — solar panel product photo`} loading="lazy" className="aspect-square w-full object-cover transition-transform duration-300 group-hover:scale-[1.04]" />
                  </span>
                  <p className="flex items-center gap-1.5 px-3 py-2 text-[12px] font-bold tracking-tight text-[#072A45]">
                    <Sun size={13} className="shrink-0 text-[#1E7A38]" strokeWidth={2.4} aria-hidden />
                    {name}
                  </p>
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
