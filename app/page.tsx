import Link from 'next/link'
import { ArrowRight, ArrowUpRight, Check } from 'lucide-react'
import { IMG } from '@/lib/brand'
import { Kicker, SectionHeading, CtaBand } from '@/components/site-chrome'

const SERVICES_INDEX = [
  { n: '01', t: 'Rooftop solar', d: '1–100 kW on-grid and hybrid systems for homes, shops, schools and factories.', href: '/services' },
  { n: '02', t: 'Ground-mounted plants', d: '100 kW–2 MW land-based plants with SCADA-ready monitoring.', href: '/services' },
  { n: '03', t: 'Solar carports', d: 'Parking structures that generate power, pre-wired for EV chargers.', href: '/services' },
  { n: '04', t: 'EV charging', d: '7.4–60 kW AC and DC chargers with load management and billing.', href: '/ev-charging' },
]

const PROJECTS = [
  { img: IMG.rooftop, sector: 'Residential · Nashik', t: '5 kW rooftop + 7.4 kW home charger', d: 'Battery-ready hybrid with subsidy filing and app monitoring.' },
  { img: IMG.ground, sector: 'Industrial · Malegaon', t: '120 kW ground-mounted plant', d: 'Scheduled fleet charging with generation and load reporting.' },
  { img: IMG.carport, sector: 'Commercial · Office campus', t: '40 kW solar carport', d: 'Shaded parking with EV-ready conduits and lighting.' },
]

