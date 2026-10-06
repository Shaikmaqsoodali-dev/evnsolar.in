import Link from 'next/link'
import { CarFront, Check, CreditCard, Factory, Home, IndianRupee, ShieldCheck } from 'lucide-react'
import { BrandArrow } from '@/components/brand-arrow'
import { PageIntro, SectionHeading, CtaBand } from '@/components/site-chrome'
import { Faq } from '@/components/ux-bits'
import { Stagger, Tilt } from '@/components/motion'

export const metadata = { title: 'Pricing | EVN Solar Energy Solutions', description: 'Indicative solar + EV charging sizes and pricing: 3 kW home, 5 kW home + EV, 50 kW+ commercial. Survey-first quotes with subsidy breakup and staged payments.' }

const PLANS = [
  {
    icon: Home, name: 'Home Essential', big: '3 kW', small: 'onwards', d: 'For households looking to cut the grid bill with a straightforward on-grid rooftop.',
    feat: ['Rooftop on-grid system', 'Generation monitoring app', 'Net-metering assistance', '5-year service support'], cta: 'Get a free site assessment', featured: false,
  },
  {
    icon: CarFront, name: 'Home + EV', big: '5 kW+', small: 'with 7.4 kW charger', d: 'Our most specified bundle: solar sized for the bill plus EV kilometres, with one charger.',
    feat: ['Solar + home EV charging', 'Load balancing, solar priority', 'Battery-ready hybrid option', 'Subsidy and EMI assistance', 'Priority support'], cta: 'Get a free site assessment', featured: true,
  },
  {
    icon: Factory, name: 'Commercial / Fleet', big: '50 kW+', small: 'custom sized', d: 'Sheds, ground mounts and carports with multi-point or DC fast charging.',
    feat: ['Ground, shed & carport plants', 'DC fast + multi-point AC', 'Billing, RFID, fleet reports', 'O&M contracts'], cta: 'Get a free site assessment', featured: false,
  },
]

export default function PricingPage() {
  return (
    <main className="bg-[#F0F5F9]">
      <PageIntro
        kicker="Sizes & pricing"
        title={<>Start with the right size. <em className="editorial-accent text-[#0F88C7]">Expand later.</em></>}
        lede="Indicative starting points. Your final proposal follows a site survey and includes a generation estimate, subsidy breakup and payment schedule."
        crumb={[['Pricing', '/pricing']]}
        image="https://res.cloudinary.com/qxjpbgh6/image/upload/v1791106731/Solar-Panel-Installation.png"
        imageAlt="Rooftop solar panels against a clear sky"
      />
      <section className="mx-auto max-w-7xl px-6 py-14 sm:py-20">
        <Stagger className="grid gap-6 lg:grid-cols-3" step={110}>
          {PLANS.map(({ icon: Icon, name, big, small, d, feat, cta, featured }) => (
            <Tilt key={name}>
            <div
              className={`lift flex h-full flex-col overflow-hidden border p-8 ${featured ? 'border-[#072A45] bg-[#072A45] text-white' : 'border-[#D9E2EA] bg-white hover:border-[#62D984]'}`}
              style={{ borderRadius: 10 }}
            >
              {featured && (
                <div className="-mx-8 -mt-8 h-1.5" style={{ background: 'linear-gradient(90deg, #0F88C7 0%, #62D984 50%, #33A94F 100%)' }} aria-hidden />
              )}
              <div className="flex items-center justify-between gap-3">
                <p className={`flex items-center gap-2.5 text-[13px] font-bold uppercase tracking-[0.12em] ${featured ? 'text-white/60' : 'text-[#0F88C7]'}`}>
                  <span className={`title-icon size-9 ${featured ? 'bg-white/10 text-[#62D984]' : 'bg-[#072A45] text-[#62D984]'}`} aria-hidden>
                    <Icon size={17} strokeWidth={2} />
                  </span>
                  {name}
                </p>
                {featured && (
                  <span className="bg-[#0F88C7] px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.1em] text-white" style={{ borderRadius: 6 }}>
                    Most specified
                  </span>
                )}
              </div>
              <p className={`stat-number mt-4 ${featured ? 'text-white' : 'text-[#072A45]'}`} style={{ fontSize: 'clamp(2.4rem, 4.5vw, 3.4rem)' }}>
                {big}
              </p>
              <p className={`micro mt-1 ${featured ? 'text-[#62D984]' : 'text-[#0F88C7]'}`}>{small}</p>
              <p className={`mt-2 text-[14px] leading-relaxed ${featured ? 'text-white/65' : 'text-[#54687A]'}`}>{d}</p>
              <ul className={`mt-6 flex-1 space-y-3 border-t pt-6 ${featured ? 'border-white/15' : 'border-[#D9E2EA]'}`}>
                {feat.map((f) => (
                  <li key={f} className={`flex items-start gap-2.5 text-[14px] ${featured ? 'text-white/85' : 'text-[#14242E]'}`}>
                    <Check size={16} className={`mt-0.5 shrink-0 ${featured ? 'text-[#62D984]' : 'text-[#0F88C7]'}`} /> {f}
                  </li>
                ))}
              </ul>
              <Link
                href="/contact"
                className={`mt-7 inline-flex items-center justify-center gap-2 px-6 py-3 text-[14px] font-semibold ${featured ? 'bg-white text-[#072A45] hover:bg-[#E4EDF4]' : 'bg-[#0F88C7] text-white hover:bg-[#0B6AA0]'}`}
                style={{ borderRadius: 6 }}
              >
                {cta} <BrandArrow size={15} />
              </Link>
            </div>
            </Tilt>
          ))}
        </Stagger>

        <div className="mt-14">
          <SectionHeading title="How pricing and payment work." />
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {[
              { icon: IndianRupee, k: 'Subsidy', t: 'PM Surya Ghar guidance', d: 'Eligibility check and application support for residential systems.' },
              { icon: CreditCard, k: 'Payments', t: 'EMI with staged milestones', d: 'Survey, installation and commissioning milestones, no full advance.' },
              { icon: ShieldCheck, k: 'Warranty', t: '25-yr modules, 5-yr service', d: 'Product and performance warranties documented at handover.' },
            ].map(({ icon: Icon, k, t, d }) => (
              <div key={t} className="lift border border-[#BFD9E8] bg-[#E7F1F8] p-7" style={{ borderRadius: 8 }}>
                <span className="title-icon size-10 bg-[#072A45] text-[#62D984]" aria-hidden>
                  <Icon size={19} strokeWidth={2} />
                </span>
                <p className="mt-3 text-[12px] font-bold uppercase tracking-[0.12em] text-[#1E7A34]">{k}</p>
                <p className="font-display mt-2 text-[17px] font-bold tracking-tight text-[#072A45]">{t}</p>
                <p className="mt-2 text-[14px] leading-relaxed text-[#54687A]">{d}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-14">
          <SectionHeading title="Pricing questions, answered." />
          <div className="mt-8">
            <Faq
              items={[
                ['Why no fixed price list?', 'Shadow, roof strength, cable distance and sanction load change the cost materially. A fixed list would either overcharge you or hide extras. The survey-first quote is more honest.'],
                ['How do staged payments work?', 'A small advance on survey confirmation, the bulk on material delivery and installation, and the balance only after commissioning and app handover.'],
                ['Is EMI available?', 'Yes, through partner financiers for residential systems, typically 12-60 months. We share options with your quote.'],
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
