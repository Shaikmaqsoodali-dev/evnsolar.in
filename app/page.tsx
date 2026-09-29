'use client'

import { useState } from 'react'
import { ArrowRight, BatteryCharging, Building2, Car, Check, ChevronDown, Home, Menu, MoveRight, PanelTop, Phone, Sun, X, Zap } from 'lucide-react'

const logoUrl = 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/EV%20%26%20SOLAR%20LOGO%20final.jpg%20%284%29-mkVPCg09FJf5Yc550FUgAC2cI2EFi8.jpeg'

const solutions = [
  { icon: PanelTop, number: '01', title: 'Rooftop solar', text: 'Generate clean electricity from your own rooftop with a system designed around your consumption and available space.', tone: 'blue' },
  { icon: Sun, number: '02', title: 'Ground-mounted solar', text: 'Make productive use of available land with professionally planned solar installations for larger requirements.', tone: 'green' },
  { icon: Building2, number: '03', title: 'Solar carports', text: 'Turn parking spaces into productive energy infrastructure while creating shade and clean power.', tone: 'lime' },
  { icon: BatteryCharging, number: '04', title: 'EV charging', text: 'Build a smarter mobility setup with charging solutions for homes, businesses and commercial environments.', tone: 'dark' },
]

const faqs = [
  ['How much solar capacity do I need?', 'The right system size depends on your electricity usage, available space, property conditions and future energy requirements.'],
  ['Can solar reduce my electricity bill?', 'Solar can reduce the amount of electricity you purchase from the grid. Actual savings depend on your system, usage and applicable regulations.'],
  ['Does solar work on cloudy days?', 'Yes. Panels continue generating during cloudy conditions, although output is generally lower than on bright sunny days.'],
  ['Can I combine solar with EV charging?', 'Yes. Solar and EV charging can be planned together to create a cleaner, more connected energy setup.'],
]

