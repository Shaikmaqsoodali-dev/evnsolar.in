'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import {
  ArrowRight,
  ArrowUpRight,
  BadgeIndianRupee,
  CarFront,
  ChevronDown,
  Mail,
  Menu,
  Mountain,
  Phone,
  Sun,
  Wrench,
  X,
  Zap,
} from 'lucide-react'
import { IMG, LOGO_URL } from '@/lib/brand'
import { cn } from '@/lib/utils'

const LINKS: { label: string; href: string; accent?: boolean }[] = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Solar', href: '/services' },
  { label: 'EV Charging', href: '/ev-charging', accent: true },
  { label: 'Projects', href: '/projects' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/contact' },
]

const SOLAR_MENU = [
  { icon: Sun, title: 'Rooftop Solar', desc: '1–100 kW · homes, shops, offices', href: '/services' },
  { icon: Mountain, title: 'Ground-mounted', desc: 'Plants, farms & open land', href: '/services' },
  { icon: CarFront, title: 'Solar carports', desc: 'Park, power & charge', href: '/services' },
  { icon: Wrench, title: 'O&M & AMC', desc: 'Cleaning, health checks, repairs', href: '/services' },
]

function isActive(pathname: string, href: string) {
  if (href === '/') return pathname === '/'
  return pathname === href || pathname.startsWith(href + '/')
}

