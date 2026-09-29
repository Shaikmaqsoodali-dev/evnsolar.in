import Link from 'next/link'
import { ArrowRight, Check } from 'lucide-react'
import { PageIntro, SectionHeading, CtaBand } from '@/components/site-chrome'
import { Faq } from '@/components/ux-bits'

export const metadata = { title: 'Pricing — EVN Solar Energy Solutions' }

const PLANS = [
  {
    name: 'Home Essential', size: '3 kW onwards', d: 'For households looking to cut the grid bill with a straightforward on-grid rooftop.',
    feat: ['Rooftop on-grid system', 'Generation monitoring app', 'Net-metering assistance', '5-year service support'], cta: 'Get home quote', featured: false,
  },
  {
    name: 'Home + EV', size: '5 kW + 7.4 kW charger', d: 'Our most specified bundle: solar sized for the bill plus EV kilometres, with one charger.',
    feat: ['Solar + home EV charging', 'Load balancing, solar priority', 'Battery-ready hybrid option', 'Subsidy and EMI assistance', 'Priority support'], cta: 'Get EV bundle quote', featured: true,
  },
  {
    name: 'Commercial / Fleet', size: '50 kW+ · Custom', d: 'Sheds, ground mounts and carports with multi-point or DC fast charging.',
    feat: ['Ground, shed & carport plants', 'DC fast + multi-point AC', 'Billing, RFID, fleet reports', 'O&M contracts'], cta: 'Talk to sales', featured: false,
  },
]

export default function PricingPage() {
  return (
    <main className="bg-white">
      <PageIntro
        kicker="Sizes & pricing"
        title="Start with the right size. Expand later."
        lede="Indicative starting points. Your final proposal follows a site survey and includes a generation estimate, subsidy breakup and payment schedule."
        meta={['Survey before final quote', 'PM Surya Ghar guidance', 'EMI & staged payments']}
        crumb={[['Pricing', '/pricing']]}
      />
      <section className="mx-auto max-w-7xl px-6 py-14 sm:py-20">
        <div className="grid gap-6 lg:grid-cols-3">
          {PLANS.map(({ name, size, d, feat, cta, featured }) => (
            <div
              key={name}
              className={`flex flex-col border p-8 ${featured ? 'border-[#0C1E28] bg-[#0C1E28] text-white' : 'border-[#E2E8EC] bg-white'}`}
              style={{ borderRadius: 10 }}
            >
              <div className="flex items-center justify-between gap-3">
                <p className={`text-[13px] font-semibold uppercase tracking-[0.12em] ${featured ? 'text-white/60' : 'text-[#0083CB]'}`}>{name}</p>
                {featured && (
                  <span className="bg-[#0083CB] px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.1em] text-white" style={{ borderRadius: 6 }}>
                    Most specified
                  </span>
                )}
              </div>
              <p className={`font-display mt-3 text-[24px] font-semibold ${featured ? 'text-white' : 'text-[#0C1E28]'}`}>{size}</p>
              <p className={`mt-2 text-[14px] leading-relaxed ${featured ? 'text-white/65' : 'text-[#5B6D77]'}`}>{d}</p>
              <ul className={`mt-6 flex-1 space-y-3 border-t pt-6 ${featured ? 'border-white/15' : 'border-[#E2E8EC]'}`}>
                {feat.map((f) => (
                  <li key={f} className={`flex items-start gap-2.5 text-[14px] ${featured ? 'text-white/85' : 'text-[#14242E]'}`}>
                    <Check size={16} className={`mt-0.5 shrink-0 ${featured ? 'text-[#7BD88F]' : 'text-[#1E7A3C]'}`} /> {f}
                  </li>
                ))}
              </ul>
              <Link
                href="/contact"
                className={`mt-7 inline-flex items-center justify-center gap-2 px-6 py-3 text-[14px] font-semibold ${featured ? 'bg-white text-[#0C1E28] hover:bg-[#E8EEF1]' : 'bg-[#0083CB] text-white hover:bg-[#00659D]'}`}
                style={{ borderRadius: 6 }}
              >
                {cta} <ArrowRight size={15} />
              </Link>
            </div>
          ))}
        </div>

        <div className="mt-14">
          <SectionHeading kicker="Commercial terms" title="How pricing and payment work." />
          <div className="mt-8 grid gap-px overflow-hidden border border-[#E2E8EC] bg-[#E2E8EC] md:grid-cols-3" style={{ borderRadius: 8 }}>
            {[
              ['Subsidy', 'PM Surya Ghar guidance', 'Eligibility check and application support for residential systems.'],
              ['Payments', 'EMI with staged milestones', 'Survey, installation and commissioning milestones — no full advance.'],
              ['Warranty', '25-yr modules · 5-yr service', 'Product and performance warranties documented at handover.'],
            ].map(([k, t, d]) => (
              <div key={t} className="bg-white p-7">
                <p className="text-[12px] font-semibold uppercase tracking-[0.12em] text-[#0083CB]">{k}</p>
                <p className="font-display mt-2 text-[17px] font-semibold text-[#0C1E28]">{t}</p>
                <p className="mt-2 text-[14px] leading-relaxed text-[#5B6D77]">{d}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-14">
          <SectionHeading kicker="Questions" title="Pricing questions, answered." />
          <div className="mt-8">
            <Faq
              items={[
                ['Why no fixed price list?', 'Shadow, roof strength, cable distance and sanction load change the cost materially. A fixed list would either overcharge you or hide extras — the survey-first quote is more honest.'],
                ['How do staged payments work?', 'A small advance on survey confirmation, the bulk on material delivery and installation, and the balance only after commissioning and app handover.'],
                ['Is EMI available?', 'Yes, through partner financiers for residential systems, typically 12–60 months. We share options with your quote.'],
                ['What subsidy can I get?', 'Under PM Surya Ghar, eligible homes receive central assistance directly to their bank account. We check eligibility and file the application for you.'],
              ]}
            />
          </div>
        </div>
      </section>
      <CtaBand />
    </main>
  )
}
