'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { Menu, X, Phone } from 'lucide-react'
import { LOGO_URL, NAV_LINKS } from '@/lib/brand'

export function SiteHeader() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white">
      {/* utility bar */}
      <div className="bg-[#0083CB] text-white">
        <div className="mx-auto flex h-9 max-w-7xl items-center justify-between px-6 text-[12px] tracking-wide">
          <p className="text-white/70">
            MNRE-aligned systems · Nashik — Malegaon — Maharashtra
          </p>
          <div className="flex items-center gap-5">
            <span className="hidden text-white/70 sm:inline">info@evnsolar.in</span>
            <a href="tel:+917040506295" className="flex items-center gap-1.5 font-medium text-white">
              <Phone size={12} /> +91 70405 06295
            </a>
          </div>
        </div>
      </div>

      {/* main bar */}
      <div className="border-b-2 border-b-[#0083CB]">
        <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between gap-6 px-6">
          <Link href="/" className="flex items-center gap-3">
            <img
              src={LOGO_URL}
              alt="EVN Solar Energy Solutions"
              className="h-10 w-auto object-contain"
            />
            <span className="leading-none">
              <span className="font-display block text-[18px] font-semibold tracking-tight text-[#0C1E28]">
                EV<span className="text-[#0083CB]">&amp;</span>SOLAR
              </span>
              <span className="mt-1 block text-[10px] font-medium uppercase tracking-[0.16em] text-[#5B6D77]">
                EVN Solar Energy Solutions
              </span>
            </span>
          </Link>

          <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary">
            {NAV_LINKS.map(([label, href]) => {
              const active = pathname === href
              return (
                <Link
                  key={label}
                  href={href}
                  className={`text-[14px] transition-colors ${
                    active
                      ? 'font-semibold text-[#0C1E28]'
                      : 'text-[#42545F] hover:text-[#0083CB]'
                  }`}
                >
                  {label}
                </Link>
              )
            })}
          </nav>

          <div className="flex items-center gap-3">
            <Link
              href="/contact"
              className="hidden bg-[#0083CB] px-5 py-2.5 text-[14px] font-semibold text-white transition-colors hover:bg-[#00659D] sm:block"
              style={{ borderRadius: 6 }}
            >
              Get a quote
            </Link>
            <button
              onClick={() => setOpen(!open)}
              aria-label="Toggle menu"
              className="grid size-10 place-items-center border border-[#E2E8EC] text-[#0C1E28] lg:hidden"
              style={{ borderRadius: 6 }}
            >
              {open ? <X size={19} /> : <Menu size={19} />}
            </button>
          </div>
        </div>

        {open && (
          <nav className="border-t border-[#E2E8EC] bg-white px-6 py-3 lg:hidden" aria-label="Mobile">
            {NAV_LINKS.map(([label, href]) => (
              <Link
                key={label}
                href={href}
                onClick={() => setOpen(false)}
                className={`block border-b border-[#F0F3F5] py-3 text-[15px] last:border-0 ${
                  pathname === href ? 'font-semibold text-[#0083CB]' : 'text-[#14242E]'
                }`}
              >
                {label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="my-3 block bg-[#0083CB] py-3 text-center text-[15px] font-semibold text-white"
              style={{ borderRadius: 6 }}
            >
              Get a quote
            </Link>
          </nav>
        )}
      </div>
    </header>
  )
}
