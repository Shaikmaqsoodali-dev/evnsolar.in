import Link from 'next/link'
import { Check, Sun } from 'lucide-react'
import { BrandArrow } from '@/components/brand-arrow'
import { PageIntro, CtaBand } from '@/components/site-chrome'
import { Reveal, Stagger } from '@/components/motion'

export const metadata = {
  title: 'Best Solar Panels for Home in India | 10 Options Explained | EVN Solar',
  description:
    'A practical guide to 10 commonly used solar panel brands for Indian homes: monocrystalline, polycrystalline and multi-crystalline options, how to choose, and what to ask your installer.',
}

const PANELS = [
  {
    img: 'https://res.cloudinary.com/qxjpbgh6/image/upload/v1791122120/01-spark-solar-polycrystalline-solar-panels.webp',
    tag: 'Polycrystalline',
    name: '1. Spark Solar',
    body: 'Spark Solar is an Indian manufacturer whose polycrystalline panels are widely used on home rooftops. Polycrystalline technology is a proven, budget-friendly choice, which makes it a practical option for households that have generous roof space and want to keep system cost down.',
    fit: 'Consider if you want a cost-effective setup and have enough shadow-free roof area.',
  },
  {
    img: 'https://res.cloudinary.com/qxjpbgh6/image/upload/v1791122119/04-vikram-solar-multi-crystalline-solar-panels.webp',
    tag: 'Multi-crystalline',
    name: '2. Vikram Solar',
    body: 'Vikram Solar is one of India\u2019s well-known domestic panel manufacturers, supplying both Indian and overseas projects. Its multi-crystalline range is used across residential, commercial and industrial rooftops where a balance of output and value is needed.',
    fit: 'Consider if you prefer a widely installed Indian-made panel with broad service coverage.',
  },
  {
    img: 'https://res.cloudinary.com/qxjpbgh6/image/upload/v1791122118/03-navitas-solar-multi-crystalline-solar-panels.webp',
    tag: 'Multi-crystalline',
    name: '3. Navitas Solar',
    body: 'Navitas Solar is a Gujarat-based Indian manufacturer offering multi-crystalline panels for homes as well as commercial and industrial sites. Its panels are commonly specified in rooftop projects where dependable, mid-range modules are required.',
    fit: 'Consider if you want an Indian-made option suited to both homes and small businesses.',
  },
  {
    img: 'https://res.cloudinary.com/qxjpbgh6/image/upload/v1791122119/02-tata-power-solar-panels-300-400w.webp',
    tag: 'Polycrystalline',
    name: '4. Tata Power Solar',
    body: 'Tata Power Solar is part of the Tata group and has one of the widest sales and service networks for rooftop solar in India. Its polycrystalline panels are a popular pick for households that value brand trust and accessible after-sales support.',
    fit: 'Consider if nationwide service reach and brand assurance matter most to you.',
  },
  {
    img: 'https://res.cloudinary.com/qxjpbgh6/image/upload/v1791122120/10-rec-solar-monocrystalline-solar-panels.webp',
    tag: 'Monocrystalline',
    name: '5. REC Solar',
    body: 'REC is an international manufacturer known for its monocrystalline panels. Monocrystalline modules generate more power per square foot than polycrystalline ones, so they suit homes where shadow-free roof space is limited and every panel must work harder.',
    fit: 'Consider if your roof is small and you want maximum generation from fewer panels.',
  },
  {
    img: 'https://res.cloudinary.com/qxjpbgh6/image/upload/v1791122119/05-luminus-solar-polycrystalline-solar-panel.webp',
    tag: 'Polycrystalline',
    name: '6. Luminous Solar',
    body: 'Luminous is a household name in inverters and batteries, and its solar panels pair naturally with its own inverters and storage products. This makes it a convenient option for hybrid or off-grid home systems built around a single brand ecosystem.',
    fit: 'Consider if you are building a hybrid setup with battery backup from the same brand.',
  },
  {
    img: 'https://res.cloudinary.com/qxjpbgh6/image/upload/v1791122119/09-loom-solar-monocrystalline-solar-panels.webp',
    tag: 'Monocrystalline',
    name: '7. Loom Solar',
    body: 'Loom Solar is an Indian company focused on residential solar, with monocrystalline panels designed for home rooftops. It is popular with first-time buyers who research and purchase their systems online.',
    fit: 'Consider if you are a homeowner comparing modern mono panels for a compact rooftop.',
  },
  {
    img: 'https://res.cloudinary.com/qxjpbgh6/image/upload/v1791122120/08-microtek-multi-crystalline-solar-panels.webp',
    tag: 'Multi-crystalline',
    name: '8. Microtek Solar',
    body: 'Microtek is best known for inverters and UPS systems, and its multi-crystalline solar panels round out complete home power packages. Choosing panels alongside the brand\u2019s own inverter can simplify system matching and support.',
    fit: 'Consider if you already use or plan to use Microtek inverters at home.',
  },
  {
    img: 'https://res.cloudinary.com/qxjpbgh6/image/upload/v1791122119/07-exide-polycrystalline-solar-panels.webp',
    tag: 'Polycrystalline',
    name: '9. Exide Solar',
    body: 'Exide, India\u2019s battery major, also offers polycrystalline solar panels for on-grid and off-grid home systems. Its strength in energy storage makes it a natural fit for homes that need reliable power through outages.',
    fit: 'Consider if battery backup is a priority alongside daytime solar generation.',
  },
  {
    img: 'https://res.cloudinary.com/qxjpbgh6/image/upload/v1791122119/06-havells-polycrystalline-solar-panels.webp',
    tag: 'Polycrystalline',
    name: '10. Havells Solar',
    body: 'Havells is a leading Indian electrical goods brand whose polycrystalline panels serve on-grid and off-grid home systems. Homes already wired with Havells switchgear and cables may find it convenient to stay within the same brand family.',
    fit: 'Consider if you want panels from a familiar electrical brand with wide dealer availability.',
  },
]

