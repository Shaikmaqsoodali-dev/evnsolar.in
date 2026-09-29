import Link from 'next/link'
import { ArrowRight, ArrowUpRight, Check } from 'lucide-react'
import { IMG } from '@/lib/brand'
import { SectionHeading, CtaBand } from '@/components/site-chrome'
import { VideoHero } from '@/components/video-hero'

export default function HomePage() {
  return (
    <main className="bg-white">
      <VideoHero />

      {/* ——— scope strip ——— */}
      <section className="border-b border-[#E2E8EC] bg-white">
        <div className="mx-auto grid max-w-7xl sm:grid-cols-4">
          {[
            ['Residential', '1–10 kW rooftop systems'],
            ['Commercial', '10–500 kW plants'],
            ['Industrial', 'MW-scale + O&M contracts'],
            ['EV & fleet', 'AC + DC charging'],
          ].map(([t, d]) => (
            <div key={t} className="border-b border-[#E2E8EC] px-6 py-5 last:border-0 sm:border-b-0 sm:border-r sm:last:border-0">
              <p className="text-[14px] font-bold uppercase tracking-[0.06em] text-[#0C1E28]">{t}</p>
              <p className="mt-0.5 text-[13px] text-[#5B6D77]">{d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ——— 2. ABOUT, Premier "LET'S GO SOLAR" pattern ——— */}
      <section className="mx-auto grid max-w-7xl gap-12 px-6 py-14 sm:py-20 lg:grid-cols-2 lg:items-center">
        <div className="relative">
          <img src={IMG.engineer1} alt="EVN engineering team on site" className="aspect-[4/3] w-full object-cover" style={{ borderRadius: 6 }} />
          <div className="mt-3 grid grid-cols-2 gap-3">
            <img src={IMG.rooftop} alt="Rooftop solar array" className="aspect-[4/3] w-full object-cover" style={{ borderRadius: 6 }} />
            <div className="flex flex-col justify-center bg-[#0083CB] p-6 text-white" style={{ borderRadius: 6 }}>
              <p className="font-display text-[34px] font-extrabold leading-none">25+</p>
              <p className="mt-2 text-[12px] font-semibold uppercase leading-snug tracking-[0.12em] text-white/80">
                Years of clean-energy engineering practice
              </p>
            </div>
          </div>
        </div>
        <div>
          <p className="text-[12px] font-bold uppercase tracking-[0.22em] text-[#5B6D77]">About us</p>
          <h2 className="section-title mt-3 text-[28px] text-[#0C1E28] sm:text-[36px]">
            EVN Solar
            <br />
            Let&rsquo;s go solar.
          </h2>
          <p className="mt-5 text-[15.5px] leading-relaxed text-[#5B6D77]">
            Offering engineered solar and EV-charging solutions, EVN Solar designs
            every site as one electrical system — generation sized to your bill
            and your kilometres, with protection, approvals and monitoring
            included from day one.
          </p>
          <ul className="mt-7 space-y-3 border-t border-[#E2E8EC] pt-7">
            {[
              'Load study, shadow analysis and structure check before quote',
              'Tier-1 modules, tested inverters, galvanised structures',
              'DISCOM liaison with PM Surya Ghar subsidy support',
              'Monitoring handover with 5-year service support',
            ].map((li) => (
              <li key={li} className="flex items-start gap-3 text-[14.5px] text-[#14242E]">
                <span className="mt-0.5 grid size-6 shrink-0 place-items-center bg-[#0083CB] text-white" style={{ borderRadius: 4 }}>
                  <Check size={14} />
                </span>
                {li}
              </li>
            ))}
          </ul>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/about" className="inline-flex items-center gap-2 bg-[#0C1E28] px-6 py-3 text-[13px] font-bold uppercase tracking-[0.08em] text-white hover:bg-[#1a323f]" style={{ borderRadius: 4 }}>
              More about us <ArrowRight size={15} />
            </Link>
            <Link href="/projects" className="border border-[#CBD6DD] px-6 py-3 text-[13px] font-bold uppercase tracking-[0.08em] text-[#0C1E28] hover:border-[#0083CB] hover:text-[#0083CB]" style={{ borderRadius: 4 }}>
              Selected work
            </Link>
          </div>
        </div>
      </section>

      {/* ——— 3. NUMBERS band, Premier "IN NUMBERS" pattern ——— */}
      <section className="bg-[#0C1E28] text-white">
        <div className="mx-auto max-w-7xl px-6 py-14 sm:py-16">
          <p className="text-center text-[12px] font-bold uppercase tracking-[0.24em] text-white/55">
            EVN Solar in numbers
          </p>
          <div className="mx-auto mt-8 grid max-w-5xl gap-px overflow-hidden bg-white/15 text-center sm:grid-cols-4" style={{ borderRadius: 6 }}>
            {[
              ['2.4 MW+', 'Solar installed'],
              ['1,000+', 'Projects delivered'],
              ['120+', 'EV points installed'],
              ['5-yr', 'Service support'],
            ].map(([v, l]) => (
              <div key={l} className="bg-[#0C1E28] px-6 py-8">
                <p className="font-display text-[30px] font-extrabold text-white">{v}</p>
                <p className="mx-auto mt-2 max-w-[160px] text-[11.5px] font-semibold uppercase leading-snug tracking-[0.12em] text-white/55">{l}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ——— 4. PRODUCTS, Premier "Turning sunlight into energy" pattern ——— */}
      <section className="mx-auto max-w-7xl px-6 py-14 sm:py-20">
        <SectionHeading
          center
          kicker="Products & solutions"
          title="Turning sunlight into energy."
          lede="Four factory-tested disciplines — each with drawings, protection design and a monitoring handover."
        />
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { img: IMG.rooftop, tag: '1–100 kW', t: 'Rooftop solar', d: 'On-grid and hybrid systems for homes, shops and factories.', href: '/services' },
            { img: IMG.ground, tag: '100 kW–2 MW', t: 'Ground-mounted', d: 'Land plants with SCADA-ready monitoring and O&M.', href: '/services' },
            { img: IMG.carport, tag: 'EV-ready', t: 'Solar carports', d: 'Parking that generates power, pre-wired for chargers.', href: '/services' },
            { img: IMG.evCharge, tag: '7.4–60 kW', t: 'EV charging', d: 'AC and DC chargers with load management and billing.', href: '/ev-charging' },
          ].map(({ img, tag, t, d, href }) => (
            <Link key={t} href={href} className="group border border-[#E2E8EC] bg-white transition-shadow hover:shadow-[0_14px_40px_rgba(12,30,40,0.12)]" style={{ borderRadius: 6, overflow: 'hidden' }}>
              <div className="relative overflow-hidden">
                <img src={img} alt={t} className="aspect-[4/3] w-full object-cover transition-transform duration-300 group-hover:scale-[1.04]" />
                <span className="absolute left-4 top-4 bg-[#0C1E28]/90 px-2.5 py-1 text-[11px] font-bold uppercase tracking-[0.1em] text-white" style={{ borderRadius: 4 }}>{tag}</span>
              </div>
              <div className="p-5">
                <p className="flex items-center justify-between font-display text-[16px] font-bold uppercase tracking-[0.02em] text-[#0C1E28]">
                  {t} <ArrowUpRight size={16} className="text-[#0083CB]" />
                </p>
                <p className="mt-1.5 text-[13.5px] leading-relaxed text-[#5B6D77]">{d}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ——— 5. TECHNOLOGY strip, Premier "technology at work" pattern ——— */}
      <section className="border-y border-[#E2E8EC] bg-[#F4F6F8]">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-14 sm:py-20 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-[12px] font-bold uppercase tracking-[0.22em] text-[#0083CB]">Technology</p>
            <h2 className="section-title mt-3 text-[28px] text-[#0C1E28] sm:text-[34px]">
              Leading-edge technology at work.
            </h2>
            <p className="mt-4 text-[15.5px] leading-relaxed text-[#5B6D77]">
              High-efficiency TOPCon modules, tested string and micro-inverters,
              and OCPP chargers — commissioned with insulation, earthing and
              protection tests you receive in writing.
            </p>
            <div className="mt-7 grid gap-px overflow-hidden border border-[#E2E8EC] bg-[#E2E8EC] sm:grid-cols-2" style={{ borderRadius: 6 }}>
              {[
                ['High-efficiency modules', 'TOPCon arrays sized from shadow analysis.'],
                ['Tested inverters', 'String + micro options, monitored per MPPT.'],
                ['Engineered structures', 'Galvanised, wind-rated, waterproof options.'],
                ['Protected & metered', 'Earthing, surge, net-metering included.'],
              ].map(([t, d]) => (
                <div key={t} className="bg-white p-5">
                  <p className="text-[14px] font-bold text-[#0C1E28]">{t}</p>
                  <p className="mt-1 text-[13px] text-[#5B6D77]">{d}</p>
                </div>
              ))}
            </div>
          </div>
          <div>
            <img src={IMG.panel} alt="Solar module close-up" className="aspect-[4/3] w-full object-cover" style={{ borderRadius: 6 }} />
            <div className="mt-3 flex items-center justify-between border border-[#E2E8EC] bg-white px-5 py-3.5" style={{ borderRadius: 6 }}>
              <p className="text-[13px] font-medium text-[#42545F]">
                <span className="font-bold text-[#0C1E28]">Module efficiency to 23%+</span> — generation verified in-app
              </p>
              <Link href="/services" className="flex shrink-0 items-center gap-1 text-[13px] font-bold text-[#0083CB]">
                Details <ArrowUpRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ——— 6. NEWS / PROJECTS, Premier "News" pattern ——— */}
      <section className="mx-auto max-w-7xl px-6 py-14 sm:py-20">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            kicker="News & projects"
            title="Recent work and updates."
          />
          <Link href="/projects" className="flex items-center gap-1.5 text-[14px] font-bold text-[#0083CB]">
            All projects <ArrowRight size={15} />
          </Link>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {[
            { img: IMG.rooftop, cat: 'Residential · Nashik', t: '5 kW rooftop + 7.4 kW home charger', d: 'Battery-ready hybrid with subsidy filing and app monitoring.' },
            { img: IMG.ground, cat: 'Industrial · Malegaon', t: '120 kW ground-mounted plant', d: 'Scheduled fleet charging with generation and load reporting.' },
            { img: IMG.carport, cat: 'Commercial · Campus', t: '40 kW solar carport, EV-ready', d: 'Shaded parking with charger conduits and lighting.' },
          ].map(({ img, cat, t, d }) => (
            <article key={t} className="group border border-[#E2E8EC] bg-white transition-shadow hover:shadow-[0_12px_36px_rgba(12,30,40,0.10)]" style={{ borderRadius: 6, overflow: 'hidden' }}>
              <div className="overflow-hidden">
                <img src={img} alt={t} className="aspect-[16/10] w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]" />
              </div>
              <div className="p-6">
                <p className="text-[11.5px] font-bold uppercase tracking-[0.14em] text-[#0083CB]">{cat}</p>
                <h3 className="font-display mt-2 text-[17px] font-bold text-[#0C1E28]">{t}</h3>
                <p className="mt-2 text-[13.5px] leading-relaxed text-[#5B6D77]">{d}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ——— 7. Testimonials ——— */}
      <section className="border-t border-[#E2E8EC] bg-white">
        <div className="mx-auto max-w-7xl px-6 py-14 sm:py-20">
          <SectionHeading center kicker="Client notes" title="Trusted for engineering, not just installation." />
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {[
              ['Logistics depot, Malegaon', 'EVN combined our rooftop plant and depot charging in a single project. Bills are down 68% in six months.'],
              ['Homeowner, Nashik', '5 kW rooftop with a 7.4 kW home charger. Subsidy paperwork handled; the app shows every unit.'],
              ['Warehouse, Malegaon', '120 kW plant with scheduled fleet charging. Safety-first execution, reliable service.'],
            ].map(([who, quote]) => (
              <figure key={who} className="flex flex-col border border-[#E2E8EC] bg-[#F4F6F8] p-6" style={{ borderRadius: 6 }}>
                <blockquote className="flex-1 text-[14px] leading-relaxed text-[#42545F]">&ldquo;{quote}&rdquo;</blockquote>
                <figcaption className="mt-5 border-t border-[#E2E8EC] pt-4 text-[12px] font-bold uppercase tracking-[0.1em] text-[#0C1E28]">{who}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </main>
  )
}
