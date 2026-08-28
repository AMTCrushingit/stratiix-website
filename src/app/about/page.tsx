import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Stratiix — Built for Founder-Led Organizations',
  description: 'Stratiix exists because growth creates complexity. We help organizations identify what is limiting performance and build the capability required to scale beyond the founder.',
}

export default function AboutPage() {
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
            About Stratiix
          </div>
          <h1 style={{ color: 'white', maxWidth: 720, marginBottom: 28, fontSize: 'clamp(2.2rem, 4vw, 3.8rem)', fontWeight: 900, lineHeight: 1.08, letterSpacing: '-0.02em' }}>
            Built for<br/>
            <span style={{ color: '#B2DDD7' }}>Founder-Led Organizations</span>
          </h1>
          <div style={{ maxWidth: 600 }}>
            <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: '1.15rem', lineHeight: 1.85, marginBottom: 20, fontWeight: 600 }}>
              Stratiix exists because growth creates complexity.
            </p>
            <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: '1.05rem', lineHeight: 1.85, marginBottom: 20 }}>
              As organizations grow, performance increasingly depends on the founder, key leaders, and systems that were never designed for the next stage of growth.
            </p>
            <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: '1.05rem', lineHeight: 1.85, marginBottom: 0 }}>
              We help organizations identify what is limiting performance and build the capability required to scale beyond the founder.
            </p>
          </div>
        </div>
      </section>

      {/* Why Stratiix Exists — full-width typographic reveal */}
      <section style={{ background: '#FAFAFA', padding: '96px 0', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '20%', right: '-5%', width: 500, height: 500, borderRadius: '50%', background: 'radial-gradient(ellipse, rgba(4,108,92,0.05) 0%, transparent 70%)', pointerEvents: 'none' }} />

        <div style={{ padding: '0 6vw', position: 'relative', zIndex: 1 }}>

          {/* Eyebrow + large ghost text */}
          <div style={{ marginBottom: 72, position: 'relative' }}>
            <div style={{
              position: 'absolute', top: -20, left: -10,
              fontSize: 'clamp(6rem, 12vw, 11rem)', fontWeight: 900,
              color: 'rgba(4,108,92,0.04)', lineHeight: 1, whiteSpace: 'nowrap',
              fontFamily: 'var(--font-display)', userSelect: 'none', pointerEvents: 'none',
              letterSpacing: '-0.05em',
            }}>COMPLEXITY</div>
            <div style={{ fontSize: '0.72rem', fontWeight: 700, color: '#046C5C', letterSpacing: '0.18em', textTransform: 'uppercase', marginBottom: 20, position: 'relative' }}>Why Stratiix Exists</div>
            <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', fontWeight: 900, color: '#1E1F22', lineHeight: 1.05, letterSpacing: '-0.03em', position: 'relative', maxWidth: 640 }}>
              Growth Creates<br/>
              <span style={{ color: '#046C5C' }}>Complexity.</span>
            </h2>
          </div>

          {/* Statement rows — full width, typographic */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 0, marginBottom: 80, maxWidth: 900 }}>
            {[
              { text: "Most founder-led organizations don't fail because they lack strategy.", size: '1.15rem', color: '#6B7280', weight: 400 },
              { text: 'They struggle because growth outpaces the systems, leadership capacity, governance structures, and operating rhythms supporting the business.', size: '1.15rem', color: '#4B4C51', weight: 400 },
              { text: 'Over time, the founder becomes the operating system.', size: 'clamp(1.3rem, 2.5vw, 1.75rem)', color: '#1E1F22', weight: 800 },
              { text: 'Stratiix exists to change that.', size: '1.05rem', color: '#6B7280', weight: 400 },
            ].map((s, i) => (
              <div key={i} style={{
                padding: '28px 0',
                borderBottom: i < 3 ? '1px solid #E5E7EB' : 'none',
                display: 'flex', alignItems: 'flex-start', gap: 24,
              }}>
                <div style={{ width: 4, height: 4, borderRadius: '50%', background: i === 2 ? '#046C5C' : '#E5E7EB', flexShrink: 0, marginTop: 12 }} />
                <p style={{
                  margin: 0, lineHeight: 1.75,
                  fontSize: s.size,
                  fontWeight: s.weight,
                  color: s.color,
                  fontFamily: s.weight >= 700 ? 'var(--font-display)' : 'var(--font-body)',
                }}>{s.text}</p>
              </div>
            ))}
          </div>

          {/* Signature statement — full width */}
          <div style={{
            padding: '32px 40px',
            background: 'linear-gradient(135deg, rgba(4,108,92,0.08) 0%, rgba(4,108,92,0.04) 100%)',
            border: '1px solid rgba(4,108,92,0.2)',
            borderLeft: '4px solid #046C5C',
            borderRadius: '0 16px 16px 0',
            marginBottom: 72,
            maxWidth: 760,
          }}>
            <p style={{ margin: 0, fontSize: 'clamp(1.1rem, 2vw, 1.35rem)', fontWeight: 700, color: '#046C5C', fontFamily: 'var(--font-display)', fontStyle: 'italic', lineHeight: 1.6 }}>
              We help founder-led organizations transform founder dependency into organizational capability.
            </p>
          </div>

          {/* 4 principle cards — horizontal row */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 20 }} className="four-col">
            {[
              { label: 'Diagnose Before Prescribing', desc: 'We begin by understanding what is limiting performance before recommending solutions.', color: '#2563EB', n: '01' },
              { label: 'Build Capability', desc: 'We install the systems, structures, and operating disciplines organizations need to perform at the next level.', color: '#7C3AED', n: '02' },
              { label: 'Measure What Changes', desc: 'We measure success by what changes inside the organization, not by deliverables produced.', color: '#046C5C', n: '03' },
              { label: 'Scale Beyond the Founder', desc: 'Every engagement is designed to increase organizational capability and reduce dependency on individual leaders.', color: '#C9A86A', n: '04' },
            ].map(f => (
              <div key={f.label} style={{
                padding: '28px 24px', background: 'white', borderRadius: 14,
                border: '1px solid #E5E7EB', borderTop: `3px solid ${f.color}`,
                position: 'relative',
              }}>
                <div style={{ fontSize: '0.68rem', fontWeight: 800, color: f.color, letterSpacing: '0.15em', marginBottom: 12 }}>{f.n}</div>
                <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, color: '#1E1F22', marginBottom: 10, fontSize: '0.9rem', lineHeight: 1.3 }}>{f.label}</div>
                <p style={{ fontSize: '0.85rem', color: '#6B7280', margin: 0, lineHeight: 1.65 }}>{f.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* How Stratiix Works — dark, stacked visual layout */}
      <section style={{ background: '#111214', padding: '96px 0', position: 'relative', overflow: 'hidden' }}>
        {/* Ambient glows */}
        <div style={{ position: 'absolute', top: '10%', left: '20%', width: 400, height: 400, borderRadius: '50%', background: '#2563EB', opacity: 0.04, filter: 'blur(100px)' }} />
        <div style={{ position: 'absolute', bottom: '10%', right: '15%', width: 400, height: 400, borderRadius: '50%', background: '#C9A86A', opacity: 0.04, filter: 'blur(100px)' }} />

        <div style={{ padding: '0 6vw', position: 'relative', zIndex: 1 }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '6vw', alignItems: 'start' }} className="two-col">

            {/* Left — sticky label */}
            <div style={{ position: 'sticky', top: 100 }}>
              <div style={{ fontSize: '0.72rem', fontWeight: 700, color: '#B2DDD7', letterSpacing: '0.18em', textTransform: 'uppercase', marginBottom: 20 }}>How Stratiix Works</div>
              <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)', fontWeight: 900, color: 'white', lineHeight: 1.05, letterSpacing: '-0.03em', marginBottom: 24 }}>
                The<br/>Platform
              </h2>
              <div style={{ width: 48, height: 3, background: '#046C5C', borderRadius: 2, marginBottom: 28 }} />
              <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: '0.95rem', lineHeight: 1.8 }}>
                Four integrated components. One connected system. Designed to move founder-led organizations from diagnosis to sustained performance.
              </p>
            </div>

            {/* Right — stacked items */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
              {[
                {
                  n: '01', name: 'Stratiix Path Diagnostic™',
                  desc: 'Identify what is limiting performance and establish a clear baseline.',
                  detail: 'Every engagement begins here. The Diagnostic reveals capability gaps, founder dependency risks, and the specific constraints limiting performance.',
                  color: '#2563EB',
                  link: '/diagnostic',
                },
                {
                  n: '02', name: 'Transformation Operating System™',
                  desc: 'A structured system for moving from diagnosis to sustainable performance improvement.',
                  detail: 'Five phases. One integrated system. Diagnose, Architect, Activate, Accelerate, Sustain.',
                  color: '#7C3AED',
                  link: '/the-tos',
                },
                {
                  n: '03', name: 'Capability Engines™',
                  desc: 'Install the capabilities required for growth, execution, and performance.',
                  detail: 'Six specialized engines: Intelligence, Operational Excellence, Governance, Growth, Workforce & Adoption, Performance.',
                  color: '#046C5C',
                  link: '/solutions',
                },
                {
                  n: '04', name: 'Transformation Intelligence™',
                  desc: 'Measure progress, track outcomes, and support continuous improvement.',
                  detail: 'Results are measured against the baseline established in the Diagnostic. Not benchmarks. Not assumptions.',
                  color: '#C9A86A',
                  link: '/results',
                },
              ].map((p, i) => (
                <div key={p.n} style={{
                  padding: '40px 0',
                  borderTop: '1px solid rgba(255,255,255,0.07)',
                  borderBottom: i === 3 ? '1px solid rgba(255,255,255,0.07)' : 'none',
                  display: 'grid',
                  gridTemplateColumns: '56px 1fr',
                  gap: 28,
                  alignItems: 'start',
                }}>
                  {/* Number */}
                  <div style={{
                    fontSize: 'clamp(1.5rem, 2.5vw, 2rem)', fontWeight: 900,
                    color: p.color, opacity: 0.6, lineHeight: 1,
                    fontFamily: 'var(--font-display)', letterSpacing: '-0.04em',
                    paddingTop: 4,
                  }}>{p.n}</div>

                  {/* Content */}
                  <div>
                    <div style={{
                      fontFamily: 'var(--font-display)', fontWeight: 800,
                      fontSize: 'clamp(1rem, 1.8vw, 1.25rem)',
                      color: 'white', marginBottom: 8, lineHeight: 1.3,
                    }}>{p.name}</div>
                    <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.95rem', lineHeight: 1.75, marginBottom: 12 }}>{p.desc}</p>
                    <p style={{ color: 'rgba(255,255,255,0.35)', fontSize: '0.85rem', lineHeight: 1.7, margin: 0, fontStyle: 'italic' }}>{p.detail}</p>
                    <div style={{ marginTop: 16 }}>
                      <a href={p.link} style={{
                        fontSize: '0.78rem', fontWeight: 700, color: p.color,
                        textDecoration: 'none', letterSpacing: '0.06em',
                        fontFamily: 'var(--font-display)',
                        display: 'inline-flex', alignItems: 'center', gap: 6,
                      }}>
                        Learn more →
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>



      {/* Founder Story */}
      <section style={{ background: '#1E1F22', padding: '96px 0', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '20%', right: '5%', width: 400, height: 400, borderRadius: '50%', background: '#046C5C', opacity: 0.06, filter: 'blur(80px)' }} />
        <div style={{ padding: '0 6vw', position: 'relative', zIndex: 1 }}>
          <div style={{ maxWidth: 720, margin: '0 auto' }}>
            <div style={{ fontSize: '0.72rem', fontWeight: 700, color: '#B2DDD7', letterSpacing: '0.18em', textTransform: 'uppercase', marginBottom: 24 }}>Why I Built Stratiix</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
              <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: '1.1rem', lineHeight: 1.85, margin: 0 }}>
                For years, I worked across strategy, operations, growth, technology, transformation, and leadership.
              </p>
              <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: '1.05rem', lineHeight: 1.85, margin: 0 }}>
                What I eventually realized was that the organizations I was helping all faced a common challenge:
              </p>
              <div style={{
                padding: '24px 28px',
                background: 'rgba(4,108,92,0.12)', border: '1px solid rgba(4,108,92,0.3)',
                borderLeft: '4px solid #046C5C',
                borderRadius: '0 12px 12px 0',
              }}>
                <p style={{ color: 'white', fontSize: '1.1rem', fontWeight: 700, fontFamily: 'var(--font-display)', lineHeight: 1.7, margin: 0, fontStyle: 'italic' }}>
                  Growth had outpaced the systems supporting the business.
                </p>
              </div>
              <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: '1.05rem', lineHeight: 1.85, margin: 0 }}>
                The challenge wasn't ambition.
              </p>
              <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: '1.05rem', lineHeight: 1.85, margin: 0 }}>
                It wasn't leadership.
              </p>
              <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: '1.1rem', lineHeight: 1.85, margin: 0, fontWeight: 600, fontFamily: 'var(--font-display)' }}>
                It was capability.
              </p>
              <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: '1.05rem', lineHeight: 1.85, margin: 0 }}>
                Stratiix was created to help organizations build the capability required to sustain growth, improve performance, and scale beyond the founder.
              </p>
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
            Ready to Scale<br/>Beyond the Founder?
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.7)', maxWidth: 480, margin: '0 auto 12px', fontSize: '1.05rem', lineHeight: 1.8 }}>
            The first step isn't another strategy session.
          </p>
          <p style={{ color: 'rgba(255,255,255,0.7)', maxWidth: 480, margin: '0 auto 40px', fontSize: '1.05rem', lineHeight: 1.8, fontWeight: 700 }}>
            It's understanding what is limiting performance.
          </p>
          <p style={{ color: 'rgba(255,255,255,0.55)', maxWidth: 480, margin: '0 auto 44px', fontSize: '0.95rem', lineHeight: 1.8 }}>
            Begin with the Stratiix Path Diagnostic™.
          </p>
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