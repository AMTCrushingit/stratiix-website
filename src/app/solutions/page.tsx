import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Solutions: Sector-Specific Transformation',
  description: 'Stratiix delivers transformation across HVAC, Trucking & Logistics, Professional Services, and Nonprofits & Institutions.',
}

const sectors = [
  {
    id: 'hvac',
    name: 'HVAC',
    headline: 'Built for HVAC businesses scaling beyond the founder.',
    body: 'HVAC businesses face a specific set of transformation challenges: founder dependency, inconsistent service delivery, technician performance variance, and the operational complexity that comes with growth. The TOS addresses each of these systematically.',
    challenges: [
      'Founder-dependent operations that cannot scale',
      'Inconsistent service quality across technicians',
      'Weak job costing and margin visibility',
      'No system for workforce development and retention',
      'Reactive scheduling and dispatch operations',
    ],
    engines: ['Operational Excellence Engine™', 'Workforce & Adoption Engine™', 'Performance Engine™', 'Growth Engine™'],
  },
  {
    id: 'trucking',
    name: 'Trucking & Logistics',
    headline: 'Operational systems for logistics companies building for scale.',
    body: 'Trucking and logistics operations require precision at every level: fleet management, compliance, driver performance, customer service, and financial controls. The TOS installs the systems that allow logistics businesses to grow without losing operational control.',
    challenges: [
      'Fleet utilization and maintenance management',
      'Driver performance and compliance systems',
      'Customer service and communication gaps',
      'Financial controls and cost visibility',
      'Scaling operations without proportional overhead growth',
    ],
    engines: ['Operational Excellence Engine™', 'Governance Engine™', 'Intelligence Engine™', 'Performance Engine™'],
  },
  {
    id: 'professional',
    name: 'Professional Services',
    headline: 'Practice development for professional service firms.',
    body: 'Professional service firms: consulting, legal, accounting, engineering: face the challenge of delivering consistent quality while growing. The TOS builds the delivery systems, client management infrastructure, and practice development capabilities that allow professional service firms to scale without sacrificing quality.',
    challenges: [
      'Inconsistent client delivery and experience',
      'Utilization and capacity management',
      'Business development and pipeline management',
      'Knowledge management and IP capture',
      'Talent development and retention',
    ],
    engines: ['Intelligence Engine™', 'Growth Engine™', 'Workforce & Adoption Engine™', 'Performance Engine™'],
  },
  {
    id: 'nonprofits',
    name: 'Nonprofits & Institutions',
    headline: 'Organizational capacity for mission-driven organizations.',
    body: 'Nonprofits and institutions face unique transformation challenges: governance complexity, funding dependency, mission drift, and the difficulty of measuring impact. The TOS builds the organizational capacity that allows mission-driven organizations to deliver on their mandate with greater consistency and effectiveness.',
    challenges: [
      'Governance structures that slow decision-making',
      'Program effectiveness and impact measurement',
      'Funding diversification and sustainability',
      'Organizational capacity and workforce development',
      'Strategic clarity and mission alignment',
    ],
    engines: ['Governance Engine™', 'Performance Engine™', 'Workforce & Adoption Engine™', 'Intelligence Engine™'],
  },
]

export default function SolutionsPage() {
  return (
    <>
      {/* Hero */}
      <section style={{
        background: 'linear-gradient(135deg, #050A14 0%, #062E35 100%)',
        paddingTop: 140, paddingBottom: 96,
        position: 'relative', overflow: 'hidden',
      }}>
        <div style={{ position: 'absolute', bottom: '10%', right: '5%', width: 400, height: 400, borderRadius: '50%', background: 'var(--teal)', opacity: 0.08, filter: 'blur(80px)' }} />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <span className="eyebrow">Who We Serve</span>
          <h1 style={{ color: 'white', maxWidth: 640, marginBottom: 24 }}>Solutions</h1>
          <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: '1.15rem', maxWidth: 560, lineHeight: 1.8 }}>
            The TOS is sector-agnostic. Implementation is not. Stratiix brings deep operational knowledge to each engagement.
          </p>
        </div>
      </section>

      {/* Sectors */}
      {sectors.map((s, i) => (
        <section key={s.id} id={s.id} className="section" style={{ background: i % 2 === 0 ? 'var(--white)' : 'var(--slate)' }}>
          <div className="container">
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'start' }}>
              <div style={{ order: i % 2 === 0 ? 0 : 1 }}>
                <span className="eyebrow">{String(i + 1).padStart(2, '0')}</span>
                <h2>{s.name}</h2>
                <div className="divider" />
                <p style={{ fontSize: '1.05rem', lineHeight: 1.8, marginBottom: 20 }}>{s.headline}</p>
                <p style={{ color: 'var(--muted)', lineHeight: 1.8, marginBottom: 32 }}>{s.body}</p>
                <Link href="/contact" className="btn btn-primary">Discuss Your Organization →</Link>
              </div>
              <div style={{ order: i % 2 === 0 ? 1 : 0 }}>
                <div style={{ marginBottom: 32 }}>
                  <div style={{ fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: 16 }}>Common Challenges</div>
                  {s.challenges.map(c => (
                    <div key={c} style={{ display: 'flex', gap: 12, alignItems: 'flex-start', marginBottom: 12 }}>
                      <div style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--teal)', flexShrink: 0, marginTop: 7 }} />
                      <span style={{ fontSize: '0.9rem', color: 'var(--body-text)', lineHeight: 1.6 }}>{c}</span>
                    </div>
                  ))}
                </div>
                <div>
                  <div style={{ fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: 16 }}>Capability Engines Deployed</div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                    {s.engines.map(e => (
                      <span key={e} className="badge badge-teal">{e}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* CTA */}
      <section className="section bg-dark">
        <div className="container" style={{ textAlign: 'center' }}>
          <span className="eyebrow" style={{ color: 'var(--mint-deep)' }}>Begin</span>
          <h2 style={{ color: 'white', maxWidth: 520, margin: '0 auto 20px' }}>
            Every engagement begins with the Diagnostic.
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.55)', maxWidth: 440, margin: '0 auto 40px' }}>
            Contact Stratiix to discuss your organization and determine the right starting point.
          </p>
          <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/diagnostic" className="btn btn-primary">Begin with the Diagnostic →</Link>
            <Link href="/contact" className="btn btn-ghost">Contact Stratiix</Link>
          </div>
        </div>
      </section>
    </>
  )
}