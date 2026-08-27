import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'The Diagnostic™: Organizational Assessment',
  description: 'The Stratiix Diagnostic is a structured assessment of your organization\'s current state, capability gaps, and transformation readiness.',
}

export default function DiagnosticPage() {
  return (
    <>
      {/* Hero */}
      <section style={{
        background: 'linear-gradient(135deg, #050A14 0%, #0A1628 100%)',
        paddingTop: 140, paddingBottom: 96,
        position: 'relative', overflow: 'hidden',
      }}>
        <div style={{ position: 'absolute', top: '20%', left: '5%', width: 400, height: 400, borderRadius: '50%', background: 'var(--path-discover)', opacity: 0.1, filter: 'blur(80px)' }} />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <span className="eyebrow">Phase 01</span>
          <h1 style={{ color: 'white', maxWidth: 640, marginBottom: 24 }}>
            The Diagnostic™
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: '1.15rem', maxWidth: 560, lineHeight: 1.8, marginBottom: 40 }}>
            A structured assessment of your organization's current state, capability gaps, and transformation readiness. The Diagnostic is where every transformation begins.
          </p>
          <Link href="/contact" className="btn btn-primary">Request a Diagnostic →</Link>
        </div>
      </section>

      {/* What it is */}
      <section className="section bg-white">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80 }}>
            <div>
              <span className="eyebrow">What It Is</span>
              <h2>Not a survey. A structured assessment.</h2>
              <div className="divider" />
              <p style={{ marginBottom: 20, fontSize: '1.05rem', lineHeight: 1.8 }}>
                The Stratiix Diagnostic is a rigorous, structured assessment of your organization's current state. It goes beyond surface-level observation to identify the specific constraints, capability gaps, and execution barriers that are limiting performance.
              </p>
              <p style={{ color: 'var(--muted)', lineHeight: 1.8, marginBottom: 20 }}>
                The Diagnostic produces a clear, evidence-based picture of where the organization is today, what it is ready to change, and what a transformation must address to produce lasting results.
              </p>
              <p style={{ color: 'var(--muted)', lineHeight: 1.8 }}>
                It is the foundation of every TOS engagement. Without it, transformation is guesswork.
              </p>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              {[
                { title: 'Capability Assessment', desc: 'A structured evaluation of the six Capability Engine domains: identifying where the organization is strong, where it is weak, and where gaps are creating the most drag on performance.' },
                { title: 'Execution Barrier Analysis', desc: 'Identification of the specific systems, processes, structures, and behaviours that are preventing the organization from executing its strategy.' },
                { title: 'Leadership Alignment Review', desc: 'An assessment of leadership alignment around priorities, direction, and the organization\'s readiness to lead a transformation.' },
                { title: 'Transformation Readiness Score', desc: 'A composite assessment of the organization\'s readiness to undertake transformation: including capacity, commitment, and capability.' },
              ].map(i => (
                <div key={i.title} style={{ padding: '20px 24px', background: 'var(--slate)', borderRadius: 10, border: '1px solid var(--slate-mid)' }}>
                  <div style={{ fontFamily: 'var(--font-display)', fontWeight: 600, color: 'var(--charcoal)', marginBottom: 6 }}>{i.title}</div>
                  <p style={{ fontSize: '0.85rem', color: 'var(--muted)', margin: 0, lineHeight: 1.65 }}>{i.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What it produces */}
      <section className="section bg-mint">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: 64 }}>
            <span className="eyebrow">Outputs</span>
            <h2>What the Diagnostic Produces</h2>
            <div className="divider" style={{ margin: '20px auto 0' }} />
          </div>
          <div className="grid-3">
            {[
              { n: '01', title: 'Organizational Capability Report', desc: 'A detailed assessment of capability across all six Capability Engine domains, with specific findings and priority gaps identified.' },
              { n: '02', title: 'Performance Gap Analysis', desc: 'A clear mapping of the distance between current performance and the organization\'s stated objectives: with root cause analysis.' },
              { n: '03', title: 'Transformation Readiness Score', desc: 'A composite score that reflects the organization\'s readiness to undertake transformation across capacity, commitment, and capability dimensions.' },
              { n: '04', title: 'Priority Intervention Map', desc: 'A sequenced view of the interventions required to close the identified gaps: ordered by impact and feasibility.' },
              { n: '05', title: 'TOS Engagement Recommendation', desc: 'A specific recommendation for how the TOS should be structured for this organization: which engines to deploy, in what sequence, and with what resources.' },
              { n: '06', title: 'Executive Briefing', desc: 'A leadership-ready summary of findings, priorities, and recommended next steps: designed to align the executive team around the transformation path.' },
            ].map(o => (
              <div key={o.n} style={{ padding: '28px', background: 'white', borderRadius: 12, border: '1px solid var(--mint-mid)' }}>
                <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '0.75rem', color: 'var(--teal)', letterSpacing: '0.1em', marginBottom: 12 }}>{o.n}</div>
                <h4 style={{ marginBottom: 10, fontSize: '1rem' }}>{o.title}</h4>
                <p style={{ fontSize: '0.875rem', color: 'var(--muted)', margin: 0, lineHeight: 1.7 }}>{o.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who it's for */}
      <section className="section bg-dark">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'center' }}>
            <div>
              <span className="eyebrow" style={{ color: 'var(--mint-deep)' }}>Who It's For</span>
              <h2 style={{ color: 'white' }}>Organizations at an inflection point.</h2>
              <div className="divider" />
              <p style={{ color: 'rgba(255,255,255,0.65)', lineHeight: 1.8, marginBottom: 20 }}>
                The Diagnostic is designed for organizations that know something needs to change but are not certain what, or for organizations that have tried to change and have not achieved the results they expected.
              </p>
              <p style={{ color: 'rgba(255,255,255,0.5)', lineHeight: 1.8 }}>
                It is also the starting point for any organization that wants to undertake a structured transformation: regardless of size, sector, or current performance level.
              </p>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              {[
                'Organizations that have a strategy but are not executing it',
                'Leaders who sense capability gaps but cannot pinpoint them',
                'Businesses that have grown beyond their current systems',
                'Organizations that have tried transformation and not sustained it',
                'Institutions preparing for a significant change in scale or direction',
                'Leadership teams that need an objective external assessment',
              ].map(s => (
                <div key={s} style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                  <div style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--teal)', flexShrink: 0, marginTop: 7 }} />
                  <span style={{ color: 'rgba(255,255,255,0.65)', fontSize: '0.95rem', lineHeight: 1.6 }}>{s}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-white">
        <div className="container" style={{ textAlign: 'center' }}>
          <span className="eyebrow">Begin</span>
          <h2 style={{ maxWidth: 520, margin: '0 auto 20px' }}>Ready to begin with the Diagnostic?</h2>
          <p style={{ color: 'var(--muted)', maxWidth: 440, margin: '0 auto 40px', fontSize: '1.05rem' }}>
            Contact Stratiix to discuss your organization and determine whether the Diagnostic is the right starting point.
          </p>
          <Link href="/contact" className="btn btn-primary">Request a Diagnostic →</Link>
        </div>
      </section>
    </>
  )
}