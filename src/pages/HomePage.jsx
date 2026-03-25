import { useState, useEffect } from 'react'

const services = [
  {
    icon: '⬡',
    name: 'Website Development',
    desc: 'Custom-built, responsive websites with clean frontend architecture and powerful backend systems tailored to your brand and goals.',
    accent: '#00f5ff',
  },
  {
    icon: '◈',
    name: 'UI / UX Design',
    desc: "Interfaces that don't just look good — they convert. We design user flows, wireframes, and polished UI that keep visitors engaged.",
    accent: '#bf5fff',
  },
  {
    icon: '◉',
    name: 'Branding Kit',
    desc: 'Logo, color palette, typography system, and brand guidelines — everything you need to show up consistently and professionally.',
    accent: '#ff2d78',
  },
  {
    icon: '⬡',
    name: 'Social Media Starter Pack',
    desc: 'Account setup, content templates, bio optimization, and a launch strategy so your social presence hits the ground running.',
    accent: '#00f5ff',
  },
  {
    icon: '◈',
    name: 'Bookkeeping',
    desc: 'Clean, organized financial records so you always know where your money is. Monthly reconciliation and reporting included.',
    accent: '#bf5fff',
  },
  {
    icon: '◉',
    name: 'Financial Tracker System',
    desc: 'Custom-built dashboards and tracking tools that give you real-time visibility into your revenue, expenses, and cash flow.',
    accent: '#ff2d78',
  },
]

const pricingPlans = [
  {
    tier: 'Bronze',
    desc: 'Perfect for refreshing your online presence.',
    amount: '5,000',
    note: 'One-time project fee',
    features: [
      { text: 'Revamping of Social Media Pages', active: true },
      { text: 'Professional Website', active: false },
      { text: 'Branding Kit (Logo + Color Scheme)', active: false },
      { text: 'Social Media Starter Pack', active: false },
      { text: 'Financial Tracker System', active: false },
    ],
    btnStyle: 'btn-plan-outline',
    featured: false,
  },
  {
    tier: 'Silver',
    desc: 'Launch with a strong digital foundation.',
    amount: '9,000',
    note: 'One-time project fee',
    features: [
      { text: 'Professional Website', active: true },
      { text: 'Branding Kit (Logo + Color Scheme)', active: true },
      { text: 'Revamping of Social Media Pages', active: false },
      { text: 'Social Media Starter Pack', active: false },
      { text: 'Financial Tracker System', active: false },
    ],
    btnStyle: 'btn-plan-outline',
    featured: false,
  },
  {
    tier: 'Gold',
    desc: 'The complete launch kit for growing businesses.',
    amount: '15,000',
    note: 'One-time project fee',
    badge: 'Most Popular',
    features: [
      { text: 'Professional Website', active: true },
      { text: 'Branding Kit (Logo + Color Scheme)', active: true },
      { text: 'Social Media Starter Pack', active: true },
      { text: 'Financial Tracker System', active: false },
    ],
    btnStyle: 'btn-plan-glow',
    featured: true,
  },
  {
    tier: 'Platinum',
    desc: 'Everything your business needs — no compromises.',
    amount: '21,000',
    note: 'One-time project fee',
    features: [
      { text: 'Professional Website', active: true },
      { text: 'Branding Kit (Logo + Color Scheme)', active: true },
      { text: 'Social Media Starter Pack', active: true },
      { text: 'Financial Tracker System', active: true },
    ],
    btnStyle: 'btn-plan-outline',
    featured: false,
  },
]

