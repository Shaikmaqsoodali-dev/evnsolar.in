import Link from 'next/link'
import { ArrowRight, Check, PlugZap, CarFront, BatteryCharging, Gauge } from 'lucide-react'
import { GRADIENT, IMG } from '@/lib/brand'
import { Eyebrow, PageHero, CtaBand } from '@/components/site-chrome'

export const metadata = { title: 'EV Charging | EV & Solar' }

export default function EvChargingPage() {
  return (
    <main className="bg-[#F8FAFC]">
      <PageHero
        tag="EV CHARGING INFRASTRUCTURE"
        title={<>Charge at home, at work and <span className="text-[#1F8A42]">on sunlight.</span></>}
        desc="7.4–60 kW AC/DC chargers with load management, solar-priority charging, billing and fleet reports — at homes, offices and depots."
      />

      <section className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-14 lg:grid-cols-2">
        <div className="relative overflow-hidden rounded-[24px] border border-[#DCE5EA]">
          <img src={IMG.evCharge} alt="EV charging" className="h-[420px] w-full object-cover" />
          <div className="absolute bottom-4 left-4 right-4 grid grid-cols-2 gap-3">
            <div className="rounded-2xl bg-white/95 p-4 backdrop-blur"><p className="text-xl font-extrabold text-[#0083CB]">7.4–22 kW</p><p className="text-[12px] font-semibold text-[#52616B]">AC home + workplace</p></div>
            <div className="rounded-2xl bg-[#0B1720]/90 p-4 text-white backdrop-blur"><p className="text-xl font-extrabold">30–60 kW</p><p className="text-[12px] text-white/70">DC fast for fleets</p></div>
          </div>
        </div>
        <div>
          <Eyebrow>WHY SOLAR + EV TOGETHER</Eyebrow>
          <h2 className="mt-3 text-[30px] font-extrabold leading-tight">Fuel your car from your roof, not the grid.</h2>
          <p className="mt-4 text-[14.5px] leading-relaxed text-[#52616B]">A 5 kW rooftop generates ~20–22 units/day — roughly 120–150 km of clean driving. We size solar for your current bill <em>plus</em> your EV kilometres.</p>
          <ul className="mt-6 space-y-3 text-[14px] font-medium">
            {['Dynamic load management — no sanction-load upgrade in most homes', 'Solar-priority + scheduled night charging modes', 'RFID, app payments and per-user billing for shared sites', 'OCPP chargers with remote diagnostics'].map((li) => (
              <li key={li} className="flex items-start gap-2.5"><span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-[#1F8A42] text-white"><Check size={13} /></span>{li}</li>
            ))}
          </ul>
          <div className="mt-7 grid grid-cols-3 gap-3">
            {[['120+', 'EV points installed'], ['60 kW', 'Max DC output'], ['24×7', 'Remote monitoring']].map(([n, l]) => (
              <div key={l} className="rounded-2xl border border-[#DCE5EA] bg-white p-4 text-center">
                <p className="bg-clip-text text-xl font-extrabold text-transparent" style={{ backgroundImage: GRADIENT }}>{n}</p>
                <p className="mt-1 text-[11.5px] font-semibold text-[#52616B]">{l}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-[#DCE5EA] bg-white py-14">
        <div className="mx-auto max-w-6xl px-5">
          <Eyebrow>CHOOSE YOUR SETUP</Eyebrow>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {[
              { icon: CarFront, t: 'Home Charging', d: '7.4 kW smart AC charger with app, scheduling and solar-priority mode.', specs: ['Single-phase ready', 'App + RFID'] },
              { icon: PlugZap, t: 'Workplace / Commercial', d: 'Multi-point 7.4–22 kW with load balancing and staff billing.', specs: ['Load balancing', 'Billing + reports'] },
              { icon: BatteryCharging, t: 'Fleet + DC Fast', d: '30–60 kW DC fast with depot design and solar + storage integration.', specs: ['Depot design', 'OCPP + CMS'] },
            ].map(({ icon: Icon, t, d, specs }) => (
              <div key={t} className="rounded-[20px] border border-[#DCE5EA] bg-[#F8FAFC] p-6">
                <span className="grid size-12 place-items-center rounded-2xl bg-[#1F8A42] text-white"><Icon size={22} /></span>
                <p className="mt-4 text-[17px] font-extrabold">{t}</p><p className="mt-1.5 text-[13.5px] text-[#52616B]">{d}</p>
                <div className="mt-4 flex gap-2">{specs.map((s) => <span key={s} className="rounded-full border border-[#DCE5EA] bg-white px-2.5 py-1 text-[11.5px] font-bold">{s}</span>)}</div>
              </div>
            ))}
          </div>
          <div className="mt-6 flex items-center gap-3 rounded-[20px] bg-[#0B1720] p-5 text-[13.5px] text-white/80">
            <Gauge size={20} className="shrink-0 text-[#74BD6C]" />
            Not sure about sanction load? Send us a photo of your meter + main breaker — we&apos;ll confirm feasibility before you pay anything.
            <Link href="/contact" className="ml-auto inline-flex shrink-0 items-center gap-1.5 rounded-full bg-[#1F8A42] px-5 py-2.5 text-[13px] font-bold text-white hover:bg-[#176C34]">Check <ArrowRight size={14} /></Link>
          </div>
        </div>
      </section>

      <CtaBand />
      <div className="h-4" />
    </main>
  )
}
