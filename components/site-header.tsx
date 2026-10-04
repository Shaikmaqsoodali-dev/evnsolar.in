'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { ArrowRight, ArrowUpRight, Mail, MapPin, Menu, Phone, X } from 'lucide-react'
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
        {/* ── utility strip: live status + contact ── */}
        <div
          className={cn(
            'overflow-hidden bg-[#04141C] text-white transition-all duration-500',
            scrolled ? 'max-h-0' : 'max-h-12',
          )}
        >
          <div className="mx-auto flex h-9 max-w-7xl items-center justify-between px-6">
            <p className="flex items-center gap-2 text-[10.5px] font-semibold uppercase tracking-[0.14em] text-white/70">
              <span className="relative flex size-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#3BB54A] opacity-75" />
                <span className="relative inline-flex size-1.5 rounded-full bg-[#3BB54A]" />
              </span>
              <span className="hidden sm:inline">Now booking site surveys</span>
              <span className="hidden items-center gap-1.5 text-white/35 md:inline-flex">
                <MapPin size={11} /> Nashik, Malegaon, Maharashtra
              </span>
            </p>
            <div className="flex items-center gap-4 text-[11.5px] font-medium">
              <a
                href="mailto:info@evnsolar.in"
                className="hidden items-center gap-1.5 uppercase tracking-[0.1em] text-white/55 transition-colors hover:text-white sm:inline-flex"
              >
                <Mail size={12} className="text-[#25C7E8]" /> info@evnsolar.in
              </a>
              <a
                href="tel:+917040506295"
                className="inline-flex items-center gap-1.5 font-semibold tracking-wide text-white transition-colors hover:text-[#6FDF8F]"
              >
                <Phone size={12} className="text-[#25C7E8]" /> +91 70405 06295
              </a>
            </div>
          </div>
        </div>

        {/* ── main bar: glass on scroll ── */}
        <div
          className={cn(
            'transition-all duration-500',
            scrolled
              ? 'border-b border-[#E2E8EC]/80 bg-white/85 shadow-[0_8px_32px_rgba(7,29,38,0.10)] backdrop-blur-xl'
              : 'border-b border-transparent bg-white',
          )}
        >
          <div
            className={cn(
              'mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 transition-all duration-500',
              scrolled ? 'h-20' : 'h-[92px]',
            )}
          >
            {/* logo lockup */}
            <Link href="/" className="group flex shrink-0 items-center" aria-label="EVN Solar home">
              <span className="grid h-16 w-auto place-items-center overflow-hidden rounded-2xl bg-white px-2 ring-1 ring-[#E2E8EC] transition-shadow duration-300 group-hover:shadow-[0_6px_20px_rgba(0,142,214,0.25)]">
                <img src={LOGO_URL} alt="EVN Solar" className="h-14 w-auto object-contain" />
              </span>
            </Link>

            {/* pill nav */}
            <nav
              className="hidden items-center gap-1 rounded-full border border-[#E2E8EC]/70 bg-[#F2F7F4]/80 p-1.5 lg:flex"
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
                      'rounded-full px-3.5 py-2 text-[12.5px] font-semibold tracking-[-0.01em] transition-all duration-300',
                      active
                        ? 'bg-[#071D26] text-white shadow-[0_4px_14px_rgba(7,29,38,0.35)]'
                        : 'text-[#50656A] hover:bg-white hover:text-[#071D26] hover:shadow-sm',
                    )}
                  >
                    {label}
                  </Link>
                )
              })}
            </nav>

            {/* actions */}
            <div className="flex shrink-0 items-center gap-2.5">
              <a
                href="tel:+917040506295"
                aria-label="Call EVN Solar"
                className="hidden size-10 place-items-center rounded-full border border-[#E2E8EC] text-[#071D26] transition-all hover:border-[#008ED6] hover:text-[#008ED6] md:grid"
              >
                <Phone size={16} />
              </a>
              <Link
                href="/contact"
                className="btn-shine group hidden items-center gap-2 rounded-full bg-gradient-to-r from-[#00659D] via-[#008ED6] to-[#25C7E8] py-2.5 pl-5 pr-4 text-[13px] font-semibold tracking-[-0.01em] text-white shadow-[0_6px_20px_rgba(0,142,214,0.35)] transition-transform duration-300 hover:scale-[1.03] active:scale-[0.98] sm:inline-flex"
              >
                Get a quote
                <ArrowRight size={15} className="transition-transform duration-300 group-hover:translate-x-0.5" />
              </Link>
              <button
                onClick={() => setOpen(true)}
                aria-label="Open menu"
                className="grid size-10 place-items-center rounded-full bg-[#071D26] text-white lg:hidden"
              >
                <Menu size={18} />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* ── mobile overlay menu ── */}
      <div
        className={cn(
          'fixed inset-0 z-[70] flex flex-col bg-[#04141C] text-white transition-all duration-500 lg:hidden',
          open ? 'visible opacity-100' : 'invisible opacity-0',
        )}
        aria-hidden={!open}
      >
        <div className="pointer-events-none absolute -right-24 -top-24 size-80 rounded-full bg-[#008ED6]/25 blur-[100px]" />
        <div className="pointer-events-none absolute -bottom-24 -left-24 size-80 rounded-full bg-[#3BB54A]/20 blur-[100px]" />
        <div className="relative mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-5">
          <img src={LOGO_URL} alt="EVN Solar" className="h-12 w-auto rounded-xl bg-white px-2 object-contain" />
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
                    'text-[26px] font-semibold tracking-[-0.025em] transition-colors',
                    active ? 'text-[#25C7E8]' : 'text-white group-hover:text-[#6FDF8F]',
                  )}
                >
                  {label}
                </span>
                <ArrowUpRight
                  size={20}
                  className={cn(active ? 'text-[#25C7E8]' : 'text-white/30 group-hover:text-white')}
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
            className="flex items-center justify-center gap-2 rounded-full bg-white py-4 text-[14px] font-semibold text-[#071D26]"
          >
            Get a free site assessment <ArrowRight size={16} />
          </Link>
          <p className="mt-4 text-center text-[12px] font-medium tracking-wide text-white/50">
            +91 70405 06295, info@evnsolar.in
          </p>
        </div>
      </div>
    </>
  )
}
