import Link from 'next/link'
import {
  ClipboardCheck,
  Compass,
  DraftingCompass,
  PackageCheck,
  PlugZap,
  Settings2,
  Sun,
  Wrench,
  BadgeCheck,
  Cog,
  Leaf,
  Layers,
  LifeBuoy,
  Gauge,
  HeartHandshake,
} from 'lucide-react'
import { BrandArrow } from '@/components/brand-arrow'
import { IMG } from '@/lib/brand'
import { PageIntro, SectionHeading, CtaBand } from '@/components/site-chrome'
import { Parallax, Reveal, Stagger } from '@/components/motion'

export const metadata = {
  title: 'About EVN Solar | Powering a Smarter, Cleaner Future',
  description:
    'EVN Solar is a renewable energy solutions company making solar power and electric mobility accessible, reliable and practical for homes, businesses and industries.',
}

const WHAT_WE_DO = [
  {
    icon: Sun,
    title: 'On-Grid & Off-Grid Rooftop',
    desc: 'Tailored rooftop systems — on-grid for utility savings, off-grid for independence — engineered for efficiency, reliability and consistent power.',
  },
  {
    icon: ClipboardCheck,
    title: 'Turnkey Solar EPC',
    desc: 'Every aspect from design and procurement to construction with strict quality assurance for optimal performance and longevity. 1,607 MWp delivered.',
  },
  {
    icon: PlugZap,
    title: 'Panels, Inverters & Storage',
    desc: 'High-efficiency Solar PV panels, inverters + UPS for continuity, charge controllers, hybrid power packs and net-metering solutions.',
  },
  {
    icon: Wrench,
    title: 'Land + O&M Support',
    desc: '5,700+ acres acquired via State liaison, plus monitoring, maintenance and performance support so plants stay high-yield for life.',
  },
]

const APPROACH_STEPS = [
  {
    n: '01',
    title: 'Consultation',
    desc: 'We start by understanding energy requirements, available space, budget and future needs.',
  },
  {
    n: '02',
    title: 'Site assessment',
    desc: 'A practical review of the site conditions that shape system size and placement.',
  },
  {
    n: '03',
    title: 'System design',
    desc: 'A solution balanced for performance, reliability and investment value.',
  },
  {
    n: '04',
    title: 'Procurement',
    desc: 'Quality equipment selected to suit the approved design and energy goals.',
  },
  {
    n: '05',
    title: 'Installation',
    desc: 'Practical, careful project execution with attention to long-term performance.',
  },
  {
    n: '06',
    title: 'Commissioning',
    desc: 'Testing and handover so the system starts up cleanly and correctly.',
  },
  {
    n: '07',
    title: 'Ongoing support',
    desc: 'After-sales assistance to keep the experience smooth and transparent.',
  },
]

const WHY_CARDS = [
  { icon: Layers, title: 'End-to-end solutions', desc: 'Consultation, design, installation, commissioning and support from one team.' },
  { icon: DraftingCompass, title: 'Professional engineering', desc: 'System design grounded in engineering expertise and energy requirements.' },
  { icon: BadgeCheck, title: 'Quality-focused execution', desc: 'Practical project execution built for long-term performance.' },
  { icon: PlugZap, title: 'Solar + EV expertise', desc: 'Combined understanding of solar power and electric mobility.' },
  { icon: Compass, title: 'Tailored solutions', desc: 'Systems shaped around property, space, budget and future needs.' },
  { icon: LifeBuoy, title: 'Long-term technical support', desc: 'A relationship that continues after installation.' },
  { icon: Gauge, title: 'Efficiency & reliability', desc: 'Energy systems designed to perform dependably over time.' },
]

