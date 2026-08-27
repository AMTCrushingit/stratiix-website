'use client'
import Link from 'next/link'
import { AnimatedStratiixPath } from '@/components/AnimatedStratiixPath'
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


export default function Home() {
  return (
    <>
      <style>{`
        @keyframes orbFloat {
          0%, 100% { transform: translateY(0) scale(1); }
          50%       { transform: translateY(-20px) scale(1.05); }
        }
        @keyframes dropletFloat {
          0%   { transform: translateY(0) rotate(0deg) scale(1); border-radius: 60% 40% 70% 30% / 50% 60% 40% 50%; }
          25%  { transform: translateY(-18px) rotate(5deg) scale(1.04); border-radius: 40% 60% 30% 70% / 60% 40% 60% 40%; }
          50%  { transform: translateY(-8px) rotate(-3deg) scale(0.97); border-radius: 70% 30% 50% 50% / 40% 70% 30% 60%; }
          75%  { transform: translateY(-22px) rotate(8deg) scale(1.02); border-radius: 30% 70% 60% 40% / 50% 30% 70% 50%; }
          100% { transform: translateY(0) rotate(0deg) scale(1); border-radius: 60% 40% 70% 30% / 50% 60% 40% 50%; }
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
          .hero-text { max-width: 100% !important; }
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
        position: 'relative', overflow: 'hidden', paddingTop: 68,
        display: 'flex', alignItems: 'center',
      }}>
        {/* Full-bleed background image */}
        <div style={{
          position: 'absolute', inset: 0, zIndex: 0,
        }}>
          <img
            src="/hero-founder.png"
            alt=""
            style={{
              width: '100%', height: '100%',
              objectFit: 'cover', objectPosition: 'center center',
              display: 'block',
            }}
          />
          {/* Dark overlay — heavier on left for text legibility, lighter on right to show founder */}
          <div style={{
            position: 'absolute', inset: 0,
            background: 'linear-gradient(105deg, rgba(5,10,20,0.92) 0%, rgba(5,10,20,0.85) 45%, rgba(5,10,20,0.35) 75%, rgba(5,10,20,0.15) 100%)',
          }} />
          {/* Bottom fade */}
          <div style={{
            position: 'absolute', bottom: 0, left: 0, right: 0, height: '30%',
            background: 'linear-gradient(to bottom, transparent, rgba(5,10,20,0.6))',
          }} />
        </div>

        {/* Droplet orbs on top of image */}
        {[
          { c:'#2563EB', w:320, h:420, t:'5%',  l:'2%',  dur:'9s',  del:'0s' },
          { c:'#7C3AED', w:280, h:360, t:'3%',  r:'3%',  dur:'11s', del:'1.5s' },
          { c:'#046C5C', w:360, h:280, b:'8%',  l:'5%',  dur:'13s', del:'0.8s' },
          { c:'#C9A86A', w:240, h:320, b:'5%',  r:'2%',  dur:'10s', del:'2s' },
          { c:'#10B981', w:200, h:260, t:'40%', l:'40%', dur:'14s', del:'1s' },
        ].map((d,i) => (
          <div key={i} style={{
            position:'absolute', zIndex: 1,
            width: d.w, height: d.h,
            borderRadius: '60% 40% 70% 30% / 50% 60% 40% 50%',
            background: d.c,
            opacity: 0.08,
            filter: 'blur(60px)',
            top:(d as any).t, left:(d as any).l, right:(d as any).r, bottom:(d as any).b,
            animation: `dropletFloat ${d.dur} ease-in-out infinite`,
            animationDelay: d.del,
          }} />
        ))}

        {/* Content — left-aligned, max 55% width */}
        <div style={{ width: '100%', padding: '0 6vw', position: 'relative', zIndex: 2 }}>
          <div style={{ maxWidth: '55%' }} className="hero-text">

            {/* Badge */}
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              padding: '6px 16px', borderRadius: 100, marginBottom: 40,
              background: 'rgba(4,108,92,0.15)', border: '1px solid rgba(4,108,92,0.4)',
              animation: 'heroFadeUp 0.6s ease forwards',
            }}>
              <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#046C5C', animation: 'pulse 2s infinite' }} />
              <span style={{ fontSize: '0.72rem', fontWeight: 700, color: '#046C5C', letterSpacing: '0.12em', textTransform: 'uppercase', fontFamily: 'var(--font-display)' }}>
                Built for Founder-Led Organizations
              </span>
            </div>

            <h1 style={{
              color: 'white', lineHeight: 1.05, marginBottom: 36,
              fontSize: 'clamp(2.4rem, 4.5vw, 4.5rem)',
              fontWeight: 900, letterSpacing: '-0.03em',
              animation: 'heroFadeUp 0.6s ease 0.1s forwards', opacity: 0,
            }}>
              Transform Complexity.<br />
              <span style={{ color: '#B2DDD7' }}>Build Capability.</span><br />
              Accelerate Outcomes.
            </h1>

            <p style={{
              color: 'rgba(255,255,255,0.65)', fontSize: '1.05rem', lineHeight: 1.8,
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
                boxShadow: '0 8px 32px rgba(4,108,92,0.45)',
                fontFamily: 'var(--font-display)',
              }}>
                Begin with the Diagnostic™ →
              </Link>
              <Link href="/the-tos" style={{
                display: 'inline-flex', alignItems: 'center', gap: 8,
                padding: '14px 28px', borderRadius: 10,
                background: 'rgba(255,255,255,0.08)', color: 'rgba(255,255,255,0.85)',
                border: '1px solid rgba(255,255,255,0.2)',
                fontWeight: 600, fontSize: '0.9rem', textDecoration: 'none',
                fontFamily: 'var(--font-display)',
              }}>
                Explore Solutions
              </Link>
            </div>

          </div>
        </div>

        {/* Caption pill — bottom right over the founder */}
        <div style={{
          position: 'absolute', bottom: 32, right: '6vw', zIndex: 3,
          animation: 'heroFadeUp 0.8s ease 0.5s forwards', opacity: 0,
        }}>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            padding: '7px 16px', borderRadius: 100,
            background: 'rgba(4,108,92,0.85)', backdropFilter: 'blur(8px)',
          }}>
            <div style={{ width: 5, height: 5, borderRadius: '50%', background: 'white', opacity: 0.8 }} />
            <span style={{ fontSize: '0.72rem', fontWeight: 600, color: 'white', letterSpacing: '0.06em', fontFamily: 'var(--font-display)' }}>
              The founder is the operating system
            </span>
          </div>
        </div>

      </section>


      {/* ── FOUNDER SECTION — full typographic narrative, centred ────────── */}
      <section style={{ background: '#FAFAFA', padding: '140px 0 120px', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 1, background: 'linear-gradient(90deg, transparent, #046C5C44, transparent)' }} />

        <div style={{ padding: '0 6vw', textAlign: 'center', position: 'relative', zIndex: 1 }}>

          {/* Eyebrow */}
          <FadeIn>
            <div style={{ fontSize: '0.72rem', fontWeight: 700, color: '#046C5C', letterSpacing: '0.18em', textTransform: 'uppercase', marginBottom: 48 }}>
              The Founder Problem
            </div>
          </FadeIn>

          {/* Opener — muted */}
          <FadeIn delay={0.08}>
            <p style={{ fontSize: 'clamp(1rem, 1.6vw, 1.2rem)', color: '#9CA3AF', fontWeight: 400, lineHeight: 1.7, marginBottom: 28, fontFamily: 'var(--font-body)' }}>
              Most founder-led organizations don't have a growth problem.
            </p>
          </FadeIn>

          {/* THE REVEAL */}
          <FadeIn delay={0.16}>
            <div style={{ margin: '0 0 48px', position: 'relative' }}>
              {/* Ghost watermark */}
              <div style={{
                position: 'absolute', top: '50%', left: '50%',
                transform: 'translate(-50%, -50%)',
                fontSize: 'clamp(5rem, 12vw, 11rem)', fontWeight: 900,
                color: 'rgba(4,108,92,0.06)', lineHeight: 1, whiteSpace: 'nowrap',
                fontFamily: 'var(--font-display)', userSelect: 'none', pointerEvents: 'none',
                letterSpacing: '-0.04em',
              }}>CAPABILITY</div>
              <h2 style={{
                fontSize: 'clamp(2.2rem, 4.5vw, 4.2rem)',
                fontWeight: 900,
                lineHeight: 1.05,
                letterSpacing: '-0.03em',
                color: '#1E1F22',
                fontFamily: 'var(--font-display)',
                margin: 0,
                position: 'relative',
              }}>
                They have a<br/>
                <span style={{ color: '#046C5C', opacity: 0.82 }}>capability problem.</span>
              </h2>
            </div>
          </FadeIn>

          {/* Narrative — wider, no bullets */}
          <FadeIn delay={0.24}>
            <div style={{ maxWidth: 760, margin: '0 auto 40px' }}>

              {/* Without the required capabilities — prominent label */}
              <p style={{
                fontSize: 'clamp(1rem, 1.6vw, 1.15rem)',
                fontWeight: 800,
                color: '#1E1F22',
                lineHeight: 1.6,
                marginBottom: 32,
                fontFamily: 'var(--font-display)',
                letterSpacing: '-0.01em',
              }}>
                Without the required capabilities:
              </p>

              {/* Flowing paragraphs */}
              <p style={{ fontSize: 'clamp(1rem, 1.5vw, 1.1rem)', color: '#6B7280', lineHeight: 1.85, marginBottom: 20, fontFamily: 'var(--font-body)' }}>
                Growth creates complexity.
              </p>
              <p style={{ fontSize: 'clamp(1rem, 1.5vw, 1.1rem)', color: '#6B7280', lineHeight: 1.85, marginBottom: 32, fontFamily: 'var(--font-body)' }}>
                Complexity exposes gaps in systems, leadership, governance, and execution.
              </p>
              <p style={{ fontSize: 'clamp(1rem, 1.6vw, 1.15rem)', color: '#1E1F22', fontWeight: 600, lineHeight: 1.75, marginBottom: 40, fontFamily: 'var(--font-display)' }}>
                Over time, the founder becomes the operating system of the business.
              </p>

              {/* Highlight — inline, no box */}
              <p style={{
                fontSize: 'clamp(1rem, 1.5vw, 1.1rem)',
                color: '#046C5C',
                fontWeight: 700,
                lineHeight: 1.75,
                fontFamily: 'var(--font-display)',
                fontStyle: 'italic',
                borderLeft: '3px solid #046C5C',
                paddingLeft: 24,
                margin: 0,
              }}>
                The gap between ambition and results is rarely a strategy problem. It's a capability problem.
              </p>

            </div>
          </FadeIn>



          {/* Closing statement */}
          <FadeIn delay={0.46}>
            <p style={{ fontSize: 'clamp(1rem, 1.6vw, 1.15rem)', color: '#046C5C', fontWeight: 700, lineHeight: 1.75, maxWidth: 580, margin: '0 auto 48px', fontFamily: 'var(--font-display)' }}>
              Stratiix helps founder-led organizations identify what is limiting performance and build the capability required to scale beyond the founder.
            </p>
          </FadeIn>

          {/* Vertical connector + CTA */}
          <FadeIn delay={0.5}>
            <div style={{ width: 1, height: 48, background: 'linear-gradient(to bottom, #E5E7EB, #046C5C)', margin: '0 auto 32px' }} />
            <Link href="/diagnostic" style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              padding: '14px 32px', borderRadius: 10,
              background: '#046C5C', color: 'white',
              fontWeight: 700, fontSize: '0.95rem', textDecoration: 'none',
              boxShadow: '0 8px 32px rgba(4,108,92,0.25)',
              fontFamily: 'var(--font-display)',
            }}>
              Start with the Diagnostic →
            </Link>
          </FadeIn>

        </div>
      </section>

      {/* ── PROBLEM SECTION — full-width dark, no container cap ──────────── */}
      <section style={{ background: '#1E1F22', padding: '120px 0', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '30%', right: '-5%', width: 600, height: 600, borderRadius: '50%', background: '#2563EB', opacity: 0.04, filter: 'blur(120px)' }} />
        <div style={{ maxWidth: '100%', padding: '0 6vw' }}>
          <FadeIn>
            <div style={{ marginBottom: 72, position: 'relative' }}>
              <div style={{
                position: 'absolute', top: -40, left: -20,
                fontSize: 'clamp(8rem, 15vw, 14rem)', fontWeight: 800,
                color: 'rgba(255,255,255,0.03)', lineHeight: 1,
                fontFamily: 'var(--font-display)', userSelect: 'none', pointerEvents: 'none',
                letterSpacing: '-0.05em',
              }}>04</div>
              <div style={{ fontSize: '0.72rem', fontWeight: 700, color: '#046C5C', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: 16, position: 'relative' }}>
                When Growth Outpaces Systems
              </div>
              <h2 style={{ color: 'white', maxWidth: 640, fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', position: 'relative', fontWeight: 800 }}>
                Founder-Led Organizations Often Get Stuck<br/>
                <span style={{ color: '#046C5C' }}>for the Same Four Reasons</span>
              </h2>
            </div>
          </FadeIn>
          <div className="four-col" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 20 }}>
            {[
              { n: '01', title: 'Founder Dependency', body: 'Growth increasingly depends on founder involvement, creating bottlenecks in decision-making and execution.', color: '#2563EB' },
              { n: '02', title: 'Capability Gaps Go Undiagnosed', body: 'Leaders invest in solutions before understanding what is actually limiting performance.', color: '#7C3AED' },
              { n: '03', title: 'Growth Outpaces Systems', body: 'Organizations scale faster than the systems supporting them.', color: '#046C5C' },
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


      {/* ── TOS SECTION — centred, visual as hero ────────────────────────────── */}
      <section style={{ background: '#F3F4F6', padding: '120px 0' }}>
        <div style={{ padding: '0 6vw' }}>

          {/* Centred heading block */}
          <FadeIn>
            <div style={{ textAlign: 'center', marginBottom: 64 }}>
              <div style={{ fontSize: '0.72rem', fontWeight: 700, color: '#046C5C', letterSpacing: '0.18em', textTransform: 'uppercase', marginBottom: 20 }}>
                The Operating System
              </div>
              <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)', color: '#1E1F22', fontWeight: 800, lineHeight: 1.1, marginBottom: 20 }}>
                The Transformation Operating System™
              </h2>
              <p style={{ color: '#4B4C51', fontSize: 'clamp(1rem, 1.5vw, 1.1rem)', lineHeight: 1.8, maxWidth: 640, margin: '0 auto 32px' }}>
                A diagnostic-led system designed to help founder-led organizations move from founder dependency to organizational capability.
              </p>
              <Link href="/the-tos" style={{
                display: 'inline-flex', alignItems: 'center', gap: 8,
                padding: '12px 26px', borderRadius: 10,
                background: '#046C5C', color: 'white',
                fontWeight: 700, fontSize: '0.875rem', textDecoration: 'none',
              }}>
                Explore Solutions →
              </Link>
            </div>
          </FadeIn>

          {/* Visual — centred, large, dominant */}
          <FadeIn delay={0.15}>
            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 56 }}>
              <AnimatedStratiixPath />
            </div>
          </FadeIn>

          {/* Under visual — five phases plain text */}
          <FadeIn delay={0.25}>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '0.72rem', fontWeight: 700, color: '#046C5C', letterSpacing: '0.18em', textTransform: 'uppercase', marginBottom: 28 }}>
                The five phases of the Stratiix Path™
              </div>
              <div style={{ display: 'flex', justifyContent: 'center', gap: 0, flexWrap: 'wrap' }}>
                {[
                  { n: '01', label: 'Diagnose' },
                  { n: '02', label: 'Architect' },
                  { n: '03', label: 'Activate' },
                  { n: '04', label: 'Accelerate' },
                  { n: '05', label: 'Sustain' },
                ].map((ph, i) => (
                  <div key={ph.n} style={{ display: 'flex', alignItems: 'center' }}>
                    <div style={{ textAlign: 'center', padding: '0 20px' }}>
                      <div style={{ fontSize: '0.68rem', fontWeight: 800, color: '#046C5C', letterSpacing: '0.15em', marginBottom: 4 }}>{ph.n}</div>
                      <div style={{ fontSize: '0.95rem', fontWeight: 600, color: '#1E1F22', fontFamily: 'var(--font-display)' }}>{ph.label}</div>
                    </div>
                    {i < 4 && <div style={{ width: 32, height: 1, background: '#E5E7EB', flexShrink: 0 }} />}
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>

        </div>
      </section>


      {/* ── CAPABILITY ENGINES — white, full-width ───────────────────────── */}
      <section style={{ background: 'white', padding: '120px 0' }}>
        <div style={{ maxWidth: '100%', padding: '0 6vw' }}>
          <FadeIn>
            <div style={{ textAlign: 'center', marginBottom: 72, position: 'relative' }}>
              <div style={{
                position: 'absolute', top: -32, left: '50%', transform: 'translateX(-50%)',
                fontSize: 'clamp(5rem, 10vw, 9rem)', fontWeight: 800,
                color: 'rgba(4,108,92,0.05)', lineHeight: 1, whiteSpace: 'nowrap',
                fontFamily: 'var(--font-display)', userSelect: 'none', pointerEvents: 'none',
                letterSpacing: '-0.04em',
              }}>ENGINES</div>
              <div style={{ fontSize: '0.72rem', fontWeight: 700, color: '#046C5C', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: 16, position: 'relative' }}>The Engines</div>
              <h2 style={{ fontSize: 'clamp(1.8rem, 3vw, 2.75rem)', color: '#1E1F22', position: 'relative', fontWeight: 800 }}>
                Capability Engines™
              </h2>
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

      {/* ── SOLUTIONS — full-width, icons, new copy ──────────────────────────── */}
      <section style={{ background: '#E6F4F1', padding: '120px 0', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', bottom: '-10%', right: '-5%', width: 500, height: 500, borderRadius: '50%', background: '#046C5C', opacity: 0.06, filter: 'blur(80px)' }} />
        <div style={{ padding: '0 6vw', position: 'relative', zIndex: 1 }}>

          {/* Top: heading + intro */}
          <FadeIn>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'end', marginBottom: 72 }} className="two-col">
              <div>
                <div style={{ fontSize: '0.72rem', fontWeight: 700, color: '#046C5C', letterSpacing: '0.18em', textTransform: 'uppercase', marginBottom: 20 }}>Who We Serve</div>
                <h2 style={{ fontSize: 'clamp(1.8rem, 3vw, 2.75rem)', color: '#1E1F22', fontWeight: 800, lineHeight: 1.1, marginBottom: 20 }}>
                  Built for<br/>
                  <span style={{ color: '#046C5C' }}>Founder-Led</span><br/>
                  Organizations
                </h2>
                <div style={{ width: 48, height: 3, background: '#046C5C', borderRadius: 2, marginBottom: 24 }} />
                <p style={{ color: '#4B4C51', fontSize: '1.05rem', lineHeight: 1.85, marginBottom: 8 }}>
                  Growth may look different across industries, but the challenge is often the same:
                </p>
                <p style={{ color: '#1E1F22', fontSize: '1.05rem', fontWeight: 700, lineHeight: 1.75, marginBottom: 20, fontFamily: 'var(--font-display)' }}>
                  Growth has outpaced the systems supporting the business.
                </p>
                <p style={{ color: '#4B4C51', fontSize: '1rem', lineHeight: 1.8, marginBottom: 32 }}>
                  Stratiix helps founder-led organizations build the capability required to scale beyond the founder.
                </p>
                <Link href="/solutions" style={{
                  display: 'inline-flex', alignItems: 'center', gap: 8,
                  padding: '13px 26px', borderRadius: 10,
                  background: '#046C5C', color: 'white',
                  fontWeight: 700, fontSize: '0.875rem', textDecoration: 'none',
                  fontFamily: 'var(--font-display)',
                }}>
                  Explore Solutions →
                </Link>
              </div>
              <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'flex-end' }}>
                <p style={{ color: '#6B7280', fontSize: '0.875rem', lineHeight: 1.75, maxWidth: 320, textAlign: 'right', fontStyle: 'italic' }}>
                  The TOS is sector-agnostic. Implementation is not. Stratiix brings deep operational knowledge to each engagement.
                </p>
              </div>
            </div>
          </FadeIn>

          {/* Industry cards — 4 col with icons */}
          <div className="four-col" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 20 }}>
            {[
              {
                icon: '🏠',
                name: 'Home Services',
                desc: 'Operational systems, workforce capability, leadership infrastructure, and growth readiness for home service businesses scaling beyond the founder.',
                color: '#2563EB',
              },
              {
                icon: '🚛',
                name: 'Transportation & Logistics',
                desc: 'Operations, compliance, workforce development, and performance systems for transportation and logistics organizations.',
                color: '#7C3AED',
              },
              {
                icon: '💼',
                name: 'Professional Services',
                desc: 'Delivery systems, client management, leadership development, and organizational capability for growing professional practices.',
                color: '#046C5C',
              },
              {
                icon: '🏛️',
                name: 'Nonprofits & Institutions',
                desc: 'Governance, program effectiveness, organizational performance, and capacity building for mission-driven organizations.',
                color: '#C9A86A',
              },
            ].map((s, i) => (
              <FadeIn key={s.name} delay={i * 0.1}>
                <div style={{
                  padding: '32px 28px',
                  background: 'white',
                  borderRadius: 16,
                  border: '1px solid #B2DDD7',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 16,
                  transition: 'all 0.25s ease',
                  position: 'relative',
                  overflow: 'hidden',
                }}>
                  {/* Colour accent top bar */}
                  <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: s.color, borderRadius: '16px 16px 0 0' }} />
                  {/* Icon */}
                  <div style={{
                    width: 52, height: 52, borderRadius: 12,
                    background: `${s.color}12`,
                    border: `1px solid ${s.color}30`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: '1.5rem',
                  }}>
                    {s.icon}
                  </div>
                  <div>
                    <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, color: '#1E1F22', marginBottom: 8, fontSize: '1rem' }}>{s.name}</div>
                    <p style={{ fontSize: '0.875rem', color: '#6B7280', margin: 0, lineHeight: 1.7 }}>{s.desc}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>

        </div>
      </section>


      {/* ── RESULTS — full-width dark, dramatic ──────────────────────────── */}
      <section style={{ background: '#111214', padding: '120px 0', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '20%', left: '50%', transform: 'translateX(-50%)', width: 800, height: 400, borderRadius: '50%', background: 'radial-gradient(ellipse, rgba(4,108,92,0.08) 0%, transparent 70%)', pointerEvents: 'none' }} />
        <div style={{ maxWidth: '100%', padding: '0 6vw' }}>
          <FadeIn>
            <div style={{ textAlign: 'center', marginBottom: 80, position: 'relative' }}>
              <div style={{
                position: 'absolute', top: -40, left: '50%', transform: 'translateX(-50%)',
                fontSize: 'clamp(6rem, 12vw, 11rem)', fontWeight: 800,
                color: 'rgba(255,255,255,0.03)', lineHeight: 1, whiteSpace: 'nowrap',
                fontFamily: 'var(--font-display)', userSelect: 'none', pointerEvents: 'none',
                letterSpacing: '-0.04em',
              }}>RESULTS</div>
              <div style={{ fontSize: '0.72rem', fontWeight: 700, color: '#B2DDD7', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: 16, position: 'relative' }}>What We Deliver</div>
              <h2 style={{ color: 'white', fontSize: 'clamp(1.8rem, 3vw, 2.75rem)', position: 'relative', fontWeight: 800 }}>Results That Hold <span style={{ color: '#046C5C' }}>Beyond the Founder</span></h2>
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
              Ready to Scale Beyond the Founder?
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.7)', maxWidth: 480, margin: '0 auto 44px', fontSize: '1.05rem', lineHeight: 1.75 }}>
              The first step isn't another strategy session. It's diagnosis.
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