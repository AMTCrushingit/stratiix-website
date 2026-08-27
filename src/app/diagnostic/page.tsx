import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'The Stratiix Path Diagnostic™ — Organizational Assessment',
  description: 'The Stratiix Path Diagnostic™ identifies what is limiting performance, reveals capability gaps, assesses founder dependency risks, and creates a roadmap for sustainable growth and performance beyond the founder.',
}

export default function DiagnosticPage() {
  return (
    <>
      {/* Hero */}
      <section style={{
        background: 'linear-gradient(135deg, #111214 0%, #1E1F22 100%)',
        paddingTop: 140, paddingBottom: 96,
        position: 'relative', overflow: 'hidden',
      }}>
        <div style={{ position: 'absolute', top: '20%', left: '5%', width: 400, height: 400, borderRadius: '50%', background: '#2563EB', opacity: 0.08, filter: 'blur(80px)' }} />
        <div style={{ position: 'absolute', bottom: '10%', right: '5%', width: 300, height: 300, borderRadius: '50%', background: '#046C5C', opacity: 0.08, filter: 'blur(60px)' }} />
        <div style={{ padding: '0 6vw', position: 'relative', zIndex: 1 }}>
          <div style={{ fontSize: '0.72rem', fontWeight: 700, color: '#046C5C', letterSpacing: '0.18em', textTransform: 'uppercase', marginBottom: 20 }}>
            The Entry Point
          </div>
          <h1 style={{ color: 'white', maxWidth: 720, marginBottom: 28, fontSize: 'clamp(2.2rem, 4vw, 3.5rem)', fontWeight: 900, lineHeight: 1.1, letterSpacing: '-0.02em' }}>
            The Stratiix Path Diagnostic™
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: '1.15rem', maxWidth: 620, lineHeight: 1.85, marginBottom: 44 }}>
            The Stratiix Path Diagnostic™ identifies what is limiting performance, reveals capability gaps, assesses founder dependency risks, and creates a roadmap for sustainable growth and performance beyond the founder.
          </p>
          <Link href="/contact" style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            padding: '14px 32px', borderRadius: 10,
            background: '#046C5C', color: 'white',
            fontWeight: 700, fontSize: '0.95rem', textDecoration: 'none',
            boxShadow: '0 8px 32px rgba(4,108,92,0.35)',
          }}>
            Begin the Diagnostic™ →
          </Link>
        </div>
      </section>

      {/* What it is */}
      <section style={{ background: 'white', padding: '96px 0' }}>
        <div style={{ padding: '0 6vw' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80 }} className="two-col">
            <div>
              <div style={{ fontSize: '0.72rem', fontWeight: 700, color: '#046C5C', letterSpacing: '0.18em', textTransform: 'uppercase', marginBottom: 16 }}>What It Is</div>
              <h2 style={{ fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', fontWeight: 800, color: '#1E1F22', marginBottom: 20, lineHeight: 1.1 }}>Not a survey. A structured assessment.</h2>
              <div style={{ width: 48, height: 3, background: '#046C5C', borderRadius: 2, marginBottom: 28 }} />
              <p style={{ marginBottom: 20, fontSize: '1.05rem', lineHeight: 1.85, color: '#4B4C51' }}>
                The Stratiix Path Diagnostic™ is a rigorous, structured assessment of your organization's current state. It goes beyond surface-level observation to identify the specific constraints, capability gaps, and execution barriers that are limiting performance.
              </p>
              <p style={{ color: '#6B7280', lineHeight: 1.8, marginBottom: 20 }}>
                The Diagnostic produces a clear, evidence-based picture of where the organization is today, what it is ready to change, and what a transformation must address to produce lasting results.
              </p>
              <p style={{ color: '#6B7280', lineHeight: 1.8 }}>
                It is the foundation of every TOS engagement. Without it, transformation is guesswork.
              </p>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              {[
                { title: 'Capability Assessment', desc: 'A structured evaluation of the six Capability Engine domains: identifying where the organization is strong, where it is weak, and where gaps are creating the most drag on performance.' },
                { title: 'Founder Dependency Analysis', desc: 'An assessment of the degree to which the organization depends on the founder for decisions, relationships, and execution — and what must change to reduce that dependency.' },
                { title: 'Execution Barrier Analysis', desc: 'Identification of the specific systems, processes, structures, and behaviours that are preventing the organization from executing its strategy.' },
                { title: 'Transformation Readiness Score', desc: 'A composite assessment of the organization\'s readiness to undertake transformation: including capacity, commitment, and capability.' },
              ].map(i => (
                <div key={i.title} style={{ padding: '20px 24px', background: '#F3F4F6', borderRadius: 10, border: '1px solid #E5E7EB' }}>
                  <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, color: '#1E1F22', marginBottom: 6 }}>{i.title}</div>
                  <p style={{ fontSize: '0.875rem', color: '#6B7280', margin: 0, lineHeight: 1.65 }}>{i.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What it produces */}
      <section style={{ background: '#E6F4F1', padding: '96px 0' }}>
        <div style={{ padding: '0 6vw' }}>
          <div style={{ textAlign: 'center', marginBottom: 64 }}>
            <div style={{ fontSize: '0.72rem', fontWeight: 700, color: '#046C5C', letterSpacing: '0.18em', textTransform: 'uppercase', marginBottom: 16 }}>What You'll Receive</div>
            <h2 style={{ fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', fontWeight: 800, color: '#1E1F22' }}>What the Diagnostic Produces</h2>
            <div style={{ width: 48, height: 3, background: '#046C5C', borderRadius: 2, margin: '20px auto 0' }} />
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }} className="three-col">
            {[
              { n: '01', title: 'Organizational Capability Report', desc: 'A detailed assessment of capability across all six Capability Engine domains, with specific findings and priority gaps identified.' },
              { n: '02', title: 'Founder Dependency Analysis', desc: 'A structured assessment of founder dependency risk and the specific capability gaps that must be addressed to scale beyond the founder.' },
              { n: '03', title: 'Performance Gap Analysis', desc: 'A clear mapping of the distance between current performance and the organization\'s stated objectives: with root cause analysis.' },
              { n: '04', title: 'Transformation Readiness Score', desc: 'A composite score that reflects the organization\'s readiness to undertake transformation across capacity, commitment, and capability dimensions.' },
              { n: '05', title: 'Priority Intervention Map', desc: 'A sequenced view of the interventions required to close the identified gaps: ordered by impact and feasibility.' },
              { n: '06', title: 'Executive Briefing & Recommendations', desc: 'A leadership-ready summary of findings, priorities, and recommended next steps: designed to align the executive team around the transformation path.' },
            ].map(o => (
              <div key={o.n} style={{ padding: '28px', background: 'white', borderRadius: 12, border: '1px solid #B2DDD7' }}>
                <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '0.72rem', color: '#046C5C', letterSpacing: '0.12em', marginBottom: 12 }}>{o.n}</div>
                <h4 style={{ marginBottom: 10, fontSize: '1rem', color: '#1E1F22', fontFamily: 'var(--font-display)' }}>{o.title}</h4>
                <p style={{ fontSize: '0.875rem', color: '#6B7280', margin: 0, lineHeight: 1.7 }}>{o.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Investment Section */}
      <section style={{ background: '#1E1F22', padding: '96px 0', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '30%', right: '5%', width: 400, height: 400, borderRadius: '50%', background: '#046C5C', opacity: 0.05, filter: 'blur(80px)' }} />
        <div style={{ padding: '0 6vw', position: 'relative', zIndex: 1 }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'start' }} className="two-col">
            <div>
              <div style={{ fontSize: '0.72rem', fontWeight: 700, color: '#B2DDD7', letterSpacing: '0.18em', textTransform: 'uppercase', marginBottom: 20 }}>Investment</div>
              <h2 style={{ color: 'white', fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', fontWeight: 800, lineHeight: 1.1, marginBottom: 24 }}>
                Know What Is Limiting Performance<br/>
                <span style={{ color: '#046C5C' }}>Before You Invest in Solutions.</span>
              </h2>
              <div style={{ width: 48, height: 3, background: '#046C5C', borderRadius: 2, marginBottom: 28 }} />
              <p style={{ color: 'rgba(255,255,255,0.65)', lineHeight: 1.85, marginBottom: 20, fontSize: '1.05rem' }}>
                The Stratiix Path Diagnostic™ is a structured, evidence-based assessment designed to identify the capability, leadership, governance, and execution gaps limiting organizational performance.
              </p>
              <div style={{ marginTop: 40, padding: '28px 32px', background: 'rgba(4,108,92,0.12)', border: '1px solid rgba(4,108,92,0.3)', borderRadius: 16 }}>
                <div style={{ fontSize: '0.72rem', fontWeight: 700, color: '#B2DDD7', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: 12 }}>Diagnostic Credit</div>
                <p style={{ color: 'rgba(255,255,255,0.8)', lineHeight: 1.8, marginBottom: 12, fontSize: '0.95rem' }}>
                  <strong style={{ color: 'white' }}>50% of your Diagnostic investment is credited</strong> toward any subsequent Stratiix transformation engagement.
                </p>
                <p style={{ color: 'rgba(255,255,255,0.55)', lineHeight: 1.75, marginBottom: 0, fontSize: '0.875rem' }}>
                  If you proceed with a Transformation Operating System™, Capability Engine deployment, or other Stratiix engagement, $749.50 USD is applied toward that investment.
                </p>
              </div>
              <p style={{ color: '#046C5C', fontWeight: 700, fontFamily: 'var(--font-display)', fontSize: '1rem', marginTop: 28, fontStyle: 'italic' }}>
                Diagnosis is not an expense. It is the foundation of every successful transformation.
              </p>
            </div>
            <div>
              <div style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 20, padding: '40px 36px' }}>
                <div style={{ fontSize: '0.72rem', fontWeight: 700, color: '#B2DDD7', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: 16 }}>Investment</div>
                <div style={{ fontSize: 'clamp(2.5rem, 4vw, 3.5rem)', fontWeight: 900, color: 'white', letterSpacing: '-0.03em', marginBottom: 8, fontFamily: 'var(--font-display)' }}>
                  $1,499 <span style={{ fontSize: '1rem', fontWeight: 500, color: 'rgba(255,255,255,0.5)' }}>USD</span>
                </div>
                <div style={{ width: 48, height: 2, background: '#046C5C', borderRadius: 2, marginBottom: 32 }} />
                <div style={{ fontSize: '0.72rem', fontWeight: 700, color: '#B2DDD7', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: 20 }}>What's Included</div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                  {[
                    'Executive Discovery Session',
                    'Organizational Capability Assessment',
                    'Founder Dependency Analysis',
                    'Performance Gap Analysis',
                    'Transformation Readiness Score',
                    'Priority Intervention Map',
                    'Executive Briefing & Recommendations',
                  ].map(item => (
                    <div key={item} style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <circle cx="10" cy="10" r="9" stroke="#046C5C" strokeWidth="1.5" fill="rgba(4,108,92,0.15)" />
                        <polyline points="6,10 9,13 14,7" stroke="#046C5C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                      </svg>
                      <span style={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.9rem', lineHeight: 1.5 }}>{item}</span>
                    </div>
                  ))}
                </div>
                <div style={{ marginTop: 36 }}>
                  <Link href="/contact" style={{
                    display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
                    padding: '15px 28px', borderRadius: 10,
                    background: '#046C5C', color: 'white',
                    fontWeight: 700, fontSize: '0.95rem', textDecoration: 'none',
                    boxShadow: '0 8px 32px rgba(4,108,92,0.35)',
                    fontFamily: 'var(--font-display)',
                  }}>
                    Begin the Diagnostic™ →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who it's for */}
      {/* Who it's for — dark, full-width, typographic grid */}
      <section style={{ background: '#111214', padding: '96px 0', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', bottom: '10%', left: '5%', width: 400, height: 400, borderRadius: '50%', background: '#7C3AED', opacity: 0.04, filter: 'blur(80px)' }} />

        <div style={{ padding: '0 6vw', position: 'relative', zIndex: 1 }}>

          {/* Centred heading */}
          <div style={{ textAlign: 'center', marginBottom: 72 }}>
            <div style={{ fontSize: '0.72rem', fontWeight: 700, color: '#B2DDD7', letterSpacing: '0.18em', textTransform: 'uppercase', marginBottom: 20 }}>Who It's For</div>
            <h2 style={{ color: 'white', fontSize: 'clamp(2rem, 3.5vw, 3rem)', fontWeight: 900, lineHeight: 1.1, letterSpacing: '-0.02em', marginBottom: 20 }}>
              Built for Founder-Led Organizations<br/>
              <span style={{ color: '#046C5C' }}>at an Inflection Point.</span>
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.5)', maxWidth: 580, margin: '0 auto', fontSize: '1.05rem', lineHeight: 1.8 }}>
              The Diagnostic is the starting point for any organization that wants to understand what is actually limiting performance — regardless of size, sector, or current performance level.
            </p>
          </div>

          {/* 3-col typographic grid — no boxes */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '3vw' }} className="three-col">
            {[
              { n: '01', text: 'Founder-led organizations that have grown beyond their current systems', color: '#2563EB' },
              { n: '02', text: 'Leaders who sense capability gaps but cannot pinpoint them', color: '#7C3AED' },
              { n: '03', text: 'Organizations that have a strategy but are not executing it', color: '#046C5C' },
              { n: '04', text: 'Businesses where the founder has become the bottleneck', color: '#10B981' },
              { n: '05', text: 'Organizations that have tried transformation and not sustained it', color: '#C9A86A' },
              { n: '06', text: 'Leadership teams that need an objective external assessment', color: '#046C5C' },
            ].map((s, i) => (
              <div key={s.n} style={{
                padding: '32px 0',
                borderTop: '1px solid rgba(255,255,255,0.07)',
              }}>
                <div style={{
                  fontSize: 'clamp(2rem, 3vw, 2.8rem)',
                  fontWeight: 900,
                  color: s.color,
                  opacity: 0.5,
                  lineHeight: 1,
                  marginBottom: 16,
                  fontFamily: 'var(--font-display)',
                  letterSpacing: '-0.04em',
                }}>{s.n}</div>
                <p style={{
                  color: 'rgba(255,255,255,0.7)',
                  fontSize: '0.95rem',
                  lineHeight: 1.75,
                  margin: 0,
                  fontFamily: 'var(--font-body)',
                }}>{s.text}</p>
              </div>
            ))}
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
          <p style={{ color: 'rgba(255,255,255,0.75)', maxWidth: 520, margin: '0 auto 12px', fontSize: '1.1rem', lineHeight: 1.75 }}>
            The first step isn't another strategy session.
          </p>
          <p style={{ color: 'rgba(255,255,255,0.75)', maxWidth: 520, margin: '0 auto 32px', fontSize: '1.1rem', lineHeight: 1.75, fontWeight: 700 }}>
            It's diagnosis.
          </p>
          <p style={{ color: 'rgba(255,255,255,0.65)', maxWidth: 520, margin: '0 auto 40px', fontSize: '1rem', lineHeight: 1.8 }}>
            The Stratiix Path Diagnostic™ provides the clarity required to understand what is limiting performance and what must change next.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 16, marginBottom: 40 }}>
            <div style={{ fontSize: '2rem', fontWeight: 900, color: 'white', letterSpacing: '-0.03em', fontFamily: 'var(--font-display)' }}>
              $1,499 <span style={{ fontSize: '1rem', fontWeight: 500, color: 'rgba(255,255,255,0.6)' }}>USD</span>
            </div>
            <div style={{ fontSize: '0.875rem', color: 'rgba(255,255,255,0.6)' }}>
              50% credited toward any future Stratiix engagement.
            </div>
          </div>
          <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/contact" style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              padding: '15px 36px', borderRadius: 10,
              background: 'white', color: '#046C5C',
              fontWeight: 800, fontSize: '0.95rem', textDecoration: 'none',
              boxShadow: '0 8px 32px rgba(0,0,0,0.2)',
              fontFamily: 'var(--font-display)',
            }}>
              Begin the Diagnostic™ →
            </Link>
            <Link href="/the-tos" style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              padding: '15px 32px', borderRadius: 10,
              background: 'rgba(255,255,255,0.1)', color: 'white',
              border: '1px solid rgba(255,255,255,0.25)',
              fontWeight: 600, fontSize: '0.95rem', textDecoration: 'none',
              fontFamily: 'var(--font-display)',
            }}>
              Explore the TOS
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}