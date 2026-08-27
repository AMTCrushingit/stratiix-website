'use client'
import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'

// ── Animated TOS Visual ───────────────────────────────────────────────────────
function TOSVisual() {
  const layers = [
    { label: 'Diagnostic', color: '#2563EB', desc: 'Reveal what is limiting performance', w: '100%' },
    { label: 'TOS', color: '#7C3AED', desc: 'Architect the transformation system', w: '88%' },
    { label: 'Capability Engines', color: '#046C5C', desc: 'Install the required capabilities', w: '76%' },
    { label: 'Transformation Intelligence', color: '#10B981', desc: 'Measure, learn, and adapt', w: '64%' },
    { label: 'Outcomes', color: '#C9A86A', desc: 'Deliver measurable results', w: '52%' },
  ]
  const [hovered, setHovered] = useState<number | null>(null)
  return (
    <div style={{ width: '100%', maxWidth: 440 }}>
      <style>{`
        @keyframes layerIn {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes labelIn {
          from { opacity: 0; transform: translateX(-8px); }
          to   { opacity: 1; transform: translateX(0); }
        }
      `}</style>
      {layers.map((l, i) => (
        <div key={l.label}
          onMouseEnter={() => setHovered(i)}
          onMouseLeave={() => setHovered(null)}
          style={{
            width: l.w, margin: '0 auto', marginBottom: i < layers.length - 1 ? 8 : 0,
            height: 56, borderRadius: 12, position: 'relative', cursor: 'default',
            background: hovered === i ? `${l.color}35` : `${l.color}18`,
            border: `1px solid ${hovered === i ? l.color + 'aa' : l.color + '44'}`,
            boxShadow: hovered === i ? `0 0 24px ${l.color}30` : 'none',
            transform: hovered === i ? 'translateY(-2px)' : 'translateY(0)',
            transition: 'all 0.25s ease',
            animation: `layerIn 0.5s ease forwards`,
            animationDelay: `${i * 0.1}s`,
            opacity: 0,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}
        >
          {hovered === i && (
            <span style={{ fontSize: '0.72rem', fontWeight: 600, color: l.color, letterSpacing: '0.06em', whiteSpace: 'nowrap' }}>
              {l.desc}
            </span>
          )}
        </div>
      ))}
      <div style={{ marginTop: 24, display: 'flex', flexDirection: 'column', gap: 8 }}>
        {layers.map((l, i) => (
          <div key={l.label} style={{
            display: 'flex', alignItems: 'center', gap: 10,
            animation: `labelIn 0.4s ease forwards`,
            animationDelay: `${0.55 + i * 0.07}s`,
            opacity: 0,
          }}>
            <div style={{ width: 6, height: 6, borderRadius: '50%', background: l.color, flexShrink: 0 }} />
            <span style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.6)', fontFamily: 'var(--font-body)', letterSpacing: '0.02em' }}>
              {String(i + 1).padStart(2, '0')} — {l.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}

// ── Scroll-triggered counter ──────────────────────────────────────────────────
function StatNumber({ value, suffix = '' }: { value: number; suffix?: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        let start = 0
        const step = value / 40
        const timer = setInterval(() => {
          start += step
          if (start >= value) { setCount(value); clearInterval(timer) }
          else setCount(Math.floor(start))
        }, 30)
        obs.disconnect()
      }
    }, { threshold: 0.5 })
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [value])
  return <div ref={ref}>{count}{suffix}</div>
}

// ── Fade-in on scroll ─────────────────────────────────────────────────────────
function FadeIn({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setVisible(true); obs.disconnect() }
    }, { threshold: 0.15 })
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])
  return (
    <div ref={ref} style={{
      opacity: visible ? 1 : 0,
      transform: visible ? 'translateY(0)' : 'translateY(24px)',
      transition: `opacity 0.7s ease ${delay}s, transform 0.7s ease ${delay}s`,
    }}>
      {children}
    </div>
  )
}


