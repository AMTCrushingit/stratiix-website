import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Stratiix',
  description: 'Stratiix is a Transformation Platform. We help organizations turn strategy into capability and capability into results.',
}

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section style={{
        background: 'linear-gradient(135deg, #050A14 0%, #062E35 100%)',
        paddingTop: 140, paddingBottom: 96,
        position: 'relative', overflow: 'hidden',
      }}>
        <div style={{ position: 'absolute', bottom: '10%', right: '5%', width: 400, height: 400, borderRadius: '50%', background: 'var(--path-design)', opacity: 0.08, filter: 'blur(80px)' }} />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <span className="eyebrow">About</span>
          <h1 style={{ color: 'white', maxWidth: 640, marginBottom: 24 }}>
            A Transformation Platform. Not a Consulting Firm.
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: '1.15rem', maxWidth: 580, lineHeight: 1.8 }}>
            Stratiix helps organizations turn strategy into capability and capability into results.
          </p>
        </div>
      </section>

      {/* What We Are */}
      <section className="section bg-white">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'start' }}>
            <div>
              <span className="eyebrow">What We Are</span>
              <h2>The distinction matters.</h2>
              <div className="divider" />
              <p style={{ fontSize: '1.05rem', lineHeight: 1.8, marginBottom: 20 }}>
                Consulting firms produce recommendations. Transformation platforms install capability. The distinction is not semantic: it determines whether anything actually changes.
              </p>
              <p style={{ color: 'var(--muted)', lineHeight: 1.8, marginBottom: 20 }}>
                Stratiix does not deliver reports, frameworks, or strategic plans. We deliver installed capability: the systems, processes, structures, and behaviours that allow organizations to perform at the next level.
              </p>
              <p style={{ color: 'var(--muted)', lineHeight: 1.8 }}>
                The Transformation Operating System™ is the methodology through which we do this. It is not a consulting framework. It is an operating system: designed to be installed, operated, and sustained.
              </p>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
              {[
                { label: 'We install, not advise', desc: 'Stratiix does not produce recommendations for organizations to implement on their own. We install the capability alongside the organization.' },
                { label: 'We measure outcomes, not outputs', desc: 'Success is not defined by deliverables produced. It is defined by what changes inside the organization.' },
                { label: 'We build for sustainability', desc: 'Every engagement is designed to produce capability that holds without ongoing external support.' },
                { label: 'We protect what we build', desc: 'The TOS, the Capability Engines, and the Transformation Architecture™ are proprietary intellectual property. We share the framework. We protect the methodology.' },
              ].map(p => (
                <div key={p.label} style={{ padding: '24px', background: 'var(--slate)', borderRadius: 10, border: '1px solid var(--slate-mid)' }}>
                  <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, color: 'var(--teal)', marginBottom: 8 }}>{p.label}</div>
                  <p style={{ fontSize: '0.875rem', color: 'var(--muted)', margin: 0, lineHeight: 1.65 }}>{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* The Platform */}
      <section className="section bg-dark">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: 64 }}>
            <span className="eyebrow" style={{ color: 'var(--mint-deep)' }}>The Platform</span>
            <h2 style={{ color: 'white' }}>What Stratiix Delivers</h2>
            <div className="divider" style={{ margin: '20px auto 0', background: 'var(--teal)' }} />
          </div>
          <div className="grid-3">
            {[
              { icon: '◈', title: 'Transformation Operating System™', desc: 'The five-phase methodology that moves organizations from diagnosis to sustained performance improvement.' },
              { icon: '⬡', title: 'Capability Engines™', desc: 'Six specialized engines that install the capabilities organizations need to perform at the next level.' },
              { icon: '◉', title: 'Transformation Architecture™', desc: 'The integrated framework that connects Diagnostic, TOS, Capability Engines, Intelligence, and Outcomes.' },
              { icon: '◈', title: 'The Diagnostic™', desc: 'A structured assessment of organizational capability, performance gaps, and transformation readiness.' },
              { icon: '⬡', title: 'Transformation Intelligence', desc: 'The measurement and learning infrastructure that tracks outcomes and enables continuous improvement.' },
              { icon: '◉', title: 'Outcomes Framework', desc: 'The three-dimensional results framework: Installed, Adopted, Improved.' },
            ].map(p => (
              <div key={p.title} style={{ padding: '28px', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 12 }}>
                <div style={{ fontSize: '1.5rem', color: 'var(--teal)', marginBottom: 16 }}>{p.icon}</div>
                <h4 style={{ color: 'white', marginBottom: 10, fontSize: '1rem', lineHeight: 1.4 }}>{p.title}</h4>
                <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.875rem', lineHeight: 1.7, margin: 0 }}>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* IP Protection */}
      <section className="section bg-slate">
        <div className="container">
          <div style={{ maxWidth: 720, margin: '0 auto', textAlign: 'center' }}>
            <span className="eyebrow">Intellectual Property</span>
            <h2>What We Share. What We Protect.</h2>
            <div className="divider" style={{ margin: '20px auto 32px' }} />
            <p style={{ fontSize: '1.05rem', lineHeight: 1.8, marginBottom: 20 }}>
              Stratiix shares the framework: the TOS, the Capability Engines, the Transformation Architecture™, and the Outcomes Framework. These are visible because they need to be understood to be valued.
            </p>
            <p style={{ color: 'var(--muted)', lineHeight: 1.8 }}>
              What Stratiix does not share: the Diagnostic scoring logic, the transformation sequencing algorithms, the internal playbooks, the intelligence models, and the Qualia algorithms. These are the proprietary methodology that makes the framework work. They are protected accordingly.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-white">
        <div className="container" style={{ textAlign: 'center' }}>
          <span className="eyebrow">Begin</span>
          <h2 style={{ maxWidth: 520, margin: '0 auto 20px' }}>
            Ready to begin a transformation conversation?
          </h2>
          <p style={{ color: 'var(--muted)', maxWidth: 440, margin: '0 auto 40px', fontSize: '1.05rem' }}>
            Contact Stratiix to discuss your organization and determine the right starting point.
          </p>
          <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/diagnostic" className="btn btn-primary">Begin with the Diagnostic →</Link>
            <Link href="/contact" className="btn btn-ghost-dark">Contact Stratiix</Link>
          </div>
        </div>
      </section>
    </>
  )
}