'use client'

import { useState } from 'react'
import {
  Sun, Zap, Leaf, Recycle, BatteryCharging, PlugZap, Gauge,
  ArrowRight, Play, Check, Menu, X, Phone, Mail, MapPin,
  Globe, Share2, AtSign, Rss, Star, Wrench, Lightbulb,
  Mountain, Warehouse, CarFront, Headset, Quote, ChevronLeft, ChevronRight
} from 'lucide-react'

const IMG = {
  heroWoman: 'https://images.unsplash.com/photo-1592833159155-c62df1b65634?auto=format&fit=crop&w=800&q=80',
  heroBg: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=1600&q=80',
  fieldTurbine: 'https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=1400&q=80',
  maintenance: 'https://images.unsplash.com/photo-1559302995-f1d7e0b9c1d5?auto=format&fit=crop&w=800&q=80',
  saving: 'https://images.unsplash.com/photo-1521618755572-156ae0cdd74d?auto=format&fit=crop&w=800&q=80',
  install: 'https://images.unsplash.com/photo-1613665813446-82a78c468a1d?auto=format&fit=crop&w=800&q=80',
  worker1: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=600&q=80',
  worker2: 'https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?auto=format&fit=crop&w=600&q=80',
  manSolar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=700&q=80',
  panelClose: 'https://images.unsplash.com/photo-1593941707882-a5bba14938c7?auto=format&fit=crop&w=600&q=80',
  roof: 'https://images.unsplash.com/photo-1605980776566-0486c3ac7617?auto=format&fit=crop&w=600&q=80',
  sunset: 'https://images.unsplash.com/photo-1497440001374-f26997328c1b?auto=format&fit=crop&w=600&q=80',
  blog1: 'https://images.unsplash.com/photo-1548337138-e87d889cc369?auto=format&fit=crop&w=800&q=80',
  blog2: 'https://images.unsplash.com/photo-1591123120675-6f7f1aae0e5b?auto=format&fit=crop&w=800&q=80',
  blog3: 'https://images.unsplash.com/photo-1584276433295-4b49a252e5b7?auto=format&fit=crop&w=800&q=80',
}

function TopBar() {
  return (
    <div className="bg-[#0c2310] text-white/90 text-[12.5px]">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-2">
        <div className="flex items-center gap-5">
          <span className="flex items-center gap-1.5"><Mail size={14} className="text-[#8DC63F]" /> info@evnsolar.in</span>
          <span className="hidden items-center gap-1.5 sm:flex"><Phone size={14} className="text-[#8DC63F]" /> +91 70405 06295</span>
        </div>
        <p className="hidden items-center gap-2 md:flex">⚡ Purchase Today & Enjoy UP TO 20% OFF <span className="rounded-full bg-[#8DC63F] px-2.5 py-0.5 text-[11px] font-bold text-[#0c2310]">Get Now</span></p>
        <div className="flex items-center gap-2">
          {[Globe, Share2, AtSign, Rss].map((Icon, i) => (
            <a key={i} href="#top" className="grid size-6 place-items-center rounded-full bg-white/10 hover:bg-[#8DC63F] hover:text-[#0c2310] transition"><Icon size={12} /></a>
          ))}
        </div>
      </div>
    </div>
  )
}

