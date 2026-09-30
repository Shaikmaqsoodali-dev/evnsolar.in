import Link from 'next/link'
import { ArrowRight, Check } from 'lucide-react'
import { PageIntro, SectionHeading, CtaBand } from '@/components/site-chrome'
import { Faq } from '@/components/ux-bits'
import { Stagger, Tilt } from '@/components/motion'

export const metadata = { title: 'Pricing — EVN Solar Energy Solutions' }

const PLANS = [
  {
    name: 'Home Essential', big: '3 kW', small: 'onwards', d: 'For households looking to cut the grid bill with a straightforward on-grid rooftop.',
    feat: ['Rooftop on-grid system', 'Generation monitoring app', 'Net-metering assistance', '5-year service support'], cta: 'Get home quote', featured: false,
  },
  {
    name: 'Home + EV', big: '5 kW+', small: 'with 7.4 kW charger', d: 'Our most specified bundle: solar sized for the bill plus EV kilometres, with one charger.',
    feat: ['Solar + home EV charging', 'Load balancing, solar priority', 'Battery-ready hybrid option', 'Subsidy and EMI assistance', 'Priority support'], cta: 'Get EV bundle quote', featured: true,
  },
  {
    name: 'Commercial / Fleet', big: '50 kW+', small: 'custom sized', d: 'Sheds, ground mounts and carports with multi-point or DC fast charging.',
    feat: ['Ground, shed & carport plants', 'DC fast + multi-point AC', 'Billing, RFID, fleet reports', 'O&M contracts'], cta: 'Talk to sales', featured: false,
  },
]

export default function PricingPage() {
  return (
    <main className="bg-[#F2F7F4]">
      <PageIntro
        kicker="Sizes & pricing"
        title={<>Start with the right size. <em className="editorial-accent text-[#008ED6]">Expand later.</em></>}
        lede="Indicative starting points. Your final proposal follows a site survey and includes a generation estimate, subsidy breakup and payment schedule."
        meta={['Survey before final quote', 'PM Surya Ghar guidance', 'EMI & staged payments']}
        crumb={[['Pricing', '/pricing']]}
      />
      <section className="mx-auto max-w-7xl px-6 py-14 sm:py-20">
        <Stagger className="grid gap-6 lg:grid-cols-3" step={110}>
          {PLANS.map(({ name, big, small, d, feat, cta, featured }) => (
            <Tilt key={name}>
            <div
              className={`lift flex h-full flex-col overflow-hidden border p-8 ${featured ? 'border-[#071D26] bg-[#071D26] text-white' : 'border-[#E2E8EC] bg-white hover:border-[#25C7E8]'}`}
              style={{ borderRadius: 10 }}
            >
              {featured && (
                <div className="-mx-8 -mt-8 h-1.5" style={{ background: 'linear-gradient(90deg, #008ED6 0%, #25C7E8 50%, #3BB54A 100%)' }} aria-hidden />
              )}
              <div className="flex items-center justify-between gap-3">
                <p className={`text-[13px] font-semibold uppercase tracking-[0.12em] ${featured ? 'text-white/60' : 'text-[#008ED6]'}`}>{name}</p>
                {featured && (
                  <span className="bg-[#008ED6] px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.1em] text-white" style={{ borderRadius: 6 }}>
                    Most specified
                  </span>
                )}
              </div>
              <p className={`stat-number mt-4 ${featured ? 'text-white' : 'text-[#071D26]'}`} style={{ fontSize: 'clamp(2.4rem, 4.5vw, 3.4rem)' }}>
                {big}
              </p>
              <p className={`micro mt-1 ${featured ? 'text-[#25C7E8]' : 'text-[#008ED6]'}`}>{small}</p>
              <p className={`mt-2 text-[14px] leading-relaxed ${featured ? 'text-white/65' : 'text-[#5B6D77]'}`}>{d}</p>
              <ul className={`mt-6 flex-1 space-y-3 border-t pt-6 ${featured ? 'border-white/15' : 'border-[#E2E8EC]'}`}>
                {feat.map((f) => (
                  <li key={f} className={`flex items-start gap-2.5 text-[14px] ${featured ? 'text-white/85' : 'text-[#14242E]'}`}>
                    <Check size={16} className={`mt-0.5 shrink-0 ${featured ? 'text-[#6FDF8F]' : 'text-[#008ED6]'}`} /> {f}
                  </li>
                ))}
              </ul>
              <Link
                href="/contact"
                className={`mt-7 inline-flex items-center justify-center gap-2 px-6 py-3 text-[14px] font-semibold ${featured ? 'bg-white text-[#071D26] hover:bg-[#E8EEF1]' : 'bg-[#008ED6] text-white hover:bg-[#00659D]'}`}
                style={{ borderRadius: 6 }}
              >
                {cta} <ArrowRight size={15} />
              </Link>
            </div>
            </Tilt>
          ))}
        </Stagger>

        <div className="mt-14">
          <SectionHeading kicker="Commercial terms" title="How pricing and payment work." />
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {[
              ['Subsidy', 'PM Surya Ghar guidance', 'Eligibility check and application support for residential systems.'],
              ['Payments', 'EMI with staged milestones', 'Survey, installation and commissioning milestones — no full advance.'],
              ['Warranty', '25-yr modules · 5-yr service', 'Product and performance warranties documented at handover.'],
            ].map(([k, t, d]) => (
              <div key={t} className="lift border border-[#CBE3D4] bg-[#EAF7EE] p-7" style={{ borderRadius: 8 }}>
                <p className="text-[12px] font-semibold uppercase tracking-[0.12em] text-[#1E7A34]">{k}</p>
                <p className="font-display mt-2 text-[17px] font-semibold text-[#071D26]">{t}</p>
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