const TECH = [
  ['Monocrystalline', 'Higher output per square foot', 'Best when roof space is limited; usually priced higher.'],
  ['Polycrystalline', 'Proven and budget-friendly', 'Best when roof space is ample and upfront cost matters.'],
  ['Multi-crystalline', 'Balanced mid-range option', 'A middle path between output and value for homes and small businesses.'],
]

const CHECKLIST = [
  'Measure your shadow-free roof area. It decides mono vs poly more than brand does.',
  'Match system size to your monthly units and future load (including any EV plans).',
  'Compare product and performance warranties on the actual datasheet, not the brochure.',
  'Check the installer\u2019s scope: structure, wiring, earthing, net-metering and monitoring.',
  'Ask who handles service claims: the dealer, the installer, or the manufacturer directly.',
]

export default function SolarPanelsGuidePost() {
  return (
    <main className="bg-[#F0F5F9]">
      <PageIntro
        kicker="Home solar guides"
        title={<>Best solar panels for home in India, <em className="editorial-accent text-[#0F88C7]">explained.</em></>}
        lede="Ten panel options Indian homeowners commonly compare: what each technology means, who each brand suits, and how to choose the right one for your roof."
        crumb={[['Blog', '/blog'], ['Best solar panels for home', '/blog/best-solar-panels-home-india']]}
        image="https://res.cloudinary.com/qxjpbgh6/image/upload/v1791300322/WhatsApp_Image_2026-10-06_at_8.54.50_PM.jpg"
        imageAlt="Rows of solar panels in a solar field"
      />

      <article className="mx-auto max-w-4xl px-6 py-14 sm:py-20">
        <Reveal>
          <p className="text-[15.5px] font-normal leading-[1.85] text-[#33474E]">
            Choosing panels for a home rooftop comes down to three things: your{' '}
            <strong className="font-semibold text-[#072A45]">roof space</strong>, your{' '}
            <strong className="font-semibold text-[#072A45]">budget</strong>, and your{' '}
            <strong className="font-semibold text-[#072A45]">monthly consumption</strong>. The brand matters less
            than getting these three right, but since most homeowners compare the same set of names, here are
            ten commonly used options in India, rewritten in plain language so you can compare them side by side.
          </p>
        </Reveal>

        {/* Technology primer */}
        <Reveal delay={80}>
          <div className="mt-10 border border-[#BFDDF2] bg-[#E7F1F8] p-7 sm:p-8" style={{ borderRadius: 10 }}>
            <p className="font-display flex items-center gap-3 text-[18px] font-semibold text-[#0F88C7]">
              <Sun size={16} /> Panel types in 30 seconds.
            </p>
            <div className="mt-5 grid gap-4 sm:grid-cols-3">
              {TECH.map(([t, h, d]) => (
                <div key={t} className="border border-[#BFDDF2] bg-white p-5" style={{ borderRadius: 8 }}>
                  <p className="font-display text-[15px] font-semibold text-[#072A45]">{t}</p>
                  <p className="mt-1 text-[13px] font-semibold text-[#0F88C7]">{h}</p>
                  <p className="mt-1.5 text-[13px] font-normal leading-relaxed text-[#54687A]">{d}</p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        {/* 10 panels */}
        <Stagger className="mt-10 space-y-6" step={70}>
          {PANELS.map(({ img, tag, name, body, fit }) => (
            <article
              key={name}
              className="lift grid overflow-hidden border border-[#D9E2EA] bg-white sm:grid-cols-[240px_1fr]"
              style={{ borderRadius: 10 }}
            >
              <div className="relative min-h-[180px] overflow-hidden">
                <img src={img} alt={name} className="absolute inset-0 h-full w-full object-cover" loading="lazy" />
                <span
                  className="absolute left-3 top-3 bg-[#0F88C7] px-2.5 py-1 text-[10.5px] font-semibold uppercase tracking-[0.06em] text-white"
                  style={{ borderRadius: 4, fontFamily: 'var(--font-body)' }}
                >
                  {tag}
                </span>
              </div>
              <div className="p-6 sm:p-7">
                <h2 className="font-display text-[19px] font-semibold tracking-[-0.015em] text-[#072A45]">{name}</h2>
                <p className="mt-2 text-[14.5px] font-normal leading-[1.8] text-[#3E5162]">{body}</p>
                <p className="mt-3 flex gap-2.5 border-t border-[#DCE6EE] pt-3 text-[13.5px] font-normal leading-relaxed text-[#33474E]">
                  <Check size={15} className="mt-1 shrink-0 text-[#33A94F]" /> {fit}
                </p>
              </div>
            </article>
          ))}
        </Stagger>

        {/* How to choose */}
        <Reveal>
          <div className="mt-10 bg-[#072A45] p-7 text-white sm:p-9" style={{ borderRadius: 10 }}>
            <h2 className="sx sx-md mt-3 text-white">
              Five questions <em>worth asking.</em>
            </h2>
            <ul className="mt-6 space-y-3">
              {CHECKLIST.map((c) => (
                <li key={c} className="flex items-start gap-3 text-[14.5px] font-normal leading-relaxed text-white/80">
                  <span className="mt-0.5 grid size-6 shrink-0 place-items-center bg-[#33A94F] text-white" style={{ borderRadius: 6 }}>
                    <Check size={13} strokeWidth={3} />
                  </span>
                  {c}
                </li>
              ))}
            </ul>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="btn-shine font-display inline-flex items-center gap-2 bg-white px-6 py-3 text-[13.5px] font-semibold text-[#072A45] hover:bg-[#62D984]"
                style={{ borderRadius: 6 }}
              >
                Get a free site assessment <BrandArrow size={15} />
              </Link>
              <Link
                href="/blog"
                className="font-display inline-flex items-center gap-2 border border-white/25 px-6 py-3 text-[13.5px] font-semibold text-white hover:border-white/60"
                style={{ borderRadius: 6 }}
              >
                <BrandArrow direction="left" size={15} /> All guides
              </Link>
            </div>
          </div>
        </Reveal>

        <Reveal delay={60}>
          <p className="fineprint mt-6 text-center text-[#789096]">
            Brand line-ups, models and warranties change over time. Confirm the current datasheet with your
            supplier or installer before deciding. This guide is educational and does not rank or endorse any brand.
          </p>
        </Reveal>
      </article>

      <CtaBand />
    </main>
  )
}
