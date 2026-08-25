import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'The Transformation Operating System™',
  description: 'The TOS is the structured methodology through which Stratiix delivers transformation. Five phases. One integrated system.',
}

const phases = [
  {
    n: '01', label: 'Diagnose', color: 'var(--path-discover)',
    headline: 'Reveal what is actually limiting performance.',
    body: 'Before any transformation can begin, the organization must understand its current state with precision. The Diagnostic phase establishes the baseline — identifying capability gaps, execution barriers, leadership alignment issues, and the specific constraints that are preventing the organization from performing at the next level. This is not a survey. It is a structured assessment that produces a clear picture of where the organization is, what it is ready to change, and what the transformation must address.',
    outputs: ['Organizational Capability Assessment', 'Performance Gap Analysis', 'Transformation Readiness Score', 'Priority Intervention Map'],
  },
  {
    n: '02', label: 'Architect', color: 'var(--path-design)',
    headline: 'Design the transformation system.',
    body: 'With the diagnostic complete, Stratiix architects the future state. This phase defines the transformation roadmap — which Capability Engines to deploy, in what sequence, and with what resources. The architecture phase aligns leadership around a shared picture of the destination and the path to get there. It produces the transformation blueprint that guides every subsequent phase.',
    outputs: ['Transformation Blueprint', 'Capability Engine Selection', 'Sequenced Intervention Roadmap', 'Leadership Alignment Framework'],
  },
  {
    n: '03', label: 'Activate', color: 'var(--teal)',
    headline: 'Install the required capabilities.',
    body: 'Activation is where the transformation becomes real. Stratiix deploys the selected Capability Engines, builds the systems and processes, and begins the structured change process with full adoption support. This phase is not about training or workshops — it is about installing functional capability that the organization can operate independently.',
    outputs: ['Capability Engine Deployment', 'System and Process Installation', 'Workforce Activation Programme', 'Adoption Infrastructure'],
  },
  {
    n: '04', label: 'Accelerate', color: 'var(--path-sustain)',
    headline: 'Drive performance toward the defined outcomes.',
    body: 'Once capabilities are installed, the Accelerate phase focuses on driving performance. Stratiix measures outcomes against the baseline, removes friction from the installed systems, optimizes what is working, and builds the momentum required to reach the defined results. This phase is where the investment begins to produce measurable returns.',
    outputs: ['Performance Measurement System', 'Optimization Interventions', 'Outcome Tracking Dashboard', 'Momentum Acceleration Plan'],
  },
  {
    n: '05', label: 'Sustain', color: 'var(--mint-deep)',
    headline: 'Lock in the gains without constant intervention.',
    body: 'The final phase of the TOS ensures that what has been built holds. Stratiix establishes the governance rhythms, accountability structures, and leadership practices that sustain performance after the engagement concludes. The goal is an organization that can maintain and build on its transformation independently — not one that requires ongoing external support to function.',
    outputs: ['Governance Rhythm Design', 'Accountability Architecture', 'Leadership Sustainability Practices', 'Performance Maintenance System'],
  },
]

