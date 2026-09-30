import Link from 'next/link'
import { ArrowRight, ArrowUpRight, Check } from 'lucide-react'
import { IMG } from '@/lib/brand'
import { CtaBand } from '@/components/site-chrome'
import { VideoHero } from '@/components/video-hero'

export default function HomePage() {
  return (
    <main className="bg-white">
      <VideoHero />

      {/* scope strip */}
      <section className="border-b border-[#E2E8EC] bg-white">
        <div className="mx-auto grid max-w-7xl sm:grid-cols-4">
          {[
            ['Residential', '1-10 kW rooftop systems'],
            ['Commercial', '10-500 kW plants'],
            ['Industrial', 'MW-scale + O&M contracts'],
            ['EV & Fleet', 'AC + DC charging'],
          ].map(([t, d]) => (
            <div key={t} className="border-b border-[#E2E8EC] px-6 py-4 last:border-0 sm:border-b-0 sm:border-r sm:last:border-0">
              <p className="font-display text-[12px] font-semibold uppercase tracking-[0.08em] text-[#071D26]">{t}</p>
              <p className="mt-1 text-[12.5px] font-normal text-[#64787F]">{d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section className="mx-auto grid max-w-7xl gap-12 bg-white px-6 py-14 sm:py-20 lg:grid-cols-2 lg:items-center">
        <div>
          <img src={IMG.engineer1} alt="EVN engineering team on site" className="aspect-[16/10] w-full object-cover" style={{ borderRadius: 6 }} />
          <div className="mt-3 grid grid-cols-2 gap-3">
            <img src={IMG.rooftop} alt="Rooftop solar array" className="aspect-[4/3] w-full object-cover" style={{ borderRadius: 6 }} />
            <div className="flex flex-col justify-center bg-[#008ED6] p-6 text-white" style={{ borderRadius: 6 }}>
              <p className="stat-number text-white">25<span style={{ fontSize: '0.6em' }}>+</span></p>
              <p className="mt-2 text-[12px] font-medium uppercase leading-snug tracking-[0.08em] text-white/90">
                Years of clean-energy engineering practice
              </p>
            </div>
          </div>
        </div>
        <div>
          <p className="micro flex items-center gap-3 text-[#008ED6]">
            <span className="inline-block h-[2px] w-8 bg-[#25C7E8]" aria-hidden />
            About us
          </p>
          <h2 className="sx sx-lg mt-4 text-[#071D26]">
            EVN Solar<br />let&rsquo;s go solar.
          </h2>
          <p className="mt-4 max-w-lg text-[15px] font-normal leading-[1.75] text-[#33474E]">
            Offering engineered solar and EV-charging solutions, EVN Solar designs
            every site as one electrical system — generation sized to your bill
            and your kilometres, with protection, approvals and monitoring
            included from day one.
          </p>
          <ul className="mt-6 divide-y divide-[#EAEFF2] border-y border-[#EAEFF2]">
            {[
              'Load study, shadow analysis and structure check before quote',
              'Tier-1 modules, tested inverters, galvanised structures',
              'DISCOM liaison with PM Surya Ghar subsidy support',
              'Monitoring handover with 5-year service support',
            ].map((li) => (
              <li key={li} className="flex items-start gap-3 py-3 text-[14.5px] font-normal leading-relaxed text-[#071D26]">
                <span className="mt-1 grid size-5 shrink-0 place-items-center bg-[#008ED6] text-white" style={{ borderRadius: 4 }}>
                  <Check size={12} strokeWidth={3} />
                </span>
                {li}
              </li>
            ))}
          </ul>
          <div className="mt-7 flex flex-wrap gap-3">
            <Link href="/about" className="font-display inline-flex items-center gap-2 bg-[#071D26] px-6 py-3 text-[12.5px] font-semibold tracking-[0.02em] text-white hover:bg-[#1a323f]" style={{ borderRadius: 6 }}>
              More about us <ArrowRight size={14} />
            </Link>
            <Link href="/projects" className="font-display border border-[#CBD6DD] px-6 py-3 text-[12.5px] font-semibold tracking-[0.02em] text-[#071D26] hover:border-[#008ED6] hover:text-[#008ED6]" style={{ borderRadius: 6 }}>
              Selected work
            </Link>
          </div>
        </div>
      </section>

      {/* NUMBERS */}
      <section className="bg-[#071D26] text-white">
        <div className="mx-auto max-w-7xl px-6 py-12 sm:py-14">
          <p className="micro text-center text-white/40">
            EVN Solar in numbers
          </p>
          <div className="mx-auto mt-8 grid max-w-5xl sm:grid-cols-4">
            {[
              ['2.4 MW+', 'Solar installed'],
              ['1,000+', 'Projects delivered'],
              ['120+', 'EV points installed'],
              ['5-yr', 'Service support'],
            ].map(([v, l], i) => (
              <div key={l} className={`px-6 py-2 text-center ${i !== 0 ? 'sm:border-l sm:border-white/10' : ''}`}>
                <p className="stat-number text-white">{v}</p>
                <p className="mt-2 text-[11px] font-medium uppercase tracking-[0.12em] text-white/50">{l}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRODUCTS */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-14 sm:py-20">
          <div className="mx-auto max-w-2xl text-center">
            <p className="micro flex items-center justify-center gap-3 text-[#008ED6]">
              <span className="inline-block h-px w-8 bg-[#25C7E8]" aria-hidden />
              Products & solutions
              <span className="inline-block h-px w-8 bg-[#25C7E8]" aria-hidden />
            </p>
            <h2 className="sx sx-lg mt-4 text-[#071D26]">
              Turning sunlight into energy.
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-[15px] font-normal leading-[1.75] text-[#33474E]">
              Four factory-tested disciplines — each with drawings, protection design and a monitoring handover.
            </p>
          </div>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { img: IMG.rooftop, tag: '1-100 kW', t: 'Rooftop solar', d: 'On-grid and hybrid systems for homes, shops and factories.', href: '/services' },
              { img: IMG.ground, tag: '100 kW-2 MW', t: 'Ground-mounted', d: 'Land plants with SCADA-ready monitoring and O&M.', href: '/services' },
              { img: IMG.carport, tag: 'EV-ready', t: 'Solar carports', d: 'Parking that generates power, pre-wired for chargers.', href: '/services' },
              { img: IMG.evCharge, tag: '7.4-60 kW', t: 'EV charging', d: 'AC and DC chargers with load management and billing.', href: '/ev-charging' },
            ].map(({ img, tag, t, d, href }) => (
              <Link key={t} href={href} className="group border border-[#E2E8EC] bg-white transition-shadow hover:shadow-[0_14px_40px_rgba(7,29,38,0.12)]" style={{ borderRadius: 6, overflow: 'hidden' }}>
                <div className="relative overflow-hidden">
                  <img src={img} alt={t} className="aspect-[4/3] w-full object-cover transition-transform duration-300 group-hover:scale-[1.04]" />
                  <span className="absolute left-3 top-3 bg-[#008ED6] px-2 py-1 text-[10.5px] font-semibold uppercase tracking-[0.06em] text-white" style={{ borderRadius: 4, fontFamily: 'var(--font-body)' }}>{tag}</span>
                </div>
                <div className="p-5">
                  <p className="card-title flex items-center justify-between text-[#071D26]">
                    {t} <ArrowUpRight size={16} className="card-arrow" />
                  </p>
                  <p className="card-desc mt-1.5 text-[#42565D]">{d}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* TECHNOLOGY */}
      <section className="bg-[#F4F6F8]">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-14 sm:py-20 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="micro flex items-center gap-3 text-[#008ED6]">
              <span className="inline-block h-[2px] w-8 bg-[#25C7E8]" aria-hidden />
              Technology
            </p>
            <h2 className="sx sx-lg mt-4 text-[#071D26]">
              Leading-edge technology at work.
            </h2>
            <p className="mt-4 max-w-lg text-[15px] font-normal leading-[1.75] text-[#33474E]">
              High-efficiency TOPCon modules, tested string and micro-inverters,
              and OCPP chargers — commissioned with insulation, earthing and
              protection tests you receive in writing.
            </p>
            <div className="mt-7 grid gap-3 sm:grid-cols-2">
              {[
                ['High-efficiency modules', 'TOPCon arrays sized from shadow analysis.'],
                ['Tested inverters', 'String + micro options, monitored per MPPT.'],
                ['Engineered structures', 'Galvanised, wind-rated, waterproof options.'],
                ['Protected & metered', 'Earthing, surge, net-metering included.'],
              ].map(([t, d]) => (
                <div key={t} className="border border-[#E2E8EC] bg-white p-5" style={{ borderRadius: 6 }}>
                  <p className="tech-label text-[#071D26]">{t}</p>
                  <p className="tech-desc mt-1.5 text-[#42565D]">{d}</p>
                </div>
              ))}
            </div>
          </div>
          <div>
            <img src={IMG.panel} alt="Solar module close-up" className="aspect-[4/3] w-full object-cover" style={{ borderRadius: 6 }} />
            <div className="mt-3 flex items-center justify-between border border-[#E2E8EC] bg-white px-5 py-3.5" style={{ borderRadius: 6 }}>
              <p className="text-[13.5px] font-normal text-[#42565D]">
                <span className="font-display font-semibold text-[#071D26]">Module efficiency to 23%+</span> — generation verified in-app
              </p>
              <Link href="/services" className="font-display flex shrink-0 items-center gap-1 text-[13px] font-semibold text-[#008ED6]">
                Details <ArrowUpRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* NEWS */}
      <section className="mx-auto max-w-7xl bg-white px-6 py-14 sm:py-20">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-2xl">
            <p className="micro flex items-center gap-3 text-[#008ED6]">
              <span className="inline-block h-[2px] w-8 bg-[#25C7E8]" aria-hidden />
              News & projects
            </p>
            <h2 className="sx sx-md mt-4 text-[#071D26]">
              Recent work and updates.
            </h2>
          </div>
          <Link href="/projects" className="font-display flex items-center gap-1.5 text-[13px] font-semibold text-[#008ED6]">
            All projects <ArrowRight size={14} />
          </Link>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {[
            { img: IMG.rooftop, cat: 'Residential · Nashik', t: '5 kW rooftop + 7.4 kW home charger', d: 'Battery-ready hybrid with subsidy filing and app monitoring.' },
            { img: IMG.ground, cat: 'Industrial · Malegaon', t: '120 kW ground-mounted plant', d: 'Scheduled fleet charging with generation and load reporting.' },
            { img: IMG.carport, cat: 'Commercial · Campus', t: '40 kW solar carport, EV-ready', d: 'Shaded parking with charger conduits and lighting.' },
          ].map(({ img, cat, t, d }) => (
            <article key={t} className="group border border-[#E2E8EC] bg-white transition-shadow hover:shadow-[0_12px_36px_rgba(7,29,38,0.10)]" style={{ borderRadius: 6, overflow: 'hidden' }}>
              <div className="overflow-hidden">
                <img src={img} alt={t} className="aspect-[16/10] w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]" />
              </div>
              <div className="p-5">
                <p className="card-cat">{cat}</p>
                <h3 className="card-title mt-2 text-[#071D26]">{t}</h3>
                <p className="card-desc mt-1.5 text-[#42565D]">{d}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="border-t border-[#EAEFF2] bg-white">
        <div className="mx-auto max-w-7xl px-6 py-14 sm:py-20">
          <div className="mx-auto max-w-2xl text-center">
            <p className="micro flex items-center justify-center gap-3 text-[#008ED6]">
              <span className="inline-block h-px w-8 bg-[#25C7E8]" aria-hidden />
              Client notes
              <span className="inline-block h-px w-8 bg-[#25C7E8]" aria-hidden />
            </p>
            <h2 className="sx sx-md mt-4 text-[#071D26]">
              Trusted for engineering, not just installation.
            </h2>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {[
              ['Logistics depot, Malegaon', 'EVN combined our rooftop plant and depot charging in a single project. Bills are down 68% in six months.'],
              ['Homeowner, Nashik', '5 kW rooftop with a 7.4 kW home charger. Subsidy paperwork handled; the app shows every unit.'],
              ['Warehouse, Malegaon', '120 kW plant with scheduled fleet charging. Safety-first execution, reliable service.'],
            ].map(([who, quote]) => (
              <figure key={who} className="flex flex-col border border-[#E2E8EC] bg-white p-6" style={{ borderRadius: 6 }}>
                <blockquote className="quote-ed flex-1 text-[#071D26]">&ldquo;{quote}&rdquo;</blockquote>
                <figcaption className="quote-by mt-6 border-t border-[#EAEFF2] pt-4 text-[#42565D]">{who}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <div className="bg-white">
        <CtaBand />
      </div>
    </main>
  )
}