export default function AboutPage() {
  return (
    <main className="bg-[#F0F5F9]">
      {/* 1 — Page header */}
      <PageIntro
        kicker="About EVN Solar — Est. 2020"
        title={
          <>
            Early movers in solar parks, <em className="editorial-accent text-[#62D984]">now 1,607 MWp strong.</em>
          </>
        }
        lede="Established in 2020, we have grown into a well-established turnkey solar EPC player — with 1,607 MWp implemented and 5,700+ acres acquired for customers across India."
        crumb={[['About', '/about']]}
        image="https://res.cloudinary.com/qxjpbgh6/image/upload/v1791106731/Solar-Panel-Installation.png"
        imageAlt="Rooftop solar panels against a clear sky"
      />

      {/* 2 — Introduction */}
      <section className="mx-auto max-w-7xl px-6 py-14 sm:py-20">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <Reveal variant="left">
            <SectionHeading
              title={
                <>
                  Consultative solar EPC, <em className="editorial-accent text-[#0F88C7]">built for the long term.</em>
                </>
              }
            />
            <div className="prose-tight mt-5 max-w-xl space-y-4 text-[15.5px] font-normal leading-[1.8] text-[#33474E]">
              <p>
                Established in 2020, we have been one of the early movers in the solar
                park regime and have now grown into a well-established player in
                turnkey solar engineering, procurement and construction (EPC) services,
                catering to the increasing demand for renewable energy in the country.
              </p>
              <p>
                We are also one of the leading integrated solar power companies in
                India with implementation of solar power projects of 1,607 MWp. On the
                back of our strong regulatory understanding of State laws for land
                acquisition and our ability to liaise with State land authorities, we
                have acquired over 5,700 acres of land for our customers across India.
              </p>
              <p>
                We offer a consultative approach to our customers&apos; solar energy needs
                and capabilities, which enables us to provide customized solutions to
                meet their requirements — from rooftop to utility-scale.
              </p>
            </div>
            <div className="mt-7 grid grid-cols-3 gap-3 border-y border-[#D9E2EA] py-5">
              {[
                ['1,607', 'MWp delivered'],
                ['5,700+', 'Acres acquired'],
                ['2020', 'Established'],
              ].map(([v, l]) => (
                <div key={l}>
                  <p className="font-display text-[26px] font-bold tracking-[-0.02em] text-[#072A45]">{v}</p>
                  <p className="mt-0.5 text-[11.5px] font-semibold uppercase tracking-[0.1em] text-[#54687A]">{l}</p>
                </div>
              ))}
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/services"
                className="btn-shine inline-flex items-center gap-2 bg-[#0F88C7] px-6 py-3 text-[14px] font-semibold text-white hover:bg-[#0B6AA0]"
                style={{ borderRadius: 6 }}
              >
                Explore our services <BrandArrow size={15} />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 border border-[#C3D2DE] bg-white px-6 py-3 text-[14px] font-semibold text-[#072A45] hover:border-[#0F88C7] hover:text-[#0F88C7]"
                style={{ borderRadius: 6 }}
              >
                Get a free site assessment
              </Link>
            </div>
          </Reveal>
          <Reveal variant="right" delay={120}>
            <Parallax className="aspect-[4/3] overflow-hidden" speed={0.08}>
              <img
                src={IMG.engineer1}
                alt="EVN Solar installation team at work"
                className="h-full w-full rounded-lg object-cover"
              />
            </Parallax>
            <div className="mt-3 grid grid-cols-2 gap-3">
              <img
                src={IMG.rooftop}
                alt="Rooftop solar array"
                className="aspect-[4/3] w-full rounded-lg object-cover"
              />
              <img
                src={IMG.evCharge}
                alt="EV charging"
                className="aspect-[4/3] w-full rounded-lg object-cover"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* 3 — What we do */}
      <section className="border-y border-[#BFDDF2] bg-[#E7F1F8]">
        <div className="mx-auto max-w-7xl px-6 py-14 sm:py-20">
          <SectionHeading
            kicker="What we do"
            center
            title={
              <>
                End-to-end solar <em className="editorial-accent text-[#0F88C7]">and mobility.</em>
              </>
            }
            lede="Four connected capabilities that take a project from first conversation to lifetime operation."
          />
          <Stagger className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4" itemClassName="h-full" step={90}>
            {WHAT_WE_DO.map(({ icon: Icon, title, desc }) => (
              <article
                key={title}
                className="lift flex h-full flex-col border border-[#BFDDF2] bg-white p-7"
                style={{ borderRadius: 8 }}
              >
                <span
                  className="grid size-11 place-items-center bg-[#072A45] text-[#62D984]"
                  style={{ borderRadius: 8 }}
                >
                  <Icon size={20} strokeWidth={1.8} />
                </span>
                <h3 className="card-title mt-5 text-[#072A45]">{title}</h3>
                <p className="card-desc mt-2 flex-1 text-[#3E5162]">{desc}</p>
              </article>
            ))}
          </Stagger>

          <Reveal className="mt-8">
            <div
              className="flex flex-col items-start justify-between gap-4 border border-[#BFDDF2] bg-white px-6 py-5 sm:flex-row sm:items-center"
              style={{ borderRadius: 8 }}
            >
              <p className="text-[14.5px] font-normal leading-relaxed text-[#33474E]">
                <span className="font-display font-semibold text-[#072A45]">Not sure which system fits?</span>{' '}
                On-grid, off-grid, or hybrid. We help you choose the right system for your property and energy goals.
              </p>
              <Link
                href="/services"
                className="font-display inline-flex shrink-0 items-center gap-1.5 text-[13.5px] font-semibold text-[#0F88C7] hover:text-[#0B6AA0]"
              >
                Compare solutions <BrandArrow direction="up-right" size={15} />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 4 — Our approach */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-14 sm:py-20">
          <SectionHeading
            title={
              <>
                From first consultation <em className="editorial-accent text-[#0F88C7]">to ongoing support.</em>
              </>
            }
            lede="Every project begins with understanding the customer's energy requirements, available space, budget, and future needs, then develops into a solution that balances performance, reliability, and investment value."
          />
          <ol className="mt-10 grid gap-px overflow-hidden border border-[#D9E2EA] bg-[#D9E2EA] sm:grid-cols-2 lg:grid-cols-4" style={{ borderRadius: 8 }}>
            {APPROACH_STEPS.map(({ n, title, desc }, i) => (
              <Reveal key={title} variant="up" delay={Math.min(i * 70, 420)} className="h-full">
                <li className="flex h-full flex-col bg-white p-6 transition-colors hover:bg-[#F0F5F9]">
                  <p className="font-tech text-[11px] font-medium uppercase tracking-[0.14em] text-[#0F88C7]">{n}</p>
                  <p className="font-display mt-2 text-[16px] font-semibold tracking-[-0.01em] text-[#072A45]">
                    {title}
                  </p>
                  <p className="mt-1.5 text-[13.5px] font-normal leading-relaxed text-[#54687A]">{desc}</p>
                  {i < APPROACH_STEPS.length - 1 && (
                    <span className="mt-4 hidden text-[#0F88C7] lg:block" aria-hidden>
                      <BrandArrow size={16} />
                    </span>
                  )}
                </li>
              </Reveal>
            ))}
            <Reveal variant="up" delay={420} className="h-full">
              <li className="bg-brand-grad flex h-full flex-col justify-between p-6 text-white">
                <div>
                  <p className="font-tech text-[11px] font-medium uppercase tracking-[0.14em] text-white/80">
                    Next step
                  </p>
                  <p className="font-display mt-2 text-[16px] font-semibold tracking-[-0.01em]">
                    Start with a consultation.
                  </p>
                  <p className="mt-1.5 text-[13.5px] font-normal leading-relaxed text-white/80">
                    Share your energy needs and we will shape the right path forward.
                  </p>
                </div>
                <Link
                  href="/contact"
                  className="font-display mt-5 inline-flex items-center gap-2 bg-white px-5 py-2.5 text-[13px] font-semibold text-[#072A45] hover:bg-[#072A45] hover:text-white"
                  style={{ borderRadius: 6 }}
                >
                  Get a free site assessment <BrandArrow size={14} />
                </Link>
              </li>
            </Reveal>
          </ol>
          <Reveal delay={100}>
            <p className="fineprint mt-6 text-center text-[#789096]">
              From the first consultation to system commissioning and after-sales support, our focus remains on
              delivering a smooth and transparent experience.
            </p>
          </Reveal>
        </div>
      </section>

      {/* 5 — Why EVN Solar */}
      <section className="border-y border-[#D9E2EA] bg-[#F0F5F9]">
        <div className="mx-auto max-w-7xl px-6 py-14 sm:py-20">
          <SectionHeading
            title={
              <>
                A partner for <em className="editorial-accent text-[#0F88C7]">the long term.</em>
              </>
            }
            lede="We believe renewable energy should be simple, dependable, and built for the long term."
          />
          <Stagger className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3" itemClassName="h-full" step={80}>
            {WHY_CARDS.map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="lift flex h-full items-start gap-4 border border-[#D9E2EA] bg-white p-6"
                style={{ borderRadius: 8 }}
              >
                <span
                  className="grid size-10 shrink-0 place-items-center border border-[#BFDDF2] bg-[#E7F1F8] text-[#0F88C7]"
                  style={{ borderRadius: 8 }}
                >
                  <Icon size={18} strokeWidth={1.9} />
                </span>
                <div>
                  <h3 className="card-title text-[#072A45]">{title}</h3>
                  <p className="card-desc mt-1 text-[#3E5162]">{desc}</p>
                </div>
              </div>
            ))}
            <div
              className="flex h-full flex-col justify-center bg-[#072A45] p-6 text-white"
              style={{ borderRadius: 8 }}
            >
              <p className="flex items-center gap-2 text-[12px] font-semibold uppercase tracking-[0.1em] text-[#62D984]">
                <Settings2 size={14} /> Solar + EV, together
              </p>
              <p className="font-display mt-2 text-[17px] font-semibold leading-snug tracking-[-0.01em]">
                One team for generation and charging.
              </p>
              <Link
                href="/ev-charging"
                className="font-display mt-4 inline-flex w-fit items-center gap-1.5 text-[13px] font-semibold text-white hover:text-[#62D984]"
              >
                Explore EV charging <BrandArrow direction="up-right" size={14} />
              </Link>
            </div>
          </Stagger>
        </div>
      </section>

      {/* 6 + 7 — Mission & Vision */}
      <section className="bg-[#072A45] text-white">
        <div className="h-1" style={{ background: 'linear-gradient(90deg, #0F88C7 0%, #62D984 50%, #33A94F 100%)' }} aria-hidden />
        <div className="mx-auto max-w-7xl px-6 py-14 sm:py-20">
          <div className="grid gap-5 lg:grid-cols-2">
            <Reveal variant="left">
              <article
                className="relative flex h-full flex-col overflow-hidden border border-white/10 bg-white/[0.05] p-8 sm:p-10"
                style={{ borderRadius: 10 }}
              >
                <div className="orb left-[-10%] top-[-30%] size-64 bg-[#0F88C7]/30" aria-hidden />
                <div className="relative">
                  <p className="font-display flex items-center gap-3 text-[17px] font-semibold text-[#62D984]">
                    <span className="inline-block h-[2px] w-8 bg-[#62D984]" aria-hidden />
                    Our mission
                  </p>
                  <h2 className="sx sx-md mt-4 text-white">
                    Accelerating the shift <em>to clean energy.</em>
                  </h2>
                  <p className="mt-4 max-w-lg text-[15.5px] font-normal leading-[1.8] text-white/75">
                    To accelerate the transition towards clean energy by delivering
                    dependable solar and EV solutions that help customers reduce energy
                    costs, improve energy independence, and contribute to a more
                    sustainable future.
                  </p>
                  <ul className="mt-6 space-y-2.5 border-t border-white/10 pt-6">
                    {[
                      [Cog, 'Dependable solar and EV solutions'],
                      [Gauge, 'Lower energy costs, stronger independence'],
                      [Leaf, 'A more sustainable future'],
                    ].map(([Icon, label]) => {
                      const I = Icon as typeof Cog
                      return (
                        <li key={label as string} className="flex items-center gap-3 text-[14px] text-white/80">
                          <span className="grid size-7 shrink-0 place-items-center rounded-md bg-white/10 text-[#62D984]">
                            <I size={14} />
                          </span>
                          {label as string}
                        </li>
                      )
                    })}
                  </ul>
                </div>
              </article>
            </Reveal>
            <Reveal variant="right" delay={120}>
              <article
                className="relative flex h-full flex-col overflow-hidden p-8 text-[#072A45] sm:p-10"
                style={{ borderRadius: 10, background: 'linear-gradient(135deg, #E7F1F8 0%, #FFFFFF 55%, #E7F1F8 100%)' }}
              >
                <div>
                  <p className="font-display flex items-center gap-3 text-[17px] font-semibold text-[#0F88C7]">
                    <span className="inline-block h-[2px] w-8 bg-[#0F88C7]" aria-hidden />
                    Our vision
                  </p>
                  <h2 className="sx sx-md mt-4 text-[#072A45]">
                    A trusted partner <em className="editorial-accent text-[#0F88C7]">for clean growth.</em>
                  </h2>
                  <p className="mt-4 max-w-lg text-[15.5px] font-normal leading-[1.8] text-[#33474E]">
                    To become a trusted renewable-energy partner by combining innovative
                    technology, engineering excellence, and responsible energy solutions.
                  </p>
                  <ul className="mt-6 space-y-2.5 border-t border-[#072A45]/10 pt-6">
                    {[
                      [PackageCheck, 'Innovative technology'],
                      [HeartHandshake, 'Engineering excellence'],
                      [Sun, 'Responsible energy solutions'],
                    ].map(([Icon, label]) => {
                      const I = Icon as typeof Sun
                      return (
                        <li key={label as string} className="flex items-center gap-3 text-[14px] text-[#33474E]">
                          <span className="grid size-7 shrink-0 place-items-center rounded-md bg-[#072A45] text-[#62D984]">
                            <I size={14} />
                          </span>
                          {label as string}
                        </li>
                      )
                    })}
                  </ul>
                  <div className="mt-8 flex flex-wrap gap-3">
                    <Link
                      href="/projects"
                      className="btn-shine font-display inline-flex items-center gap-2 bg-[#072A45] px-6 py-3 text-[13px] font-semibold text-white hover:bg-[#0C3E63]"
                      style={{ borderRadius: 6 }}
                    >
                      See our work <BrandArrow size={14} />
                    </Link>
                    <Link
                      href="/contact"
                      className="font-display inline-flex items-center gap-2 border border-[#072A45]/20 bg-white px-6 py-3 text-[13px] font-semibold text-[#072A45] hover:border-[#0F88C7] hover:text-[#0F88C7]"
                      style={{ borderRadius: 6 }}
                    >
                      Get a free site assessment <BrandArrow size={14} />
                    </Link>
                  </div>
                </div>
              </article>
            </Reveal>
          </div>
        </div>
      </section>

      <CtaBand />
    </main>
  )
}