export default function Page() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [openFaq, setOpenFaq] = useState(0)

  return (
    <main className="site-shell">
      <header className="site-header">
        <div className="nav-wrap">
          <a href="#top" className="brand" aria-label="EV and Solar home"><img src={logoUrl} alt="EV & Solar — EVN Solar Energy Solutions" /></a>
          <nav className={menuOpen ? 'main-nav open' : 'main-nav'} aria-label="Main navigation">
            {['About', 'Solutions', 'Projects', 'FAQ', 'Contact'].map((item) => <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setMenuOpen(false)}>{item}</a>)}
          </nav>
          <a href="#quote" className="nav-cta">Get a free quote <ArrowRight size={16} /></a>
          <button className="menu-button" aria-label={menuOpen ? 'Close menu' : 'Open menu'} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X size={22} /> : <Menu size={22} />}</button>
        </div>
      </header>

      <section className="hero" id="top">
        <div className="hero-grid">
          <div className="hero-copy">
            <p className="eyebrow"><span className="eyebrow-dot" /> Clean energy. Smarter mobility.</p>
            <h1>Generate energy.<br /><em>Power what matters.</em><br />Move forward.</h1>
            <p className="hero-text">From rooftop solar to EV charging, we help homes, businesses and organisations generate cleaner energy, use it intelligently and prepare for a more electric future.</p>
            <div className="hero-actions"><a href="#quote" className="button primary">Get a free quote <ArrowRight size={17} /></a><a href="#solutions" className="button secondary">Explore solutions <MoveRight size={17} /></a></div>
            <div className="trust-row"><span><Check size={15} /> Solar solutions</span><span><Check size={15} /> EV solutions</span><span><Check size={15} /> Long-term support</span></div>
          </div>
          <div className="hero-visual">
            <div className="visual-ring ring-one" /><div className="visual-ring ring-two" />
            <div className="hero-image"><img src="https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=1200&q=85" alt="Solar panels catching afternoon sunlight" /></div>
            <div className="floating-stat"><span className="stat-icon"><Zap size={17} fill="currentColor" /></span><div><strong>Sun to motion</strong><small>One connected energy journey</small></div></div>
          </div>
        </div>
      </section>

      <section className="signal-strip"><div className="container signal-inner"><span>Energy solutions built around real-world needs.</span><div className="signal-items"><span><Home size={17} /> Residential</span><span><Building2 size={17} /> Commercial</span><span><PanelTop size={17} /> Industrial</span><span><Car size={17} /> EV & mobility</span></div></div></section>

      <section className="intro section" id="about"><div className="container intro-grid"><div><p className="eyebrow blue-label">Energy, made simpler</p><h2>Your energy needs are different. <span>Your solution should be too.</span></h2></div><div className="intro-copy"><p>Every property, business and project has its own energy requirements. We help you understand those requirements, explore the right technology and move towards a cleaner, smarter energy setup — without making the process complicated.</p><a className="text-link" href="#contact">Talk to our team <ArrowRight size={16} /></a></div></div></section>

      <section className="solutions section" id="solutions"><div className="container"><div className="section-heading"><div><p className="eyebrow blue-label">Our solutions</p><h2>From sunlight to<br /><span>smarter mobility.</span></h2></div><p>Thoughtful systems. Practical technology. A more dependable way to power what matters.</p></div><div className="solution-grid">{solutions.map(({ icon: Icon, number, title, text, tone }) => <article className={`solution-card ${tone}`} key={title}><div className="card-top"><span className="card-number">{number}</span><span className="icon-box"><Icon size={22} /></span></div><h3>{title}</h3><p>{text}</p><a href="#quote">Explore <ArrowRight size={15} /></a></article>)}</div></div></section>

      <section className="why section"><div className="container why-grid"><div className="why-heading"><p className="eyebrow green-label">Why make the switch?</p><h2>More control over the energy you use.</h2><p>Solar gives you the opportunity to generate electricity from a renewable source and take greater control over how your property uses energy.</p><a href="#quote" className="button dark-button">Start your solar journey <ArrowRight size={16} /></a></div><div className="benefit-list">{[['01','Lower grid dependence','Generate your own electricity and reduce dependence on conventional grid power.'],['02','Long-term value','A considered energy investment designed to deliver value over years of operation.'],['03','Cleaner energy','Use renewable energy from sunlight and take a practical step towards a cleaner future.'],['04','Smarter energy','Connect solar generation, efficient technology and EV infrastructure.']].map(([n,t,d]) => <div className="benefit" key={n}><span>{n}</span><div><h3>{t}</h3><p>{d}</p></div></div>)}</div></div></section>

      <section className="process section"><div className="container"><div className="section-heading center"><p className="eyebrow blue-label">Our process</p><h2>Going solar doesn&apos;t have to be complicated.</h2></div><div className="process-grid">{[['01','Understand'],['02','Assess'],['03','Design'],['04','Install'],['05','Support']].map(([n,t], i) => <div className="process-step" key={n}><span>{n}</span><div className="process-line" /><h3>{t}</h3><p>{['We start by understanding your property, usage and energy goals.','We evaluate the site, available space and practical requirements.','We develop a solution based on your needs and project conditions.','Our team coordinates installation with attention to quality and safety.','We remain available for guidance and support beyond installation.'][i]}</p></div>)}</div></div></section>

      <section className="flow-section section"><div className="container flow-grid"><div><p className="eyebrow light-label">The EV & Solar approach</p><h2>From sunlight<br /><em>to the road.</em></h2><p>Generate clean energy from the sun. Use it to power your property. And take that energy with you into the future of mobility.</p></div><div className="flow"><div className="flow-line" />{[['Sun','The source'],['Solar panels','Generate'],['Clean energy','Power'],['EV charging','Connect'],['Electric vehicle','Move']].map(([t,s]) => <div className="flow-node" key={t}><span className="flow-dot" /><div><strong>{t}</strong><small>{s}</small></div></div>)}</div></div></section>

      <section className="faq section" id="faq"><div className="container faq-grid"><div><p className="eyebrow blue-label">Common questions</p><h2>Solar doesn&apos;t have to be complicated.</h2><p>Have questions before making the switch? Here are some of the things customers ask us most often.</p><a className="text-link" href="#quote">Ask our team <ArrowRight size={16} /></a></div><div className="faq-list">{faqs.map(([q,a], i) => <div className={`faq-item ${openFaq === i ? 'active' : ''}`} key={q}><button onClick={() => setOpenFaq(openFaq === i ? -1 : i)} aria-expanded={openFaq === i}><span>{q}</span><ChevronDown size={18} /></button>{openFaq === i && <p>{a}</p>}</div>)}</div></div></section>

      <section className="quote section" id="quote"><div className="container quote-inner"><div><p className="eyebrow light-label">Ready when you are</p><h2>Generate your own energy.<br /><em>Power what matters.</em></h2><p>Tell us what you&apos;re looking to power. We&apos;ll help you understand what&apos;s possible and explore a solution around your needs.</p></div><div className="quote-actions"><a href="mailto:mail@evnsolar.in" className="button white-button">Get a free quote <ArrowRight size={17} /></a><a href="tel:+917040506295" className="phone-link"><Phone size={17} /> +91 70405 06295</a></div></div></section>

      <footer className="footer" id="contact"><div className="container footer-grid"><div><img className="footer-logo" src={logoUrl} alt="EV & Solar" /><p>Practical clean-energy solutions for a more independent, connected future.</p></div><div><p className="footer-title">Explore</p><a href="#about">About us</a><a href="#solutions">Solutions</a><a href="#faq">FAQ</a></div><div><p className="footer-title">Contact</p><a href="mailto:mail@evnsolar.in">mail@evnsolar.in</a><a href="tel:+917040506295">+91 70405 06295</a><span>79, Mahada Colony,<br />Malegaon, Maharashtra — 423203</span></div></div><div className="container footer-bottom"><span>© 2026 Solarowl Energy Solution Pvt Ltd</span><span>EVN Solar Energy Solutions</span></div></footer>
    </main>
  )
}
