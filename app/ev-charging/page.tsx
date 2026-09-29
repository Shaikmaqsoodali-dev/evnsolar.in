import Link from 'next/link'
import { ArrowRight, Check } from 'lucide-react'
import { IMG } from '@/lib/brand'
import { PageIntro, SectionHeading, CtaBand } from '@/components/site-chrome'

export const metadata = { title: 'EV Charging — EVN Solar Energy Solutions' }

export default function EvChargingPage() {
  return (
    <main className="bg-white">
      <PageIntro
        kicker="EV charging infrastructure"
        title="Charge at home, at work — preferably on sunlight."
        lede="7.4–60 kW AC and DC chargers with load management, solar-priority charging, billing and fleet reporting for homes, offices and depots."
        meta={['7.4–22 kW AC · 30–60 kW DC', 'OCPP with remote diagnostics', 'Load study before you pay']}
      />

      <section className="mx-auto grid max-w-7xl gap-12 px-6 py-14 sm:py-20 lg:grid-cols-2 lg:items-center">
        <div>
          <img src={IMG.evCharge} alt="Electric vehicle charging" className="aspect-[4/3] w-full object-cover" style={{ borderRadius: 8 }} />
          <div className="mt-3 grid grid-cols-2 gap-3">
            <div className="border border-[#E2E8EC] bg-[#F4F6F8] p-5" style={{ borderRadius: 8 }}>
              <p className="font-display text-[20px] font-semibold text-[#0C1E28]">7.4–22 kW</p>
              <p className="mt-1 text-[13px] text-[#5B6D77]">AC home & workplace charging</p>
            </div>
            <div className="bg-[#0C1E28] p-5 text-white" style={{ borderRadius: 8 }}>
              <p className="font-display text-[20px] font-semibold">30–60 kW</p>
              <p className="mt-1 text-[13px] text-white/65">DC fast charging for fleets</p>
            </div>
          </div>
        </div>
        <div>
          <SectionHeading
            kicker="Solar + EV together"
            title="Fuel the car from the roof, not the grid."
            lede="A 5 kW rooftop generates roughly 20–22 units a day — about 120–150 km of driving. We size solar for your current bill plus your EV kilometres, and set charging priority accordingly."
          />
          <ul className="mt-7 space-y-3 border-t border-[#E2E8EC] pt-7">
            {[
              'Dynamic load management — usually no sanction-load upgrade in homes',
              'Solar-priority and scheduled night-charging modes',
              'RFID, app payments and per-user billing for shared sites',
              'OCPP chargers with remote diagnostics and service',
            ].map((li) => (
              <li key={li} className="flex items-start gap-3 text-[15px] text-[#14242E]">
                <span className="mt-0.5 grid size-6 shrink-0 place-items-center bg-[#1E7A3C] text-white" style={{ borderRadius: 6 }}>
                  <Check size={14} />
                </span>
                {li}
              </li>
            ))}
          </ul>
          <dl className="mt-7 grid grid-cols-3 gap-6 border-t border-[#E2E8EC] pt-6">
            {[['120+', 'EV points installed'], ['60 kW', 'Max DC output'], ['24×7', 'Remote monitoring']].map(([v, l]) => (
              <div key={l}>
                <dt className="font-display text-[22px] font-semibold text-[#0C1E28]">{v}</dt>
                <dd className="mt-1 text-[13px] text-[#5B6D77]">{l}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="border-y border-[#E2E8EC] bg-[#F4F6F8]">
        <div className="mx-auto max-w-7xl px-6 py-14 sm:py-20">
          <SectionHeading kicker="Configurations" title="Choose the setup that fits the site." />
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              ['Home charging', '7.4 kW smart AC charger with app, scheduling and solar-priority mode.', 'Single-phase ready · App + RFID'],
              ['Workplace & commercial', 'Multi-point 7.4–22 kW with load balancing and staff billing.', 'Load balancing · Billing reports'],
              ['Fleet & DC fast', '30–60 kW DC fast with depot layout and solar + storage integration.', 'Depot design · OCPP + CMS'],
            ].map(([t, d, specs]) => (
              <div key={t} className="border border-[#E2E8EC] bg-white p-7" style={{ borderRadius: 8 }}>
                <p className="font-display text-[18px] font-semibold text-[#0C1E28]">{t}</p>
                <p className="mt-2 text-[14.5px] leading-relaxed text-[#5B6D77]">{d}</p>
                <p className="mt-4 border-t border-[#E2E8EC] pt-4 text-[13px] font-medium text-[#42545F]">{specs}</p>
              </div>
            ))}
          </div>
          <div className="mt-6 flex flex-col gap-4 border border-[#E2E8EC] bg-white p-6 sm:flex-row sm:items-center sm:justify-between" style={{ borderRadius: 8 }}>
            <p className="max-w-2xl text-[14.5px] text-[#42545F]">
              <span className="font-semibold text-[#0C1E28]">Unsure about sanction load?</span> Send a photo of your meter and main breaker — we confirm feasibility before you pay anything.
            </p>
            <Link href="/contact" className="inline-flex shrink-0 items-center gap-2 bg-[#1E7A3C] px-6 py-3 text-[14px] font-semibold text-white hover:bg-[#165c2d]" style={{ borderRadius: 6 }}>
              Check feasibility <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </section>

      <CtaBand />
    </main>
  )
}
