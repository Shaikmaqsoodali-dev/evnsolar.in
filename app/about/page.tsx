import Link from 'next/link'
import { ArrowRight, Check, ShieldCheck, Leaf, Sun, PlugZap } from 'lucide-react'
import { IMG, GRADIENT } from '@/lib/brand'
import { Eyebrow, PageHero, CtaBand } from '@/components/site-chrome'

export const metadata = { title: 'About | EV & Solar' }

export default function AboutPage() {
  return (
    <main className="bg-[#F8FAFC]">
      <PageHero
        tag="ABOUT EVN SOLAR"
        title={<>An energy company built for <span className="text-[#0083CB]">generation</span> and <span className="text-[#1F8A42]">mobility.</span></>}
        desc="EVN Solar Energy Solutions designs rooftop solar, ground-mounted plants, solar carports and EV charging as one engineered system — safe, monitored and subsidy-ready."
      />

      <section className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-14 lg:grid-cols-2">
        <div className="grid grid-cols-2 gap-4">
          <img src={IMG.engineer1} alt="Solar team" className="h-[340px] rounded-[22px] border border-[#DCE5EA] object-cover" />
          <div>
            <img src={IMG.engineer2} alt="EV team" className="h-[240px] w-full rounded-[22px] border border-[#DCE5EA] object-cover" />
            <div className="mt-4 rounded-2xl bg-[#0B1720] p-5 text-white">
              <p className="bg-clip-text text-3xl font-extrabold text-transparent" style={{ backgroundImage: GRADIENT }}>25+</p>
              <p className="text-[12.5px] text-white/70">Years of clean-energy engineering practice</p>
            </div>
          </div>
        </div>
        <div>
          <Eyebrow>OUR MISSION</Eyebrow>
          <h2 className="mt-3 text-[30px] font-extrabold leading-tight">Clean power you can measure. Miles you can trust.</h2>
          <p className="mt-4 text-[14.5px] leading-relaxed text-[#52616B]">Every site gets a load study, shadow analysis, structure check and protection design before we quote. No oversizing, no shortcuts — just generation estimates you can verify in the app after commissioning.</p>
          <ul className="mt-6 space-y-3 text-[14px] font-medium">
            {['MNRE-aligned design + DISCOM / net-metering liaison', 'Tier-1 panels, tested inverters, hot-dip galvanised structures', 'Earthing, lightning, surge and cable safety as standard', 'Monitoring handover + 5-year service support'].map((li) => (
              <li key={li} className="flex items-start gap-2.5"><span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-[#0083CB] text-white"><Check size={13} /></span>{li}</li>
            ))}
          </ul>
          <div className="mt-7 flex gap-3">
            <Link href="/projects" className="inline-flex items-center gap-2 rounded-full bg-[#0083CB] px-6 py-3 text-sm font-bold text-white hover:bg-[#006FAE]">See our work <ArrowRight size={15} /></Link>
            <Link href="/contact" className="rounded-full border border-[#DCE5EA] bg-white px-6 py-3 text-sm font-bold hover:border-[#0083CB] hover:text-[#0083CB]">Talk to us</Link>
          </div>
        </div>
      </section>

      <section className="border-y border-[#DCE5EA] bg-white py-14">
        <div className="mx-auto max-w-6xl px-5">
          <Eyebrow>WHAT WE STAND FOR</Eyebrow>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {[
              { icon: ShieldCheck, t: 'Engineering first', d: 'Survey, design docs, safety and testing — before and after install.', c: '#0083CB' },
              { icon: Sun, t: 'Solar expertise', d: 'Rooftop, ground-mount and carports sized for real generation.', c: '#12A9E2' },
              { icon: PlugZap, t: 'EV readiness', d: 'Every project evaluated for current + future charging load.', c: '#1F8A42' },
            ].map(({ icon: Icon, t, d, c }) => (
              <div key={t} className="rounded-[20px] border border-[#DCE5EA] bg-[#F8FAFC] p-6">
                <span className="grid size-12 place-items-center rounded-2xl text-white" style={{ background: c }}><Icon size={22} /></span>
                <p className="mt-4 font-extrabold">{t}</p><p className="mt-1.5 text-[13.5px] text-[#52616B]">{d}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 flex items-center gap-3 rounded-[20px] border border-[#DCE5EA] bg-[#F8FAFC] p-5 text-[13.5px] text-[#52616B]">
            <Leaf size={20} className="shrink-0 text-[#1F8A42]" />
            Sustainability is an output of good engineering: right-sized systems, verified generation and loads — including EVs — planned together.
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-14">
        <Eyebrow>HOW WE DELIVER</Eyebrow>
        <div className="mt-6 grid gap-4 sm:grid-cols-4">
          {[['01', 'Survey'], ['02', 'Design + approvals'], ['03', 'Install + test'], ['04', 'Monitor + support']].map(([n, t]) => (
            <div key={n} className="rounded-[20px] border border-[#DCE5EA] bg-white p-6">
              <p className="bg-clip-text text-xl font-extrabold text-transparent" style={{ backgroundImage: GRADIENT }}>{n}</p>
              <p className="mt-2 font-extrabold">{t}</p>
            </div>
          ))}
        </div>
      </section>

      <CtaBand />
      <div className="h-4" />
    </main>
  )
}
