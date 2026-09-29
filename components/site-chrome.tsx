import Link from 'next/link'
import { ArrowRight, Phone, Globe, Share2, AtSign, Rss } from 'lucide-react'
import { GRADIENT, LOGO_URL } from '@/lib/brand'

export function Eyebrow({ children }: { children: string }) {
  return (
    <span className="inline-flex items-center gap-2 text-[11px] font-extrabold tracking-[0.18em] text-[#0083CB]">
      <span className="h-[2px] w-6 rounded-full" style={{ background: GRADIENT }} /> {children}
    </span>
  )
}

export function CtaBand() {
  return (
    <section className="px-3 pb-4 sm:px-5">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-6 rounded-[26px] p-8 text-white sm:p-12" style={{ background: 'linear-gradient(135deg, #0B1720 0%, #0083CB 55%, #1F8A42 100%)' }}>
        <div className="max-w-xl">
          <p className="text-[11px] font-extrabold tracking-[0.18em] text-white/75">READY WHEN YOU ARE</p>
          <h2 className="mt-3 text-[28px] font-extrabold leading-tight sm:text-[36px]">Generate your own energy. Drive on sunlight.</h2>
          <p className="mt-3 text-[14.5px] text-white/75">Share your monthly bill and terrace / parking photos — we&apos;ll respond with system size, generation estimate and subsidy breakup.</p>
        </div>
        <div className="flex flex-col gap-3">
          <Link href="/contact" className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-8 py-3.5 text-center text-sm font-bold text-[#006FAE]">
            Get Free Quote <ArrowRight size={16} />
          </Link>
          <a href="tel:+917040506295" className="flex items-center justify-center gap-2 text-sm font-bold text-white"><Phone size={16} /> +91 70405 06295</a>
        </div>
      </div>
    </section>
  )
}

export function SiteFooter() {
  return (
    <footer className="mt-4 bg-[#0B1720] text-white">
      <div className="mx-auto grid max-w-6xl gap-4 px-5 py-8 sm:grid-cols-3">
        {[
          ['Support & Email', 'info@evnsolar.in • mail@evnsolar.in'],
          ['Customer Support', '+91 70405 06295 (9am–7pm)'],
          ['Our Location', '79 Mahada Colony, Malegaon 423203'],
        ].map(([t, d]) => (
          <div key={t} className="flex items-center gap-3 rounded-2xl bg-white/5 p-4 ring-1 ring-white/10">
            <span className="grid size-11 shrink-0 place-items-center rounded-xl font-extrabold" style={{ background: GRADIENT }}>●</span>
            <div><p className="text-[14px] font-extrabold">{t}</p><p className="text-[12.5px] text-white/60">{d}</p></div>
          </div>
        ))}
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-12 md:grid-cols-[1.4fr_0.7fr_0.7fr_0.7fr]">
          <div>
            <img src={LOGO_URL} alt="EV and Solar logo" className="h-14 w-auto rounded-xl bg-white p-1.5" />
            <p className="mt-4 max-w-xs text-[13.5px] leading-relaxed text-white/60">EVN Solar Energy Solutions — rooftop & ground solar, solar carports and EV charging infrastructure across Maharashtra & India.</p>
            <div className="mt-4 flex gap-2">
              {[Globe, Share2, AtSign, Rss].map((Icon, i) => (
                <span key={i} className="grid size-8 place-items-center rounded-full bg-white/10"><Icon size={14} /></span>
              ))}
            </div>
          </div>
          {[
            ['Company', [['Home', '/'], ['About', '/about'], ['Projects', '/projects'], ['Blog', '/blog'], ['Contact', '/contact']]],
            ['Solutions', [['Rooftop Solar', '/services'], ['Ground Solar', '/services'], ['Solar Carport', '/services'], ['EV Charging', '/ev-charging'], ['Pricing', '/pricing']]],
            ['Support', [['Get a Quote', '/contact'], ['Subsidy Help', '/contact'], ['Warranty', '/about'], ['Service', '/contact'], ['Privacy', '/contact']]],
          ].map(([title, links]) => (
            <div key={title as string}>
              <p className="font-extrabold">{title}</p>
              <ul className="mt-4 space-y-2.5 text-[13.5px] text-white/60">
                {(links as [string, string][]).map(([l, h]) => <li key={l}><Link href={h} className="transition hover:text-[#12A9E2]">{l}</Link></li>)}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="px-5 pb-6">
        <p className="mx-auto max-w-6xl rounded-full bg-white/10 py-3 text-center text-[12px] font-semibold text-white/70 ring-1 ring-white/10">
          Copyright © 2026 EVN Solar Energy Solutions Pvt Ltd • EV & Solar • All Rights Reserved
        </p>
      </div>
    </footer>
  )
}

export function PageHero({ tag, title, desc }: { tag: string; title: React.ReactNode; desc?: string }) {
  return (
    <section className="bg-[#F8FAFC] px-3 pt-4 sm:px-5">
      <div className="relative mx-auto max-w-6xl overflow-hidden rounded-[26px] border border-[#DCE5EA] bg-white px-8 py-12 sm:px-12">
        <div className="pointer-events-none absolute inset-0" style={{ background: 'radial-gradient(600px 260px at 90% 0%, rgba(18,169,226,0.14), transparent), radial-gradient(500px 240px at 0% 100%, rgba(116,189,108,0.14), transparent)' }} />
        <div className="relative max-w-2xl">
          <Eyebrow>{tag}</Eyebrow>
          <h1 className="mt-3 text-[32px] font-extrabold leading-tight tracking-tight sm:text-[46px]">{title}</h1>
          {desc && <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-[#52616B]">{desc}</p>}
        </div>
      </div>
    </section>
  )
}
