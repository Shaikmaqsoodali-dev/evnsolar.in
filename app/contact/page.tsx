'use client'

import { useState } from 'react'
import { Check, Mail, MapPin, Phone, Send } from 'lucide-react'
import { FacebookIcon, InstagramIcon } from '@/components/site-chrome'
import { PageIntro } from '@/components/site-chrome'
import { Reveal } from '@/components/ux-bits'

export default function ContactPage() {
  const [sent, setSent] = useState(false)
  const [form, setForm] = useState({ name: '', phone: '', type: 'Home rooftop', message: '' })

  return (
    <main className="bg-[#F0F5F9]">
      <PageIntro
        kicker="Contact & free site survey"
        title={<>Tell us your bill. <em className="editorial-accent text-[#0F88C7]">We&apos;ll do the math.</em></>}
        lede="Call, email or send the form below. Include monthly units, roof or parking photos and any EV plans for the fastest, most accurate quote."
        crumb={[['Contact', '/contact']]}
        image="https://res.cloudinary.com/qxjpbgh6/image/upload/v1791109963/EV_Solar_Facility_at_Sunset_1.png"
        imageAlt="EV solar facility at sunset"
      />

      <section className="mx-auto grid max-w-7xl gap-10 px-6 py-14 sm:py-20 lg:grid-cols-[0.9fr_1.1fr]">
        <Reveal>
          <div className="space-y-3">
            {[
              { icon: Phone, t: 'Call / WhatsApp', d: '+91 70405 06295, 9am-7pm', href: 'tel:+917040506295' },
              { icon: Mail, t: 'Email', d: 'info@evnsolar.in', href: 'mailto:info@evnsolar.in' },
              { icon: MapPin, t: 'Office', d: '79 Mahada Colony, Malegaon 423203', href: 'https://maps.google.com/?q=Malegaon+Maharashtra' },
              { icon: InstagramIcon, t: 'Instagram', d: '@evnsolar.in', href: 'https://www.instagram.com/evnsolar.in/' },
              { icon: FacebookIcon, t: 'Facebook', d: '@evsolar.in', href: 'https://www.facebook.com/evsolar.in' },
            ].map(({ icon: Icon, t, d, href }) => (
              <a key={t} href={href} className="lift flex items-center gap-4 border border-[#D9E2EA] bg-white p-5 transition-colors hover:border-[#0F88C7]" style={{ borderRadius: 8 }}>
                <span className="grid size-11 shrink-0 place-items-center bg-[#0F88C7] text-white" style={{ borderRadius: 6 }}>
                  <Icon size={19} />
                </span>
                <span>
                  <span className="block text-[14px] font-semibold text-[#072A45]">{t}</span>
                  <span className="block text-[14px] text-[#54687A]">{d}</span>
                </span>
              </a>
            ))}
          </div>
          <div className="bg-brand-grad mt-4 p-6 text-white" style={{ borderRadius: 8 }}>
            <p className="tech-label text-white">For the fastest quote, include</p>
            <ul className="mt-3 space-y-2 text-[13px] font-normal leading-relaxed text-white/85">
              {['Latest electricity bill (units consumed + sanctioned load)', 'Terrace or parking photos with a Google Maps location', 'EV model or expected monthly driving kilometres'].map((x) => (
                <li key={x} className="flex gap-2.5">
                  <Check size={15} className="mt-1 shrink-0 text-white" /> {x}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        <Reveal delay={120}>
        <div className="border border-[#BFDDF2] bg-white p-7 shadow-[0_18px_50px_rgba(15,136,199,0.10)] sm:p-9" style={{ borderRadius: 10 }}>
          {sent ? (
            <div className="py-14 text-center">
              <span className="mx-auto grid size-12 place-items-center bg-[#0F88C7] text-white" style={{ borderRadius: 8 }}>
                <Check size={22} />
              </span>
              <h2 className="font-display mt-5 text-[24px] font-semibold text-[#072A45]">Request received.</h2>
              <p className="mx-auto mt-2 max-w-sm text-[14.5px] text-[#54687A]">
                Thank you{form.name ? `, ${form.name}` : ''}. Our engineers will call
                {form.phone ? ` ${form.phone}` : ' you'} back within one working day.
              </p>
              <button
                onClick={() => setSent(false)}
                className="mt-6 border border-[#C3D2DE] bg-white px-6 py-2.5 text-[14px] font-semibold text-[#072A45] hover:border-[#0F88C7] hover:text-[#0F88C7]"
                style={{ borderRadius: 6 }}
              >
                Send another request
              </button>
            </div>
          ) : (
            <form onSubmit={(e) => { e.preventDefault(); setSent(true) }} className="space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <label className="block">
                  <span className="mb-1.5 block text-[13px] font-semibold text-[#072A45]">Full name</span>
                  <input required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Your name" className="field w-full border border-[#C3D2DE] bg-white px-4 py-3 text-[14.5px] outline-none focus:border-[#0F88C7]" style={{ borderRadius: 6 }} />
                </label>
                <label className="block">
                  <span className="mb-1.5 block text-[13px] font-semibold text-[#072A45]">Phone</span>
                  <input required value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} placeholder="+91 …" className="field w-full border border-[#C3D2DE] bg-white px-4 py-3 text-[14.5px] outline-none focus:border-[#0F88C7]" style={{ borderRadius: 6 }} />
                </label>
              </div>
              <label className="block">
                <span className="mb-1.5 block text-[13px] font-semibold text-[#072A45]">Requirement</span>
                <select value={form.type} onChange={(e) => setForm({ ...form, type: e.target.value })} className="field w-full border border-[#C3D2DE] bg-white px-4 py-3 text-[14.5px] outline-none focus:border-[#0F88C7]" style={{ borderRadius: 6 }}>
                  <option>Home rooftop</option>
                  <option>Home solar + EV charger</option>
                  <option>Commercial / industrial solar</option>
                  <option>EV charging only</option>
                  <option>Maintenance / O&M</option>
                </select>
              </label>
              <label className="block">
                <span className="mb-1.5 block text-[13px] font-semibold text-[#072A45]">Monthly bill / requirement</span>
                <textarea required value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} rows={5} placeholder="e.g. 450 units/month, Nashik, planning an EV next year…" className="field w-full resize-none border border-[#C3D2DE] bg-white px-4 py-3 text-[14.5px] outline-none focus:border-[#0F88C7]" style={{ borderRadius: 6 }} />
              </label>
              <button type="submit" className="btn-shine inline-flex w-full items-center justify-center gap-2 bg-[#0F88C7] py-3.5 text-[15px] font-semibold text-white hover:bg-[#0B6AA0]" style={{ borderRadius: 6 }}>
                Get a free site assessment <Send size={16} />
              </button>
              <p className="text-center text-[12.5px] text-[#54687A]">No spam. An engineer responds, usually within one working day.</p>
            </form>
          )}
        </div>
        </Reveal>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-14 sm:pb-20">
        <Reveal>
          <div className="overflow-hidden border border-[#D9E2EA] bg-white" style={{ borderRadius: 10 }}>
            <div className="flex flex-col gap-2 px-6 py-5 sm:flex-row sm:items-center sm:justify-between">
              <p className="flex items-center gap-2.5 text-[14px] font-semibold text-[#072A45]">
                <span className="grid size-8 place-items-center bg-[#0F88C7] text-white" style={{ borderRadius: 6 }}>
                  <MapPin size={16} />
                </span>
                79 Mahada Colony, Malegaon 423203, Maharashtra
              </p>
              <a
                href="https://www.google.com/maps/dir/?api=1&destination=79+Mahada+Colony+Malegaon+Maharashtra+423203"
                target="_blank"
                rel="noreferrer"
                className="font-display text-[13px] font-semibold text-[#0F88C7] hover:text-[#0B6AA0]"
              >
                Get directions →
              </a>
            </div>
            <iframe
              title="EVN Solar office location map - 79 Mahada Colony, Malegaon"
              src="https://www.google.com/maps?q=79%20Mahada%20Colony%2C%20Malegaon%2C%20Maharashtra%20423203&output=embed"
              className="h-[320px] w-full border-0 sm:h-[400px]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </Reveal>
      </section>
    </main>
  )
}