export function SiteHeader() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)
  const [solarOpen, setSolarOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  useEffect(() => {
    setSolarOpen(false)
    setOpen(false)
  }, [pathname])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSolarOpen(false)
        setOpen(false)
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  return (
    <>
      <header className="sticky top-0 z-50" onMouseLeave={() => setSolarOpen(false)}>
        {/* ── utility strip ── */}
        <div
          className={cn(
            'overflow-hidden bg-[#072A45] text-white transition-all duration-500',
            scrolled ? 'max-h-0' : 'max-h-10',
          )}
        >
          <div className="mx-auto flex h-9 max-w-7xl items-center justify-between gap-4 px-5 sm:px-8">
            <p className="flex min-w-0 items-center gap-2 text-[12px] font-medium tracking-wide text-white/70">
              <span className="relative flex size-1.5 shrink-0">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#62D984] opacity-75" />
                <span className="relative inline-flex size-1.5 rounded-full bg-[#62D984]" />
              </span>
              <span className="truncate">
                MNRE-registered contractor · Nashik — Malegaon
              </span>
              <span className="hidden shrink-0 text-[11px] font-semibold text-[#62D984] md:inline">
                ★ 4.9 on Google
              </span>
            </p>
            <div className="flex shrink-0 items-center gap-4 text-[12px] font-medium text-white/70">
              <a href="mailto:info@evnsolar.in" className="hidden items-center gap-1.5 transition-colors hover:text-white sm:inline-flex">
                <Mail size={12} className="text-[#62D984]" /> info@evnsolar.in
              </a>
              <a href="tel:+917040506295" className="inline-flex items-center gap-1.5 transition-colors hover:text-white">
                <Phone size={12} className="text-[#62D984]" /> +91 70405 06295
              </a>
            </div>
          </div>
        </div>

        {/* ── main bar ── */}
        <div
          className={cn(
            'border-b bg-white/92 transition-all duration-500',
            scrolled
              ? 'border-[#D9E2EA] shadow-[0_12px_40px_-16px_rgba(7,42,69,0.25)] backdrop-blur-xl'
              : 'border-transparent',
          )}
          style={{ backgroundColor: scrolled ? undefined : '#fff' }}
        >
          <div
            className={cn(
              'mx-auto flex max-w-7xl items-center justify-between gap-6 px-5 transition-all duration-500 sm:px-8',
              scrolled ? 'h-[68px]' : 'h-[84px]',
            )}
          >
            {/* logo — image only, no duplicated wordmark */}
            <Link href="/" className="group shrink-0" aria-label="EVN Solar home">
              <img
                src={LOGO_URL}
                alt="EVN Solar Energy Solutions"
                className={cn(
                  'w-auto object-contain transition-all duration-500 group-hover:scale-[1.02]',
                  scrolled ? 'h-11' : 'h-[52px]',
                )}
              />
            </Link>

            {/* desktop nav — quiet editorial links */}
            <nav aria-label="Primary" className="hidden items-center gap-7 xl:gap-8 lg:flex">
              {LINKS.map((l) => {
                const active = isActive(pathname, l.href)
                if (l.label === 'Solar') {
                  return (
                    <div key="Solar" className="relative" onMouseEnter={() => setSolarOpen(true)}>
                      <Link
                        href="/services"
                        aria-expanded={solarOpen}
                        className={cn(
                          'group flex items-center gap-1 py-2 text-[13px] font-bold uppercase tracking-[0.08em] transition-colors duration-200',
                          active || solarOpen ? 'text-[#072A45]' : 'text-[#46586A] hover:text-[#072A45]',
                        )}
                        style={{ fontFamily: 'var(--font-display)' }}
                      >
                        Solar
                        <ChevronDown
                          size={13}
                          strokeWidth={3}
                          className={cn('text-[#33A94F] transition-transform duration-300', solarOpen && 'rotate-180')}
                        />
                        <span
                          aria-hidden
                          className={cn(
                            'absolute -bottom-0.5 left-0 h-[2px] w-full origin-left rounded-full bg-[#33A94F] transition-transform duration-300',
                            active || solarOpen ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100',
                          )}
                        />
                      </Link>
                    </div>
                  )
                }
                return (
                  <Link
                    key={l.label}
                    href={l.href}
                    onMouseEnter={() => setSolarOpen(false)}
                    className={cn(
                      'group relative flex items-center gap-1.5 py-2 text-[13px] font-bold uppercase tracking-[0.08em] transition-colors duration-200',
                      active ? 'text-[#072A45]' : 'text-[#46586A] hover:text-[#072A45]',
                    )}
                    style={{ fontFamily: 'var(--font-display)' }}
                  >
                    {l.accent && <Zap size={13} strokeWidth={2.75} className="text-[#33A94F]" />}
                    {l.label}
                    <span
                      aria-hidden
                      className={cn(
                        'absolute -bottom-0.5 left-0 h-[2px] w-full origin-left rounded-full bg-[#33A94F] transition-transform duration-300',
                        active ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100',
                      )}
                    />
                  </Link>
                )
              })}
            </nav>

            {/* actions */}
            <div className="flex shrink-0 items-center gap-5">
              <a
                href="tel:+917040506295"
                className="hidden items-center gap-2 text-[13px] font-bold text-[#072A45] transition-colors hover:text-[#33A94F] xl:inline-flex"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                <span className="grid size-9 place-items-center rounded-full border border-[#D9E2EA]">
                  <Phone size={14} />
                </span>
                +91 70405 06295
              </a>
              <Link
                href="/contact"
                className="btn-shine group hidden items-center gap-2.5 rounded-xl bg-[#072A45] py-3 pl-6 pr-3 text-[13px] font-bold uppercase tracking-[0.08em] text-white transition-all duration-300 hover:bg-[#0A3A5E] hover:shadow-[0_14px_30px_-10px_rgba(7,42,69,0.6)] sm:inline-flex"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                Get a quote
                <span className="grid size-7 place-items-center rounded-full bg-[#62D984] text-[#072A45] transition-transform duration-300 group-hover:rotate-45">
                  <ArrowUpRight size={15} strokeWidth={2.75} />
                </span>
              </Link>
              <button
                onClick={() => setOpen(true)}
                aria-label="Open menu"
                className="grid size-11 place-items-center rounded-xl bg-[#072A45] text-white transition-transform active:scale-95 lg:hidden"
              >
                <Menu size={19} />
              </button>
            </div>
          </div>

          {/* ── Solar mega panel — full-width editorial ── */}
          <div
            className={cn(
              'absolute inset-x-0 top-full hidden transition-all duration-300 lg:block',
              solarOpen ? 'visible translate-y-0 opacity-100' : 'invisible -translate-y-3 opacity-0',
            )}
          >
            {/* hover bridge */}
            <div className="h-1.5 w-full" />
            <div className="px-5 sm:px-8">
              <div className="mx-auto grid max-w-7xl grid-cols-[260px_1fr_300px] gap-8 overflow-hidden rounded-2xl border border-[#D9E2EA] bg-white p-8 shadow-[0_40px_90px_-30px_rgba(7,42,69,0.45)]">
                {/* intro */}
                <div className="flex flex-col justify-center border-r border-[#D9E2EA]/70 pr-8">
                  <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#33A94F]">
                    Solar solutions
                  </p>
                  <p
                    className="mt-2 text-[24px] font-extrabold italic leading-[1.15] tracking-[-0.02em] text-[#072A45]"
                    style={{ fontFamily: 'var(--font-display)' }}
                  >
                    Cut your bill by up to 90%
                  </p>
                  <Link
                    href="/services"
                    onClick={() => setSolarOpen(false)}
                    className="mt-4 inline-flex items-center gap-1.5 text-[13px] font-bold uppercase tracking-[0.08em] text-[#072A45] transition-colors hover:text-[#33A94F]"
                    style={{ fontFamily: 'var(--font-display)' }}
                  >
                    All solar services <ArrowRight size={14} />
                  </Link>
                </div>
                {/* links */}
                <div className="grid grid-cols-2 content-center gap-1.5">
                  {SOLAR_MENU.map((item) => (
                    <Link
                      key={item.title}
                      href={item.href}
                      onClick={() => setSolarOpen(false)}
                      className="group flex items-start gap-3.5 rounded-xl p-3.5 transition-colors hover:bg-[#EDF3F7]"
                    >
                      <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-[#EDF3F7] text-[#072A45] transition-all duration-300 group-hover:bg-[#072A45] group-hover:text-[#62D984]">
                        <item.icon size={18} strokeWidth={2} />
                      </span>
                      <span>
                        <span className="flex items-center gap-1.5 text-[15px] font-bold text-[#072A45]" style={{ fontFamily: 'var(--font-display)' }}>
                          {item.title}
                        </span>
                        <span className="mt-0.5 block text-[13px] font-normal leading-snug text-[#5B6E80]">
                          {item.desc}
                        </span>
                      </span>
                    </Link>
                  ))}
                </div>
                {/* photo card */}
                <Link
                  href="/pricing"
                  onClick={() => setSolarOpen(false)}
                  className="group relative block overflow-hidden rounded-xl"
                >
                  <img src={IMG.rooftop} alt="Rooftop solar array" className="h-full min-h-[220px] w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#051E33]/95 via-[#051E33]/30 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-5">
                    <p className="flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-[0.18em] text-[#62D984]">
                      <BadgeIndianRupee size={14} /> ₹78,000 subsidy
                    </p>
                    <p className="mt-1 text-[17px] font-extrabold italic leading-snug text-white" style={{ fontFamily: 'var(--font-display)' }}>
                      See what you pay after MNRE
                    </p>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* ── mobile full-screen menu ── */}
      <div
        className={cn(
          'fixed inset-0 z-[70] flex flex-col bg-[#051E33] text-white transition-all duration-500 lg:hidden',
          open ? 'visible opacity-100' : 'invisible opacity-0',
        )}
        aria-hidden={!open}
      >
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -right-24 -top-24 size-80 rounded-full bg-[#62D984]/20 blur-[110px]" />
          <div className="absolute -bottom-32 -left-24 size-96 rounded-full bg-[#0F88C7]/20 blur-[110px]" />
          <div
            className="absolute inset-0 opacity-[0.07]"
            style={{
              backgroundImage: 'linear-gradient(rgba(255,255,255,.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.6) 1px, transparent 1px)',
              backgroundSize: '44px 44px',
              maskImage: 'radial-gradient(ellipse 90% 70% at 50% 30%, black 30%, transparent 75%)',
              WebkitMaskImage: 'radial-gradient(ellipse 90% 70% at 50% 30%, black 30%, transparent 75%)',
            }}
          />
        </div>

        <div className="relative mx-auto flex w-full max-w-7xl items-center justify-between px-5 py-4">
          <span className="inline-flex items-center rounded-xl bg-white px-2.5 py-1.5">
            <img src={LOGO_URL} alt="EVN Solar" className="h-8 w-auto object-contain" />
          </span>
          <button
            onClick={() => setOpen(false)}
            aria-label="Close menu"
            className="grid size-10 place-items-center rounded-full border border-white/20 text-white transition-all hover:rotate-90 hover:bg-white/10"
          >
            <X size={18} />
          </button>
        </div>

        <nav className="relative mx-auto flex w-full max-w-7xl flex-1 flex-col justify-center overflow-y-auto px-5" aria-label="Mobile">
          {LINKS.map((l, i) => {
            const active = isActive(pathname, l.href)
            return (
              <Link
                key={l.label}
                href={l.href}
                onClick={() => setOpen(false)}
                tabIndex={open ? 0 : -1}
                className={cn(
                  'group flex items-center gap-4 border-b border-white/10 py-3 transition-all duration-500',
                  open ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0',
                )}
                style={{ transitionDelay: open ? `${60 + i * 45}ms` : '0ms' }}
              >
                <span className={cn('text-[11px] font-bold tracking-[0.2em]', active ? 'text-[#62D984]' : 'text-white/35')}>
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span
                  className={cn(
                    'flex-1 text-[26px] font-extrabold italic leading-none tracking-[-0.02em] transition-colors',
                    active ? 'text-[#62D984]' : 'text-white',
                  )}
                  style={{ fontFamily: 'var(--font-display)' }}
                >
                  {l.label}
                </span>
                <span
                  className={cn(
                    'grid size-9 place-items-center rounded-full border transition-all',
                    active
                      ? 'border-[#62D984] bg-[#62D984] text-[#072A45]'
                      : 'border-white/15 text-white/40',
                  )}
                >
                  <ArrowUpRight size={15} />
                </span>
              </Link>
            )
          })}
        </nav>

        <div
          className={cn(
            'relative mx-auto w-full max-w-7xl px-5 pb-8 pt-4 transition-all delay-300 duration-500',
            open ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0',
          )}
        >
          <div className="grid grid-cols-2 gap-2.5">
            <a
              href="tel:+917040506295"
              className="flex items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/5 py-3.5 text-[13px] font-bold uppercase tracking-[0.06em]"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              <Phone size={14} className="text-[#62D984]" /> Call now
            </a>
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              tabIndex={open ? 0 : -1}
              className="flex items-center justify-center gap-2 rounded-xl bg-[#62D984] py-3.5 text-[13px] font-bold uppercase tracking-[0.06em] text-[#072A45]"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Free survey <ArrowUpRight size={14} strokeWidth={2.75} />
            </Link>
          </div>
          <p className="mt-3.5 text-center text-[12.5px] font-normal tracking-wide text-white/55">
            +91 70405 06295 · info@evnsolar.in
          </p>
        </div>
      </div>
    </>
  )
}
