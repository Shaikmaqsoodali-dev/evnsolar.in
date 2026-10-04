import Link from 'next/link'
import { ArrowRight, Check } from 'lucide-react'
import { IMG } from '@/lib/brand'
import { PageIntro, SectionHeading, CtaBand } from '@/components/site-chrome'
import { Faq } from '@/components/ux-bits'
import { CountUp, Parallax, Reveal, Stagger } from '@/components/motion'

export const metadata = { title: 'EV Charging | EVN Solar Energy Solutions' }

export default function EvChargingPage() {
  return (
    <main className="bg-[#F2F7F4]">
      <PageIntro
        kicker="EV charging infrastructure"
        title={<>Charge at home, at work, preferably <em className="editorial-accent text-[#008ED6]">on sunlight.</em></>}
        lede="7.4-60 kW AC and DC chargers with load management, solar-priority charging, billing and fleet reporting for homes, offices and depots."
        crumb={[['EV Charging', '/ev-charging']]}
        image="https://res.cloudinary.com/qxjpbgh6/image/upload/v1791106732/Electric_vehicle_charging.png"
        imageAlt="Electric vehicle charging"
      />

      <section className="mx-auto grid max-w-7xl gap-12 px-6 py-14 sm:py-20 lg:grid-cols-2 lg:items-center">
        <Reveal variant="left">
          <Parallax className="aspect-[4/3] rounded-lg" speed={0.09}>
            <img src={IMG.evCharge} alt="Electric vehicle charging" className="h-full w-full object-cover" />
          </Parallax>
          <div className="mt-3 grid grid-cols-2 gap-3">
            <div className="border border-[#E2E8EC] bg-[#F4F6F8] p-5" style={{ borderRadius: 8 }}>
              <p className="font-display text-[20px] font-semibold text-[#071D26]">7.4-22 kW</p>
              <p className="mt-1 text-[13px] text-[#5B6D77]">AC home & workplace charging</p>
            </div>
            <div className="bg-[#071D26] p-5 text-[#F7F4EC]" style={{ borderRadius: 8 }}>
              <p className="font-display text-[20px] font-semibold tracking-[-0.02em]">30-60 kW</p>
              <p className="font-tech mt-1 text-[9px] uppercase tracking-[0.12em] text-[#25C7E8]">DC fast charging for fleets</p>
            </div>
          </div>
        </Reveal>
        <Reveal variant="right" delay={120}>
          <SectionHeading
            title={<>Fuel the car from the roof, <em className="editorial-accent text-[#008ED6]">not the grid.</em></>}
            lede="A 5 kW rooftop generates roughly 20-22 units a day, about 120-150 km of driving. We size solar for your current bill plus your EV kilometres, and set charging priority accordingly."
          />
          <ul className="mt-7 space-y-3 border-t border-[#E2E8EC] pt-7">
            {[
              'Dynamic load management, usually no sanction-load upgrade in homes',
              'Solar-priority and scheduled night-charging modes',
              'RFID, app payments and per-user billing for shared sites',
              'OCPP chargers with remote diagnostics and service',
            ].map((li) => (
              <li key={li} className="flex items-start gap-3 text-[15px] text-[#14242E]">
                <span className="mt-0.5 grid size-6 shrink-0 place-items-center bg-[#008ED6] text-white" style={{ borderRadius: 6 }}>
                  <Check size={14} />
                </span>
                {li}
              </li>
            ))}
          </ul>
          <dl className="mt-7 grid grid-cols-3 gap-6 border-t border-[#E2E8EC] pt-6">
            {[{ v: 120, u: '+', l: 'EV points installed' }, { v: 60, u: 'kW', l: 'Max DC output' }, { v: 24, u: '×7', l: 'Remote monitoring' }].map(({ v, u, l }) => (
              <div key={l}>
                <dt className="stat-number text-[#071D26]" style={{ fontSize: 'clamp(1.9rem, 3.5vw, 2.6rem)' }}><CountUp to={v} /><span className="stat-unit text-[#008ED6]">{u}</span></dt>
                <dd className="micro mt-2 text-[#5B6D77]">{l}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </section>

      <section className="border-y border-[#CBE3D4] bg-[#EAF7EE]">
        <div className="mx-auto max-w-7xl px-6 py-14 sm:py-20">
          <SectionHeading title="Choose the setup that fits the site." />
          <Stagger className="mt-10 grid gap-6 md:grid-cols-3" step={100}>
            {[
              ['Home charging', '7.4 kW smart AC charger with app, scheduling and solar-priority mode.', 'Single-phase ready, App + RFID'],
              ['Workplace & commercial', 'Multi-point 7.4-22 kW with load balancing and staff billing.', 'Load balancing, Billing reports'],
              ['Fleet & DC fast', '30-60 kW DC fast with depot layout and solar + storage integration.', 'Depot design, OCPP + CMS'],
            ].map(([t, d, specs]) => (
              <div key={t} className="lift border border-[#CBE3D4] bg-white p-7" style={{ borderRadius: 8 }}>
                <p className="font-display text-[18px] font-semibold text-[#071D26]">{t}</p>
                <p className="mt-2 text-[14.5px] leading-relaxed text-[#5B6D77]">{d}</p>
                <p className="font-tech mt-4 border-t border-[#E2E8EC] pt-4 text-[10px] uppercase tracking-[0.12em] text-[#50656A]">{specs}</p>
              </div>
            ))}
          </Stagger>
          <div className="mt-6 flex flex-col gap-4 border border-[#E2E8EC] bg-white p-6 sm:flex-row sm:items-center sm:justify-between" style={{ borderRadius: 8 }}>
            <p className="max-w-2xl text-[14.5px] text-[#42545F]">
              <span className="font-semibold text-[#071D26]">Unsure about sanction load?</span> Send a photo of your meter and main breaker. We confirm feasibility before you pay anything.
            </p>
            <Link href="/contact" className="font-display inline-flex shrink-0 items-center gap-2 bg-[#008ED6] px-6 py-3 text-[13px] font-semibold tracking-[-0.01em] text-white hover:bg-[#00659D]" style={{ borderRadius: 6 }}>
              Get a free site assessment <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-14 sm:py-20">
        <h2 className="section-title mt-3 text-[26px] text-[#071D26] sm:text-[32px]">Before you ask.</h2>
        <div className="mt-8">
          <Faq
            items={[
              ['Will I need a sanction-load upgrade for a home charger?', 'Usually not. A 7.4 kW charger with dynamic load management fits most homes with 5 kW+ sanctioned load. We confirm from your bill and meter photo before you pay anything.'],
              ['Can the car charge directly from my rooftop solar?', 'Yes, with solar-priority mode the charger draws from surplus generation first and tops up from the grid only as needed. Scheduled night charging uses cheaper off-peak power.'],
              ['How do billing and access work for shared chargers?', 'Workplace and apartment chargers support RFID and app payments with per-user reports, so costs split fairly without manual tracking.'],
            ]}
          />
        </div>
      </section>

      <CtaBand />
    </main>
  )
}