function Navbar() {
  const [open, setOpen] = useState(false)
  return (
    <div className="sticky top-0 z-50 px-3 pt-3 sm:px-5">
      <nav className="mx-auto flex max-w-6xl items-center justify-between gap-4 rounded-2xl bg-white/95 px-4 py-3 shadow-[0_10px_40px_rgba(12,35,16,0.12)] backdrop-blur">
        <a href="#top" className="flex items-center gap-2">
          <span className="grid size-9 place-items-center rounded-xl bg-[#8DC63F] text-white"><Sun size={20} /></span>
          <span className="text-xl font-extrabold tracking-tight">Solar<span className="text-[#5da32a]">.</span></span>
        </a>
        <div className="hidden items-center gap-7 text-[14px] font-medium text-neutral-700 lg:flex">
          {['Home', 'About Us', 'Services', 'Projects', 'Pages', 'Blog'].map((l, i) => (
            <a key={l} href={`#${['top', 'harvest', 'solutions', 'work', 'pricing', 'blog'][i]}`} className={i === 0 ? 'font-bold text-black' : 'hover:text-[#5da32a]'}>{l}</a>
          ))}
        </div>
        <div className="flex items-center gap-2">
          <a href="#contact" className="hidden rounded-full bg-[#7AC143] px-5 py-2.5 text-[13.5px] font-bold text-white hover:bg-[#5da32a] transition sm:block">Contact Us</a>
          <button onClick={() => setOpen(!open)} className="grid size-10 place-items-center rounded-xl border lg:hidden">{open ? <X size={20} /> : <Menu size={20} />}</button>
        </div>
      </nav>
      {open && (
        <div className="mx-auto mt-2 max-w-6xl rounded-2xl bg-white p-4 shadow-xl lg:hidden">
          {['Home', 'About Us', 'Services', 'Projects', 'Pages', 'Blog'].map((l) => (
            <a key={l} href="#top" onClick={() => setOpen(false)} className="block rounded-lg px-3 py-2.5 font-medium hover:bg-lime-50">{l}</a>
          ))}
          <a href="#contact" className="mt-2 block rounded-full bg-[#7AC143] px-5 py-3 text-center font-bold text-white">Contact Us</a>
        </div>
      )}
    </div>
  )
}

