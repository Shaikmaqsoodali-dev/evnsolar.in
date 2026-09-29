'use client'

import { useState } from 'react'
import {
  Sun, Zap, Leaf, BatteryCharging, PlugZap, Gauge,
  ArrowRight, Play, Check, Menu, X, Phone, Mail, MapPin,
  Globe, Share2, AtSign, Rss, Star, Wrench, Lightbulb,
  Mountain, Warehouse, CarFront, Headset, Quote,
  ShieldCheck, Cog, ChevronLeft, ChevronRight
} from 'lucide-react'

/* Brand source of truth — EV & SOLAR logo */
const LOGO_URL =
  'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/EV%20%26%20SOLAR%20LOGO%20final.jpg%20%284%29-mkVPCg09FJf5Yc550FUgAC2cI2EFi8.jpeg'

const IMG = {
  solarField: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=1400&q=80',
  evCharge: 'https://images.unsplash.com/photo-1593941707882-a5bba14938c7?auto=format&fit=crop&w=900&q=80',
  rooftop: 'https://images.unsplash.com/photo-1605980776566-0486c3ac7617?auto=format&fit=crop&w=800&q=80',
  ground: 'https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=800&q=80',
  carport: 'https://images.unsplash.com/photo-1592833159155-c62df1b65634?auto=format&fit=crop&w=800&q=80',
  panel: 'https://images.unsplash.com/photo-1613665813446-82a78c468a1d?auto=format&fit=crop&w=800&q=80',
  engineer1: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=700&q=80',
  engineer2: 'https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?auto=format&fit=crop&w=700&q=80',
  blog1: 'https://images.unsplash.com/photo-1548337138-e87d889cc369?auto=format&fit=crop&w=800&q=80',
  blog2: 'https://images.unsplash.com/photo-1521618755572-156ae0cdd74d?auto=format&fit=crop&w=800&q=80',
  blog3: 'https://images.unsplash.com/photo-1497440001374-f26997328c1b?auto=format&fit=crop&w=800&q=80',
}

const GRADIENT = 'linear-gradient(135deg, #0083CB 0%, #12A9E2 45%, #74BD6C 100%)'

