'use client'
import Link from 'next/link'
import { AnimatedStratiixPath } from '@/components/AnimatedStratiixPath'

export default function TOSPage() {
  return (
    <>
      {/* Hero */}
      <section style={{
        background: 'linear-gradient(135deg, #111214 0%, #1E1F22 100%)',
        paddingTop: 140, paddingBottom: 96,
        position: 'relative', overflow: 'hidden',
      }}>
        <div style={{ position: 'absolute', top: '20%', right: '10%', width: 400, height: 400, borderRadius: '50%', background: '#7C3AED', opacity: 0.07, filter: 'blur(80px)' }} />
        <div style={{ position: 'absolute', bottom: '10%', left: '5%', width: 300, height: 300, borderRadius: '50%', background: '#046C5C', opacity: 0.07, filter: 'blur(60px)' }} />
        <div style={{ padding: '0 6vw', position: 'relative', zIndex: 1 }}>
          <div style={{ fontSize: '0.72rem', fontWeight: 700, color: '#046C5C', letterSpacing: '0.18em', textTransform: 'uppercase', marginBottom: 20 }}>
            The Transformation Operating System™
          </div>
          <h1 style={{ color: 'white', maxWidth: 760, marginBottom: 28, fontSize: 'clamp(2.2rem, 4vw, 3.8rem)', fontWeight: 900, lineHeight: 1.08, letterSpacing: '-0.02em' }}>
            A system for helping founder-led organizations<br/>
            <span style={{ color: '#B2DDD7' }}>scale beyond the founder.</span>
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: '1.1rem', maxWidth: 620, lineHeight: 1.85, marginBottom: 20 }}>
            The Transformation Operating System™ connects diagnosis, capability building, performance improvement, and sustainability into a single integrated system.
          </p>
          <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '1rem', maxWidth: 560, lineHeight: 1.8, marginBottom: 44 }}>
            It is how Stratiix transforms founder dependency into organizational capability.
          </p>
          <Link href="/diagnostic" style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            padding: '14px 32px', borderRadius: 10,
            background: '#046C5C', color: 'white',
            fontWeight: 700, fontSize: '0.95rem', textDecoration: 'none',
            boxShadow: '0 8px 32px rgba(4,108,92,0.35)',
            fontFamily: 'var(--font-display)',
          }}>
            Begin with the Diagnostic™ →
          </Link>
        </div>
      </section>

      {/* SECTION 1 — Why Strategy Alone Doesn't Produce Results */}
      <section style={{ background: 'white', padding: '96px 0' }}>
        <div style={{ padding: '0 6vw' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'start' }} className="two-col">
            <div>
              <div style={{ fontSize: '0.72rem', fontWeight: 700, color: '#046C5C', letterSpacing: '0.18em', textTransform: 'uppercase', marginBottom: 16 }}>The Problem</div>
              <h2 style={{ fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', fontWeight: 800, color: '#1E1F22', marginBottom: 24, lineHeight: 1.1 }}>
                Why Strategy Alone<br/>Doesn't Produce Results
              </h2>
              <div style={{ width: 48, height: 3, background: '#046C5C', borderRadius: 2, marginBottom: 28 }} />
              <p style={{ marginBottom: 20, fontSize: '1.05rem', lineHeight: 1.85, color: '#4B4C51' }}>
                Organizations often struggle because strategy, execution, leadership, governance, and performance improvement are treated as separate challenges.
              </p>
              <p style={{ color: '#6B7280', lineHeight: 1.8 }}>
                The Transformation Operating System™ integrates them into one connected system.
              </p>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
              {[
                { label: 'Integrated', desc: 'Five phases that build on each other, not independent workstreams.', color: '#2563EB' },
                { label: 'Sequenced', desc: 'Each phase unlocks the next. The order is not arbitrary.', color: '#7C3AED' },
                { label: 'Measurable', desc: 'Every phase produces defined outputs and measurable outcomes.', color: '#046C5C' },
                { label: 'Sustainable', desc: 'Built to hold without ongoing external support.', color: '#C9A86A' },
              ].map(f => (
                <div key={f.label} style={{
                  padding: '24px', background: '#F3F4F6', borderRadius: 12,
                  border: '1px solid #E5E7EB', borderTop: `3px solid ${f.color}`,
                }}>
                  <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, color: f.color, marginBottom: 8, fontSize: '0.95rem' }}>{f.label}</div>
                  <p style={{ fontSize: '0.85rem', color: '#6B7280', margin: 0, lineHeight: 1.65 }}>{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2 — THE SYSTEM: Visual only, no explanation */}
      <section style={{ background: '#F3F4F6', padding: '96px 0' }}>
        <div style={{ padding: '0 6vw' }}>
          <div style={{ textAlign: 'center', marginBottom: 64 }}>
            <div style={{ fontSize: '0.72rem', fontWeight: 700, color: '#046C5C', letterSpacing: '0.18em', textTransform: 'uppercase', marginBottom: 20 }}>
              The System
            </div>
            <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)', fontWeight: 900, color: '#1E1F22', lineHeight: 1.1, marginBottom: 20, letterSpacing: '-0.02em' }}>
              The Transformation Operating System™
            </h2>
            <p style={{ color: '#6B7280', maxWidth: 600, margin: '0 auto', fontSize: '1.05rem', lineHeight: 1.8 }}>
              A diagnostic-led system that helps organizations move from uncertainty and founder dependency to organizational capability and sustainable performance.
            </p>
          </div>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <AnimatedStratiixPath />
          </div>
        </div>
      </section>

      {/* SECTION 3 — THE JOURNEY: The Stratiix Path™ */}
      <section style={{ background: '#1E1F22', padding: '96px 0' }}>
        <div style={{ padding: '0 6vw' }}>
          <div style={{ textAlign: 'center', marginBottom: 72 }}>
            <div style={{ fontSize: '0.72rem', fontWeight: 700, color: '#B2DDD7', letterSpacing: '0.18em', textTransform: 'uppercase', marginBottom: 16 }}>The Journey</div>
            <h2 style={{ color: 'white', fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', fontWeight: 900, lineHeight: 1.1, letterSpacing: '-0.02em' }}>
              The Stratiix Path™
            </h2>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 0, maxWidth: 900, margin: '0 auto' }}>
            {[
              { n: '01', label: 'Diagnose',   color: '#2563EB', desc: 'Identify what is limiting performance and establish a clear baseline.' },
              { n: '02', label: 'Architect',  color: '#7C3AED', desc: 'Design the systems, capabilities, and roadmap required for growth.' },
              { n: '03', label: 'Activate',   color: '#046C5C', desc: 'Install the required capabilities, operating systems, and infrastructure.' },
              { n: '04', label: 'Accelerate', color: '#10B981', desc: 'Improve adoption, execution, and performance.' },
              { n: '05', label: 'Sustain',    color: '#C9A86A', desc: 'Embed governance, accountability, and continuous improvement.' },
            ].map((p, i) => (
              <div key={p.n} style={{
                display: 'grid', gridTemplateColumns: '72px 160px 1fr', gap: 32,
                padding: '32px 0',
                borderTop: '1px solid rgba(255,255,255,0.07)',
                borderBottom: i === 4 ? '1px solid rgba(255,255,255,0.07)' : 'none',
                alignItems: 'center',
              }}>
                <div style={{
                  fontSize: 'clamp(1.8rem, 2.5vw, 2.2rem)', fontWeight: 900,
                  color: p.color, opacity: 0.65, lineHeight: 1,
                  fontFamily: 'var(--font-display)', letterSpacing: '-0.04em',
                }}>{p.n}</div>
                <div style={{
                  fontFamily: 'var(--font-display)', fontWeight: 700,
                  fontSize: '1.1rem', color: 'white',
                }}>{p.label}</div>
                <div style={{
                  color: 'rgba(255,255,255,0.55)',
                  fontSize: '0.95rem', lineHeight: 1.75,
                }}>{p.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who It's For */}
      <section style={{ background: '#E6F4F1', padding: '96px 0' }}>
        <div style={{ padding: '0 6vw' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'center' }} className="two-col">
            <div>
              <div style={{ fontSize: '0.72rem', fontWeight: 700, color: '#046C5C', letterSpacing: '0.18em', textTransform: 'uppercase', marginBottom: 16 }}>Who It's For</div>
              <h2 style={{ color: '#1E1F22', fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', fontWeight: 800, lineHeight: 1.1, marginBottom: 24 }}>
                Built for<br/>
                <span style={{ color: '#046C5C' }}>Founder-Led Organizations</span>
              </h2>
              <div style={{ width: 48, height: 3, background: '#046C5C', borderRadius: 2, marginBottom: 28 }} />
              <p style={{ color: '#4B4C51', lineHeight: 1.85, fontSize: '1.05rem' }}>
                The TOS is not for everyone. It is for organizations where the gap between ambition and performance has become impossible to ignore.
              </p>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              {[
                { text: 'Growth has outpaced systems', color: '#2563EB' },
                { text: 'Founder dependency is increasing', color: '#7C3AED' },
                { text: 'Capability gaps are limiting performance', color: '#046C5C' },
                { text: 'Leadership teams need greater operational capacity', color: '#C9A86A' },
              ].map((item, i) => (
                <div key={item.text} style={{
                  display: 'flex', gap: 20, alignItems: 'center',
                  padding: '20px 24px',
                  background: 'white', borderRadius: 12,
                  border: '1px solid #B2DDD7',
                  borderLeft: `4px solid ${item.color}`,
                }}>
                  <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '0.68rem', color: item.color, letterSpacing: '0.12em', flexShrink: 0 }}>
                    {String(i + 1).padStart(2, '0')}
                  </div>
                  <span style={{ color: '#1E1F22', fontSize: '1rem', fontWeight: 600, fontFamily: 'var(--font-display)' }}>{item.text}</span>
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
        <div style={{ padding: '0 6vw', textAlign: 'center', position: 'relative', zIndex: 1, maxWidth: 720, margin: '0 auto' }}>
          <div style={{ fontSize: '0.72rem', fontWeight: 700, color: 'rgba(255,255,255,0.6)', letterSpacing: '0.18em', textTransform: 'uppercase', marginBottom: 20 }}>Get Started</div>
          <h2 style={{ color: 'white', fontSize: 'clamp(2rem, 3.5vw, 3rem)', fontWeight: 900, marginBottom: 20, lineHeight: 1.1, letterSpacing: '-0.02em' }}>
            Ready to Scale Beyond the Founder?
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.7)', maxWidth: 520, margin: '0 auto 12px', fontSize: '1.05rem', lineHeight: 1.8 }}>
            The Transformation Operating System™ begins with understanding what is limiting performance.
          </p>
          <p style={{ color: 'rgba(255,255,255,0.7)', maxWidth: 520, margin: '0 auto 36px', fontSize: '1.05rem', lineHeight: 1.8 }}>
            Every engagement starts with the Stratiix Path Diagnostic™.
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