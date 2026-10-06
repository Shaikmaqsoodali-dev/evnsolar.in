'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import {
  ArrowUpRight,
  BadgeIndianRupee,
  Building2,
  CarFront,
  ChevronDown,
  Factory,
  LayoutGrid,
  Mail,
  Menu,
  Mountain,
  Newspaper,
  Phone,
  Sun,
  Tag,
  Wrench,
  X,
  Zap,
} from 'lucide-react'
import { IMG, LOGO_URL } from '@/lib/brand'
import { cn } from '@/lib/utils'

type DropKey = 'solar' | 'company' | null

const SOLAR_MENU = [
  { icon: Sun, title: 'Rooftop Solar', desc: '1–100 kW homes & shops', href: '/services' },
  { icon: Mountain, title: 'Ground-mounted', desc: 'Plants & farms', href: '/services' },
  { icon: CarFront, title: 'Solar carports', desc: 'Park + power + charge', href: '/services' },
  { icon: Wrench, title: 'O&M & AMC', desc: 'Cleaning, health checks', href: '/services' },
]

const COMPANY_MENU = [
  { icon: Building2, title: 'About us', desc: 'Team & credentials', href: '/about' },
  { icon: LayoutGrid, title: 'Projects', desc: 'Recent installs', href: '/projects' },
  { icon: Tag, title: 'Pricing', desc: 'Subsidy math, plain', href: '/pricing' },
  { icon: Newspaper, title: 'Blog', desc: 'Guides & updates', href: '/blog' },
]

const MOBILE_LINKS = [
  { n: '01', label: 'Home', href: '/' },
  { n: '02', label: 'About', href: '/about' },
  { n: '03', label: 'Solar', href: '/services' },
  { n: '04', label: 'EV Charging', href: '/ev-charging' },
  { n: '05', label: 'Projects', href: '/projects' },
  { n: '06', label: 'Pricing', href: '/pricing' },
  { n: '07', label: 'Blog', href: '/blog' },
  { n: '08', label: 'Contact', href: '/contact' },
]

function isActive(pathname: string, href: string) {
  if (href === '/') return pathname === '/'
  return pathname === href || pathname.startsWith(href + '/')
}

