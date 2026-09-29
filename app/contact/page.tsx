'use client'

import { useState } from 'react'
import { Check, Mail, MapPin, Phone, Send } from 'lucide-react'
import { PageIntro } from '@/components/site-chrome'

export default function ContactPage() {
  const [sent, setSent] = useState(false)
  const [form, setForm] = useState({ name: '', phone: '', type: 'Home rooftop', message: '' })

  return (
    <main className="bg-white">
      <PageIntro
        kicker="Contact & free site survey"
        title={<>Tell us your bill. <em className="serif-accent text-[#0083CB]">We&apos;ll do the math.</em></>}
        lede="Call, email or send the form below. Include monthly units, roof or parking photos and any EV plans for the fastest, most accurate quote."
        crumb={[['Contact', '/contact']]}
      />

      <section className="mx-auto grid max-w-7xl gap-10 px-6 py-14 sm:py-20 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <div className="space-y-3">
            {[
              { icon: Phone, t: 'Call / WhatsApp', d: '+91 70405 06295 · 9am–7pm', href: 'tel:+917040506295' },
              { icon: Mail, t: 'Email', d: 'info@evnsolar.in', href: 'mailto:info@evnsolar.in' },
              { icon: MapPin, t: 'Office', d: '79 Mahada Colony, Malegaon 423203', href: 'https://maps.google.com/?q=Malegaon+Maharashtra' },
            ].map(({ icon: Icon, t, d, href }) => (
              <a key={t} href={href} className="flex items-center gap-4 border border-[#E2E8EC] bg-white p-5 transition-colors hover:border-[#0083CB]" style={{ borderRadius: 8 }}>
                <span className="grid size-11 shrink-0 place-items-center border border-[#E2E8EC] bg-[#F4F6F8] text-[#0083CB]" style={{ borderRadius: 6 }}>
                  <Icon size={19} />
                </span>
                <span>
                  <span className="block text-[14px] font-semibold text-[#0C1E28]">{t}</span>
                  <span className="block text-[14px] text-[#5B6D77]">{d}</span>
                </span>
              </a>
            ))}
          </div>
          <div className="mt-4 bg-[#0C1E28] p-6 text-white" style={{ borderRadius: 8 }}>
            <p className="text-[14px] font-semibold">For the fastest quote, include</p>
            <ul className="mt-3 space-y-2 text-[13.5px] leading-relaxed text-white/70">
              {['Latest electricity bill (units consumed + sanctioned load)', 'Terrace or parking photos with a Google Maps location', 'EV model or expected monthly driving kilometres'].map((x) => (
                <li key={x} className="flex gap-2.5">
                  <Check size={15} className="mt-1 shrink-0 text-[#7BD88F]" /> {x}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border border-[#E2E8EC] bg-[#F4F6F8] p-7 sm:p-9" style={{ borderRadius: 10 }}>
          {sent ? (
            <div className="py-14 text-center">
              <span className="mx-auto grid size-12 place-items-center bg-[#1E7A3C] text-white" style={{ borderRadius: 8 }}>
                <Check size={22} />
              </span>
              <h2 className="font-display mt-5 text-[24px] font-semibold text-[#0C1E28]">Request received.</h2>
              <p className="mx-auto mt-2 max-w-sm text-[14.5px] text-[#5B6D77]">
                Thank you{form.name ? `, ${form.name}` : ''}. Our engineers will call
                {form.phone ? ` ${form.phone}` : ' you'} back within one working day.
              </p>
              <button
                onClick={() => setSent(false)}
                className="mt-6 border border-[#CBD6DD] bg-white px-6 py-2.5 text-[14px] font-semibold text-[#0C1E28] hover:border-[#0083CB] hover:text-[#0083CB]"
                style={{ borderRadius: 6 }}
              >
                Send another request
              </button>
            </div>
          ) : (
            <form onSubmit={(e) => { e.preventDefault(); setSent(true) }} className="space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <label className="block">
                  <span className="mb-1.5 block text-[13px] font-semibold text-[#0C1E28]">Full name</span>
                  <input required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Your name" className="w-full border border-[#CBD6DD] bg-white px-4 py-3 text-[14.5px] outline-none focus:border-[#0083CB]" style={{ borderRadius: 6 }} />
                </label>
                <label className="block">
                  <span className="mb-1.5 block text-[13px] font-semibold text-[#0C1E28]">Phone</span>
                  <input required value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} placeholder="+91 …" className="w-full border border-[#CBD6DD] bg-white px-4 py-3 text-[14.5px] outline-none focus:border-[#0083CB]" style={{ borderRadius: 6 }} />
                </label>
              </div>
              <label className="block">
                <span className="mb-1.5 block text-[13px] font-semibold text-[#0C1E28]">Requirement</span>
                <select value={form.type} onChange={(e) => setForm({ ...form, type: e.target.value })} className="w-full border border-[#CBD6DD] bg-white px-4 py-3 text-[14.5px] outline-none focus:border-[#0083CB]" style={{ borderRadius: 6 }}>
                  <option>Home rooftop</option>
                  <option>Home solar + EV charger</option>
                  <option>Commercial / industrial solar</option>
                  <option>EV charging only</option>
                  <option>Maintenance / O&M</option>
                </select>
              </label>
              <label className="block">
                <span className="mb-1.5 block text-[13px] font-semibold text-[#0C1E28]">Monthly bill / requirement</span>
                <textarea required value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} rows={5} placeholder="e.g. 450 units/month, Nashik, planning an EV next year…" className="w-full resize-none border border-[#CBD6DD] bg-white px-4 py-3 text-[14.5px] outline-none focus:border-[#0083CB]" style={{ borderRadius: 6 }} />
              </label>
              <button type="submit" className="inline-flex w-full items-center justify-center gap-2 bg-[#0083CB] py-3.5 text-[15px] font-semibold text-white hover:bg-[#00659D]" style={{ borderRadius: 6 }}>
                Request free site assessment <Send size={16} />
              </button>
              <p className="text-center text-[12.5px] text-[#5B6D77]">No spam. An engineer responds — usually within one working day.</p>
            </form>
          )}
        </div>
      </section>
    </main>
  )
}
