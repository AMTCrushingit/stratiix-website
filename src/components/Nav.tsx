'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'

const links = [
  { href: '/the-tos', label: 'The TOS' },
  { href: '/diagnostic', label: 'Diagnostic' },
  { href: '/solutions', label: 'Solutions' },
  { href: '/results', label: 'Results' },
  { href: '/insights', label: 'Insights' },
  { href: '/about', label: 'About' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
        background: scrolled ? 'rgba(255,255,255,0.97)' : 'transparent',
        borderBottom: scrolled ? '1px solid #E5E7EB' : '1px solid transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        transition: 'all 0.3s ease',
      }}>
        <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 68 }}>
          <Link href="/" style={{ textDecoration: 'none' }}>
            <span style={{
              fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1.25rem',
              color: scrolled ? 'var(--charcoal)' : 'var(--white)',
              letterSpacing: '-0.02em', transition: 'color 0.3s',
            }}>
              Stratiix
            </span>
          </Link>

          <div style={{ display: 'flex', alignItems: 'center', gap: 4 }} className="nav-desktop">
            {links.map(l => (
              <Link key={l.href} href={l.href} className="nav-link" style={{
                padding: '8px 14px', borderRadius: 6,
                fontSize: '0.875rem', fontWeight: 500,
                color: scrolled ? 'var(--muted)' : 'rgba(255,255,255,0.8)',
                textDecoration: 'none',
              }}>
                {l.label}
              </Link>
            ))}
            <Link href="/contact" className="btn btn-primary" style={{ marginLeft: 8, padding: '10px 22px', fontSize: '0.875rem' }}>
              Begin Diagnostic
            </Link>
          </div>

          <button onClick={() => setOpen(!open)} style={{ display: 'none', background: 'none', border: 'none', cursor: 'pointer', padding: 8 }} className="nav-mobile-btn" aria-label="Toggle menu">
            <div style={{ width: 22, height: 2, background: scrolled ? 'var(--charcoal)' : 'white', marginBottom: 5, transition: 'all 0.2s', transform: open ? 'rotate(45deg) translate(5px, 5px)' : 'none' }} />
            <div style={{ width: 22, height: 2, background: scrolled ? 'var(--charcoal)' : 'white', marginBottom: 5, opacity: open ? 0 : 1, transition: 'all 0.2s' }} />
            <div style={{ width: 22, height: 2, background: scrolled ? 'var(--charcoal)' : 'white', transition: 'all 0.2s', transform: open ? 'rotate(-45deg) translate(5px, -5px)' : 'none' }} />
          </button>
        </div>
      </nav>

      {open && (
        <div style={{ position: 'fixed', top: 68, left: 0, right: 0, zIndex: 99, background: 'white', borderBottom: '1px solid var(--slate-mid)', padding: '16px 24px 24px', boxShadow: '0 8px 32px rgba(0,0,0,0.1)' }}>
          {links.map(l => (
            <Link key={l.href} href={l.href} onClick={() => setOpen(false)} style={{ display: 'block', padding: '12px 0', borderBottom: '1px solid var(--slate)', color: 'var(--charcoal)', fontWeight: 500, textDecoration: 'none' }}>
              {l.label}
            </Link>
          ))}
          <Link href="/contact" className="btn btn-primary" onClick={() => setOpen(false)} style={{ marginTop: 16, width: '100%', justifyContent: 'center' }}>
            Begin Diagnostic
          </Link>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .nav-desktop { display: none !important; }
          .nav-mobile-btn { display: block !important; }
        }
        .nav-link:hover {
          color: var(--charcoal) !important;
          background: var(--slate) !important;
        }
      `}</style>
    </>
  )
}