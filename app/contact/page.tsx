'use client'

import { useState } from 'react'
import { Check, Mail, Phone, MapPin, Send } from 'lucide-react'
import { PageHero } from '@/components/site-chrome'

export default function ContactPage() {
  const [sent, setSent] = useState(false)
  const [form, setForm] = useState({ name: '', phone: '', type: 'Home + Solar', message: '' })

  return (
    <main className="bg-[#F8FAFC]">
      <PageHero
        tag="CONTACT & FREE SITE SURVEY"
        title={<>Tell us your bill. <span className="text-[#0083CB]">We&apos;ll do the math.</span></>}
        desc="Call, WhatsApp or send the form — include your monthly units, roof/parking photos and EV plans for the fastest quote."
      />

      <section className="mx-auto grid max-w-6xl gap-6 px-5 py-14 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="space-y-4">
          {[
            { icon: Phone, t: 'Call / WhatsApp', d: '+91 70405 06295 (9am–7pm)', href: 'tel:+917040506295' },
            { icon: Mail, t: 'Email', d: 'info@evnsolar.in • mail@evnsolar.in', href: 'mailto:info@evnsolar.in' },
            { icon: MapPin, t: 'Visit', d: '79 Mahada Colony, Malegaon, Maharashtra 423203', href: 'https://maps.google.com/?q=Malegaon+Maharashtra' },
          ].map(({ icon: Icon, t, d, href }) => (
            <a key={t} href={href} className="flex items-center gap-4 rounded-[20px] border border-[#DCE5EA] bg-white p-5 transition hover:border-[#0083CB]">
              <span className="grid size-12 place-items-center rounded-2xl bg-[#0083CB] text-white"><Icon size={21} /></span>
              <span><span className="block font-extrabold">{t}</span><span className="block text-[13.5px] text-[#52616B]">{d}</span></span>
            </a>
          ))}
          <div className="rounded-[20px] border border-[#DCE5EA] bg-[#0B1720] p-6 text-white">
            <p className="font-extrabold">What to send for a fast quote</p>
            <ul className="mt-3 space-y-2 text-[13.5px] text-white/70">
              {['Latest electricity bill (units + load)', 'Terrace / parking photos + Google location', 'EV model or planned EV kilometres'].map((x) => (
                <li key={x} className="flex gap-2"><Check size={16} className="mt-0.5 shrink-0 text-[#74BD6C]" />{x}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="rounded-[24px] border border-[#DCE5EA] bg-white p-7 sm:p-9">
          {sent ? (
            <div className="grid place-items-center py-16 text-center">
              <span className="grid size-14 place-items-center rounded-full bg-[#1F8A42] text-white"><Check size={26} /></span>
              <h2 className="mt-5 text-2xl font-extrabold">Request received.</h2>
              <p className="mt-2 max-w-sm text-[14px] text-[#52616B]">Thanks {form.name || 'friend'} — our engineers will call you back on {form.phone || 'your number'} within one working day.</p>
              <button onClick={() => setSent(false)} className="mt-6 rounded-full border border-[#DCE5EA] px-6 py-3 text-sm font-bold hover:border-[#0083CB] hover:text-[#0083CB]">Send another</button>
            </div>
          ) : (
            <form
              onSubmit={(e) => { e.preventDefault(); setSent(true) }}
              className="space-y-4"
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="block">
                  <span className="mb-1.5 block text-[13px] font-bold">Full name</span>
                  <input required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Your name" className="w-full rounded-xl border border-[#DCE5EA] bg-[#F8FAFC] px-4 py-3 text-[14px] outline-none focus:border-[#0083CB]" />
                </label>
                <label className="block">
                  <span className="mb-1.5 block text-[13px] font-bold">Phone</span>
                  <input required value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} placeholder="+91 ..." className="w-full rounded-xl border border-[#DCE5EA] bg-[#F8FAFC] px-4 py-3 text-[14px] outline-none focus:border-[#0083CB]" />
                </label>
              </div>
              <label className="block">
                <span className="mb-1.5 block text-[13px] font-bold">I need</span>
                <select value={form.type} onChange={(e) => setForm({ ...form, type: e.target.value })} className="w-full rounded-xl border border-[#DCE5EA] bg-[#F8FAFC] px-4 py-3 text-[14px] outline-none focus:border-[#0083CB]">
                  <option>Home + Solar</option>
                  <option>Home Solar + EV Charger</option>
                  <option>Commercial Solar</option>
                  <option>EV Charging Only</option>
                  <option>Maintenance / O&M</option>
                </select>
              </label>
              <label className="block">
                <span className="mb-1.5 block text-[13px] font-bold">Monthly bill / requirement</span>
                <textarea required value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} rows={5} placeholder="e.g. 450 units/month, 2BHK in Nashik, planning Tata Nexon EV..." className="w-full resize-none rounded-xl border border-[#DCE5EA] bg-[#F8FAFC] px-4 py-3 text-[14px] outline-none focus:border-[#0083CB]" />
              </label>
              <button type="submit" className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#0083CB] py-3.5 text-sm font-bold text-white hover:bg-[#006FAE]">
                Request Free Site Assessment <Send size={16} />
              </button>
              <p className="text-center text-[12px] text-[#52616B]">No spam. Engineers only — usually within one working day.</p>
            </form>
          )}
        </div>
      </section>
    </main>
  )
}