function HomePage() {
  const [formData, setFormData] = useState({ name: '', email: '', service: '', msg: '' })
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)

  // Active nav highlight on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section[id]')
      const links = document.querySelectorAll('.nav-links a')
      let current = ''

      sections.forEach((s) => {
        if (window.scrollY >= s.offsetTop - 120) current = s.id
      })

      links.forEach((a) => {
        const href = a.getAttribute('href')
        if (href && href === '#' + current) {
          a.classList.add('active')
        } else {
          a.classList.remove('active')
        }
      })
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: false }))
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const newErrors = {}

    if (formData.name.trim().length < 2) newErrors.name = true
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = true
    if (!formData.service) newErrors.service = true
    if (formData.msg.trim().length < 6) newErrors.msg = true

    setErrors(newErrors)

    if (Object.keys(newErrors).length === 0) {
      setSubmitted(true)
    }
  }

  return (
    <>
      {/* ══ HERO ══ */}
      <section id="home" className="hero-section">
        <div className="orb orb-1"></div>
        <div className="orb orb-2"></div>
        <div className="orb orb-3"></div>

        <p className="hero-eyebrow fade-up delay-1">✦ Digital Agency &amp; Business Solutions</p>
        <h1 className="hero-title fade-up delay-2">LAUNCH<br />LAB</h1>
        <p className="hero-tagline fade-up delay-3">
          Your <span>Complete Business Partner</span>
        </p>
        <div className="hero-cta fade-up delay-4">
          <a href="#services" className="btn-primary">Explore Services</a>
          <a href="#contact" className="btn-secondary">Work With Us</a>
        </div>
      </section>

      {/* ══ SERVICES ══ */}
      <section id="services" className="services-section">
        <div className="section-label">What We Do</div>
        <h2 className="section-title">Our Services</h2>
        <p className="section-subtitle">
          From your first line of code to your first client — we handle everything your business needs to launch and grow.
        </p>

        <div className="services-grid">
          {services.map((s, i) => (
            <div className="service-card" key={i} style={{ '--card-accent': s.accent }}>
              <span className="service-icon">{s.icon}</span>
              <div className="service-name">{s.name}</div>
              <p className="service-desc">{s.desc}</p>
            </div>
          ))}
        </div>

        <div className="stats-row">
          <div className="stat-item">
            <div className="stat-number">7+</div>
            <div className="stat-label">Core Services</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">3</div>
            <div className="stat-label">Expert Specialists</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">∞</div>
            <div className="stat-label">Revisions on Request</div>
          </div>
        </div>
      </section>

      {/* ══ PRICING ══ */}
      <section id="pricing" className="pricing-section">
        <div className="orb orb-1" style={{ opacity: 0.5 }}></div>
        <div className="section-label">Investment</div>
        <h2 className="section-title">Transparent Pricing</h2>
        <p className="section-subtitle">
          Straightforward packages for every stage of your business. No hidden fees, no surprises.
        </p>

        <div className="pricing-grid">
          {pricingPlans.map((plan, i) => (
            <div className={`pricing-card${plan.featured ? ' featured' : ''}`} key={i}>
              {plan.badge && <div className="pricing-badge">{plan.badge}</div>}
              <div className="pricing-tier">{plan.tier}</div>
              <p className="pricing-desc">{plan.desc}</p>
              <div className="pricing-amount">
                <sup>PKR</sup>{plan.amount}
              </div>
              <p className="pricing-note">{plan.note}</p>
              <ul className="pricing-features">
                {plan.features.map((f, j) => (
                  <li key={j} className={f.active ? '' : 'muted'}>{f.text}</li>
                ))}
              </ul>
              <a href="#contact" className={`btn-plan ${plan.btnStyle}`}>Get Started</a>
            </div>
          ))}
        </div>

        <p className="pricing-custom">
          Need something custom? <a href="#contact">Let's talk →</a>
        </p>
      </section>

      {/* ══ CONTACT ══ */}
      <section id="contact" className="contact-section">
        <div className="contact-layout">
          <div className="contact-info">
            <div className="section-label">Get In Touch</div>
            <h2 className="section-title">Let's Build<br />Something.</h2>
            <p className="section-subtitle" style={{ marginBottom: 0 }}>
              Tell us about your project and we'll get back to you within 24 hours. Or reach us directly below.
            </p>

            <div className="contact-channels">
              <a href="mailto:team.launchlab@outlook.com" className="channel-card">
                <div className="channel-icon email">✉</div>
                <div>
                  <div className="channel-label">Email Us</div>
                  <div className="channel-value">team.launchlab@outlook.com</div>
                </div>
              </a>

              <a href="https://instagram.com/launchlab.agency" target="_blank" rel="noopener noreferrer" className="channel-card">
                <div className="channel-icon instagram">◈</div>
                <div>
                  <div className="channel-label">Instagram</div>
                  <div className="channel-value">@launchlab.agency</div>
                </div>
              </a>
            </div>
          </div>

          {/* CONTACT FORM */}
          <div className="contact-form">
            <div className="form-title">Send A Message</div>

            {!submitted ? (
              <form onSubmit={handleSubmit} noValidate>
                <div className={`form-group${errors.name ? ' has-error' : ''}`}>
                  <label htmlFor="fname">Your Name</label>
                  <input
                    type="text"
                    id="fname"
                    name="name"
                    placeholder="Ahmed Khan"
                    value={formData.name}
                    onChange={handleChange}
                  />
                  <div className="form-error">Please enter your name.</div>
                </div>

                <div className={`form-group${errors.email ? ' has-error' : ''}`}>
                  <label htmlFor="femail">Email Address</label>
                  <input
                    type="email"
                    id="femail"
                    name="email"
                    placeholder="you@example.com"
                    value={formData.email}
                    onChange={handleChange}
                  />
                  <div className="form-error">Please enter a valid email.</div>
                </div>

                <div className={`form-group${errors.service ? ' has-error' : ''}`}>
                  <label htmlFor="fservice">Service Interested In</label>
                  <select
                    id="fservice"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                  >
                    <option value="">Select a package...</option>
                    <option>Bronze — Social Media Revamp</option>
                    <option>Silver — Website + Branding</option>
                    <option>Gold — Full Launch Kit</option>
                    <option>Platinum — Complete Package</option>
                    <option>Custom Package</option>
                  </select>
                  <div className="form-error">Please select a service.</div>
                </div>

                <div className={`form-group${errors.msg ? ' has-error' : ''}`}>
                  <label htmlFor="fmsg">Your Message</label>
                  <textarea
                    id="fmsg"
                    name="msg"
                    placeholder="Tell us a bit about your project..."
                    value={formData.msg}
                    onChange={handleChange}
                  />
                  <div className="form-error">Please include a message.</div>
                </div>

                <button type="submit" className="form-submit">Send Message →</button>
              </form>
            ) : (
              <div className="form-success" style={{ display: 'block' }}>
                <div className="success-icon">✦</div>
                <h3>Message Received</h3>
                <p>We'll be in touch within 24 hours. In the meantime, follow us on Instagram for updates.</p>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  )
}

export default HomePage
