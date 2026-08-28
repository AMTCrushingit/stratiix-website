import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Results That Hold Beyond the Founder',
  description: 'Stratiix measures success by what changes inside the organization and what continues to perform long after the engagement ends.',
}

export default function ResultsPage() {
  return (
    <>
      {/* Hero */}
      <section style={{
        background: 'linear-gradient(135deg, #111214 0%, #1E1F22 100%)',
        paddingTop: 140, paddingBottom: 96,
        position: 'relative', overflow: 'hidden',
      }}>
        <div style={{ position: 'absolute', top: '20%', right: '10%', width: 400, height: 400, borderRadius: '50%', background: '#C9A86A', opacity: 0.07, filter: 'blur(80px)' }} />
        <div style={{ position: 'absolute', bottom: '10%', left: '5%', width: 300, height: 300, borderRadius: '50%', background: '#046C5C', opacity: 0.07, filter: 'blur(60px)' }} />
        <div style={{ padding: '0 6vw', position: 'relative', zIndex: 1 }}>
          <div style={{ fontSize: '0.72rem', fontWeight: 700, color: '#B2DDD7', letterSpacing: '0.18em', textTransform: 'uppercase', marginBottom: 20 }}>
            Outcomes
          </div>
          <h1 style={{ color: 'white', maxWidth: 760, marginBottom: 28, fontSize: 'clamp(2.2rem, 4vw, 3.8rem)', fontWeight: 900, lineHeight: 1.08, letterSpacing: '-0.02em' }}>
            Results That Hold<br/>
            <span style={{ color: '#B2DDD7' }}>Beyond the Founder.</span>
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: '1.1rem', maxWidth: 620, lineHeight: 1.85, marginBottom: 44 }}>
            Stratiix does not measure success by deliverables produced. Success is measured by what changes inside the organization and what continues to perform long after the engagement ends.
          </p>
          {/* Signature statement */}
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 12,
            padding: '14px 24px', borderRadius: 12,
            background: 'rgba(4,108,92,0.15)', border: '1px solid rgba(4,108,92,0.35)',
          }}>
            <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#046C5C', flexShrink: 0 }} />
            <span style={{ fontSize: '0.95rem', fontWeight: 700, color: 'rgba(255,255,255,0.85)', fontFamily: 'var(--font-display)', fontStyle: 'italic' }}>
              Success is measured by capability installed, adopted, and improved.
            </span>
          </div>
        </div>
      </section>

      {/* What Success Looks Like */}
      <section style={{ background: '#F3F4F6', padding: '96px 0' }}>
        <div style={{ padding: '0 6vw' }}>
          <div style={{ textAlign: 'center', marginBottom: 72 }}>
            <div style={{ fontSize: '0.72rem', fontWeight: 700, color: '#046C5C', letterSpacing: '0.18em', textTransform: 'uppercase', marginBottom: 16 }}>
              The Outcomes Framework
            </div>
            <h2 style={{ fontSize: 'clamp(1.8rem, 3vw, 2.75rem)', fontWeight: 900, color: '#1E1F22', lineHeight: 1.1, letterSpacing: '-0.02em' }}>
              What Success Looks Like
            </h2>
            <div style={{ width: 48, height: 3, background: '#046C5C', borderRadius: 2, margin: '20px auto 0' }} />
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }} className="three-col">
            {[
              {
                n: '01', label: 'Installed', color: '#2563EB',
                lead: 'Capability systems, governance structures, and operating frameworks are functioning inside the organization.',
                body: 'Installed means the required capabilities are no longer recommendations. They are operating as part of how the organization works.',
              },
              {
                n: '02', label: 'Adopted', color: '#046C5C',
                lead: 'Leaders and teams consistently use the new systems, operating rhythms, and accountability structures.',
                body: 'Transformation does not succeed because systems exist. It succeeds because people use them.',
              },
              {
                n: '03', label: 'Improved', color: '#C9A86A',
                lead: 'Performance indicators show measurable movement against the baseline established during the Diagnostic™.',
                body: 'Improvement may include operational efficiency, organizational capacity, leadership effectiveness, visibility, accountability, or other agreed performance outcomes.',
              },
            ].map((o, i) => (
              <div key={o.label} style={{
                background: 'white', borderRadius: 16,
                border: '1px solid #E5E7EB',
                borderTop: `4px solid ${o.color}`,
                padding: '36px 32px',
                display: 'flex', flexDirection: 'column', gap: 0,
              }}>
                {/* Animated SVG checkmark */}
                <div style={{ marginBottom: 24 }}>
                  <svg width="52" height="52" viewBox="0 0 52 52" fill="none">
                    <circle cx="26" cy="26" r="22" stroke={o.color} strokeWidth="2"
                      fill={`${o.color}12`}
                      style={{ strokeDasharray: 160, strokeDashoffset: 160,
                        animation: `checkCircleR 0.7s ease ${i * 0.2}s both` }} />
                    <polyline points="16,26 22,34 36,18" stroke={o.color} strokeWidth="2.5"
                      strokeLinecap="round" strokeLinejoin="round" fill="none"
                      style={{ strokeDasharray: 50, strokeDashoffset: 50,
                        animation: `checkDrawR 0.4s ease ${i * 0.2 + 0.6}s both` }} />
                  </svg>
                </div>
                <h3 style={{ fontSize: '1.5rem', fontWeight: 900, color: '#1E1F22', marginBottom: 16, fontFamily: 'var(--font-display)', letterSpacing: '-0.02em' }}>{o.label}</h3>
                <p style={{ color: '#1E1F22', fontSize: '0.95rem', lineHeight: 1.75, marginBottom: 16, fontWeight: 600 }}>{o.lead}</p>
                <p style={{ color: '#6B7280', fontSize: '0.875rem', lineHeight: 1.75, margin: 0, fontStyle: 'italic' }}>{o.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Measurement Without Guesswork */}
      <section style={{ background: '#1E1F22', padding: '96px 0', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '20%', left: '50%', transform: 'translateX(-50%)', width: 800, height: 400, borderRadius: '50%', background: 'radial-gradient(ellipse, rgba(4,108,92,0.08) 0%, transparent 70%)', pointerEvents: 'none' }} />
        <div style={{ padding: '0 6vw', position: 'relative', zIndex: 1 }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'start' }} className="two-col">
            <div>
              <div style={{ fontSize: '0.72rem', fontWeight: 700, color: '#B2DDD7', letterSpacing: '0.18em', textTransform: 'uppercase', marginBottom: 20 }}>Measurement</div>
              <h2 style={{ color: 'white', fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', fontWeight: 900, lineHeight: 1.1, marginBottom: 24, letterSpacing: '-0.02em' }}>
                Measurement<br/>
                <span style={{ color: '#046C5C' }}>Without Guesswork</span>
              </h2>
              <div style={{ width: 48, height: 3, background: '#046C5C', borderRadius: 2, marginBottom: 28 }} />
              <p style={{ color: 'rgba(255,255,255,0.65)', lineHeight: 1.85, marginBottom: 20, fontSize: '1.05rem' }}>
                Every Stratiix engagement begins with the Diagnostic™, which establishes a baseline against which progress is measured.
              </p>
              <p style={{ color: 'rgba(255,255,255,0.45)', lineHeight: 1.8, fontSize: '1rem' }}>
                Results are measured against the organization's starting point, not industry benchmarks, assumptions, or subjective opinions.
              </p>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
              {[
                { n: '01', label: 'Baseline Established', desc: 'Understand where performance stands today.', color: '#2563EB' },
                { n: '02', label: 'Outcomes Defined', desc: 'Identify what success will look like.', color: '#7C3AED' },
                { n: '03', label: 'Progress Measured', desc: 'Track performance against agreed outcomes.', color: '#046C5C' },
                { n: '04', label: 'Results Demonstrated', desc: 'Evidence-based improvements against the original baseline.', color: '#C9A86A' },
              ].map((m, i) => (
                <div key={m.label} style={{
                  display: 'flex', gap: 20, alignItems: 'flex-start',
                  padding: '24px 0',
                  borderBottom: i < 3 ? '1px solid rgba(255,255,255,0.07)' : 'none',
                }}>
                  <div style={{
                    fontSize: '0.68rem', fontWeight: 800, color: m.color,
                    letterSpacing: '0.12em', flexShrink: 0, paddingTop: 3,
                    fontFamily: 'var(--font-display)', minWidth: 28,
                  }}>{m.n}</div>
                  <div>
                    <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, color: 'white', marginBottom: 4, fontSize: '1rem' }}>{m.label}</div>
                    <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: '0.875rem', margin: 0, lineHeight: 1.65 }}>{m.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section style={{
        background: 'linear-gradient(135deg, #035549 0%, #046C5C 50%, #057a68 100%)',
        padding: '100px 0', position: 'relative', overflow: 'hidden',
      }}>
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', width: 600, height: 600, borderRadius: '50%', background: 'rgba(255,255,255,0.04)', filter: 'blur(60px)', pointerEvents: 'none' }} />
        <div style={{ padding: '0 6vw', textAlign: 'center', position: 'relative', zIndex: 1, maxWidth: 760, margin: '0 auto' }}>
          <div style={{ fontSize: '0.72rem', fontWeight: 700, color: 'rgba(255,255,255,0.6)', letterSpacing: '0.18em', textTransform: 'uppercase', marginBottom: 20 }}>Get Started</div>
          <h2 style={{ color: 'white', fontSize: 'clamp(2rem, 3.5vw, 3rem)', fontWeight: 900, marginBottom: 20, lineHeight: 1.1, letterSpacing: '-0.02em' }}>
            Ready to Build Results That<br/>Hold Beyond the Founder?
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.7)', maxWidth: 560, margin: '0 auto 12px', fontSize: '1.05rem', lineHeight: 1.8 }}>
            The first step isn't another strategy session. It's understanding what is limiting performance.
          </p>
          <p style={{ color: 'rgba(255,255,255,0.65)', maxWidth: 560, margin: '0 auto 40px', fontSize: '1rem', lineHeight: 1.8 }}>
            The Stratiix Path Diagnostic™ provides the clarity required to identify capability gaps, establish a baseline, and create a roadmap for improvement.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8, marginBottom: 40 }}>
            <div style={{ fontSize: '2rem', fontWeight: 900, color: 'white', letterSpacing: '-0.03em', fontFamily: 'var(--font-display)' }}>
              $1,499 <span style={{ fontSize: '1rem', fontWeight: 500, color: 'rgba(255,255,255,0.6)' }}>USD</span>
            </div>
            <div style={{ fontSize: '0.875rem', color: 'rgba(255,255,255,0.6)' }}>
              50% credited toward any subsequent Stratiix engagement.
            </div>
          </div>
          <Link href="/diagnostic" style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            padding: '15px 36px', borderRadius: 10,
            background: 'white', color: '#046C5C',
            fontWeight: 800, fontSize: '0.95rem', textDecoration: 'none',
            boxShadow: '0 8px 32px rgba(0,0,0,0.2)',
            fontFamily: 'var(--font-display)',
          }}>
            Begin with the Diagnostic™ →
          </Link>
        </div>
      </section>
    </>
  )
}