export default function TOSPage() {
  return (
    <>
      {/* Hero */}
      <section style={{
        background: 'linear-gradient(135deg, #050A14 0%, #062E35 100%)',
        paddingTop: 140, paddingBottom: 96,
        position: 'relative', overflow: 'hidden',
      }}>
        <div style={{ position: 'absolute', top: '20%', right: '10%', width: 400, height: 400, borderRadius: '50%', background: 'var(--path-design)', opacity: 0.08, filter: 'blur(80px)' }} />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <span className="eyebrow">The Operating System</span>
          <h1 style={{ color: 'white', maxWidth: 680, marginBottom: 24 }}>
            Transformation Operating System™
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: '1.15rem', maxWidth: 580, lineHeight: 1.8, marginBottom: 40 }}>
            Five phases. One integrated system. Designed to move organizations from diagnosis to sustained performance improvement.
          </p>
          <Link href="/diagnostic" className="btn btn-primary">Begin with the Diagnostic →</Link>
        </div>
      </section>

      {/* What is the TOS */}
      <section className="section bg-white">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'center' }}>
            <div>
              <span className="eyebrow">What It Is</span>
              <h2>A system for turning strategy into results.</h2>
              <div className="divider" />
              <p style={{ marginBottom: 20, fontSize: '1.05rem', lineHeight: 1.8 }}>
                The Transformation Operating System™ is the structured methodology through which Stratiix delivers transformation engagements. It is not a framework to be studied — it is a system to be operated.
              </p>
              <p style={{ color: 'var(--muted)', lineHeight: 1.8 }}>
                The TOS addresses the fundamental reason most transformation efforts fail: they treat strategy and execution as separate problems. The TOS integrates diagnosis, design, capability installation, performance acceleration, and sustainability into a single coherent system.
              </p>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
              {[
                { label: 'Integrated', desc: 'Five phases that build on each other, not independent workstreams.' },
                { label: 'Sequenced', desc: 'Each phase unlocks the next. The order is not arbitrary.' },
                { label: 'Measurable', desc: 'Every phase produces defined outputs and measurable outcomes.' },
                { label: 'Sustainable', desc: 'Built to hold without ongoing external support.' },
              ].map(f => (
                <div key={f.label} style={{ padding: '24px', background: 'var(--slate)', borderRadius: 10, border: '1px solid var(--slate-mid)' }}>
                  <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, color: 'var(--teal)', marginBottom: 8 }}>{f.label}</div>
                  <p style={{ fontSize: '0.85rem', color: 'var(--muted)', margin: 0, lineHeight: 1.65 }}>{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Five Phases */}
      <section className="section bg-slate">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: 64 }}>
            <span className="eyebrow">The Five Phases</span>
            <h2>How the TOS Works</h2>
            <div className="divider" style={{ margin: '20px auto 0' }} />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
            {phases.map((p, i) => (
              <div key={p.n} style={{
                display: 'grid', gridTemplateColumns: '80px 1fr 280px', gap: 40,
                padding: '40px', background: 'white', borderRadius: 12,
                border: '1px solid var(--slate-mid)',
                alignItems: 'start',
              }}>
                <div style={{ textAlign: 'center' }}>
                  <div style={{
                    width: 56, height: 56, borderRadius: '50%',
                    background: `${p.color}18`, border: `2px solid ${p.color}`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '0.8rem',
                    color: p.color, margin: '0 auto 8px',
                  }}>{p.n}</div>
                  <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '0.85rem', color: 'var(--charcoal)' }}>{p.label}</div>
                </div>
                <div>
                  <h3 style={{ fontSize: '1.15rem', marginBottom: 12, color: 'var(--charcoal)' }}>{p.headline}</h3>
                  <p style={{ color: 'var(--body-text)', lineHeight: 1.8, margin: 0, fontSize: '0.95rem' }}>{p.body}</p>
                </div>
                <div>
                  <div style={{ fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: 12 }}>Phase Outputs</div>
                  <ul style={{ listStyle: 'none' }}>
                    {p.outputs.map(o => (
                      <li key={o} style={{ display: 'flex', gap: 8, alignItems: 'flex-start', marginBottom: 8 }}>
                        <div style={{ width: 6, height: 6, borderRadius: '50%', background: p.color, flexShrink: 0, marginTop: 6 }} />
                        <span style={{ fontSize: '0.82rem', color: 'var(--body-text)', lineHeight: 1.5 }}>{o}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-dark">
        <div className="container" style={{ textAlign: 'center' }}>
          <span className="eyebrow" style={{ color: 'var(--mint-deep)' }}>Begin</span>
          <h2 style={{ color: 'white', maxWidth: 520, margin: '0 auto 20px' }}>
            Every TOS engagement begins with the Diagnostic.
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.55)', maxWidth: 440, margin: '0 auto 40px' }}>
            The Diagnostic establishes the baseline that makes everything else possible.
          </p>
          <Link href="/diagnostic" className="btn btn-primary">Begin with the Diagnostic →</Link>
        </div>
      </section>
    </>
  )
}