// ── TOS Isometric Slab Diagram ───────────────────────────────────────────────
// Stacked 3D isometric layers, dark background, numbered labels on the right
// Matches the uploaded TOS.pdf visual exactly
function TOSDiagram() {
  const phases = [
    { n: '01', label: 'Diagnose',   sub: 'Establish the baseline',  color: '#2563EB' },
    { n: '02', label: 'Architect',  sub: 'Design the future state',  color: '#7C3AED' },
    { n: '03', label: 'Activate',   sub: 'Install the capabilities', color: '#046C5C' },
    { n: '04', label: 'Accelerate', sub: 'Drive performance',        color: '#10B981' },
    { n: '05', label: 'Sustain',    sub: 'Lock in the gains',        color: '#C9A86A' },
  ]

  // Slab dimensions
  const W = 260   // slab width
  const H = 28    // slab height (face)
  const D = 14    // slab depth (side)
  const SKEW = 20 // horizontal offset per layer (staircase)
  const GAP = 18  // vertical gap between slabs
  const STEP = H + GAP + D

  // Total SVG dimensions
  const totalH = phases.length * STEP + D + 40
  const totalW = W + (phases.length - 1) * SKEW + 40

  return (
    <div style={{ width: '100%', display: 'flex', alignItems: 'center', gap: 48, flexWrap: 'wrap' }}>
      <style>{`
        @keyframes slabIn {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes labelSlide {
          from { opacity: 0; transform: translateX(-12px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        .tos-slab-group { cursor: default; }
        .tos-slab-face {
          transition: filter 0.25s ease, transform 0.25s ease;
          transform-origin: center;
        }
        .tos-slab-group:hover .tos-slab-face {
          filter: brightness(1.35);
        }
        .tos-slab-group:hover {
          transform: translateY(-3px);
        }
      `}</style>

      {/* Left: SVG isometric stack */}
      <div style={{ flexShrink: 0 }}>
        <svg
          width={totalW}
          height={totalH}
          viewBox={`0 0 ${totalW} ${totalH}`}
          style={{ overflow: 'visible' }}
        >
          {phases.map((ph, i) => {
            // Each slab is offset: top layers are higher and to the right
            // Layer 0 (Diagnose) = top = rightmost
            const x = (phases.length - 1 - i) * SKEW + 20
            const y = i * STEP + 20

            // Darken colour for side/bottom faces
            const faceColor = ph.color
            const sideColor = ph.color + 'aa'
            const bottomColor = ph.color + '55'

            // Connector line x endpoint (right edge of slab)
            const lineX = x + W
            const lineY = y + H / 2

            return (
              <g
                key={ph.n}
                className="tos-slab-group"
                style={{
                  animation: `slabIn 0.5s ease forwards`,
                  animationDelay: `${i * 0.12}s`,
                  opacity: 0,
                }}
              >
                {/* Bottom face (depth illusion) */}
                <rect
                  x={x} y={y + H}
                  width={W} height={D}
                  fill={bottomColor}
                  rx={2}
                />
                {/* Right side face */}
                <polygon
                  points={`${x + W},${y} ${x + W + 0},${y} ${x + W},${y + H} ${x + W},${y + H + D}`}
                  fill={sideColor}
                />
                {/* Top face (main) */}
                <rect
                  className="tos-slab-face"
                  x={x} y={y}
                  width={W} height={H}
                  fill={faceColor}
                  rx={3}
                />
                {/* Number on slab */}
                <text
                  x={x + 16} y={y + H / 2 + 5}
                  fill="rgba(255,255,255,0.9)"
                  fontSize="11"
                  fontWeight="800"
                  fontFamily="Space Grotesk, sans-serif"
                  letterSpacing="1"
                >
                  {ph.n}
                </text>
                {/* Label on slab */}
                <text
                  x={x + 44} y={y + H / 2 + 5}
                  fill="white"
                  fontSize="12"
                  fontWeight="700"
                  fontFamily="Space Grotesk, sans-serif"
                >
                  {ph.label}
                </text>
              </g>
            )
          })}
        </svg>
      </div>

      {/* Right: numbered labels */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 20, flex: 1, minWidth: 200 }}>
        {phases.map((ph, i) => (
          <div
            key={ph.n}
            style={{
              display: 'flex', alignItems: 'flex-start', gap: 14,
              animation: `labelSlide 0.5s ease forwards`,
              animationDelay: `${0.1 + i * 0.12}s`,
              opacity: 0,
            }}
          >
            <span style={{
              fontFamily: 'var(--font-display)', fontWeight: 800,
              fontSize: '0.72rem', color: ph.color,
              letterSpacing: '0.1em', flexShrink: 0, paddingTop: 2,
            }}>
              {ph.n}
            </span>
            <div>
              <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1rem', color: 'white', marginBottom: 3 }}>
                {ph.label}
              </div>
              <div style={{ fontSize: '0.82rem', color: 'rgba(255,255,255,0.5)', lineHeight: 1.5 }}>
                {ph.sub}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}


export default function Home() {
  return (
    <>
      <style>{`
        @keyframes orbFloat {
          0%, 100% { transform: translateY(0) scale(1); }
          50%       { transform: translateY(-20px) scale(1.05); }
        }
        @keyframes heroFadeUp {
          from { opacity: 0; transform: translateY(32px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes pulse {
          0%, 100% { opacity: 0.6; }
          50%       { opacity: 1; }
        }
        .problem-card {
          padding: 40px 36px;
          border-radius: 16px;
          border: 1px solid rgba(255,255,255,0.06);
          background: rgba(255,255,255,0.03);
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }
        .problem-card::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 2px;
          background: linear-gradient(90deg, transparent, var(--card-accent, #046C5C), transparent);
          opacity: 0;
          transition: opacity 0.3s ease;
        }
        .problem-card:hover {
          border-color: rgba(255,255,255,0.12);
          background: rgba(255,255,255,0.05);
          transform: translateY(-4px);
        }
        .problem-card:hover::before { opacity: 1; }
        .engine-card {
          padding: 32px;
          border-radius: 16px;
          border: 1px solid var(--slate-mid);
          background: white;
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }
        .engine-card::after {
          content: '';
          position: absolute;
          bottom: 0; left: 0; right: 0;
          height: 3px;
          background: var(--emerald);
          transform: scaleX(0);
          transition: transform 0.3s ease;
          transform-origin: left;
        }
        .engine-card:hover {
          border-color: var(--emerald);
          box-shadow: 0 12px 40px rgba(4,108,92,0.1);
          transform: translateY(-4px);
        }
        .engine-card:hover::after { transform: scaleX(1); }
        .phase-row {
          display: flex;
          gap: 20px;
          padding: 24px 28px;
          background: white;
          border-radius: 12px;
          border: 1px solid var(--slate-mid);
          transition: all 0.25s ease;
          cursor: default;
        }
        .phase-row:hover {
          border-color: var(--emerald);
          box-shadow: 0 4px 20px rgba(4,108,92,0.08);
          transform: translateX(4px);
        }
        @media (max-width: 768px) {
          .hero-grid { grid-template-columns: 1fr !important; }
          .hero-visual { display: none !important; }
          .two-col { grid-template-columns: 1fr !important; gap: 40px !important; }
          .three-col { grid-template-columns: 1fr !important; }
          .four-col { grid-template-columns: 1fr 1fr !important; }
          .stat-row { grid-template-columns: 1fr 1fr !important; }
        }
      `}</style>

      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section style={{
        minHeight: '100vh',
        background: 'radial-gradient(ellipse at 20% 50%, #0a1628 0%, #050A14 50%, #062018 100%)',
        display: 'flex', alignItems: 'center',
        position: 'relative', overflow: 'hidden', paddingTop: 68,
      }}>
        {/* Orbs */}
        {[
          { c: '#2563EB', t: '8%', l: '3%', s: 500, d: '0s' },
          { c: '#7C3AED', t: '5%', r: '5%', s: 400, d: '2s' },
          { c: '#C9A86A', b: '15%', l: '5%', s: 360, d: '1s' },
          { c: '#046C5C', b: '10%', r: '3%', s: 440, d: '3s' },
        ].map((o, i) => (
          <div key={i} style={{
            position: 'absolute',
            width: o.s, height: o.s, borderRadius: '50%',
            background: o.c, opacity: 0.1, filter: 'blur(100px)',
            top: (o as any).t, left: (o as any).l, right: (o as any).r, bottom: (o as any).b,
            animation: `orbFloat ${8 + i * 2}s ease-in-out infinite`,
            animationDelay: o.d,
          }} />
        ))}
        {/* Grid lines */}
        <div style={{
          position: 'absolute', inset: 0, opacity: 0.03,
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
          backgroundSize: '80px 80px',
        }} />

        <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 32px', width: '100%', position: 'relative', zIndex: 1 }}>
          <div className="hero-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'center' }}>
            <div>
              {/* Badge */}
              <div style={{
                display: 'inline-flex', alignItems: 'center', gap: 8,
                padding: '6px 16px', borderRadius: 100, marginBottom: 36,
                background: 'rgba(4,108,92,0.12)', border: '1px solid rgba(4,108,92,0.35)',
                animation: 'heroFadeUp 0.6s ease forwards',
              }}>
                <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#046C5C', animation: 'pulse 2s infinite' }} />
                <span style={{ fontSize: '0.72rem', fontWeight: 700, color: '#046C5C', letterSpacing: '0.12em', textTransform: 'uppercase' }}>
                  Built for Founder-Led Organizations
                </span>
              </div>

              <h1 style={{
                color: 'white', lineHeight: 1.08, marginBottom: 28,
                fontSize: 'clamp(2.6rem, 5vw, 4.2rem)',
                animation: 'heroFadeUp 0.6s ease 0.1s forwards', opacity: 0,
              }}>
                Transform<br />
                <span style={{ color: '#B2DDD7' }}>Complexity.</span><br />
                Build Capability.
              </h1>

              <p style={{
                color: 'rgba(255,255,255,0.6)', fontSize: '1.1rem', lineHeight: 1.85,
                maxWidth: 460, marginBottom: 44,
                animation: 'heroFadeUp 0.6s ease 0.2s forwards', opacity: 0,
              }}>
                Stratiix helps founder-led organizations identify what is limiting performance and build the capability required to scale beyond the founder.
              </p>

              <div style={{
                display: 'flex', gap: 14, flexWrap: 'wrap',
                animation: 'heroFadeUp 0.6s ease 0.3s forwards', opacity: 0,
              }}>
                <Link href="/diagnostic" style={{
                  display: 'inline-flex', alignItems: 'center', gap: 8,
                  padding: '14px 28px', borderRadius: 10,
                  background: '#046C5C', color: 'white',
                  fontWeight: 700, fontSize: '0.9rem', textDecoration: 'none',
                  transition: 'all 0.2s', boxShadow: '0 8px 32px rgba(4,108,92,0.35)',
                }}>
                  Begin with the Diagnostic →
                </Link>
                <Link href="/the-tos" style={{
                  display: 'inline-flex', alignItems: 'center', gap: 8,
                  padding: '14px 28px', borderRadius: 10,
                  background: 'rgba(255,255,255,0.06)', color: 'rgba(255,255,255,0.85)',
                  border: '1px solid rgba(255,255,255,0.15)',
                  fontWeight: 600, fontSize: '0.9rem', textDecoration: 'none',
                  transition: 'all 0.2s',
                }}>
                  Explore the TOS
                </Link>
              </div>

              <div style={{
                marginTop: 56, display: 'flex', gap: 40,
                animation: 'heroFadeUp 0.6s ease 0.4s forwards', opacity: 0,
              }}>
                {['Diagnose', 'Activate', 'Accelerate'].map((label, i) => (
                  <div key={label}>
                    <div style={{ fontSize: '0.68rem', fontWeight: 800, color: '#046C5C', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: 4 }}>
                      {String(i + 1).padStart(2, '0')}
                    </div>
                    <div style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.45)', fontWeight: 500 }}>{label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="hero-visual" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <TOSVisual />
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div style={{
          position: 'absolute', bottom: 32, left: '50%', transform: 'translateX(-50%)',
          display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8,
          animation: 'pulse 2s infinite',
        }}>
          <div style={{ width: 1, height: 48, background: 'linear-gradient(to bottom, transparent, rgba(255,255,255,0.3))' }} />
        </div>
      </section>

      {/* ── FOUNDER SECTION — full-width, ivory bg ───────────────────────── */}
      <section style={{ background: '#FAFAFA', padding: '120px 0', position: 'relative', overflow: 'hidden' }}>
        <div style={{
          position: 'absolute', top: 0, left: 0, right: 0, height: 1,
          background: 'linear-gradient(90deg, transparent, #046C5C44, transparent)',
        }} />
        <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 32px' }}>
          <div className="two-col" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 100, alignItems: 'center' }}>
            <FadeIn>
              <div style={{ fontSize: '0.72rem', fontWeight: 700, color: '#046C5C', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: 24 }}>
                The Founder Problem
              </div>
              <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)', lineHeight: 1.15, color: '#1E1F22', marginBottom: 32 }}>
                Your Business Shouldn't Run Because You're Holding It Together
              </h2>
              <Link href="/diagnostic" style={{
                display: 'inline-flex', alignItems: 'center', gap: 8,
                padding: '13px 26px', borderRadius: 10,
                background: '#046C5C', color: 'white',
                fontWeight: 700, fontSize: '0.875rem', textDecoration: 'none',
              }}>
                Start with the Diagnostic →
              </Link>
            </FadeIn>
            <FadeIn delay={0.15}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
                {[
                  { text: 'Most founders don\'t have a growth problem.', strong: true },
                  { text: 'They have a capability problem.', strong: true },
                  { text: 'Growth creates complexity.', strong: false },
                  { text: 'Complexity exposes gaps in systems, leadership, governance, and execution.', strong: false },
                  { text: 'Over time, the founder becomes the operating system.', strong: false },
                ].map((line, i) => (
                  <div key={i} style={{
                    padding: '20px 0',
                    borderBottom: i < 4 ? '1px solid #E5E7EB' : 'none',
                    display: 'flex', alignItems: 'flex-start', gap: 16,
                  }}>
                    <div style={{ width: 6, height: 6, borderRadius: '50%', background: line.strong ? '#046C5C' : '#E5E7EB', flexShrink: 0, marginTop: 8 }} />
                    <p style={{
                      margin: 0, lineHeight: 1.65,
                      fontSize: line.strong ? '1.1rem' : '1rem',
                      fontWeight: line.strong ? 700 : 400,
                      color: line.strong ? '#1E1F22' : '#6B7280',
                      fontFamily: line.strong ? 'var(--font-display)' : 'var(--font-body)',
                    }}>{line.text}</p>
                  </div>
                ))}
                <div style={{ paddingTop: 28 }}>
                  <p style={{ margin: 0, fontSize: '1.05rem', fontWeight: 700, color: '#046C5C', fontFamily: 'var(--font-display)', lineHeight: 1.6 }}>
                    Stratiix helps organizations build the capability required to scale beyond the founder.
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── PROBLEM SECTION — full-width dark, no container cap ──────────── */}
      <section style={{ background: '#1E1F22', padding: '120px 0', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '30%', right: '-5%', width: 600, height: 600, borderRadius: '50%', background: '#2563EB', opacity: 0.04, filter: 'blur(120px)' }} />
        <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 32px' }}>
          <FadeIn>
            <div style={{ marginBottom: 72 }}>
              <div style={{ fontSize: '0.72rem', fontWeight: 700, color: '#046C5C', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: 16 }}>
                When Growth Outpaces Systems
              </div>
              <h2 style={{ color: 'white', maxWidth: 560, fontSize: 'clamp(1.8rem, 3vw, 2.5rem)' }}>
                Four patterns that limit every founder-led organization
              </h2>
            </div>
          </FadeIn>
          <div className="four-col" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 20 }}>
            {[
              { n: '01', title: 'Founder Dependency', body: 'Growth increasingly depends on founder involvement, creating bottlenecks in decision-making and execution.', color: '#2563EB' },
              { n: '02', title: 'Capability Gaps Go Undiagnosed', body: 'Leaders invest in solutions before understanding what is actually limiting performance.', color: '#7C3AED' },
              { n: '03', title: 'Growth Outpaces Infrastructure', body: 'Organizations scale faster than the systems supporting them.', color: '#046C5C' },
              { n: '04', title: 'Performance Doesn\'t Hold', body: 'Without governance, accountability, and operating discipline, progress becomes difficult to sustain.', color: '#C9A86A' },
            ].map((r, i) => (
              <FadeIn key={r.n} delay={i * 0.1}>
                <div className="problem-card" style={{ '--card-accent': r.color } as React.CSSProperties}>
                  <div style={{ fontSize: '0.68rem', fontWeight: 800, color: r.color, letterSpacing: '0.15em', marginBottom: 20 }}>{r.n}</div>
                  <h4 style={{ color: 'white', marginBottom: 14, fontSize: '1rem', lineHeight: 1.4, fontFamily: 'var(--font-display)' }}>{r.title}</h4>
                  <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: '0.875rem', lineHeight: 1.75, margin: 0 }}>{r.body}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>


      {/* ── TOS SECTION — full-width, diagram below intro ────────────────── */}
      <section style={{ background: '#F3F4F6', padding: '120px 0' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 32px' }}>
          {/* Top: intro text + CTA */}
          <FadeIn>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'end', marginBottom: 80 }} className="two-col">
              <div>
                <div style={{ fontSize: '0.72rem', fontWeight: 700, color: '#046C5C', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: 20 }}>The Operating System</div>
                <h2 style={{ fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', color: '#1E1F22', marginBottom: 24 }}>
                  Transformation Operating System™
                </h2>
                <div style={{ width: 48, height: 3, background: '#046C5C', borderRadius: 2, marginBottom: 28 }} />
                <p style={{ color: '#4B4C51', fontSize: '1.05rem', lineHeight: 1.85, margin: 0 }}>
                  Five phases. One integrated system. Designed to move founder-led organizations from diagnosis to sustained performance.
                </p>
              </div>
              <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'flex-end' }}>
                <Link href="/the-tos" style={{
                  display: 'inline-flex', alignItems: 'center', gap: 8,
                  padding: '13px 26px', borderRadius: 10,
                  background: '#046C5C', color: 'white',
                  fontWeight: 700, fontSize: '0.875rem', textDecoration: 'none',
                }}>
                  Explore the TOS →
                </Link>
              </div>
            </div>
          </FadeIn>
          {/* Full-width TOS diagram */}
          <TOSDiagram />
        </div>
      </section>

      {/* ── CAPABILITY ENGINES — white, full-width ───────────────────────── */}
      <section style={{ background: 'white', padding: '120px 0' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 32px' }}>
          <FadeIn>
            <div style={{ textAlign: 'center', marginBottom: 72 }}>
              <div style={{ fontSize: '0.72rem', fontWeight: 700, color: '#046C5C', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: 16 }}>The Engines</div>
              <h2 style={{ fontSize: 'clamp(1.8rem, 3vw, 2.75rem)', color: '#1E1F22' }}>Capability Engines™</h2>
              <div style={{ width: 48, height: 3, background: '#046C5C', borderRadius: 2, margin: '20px auto 0' }} />
              <p style={{ color: '#6B7280', maxWidth: 520, margin: '24px auto 0', fontSize: '1.05rem', lineHeight: 1.75 }}>
                Six specialized engines that install the capabilities founder-led organizations need to perform beyond the founder.
              </p>
            </div>
          </FadeIn>
          <div className="three-col" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
            {[
              { name: 'Intelligence Engine™', desc: 'Data, insight, and decision infrastructure that enables leaders to act on evidence rather than assumption.', n: '01' },
              { name: 'Operational Excellence Engine™', desc: 'Process discipline, efficiency systems, and quality frameworks that eliminate variance and build execution reliability.', n: '02' },
              { name: 'Governance Engine™', desc: 'Accountability structures, decision rights, and oversight mechanisms that hold performance without micromanagement.', n: '03' },
              { name: 'Growth Engine™', desc: 'Market development, revenue architecture, and customer acquisition systems that drive sustainable top-line growth.', n: '04' },
              { name: 'Workforce & Adoption Engine™', desc: 'People capability, change adoption, and organizational alignment systems that ensure transformation sticks.', n: '05' },
              { name: 'Performance Engine™', desc: 'Measurement frameworks, KPI architecture, and performance rhythms that connect daily activity to strategic outcomes.', n: '06' },
            ].map((e, i) => (
              <FadeIn key={e.name} delay={i * 0.07}>
                <div className="engine-card">
                  <div style={{ fontSize: '0.68rem', fontWeight: 800, color: '#046C5C', letterSpacing: '0.15em', marginBottom: 20 }}>{e.n}</div>
                  <h4 style={{ marginBottom: 12, fontSize: '1rem', lineHeight: 1.4, color: '#1E1F22', fontFamily: 'var(--font-display)' }}>{e.name}</h4>
                  <p style={{ fontSize: '0.875rem', color: '#6B7280', lineHeight: 1.75, margin: 0 }}>{e.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── SOLUTIONS — full-width emerald-light ─────────────────────────── */}
      <section style={{ background: '#E6F4F1', padding: '120px 0', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', bottom: '-10%', right: '-5%', width: 500, height: 500, borderRadius: '50%', background: '#046C5C', opacity: 0.06, filter: 'blur(80px)' }} />
        <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 32px' }}>
          <div className="two-col" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 100, alignItems: 'center' }}>
            <FadeIn>
              <div style={{ fontSize: '0.72rem', fontWeight: 700, color: '#046C5C', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: 20 }}>Who We Serve</div>
              <h2 style={{ fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', color: '#1E1F22', marginBottom: 24 }}>
                Built for Founder-Led Organizations Ready to Scale
              </h2>
              <div style={{ width: 48, height: 3, background: '#046C5C', borderRadius: 2, marginBottom: 28 }} />
              <p style={{ color: '#4B4C51', fontSize: '1.05rem', lineHeight: 1.85, marginBottom: 36 }}>
                The TOS is sector-agnostic. Implementation is not. Stratiix brings deep operational knowledge to each engagement.
              </p>
              <Link href="/solutions" style={{
                display: 'inline-flex', alignItems: 'center', gap: 8,
                padding: '13px 26px', borderRadius: 10,
                background: '#046C5C', color: 'white',
                fontWeight: 700, fontSize: '0.875rem', textDecoration: 'none',
              }}>
                View All Solutions →
              </Link>
            </FadeIn>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {[
                { name: 'HVAC', desc: 'Operational systems, workforce capability, and growth architecture for HVAC businesses scaling beyond the founder.' },
                { name: 'Trucking & Logistics', desc: 'Fleet operations, compliance systems, and performance infrastructure for logistics companies building for scale.' },
                { name: 'Professional Services', desc: 'Delivery systems, client management, and practice development for professional service firms.' },
                { name: 'Nonprofits & Institutions', desc: 'Governance, program effectiveness, and organizational capacity for mission-driven organizations.' },
              ].map((s, i) => (
                <FadeIn key={s.name} delay={i * 0.08}>
                  <div style={{
                    padding: '22px 28px', background: 'white', borderRadius: 12,
                    border: '1px solid #B2DDD7', display: 'flex', gap: 18, alignItems: 'flex-start',
                    transition: 'all 0.25s ease',
                  }}>
                    <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#046C5C', flexShrink: 0, marginTop: 7 }} />
                    <div>
                      <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, color: '#1E1F22', marginBottom: 5, fontSize: '0.95rem' }}>{s.name}</div>
                      <p style={{ fontSize: '0.875rem', color: '#6B7280', margin: 0, lineHeight: 1.65 }}>{s.desc}</p>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── RESULTS — full-width dark, dramatic ──────────────────────────── */}
      <section style={{ background: '#111214', padding: '120px 0', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '20%', left: '50%', transform: 'translateX(-50%)', width: 800, height: 400, borderRadius: '50%', background: 'radial-gradient(ellipse, rgba(4,108,92,0.08) 0%, transparent 70%)', pointerEvents: 'none' }} />
        <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 32px' }}>
          <FadeIn>
            <div style={{ textAlign: 'center', marginBottom: 80 }}>
              <div style={{ fontSize: '0.72rem', fontWeight: 700, color: '#B2DDD7', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: 16 }}>What We Deliver</div>
              <h2 style={{ color: 'white', fontSize: 'clamp(1.8rem, 3vw, 2.75rem)' }}>Results That Are Measurable</h2>
              <div style={{ width: 48, height: 3, background: '#046C5C', borderRadius: 2, margin: '20px auto 0' }} />
              <p style={{ color: 'rgba(255,255,255,0.45)', maxWidth: 480, margin: '24px auto 0', fontSize: '1.05rem', lineHeight: 1.75 }}>
                Stratiix does not measure success by deliverables produced. We measure it by what changes inside the organization.
              </p>
            </div>
          </FadeIn>
          <div className="three-col" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24, marginBottom: 64 }}>
            {[
              { label: 'Installed', desc: 'Capability systems, governance structures, and operational frameworks that are live and functioning inside the organization.', color: '#2563EB' },
              { label: 'Adopted', desc: 'Workforce aligned, trained, and operating the new systems — not reverting to old patterns within 90 days.', color: '#046C5C' },
              { label: 'Improved', desc: 'Measurable movement in the performance indicators that matter: efficiency, revenue, capacity, and organizational health.', color: '#C9A86A' },
            ].map((o, i) => (
              <FadeIn key={o.label} delay={i * 0.1}>
                <div style={{
                  padding: '48px 36px', borderRadius: 16, textAlign: 'center',
                  background: 'rgba(255,255,255,0.03)',
                  border: `1px solid ${o.color}22`,
                  transition: 'all 0.3s ease',
                }}>
                  <div style={{
                    width: 64, height: 64, borderRadius: '50%',
                    background: `${o.color}15`, border: `2px solid ${o.color}`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    margin: '0 auto 28px',
                    fontSize: '0.68rem', fontWeight: 800, color: o.color, letterSpacing: '0.1em',
                  }}>
                    {String(i + 1).padStart(2, '0')}
                  </div>
                  <h3 style={{ color: 'white', fontSize: '1.75rem', marginBottom: 16, fontFamily: 'var(--font-display)' }}>{o.label}</h3>
                  <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: '0.9rem', lineHeight: 1.8, margin: 0 }}>{o.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
          <div style={{ textAlign: 'center' }}>
            <Link href="/results" style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              padding: '13px 26px', borderRadius: 10,
              background: 'transparent', color: 'rgba(255,255,255,0.7)',
              border: '1px solid rgba(255,255,255,0.15)',
              fontWeight: 600, fontSize: '0.875rem', textDecoration: 'none',
              transition: 'all 0.2s',
            }}>
              View Results →
            </Link>
          </div>
        </div>
      </section>

      {/* ── FINAL CTA — emerald gradient ─────────────────────────────────── */}
      <section style={{
        background: 'linear-gradient(135deg, #035549 0%, #046C5C 50%, #057a68 100%)',
        padding: '100px 0', position: 'relative', overflow: 'hidden',
      }}>
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', width: 600, height: 600, borderRadius: '50%', background: 'rgba(255,255,255,0.04)', filter: 'blur(60px)', pointerEvents: 'none' }} />
        <div style={{ maxWidth: 760, margin: '0 auto', padding: '0 32px', textAlign: 'center', position: 'relative', zIndex: 1 }}>
          <FadeIn>
            <div style={{ fontSize: '0.72rem', fontWeight: 700, color: 'rgba(255,255,255,0.6)', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: 20 }}>Get Started</div>
            <h2 style={{ color: 'white', fontSize: 'clamp(1.8rem, 3.5vw, 2.75rem)', marginBottom: 20, lineHeight: 1.2 }}>
              The Diagnostic is where every transformation begins.
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.7)', maxWidth: 440, margin: '0 auto 44px', fontSize: '1.05rem', lineHeight: 1.75 }}>
              A structured assessment of your organization's current state, capability gaps, and transformation readiness.
            </p>
            <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="/diagnostic" style={{
                display: 'inline-flex', alignItems: 'center', gap: 8,
                padding: '15px 32px', borderRadius: 10,
                background: 'white', color: '#046C5C',
                fontWeight: 800, fontSize: '0.95rem', textDecoration: 'none',
                boxShadow: '0 8px 32px rgba(0,0,0,0.2)',
              }}>
                Begin with the Diagnostic →
              </Link>
              <Link href="/the-tos" style={{
                display: 'inline-flex', alignItems: 'center', gap: 8,
                padding: '15px 32px', borderRadius: 10,
                background: 'rgba(255,255,255,0.1)', color: 'white',
                border: '1px solid rgba(255,255,255,0.25)',
                fontWeight: 600, fontSize: '0.95rem', textDecoration: 'none',
              }}>
                Explore the TOS
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  )
}