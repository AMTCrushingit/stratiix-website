'use client'
import { useState } from 'react'

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
          _subject: `Stratiix Inquiry — ${form.org || form.name}`,
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
    background: '#F3F4F6', border: '1px solid #E5E7EB',
    borderRadius: 8, fontSize: '0.95rem', color: '#1E1F22',
    fontFamily: 'var(--font-body)', outline: 'none',
    transition: 'border-color 0.2s',
  }
  const labelStyle: React.CSSProperties = {
    display: 'block', fontSize: '0.82rem', fontWeight: 700,
    color: '#1E1F22', marginBottom: 8, letterSpacing: '0.02em',
    fontFamily: 'var(--font-display)',
  }

  return (
    <>
      {/* Hero */}
      <section style={{
        background: 'linear-gradient(135deg, #111214 0%, #1E1F22 100%)',
        paddingTop: 140, paddingBottom: 96,
        position: 'relative', overflow: 'hidden',
      }}>
        <div style={{ position: 'absolute', top: '20%', right: '10%', width: 400, height: 400, borderRadius: '50%', background: '#046C5C', opacity: 0.07, filter: 'blur(80px)' }} />
        <div style={{ padding: '0 6vw', position: 'relative', zIndex: 1 }}>
          <div style={{ fontSize: '0.72rem', fontWeight: 700, color: '#046C5C', letterSpacing: '0.18em', textTransform: 'uppercase', marginBottom: 20 }}>
            Contact Stratiix
          </div>
          <h1 style={{ color: 'white', maxWidth: 680, marginBottom: 28, fontSize: 'clamp(2.2rem, 4vw, 3.5rem)', fontWeight: 900, lineHeight: 1.08, letterSpacing: '-0.02em' }}>
            Ready to Scale<br/>
            <span style={{ color: '#B2DDD7' }}>Beyond the Founder?</span>
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: '1.05rem', maxWidth: 560, lineHeight: 1.85, marginBottom: 16 }}>
            Tell us about your organization, what's limiting performance, and what you're trying to achieve.
          </p>
          <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: '0.95rem', maxWidth: 520, lineHeight: 1.8 }}>
            Every engagement begins with understanding where you are today and what capability is required for your next stage of growth.
          </p>
        </div>
      </section>

      {/* Form + Info */}
      <section style={{ background: '#FAFAFA', padding: '96px 0' }}>
        <div style={{ padding: '0 6vw' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.5fr', gap: 80, alignItems: 'start' }} className="two-col">

            {/* Left — How We Engage */}
            <div>
              <div style={{ fontSize: '0.72rem', fontWeight: 700, color: '#046C5C', letterSpacing: '0.18em', textTransform: 'uppercase', marginBottom: 20 }}>How We Engage</div>
              <h2 style={{ fontSize: 'clamp(1.6rem, 2.5vw, 2.2rem)', fontWeight: 900, color: '#1E1F22', lineHeight: 1.1, marginBottom: 20, letterSpacing: '-0.02em' }}>
                Every engagement<br/>begins with clarity.
              </h2>
              <div style={{ width: 48, height: 3, background: '#046C5C', borderRadius: 2, marginBottom: 28 }} />
              <p style={{ color: '#4B4C51', lineHeight: 1.85, marginBottom: 12, fontSize: '1rem' }}>
                Stratiix does not prescribe solutions before understanding the organization.
              </p>
              <p style={{ color: '#6B7280', lineHeight: 1.8, marginBottom: 40, fontSize: '0.95rem' }}>
                The conversation is designed to identify your goals, challenges, and the factors currently limiting performance.
              </p>

              {/* Steps */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
                {[
                  { n: '01', title: 'Initial Conversation', desc: 'A structured discussion about your organization, current challenges, and growth objectives.' },
                  { n: '02', title: 'Stratiix Path Diagnostic™', desc: 'If there is a fit, we begin with the Diagnostic™ to establish a baseline, identify capability gaps, and determine priorities.' },
                  { n: '03', title: 'Engagement Design', desc: 'Based on the Diagnostic findings, we design the Transformation Operating System™, Capability Engine deployment, or advisory engagement that best fits the organization.' },
                ].map((s, i) => (
                  <div key={s.n} style={{
                    display: 'flex', gap: 18, alignItems: 'flex-start',
                    padding: '20px 0',
                    borderBottom: i < 2 ? '1px solid #E5E7EB' : 'none',
                  }}>
                    <div style={{
                      width: 36, height: 36, borderRadius: '50%',
                      background: 'rgba(4,108,92,0.1)', border: '1px solid rgba(4,108,92,0.25)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '0.68rem',
                      color: '#046C5C', flexShrink: 0,
                    }}>{s.n}</div>
                    <div>
                      <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, color: '#1E1F22', marginBottom: 4, fontSize: '0.95rem' }}>{s.title}</div>
                      <p style={{ fontSize: '0.875rem', color: '#6B7280', margin: 0, lineHeight: 1.65 }}>{s.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Investment signal */}
              <div style={{
                marginTop: 40, padding: '24px 28px',
                background: 'white', border: '1px solid #E5E7EB',
                borderLeft: '4px solid #046C5C',
                borderRadius: '0 12px 12px 0',
              }}>
                <div style={{ fontSize: '0.72rem', fontWeight: 700, color: '#046C5C', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: 12 }}>
                  The Stratiix Path Diagnostic™
                </div>
                <div style={{ fontSize: '1.5rem', fontWeight: 900, color: '#1E1F22', fontFamily: 'var(--font-display)', letterSpacing: '-0.02em', marginBottom: 6 }}>
                  $1,499 <span style={{ fontSize: '0.9rem', fontWeight: 500, color: '#6B7280' }}>USD</span>
                </div>
                <p style={{ fontSize: '0.82rem', color: '#6B7280', margin: 0, lineHeight: 1.6 }}>
                  50% credited toward any subsequent Stratiix engagement.
                </p>
              </div>

              {/* Direct email */}
              <p style={{ marginTop: 24, fontSize: '0.82rem', color: '#9CA3AF' }}>
                Or email us directly:{' '}
                <a href="mailto:diagnostic@stratiixpartners.com" style={{ color: '#046C5C', fontWeight: 600, textDecoration: 'none' }}>
                  diagnostic@stratiixpartners.com
                </a>
              </p>
            </div>

            {/* Right — Form */}
            <div style={{ background: 'white', borderRadius: 20, padding: '48px', border: '1px solid #E5E7EB', boxShadow: '0 4px 32px rgba(0,0,0,0.06)' }}>
              {submitted ? (
                <div style={{ textAlign: 'center', padding: '40px 0' }}>
                  <div style={{ width: 64, height: 64, borderRadius: '50%', background: 'rgba(4,108,92,0.1)', border: '2px solid #046C5C', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 24px', fontSize: '1.5rem' }}>✓</div>
                  <h3 style={{ marginBottom: 12, fontFamily: 'var(--font-display)', fontWeight: 800, color: '#1E1F22' }}>Message received.</h3>
                  <p style={{ color: '#6B7280', lineHeight: 1.75 }}>
                    Thank you for reaching out. A member of the Stratiix team will be in touch within two business days.
                  </p>
                </div>
              ) : (
                <form onSubmit={submit}>
                  <h3 style={{ marginBottom: 8, fontSize: '1.25rem', fontFamily: 'var(--font-display)', fontWeight: 800, color: '#1E1F22' }}>Begin the Conversation</h3>
                  <p style={{ color: '#6B7280', fontSize: '0.875rem', marginBottom: 32, lineHeight: 1.6 }}>
                    Tell us about your organization and what you're trying to achieve.
                  </p>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 16 }}>
                    <div>
                      <label style={labelStyle}>Full Name *</label>
                      <input name="name" value={form.name} onChange={handle} required style={inputStyle} placeholder="Your name"
                        onFocus={e => (e.target as HTMLInputElement).style.borderColor = '#046C5C'}
                        onBlur={e => (e.target as HTMLInputElement).style.borderColor = '#E5E7EB'} />
                    </div>
                    <div>
                      <label style={labelStyle}>Organization *</label>
                      <input name="org" value={form.org} onChange={handle} required style={inputStyle} placeholder="Organization name"
                        onFocus={e => (e.target as HTMLInputElement).style.borderColor = '#046C5C'}
                        onBlur={e => (e.target as HTMLInputElement).style.borderColor = '#E5E7EB'} />
                    </div>
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 16 }}>
                    <div>
                      <label style={labelStyle}>Email Address *</label>
                      <input name="email" type="email" value={form.email} onChange={handle} required style={inputStyle} placeholder="your@email.com"
                        onFocus={e => (e.target as HTMLInputElement).style.borderColor = '#046C5C'}
                        onBlur={e => (e.target as HTMLInputElement).style.borderColor = '#E5E7EB'} />
                    </div>
                    <div>
                      <label style={labelStyle}>Your Role</label>
                      <input name="role" value={form.role} onChange={handle} style={inputStyle} placeholder="CEO, Founder, Director..."
                        onFocus={e => (e.target as HTMLInputElement).style.borderColor = '#046C5C'}
                        onBlur={e => (e.target as HTMLInputElement).style.borderColor = '#E5E7EB'} />
                    </div>
                  </div>

                  <div style={{ marginBottom: 16 }}>
                    <label style={labelStyle}>How Can We Help?</label>
                    <select name="interest" value={form.interest} onChange={handle} style={{ ...inputStyle, cursor: 'pointer' }}>
                      <option value="">Select an area</option>
                      <option>Stratiix Path Diagnostic™</option>
                      <option>Transformation Operating System™</option>
                      <option>Capability Engines™</option>
                      <option>Organizational Performance & Growth</option>
                      <option>Executive Advisory</option>
                      <option>General Inquiry</option>
                    </select>
                  </div>

                  <div style={{ marginBottom: 32 }}>
                    <label style={labelStyle}>What challenge are you trying to solve? *</label>
                    <textarea name="message" value={form.message} onChange={handle} required rows={5}
                      style={{ ...inputStyle, resize: 'vertical', lineHeight: 1.65 }}
                      placeholder="Describe your organization, current challenges, growth objectives, or the outcomes you're trying to achieve."
                      onFocus={e => (e.target as HTMLTextAreaElement).style.borderColor = '#046C5C'}
                      onBlur={e => (e.target as HTMLTextAreaElement).style.borderColor = '#E5E7EB'} />
                  </div>

                  <button type="submit" style={{
                    width: '100%', padding: '15px',
                    background: '#046C5C', color: 'white',
                    border: 'none', borderRadius: 10,
                    fontSize: '0.95rem', fontWeight: 700,
                    cursor: loading ? 'not-allowed' : 'pointer',
                    fontFamily: 'var(--font-display)',
                    opacity: loading ? 0.7 : 1,
                    boxShadow: '0 8px 32px rgba(4,108,92,0.25)',
                    transition: 'all 0.2s',
                  }} disabled={loading}>
                    {loading ? 'Sending...' : 'Send Message →'}
                  </button>
                  <p style={{ fontSize: '0.78rem', color: '#9CA3AF', textAlign: 'center', marginTop: 16 }}>
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