function Hero() {
  return (
    <section id="top" className="px-3 pt-3 sm:px-5">
      <div className="relative mx-auto max-w-6xl overflow-hidden rounded-[28px] bg-[#0c2310]">
        <img src={IMG.heroBg} alt="" className="absolute inset-0 h-full w-full object-cover opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0c2310] via-[#0c2310]/85 to-[#0c2310]/20" />
        <div className="relative grid items-center gap-8 p-8 sm:p-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="mb-4 inline-flex items-center gap-2 text-[11px] font-bold tracking-[0.2em] text-lime-300">☀ WELCOME TO SOLAR</p>
            <h1 className="text-[38px] font-extrabold leading-[1.05] tracking-tight text-white sm:text-[52px]">
              Power Your Future<br />with Reliable<br /><span className="text-[#8DC63F]">Solar Solutions</span>
            </h1>
            <p className="mt-5 max-w-md text-[15px] leading-relaxed text-white/70">
              Harness the power of the sun with cutting-edge solar technology. Save on bills, reduce carbon footprint and enjoy energy independence.
            </p>
            <div className="mt-7 flex flex-wrap items-center gap-4">
              <a href="#harvest" className="rounded-full bg-[#7AC143] px-7 py-3 text-sm font-bold text-white hover:bg-[#5da32a]">Learn More</a>
              <a href="#harvest" className="group flex items-center gap-3 text-sm font-semibold text-white">
                <span className="grid size-12 place-items-center rounded-full border border-white/30 bg-white/10 backdrop-blur group-hover:bg-[#7AC143]"><Play size={18} className="fill-white" /></span>
                Watch Video
              </a>
            </div>
            <div className="mt-8 flex gap-8 border-t border-white/15 pt-6 text-white">
              {[['25+', 'Years Exp.'], ['12k+', 'Projects Done'], ['98%', 'Happy Clients']].map(([n, l]) => (
                <div key={l}><p className="text-2xl font-extrabold">{n}</p><p className="text-xs text-white/60">{l}</p></div>
              ))}
            </div>
          </div>
          <div className="relative mx-auto hidden w-full max-w-[380px] lg:block">
            <div className="absolute -inset-4 rounded-full border border-dashed border-lime-300/30" />
            <img src={IMG.heroWoman} alt="Solar expert" className="aspect-square w-full rounded-full border-[10px] border-white/10 object-cover" />
            <div className="absolute -left-4 top-10 rounded-2xl bg-white p-3 shadow-xl">
              <p className="flex items-center gap-2 text-xs font-bold"><Zap size={16} className="text-[#7AC143]" /> 100% Clean Energy</p>
            </div>
            <div className="absolute -right-2 bottom-10 rounded-2xl bg-[#7AC143] p-3 text-white shadow-xl">
              <p className="text-xl font-extrabold">24/7</p><p className="text-[11px]">Support</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function SectionHead({ tag, title, desc, center }: { tag: string; title: React.ReactNode; desc?: string; center?: boolean }) {
  return (
    <div className={`${center ? 'mx-auto text-center items-center' : ''} flex max-w-3xl flex-col gap-3`}>
      <span className="text-[11px] font-extrabold tracking-[0.18em] text-[#5da32a]">☀ {tag}</span>
      <h2 className="text-[28px] font-extrabold leading-tight tracking-tight text-neutral-900 sm:text-[36px]">{title}</h2>
      {desc && <p className="text-[14.5px] leading-relaxed text-neutral-500">{desc}</p>}
    </div>
  )
}

export default function Page() {
  const [tIndex, setTIndex] = useState(0)
  const testimonials = [
    { name: 'John Doe', role: 'Head of Officer', text: 'Switching to solar was the best decision. Our electricity bills dropped by 70% and the installation was seamless. Highly professional team from survey to switch-on.' },
    { name: 'Arita Benson', role: 'Homeowner', text: 'Amazing service! The team explained everything clearly, installed in 2 days and now we generate our own power. Truly reliable and eco-friendly solution.' },
    { name: 'Rahul Sharma', role: 'Business Owner', text: 'We powered our entire warehouse with EVN Solar. Great ROI, excellent monitoring app and 24x7 support. Recommended for every commercial setup.' },
  ]

  return (
    <main className="min-h-screen bg-[#f6f8f3] font-sans text-neutral-900 antialiased">
      <TopBar />
      <Navbar />
      <Hero />

      {/* Harvest */}
      <section id="harvest" className="mx-auto max-w-6xl px-5 py-16 sm:py-20">
        <div className="grid items-end justify-between gap-6 lg:grid-cols-2">
          <SectionHead tag="BEST SOLUTION" title={<>Harvest Sunlight, Share a Brighter Future</>} />
          <p className="max-w-md text-[14px] leading-relaxed text-neutral-500 lg:justify-self-end">Best of the best way to generate clean power for homes and businesses with high-efficiency panels, smart inverters and expert installation.</p>
        </div>
        <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { icon: Mountain, t: 'Ground Mounting System' },
            { icon: Warehouse, t: 'Flat Roof Mounting System' },
            { icon: CarFront, t: 'Solar Carport' },
            { icon: Headset, t: '24 X 7 Support' },
          ].map(({ icon: Icon, t }) => (
            <div key={t} className="flex items-center gap-3 rounded-2xl bg-white p-4 shadow-sm">
              <span className="grid size-10 shrink-0 place-items-center rounded-full bg-[#eaf5dc] text-[#5da32a]"><Icon size={19} /></span>
              <p className="text-[13.5px] font-bold leading-snug">{t}</p>
            </div>
          ))}
        </div>
        <div className="relative mt-6 overflow-hidden rounded-[24px] shadow-lg">
          <img src={IMG.fieldTurbine} alt="Solar farm" className="h-[320px] w-full object-cover sm:h-[420px]" />
          <a href="#solutions" className="absolute inset-0 grid place-items-center">
            <span className="grid size-16 place-items-center rounded-full bg-[#7AC143] text-white shadow-[0_0_0_12px_rgba(122,193,67,0.3)] transition hover:scale-105"><Play size={24} className="fill-white" /></span>
          </a>
        </div>
      </section>

      {/* Company Solutions */}
      <section id="solutions" className="bg-[#eef3e8]/70 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-5">
          <div className="flex items-end justify-between gap-6">
            <SectionHead tag="WHAT WE DO" title={<>Our Company Solutions</>} desc="End-to-end solar services — from maintenance to complete installations." />
            <div className="hidden gap-2 sm:flex">
              <button className="grid size-10 place-items-center rounded-full border bg-white"><ChevronLeft size={18} /></button>
              <button className="grid size-10 place-items-center rounded-full bg-[#0c2310] text-white"><ChevronRight size={18} /></button>
            </div>
          </div>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {[
              { img: IMG.maintenance, t: 'Solar Maintenance', d: 'Panel cleaning, health checks & performance optimization.', icon: Wrench },
              { img: IMG.saving, t: 'Energy Saving Devices', d: 'Smart inverters, batteries & monitoring systems.', icon: Lightbulb },
              { img: IMG.install, t: 'Solar Solutions', d: 'Rooftop, ground-mounted & carport installations.', icon: Sun },
            ].map(({ img, t, d, icon: Icon }) => (
              <article key={t} className="group overflow-hidden rounded-[22px] bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
                <div className="relative h-52 overflow-hidden">
                  <img src={img} alt={t} className="h-full w-full object-cover transition group-hover:scale-105" />
                  <span className="absolute -bottom-5 left-6 grid size-11 place-items-center rounded-full bg-[#7AC143] text-white shadow-lg"><Icon size={20} /></span>
                </div>
                <div className="p-6 pt-8">
                  <h3 className="text-[17px] font-extrabold">{t}</h3>
                  <p className="mt-1.5 text-[13.5px] text-neutral-500">{d}</p>
                  <a href="#pricing" className="mt-4 inline-flex items-center gap-1.5 text-[13px] font-bold text-[#5da32a]">Read More <ArrowRight size={15} /></a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Why use solar */}
      <section className="mx-auto max-w-6xl px-5 py-16 sm:py-20">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div className="flex gap-4">
            <img src={IMG.worker1} alt="Installer" className="h-[380px] w-1/2 rounded-[22px] object-cover" />
            <div className="w-1/2">
              <img src={IMG.worker2} alt="Engineer" className="h-[280px] w-full rounded-[22px] object-cover" />
              <span className="mt-3 inline-block rounded-full bg-[#eaf5dc] px-4 py-2 text-[12px] font-bold text-[#4a8a1f]">☀ Environmentally Friendly</span>
            </div>
          </div>
          <div>
            <SectionHead tag="WHY SUSTAINABLE ENERGY" title={<>Why do you have to use Solar Panels?</>} desc="Reduce bills, gain independence and protect the planet with proven solar technology." />
            <div className="mt-7 grid gap-5 sm:grid-cols-2">
              {[
                { icon: Recycle, t: 'Renewable Resource', d: 'Unlimited clean power straight from the sun.' },
                { icon: Leaf, t: 'Environmentally Friendly', d: 'Zero emissions, lower carbon footprint.' },
                { icon: BatteryCharging, t: 'Reserve Energy', d: 'Batteries store power for night & outages.' },
                { icon: Sun, t: 'Save The Earth', d: 'A greener tomorrow for next generations.' },
              ].map(({ icon: Icon, t, d }) => (
                <div key={t} className="flex gap-3">
                  <span className="grid size-11 shrink-0 place-items-center rounded-full bg-[#7AC143] text-white"><Icon size={20} /></span>
                  <div><p className="font-extrabold text-[15px]">{t}</p><p className="mt-1 text-[13px] leading-relaxed text-neutral-500">{d}</p></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Save planet */}
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 lg:grid-cols-[1fr_0.9fr_0.6fr]">
          <div>
            <SectionHead tag="SAVE ENERGY" title={<>Save The Planet by using Renewable Energy.</>} />
            <ul className="mt-6 space-y-3 text-[14px]">
              {['Affordable solar for every home & business', 'Net-metering & subsidy assistance', 'Smart monitoring & tracking system', '5-year service + 25-year panel warranty'].map((li) => (
                <li key={li} className="flex items-center gap-2.5 font-medium text-neutral-700"><span className="grid size-5 place-items-center rounded-full bg-[#7AC143] text-white"><Check size={13} /></span>{li}</li>
              ))}
            </ul>
            <a href="#contact" className="mt-7 inline-block rounded-full bg-[#7AC143] px-7 py-3 text-sm font-bold text-white hover:bg-[#5da32a]">Contact Now</a>
          </div>
          <img src={IMG.manSolar} alt="Happy customer" className="h-[420px] w-full rounded-[24px] object-cover shadow-lg" />
          <div className="space-y-6">
            {[
              ['1,000+', 'Project Done'],
              ['800+', 'Happy Clients'],
              ['700+', 'Award Winning'],
            ].map(([n, l]) => (
              <div key={l} className="border-l-4 border-[#7AC143] pl-4">
                <p className="text-3xl font-extrabold">{n}</p><p className="text-[13px] text-neutral-500">{l}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Working progress */}
      <section id="work" className="mx-auto max-w-6xl px-5 py-16 sm:py-20">
        <div className="flex items-end justify-between">
          <SectionHead tag="HOW WE WORK" title={<>Our Working Progress</>} />
          <p className="hidden max-w-sm text-[13.5px] text-neutral-500 md:block">From site survey to switch-on in 4 simple steps. Transparent, fast and hassle-free.</p>
        </div>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { img: IMG.roof, t: 'Site Survey & Design' },
            { img: IMG.sunset, t: 'Documentation & Approval' },
            { img: IMG.install, t: 'Installation & Testing' },
            { img: IMG.panelClose, t: 'Monitoring & Support' },
          ].map(({ img, t }, i) => (
            <div key={t} className="relative h-64 overflow-hidden rounded-[20px] group">
              <img src={img} alt={t} className="h-full w-full object-cover transition group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0c2310]/90 via-transparent" />
              <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-[12px] font-bold">0{i + 1}</span>
              <p className="absolute bottom-4 left-4 right-4 font-bold text-white">{t}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Produce clean */}
      <section className="bg-[#eef3e8]/70 py-16">
        <div className="mx-auto max-w-6xl px-5 text-center">
          <div className="mx-auto max-w-2xl"><SectionHead center tag="SMART ENERGY" title={<>Produce Your Own Clean Save our the Environment</>} /></div>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: Gauge, t: 'Peak Shaving', d: 'Cut peak-hour charges with stored solar power.' },
              { icon: PlugZap, t: 'Demand Response', d: 'Smart load control for maximum savings.' },
              { icon: BatteryCharging, t: 'Load Shifting', d: 'Use solar energy when you need it most.' },
              { icon: Leaf, t: 'Renewable', d: '100% green power for home & EV.' },
            ].map(({ icon: Icon, t, d }) => (
              <div key={t} className="rounded-[20px] bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
                <span className="mx-auto grid size-14 place-items-center rounded-2xl bg-[#eaf5dc] text-[#5da32a]"><Icon size={26} /></span>
                <p className="mt-4 font-extrabold">{t}</p><p className="mt-1.5 text-[13px] text-neutral-500">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Clients */}
      <section className="mx-auto max-w-6xl px-5 py-14 text-center">
        <p className="text-[11px] font-extrabold tracking-[0.18em] text-[#5da32a]">☀ TRUSTED WORLDWIDE</p>
        <h2 className="mx-auto mt-2 max-w-md text-[26px] font-extrabold sm:text-[30px]">Over 200+ Clients Worldwide Rely On Solar</h2>
        <div className="mt-7 grid grid-cols-2 gap-3 sm:grid-cols-5">
          {[1, 2, 3, 4, 5].map((i) => (
            <div key={i} className="flex items-center justify-center gap-2 rounded-2xl bg-[#eef3e8] py-6 font-extrabold text-neutral-400"><Sun size={20} className="text-[#7AC143]" /> Logipsum</div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-5">
          <div className="mx-auto max-w-xl text-center"><SectionHead center tag="PRICING PLAN" title={<>Choose Your Best Offer</>} desc="Transparent pricing for every need — residential, commercial & industrial." /></div>
          <div className="mt-9 grid gap-5 md:grid-cols-3">
            {[
              { plan: 'Basic', price: '$29.99', feat: ['2kW Solar System', 'Basic Monitoring', '5yr Service', 'Net-metering Help', '1yr Maintenance'] },
              { plan: 'Standard', price: '$39.99', feat: ['5kW Solar System', 'Smart Monitoring App', 'Battery Ready', 'Subsidy Assistance', '3yr Maintenance'], hot: true },
              { plan: 'Premium', price: '$59.99', feat: ['10kW+ Solar System', 'Battery + EV Charger', 'Priority 24x7 Support', 'Full Documentation', '5yr Maintenance'] },
            ].map(({ plan, price, feat, hot }) => (
              <div key={plan} className={`overflow-hidden rounded-[22px] border ${hot ? 'border-[#7AC143] shadow-[0_20px_60px_rgba(122,193,67,0.25)]' : 'border-neutral-100 shadow-sm'} bg-white`}>
                <div className={`px-6 py-5 text-center ${hot ? 'bg-[#0c2310] text-white' : 'bg-[#f3f7ee]'}`}>
                  <p className="font-bold">{plan}</p>
                  <p className="mt-1"><span className={`rounded-full px-4 py-1.5 text-lg font-extrabold ${hot ? 'bg-[#7AC143] text-white' : 'bg-[#7AC143]/15 text-[#4a8a1f]'}`}>{price} <span className="text-xs font-medium">/ mo</span></span></p>
                </div>
                <ul className="space-y-3 p-6 text-[13.5px]">
                  {feat.map((f) => (
                    <li key={f} className="flex items-center gap-2.5 text-neutral-600"><span className="grid size-5 place-items-center rounded-full bg-[#7AC143] text-white"><Check size={12} /></span>{f}</li>
                  ))}
                </ul>
                <div className="px-6 pb-6"><a href="#contact" className={`block rounded-full py-3 text-center text-sm font-bold ${hot ? 'bg-[#7AC143] text-white' : 'bg-[#eef5e4] text-[#4a8a1f]'} hover:opacity-90`}>Contact Now</a></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="mx-auto max-w-6xl px-5 py-16">
        <SectionHead tag="OUR TESTIMONIAL" title={<>See What People Say&apos;s<br />About Us</>} />
        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {[testimonials[tIndex % 3], testimonials[(tIndex + 1) % 3]].map((t, i) => (
            <figure key={i} className="rounded-[20px] bg-white p-7 shadow-sm">
              <div className="flex gap-1 text-[#7AC143]">{[1, 2, 3, 4, 5].map((s) => <Star key={s} size={15} className="fill-[#7AC143]" />)}</div>
              <blockquote className="mt-4 text-[14px] leading-relaxed text-neutral-600">&ldquo;{t.text}&rdquo;</blockquote>
              <figcaption className="mt-5 flex items-center gap-3">
                <span className="grid size-11 place-items-center rounded-full bg-[#0c2310] font-bold text-white">{t.name[0]}</span>
                <div><p className="font-bold text-[14px]">{t.name}</p><p className="text-[12px] text-neutral-500">{t.role}</p></div>
                <Quote size={22} className="ml-auto text-[#7AC143]/30" />
              </figcaption>
            </figure>
          ))}
        </div>
        <div className="mt-6 flex items-center justify-center gap-3">
          <button onClick={() => setTIndex((v) => (v + 2) % 3)} className="grid size-9 place-items-center rounded-full border bg-white"><ChevronLeft size={17} /></button>
          <button onClick={() => setTIndex((v) => (v + 1) % 3)} className="grid size-9 place-items-center rounded-full bg-[#7AC143] text-white"><ChevronRight size={17} /></button>
        </div>
      </section>

      {/* Blog */}
      <section id="blog" className="bg-white py-16">
        <div className="mx-auto max-w-6xl px-5">
          <SectionHead tag="RECENT ARTICLES" title={<>Our Latest Blog</>} />
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {[
              { img: IMG.blog1, t: 'Exploring the Latest Innovations in Solar Technology' },
              { img: IMG.blog2, t: 'Solar Solutions for a Sustainable Tomorrow' },
              { img: IMG.blog3, t: 'Advancements and Breakthroughs in Renewable Power' },
            ].map(({ img, t }) => (
              <article key={t} className="group overflow-hidden rounded-[20px] bg-[#f6f8f3]">
                <div className="h-52 overflow-hidden"><img src={img} alt={t} className="h-full w-full object-cover transition group-hover:scale-105" /></div>
                <div className="p-5">
                  <p className="text-[11px] font-bold text-[#5da32a]">☀ SOLAR • 12 MIN READ</p>
                  <h3 className="mt-2 font-extrabold leading-snug">{t}</h3>
                  <a href="#blog" className="mt-3 inline-flex items-center gap-1.5 text-[13px] font-bold text-[#4a8a1f]">Read More <ArrowRight size={14} /></a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Marquee */}
      <div className="overflow-hidden bg-[#7AC143] py-4">
        <p className="animate-[marquee_18s_linear_infinite] whitespace-nowrap text-center text-[22px] font-extrabold tracking-wide text-[#0c2310]">
          GENERATE YOUR OWN POWER&nbsp;&nbsp;/&nbsp;&nbsp;REAP THE SAVINGS&nbsp;&nbsp;/&nbsp;&nbsp;GENERATE YOUR OWN POWER&nbsp;&nbsp;/&nbsp;&nbsp;REAP THE SAVINGS
        </p>
      </div>

      {/* Footer */}
      <footer id="contact" className="bg-[#0c2310] text-white">
        <div className="mx-auto grid max-w-6xl gap-4 px-5 py-8 sm:grid-cols-3">
          {[
            { icon: Mail, t: 'Support & Email', d: 'info@evnsolar.in' },
            { icon: Headset, t: 'Customer Support', d: '+91 70405 06295' },
            { icon: MapPin, t: 'Our Location', d: 'Malegaon, Maharashtra 423203' },
          ].map(({ icon: Icon, t, d }) => (
            <div key={t} className="flex items-center gap-3 rounded-2xl bg-white/5 p-4">
              <span className="grid size-11 place-items-center rounded-full bg-[#7AC143]"><Icon size={20} /></span>
              <div><p className="font-bold text-[14px]">{t}</p><p className="text-[13px] text-white/60">{d}</p></div>
            </div>
          ))}
        </div>
        <div className="border-t border-white/10">
          <div className="mx-auto grid max-w-6xl gap-10 px-5 py-12 md:grid-cols-[1.3fr_0.7fr_0.7fr_0.7fr]">
            <div>
              <p className="flex items-center gap-2 text-xl font-extrabold"><span className="grid size-9 place-items-center rounded-xl bg-[#7AC143]"><Sun size={20} /></span>Solar.</p>
              <p className="mt-4 max-w-xs text-[13.5px] leading-relaxed text-white/60">EVN Solar Energy Solutions — rooftop solar, ground-mounted plants, carports & EV charging across Maharashtra & India.</p>
              <div className="mt-4 flex gap-2">
                {[Globe, Share2, AtSign, Rss].map((Icon, i) => (
                  <a key={i} href="#top" className="grid size-8 place-items-center rounded-full bg-white/10 hover:bg-[#7AC143]"><Icon size={14} /></a>
                ))}
              </div>
            </div>
            {[
              ['Quick Links', ['Home', 'About Us', 'Services', 'Blog', 'Contact']],
              ['Services', ['Hybrid Energy', 'Renewable Energy', 'Solar Installation', 'Solar Repair', 'Wind Solutions']],
              ['Useful Links', ['Privacy Policy', 'Terms & Conditions', 'äProjects', 'Support', 'Cookies Policy']],
            ].map(([title, links]) => (
              <div key={title as string}>
                <p className="font-bold">{title}</p>
                <ul className="mt-4 space-y-2.5 text-[13.5px] text-white/60">
                  {(links as string[]).map((l) => <li key={l}><a href="#top" className="hover:text-[#8DC63F]">{l}</a></li>)}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="px-5 pb-6">
          <p className="mx-auto max-w-6xl rounded-full bg-[#7AC143] py-3 text-center text-[12.5px] font-bold text-[#0c2310]">Copyright © 2026 Solar. All Rights Reserved. • EVN Solar Energy Solutions Pvt Ltd</p>
        </div>
      </footer>

      {/* floating call */}
      <a href="tel:+917040506295" className="fixed bottom-5 right-5 z-50 grid size-13 place-items-center rounded-full bg-[#7AC143] p-3.5 text-white shadow-2xl hover:scale-105"><Phone size={22} /></a>

      <style>{`@keyframes marquee{from{transform:translateX(20%)}to{transform:translateX(-20%)}}`}</style>
    </main>
  )
}
