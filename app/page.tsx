'use client'

import Link from 'next/link'
import { useState } from 'react'
import {
  Sun, Zap, ArrowRight, Play, Check, Star, Quote, ChevronLeft, ChevronRight,
  Mountain, Warehouse, CarFront, PlugZap, BatteryCharging, Lightbulb, Leaf,
  ShieldCheck, Cog, Gauge,
} from 'lucide-react'
import { GRADIENT, IMG } from '@/lib/brand'
import { Eyebrow, CtaBand } from '@/components/site-chrome'

export default function HomePage() {
  const [tIndex, setTIndex] = useState(0)
  const testimonials = [
    { name: 'John Doe', role: 'Head of Operations, Logistics', text: 'EVN engineered solar + EV charging for our depot in one project. Generation monitoring and load management just works. Bills down 68% in six months.' },
    { name: 'Arita Benson', role: 'Homeowner, Nashik', text: '5kW rooftop with battery-ready inverter and a 7.4kW home EV charger. Clean install, subsidy paperwork handled, app shows every unit generated.' },
    { name: 'Rahul Sharma', role: 'Warehouse Owner, Malegaon', text: '120kW ground-mounted plant with scheduled EV fleet charging. Professional survey, safety-first execution and strong after-sales support.' },
  ]

  return (
    <main className="bg-[#F8FAFC]">
      {/* HERO */}
      <section className="bg-[#F8FAFC] px-3 pt-4 sm:px-5">
        <div className="relative mx-auto max-w-6xl overflow-hidden rounded-[28px] border border-[#DCE5EA] bg-white">
          <div className="pointer-events-none absolute inset-0" style={{ background: 'radial-gradient(700px 320px at 85% 10%, rgba(18,169,226,0.14), transparent), radial-gradient(600px 300px at 10% 90%, rgba(116,189,108,0.14), transparent)' }} />
          <div className="relative grid items-center gap-10 p-8 sm:p-12 lg:grid-cols-[1.05fr_0.95fr]">
            <div>
              <p className="inline-flex items-center gap-2 rounded-full border border-[#DCE5EA] bg-[#F8FAFC] px-3.5 py-1.5 text-[11px] font-extrabold tracking-[0.16em] text-[#0083CB]">
                <span className="size-2 rounded-full" style={{ background: GRADIENT }} /> EVN SOLAR ENERGY SOLUTIONS • EV + SOLAR
              </p>
              <h1 className="mt-5 text-[38px] font-extrabold leading-[1.04] tracking-tight sm:text-[54px]">
                Charge forward.<br />
                <span className="bg-clip-text text-transparent" style={{ backgroundImage: GRADIENT }}>Powered by the sun.</span>
              </h1>
              <p className="mt-5 max-w-md text-[15.5px] leading-relaxed text-[#52616B]">
                Rooftop solar, ground-mounted plants, solar carports and EV charging — engineered as one clean-technology system.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <Link href="/contact" className="inline-flex items-center gap-2 rounded-full bg-[#0083CB] px-7 py-3.5 text-sm font-bold text-white shadow-[0_12px_30px_rgba(0,131,203,0.35)] hover:bg-[#006FAE]">
                  Get Free Site Assessment <ArrowRight size={17} />
                </Link>
                <Link href="/ev-charging" className="inline-flex items-center gap-2 rounded-full border border-[#1F8A42]/30 bg-[#1F8A42]/5 px-6 py-3.5 text-sm font-bold text-[#1F8A42] hover:bg-[#1F8A42] hover:text-white">
                  <CarFront size={18} /> Explore EV Charging
                </Link>
              </div>
              <div className="mt-8 grid max-w-md grid-cols-3 gap-4 border-t border-[#DCE5EA] pt-6">
                {[['25+', 'Years engineering'], ['1,000+', 'Projects delivered'], ['98%', 'Satisfaction']].map(([n, l]) => (
                  <div key={l}>
                    <p className="bg-clip-text text-[26px] font-extrabold text-transparent" style={{ backgroundImage: GRADIENT }}>{n}</p>
                    <p className="mt-0.5 text-[12px] font-medium text-[#52616B]">{l}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="grid gap-4">
                <div className="relative overflow-hidden rounded-[22px] border border-[#DCE5EA]">
                  <img src={IMG.solarField} alt="Solar plant" className="h-60 w-full object-cover sm:h-72" />
                  <span className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full bg-white/95 px-3 py-1.5 text-[12px] font-bold text-[#0083CB]"><Sun size={14} /> Solar Generation • Live</span>
                </div>
                <div className="grid grid-cols-[1fr_0.9fr] gap-4">
                  <div className="relative overflow-hidden rounded-[20px] border border-[#DCE5EA]">
                    <img src={IMG.evCharge} alt="EV charging" className="h-44 w-full object-cover" />
                    <span className="absolute bottom-3 left-3 inline-flex items-center gap-1.5 rounded-full bg-[#0B1720]/90 px-3 py-1.5 text-[12px] font-bold text-white"><PlugZap size={14} className="text-[#74BD6C]" /> 22 kW EV Charging</span>
                  </div>
                  <div className="rounded-[20px] bg-[#0B1720] p-5 text-white">
                    <span className="grid size-10 place-items-center rounded-xl" style={{ background: GRADIENT }}><Zap size={20} /></span>
                    <p className="mt-3 text-[22px] font-extrabold">70%</p>
                    <p className="text-[12.5px] leading-snug text-white/70">Average grid-bill reduction with solar + smart charging</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="relative flex flex-wrap gap-x-8 gap-y-3 border-t border-[#DCE5EA] bg-[#F8FAFC] px-8 py-4 text-[12px] font-bold text-[#52616B] sm:px-12">
            <span className="flex items-center gap-2"><ShieldCheck size={16} className="text-[#0083CB]" /> MNRE-Aligned Engineering</span>
            <span className="flex items-center gap-2"><Cog size={16} className="text-[#0083CB]" /> 25-Yr Panel / 5-Yr Service Warranty</span>
            <span className="flex items-center gap-2"><Leaf size={16} className="text-[#1F8A42]" /> Net-Metering + Subsidy Support</span>
          </div>
        </div>
      </section>

      {/* SECTORS */}
      <section className="mx-auto max-w-6xl px-5 py-10">
        <div className="grid gap-3 rounded-[22px] border border-[#DCE5EA] bg-white p-4 shadow-sm sm:grid-cols-4">
          {[
            { icon: Sun, t: 'Residential', d: '1–10 kW rooftop' },
            { icon: Warehouse, t: 'Commercial', d: '10–500 kW plants' },
            { icon: Mountain, t: 'Industrial', d: 'MW-scale + O&M' },
            { icon: CarFront, t: 'EV & Fleet', d: 'AC + DC charging' },
          ].map(({ icon: Icon, t, d }) => (
            <div key={t} className="flex items-center gap-3 rounded-2xl bg-[#F8FAFC] px-4 py-3.5">
              <span className="grid size-11 place-items-center rounded-xl bg-[#0083CB]/10 text-[#0083CB]"><Icon size={21} /></span>
              <div><p className="text-[14px] font-extrabold">{t}</p><p className="text-[12.5px] text-[#52616B]">{d}</p></div>
            </div>
          ))}
        </div>
      </section>

      {/* SOLUTIONS PREVIEW */}
      <section className="mx-auto max-w-6xl px-5 py-8">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div className="max-w-xl">
            <Eyebrow>OUR SOLUTIONS</Eyebrow>
            <h2 className="mt-3 text-[30px] font-extrabold tracking-tight sm:text-[38px]">Sunlight <span className="text-[#0083CB]">to</span> <span className="text-[#1F8A42]">mobility.</span></h2>
          </div>
          <Link href="/services" className="inline-flex items-center gap-2 rounded-full border border-[#DCE5EA] bg-white px-5 py-3 text-[13px] font-bold text-[#0083CB]">All solar services <ArrowRight size={15} /></Link>
        </div>
        <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {[
            { img: IMG.rooftop, icon: Sun, tag: 'SOLAR', t: 'Rooftop Solar', d: 'High-efficiency TOPCon with shadow analysis.', href: '/services' },
            { img: IMG.ground, icon: Mountain, tag: 'SOLAR', t: 'Ground-Mounted', d: 'Land-optimized plants, SCADA ready.', href: '/services' },
            { img: IMG.carport, icon: Warehouse, tag: 'SOLAR + EV', t: 'Solar Carports', d: 'Parking shade that generates power.', href: '/services' },
            { img: IMG.evCharge, icon: PlugZap, tag: 'EV CHARGING', t: 'EV Charging', d: '7.4–60 kW AC/DC with load balancing.', href: '/ev-charging' },
          ].map(({ img, icon: Icon, tag, t, d, href }) => (
            <article key={t} className="group overflow-hidden rounded-[22px] border border-[#DCE5EA] bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(0,131,203,0.15)]">
              <div className="relative h-44 overflow-hidden">
                <img src={img} alt={t} className="h-full w-full object-cover transition group-hover:scale-105" />
                <span className="absolute left-4 top-4 rounded-full bg-[#0B1720]/85 px-3 py-1 text-[10.5px] font-extrabold tracking-wider text-white">{tag}</span>
              </div>
              <div className="p-5">
                <p className="flex items-center gap-2 font-extrabold"><Icon size={17} className="text-[#0083CB]" /> {t}</p>
                <p className="mt-1.5 text-[13.5px] text-[#52616B]">{d}</p>
                <Link href={href} className="mt-3 inline-flex items-center gap-1.5 text-[13px] font-bold text-[#0083CB]">Learn more <ArrowRight size={14} /></Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* WHY PREVIEW */}
      <section className="border-y border-[#DCE5EA] bg-white py-14">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 lg:grid-cols-2">
          <img src={IMG.engineer1} alt="Engineering" className="h-[360px] rounded-[22px] border border-[#DCE5EA] object-cover" />
          <div>
            <Eyebrow>WHY EV & SOLAR</Eyebrow>
            <h2 className="mt-3 text-[30px] font-extrabold leading-tight">Engineered for generation <span className="text-[#0083CB]">and</span> <span className="text-[#1F8A42]">mobility.</span></h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {[
                { icon: Gauge, t: 'Lower grid dependence', c: '#0083CB' },
                { icon: BatteryCharging, t: 'Backup-ready design', c: '#1F8A42' },
                { icon: Lightbulb, t: 'Smart monitoring', c: '#0083CB' },
                { icon: Leaf, t: 'Cleaner mobility', c: '#1F8A42' },
              ].map(({ icon: Icon, t, c }) => (
                <p key={t} className="flex items-center gap-3 rounded-2xl border border-[#DCE5EA] bg-[#F8FAFC] p-4 text-[14px] font-bold">
                  <span className="grid size-10 place-items-center rounded-xl text-white" style={{ background: c }}><Icon size={19} /></span>{t}
                </p>
              ))}
            </div>
            <div className="mt-6 flex gap-3">
              <Link href="/about" className="rounded-full bg-[#0083CB] px-6 py-3 text-sm font-bold text-white hover:bg-[#006FAE]">About us</Link>
              <Link href="/projects" className="rounded-full border border-[#DCE5EA] px-6 py-3 text-sm font-bold hover:border-[#0083CB] hover:text-[#0083CB]">See projects</Link>
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="px-3 py-8 sm:px-5">
        <div className="mx-auto grid max-w-6xl gap-8 rounded-[26px] p-8 text-white sm:p-12 lg:grid-cols-[1fr_1.2fr]" style={{ background: GRADIENT }}>
          <div>
            <p className="text-[11px] font-extrabold tracking-[0.18em] text-white/85">PROVEN AT SCALE</p>
            <h2 className="mt-3 text-[28px] font-extrabold leading-tight">Numbers that matter.</h2>
            <Link href="/contact" className="mt-6 inline-flex items-center gap-2 rounded-full bg-white px-7 py-3 text-sm font-bold text-[#006FAE]">Contact Now <ArrowRight size={15} /></Link>
          </div>
          <div className="grid grid-cols-3 gap-4">
            {[['1,000+', 'Projects done'], ['800+', 'Happy clients'], ['2.4 MW+', 'Installed']].map(([n, l]) => (
              <div key={l} className="rounded-2xl bg-white/15 p-5 backdrop-blur">
                <p className="text-[26px] font-extrabold">{n}</p>
                <p className="mt-1 text-[12.5px] text-white/85">{l}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="mx-auto max-w-6xl px-5 py-10">
        <Eyebrow>CUSTOMER STORIES</Eyebrow>
        <h2 className="mt-3 max-w-lg text-[30px] font-extrabold">Trusted for engineering, not just installation.</h2>
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
          <Link href="/projects" className="mr-2 inline-flex items-center gap-2 text-[13px] font-bold text-[#0083CB]">View case studies <ArrowRight size={14} /></Link>
          <button onClick={() => setTIndex((v) => (v + 2) % 3)} aria-label="prev" className="grid size-9 place-items-center rounded-full border border-[#DCE5EA] bg-white"><ChevronLeft size={17} /></button>
          <button onClick={() => setTIndex((v) => (v + 1) % 3)} aria-label="next" className="grid size-9 place-items-center rounded-full bg-[#0083CB] text-white"><ChevronRight size={17} /></button>
        </div>
      </section>

      <CtaBand />
      <div className="h-4" />
    </main>
  )
}
