'use client'
import { useState } from 'react'
import type { Metadata } from 'next'

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', org: '', email: '', role: '', interest: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handle = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm(f => ({ ...f, [e.target.name]: e.target.value }))
  }

  const submit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    try {
      const res = await fetch('https://formspree.io/f/diagnostic@stratiixpartners.com', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify({
          name: form.name,
          organization: form.org,
          email: form.email,
          role: form.role,
          interest: form.interest,
          message: form.message,
          _replyto: form.email,
          _subject: `Stratiix Diagnostic Request: ${form.org || form.name}`,
        }),
      })
      if (res.ok) {
        setSubmitted(true)
      } else {
        alert('Something went wrong. Please email us directly at diagnostic@stratiixpartners.com')
      }
    } catch {
      alert('Connection error. Please email us directly at diagnostic@stratiixpartners.com')
    } finally {
      setLoading(false)
    }
  }

  const inputStyle: React.CSSProperties = {
    width: '100%', padding: '12px 16px',
    background: 'var(--slate)', border: '1px solid var(--slate-mid)',
    borderRadius: 8, fontSize: '0.95rem', color: 'var(--charcoal)',
    fontFamily: 'var(--font-body)', outline: 'none',
    transition: 'border-color 0.2s',
  }
  const labelStyle: React.CSSProperties = {
    display: 'block', fontSize: '0.82rem', fontWeight: 600,
    color: 'var(--charcoal)', marginBottom: 8, letterSpacing: '0.02em',
  }

  return (
    <>
      {/* Hero */}
      <section style={{
        background: 'linear-gradient(135deg, #050A14 0%, #062E35 100%)',
        paddingTop: 140, paddingBottom: 96,
        position: 'relative', overflow: 'hidden',
      }}>
        <div style={{ position: 'absolute', top: '20%', right: '10%', width: 400, height: 400, borderRadius: '50%', background: 'var(--teal)', opacity: 0.08, filter: 'blur(80px)' }} />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <span className="eyebrow">Get in Touch</span>
          <h1 style={{ color: 'white', maxWidth: 640, marginBottom: 24 }}>Contact Stratiix</h1>
          <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: '1.15rem', maxWidth: 520, lineHeight: 1.8 }}>
            Begin a transformation conversation. Tell us about your organization and what you are trying to achieve.
          </p>
        </div>
      </section>

      {/* Form + Info */}
      <section className="section bg-white">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.6fr', gap: 80, alignItems: 'start' }}>
            {/* Left info */}
            <div>
              <span className="eyebrow">How We Engage</span>
              <h2 style={{ fontSize: '1.75rem', marginBottom: 16 }}>Every engagement begins with a conversation.</h2>
              <div className="divider" />
              <p style={{ color: 'var(--muted)', lineHeight: 1.8, marginBottom: 32 }}>
                Stratiix does not take on engagements without first understanding the organization. The contact form is the beginning of that conversation.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
                {[
                  { n: '01', title: 'Initial Conversation', desc: 'A structured discussion about your organization, your current challenges, and what you are trying to achieve.' },
                  { n: '02', title: 'Diagnostic Assessment', desc: 'If there is a fit, we begin with the Diagnostic: a structured assessment of your organization\'s current state and transformation readiness.' },
                  { n: '03', title: 'Engagement Design', desc: 'Based on the Diagnostic findings, we design the TOS engagement that is right for your organization.' },
                ].map(s => (
                  <div key={s.n} style={{ display: 'flex', gap: 16 }}>
                    <div style={{ width: 36, height: 36, borderRadius: '50%', background: 'var(--teal-xlight)', border: '1px solid var(--teal-light)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '0.72rem', color: 'var(--teal)', flexShrink: 0 }}>{s.n}</div>
                    <div>
                      <div style={{ fontFamily: 'var(--font-display)', fontWeight: 600, color: 'var(--charcoal)', marginBottom: 4 }}>{s.title}</div>
                      <p style={{ fontSize: '0.875rem', color: 'var(--muted)', margin: 0, lineHeight: 1.65 }}>{s.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Form */}
            <div style={{ background: 'var(--slate)', borderRadius: 16, padding: '48px', border: '1px solid var(--slate-mid)' }}>
              {submitted ? (
                <div style={{ textAlign: 'center', padding: '40px 0' }}>
                  <div style={{ width: 64, height: 64, borderRadius: '50%', background: 'var(--teal-xlight)', border: '2px solid var(--teal)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 24px', fontSize: '1.5rem' }}>✓</div>
                  <h3 style={{ marginBottom: 12 }}>Message received.</h3>
                  <p style={{ color: 'var(--muted)', lineHeight: 1.75 }}>
                    Thank you for reaching out. A member of the Stratiix team will be in touch within two business days.
                  </p>
                </div>
              ) : (
                <form onSubmit={submit}>
                  <h3 style={{ marginBottom: 32, fontSize: '1.25rem' }}>Begin the Conversation</h3>
                  <div className="grid-2" style={{ marginBottom: 20 }}>
                    <div>
                      <label style={labelStyle}>Full Name *</label>
                      <input name="name" value={form.name} onChange={handle} required style={inputStyle} placeholder="Your name"
                        onFocus={e => (e.target as HTMLInputElement).style.borderColor = 'var(--teal)'}
                        onBlur={e => (e.target as HTMLInputElement).style.borderColor = 'var(--slate-mid)'}
                      />
                    </div>
                    <div>
                      <label style={labelStyle}>Organization *</label>
                      <input name="org" value={form.org} onChange={handle} required style={inputStyle} placeholder="Organization name"
                        onFocus={e => (e.target as HTMLInputElement).style.borderColor = 'var(--teal)'}
                        onBlur={e => (e.target as HTMLInputElement).style.borderColor = 'var(--slate-mid)'}
                      />
                    </div>
                  </div>
                  <div className="grid-2" style={{ marginBottom: 20 }}>
                    <div>
                      <label style={labelStyle}>Email Address *</label>
                      <input name="email" type="email" value={form.email} onChange={handle} required style={inputStyle} placeholder="your@email.com"
                        onFocus={e => (e.target as HTMLInputElement).style.borderColor = 'var(--teal)'}
                        onBlur={e => (e.target as HTMLInputElement).style.borderColor = 'var(--slate-mid)'}
                      />
                    </div>
                    <div>
                      <label style={labelStyle}>Your Role</label>
                      <input name="role" value={form.role} onChange={handle} style={inputStyle} placeholder="CEO, Director, etc."
                        onFocus={e => (e.target as HTMLInputElement).style.borderColor = 'var(--teal)'}
                        onBlur={e => (e.target as HTMLInputElement).style.borderColor = 'var(--slate-mid)'}
                      />
                    </div>
                  </div>
                  <div style={{ marginBottom: 20 }}>
                    <label style={labelStyle}>Area of Interest</label>
                    <select name="interest" value={form.interest} onChange={handle} style={{ ...inputStyle, cursor: 'pointer' }}>
                      <option value="">Select an area</option>
                      <option>The Diagnostic™</option>
                      <option>Transformation Operating System™</option>
                      <option>Capability Engines™</option>
                      <option>HVAC Solutions</option>
                      <option>Trucking & Logistics Solutions</option>
                      <option>Professional Services Solutions</option>
                      <option>Nonprofits & Institutions</option>
                      <option>General Enquiry</option>
                    </select>
                  </div>
                  <div style={{ marginBottom: 32 }}>
                    <label style={labelStyle}>Tell us about your organization *</label>
                    <textarea name="message" value={form.message} onChange={handle} required rows={5} style={{ ...inputStyle, resize: 'vertical', lineHeight: 1.65 }} placeholder="Describe your organization, your current challenges, and what you are trying to achieve."
                      onFocus={e => (e.target as HTMLTextAreaElement).style.borderColor = 'var(--teal)'}
                      onBlur={e => (e.target as HTMLTextAreaElement).style.borderColor = 'var(--slate-mid)'}
                    />
                  </div>
                  <button type="submit" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center', padding: '16px', fontSize: '1rem' }} disabled={loading}>
                    {loading ? 'Sending...' : 'Send Message →'}
                  </button>
                  <p style={{ fontSize: '0.78rem', color: 'var(--muted)', textAlign: 'center', marginTop: 16 }}>
                    We respond within two business days.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}