function TopBar() {
  return (
    <div className="bg-[#0B1720] text-[12.5px] text-white/85">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-2">
        <div className="flex items-center gap-5">
          <span className="flex items-center gap-1.5"><Mail size={14} className="text-[#12A9E2]" /> info@evnsolar.in</span>
          <span className="hidden items-center gap-1.5 sm:flex"><Phone size={14} className="text-[#74BD6C]" /> +91 70405 06295</span>
        </div>
        <p className="hidden items-center gap-2 md:flex">
          <Zap size={13} className="text-[#74BD6C]" /> EV + Solar — Engineered for India
          <span className="rounded-full bg-[#0083CB] px-2.5 py-0.5 text-[11px] font-bold text-white">Get Subsidy Help</span>
        </p>
        <div className="flex items-center gap-2">
          {[Globe, Share2, AtSign, Rss].map((Icon, i) => (
            <a key={i} href="#top" aria-label="social link" className="grid size-6 place-items-center rounded-full bg-white/10 transition hover:bg-[#0083CB] hover:text-white">
              <Icon size={12} />
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}

function Navbar() {
  const [open, setOpen] = useState(false)
  const links: [string, string][] = [
    ['Home', '#top'],
    ['Solar', '#solutions'],
    ['EV Charging', '#ev'],
    ['Projects', '#work'],
    ['About', '#why'],
    ['Contact', '#contact'],
  ]
  return (
    <div className="sticky top-0 z-50 bg-[#F8FAFC]/90 px-3 pt-3 backdrop-blur sm:px-5">
      <nav className="mx-auto flex max-w-6xl items-center justify-between gap-4 rounded-2xl border border-[#DCE5EA] bg-white px-4 py-2.5 shadow-[0_10px_35px_rgba(11,23,32,0.08)]">
        <a href="#top" className="flex items-center gap-3">
          <img src={LOGO_URL} alt="EV & Solar — EVN Solar Energy Solutions" className="h-11 w-auto rounded-lg object-contain" />
          <span className="hidden flex-col leading-none sm:flex">
            <span className="text-[17px] font-extrabold tracking-tight text-[#0B1720]">
              EV<span className="text-[#0083CB]">&</span><span className="text-[#0083CB]">SOLAR</span>
            </span>
            <span className="mt-0.5 text-[9px] font-bold tracking-[0.14em] text-[#52616B]">EVN SOLAR ENERGY SOLUTIONS</span>
          </span>
        </a>
        <div className="hidden items-center gap-6 text-[14px] font-semibold text-[#52616B] lg:flex">
          {links.map(([l, h]) => (
            <a key={l} href={h} className="transition hover:text-[#0083CB] first:font-extrabold first:text-[#0B1720]">{l}</a>
          ))}
        </div>
        <div className="flex items-center gap-2">
          <a href="#contact" className="hidden rounded-full bg-[#0083CB] px-5 py-2.5 text-[13.5px] font-bold text-white transition hover:bg-[#006FAE] sm:block">
            Get Free Quote
          </a>
          <button onClick={() => setOpen(!open)} aria-label="menu" className="grid size-10 place-items-center rounded-xl border border-[#DCE5EA] text-[#0B1720] lg:hidden">
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>
      {open && (
        <div className="mx-auto mt-2 max-w-6xl rounded-2xl border border-[#DCE5EA] bg-white p-3 shadow-xl lg:hidden">
          {links.map(([l, h]) => (
            <a key={l} href={h} onClick={() => setOpen(false)} className="block rounded-lg px-3 py-2.5 font-semibold text-[#0B1720] hover:bg-[#F8FAFC]">{l}</a>
          ))}
          <a href="#contact" onClick={() => setOpen(false)} className="mt-2 block rounded-full bg-[#0083CB] px-5 py-3 text-center font-bold text-white">Get Free Quote</a>
        </div>
      )}
    </div>
  )
}

function Hero() {
  return (
    <section id="top" className="bg-[#F8FAFC] px-3 pt-4 sm:px-5">
      <div className="relative mx-auto max-w-6xl overflow-hidden rounded-[28px] border border-[#DCE5EA] bg-white">
        {/* selective gradient wash + grid */}
        <div className="pointer-events-none absolute inset-0" style={{ background: 'radial-gradient(700px 320px at 85% 10%, rgba(18,169,226,0.14), transparent), radial-gradient(600px 300px at 10% 90%, rgba(116,189,108,0.14), transparent)' }} />
        <div className="relative grid items-center gap-10 p-8 sm:p-12 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full border border-[#DCE5EA] bg-[#F8FAFC] px-3.5 py-1.5 text-[11px] font-extrabold tracking-[0.16em] text-[#0083CB]">
              <span className="size-2 rounded-full" style={{ background: GRADIENT }} /> EVN SOLAR ENERGY SOLUTIONS • EV + SOLAR
            </p>
            <h1 className="mt-5 text-[38px] font-extrabold leading-[1.04] tracking-tight text-[#0B1720] sm:text-[54px]">
              Charge forward.
              <br />
              <span className="bg-clip-text text-transparent" style={{ backgroundImage: GRADIENT }}>Powered by the sun.</span>
            </h1>
            <p className="mt-5 max-w-md text-[15.5px] leading-relaxed text-[#52616B]">
              Rooftop solar, ground-mounted plants, solar carports and EV charging — engineered as one clean-technology system for homes, businesses and fleets.
            </p>
            <div className="mt-7 flex flex-wrap items-center gap-3">
              <a href="#contact" className="inline-flex items-center gap-2 rounded-full bg-[#0083CB] px-7 py-3.5 text-sm font-bold text-white shadow-[0_12px_30px_rgba(0,131,203,0.35)] transition hover:bg-[#006FAE]">
                Get Free Site Assessment <ArrowRight size={17} />
              </a>
              <a href="#ev" className="inline-flex items-center gap-2 rounded-full border border-[#1F8A42]/30 bg-[#1F8A42]/5 px-6 py-3.5 text-sm font-bold text-[#1F8A42] transition hover:bg-[#1F8A42] hover:text-white">
                <CarFront size={18} /> Explore EV Charging
              </a>
            </div>
            <div className="mt-8 grid max-w-md grid-cols-3 gap-4 border-t border-[#DCE5EA] pt-6">
              {[
                ['25+', 'Years engineering'],
                ['1,000+', 'Projects delivered'],
                ['98%', 'Customer satisfaction'],
              ].map(([n, l]) => (
                <div key={l}>
                  <p className="bg-clip-text text-[26px] font-extrabold text-transparent" style={{ backgroundImage: GRADIENT }}>{n}</p>
                  <p className="mt-0.5 text-[12px] font-medium text-[#52616B]">{l}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="grid gap-4">
              <div className="relative overflow-hidden rounded-[22px] border border-[#DCE5EA] shadow-[0_20px_50px_rgba(0,131,203,0.15)]">
                <img src={IMG.solarField} alt="Solar plant" className="h-60 w-full object-cover sm:h-72" />
                <span className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full bg-white/95 px-3 py-1.5 text-[12px] font-bold text-[#0083CB]">
                  <Sun size={14} /> Solar Generation • Live
                </span>
              </div>
              <div className="grid grid-cols-[1fr_0.9fr] gap-4">
                <div className="relative overflow-hidden rounded-[20px] border border-[#DCE5EA]">
                  <img src={IMG.evCharge} alt="EV charging" className="h-44 w-full object-cover" />
                  <span className="absolute bottom-3 left-3 inline-flex items-center gap-1.5 rounded-full bg-[#0B1720]/90 px-3 py-1.5 text-[12px] font-bold text-white">
                    <PlugZap size={14} className="text-[#74BD6C]" /> 22 kW EV Charging
                  </span>
                </div>
                <div className="rounded-[20px] border border-[#DCE5EA] bg-[#0B1720] p-5 text-white">
                  <span className="grid size-10 place-items-center rounded-xl" style={{ background: GRADIENT }}><Zap size={20} className="text-white" /></span>
                  <p className="mt-3 text-[22px] font-extrabold">70%</p>
                  <p className="text-[12.5px] leading-snug text-white/70">Average grid-bill reduction with solar + smart charging</p>
                </div>
              </div>
            </div>
            <a href="#solutions" className="absolute -left-2 top-1/2 hidden -translate-y-1/2 items-center gap-2 rounded-full bg-white py-2 pl-2 pr-4 text-[13px] font-bold text-[#0B1720] shadow-xl xl:flex">
              <span className="grid size-10 place-items-center rounded-full bg-[#0083CB] text-white"><Play size={16} className="fill-white" /></span> How it works
            </a>
          </div>
        </div>

        <div className="relative flex flex-wrap items-center gap-x-8 gap-y-3 border-t border-[#DCE5EA] bg-[#F8FAFC] px-8 py-4 text-[12px] font-bold tracking-wide text-[#52616B] sm:px-12">
          <span className="flex items-center gap-2"><ShieldCheck size={16} className="text-[#0083CB]" /> MNRE-Aligned Engineering</span>
          <span className="flex items-center gap-2"><Cog size={16} className="text-[#0083CB]" /> 25-Yr Panel / 5-Yr Service Warranty</span>
          <span className="flex items-center gap-2"><Leaf size={16} className="text-[#1F8A42]" /> Net-Metering + Subsidy Support</span>
        </div>
      </div>
    </section>
  )
}

function Eyebrow({ children }: { children: string }) {
  return (
    <span className="inline-flex items-center gap-2 text-[11px] font-extrabold tracking-[0.18em] text-[#0083CB]">
      <span className="h-[2px] w-6 rounded-full" style={{ background: GRADIENT }} /> {children}
    </span>
  )
}

export default function Page() {
  const [tIndex, setTIndex] = useState(0)
  const testimonials = [
    { name: 'John Doe', role: 'Head of Operations, Logistics', text: 'EVN engineered solar + EV charging for our depot in one project. Generation monitoring and load management just works. Bills down 68% in six months.' },
    { name: 'Arita Benson', role: 'Homeowner, Nashik', text: '5kW rooftop with battery-ready inverter and a 7.4kW home EV charger. Clean install, subsidy paperwork handled, app shows every unit generated.' },
    { name: 'Rahul Sharma', role: 'Warehouse Owner, Malegaon', text: '120kW ground-mounted plant with scheduled EV fleet charging. Professional survey, safety-first execution and strong after-sales support.' },
  ]

  return (
    <main className="min-h-screen bg-[#F8FAFC] font-sans text-[#0B1720] antialiased">
      <TopBar />
      <Navbar />
      <Hero />

      {/* Sectors */}
      <section className="mx-auto max-w-6xl px-5 py-10">
        <div className="grid gap-3 rounded-[22px] border border-[#DCE5EA] bg-white p-4 shadow-sm sm:grid-cols-4">
          {[
            { icon: Sun, t: 'Residential', d: '1–10 kW rooftop' },
            { icon: Warehouse, t: 'Commercial', d: '10–500 kW plants' },
            { icon: Mountain, t: 'Industrial', d: 'MW-scale + O&M' },
            { icon: CarFront, t: 'EV & Fleet', d: 'AC + DC charging' },
          ].map(({ icon: Icon, t, d }) => (
            <div key={t} className="flex items-center gap-3 rounded-2xl bg-[#F8FAFC] px-4 py-3.5">
              <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-[#0083CB]/10 text-[#0083CB]"><Icon size={21} /></span>
              <div><p className="text-[14px] font-extrabold">{t}</p><p className="text-[12.5px] text-[#52616B]">{d}</p></div>
            </div>
          ))}
        </div>
      </section>

      {/* Solutions */}
      <section id="solutions" className="mx-auto max-w-6xl px-5 py-10 sm:py-14">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-xl">
            <Eyebrow>OUR SOLUTIONS</Eyebrow>
            <h2 className="mt-3 text-[30px] font-extrabold leading-tight tracking-tight sm:text-[38px]">One partner for sunlight <span className="text-[#0083CB]">to</span> <span className="text-[#1F8A42]">mobility.</span></h2>
            <p className="mt-3 text-[14.5px] leading-relaxed text-[#52616B]">Designed around load, space and growth — with engineering documentation, safety compliance and monitoring.</p>
          </div>
          <a href="#contact" className="inline-flex items-center gap-2 rounded-full border border-[#DCE5EA] bg-white px-5 py-3 text-[13px] font-bold text-[#0083CB] hover:border-[#0083CB]">Compare solutions <ArrowRight size={15} /></a>
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {[
            { img: IMG.rooftop, icon: Sun, tag: 'SOLAR', t: 'Rooftop Solar', d: 'High-efficiency mono PERC / TOPCon with shadow analysis and structure design.', specs: ['1–100 kW', 'On-grid / Hybrid'] },
            { img: IMG.ground, icon: Mountain, tag: 'SOLAR', t: 'Ground-Mounted', d: 'Land-optimized plants for farms, industry and large campuses.', specs: ['100 kW–2 MW', 'SCADA ready'] },
            { img: IMG.carport, icon: Warehouse, tag: 'SOLAR + EV', t: 'Solar Carports', d: 'Parking shade that generates power and pre-wires EV chargers.', specs: ['2–50 cars', 'EV-ready'] },
            { img: IMG.evCharge, icon: PlugZap, tag: 'EV CHARGING', t: 'EV Charging Infra', d: '7.4–60 kW AC/DC chargers with load balancing and billing.', specs: ['Home / Fleet', 'OCPP + App'] },
          ].map(({ img, icon: Icon, tag, t, d, specs }) => (
            <article key={t} className="group flex flex-col overflow-hidden rounded-[22px] border border-[#DCE5EA] bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(0,131,203,0.15)]">
              <div className="relative h-44 overflow-hidden">
                <img src={img} alt={t} className="h-full w-full object-cover transition group-hover:scale-105" />
                <span className="absolute left-4 top-4 rounded-full bg-[#0B1720]/85 px-3 py-1 text-[10.5px] font-extrabold tracking-wider text-white backdrop-blur">{tag}</span>
                <span className={`absolute -bottom-0 right-4 grid size-11 translate-y-1/2 place-items-center rounded-full text-white shadow-lg ${tag === 'EV CHARGING' || tag.includes('EV') ? 'bg-[#1F8A42]' : 'bg-[#0083CB]'}`}>
                  <Icon size={20} />
                </span>
              </div>
              <div className="flex flex-1 flex-col p-5 pt-6">
                <h3 className="text-[16.5px] font-extrabold">{t}</h3>
                <p className="mt-1.5 flex-1 text-[13.5px] leading-relaxed text-[#52616B]">{d}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {specs.map((s) => (
                    <span key={s} className="rounded-full border border-[#DCE5EA] bg-[#F8FAFC] px-2.5 py-1 text-[11.5px] font-bold text-[#0B1720]">{s}</span>
                  ))}
                </div>
                <a href="#contact" className="mt-4 inline-flex items-center gap-1.5 text-[13px] font-bold text-[#0083CB]">Get sizing <ArrowRight size={14} /></a>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Why */}
      <section id="why" className="border-y border-[#DCE5EA] bg-white py-14 sm:py-20">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 lg:grid-cols-2">
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <img src={IMG.engineer1} alt="Solar engineering" className="h-[340px] rounded-[22px] border border-[#DCE5EA] object-cover" />
              <div>
                <img src={IMG.engineer2} alt="EV installation" className="h-[250px] w-full rounded-[22px] border border-[#DCE5EA] object-cover" />
                <div className="mt-4 rounded-2xl border border-[#DCE5EA] p-4" style={{ background: 'linear-gradient(135deg, rgba(0,131,203,0.08), rgba(116,189,108,0.12))' }}>
                  <p className="flex items-center gap-2 text-[13px] font-extrabold text-[#0B1720]"><Leaf size={16} className="text-[#1F8A42]" /> Sustainability, engineered</p>
                  <p className="mt-1 text-[12.5px] text-[#52616B]">Generation + consumption designed together.</p>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-5 left-6 flex items-center gap-3 rounded-2xl bg-[#0B1720] px-5 py-3.5 text-white shadow-xl">
              <span className="grid size-10 place-items-center rounded-xl" style={{ background: GRADIENT }}><ShieldCheck size={20} /></span>
              <div><p className="text-[15px] font-extrabold">Safety-first execution</p><p className="text-[12px] text-white/60">Earthing • Protection • Compliance</p></div>
            </div>
          </div>
          <div>
            <Eyebrow>WHY EV & SOLAR</Eyebrow>
            <h2 className="mt-3 text-[30px] font-extrabold leading-tight sm:text-[38px]">More control over the energy you <span className="text-[#0083CB]">generate</span> and the miles you <span className="text-[#1F8A42]">drive.</span></h2>
            <p className="mt-4 max-w-lg text-[14.5px] leading-relaxed text-[#52616B]">We size solar for your real load — including EV charging — so you buy less grid power, handle outages better and plan fleet growth confidently.</p>
            <div className="mt-7 grid gap-5 sm:grid-cols-2">
              {[
                { icon: Gauge, t: 'Lower grid dependence', d: 'Generate daytime power and offset charging load.', c: '#0083CB' },
                { icon: BatteryCharging, t: 'Backup-ready design', d: 'Hybrid inverters + storage options for outages.', c: '#1F8A42' },
                { icon: Lightbulb, t: 'Smart monitoring', d: 'Plant + charger data in one app dashboard.', c: '#0083CB' },
                { icon: Leaf, t: 'Cleaner mobility', d: 'Drive on sunlight, cut fuel + emissions.', c: '#1F8A42' },
              ].map(({ icon: Icon, t, d, c }) => (
                <div key={t} className="flex gap-3">
                  <span className="grid size-11 shrink-0 place-items-center rounded-xl text-white" style={{ background: c }}><Icon size={20} /></span>
                  <div><p className="text-[14.5px] font-extrabold">{t}</p><p className="mt-1 text-[13px] leading-relaxed text-[#52616B]">{d}</p></div>
                </div>
              ))}
            </div>
            <div className="mt-7 flex flex-wrap gap-3">
              <a href="#contact" className="rounded-full bg-[#0083CB] px-7 py-3 text-sm font-bold text-white hover:bg-[#006FAE]">Start your project</a>
              <a href="#ev" className="rounded-full border border-[#DCE5EA] bg-white px-6 py-3 text-sm font-bold text-[#0B1720] hover:border-[#1F8A42] hover:text-[#1F8A42]">See EV range</a>
            </div>
          </div>
        </div>
      </section>

      {/* Energy flow */}
      <section id="ev" className="mx-auto max-w-6xl px-5 py-14 sm:py-20">
        <div className="grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <Eyebrow>THE EV & SOLAR APPROACH</Eyebrow>
            <h2 className="mt-3 text-[30px] font-extrabold leading-tight sm:text-[42px]">From sunlight <span className="bg-clip-text text-transparent" style={{ backgroundImage: GRADIENT }}>to the road.</span></h2>
            <p className="mt-4 max-w-md text-[14.5px] leading-relaxed text-[#52616B]">One energy loop: generate clean power on your roof or land, use it in your building, and carry it with you as electric miles.</p>
            <ul className="mt-6 space-y-3 text-[14px] font-medium text-[#0B1720]">
              {['DC fast + AC charging with dynamic load management', 'Solar-priority charging to maximise self-consumption', 'Billing, RFID and fleet reports for commercial sites'].map((li) => (
                <li key={li} className="flex items-start gap-2.5"><span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-[#1F8A42] text-white"><Check size={13} /></span>{li}</li>
              ))}
            </ul>
          </div>
          <div className="relative rounded-[24px] border border-[#DCE5EA] bg-white p-6 sm:p-8">
            <div className="absolute bottom-10 left-[39px] top-10 w-[3px] rounded-full sm:left-[47px]" style={{ background: GRADIENT }} />
            {[
              ['Sun', 'The source', Sun, '#0083CB'],
              ['Solar panels', 'Generate 440W+ TOPCon', Sun, '#12A9E2'],
              ['Clean energy', 'Power building load', Zap, '#0083CB'],
              ['EV charging', '7.4–60 kW OCPP', PlugZap, '#1F8A42'],
              ['Electric vehicle', 'Drive on sunlight', CarFront, '#74BD6C'],
            ].map(([t, s, Icon, c]) => {
              const I = Icon as typeof Sun
              return (
                <div key={t as string} className="relative flex items-center gap-5 py-3.5">
                  <span className="z-10 grid size-9 shrink-0 place-items-center rounded-full border-2 border-white bg-white text-white shadow-md sm:size-11" style={{ background: c as string }}>
                    <I size={19} />
                  </span>
                  <div><p className="text-[15.5px] font-extrabold">{t}</p><p className="text-[12px] font-bold uppercase tracking-wider text-[#52616B]">{s}</p></div>
                </div>
              )
            })}
            <div className="mt-4 rounded-2xl bg-[#F8FAFC] p-4 text-[13px] text-[#52616B]">
              <span className="font-extrabold text-[#0083CB]">Example:</span> 5 kW rooftop ≈ 20–22 units/day ≈ 120–150 EV km/day of clean driving potential.
            </div>
          </div>
        </div>
      </section>

      {/* Stats gradient band — selective use */}
      <section className="px-3 sm:px-5">
        <div className="mx-auto grid max-w-6xl gap-8 rounded-[26px] p-8 text-white sm:p-12 lg:grid-cols-[1fr_1.2fr]" style={{ background: GRADIENT }}>
          <div>
            <p className="text-[11px] font-extrabold tracking-[0.18em] text-white/85">PROVEN AT SCALE</p>
            <h2 className="mt-3 text-[28px] font-extrabold leading-tight sm:text-[36px]">Save the planet with numbers that matter.</h2>
            <a href="#contact" className="mt-6 inline-block rounded-full bg-white px-7 py-3 text-sm font-bold text-[#006FAE]">Contact Now</a>
          </div>
          <div className="grid grid-cols-3 gap-4">
            {[
              ['1,000+', 'Projects done'],
              ['800+', 'Happy clients'],
              ['2.4 MW+', 'Capacity installed'],
            ].map(([n, l]) => (
              <div key={l} className="rounded-2xl bg-white/15 p-5 backdrop-blur">
                <p className="text-[26px] font-extrabold sm:text-[32px]">{n}</p>
                <p className="mt-1 text-[12.5px] text-white/85">{l}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Work */}
      <section id="work" className="mx-auto max-w-6xl px-5 py-14 sm:py-20">
        <Eyebrow>HOW WE WORK</Eyebrow>
        <div className="mt-3 flex flex-wrap items-end justify-between gap-4">
          <h2 className="max-w-lg text-[30px] font-extrabold leading-tight sm:text-[38px]">Site survey to switch-on in 4 steps.</h2>
          <p className="max-w-sm text-[13.5px] text-[#52616B]">Transparent scope, DISCOM liaison, safe installation and handover with monitoring training.</p>
        </div>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { img: IMG.rooftop, t: 'Survey & shadow analysis', s: 'Load study + structure check' },
            { img: IMG.panel, t: 'Design & approvals', s: 'Single-line diagram + net-metering' },
            { img: IMG.engineer1, t: 'Install & test', s: 'Earthing, protection, commissioning' },
            { img: IMG.evCharge, t: 'Monitor & support', s: 'App onboarding + 5-yr service' },
          ].map(({ img, t, s }, i) => (
            <div key={t} className="group relative h-64 overflow-hidden rounded-[20px] border border-[#DCE5EA]">
              <img src={img} alt={t} className="h-full w-full object-cover transition group-hover:scale-105" />
              <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(11,23,32,0.88), transparent 60%)' }} />
              <span className="absolute left-4 top-4 rounded-full bg-white px-3 py-1 text-[12px] font-extrabold text-[#0083CB]">0{i + 1}</span>
              <div className="absolute bottom-4 left-4 right-4"><p className="font-extrabold text-white">{t}</p><p className="text-[12.5px] text-white/70">{s}</p></div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="border-y border-[#DCE5EA] bg-white py-14 sm:py-20">
        <div className="mx-auto max-w-6xl px-5">
          <div className="mx-auto max-w-xl text-center">
            <Eyebrow>SYSTEM SIZES</Eyebrow>
            <h2 className="mt-3 text-[30px] font-extrabold sm:text-[38px]">Choose your clean-power starting point</h2>
            <p className="mt-3 text-[14px] text-[#52616B]">Final pricing after site survey. Subsidy and EMI assistance available.</p>
          </div>
          <div className="mt-9 grid gap-5 md:grid-cols-3">
            {[
              { plan: 'Home Essential', price: '3 kW onwards', feat: ['Rooftop on-grid system', 'Generation monitoring app', 'Net-metering assistance', '5-yr service support'], cta: 'Get home quote', primary: false },
              { plan: 'Home + EV', price: '5 kW + 7.4 kW charger', feat: ['Solar + home EV charging', 'Load balancing + priority solar', 'Battery-ready hybrid option', 'Subsidy + EMI help', 'Priority support'], cta: 'Get EV bundle quote', primary: true },
              { plan: 'Commercial', price: '50 kW+ / Fleet', feat: ['Ground / shed / carport plants', 'DC fast + multi-point AC', 'Billing, RFID + fleet reports', 'O&M contracts'], cta: 'Talk to sales', primary: false },
            ].map(({ plan, price, feat, cta, primary }) => (
              <div key={plan} className={`flex flex-col overflow-hidden rounded-[22px] border bg-white ${primary ? 'border-[#0083CB] shadow-[0_20px_60px_rgba(0,131,203,0.22)]' : 'border-[#DCE5EA] shadow-sm'}`}>
                <div className={`px-6 py-5 text-center ${primary ? 'text-white' : 'bg-[#F8FAFC]'}`} style={primary ? { background: GRADIENT } : undefined}>
                  <p className="text-[14px] font-extrabold">{plan}</p>
                  <p className={`mt-2 inline-block rounded-full px-4 py-1.5 text-[14px] font-extrabold ${primary ? 'bg-white text-[#006FAE]' : 'bg-[#0083CB]/10 text-[#0083CB]'}`}>{price}</p>
                </div>
                <ul className="flex-1 space-y-3 p-6 text-[13.5px] text-[#0B1720]">
                  {feat.map((f) => (
                    <li key={f} className="flex items-start gap-2.5"><span className={`mt-0.5 grid size-5 shrink-0 place-items-center rounded-full text-white ${primary ? 'bg-[#1F8A42]' : 'bg-[#0083CB]'}`}><Check size={12} /></span>{f}</li>
                  ))}
                </ul>
                <div className="px-6 pb-6">
                  <a href="#contact" className={`block rounded-full py-3 text-center text-sm font-bold transition ${primary ? 'bg-[#0083CB] text-white hover:bg-[#006FAE]' : 'bg-[#F8FAFC] text-[#0083CB] ring-1 ring-[#DCE5EA] hover:bg-[#0083CB] hover:text-white'}`}>{cta}</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials + blog */}
      <section className="mx-auto max-w-6xl px-5 py-14 sm:py-20">
        <Eyebrow>CUSTOMER STORIES</Eyebrow>
        <h2 className="mt-3 max-w-lg text-[30px] font-extrabold leading-tight sm:text-[36px]">Trusted for engineering, not just installation.</h2>
        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {[testimonials[tIndex % 3], testimonials[(tIndex + 1) % 3]].map((t, i) => (
            <figure key={i} className="rounded-[20px] border border-[#DCE5EA] bg-white p-7 shadow-sm">
              <div className="flex gap-1">{[1, 2, 3, 4, 5].map((s) => <Star key={s} size={15} className="fill-[#0083CB] text-[#0083CB]" />)}</div>
              <blockquote className="mt-4 text-[14px] leading-relaxed text-[#52616B]">&ldquo;{t.text}&rdquo;</blockquote>
              <figcaption className="mt-5 flex items-center gap-3">
                <span className="grid size-11 place-items-center rounded-full font-bold text-white" style={{ background: GRADIENT }}>{t.name[0]}</span>
                <div><p className="text-[14px] font-extrabold">{t.name}</p><p className="text-[12px] text-[#52616B]">{t.role}</p></div>
                <Quote size={22} className="ml-auto text-[#0083CB]/20" />
              </figcaption>
            </figure>
          ))}
        </div>
        <div className="mt-6 flex items-center gap-3">
          <button onClick={() => setTIndex((v) => (v + 2) % 3)} aria-label="prev" className="grid size-9 place-items-center rounded-full border border-[#DCE5EA] bg-white"><ChevronLeft size={17} /></button>
          <button onClick={() => setTIndex((v) => (v + 1) % 3)} aria-label="next" className="grid size-9 place-items-center rounded-full bg-[#0083CB] text-white"><ChevronRight size={17} /></button>
        </div>

        <div id="blog" className="mt-14">
          <Eyebrow>KNOWLEDGE HUB</Eyebrow>
          <h2 className="mt-3 text-[26px] font-extrabold sm:text-[30px]">Solar + EV guides</h2>
          <div className="mt-6 grid gap-5 md:grid-cols-3">
            {[
              { img: IMG.blog1, t: 'How much solar do you need for an EV?' },
              { img: IMG.blog2, t: 'On-grid vs hybrid for homes with EVs' },
              { img: IMG.blog3, t: 'Commercial solar + fleet charging ROI' },
            ].map(({ img, t }) => (
              <article key={t} className="group overflow-hidden rounded-[20px] border border-[#DCE5EA] bg-white">
                <div className="h-48 overflow-hidden"><img src={img} alt={t} className="h-full w-full object-cover transition group-hover:scale-105" /></div>
                <div className="p-5">
                  <p className="text-[11px] font-extrabold tracking-wider text-[#0083CB]">GUIDE • 8 MIN READ</p>
                  <h3 className="mt-2 font-extrabold leading-snug">{t}</h3>
                  <a href="#contact" className="mt-3 inline-flex items-center gap-1.5 text-[13px] font-bold text-[#1F8A42]">Ask our engineers <ArrowRight size={14} /></a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA — gradient emphasis */}
      <section className="px-3 pb-4 sm:px-5">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-6 rounded-[26px] p-8 text-white sm:p-12" style={{ background: 'linear-gradient(135deg, #0B1720 0%, #0083CB 55%, #1F8A42 100%)' }}>
          <div className="max-w-xl">
            <p className="text-[11px] font-extrabold tracking-[0.18em] text-white/75">READY WHEN YOU ARE</p>
            <h2 className="mt-3 text-[28px] font-extrabold leading-tight sm:text-[38px]">Generate your own energy. Drive on sunlight.</h2>
            <p className="mt-3 text-[14.5px] text-white/75">Share your monthly bill and parking/terrace photos — we&apos;ll respond with system size, generation estimate and subsidy breakup.</p>
          </div>
          <div className="flex flex-col gap-3">
            <a href="mailto:mail@evnsolar.in" className="rounded-full bg-white px-8 py-3.5 text-center text-sm font-bold text-[#006FAE]">Get Free Quote</a>
            <a href="tel:+917040506295" className="flex items-center justify-center gap-2 text-sm font-bold text-white"><Phone size={16} /> +91 70405 06295</a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="mt-4 bg-[#0B1720] text-white">
        <div className="mx-auto grid max-w-6xl gap-4 px-5 py-8 sm:grid-cols-3">
          {[
            { icon: Mail, t: 'Support & Email', d: 'info@evnsolar.in • mail@evnsolar.in' },
            { icon: Headset, t: 'Customer Support', d: '+91 70405 06295 (9am–7pm)' },
            { icon: MapPin, t: 'Our Location', d: '79 Mahada Colony, Malegaon 423203' },
          ].map(({ icon: Icon, t, d }) => (
            <div key={t} className="flex items-center gap-3 rounded-2xl bg-white/5 p-4 ring-1 ring-white/10">
              <span className="grid size-11 shrink-0 place-items-center rounded-xl" style={{ background: GRADIENT }}><Icon size={20} /></span>
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
                  <a key={i} href="#top" aria-label="social" className="grid size-8 place-items-center rounded-full bg-white/10 transition hover:bg-[#0083CB]"><Icon size={14} /></a>
                ))}
              </div>
            </div>
            {[
              ['Company', ['Home', 'About Us', 'Projects', 'Blog', 'Contact']],
              ['Solutions', ['Rooftop Solar', 'Ground Solar', 'Solar Carport', 'EV Charging', 'O&M Support']],
              ['Support', ['Subsidy Help', 'Net-Metering', 'Warranty', 'Service', 'Privacy Policy']],
            ].map(([title, links]) => (
              <div key={title as string}>
                <p className="font-extrabold">{title}</p>
                <ul className="mt-4 space-y-2.5 text-[13.5px] text-white/60">
                  {(links as string[]).map((l) => <li key={l}><a href="#top" className="transition hover:text-[#12A9E2]">{l}</a></li>)}
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

      <a href="tel:+917040506295" aria-label="call" className="fixed bottom-5 right-5 z-50 grid size-13 place-items-center rounded-full bg-[#0083CB] p-3.5 text-white shadow-[0_15px_40px_rgba(0,131,203,0.45)] transition hover:bg-[#006FAE]">
        <Phone size={22} />
      </a>
    </main>
  )
}
