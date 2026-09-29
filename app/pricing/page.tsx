import Link from 'next/link'
import { Check } from 'lucide-react'
import { GRADIENT } from '@/lib/brand'
import { Eyebrow, PageHero, CtaBand } from '@/components/site-chrome'

export const metadata = { title: 'Pricing | EV & Solar' }

export default function PricingPage() {
  return (
    <main className="bg-[#F8FAFC]">
      <PageHero
        tag="SYSTEM SIZES & PRICING"
        title={<>Start with the right size. <span className="text-[#0083CB]">Scale later.</span></>}
        desc="Indicative starting points. Final quote after site survey with generation estimate, subsidy breakup and EMI options."
      />
      <section className="mx-auto max-w-6xl px-5 py-14">
        <div className="grid gap-5 md:grid-cols-3">
          {[
            { plan: 'Home Essential', price: '3 kW onwards', feat: ['Rooftop on-grid system', 'Generation monitoring app', 'Net-metering assistance', '5-yr service support'], cta: 'Get home quote', primary: false },
            { plan: 'Home + EV', price: '5 kW + 7.4 kW charger', feat: ['Solar + home EV charging', 'Load balancing + solar priority', 'Battery-ready hybrid option', 'Subsidy + EMI help', 'Priority support'], cta: 'Get EV bundle quote', primary: true },
            { plan: 'Commercial / Fleet', price: '50 kW+ / Custom', feat: ['Ground / shed / carport plants', 'DC fast + multi-point AC', 'Billing, RFID + fleet reports', 'O&M contracts'], cta: 'Talk to sales', primary: false },
          ].map(({ plan, price, feat, cta, primary }) => (
            <div key={plan} className={`flex flex-col overflow-hidden rounded-[22px] border bg-white ${primary ? 'border-[#0083CB] shadow-[0_20px_60px_rgba(0,131,203,0.22)]' : 'border-[#DCE5EA] shadow-sm'}`}>
              <div className="px-6 py-5 text-center" style={primary ? { background: GRADIENT } : { background: '#F8FAFC' }}>
                <p className={`text-[14px] font-extrabold ${primary ? 'text-white' : ''}`}>{plan}</p>
                <p className={`mt-2 inline-block rounded-full px-4 py-1.5 text-[14px] font-extrabold ${primary ? 'bg-white text-[#006FAE]' : 'bg-[#0083CB]/10 text-[#0083CB]'}`}>{price}</p>
              </div>
              <ul className="flex-1 space-y-3 p-6 text-[13.5px]">
                {feat.map((f) => (
                  <li key={f} className="flex items-start gap-2.5"><span className={`mt-0.5 grid size-5 shrink-0 place-items-center rounded-full text-white ${primary ? 'bg-[#1F8A42]' : 'bg-[#0083CB]'}`}><Check size={12} /></span>{f}</li>
                ))}
              </ul>
              <div className="px-6 pb-6">
                <Link href="/contact" className={`block rounded-full py-3 text-center text-sm font-bold ${primary ? 'bg-[#0083CB] text-white hover:bg-[#006FAE]' : 'bg-[#F8FAFC] text-[#0083CB] ring-1 ring-[#DCE5EA] hover:bg-[#0083CB] hover:text-white'}`}>{cta}</Link>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 grid gap-4 rounded-[22px] border border-[#DCE5EA] bg-white p-8 md:grid-cols-3">
          <div><Eyebrow>SUBSIDY</Eyebrow><p className="mt-2 text-[14px] font-bold">PM Surya Ghar guidance</p><p className="mt-1 text-[13px] text-[#52616B]">Eligibility check + application support for homes.</p></div>
          <div><Eyebrow>PAYMENTS</Eyebrow><p className="mt-2 text-[14px] font-bold">EMI + staged payments</p><p className="mt-1 text-[13px] text-[#52616B]">Pay on survey, installation and commissioning milestones.</p></div>
          <div><Eyebrow>WARRANTY</Eyebrow><p className="mt-2 text-[14px] font-bold">25-yr panels / 5-yr service</p><p className="mt-1 text-[13px] text-[#52616B]">Product + performance warranties documented at handover.</p></div>
        </div>
      </section>
      <CtaBand />
      <div className="h-4" />
    </main>
  )
}
