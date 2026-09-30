import Link from 'next/link'
import { ArrowRight, Check } from 'lucide-react'
import { IMG } from '@/lib/brand'
import { PageIntro, SectionHeading, CtaBand } from '@/components/site-chrome'
import { Reveal } from '@/components/ux-bits'

export const metadata = { title: 'About — EVN Solar Energy Solutions' }

export default function AboutPage() {
  return (
    <main className="bg-[#F2F7F4]">
      <PageIntro
        kicker="About EVN Solar"
        title={<>An energy contractor built for generation and <em className="editorial-accent text-[#008ED6]">mobility.</em></>}
        lede="EVN Solar Energy Solutions designs rooftop solar, ground-mounted plants, solar carports and EV charging as one engineered system — safe, monitored and subsidy-ready."
        meta={['Based in Malegaon, serving Maharashtra', 'Residential · Commercial · Industrial', 'In-house survey, install & service']}
        crumb={[['About', '/about']]}
      />

      <section className="mx-auto grid max-w-7xl gap-12 px-6 py-14 sm:py-20 lg:grid-cols-2 lg:items-center">
        <div>
          <img src={IMG.engineer1} alt="Solar installation team at work" className="aspect-[4/3] w-full object-cover" style={{ borderRadius: 8 }} />
          <div className="mt-3 grid grid-cols-2 gap-3">
            <img src={IMG.engineer2} alt="Engineer commissioning equipment" className="aspect-[4/3] w-full object-cover" style={{ borderRadius: 8 }} />
            <div className="flex flex-col justify-center bg-[#071D26] p-6 text-[#F7F4EC]" style={{ borderRadius: 8 }}>
              <p className="stat-number text-[#F7F4EC]" style={{ fontSize: 'clamp(2.2rem, 4vw, 3rem)' }}>25<span className="stat-unit text-[#25C7E8]">+</span></p>
              <p className="micro mt-2 text-[#6FDF8F]">Years of combined clean-energy engineering practice on the team</p>
            </div>
          </div>
        </div>
        <div>
          <SectionHeading
            kicker="Our position"
            title={<>Clean power you can measure. Miles <em className="editorial-accent text-[#008ED6]">you can trust.</em></>}
            lede="We do not oversize systems or skip protection to win on price. Every site gets a load study, shadow analysis, structure check and protection design before we quote — and a generation estimate you can verify in the app after commissioning."
          />
          <ul className="mt-7 space-y-3 border-t border-[#E2E8EC] pt-7">
            {[
              'MNRE-aligned design with DISCOM and net-metering liaison',
              'Tier-1 panels, tested inverters, hot-dip galvanised structures',
              'Earthing, lightning, surge and cable safety as standard scope',
              'Monitoring handover with 5-year service support',
            ].map((li) => (
              <li key={li} className="flex items-start gap-3 text-[15px] text-[#14242E]">
                <span className="mt-0.5 grid size-6 shrink-0 place-items-center bg-[#008ED6] text-white" style={{ borderRadius: 6 }}>
                  <Check size={14} />
                </span>
                {li}
              </li>
            ))}
          </ul>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/projects" className="inline-flex items-center gap-2 bg-[#008ED6] px-6 py-3 text-[14px] font-semibold text-white hover:bg-[#00659D]" style={{ borderRadius: 6 }}>
              See our work <ArrowRight size={15} />
            </Link>
            <Link href="/contact" className="border border-[#CBD6DD] px-6 py-3 text-[14px] font-semibold text-[#071D26] hover:border-[#008ED6] hover:text-[#008ED6]" style={{ borderRadius: 6 }}>
              Talk to an engineer
            </Link>
          </div>
        </div>
      </section>

      <section className="border-y border-[#BFDDF2] bg-[#E9F4FB]">
        <div className="mx-auto max-w-7xl px-6 py-14 sm:py-20">
          <SectionHeading kicker="Principles" title="What we stand for." />
          <Reveal className="mt-10 grid gap-5 md:grid-cols-3">
            {[
              ['Engineering first', 'Survey, drawings, safety and testing — before and after installation. No shortcuts to hit a price.'],
              ['Right-sized solar', 'Rooftop, ground-mount and carports sized for verified generation, not brochure wattage.'],
              ['EV readiness', 'Every project is evaluated for current and future charging load, including sanction load.'],
            ].map(([t, d]) => (
              <div key={t} className="lift border border-[#BFDDF2] bg-white p-7" style={{ borderRadius: 8 }}>
                <p className="font-display text-[18px] font-semibold text-[#071D26]">{t}</p>
                <p className="mt-2 text-[14.5px] leading-relaxed text-[#5B6D77]">{d}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-14 sm:py-20">
        <SectionHeading kicker="Delivery" title="A fixed four-stage process." />
        <Reveal>
        <ol className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[
            ['01 — Survey', 'Load, shadow, roof and parking review with measurements and photos.'],
            ['02 — Design', 'Drawings, protection sizing, DISCOM filing and subsidy application.'],
            ['03 — Build', 'Structure, modules, wiring, chargers, testing and commissioning.'],
            ['04 — Support', 'App handover, generation tracking, AMC and breakdown response.'],
          ].map(([t, d]) => (
            <li key={t} className="border-t-2 border-[#071D26] pt-5">
              <p className="font-tech text-[10px] font-medium uppercase tracking-[0.12em] text-[#008ED6]">{t}</p>
              <p className="mt-2 text-[14px] font-normal leading-relaxed text-[#50656A]">{d}</p>
            </li>
          ))}
        </ol>
        </Reveal>
      </section>

      <CtaBand />
    </main>
  )
}