export default function HomePage() {
  return (
    <main className="bg-white">
      {/* ——— Hero: editorial split ——— */}
      <section className="border-b border-[#E2E8EC]">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 pb-12 pt-12 sm:pt-16 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
          <div>
            <Kicker>Rooftop solar · EV charging · Maharashtra</Kicker>
            <h1 className="font-display mt-5 text-[40px] font-semibold leading-[1.04] text-[#0C1E28] sm:text-[56px]">
              Solar and EV charging, engineered as one system.
            </h1>
            <p className="mt-5 max-w-xl text-[17px] leading-relaxed text-[#5B6D77]">
              EVN Solar designs your rooftop plant and your EV charger together —
              so generation covers both your bill and your kilometres. Survey,
              approvals, installation and service from a single team.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-[#0083CB] px-6 py-3.5 text-[15px] font-semibold text-white transition-colors hover:bg-[#00659D]"
                style={{ borderRadius: 6 }}
              >
                Get a free site assessment <ArrowRight size={17} />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center gap-2 border border-[#CBD6DD] px-6 py-3.5 text-[15px] font-semibold text-[#0C1E28] transition-colors hover:border-[#0083CB] hover:text-[#0083CB]"
                style={{ borderRadius: 6 }}
              >
                View solar services
              </Link>
            </div>
            <dl className="mt-10 grid grid-cols-3 gap-6 border-t border-[#E2E8EC] pt-6">
              {[
                ['2.4 MW+', 'Solar installed'],
                ['1,000+', 'Projects delivered'],
                ['5-yr', 'Service support'],
              ].map(([v, l]) => (
                <div key={l}>
                  <dt className="font-display text-[24px] font-semibold text-[#0C1E28] sm:text-[28px]">{v}</dt>
                  <dd className="mt-1 text-[13px] text-[#5B6D77]">{l}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="relative">
            <img
              src={IMG.solarField}
              alt="Ground-mounted solar plant at sunrise"
              className="aspect-[4/3] w-full object-cover"
              style={{ borderRadius: 8 }}
            />
            <div className="mt-3 flex items-center justify-between border border-[#E2E8EC] bg-[#F4F6F8] px-5 py-3.5" style={{ borderRadius: 8 }}>
              <p className="text-[13px] font-medium text-[#42545F]">
                <span className="font-semibold text-[#0C1E28]">120 kW, Malegaon</span> — ground-mounted plant with fleet charging
              </p>
              <Link href="/projects" className="flex shrink-0 items-center gap-1 text-[13px] font-semibold text-[#0083CB]">
                Case study <ArrowUpRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ——— Scope strip ——— */}
      <section className="border-b border-[#E2E8EC] bg-[#F4F6F8]">
        <div className="mx-auto grid max-w-7xl gap-px px-6 py-0 sm:grid-cols-4">
          {[
            ['Residential', '1–10 kW rooftop systems'],
            ['Commercial', '10–500 kW plants'],
            ['Industrial', 'MW-scale + O&M contracts'],
            ['EV & fleet', 'AC + DC charging'],
          ].map(([t, d]) => (
            <div key={t} className="border-b border-[#E2E8EC] py-5 last:border-0 sm:border-b-0 sm:border-r sm:px-6 sm:first:pl-0 sm:last:border-0 sm:last:pr-0">
              <p className="text-[14px] font-semibold text-[#0C1E28]">{t}</p>
              <p className="mt-0.5 text-[13px] text-[#5B6D77]">{d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ——— Services index ——— */}
      <section className="mx-auto max-w-7xl px-6 py-14 sm:py-20">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            kicker="What we do"
            title="Four disciplines, one contract."
            lede="Most vendors sell panels or chargers. We deliver the combined electrical system — generation, load, protection and monitoring — with documentation."
          />
          <Link href="/services" className="flex items-center gap-1.5 text-[14px] font-semibold text-[#0083CB]">
            All solar services <ArrowRight size={15} />
          </Link>
        </div>
        <div className="mt-10 border-t border-[#0C1E28]">
          {SERVICES_INDEX.map(({ n, t, d, href }) => (
            <Link
              key={n}
              href={href}
              className="group grid gap-2 border-b border-[#E2E8EC] py-6 transition-colors hover:bg-[#F4F6F8] sm:grid-cols-[64px_1fr_1.2fr_40px] sm:items-center sm:gap-6 sm:px-4"
            >
              <span className="text-[13px] font-medium tabular-nums text-[#8A9AA3]">{n}</span>
              <span className="font-display text-[20px] font-semibold text-[#0C1E28] sm:text-[22px]">{t}</span>
              <span className="text-[14.5px] text-[#5B6D77]">{d}</span>
              <span className="hidden size-9 place-items-center border border-[#E2E8EC] transition-colors group-hover:border-[#0083CB] group-hover:bg-[#0083CB] group-hover:text-white sm:grid" style={{ borderRadius: 6 }}>
                <ArrowUpRight size={17} />
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* ——— Why / process ——— */}
      <section className="border-y border-[#E2E8EC] bg-[#F4F6F8]">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-14 sm:py-20 lg:grid-cols-2">
          <div>
            <img src={IMG.engineer1} alt="Engineer reviewing a solar installation" className="aspect-[4/3] w-full object-cover" style={{ borderRadius: 8 }} />
            <div className="mt-4 grid grid-cols-2 gap-3">
              <div className="border border-[#E2E8EC] bg-white p-5" style={{ borderRadius: 8 }}>
                <p className="font-display text-[22px] font-semibold text-[#0083CB]">68%</p>
                <p className="mt-1 text-[13px] leading-snug text-[#5B6D77]">Average bill reduction reported across depot clients in year one</p>
              </div>
              <div className="border border-[#E2E8EC] bg-white p-5" style={{ borderRadius: 8 }}>
                <p className="font-display text-[22px] font-semibold text-[#1E7A3C]">20–22</p>
                <p className="mt-1 text-[13px] leading-snug text-[#5B6D77]">Units per day from a typical 5 kW rooftop — ~130 km of EV range</p>
              </div>
            </div>
          </div>
          <div>
            <SectionHeading
              kicker="How we work"
              title="Survey first. Quote second."
              lede="Every engagement starts with a load study, shadow analysis and structure check. You get a written generation estimate before you commit."
            />
            <ol className="mt-8 space-y-0 border-t border-[#E2E8EC]">
              {[
                ['Site survey', 'Load, shadow, roof and sanction-load review with photos and measurements.'],
                ['Design & approvals', 'Single-line drawings, protection design, DISCOM and subsidy paperwork.'],
                ['Installation & testing', 'Tier-1 panels, tested inverters, earthing and commissioning tests.'],
                ['Monitoring & service', 'App handover, generation tracking and 5-year service support.'],
              ].map(([t, d], i) => (
                <li key={t} className="flex gap-5 border-b border-[#E2E8EC] py-5">
                  <span className="font-display text-[14px] font-semibold text-[#0083CB]">0{i + 1}</span>
                  <div>
                    <p className="text-[15px] font-semibold text-[#0C1E28]">{t}</p>
                    <p className="mt-1 text-[14px] text-[#5B6D77]">{d}</p>
                  </div>
                </li>
              ))}
            </ol>
            <ul className="mt-6 space-y-2.5">
              {['Net-metering + PM Surya Ghar subsidy support', 'Earthing, lightning and surge protection as standard'].map((li) => (
                <li key={li} className="flex items-start gap-2.5 text-[14px] text-[#14242E]">
                  <Check size={17} className="mt-0.5 shrink-0 text-[#1E7A3C]" /> {li}
                </li>
              ))}
            </ul>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link href="/about" className="border border-[#0C1E28] bg-[#0C1E28] px-6 py-3 text-[14px] font-semibold text-white hover:bg-[#1a323f]" style={{ borderRadius: 6 }}>
                About the company
              </Link>
              <Link href="/projects" className="border border-[#CBD6DD] px-6 py-3 text-[14px] font-semibold text-[#0C1E28] hover:border-[#0083CB] hover:text-[#0083CB]" style={{ borderRadius: 6 }}>
                See selected projects
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ——— Projects preview ——— */}
      <section className="mx-auto max-w-7xl px-6 py-14 sm:py-20">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading kicker="Selected work" title="Recent installations." />
          <Link href="/projects" className="flex items-center gap-1.5 text-[14px] font-semibold text-[#0083CB]">
            All projects <ArrowRight size={15} />
          </Link>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {PROJECTS.map(({ img, sector, t, d }) => (
            <article key={t} className="group border border-[#E2E8EC] bg-white transition-shadow hover:shadow-[0_12px_36px_rgba(12,30,40,0.10)]" style={{ borderRadius: 8, overflow: 'hidden' }}>
              <div className="overflow-hidden">
                <img src={img} alt={t} className="aspect-[16/10] w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]" />
              </div>
              <div className="p-6">
                <p className="text-[12px] font-semibold uppercase tracking-[0.12em] text-[#0083CB]">{sector}</p>
                <h3 className="font-display mt-2 text-[18px] font-semibold text-[#0C1E28]">{t}</h3>
                <p className="mt-2 text-[14px] leading-relaxed text-[#5B6D77]">{d}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ——— Testimonials ——— */}
      <section className="border-t border-[#E2E8EC] bg-white">
        <div className="mx-auto max-w-7xl px-6 py-14 sm:py-20">
          <SectionHeading kicker="Client notes" title="Trusted for engineering, not just installation." />
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              ['Logistics depot, Malegaon', 'EVN combined our rooftop plant and depot charging in a single project. Load management and generation reporting simply work. Bills are down 68% in six months.'],
              ['Homeowner, Nashik', '5 kW rooftop with a 7.4 kW home charger. Clean installation, subsidy paperwork handled, and the app shows every unit generated.'],
              ['Warehouse, Malegaon', '120 kW ground-mounted plant with scheduled fleet charging. Professional survey, safety-first execution and reliable after-sales support.'],
            ].map(([who, quote]) => (
              <figure key={who} className="flex flex-col border border-[#E2E8EC] bg-[#F4F6F8] p-6" style={{ borderRadius: 8 }}>
                <blockquote className="flex-1 text-[14.5px] leading-relaxed text-[#42545F]">“{quote}”</blockquote>
                <figcaption className="mt-5 border-t border-[#E2E8EC] pt-4 text-[13px] font-semibold text-[#0C1E28]">{who}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </main>
  )
}
