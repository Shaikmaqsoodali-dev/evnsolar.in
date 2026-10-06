'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { Mail, Menu, Phone, X } from 'lucide-react'
import { BrandArrow } from '@/components/brand-arrow'
import { LOGO_URL, NAV_LINKS } from '@/lib/brand'
import { cn } from '@/lib/utils'

export function SiteHeader() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open ])

  return (
    <>
      <header className="sticky top-0 z-50">
        {/* ── SOLOR topbar: email + phone + socials ── */}
        <div
          className={cn(
            'overflow-hidden bg-[#072A45] text-white transition-all duration-500',
            scrolled ? 'max-h-0' : 'max-h-12',
          )}
        >
          <div className="mx-auto flex h-10 max-w-7xl items-center justify-between px-6">
            <div className="flex items-center gap-5 text-[13px] font-normal">
              <a
                href="mailto:info@evnsolar.in"
                className="inline-flex items-center gap-2 text-white/80 transition-colors hover:text-[#62D984]"
                style={{ fontFamily: 'var(--font-body)' }}
              >
                <Mail size={13} className="text-[#62D984]" /> info@evnsolar.in
              </a>
              <a
                href="tel:+917040506295"
                className="hidden items-center gap-2 text-white/80 transition-colors hover:text-[#62D984] sm:inline-flex"
                style={{ fontFamily: 'var(--font-body)' }}
              >
                <Phone size={13} className="text-[#62D984]" /> +91 70405 06295
              </a>
            </div>
            <div className="flex items-center gap-3 text-white/70">
              <span className="hidden text-[12px] uppercase tracking-[0.12em] text-white/50 md:inline" style={{ fontFamily: 'var(--font-display)' }}>
                Nashik · Malegaon · Maharashtra
              </span>
              <span className="hidden h-4 w-px bg-white/15 md:inline-block" aria-hidden />
              {[
                { short: 'IG', label: 'Instagram', href: 'https://www.instagram.com/evnsolar.in/' },
                { short: 'FB', label: 'Facebook', href: 'https://www.facebook.com/evsolar.in' },
              ].map((s) => (
                <a key={s.label} href={s.href} target="_blank" rel="noreferrer" aria-label={s.label} className="text-[12px] font-semibold uppercase tracking-[0.1em] text-white/60 transition-colors hover:text-[#62D984]" style={{ fontFamily: 'var(--font-display)' }}>
                  {s.short}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* ── SOLOR main header: logo left, nav center, Contact us right ── */}
        <div
          className={cn(
            'transition-all duration-500',
            scrolled
              ? 'border-b border-[#D9E2EA] bg-white/95 shadow-[0_8px_32px_rgba(7,42,69,0.10)] backdrop-blur-xl'
              : 'border-b border-[#D9E2EA]/60 bg-white',
          )}
        >
          <div
            className={cn(
              'mx-auto flex max-w-7xl items-center justify-between gap-4 overflow-visible px-6 transition-all duration-500',
              scrolled ? 'h-[108px]' : 'h-[116px]',
            )}
          >
            {/* logo lockup — transparent PNG, no cropping needed */}
            <Link href="/" className="group flex shrink-0 items-center overflow-visible py-1" aria-label="EVN Solar home">
              <img
                src={LOGO_URL}
                alt="EVN Solar"
                width={256}
                height={256}
                fetchPriority="high"
                className="navbar-logo transition-all duration-500"
              />
            </Link>

            {/* Solor nav — Rajdhani 600 uppercase */}
            <nav
              className="hidden items-center gap-7 lg:flex"
              aria-label="Primary"
            >
              {NAV_LINKS.map(([label, href]) => {
                const active = pathname === href
                return (
                  <Link
                    key={label}
                    href={href}
                    aria-current={active ? 'page' : undefined}
                    className={cn(
                      'relative py-2 text-[15px] font-bold uppercase tracking-[0.06em] transition-colors duration-300',
                      active
                        ? 'text-[#072A45]'
                        : 'text-[#3E5162] hover:text-[#072A45]',
                    )}
                    style={{ fontFamily: 'var(--font-display)' }}
                  >
                    {label}
                    <span
                      aria-hidden
                      className={cn(
                        'absolute -bottom-0.5 left-0 h-[2.5px] w-full origin-left rounded-full bg-[#62D984] transition-transform duration-300',
                        active ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100',
                      )}
                    />
                  </Link>
                )
              })}
            </nav>

            {/* Solor actions — Contact us button */}
            <div className="flex shrink-0 items-center gap-2.5">
              <a
                href="tel:+917040506295"
                aria-label="Call EVN Solar"
                className="hidden size-11 place-items-center rounded-full border border-[#D9E2EA] text-[#072A45] transition-all hover:border-[#072A45] hover:bg-[#072A45] hover:text-[#62D984] md:grid"
              >
                <Phone size={16} />
              </a>
              <Link
                href="/contact"
                className="btn-shine group hidden items-center gap-2 rounded-lg bg-[#072A45] py-3 pl-6 pr-5 text-[14px] font-bold uppercase tracking-[0.08em] text-white transition-colors duration-300 hover:bg-[#33A94F] hover:text-[#072A45] sm:inline-flex"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                Contact us
                <BrandArrow size={15} className="transition-transform duration-300 group-hover:translate-x-0.5" />
              </Link>
              <button
                onClick={() => setOpen(true)}
                aria-label="Open menu"
                className="grid size-11 place-items-center rounded-lg bg-[#072A45] text-white lg:hidden"
              >
                <Menu size={18} />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* ── mobile overlay menu — Solor dark green ── */}
      <div
        className={cn(
          'fixed inset-0 z-[70] flex flex-col bg-[#072A45] text-white transition-all duration-500 lg:hidden',
          open ? 'visible opacity-100' : 'invisible opacity-0',
        )}
        aria-hidden={!open}
      >
        <div className="pointer-events-none absolute -right-24 -top-24 size-80 rounded-full bg-[#62D984]/20 blur-[100px]" />
        <div className="pointer-events-none absolute -bottom-24 -left-24 size-80 rounded-full bg-[#62D984]/10 blur-[100px]" />
        <div className="relative mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-5">
          <img src={LOGO_URL} alt="EVN Solar" className="navbar-logo" />
          <button
            onClick={() => setOpen(false)}
            aria-label="Close menu"
            className="grid size-10 place-items-center rounded-full border border-white/20 text-white transition-colors hover:bg-white/10"
          >
            <X size={18} />
          </button>
        </div>
        <nav className="relative mx-auto flex w-full max-w-7xl flex-1 flex-col justify-center gap-1 px-6" aria-label="Mobile">
          {NAV_LINKS.map(([label, href], i) => {
            const active = pathname === href
            return (
              <Link
                key={label}
                href={href}
                onClick={() => setOpen(false)}
                tabIndex={open ? 0 : -1}
                className={cn(
                  'group flex items-center justify-between border-b border-white/10 py-3.5 transition-all duration-500',
                  open ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0',
                )}
                style={{ transitionDelay: open ? `${80 + i * 55}ms` : '0ms' }}
              >
                <span
                  className={cn(
                    'tracking-[0] transition-colors',
                    active ? 'text-[#62D984]' : 'text-white group-hover:text-[#62D984]',
                  )}
                  style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 28 }}
                >
                  {label}
                </span>
                <BrandArrow
                  direction="up-right"
                  size={20}
                  className={cn(active ? 'text-[#62D984]' : 'text-white/30 group-hover:text-white')}
                />
              </Link>
            )
          })}
        </nav>
        <div
          className={cn(
            'relative mx-auto w-full max-w-7xl px-6 pb-10 transition-all delay-500 duration-500',
            open ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0',
          )}
        >
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            tabIndex={open ? 0 : -1}
            className="flex items-center justify-center gap-2 rounded-lg bg-[#62D984] py-4 text-[15px] font-semibold uppercase tracking-[0.08em] text-[#072A45]"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Get a free site assessment <BrandArrow size={16} />
          </Link>
          <p className="mt-4 text-center text-[13px] font-normal tracking-wide text-white/60" style={{ fontFamily: 'var(--font-body)' }}>
            +91 70405 06295 · info@evnsolar.in
          </p>
        </div>
      </div>
    </>
  )
}
