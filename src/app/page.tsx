import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Stratiix — Transform Complexity. Build Capability. Accelerate Outcomes.',
  description: 'Stratiix diagnoses what is limiting performance, architects the future state, installs the required capabilities, and measures what changes.',
}

function ArchitectureVisual() {
  const layers = [
    { label: 'Diagnostic', color: '#1D4ED8', w: '100%' },
    { label: 'TOS', color: '#7C3AED', w: '88%' },
    { label: 'Capability Engines', color: '#0D9488', w: '76%' },
    { label: 'Transformation Intelligence', color: '#C9A86A', w: '64%' },
    { label: 'Outcomes', color: '#5BB8A8', w: '52%' },
  ]
  return (
    <div style={{ position: 'relative', width: '100%', maxWidth: 480 }}>
      {layers.map((l, i) => (
        <div key={l.label} style={{
          width: l.w, margin: '0 auto', marginBottom: i < layers.length - 1 ? 10 : 0,
          height: 52, borderRadius: 10,
          background: `${l.color}22`, border: `1px solid ${l.color}55`,
          backdropFilter: 'blur(8px)',
        }} />
      ))}
      <div style={{ marginTop: 28, display: 'flex', flexDirection: 'column', gap: 6 }}>
        {layers.map((l, i) => (
          <div key={l.label} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <div style={{ width: 8, height: 8, borderRadius: '50%', background: l.color, flexShrink: 0 }} />
            <span style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.65)', fontFamily: 'var(--font-body)' }}>
              {String(i + 1).padStart(2, '0')} — {l.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}

function WhyFails() {
  const reasons = [
    { n: '01', title: 'Strategy without execution architecture', body: 'Most organizations can articulate a strategy. Few have the systems to execute it. The gap between intent and outcome is not a strategy problem — it is a capability problem.' },
    { n: '02', title: 'Capability gaps that go undiagnosed', body: 'Leaders invest in initiatives without first understanding what is actually limiting performance. Without a diagnostic baseline, resources are deployed against symptoms, not causes.' },
    { n: '03', title: 'Change without adoption infrastructure', body: 'New systems, processes, and structures fail when the workforce is not equipped, aligned, or motivated to operate them. Transformation requires an adoption engine, not just a change plan.' },
    { n: '04', title: 'No system to sustain what is built', body: 'Even successful transformations erode without rhythms, governance, and accountability structures that hold performance without constant intervention from leadership.' },
  ]
  return (
    <section className="section bg-dark">
      <div className="container">
        <span className="eyebrow">The Problem</span>
        <h2 style={{ color: 'white', maxWidth: 560, marginBottom: 16 }}>Why Transformation Fails</h2>
        <p style={{ color: 'rgba(255,255,255,0.6)', maxWidth: 560, marginBottom: 64 }}>
          Strategy alone does not create results. The organizations that struggle to transform share four common failure patterns.
        </p>
        <div className="grid-2">
          {reasons.map(r => (
            <div key={r.n} style={{ padding: '32px', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 12 }}>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: '0.75rem', fontWeight: 700, color: 'var(--teal)', letterSpacing: '0.1em', marginBottom: 16 }}>{r.n}</div>
              <h4 style={{ color: 'white', marginBottom: 12, fontSize: '1.05rem' }}>{r.title}</h4>
              <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: '0.9rem', lineHeight: 1.75, margin: 0 }}>{r.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function ArchitectureSection() {
  const steps = [
    { label: 'Diagnostic', desc: 'Reveal what is limiting performance', color: '#1D4ED8' },
    { label: 'TOS', desc: 'Architect the transformation system', color: '#7C3AED' },
    { label: 'Capability Engines', desc: 'Install the required capabilities', color: '#0D9488' },
    { label: 'Intelligence', desc: 'Measure, learn, and adapt', color: '#C9A86A' },
    { label: 'Outcomes', desc: 'Deliver measurable results', color: '#5BB8A8' },
  ]
  return (
    <section className="section bg-white">
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: 64 }}>
          <span className="eyebrow">The System</span>
          <h2>Transformation Architecture™</h2>
          <div className="divider" style={{ margin: '20px auto 0' }} />
        </div>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexWrap: 'wrap', gap: 0 }}>
          {steps.map((s, i) => (
            <div key={s.label} style={{ display: 'flex', alignItems: 'center' }}>
              <div style={{ textAlign: 'center', padding: '0 8px' }}>
                <div style={{ width: 80, height: 80, borderRadius: '50%', background: `${s.color}18`, border: `2px solid ${s.color}`, display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 12px', fontSize: '0.7rem', fontWeight: 700, color: s.color, letterSpacing: '0.06em' }}>
                  {String(i + 1).padStart(2, '0')}
                </div>
                <div style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: '0.85rem', color: 'var(--charcoal)', marginBottom: 4 }}>{s.label}</div>
                <div style={{ fontSize: '0.75rem', color: 'var(--muted)', maxWidth: 100 }}>{s.desc}</div>
              </div>
              {i < steps.length - 1 && <div style={{ width: 40, height: 2, background: 'var(--slate-mid)', flexShrink: 0, margin: '0 4px', marginBottom: 40 }} />}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function TOSSection() {
  const phases = [
    { n: '01', label: 'Diagnose', desc: 'Establish the baseline. Identify what is limiting performance, where capability gaps exist, and what the organization is actually ready to change.' },
    { n: '02', label: 'Architect', desc: 'Design the future state. Define the transformation roadmap, sequence the interventions, and align leadership around the path forward.' },
    { n: '03', label: 'Activate', desc: 'Install the capabilities. Deploy the Capability Engines, build the systems, and begin the structured change process with full adoption support.' },
    { n: '04', label: 'Accelerate', desc: 'Drive performance. Measure outcomes, remove friction, optimize the installed systems, and build momentum toward the defined results.' },
    { n: '05', label: 'Sustain', desc: 'Lock in the gains. Establish the governance rhythms, accountability structures, and leadership practices that hold performance without constant intervention.' },
  ]
  return (
    <section className="section bg-slate">
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'start' }}>
          <div>
            <span className="eyebrow">The Operating System</span>
            <h2>Transformation Operating System™</h2>
            <div className="divider" />
            <p style={{ color: 'var(--body-text)', marginBottom: 32, fontSize: '1.05rem', lineHeight: 1.8 }}>
              The TOS is the structured methodology through which Stratiix delivers transformation. Five phases. One integrated system. Designed to move organizations from diagnosis to sustained performance.
            </p>
            <Link href="/the-tos" className="btn btn-primary">Explore the TOS →</Link>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            {phases.map(p => (
              <div key={p.n} className="hover-lift" style={{ display: 'flex', gap: 20, padding: '20px 24px', background: 'white', borderRadius: 10, border: '1px solid var(--slate-mid)' }}>
                <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '0.75rem', color: 'var(--teal)', letterSpacing: '0.1em', flexShrink: 0, paddingTop: 2 }}>{p.n}</div>
                <div>
                  <div style={{ fontFamily: 'var(--font-display)', fontWeight: 600, color: 'var(--charcoal)', marginBottom: 6 }}>{p.label}</div>
                  <p style={{ fontSize: '0.85rem', color: 'var(--muted)', lineHeight: 1.65, margin: 0 }}>{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function EnginesSection() {
  const engines = [
    { icon: '◈', name: 'Intelligence Engine™', desc: 'Data, insight, and decision infrastructure that enables leaders to act on evidence rather than assumption.' },
    { icon: '⬡', name: 'Operational Excellence Engine™', desc: 'Process discipline, efficiency systems, and quality frameworks that eliminate waste and build execution reliability.' },
    { icon: '◉', name: 'Governance Engine™', desc: 'Accountability structures, decision rights, and oversight mechanisms that hold performance without micromanagement.' },
    { icon: '◈', name: 'Growth Engine™', desc: 'Market development, revenue architecture, and customer acquisition systems that drive sustainable top-line growth.' },
    { icon: '⬡', name: 'Workforce & Adoption Engine™', desc: 'People capability, change adoption, and organizational alignment systems that ensure transformation sticks.' },
    { icon: '◉', name: 'Performance Engine™', desc: 'Measurement frameworks, KPI architecture, and performance rhythms that connect daily activity to strategic outcomes.' },
  ]
  return (
    <section className="section bg-white">
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: 64 }}>
          <span className="eyebrow">The Engines</span>
          <h2>Capability Engines™</h2>
          <div className="divider" style={{ margin: '20px auto 0' }} />
          <p style={{ color: 'var(--muted)', maxWidth: 560, margin: '24px auto 0', fontSize: '1.05rem' }}>
            Six specialized engines that install the capabilities organizations need to perform at the next level.
          </p>
        </div>
        <div className="grid-3">
          {engines.map(e => (
            <div key={e.name} className="card hover-lift" style={{ padding: '28px 28px 32px' }}>
              <div style={{ fontSize: '1.5rem', color: 'var(--teal)', marginBottom: 16 }}>{e.icon}</div>
              <h4 style={{ marginBottom: 10, fontSize: '1rem', lineHeight: 1.4 }}>{e.name}</h4>
              <p style={{ fontSize: '0.875rem', color: 'var(--muted)', lineHeight: 1.7, margin: 0 }}>{e.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function SolutionsSection() {
  const sectors = [
    { name: 'HVAC', desc: 'Operational systems, workforce capability, and growth architecture for HVAC businesses scaling beyond the founder.' },
    { name: 'Trucking & Logistics', desc: 'Fleet operations, compliance systems, and performance infrastructure for logistics companies building for scale.' },
    { name: 'Professional Services', desc: 'Delivery systems, client management, and practice development for professional service firms.' },
    { name: 'Nonprofits & Institutions', desc: 'Governance, program effectiveness, and organizational capacity for mission-driven organizations.' },
  ]
  return (
    <section className="section bg-mint">
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'center' }}>
          <div>
            <span className="eyebrow">Who We Serve</span>
            <h2>Built for Organizations Ready to Transform</h2>
            <div className="divider" />
            <p style={{ color: 'var(--body-text)', marginBottom: 32, fontSize: '1.05rem', lineHeight: 1.8 }}>
              The TOS is sector-agnostic but implementation is not. Stratiix brings deep operational knowledge to each engagement.
            </p>
            <Link href="/solutions" className="btn btn-primary">View All Solutions →</Link>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            {sectors.map(s => (
              <div key={s.name} className="hover-lift" style={{ padding: '20px 24px', background: 'white', borderRadius: 10, border: '1px solid var(--mint-mid)', display: 'flex', gap: 16, alignItems: 'flex-start' }}>
                <div style={{ width: 8, height: 8, borderRadius: '50%', background: 'var(--teal)', flexShrink: 0, marginTop: 6 }} />
                <div>
                  <div style={{ fontFamily: 'var(--font-display)', fontWeight: 600, color: 'var(--charcoal)', marginBottom: 4 }}>{s.name}</div>
                  <p style={{ fontSize: '0.85rem', color: 'var(--muted)', margin: 0, lineHeight: 1.65 }}>{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function ResultsSection() {
  const outcomes = [
    { label: 'Installed', desc: 'Capability systems, governance structures, and operational frameworks that are live and functioning inside the organization.' },
    { label: 'Adopted', desc: 'Workforce aligned, trained, and operating the new systems — not reverting to old patterns within 90 days.' },
    { label: 'Improved', desc: 'Measurable movement in the performance indicators that matter: efficiency, revenue, capacity, and organizational health.' },
  ]
  const colors = ['#1D4ED8', '#0D9488', '#C9A86A']
  return (
    <section className="section bg-dark">
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: 64 }}>
          <span className="eyebrow" style={{ color: '#5BB8A8' }}>What We Deliver</span>
          <h2 style={{ color: 'white' }}>Results That Are Measurable</h2>
          <div className="divider" style={{ margin: '20px auto 0', background: 'var(--teal)' }} />
          <p style={{ color: 'rgba(255,255,255,0.55)', maxWidth: 520, margin: '24px auto 0' }}>
            Stratiix does not measure success by deliverables produced. We measure it by what changes inside the organization.
          </p>
        </div>
        <div className="grid-3">
          {outcomes.map((o, i) => (
            <div key={o.label} style={{ padding: '40px 32px', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 12, textAlign: 'center' }}>
              <div style={{ width: 56, height: 56, borderRadius: '50%', background: `${colors[i]}22`, border: `2px solid ${colors[i]}`, display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 24px', fontSize: '0.7rem', fontWeight: 700, color: colors[i], letterSpacing: '0.06em' }}>
                {String(i + 1).padStart(2, '0')}
              </div>
              <h3 style={{ color: 'white', fontSize: '1.5rem', marginBottom: 16 }}>{o.label}</h3>
              <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: '0.9rem', lineHeight: 1.75, margin: 0 }}>{o.desc}</p>
            </div>
          ))}
        </div>
        <div style={{ textAlign: 'center', marginTop: 48 }}>
          <Link href="/results" className="btn btn-ghost">View Results →</Link>
        </div>
      </div>
    </section>
  )
}

function CTASection() {
  return (
    <section className="section bg-white">
      <div className="container" style={{ textAlign: 'center' }}>
        <span className="eyebrow">Get Started</span>
        <h2 style={{ maxWidth: 560, margin: '0 auto 20px' }}>The Diagnostic is where every transformation begins.</h2>
        <p style={{ color: 'var(--muted)', maxWidth: 480, margin: '0 auto 40px', fontSize: '1.05rem' }}>
          A structured assessment of your organization's current state, capability gaps, and transformation readiness.
        </p>
        <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link href="/diagnostic" className="btn btn-primary">Begin with the Diagnostic →</Link>
          <Link href="/the-tos" className="btn btn-ghost-dark">Explore the TOS</Link>
        </div>
      </div>
    </section>
  )
}

export default function Home() {
  return (
    <>
      <section style={{ minHeight: '100vh', background: 'linear-gradient(135deg, #050A14 0%, #062E35 100%)', display: 'flex', alignItems: 'center', position: 'relative', overflow: 'hidden', paddingTop: 68 }}>
        {[
          { color: '#1D4ED8', top: '15%', left: '5%' },
          { color: '#7C3AED', top: '10%', right: '8%' },
          { color: '#C9A86A', bottom: '20%', left: '8%' },
          { color: '#0D9488', bottom: '15%', right: '5%' },
        ].map((orb, i) => (
          <div key={i} style={{ position: 'absolute', width: 320, height: 320, borderRadius: '50%', background: orb.color, opacity: 0.12, filter: 'blur(80px)', top: (orb as any).top, left: (orb as any).left, right: (orb as any).right, bottom: (orb as any).bottom }} />
        ))}
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: 600, height: 600, borderRadius: '50%', background: 'radial-gradient(circle, rgba(201,168,106,0.06) 0%, transparent 70%)', pointerEvents: 'none' }} />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'center' }}>
            <div>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '6px 14px', borderRadius: 100, background: 'rgba(13,148,136,0.15)', border: '1px solid rgba(13,148,136,0.3)', marginBottom: 32 }}>
                <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#0D9488' }} />
                <span style={{ fontSize: '0.75rem', fontWeight: 600, color: '#0D9488', letterSpacing: '0.08em', textTransform: 'uppercase' }}>Transformation Platform</span>
              </div>
              <h1 style={{ color: 'white', marginBottom: 28, lineHeight: 1.1 }}>
                Transform Complexity.<br />
                <span style={{ color: '#5BB8A8' }}>Build Capability.</span><br />
                Accelerate Outcomes.
              </h1>
              <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: '1.1rem', lineHeight: 1.8, maxWidth: 480, marginBottom: 40 }}>
                Stratiix diagnoses what is limiting performance, architects the future state, installs the required capabilities, and measures what changes.
              </p>
              <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
                <Link href="/diagnostic" className="btn btn-primary" style={{ fontSize: '0.95rem', padding: '14px 28px' }}>Begin with the Diagnostic →</Link>
                <Link href="/the-tos" className="btn btn-ghost" style={{ fontSize: '0.95rem', padding: '14px 28px' }}>Explore the TOS</Link>
              </div>
              <div style={{ marginTop: 48, display: 'flex', gap: 32 }}>
                {['Diagnose', 'Activate', 'Accelerate'].map((t, i) => (
                  <div key={t}>
                    <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '0.75rem', color: '#0D9488', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 4 }}>{String(i + 1).padStart(2, '0')}</div>
                    <div style={{ fontSize: '0.875rem', color: 'rgba(255,255,255,0.5)' }}>{t}</div>
                  </div>
                ))}
              </div>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <ArchitectureVisual />
            </div>
          </div>
        </div>
        <style>{`@media(max-width:768px){section>div>div{grid-template-columns:1fr!important;gap:48px!important;}section>div>div>div:last-child{display:none;}}`}</style>
      </section>
      <WhyFails />
      <ArchitectureSection />
      <TOSSection />
      <EnginesSection />
      <SolutionsSection />
      <ResultsSection />
      <CTASection />
    </>
  )
}