'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { Mail, Phone, Zap, Menu, X, Globe, Share2, AtSign, Rss } from 'lucide-react'
import { LOGO_URL, NAV_LINKS } from '@/lib/brand'

export function SiteHeader() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  return (
    <>
      <div className="bg-[#0B1720] text-[12.5px] text-white/85">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-2">
          <div className="flex items-center gap-5">
            <span className="flex items-center gap-1.5"><Mail size={14} className="text-[#12A9E2]" /> info@evnsolar.in</span>
            <span className="hidden items-center gap-1.5 sm:flex"><Phone size={14} className="text-[#74BD6C]" /> +91 70405 06295</span>
          </div>
          <p className="hidden items-center gap-2 md:flex">
            <Zap size={13} className="text-[#74BD6C]" /> EV + Solar — Engineered for India
            <Link href="/contact" className="rounded-full bg-[#0083CB] px-2.5 py-0.5 text-[11px] font-bold text-white">Get Subsidy Help</Link>
          </p>
          <div className="flex items-center gap-2">
            {[Globe, Share2, AtSign, Rss].map((Icon, i) => (
              <span key={i} className="grid size-6 place-items-center rounded-full bg-white/10"><Icon size={12} /></span>
            ))}
          </div>
        </div>
      </div>

      <div className="sticky top-0 z-50 bg-[#F8FAFC]/90 px-3 pt-3 backdrop-blur sm:px-5">
        <nav className="mx-auto flex max-w-6xl items-center justify-between gap-4 rounded-2xl border border-[#DCE5EA] bg-white px-4 py-2.5 shadow-[0_10px_35px_rgba(11,23,32,0.08)]">
          <Link href="/" className="flex items-center gap-3">
            <img src={LOGO_URL} alt="EV & Solar — EVN Solar Energy Solutions" className="h-11 w-auto rounded-lg object-contain" />
            <span className="hidden flex-col leading-none sm:flex">
              <span className="text-[17px] font-extrabold tracking-tight text-[#0B1720]">
                EV<span className="text-[#0083CB]">&</span><span className="text-[#0083CB]">SOLAR</span>
              </span>
              <span className="mt-0.5 text-[9px] font-bold tracking-[0.14em] text-[#52616B]">EVN SOLAR ENERGY SOLUTIONS</span>
            </span>
          </Link>
          <div className="hidden items-center gap-5 text-[13.5px] font-semibold text-[#52616B] lg:flex">
            {NAV_LINKS.map(([l, h]) => (
              <Link key={l} href={h} className={`transition hover:text-[#0083CB] ${pathname === h ? 'font-extrabold text-[#0B1720]' : ''}`}>{l}</Link>
            ))}
          </div>
          <div className="flex items-center gap-2">
            <Link href="/contact" className="hidden rounded-full bg-[#0083CB] px-5 py-2.5 text-[13.5px] font-bold text-white transition hover:bg-[#006FAE] sm:block">
              Get Free Quote
            </Link>
            <button onClick={() => setOpen(!open)} aria-label="menu" className="grid size-10 place-items-center rounded-xl border border-[#DCE5EA] text-[#0B1720] lg:hidden">
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </nav>
        {open && (
          <div className="mx-auto mt-2 max-w-6xl rounded-2xl border border-[#DCE5EA] bg-white p-3 shadow-xl lg:hidden">
            {NAV_LINKS.map(([l, h]) => (
              <Link key={l} href={h} onClick={() => setOpen(false)} className={`block rounded-lg px-3 py-2.5 font-semibold hover:bg-[#F8FAFC] ${pathname === h ? 'text-[#0083CB]' : 'text-[#0B1720]'}`}>{l}</Link>
            ))}
            <Link href="/contact" onClick={() => setOpen(false)} className="mt-2 block rounded-full bg-[#0083CB] px-5 py-3 text-center font-bold text-white">Get Free Quote</Link>
          </div>
        )}
      </div>
    </>
  )
}
