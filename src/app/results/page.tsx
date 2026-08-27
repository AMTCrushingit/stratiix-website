import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Results: What Stratiix Delivers',
  description: 'Stratiix measures success by what changes inside the organization: capabilities installed, systems adopted, and performance improved.',
}

export default function ResultsPage() {
  return (
    <>
      {/* Hero */}
      <section style={{
        background: 'linear-gradient(135deg, #050A14 0%, #062E35 100%)',
        paddingTop: 140, paddingBottom: 96,
        position: 'relative', overflow: 'hidden',
      }}>
        <div style={{ position: 'absolute', top: '20%', right: '10%', width: 400, height: 400, borderRadius: '50%', background: 'var(--path-sustain)', opacity: 0.1, filter: 'blur(80px)' }} />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <span className="eyebrow">Outcomes</span>
          <h1 style={{ color: 'white', maxWidth: 640, marginBottom: 24 }}>Results</h1>
          <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: '1.15rem', maxWidth: 560, lineHeight: 1.8 }}>
            Stratiix does not measure success by deliverables produced. We measure it by what changes inside the organization.
          </p>
        </div>
      </section>

      {/* Three Outcomes */}
      <section className="section bg-white">
        <style>{`
          @keyframes checkCircleR {
            from { stroke-dashoffset: 200; opacity: 0; }
            to   { stroke-dashoffset: 0; opacity: 1; }
          }
          @keyframes checkDrawR {
            from { stroke-dashoffset: 60; opacity: 0; }
            to   { stroke-dashoffset: 0; opacity: 1; }
          }
        `}</style>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: 64 }}>
            <span className="eyebrow">The Outcomes Framework</span>
            <h2>Three Categories of Result</h2>
            <div className="divider" style={{ margin: '20px auto 0' }} />
            <p style={{ color: 'var(--muted)', maxWidth: 520, margin: '24px auto 0', fontSize: '1.05rem' }}>
              Every Stratiix engagement is designed to produce results across three dimensions. All three must be present for a transformation to be considered successful.
            </p>
          </div>
          <div className="grid-3">
            {[
              {
                n: '01', label: 'Installed', color: 'var(--path-discover)',
                headline: 'Capability systems that are live and functioning.',
                body: 'Installed means that the capability systems, governance structures, operational frameworks, and processes that were designed during the engagement are live inside the organization, not in a document, not in a pilot, but operating as part of how the organization functions.',
                examples: ['Operational systems deployed and running', 'Governance structures in place', 'Performance measurement infrastructure live', 'Capability Engine frameworks operational'],
              },
              {
                n: '02', label: 'Adopted', color: 'var(--teal)',
                headline: 'Workforce operating the new systems.',
                body: 'Adopted means that the people inside the organization are actually using the installed systems, not reverting to old patterns within 90 days. Adoption is the most common failure point in transformation. The TOS includes a dedicated adoption infrastructure to ensure it happens.',
                examples: ['Workforce trained and operating new systems', 'Leadership behaviours aligned to new structures', 'Old patterns replaced, not just supplemented', 'Adoption sustained beyond the engagement'],
              },
              {
                n: '03', label: 'Improved', color: 'var(--path-sustain)',
                headline: 'Measurable movement in performance indicators.',
                body: 'Improved means that the performance indicators that matter to the organization have moved in the right direction. Stratiix does not manufacture metrics or fabricate case study statistics. Improvement is measured against the baseline established in the Diagnostic phase.',
                examples: ['Performance indicators moving in defined direction', 'Efficiency gains visible in operations', 'Revenue or capacity improvements measurable', 'Organizational health indicators improving'],
              },
            ].map(o => (
              <div key={o.n} style={{ padding: '36px 32px', background: 'var(--slate)', borderRadius: 12, border: '1px solid var(--slate-mid)' }}>
                <div style={{
                  width: 56, height: 56, borderRadius: '50%',
                  background: `${o.color}18`, border: `2px solid ${o.color}`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '0.8rem',
                  color: o.color, marginBottom: 24,
                }}>{o.n}</div>
                <h3 style={{ fontSize: '1.75rem', marginBottom: 12, color: 'var(--charcoal)' }}>{o.label}</h3>
                <p style={{ fontWeight: 600, color: 'var(--charcoal)', marginBottom: 12, fontSize: '0.95rem', lineHeight: 1.5 }}>{o.headline}</p>
                <p style={{ color: 'var(--muted)', fontSize: '0.875rem', lineHeight: 1.75, marginBottom: 24 }}>{o.body}</p>
                <ul style={{ listStyle: 'none' }}>
                  {o.examples.map(e => (
                    <li key={e} style={{ display: 'flex', gap: 8, alignItems: 'flex-start', marginBottom: 8 }}>
                      <div style={{ width: 5, height: 5, borderRadius: '50%', background: o.color, flexShrink: 0, marginTop: 7 }} />
                      <span style={{ fontSize: '0.82rem', color: 'var(--body-text)', lineHeight: 1.5 }}>{e}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How we measure */}
      <section className="section bg-dark">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'center' }}>
            <div>
              <span className="eyebrow" style={{ color: 'var(--mint-deep)' }}>Measurement</span>
              <h2 style={{ color: 'white' }}>How Stratiix Measures Results</h2>
              <div className="divider" />
              <p style={{ color: 'rgba(255,255,255,0.65)', lineHeight: 1.8, marginBottom: 20 }}>
                Every engagement begins with the Diagnostic, which establishes the baseline against which results are measured. This is not a subjective assessment: it is a structured evaluation that produces specific, measurable data points.
              </p>
              <p style={{ color: 'rgba(255,255,255,0.5)', lineHeight: 1.8 }}>
                At the conclusion of each TOS phase, Stratiix conducts a structured review against the defined outputs and outcomes. Results are reported against the baseline, not against industry benchmarks or fabricated comparisons.
              </p>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
              {[
                { label: 'Baseline Established', desc: 'The Diagnostic creates a precise baseline of current performance across all relevant dimensions.' },
                { label: 'Outcomes Defined', desc: 'The Architect phase defines specific, measurable outcomes for each phase of the engagement.' },
                { label: 'Progress Tracked', desc: 'Each phase includes structured measurement against the defined outcomes and the established baseline.' },
                { label: 'Results Reported', desc: 'At engagement conclusion, results are reported against the baseline: transparently and without fabrication.' },
              ].map((m, i) => (
                <div key={m.label} style={{ display: 'flex', gap: 20, alignItems: 'flex-start' }}>
                  <div style={{
                    width: 36, height: 36, borderRadius: '50%',
                    background: 'rgba(13,148,136,0.2)', border: '1px solid var(--teal)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '0.75rem',
                    color: 'var(--teal)', flexShrink: 0,
                  }}>{String(i + 1).padStart(2, '0')}</div>
                  <div>
                    <div style={{ fontFamily: 'var(--font-display)', fontWeight: 600, color: 'white', marginBottom: 4 }}>{m.label}</div>
                    <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.875rem', margin: 0, lineHeight: 1.65 }}>{m.desc}</p>
                  </div>
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
          <h2 style={{ maxWidth: 520, margin: '0 auto 20px' }}>Results begin with the Diagnostic.</h2>
          <p style={{ color: 'var(--muted)', maxWidth: 440, margin: '0 auto 40px', fontSize: '1.05rem' }}>
            The Diagnostic establishes the baseline that makes measurement: and results: possible.
          </p>
          <Link href="/diagnostic" className="btn btn-primary">Begin with the Diagnostic →</Link>
        </div>
      </section>
    </>
  )
}