export function SiteHeader() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)
  const [drop, setDrop] = useState<DropKey>(null)
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
    setDrop(null)
    setOpen(false)
  }, [pathname])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setDrop(null)
        setOpen(false)
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  const solarActive = isActive(pathname, '/services')
  const companyActive =
    isActive(pathname, '/about') ||
    isActive(pathname, '/projects') ||
    isActive(pathname, '/pricing') ||
    isActive(pathname, '/blog')

  return (
    <>
      <header className="sticky top-0 z-50">
        {/* ── utility strip ── */}
        <div
          className={cn(
            'overflow-hidden bg-[#072A45] text-white transition-all duration-500',
            scrolled ? 'max-h-0' : 'max-h-12',
          )}
        >
          <div className="mx-auto flex h-9 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6">
            <p className="flex min-w-0 items-center gap-2 text-[12px] font-medium tracking-wide text-white/75">
              <span className="relative flex size-1.5 shrink-0">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#62D984] opacity-75" />
                <span className="relative inline-flex size-1.5 rounded-full bg-[#62D984]" />
              </span>
              <span className="truncate">
                MNRE-registered contractor · Nashik — Malegaon
              </span>
              <span className="hidden shrink-0 items-center gap-1 rounded-full border border-white/15 bg-white/5 px-2 py-0.5 text-[10.5px] font-bold uppercase tracking-[0.12em] text-[#62D984] md:inline-flex">
                ★ 4.9 Google
              </span>
            </p>
            <div className="flex shrink-0 items-center gap-4 text-[12px] font-medium text-white/75">
              <a
                href="mailto:info@evnsolar.in"
                className="hidden items-center gap-1.5 transition-colors hover:text-white sm:inline-flex"
              >
                <Mail size={12} className="text-[#62D984]" /> info@evnsolar.in
              </a>
              <a
                href="tel:+917040506295"
                className="inline-flex items-center gap-1.5 transition-colors hover:text-white"
              >
                <Phone size={12} className="text-[#62D984]" /> +91 70405 06295
              </a>
            </div>
          </div>
        </div>

        {/* ── floating nav ── */}
        <div className="px-3 pt-3 sm:px-5">
          <div
            className={cn(
              'relative mx-auto max-w-7xl overflow-visible rounded-2xl border transition-all duration-500',
              scrolled
                ? 'border-[#D9E2EA] bg-white/90 shadow-[0_16px_48px_-16px_rgba(7,42,69,0.28)] backdrop-blur-xl'
                : 'border-[#D9E2EA]/80 bg-white shadow-[0_10px_36px_-18px_rgba(7,42,69,0.25)]',
            )}
          >
            {/* signature gradient hairline */}
            <span
              aria-hidden
              className="pointer-events-none absolute inset-x-6 top-0 h-[2px] rounded-full bg-gradient-to-r from-transparent via-[#62D984] to-transparent opacity-80"
            />

            <div
              className={cn(
                'flex items-center justify-between gap-3 px-3 transition-all duration-500 sm:px-4',
                scrolled ? 'h-[68px]' : 'h-[76px]',
              )}
            >
              {/* brand — wide horizontal lockup, kept intact */}
              <Link href="/" className="group flex min-w-0 items-center gap-3" aria-label="EVN Solar home">
                <img
                  src={LOGO_URL}
                  alt="EVN Solar Energy Solutions"
                  className="h-11 w-auto shrink-0 object-contain transition-transform duration-500 group-hover:scale-[1.03] sm:h-12"
                />
                <span className="hidden min-w-0 flex-col leading-none xl:flex">
                  <span
                    className="truncate text-[19px] font-extrabold italic tracking-[-0.03em] text-[#072A45]"
                    style={{ fontFamily: 'var(--font-display)' }}
                  >
                    EVN Solar
                  </span>
                  <span className="mt-1 text-[10px] font-bold uppercase tracking-[0.22em] text-[#5B6E80]">
                    Rooftop · EV · O&amp;M
                  </span>
                </span>
              </Link>

              {/* desktop pill nav */}
              <nav
                aria-label="Primary"
                className="hidden items-center gap-1 rounded-full border border-[#D9E2EA]/70 bg-[#EDF3F7]/70 p-1.5 lg:flex"
                onMouseLeave={() => setDrop(null)}
              >
                <Link
                  href="/"
                  onMouseEnter={() => setDrop(null)}
                  className={cn(
                    'rounded-full px-4 py-2 text-[13px] font-bold uppercase tracking-[0.06em] transition-all duration-300',
                    pathname === '/'
                      ? 'bg-[#072A45] text-white shadow-[0_6px_16px_-6px_rgba(7,42,69,0.6)]'
                      : 'text-[#3E5162] hover:bg-white hover:text-[#072A45] hover:shadow-sm',
                  )}
                  style={{ fontFamily: 'var(--font-display)' }}
                >
                  Home
                </Link>

                {/* solar dropdown trigger */}
                <div className="relative" onMouseEnter={() => setDrop('solar')}>
                  <Link
                    href="/services"
                    aria-expanded={drop === 'solar'}
                    className={cn(
                      'flex items-center gap-1.5 rounded-full px-4 py-2 text-[13px] font-bold uppercase tracking-[0.06em] transition-all duration-300',
                      solarActive
                        ? 'bg-[#072A45] text-white shadow-[0_6px_16px_-6px_rgba(7,42,69,0.6)]'
                        : 'text-[#3E5162] hover:bg-white hover:text-[#072A45] hover:shadow-sm',
                    )}
                    style={{ fontFamily: 'var(--font-display)' }}
                  >
                    Solar
                    <ChevronDown
                      size={13}
                      strokeWidth={3}
                      className={cn('transition-transform duration-300', drop === 'solar' && 'rotate-180')}
                    />
                  </Link>
                </div>

                <Link
                  href="/ev-charging"
                  onMouseEnter={() => setDrop(null)}
                  className={cn(
                    'flex items-center gap-1.5 rounded-full px-4 py-2 text-[13px] font-bold uppercase tracking-[0.06em] transition-all duration-300',
                    isActive(pathname, '/ev-charging')
                      ? 'bg-[#072A45] text-white shadow-[0_6px_16px_-6px_rgba(7,42,69,0.6)]'
                      : 'text-[#3E5162] hover:bg-white hover:text-[#072A45] hover:shadow-sm',
                  )}
                  style={{ fontFamily: 'var(--font-display)' }}
                >
                  <Zap size={13} strokeWidth={2.75} className={isActive(pathname, '/ev-charging') ? 'text-[#62D984]' : 'text-[#33A94F]'} />
                  EV Charging
                </Link>

                {/* company dropdown trigger */}
                <div className="relative" onMouseEnter={() => setDrop('company')}>
                  <button
                    type="button"
                    aria-expanded={drop === 'company'}
                    onClick={() => setDrop(drop === 'company' ? null : 'company')}
                    className={cn(
                      'flex items-center gap-1.5 rounded-full px-4 py-2 text-[13px] font-bold uppercase tracking-[0.06em] transition-all duration-300',
                      companyActive
                        ? 'bg-[#072A45] text-white shadow-[0_6px_16px_-6px_rgba(7,42,69,0.6)]'
                        : 'text-[#3E5162] hover:bg-white hover:text-[#072A45] hover:shadow-sm',
                    )}
                    style={{ fontFamily: 'var(--font-display)' }}
                  >
                    Company
                    <ChevronDown
                      size={13}
                      strokeWidth={3}
                      className={cn('transition-transform duration-300', drop === 'company' && 'rotate-180')}
                    />
                  </button>
                </div>

                <Link
                  href="/contact"
                  onMouseEnter={() => setDrop(null)}
                  className={cn(
                    'rounded-full px-4 py-2 text-[13px] font-bold uppercase tracking-[0.06em] transition-all duration-300',
                    isActive(pathname, '/contact')
                      ? 'bg-[#072A45] text-white shadow-[0_6px_16px_-6px_rgba(7,42,69,0.6)]'
                      : 'text-[#3E5162] hover:bg-white hover:text-[#072A45] hover:shadow-sm',
                  )}
                  style={{ fontFamily: 'var(--font-display)' }}
                >
                  Contact
                </Link>
              </nav>

              {/* actions */}
              <div className="flex shrink-0 items-center gap-2">
                <a
                  href="tel:+917040506295"
                  aria-label="Call EVN Solar"
                  className="hidden size-10 place-items-center rounded-full border border-[#D9E2EA] text-[#072A45] transition-all hover:border-[#072A45] hover:bg-[#072A45] hover:text-[#62D984] xl:grid"
                >
                  <Phone size={15} />
                </a>
                <Link
                  href="/contact"
                  className="btn-shine group hidden items-center gap-2 rounded-xl bg-[#072A45] py-2.5 pl-5 pr-4 text-[13px] font-bold uppercase tracking-[0.07em] text-white transition-all duration-300 hover:bg-[#33A94F] hover:text-[#072A45] hover:shadow-[0_10px_24px_-8px_rgba(51,169,79,0.7)] sm:inline-flex"
                  style={{ fontFamily: 'var(--font-display)' }}
                >
                  Get a quote
                  <span className="grid size-6 place-items-center rounded-full bg-[#62D984] text-[#072A45] transition-colors duration-300 group-hover:bg-[#072A45] group-hover:text-[#62D984]">
                    <ArrowUpRight size={14} strokeWidth={2.75} />
                  </span>
                </Link>
                <button
                  onClick={() => setOpen(true)}
                  aria-label="Open menu"
                  className="grid size-10 place-items-center rounded-xl bg-[#072A45] text-white transition-transform active:scale-95 lg:hidden"
                >
                  <Menu size={18} />
                </button>
              </div>
            </div>

            {/* ── dropdown panels (anchored to floating card) ── */}
            <div onMouseLeave={() => setDrop(null)}>
              {/* SOLAR mega panel */}
              <div
                className={cn(
                  'absolute inset-x-3 top-[calc(100%+10px)] z-50 transition-all duration-300 sm:inset-x-4',
                  drop === 'solar'
                    ? 'visible translate-y-0 opacity-100'
                    : 'invisible -translate-y-2 opacity-0',
                )}
              >
                <div className="overflow-hidden rounded-2xl border border-[#D9E2EA] bg-white shadow-[0_32px_80px_-24px_rgba(7,42,69,0.4)]">
                  <div className="grid md:grid-cols-[1fr_280px]">
                    <div className="grid gap-1 p-3 sm:grid-cols-2">
                      {SOLAR_MENU.map((item) => (
                        <Link
                          key={item.title}
                          href={item.href}
                          onClick={() => setDrop(null)}
                          className="group flex items-start gap-3 rounded-xl p-3 transition-colors hover:bg-[#EDF3F7]"
                        >
                          <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-[#072A45] text-[#62D984] transition-colors duration-300 group-hover:bg-[#33A94F] group-hover:text-white">
                            <item.icon size={17} />
                          </span>
                          <span className="min-w-0">
                            <span className="flex items-center gap-1.5 text-[14px] font-bold text-[#072A45]" style={{ fontFamily: 'var(--font-display)' }}>
                              {item.title}
                              <ArrowUpRight size={13} className="text-[#33A94F] opacity-0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:opacity-100" />
                            </span>
                            <span className="mt-0.5 block text-[12.5px] font-normal text-[#5B6E80]">{item.desc}</span>
                          </span>
                        </Link>
                      ))}
                      <Link
                        href="/pricing"
                        onClick={() => setDrop(null)}
                        className="group flex items-center justify-between gap-3 rounded-xl bg-[#EDF3F7] p-3 transition-colors hover:bg-[#072A45] sm:col-span-2"
                      >
                        <span className="flex items-center gap-3">
                          <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-[#62D984] text-[#072A45] transition-colors group-hover:bg-white">
                            <BadgeIndianRupee size={17} />
                          </span>
                          <span className="text-[13.5px] font-bold text-[#072A45] transition-colors group-hover:text-white" style={{ fontFamily: 'var(--font-display)' }}>
                            ₹78,000 subsidy — check what you pay after MNRE
                          </span>
                        </span>
                        <ArrowUpRight size={16} className="shrink-0 text-[#33A94F] transition-colors group-hover:text-[#62D984]" />
                      </Link>
                    </div>
                    <div className="relative hidden min-h-[240px] overflow-hidden md:block">
                      <img src={IMG.rooftop} alt="Rooftop solar array" className="absolute inset-0 h-full w-full object-cover" />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#051E33]/95 via-[#051E33]/40 to-transparent" />
                      <div className="absolute inset-x-0 bottom-0 p-5">
                        <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#62D984]">Installed &amp; serviced</p>
                        <p className="mt-1 text-[22px] font-extrabold italic leading-tight text-white" style={{ fontFamily: 'var(--font-display)' }}>
                          3.2 MW across Maharashtra
                        </p>
                        <Link
                          href="/projects"
                          onClick={() => setDrop(null)}
                          className="mt-3 inline-flex items-center gap-1.5 rounded-full bg-white/15 px-3.5 py-2 text-[12px] font-bold uppercase tracking-[0.08em] text-white backdrop-blur transition-colors hover:bg-[#62D984] hover:text-[#072A45]"
                          style={{ fontFamily: 'var(--font-display)' }}
                        >
                          See installs <ArrowUpRight size={13} />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* COMPANY panel */}
              <div
                className={cn(
                  'absolute right-3 top-[calc(100%+10px)] z-50 w-[320px] transition-all duration-300 sm:right-4',
                  drop === 'company'
                    ? 'visible translate-y-0 opacity-100'
                    : 'invisible -translate-y-2 opacity-0',
                )}
              >
                <div className="overflow-hidden rounded-2xl border border-[#D9E2EA] bg-white p-2 shadow-[0_32px_80px_-24px_rgba(7,42,69,0.4)]">
                  {COMPANY_MENU.map((item) => (
                    <Link
                      key={item.title}
                      href={item.href}
                      onClick={() => setDrop(null)}
                      className="group flex items-center gap-3 rounded-xl p-3 transition-colors hover:bg-[#EDF3F7]"
                    >
                      <span className="grid size-9 shrink-0 place-items-center rounded-lg border border-[#D9E2EA] bg-white text-[#072A45] transition-colors duration-300 group-hover:border-[#072A45] group-hover:bg-[#072A45] group-hover:text-[#62D984]">
                        <item.icon size={15} />
                      </span>
                      <span className="min-w-0 flex-1">
                        <span className="block text-[14px] font-bold leading-tight text-[#072A45]" style={{ fontFamily: 'var(--font-display)' }}>
                          {item.title}
                        </span>
                        <span className="block text-[12px] font-normal text-[#5B6E80]">{item.desc}</span>
                      </span>
                      <ArrowUpRight size={14} className="shrink-0 text-[#D9E2EA] transition-all duration-300 group-hover:translate-x-0.5 group-hover:text-[#33A94F]" />
                    </Link>
                  ))}
                  <div className="mt-1 flex items-center gap-2 rounded-xl bg-[#072A45] p-3 text-white">
                    <Factory size={15} className="shrink-0 text-[#62D984]" />
                    <p className="text-[12px] font-medium leading-snug text-white/85">
                      Commercial plant? <Link href="/contact" onClick={() => setDrop(null)} className="font-bold text-[#62D984] underline-offset-2 hover:underline">Talk to an engineer →</Link>
                    </p>
                  </div>
                </div>
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
        {/* glow + grid texture */}
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
          <span className="flex items-center gap-2.5">
            <span className="grid h-10 place-items-center overflow-hidden rounded-xl bg-white px-2">
              <img src={LOGO_URL} alt="EVN Solar" className="h-8 w-auto object-contain" />
            </span>
            <span className="text-[16px] font-extrabold italic tracking-[-0.02em]" style={{ fontFamily: 'var(--font-display)' }}>
              EVN Solar
            </span>
          </span>
          <button
            onClick={() => setOpen(false)}
            aria-label="Close menu"
            className="grid size-10 place-items-center rounded-full border border-white/20 text-white transition-all hover:rotate-90 hover:bg-white/10"
          >
            <X size={18} />
          </button>
        </div>

        <nav className="relative mx-auto flex w-full max-w-7xl flex-1 flex-col justify-center gap-0.5 overflow-y-auto px-5" aria-label="Mobile">
          {MOBILE_LINKS.map((l, i) => {
            const active = pathname === l.href
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
                style={{ transitionDelay: open ? `${60 + i * 50}ms` : '0ms' }}
              >
                <span className={cn('text-[11px] font-bold tracking-[0.2em]', active ? 'text-[#62D984]' : 'text-white/35')}>
                  {l.n}
                </span>
                <span
                  className={cn(
                    'flex-1 text-[27px] font-extrabold italic leading-none tracking-[-0.02em] transition-colors',
                    active ? 'text-[#62D984]' : 'text-white group-active:text-[#62D984]',
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
                      : 'border-white/15 text-white/40 group-active:border-[#62D984] group-active:text-[#62D984]',
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
