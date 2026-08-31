'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

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
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const isActive = (href: string) => pathname === href || pathname.startsWith(href + '/')

  return (
    <>
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
        background: scrolled ? 'rgba(255,255,255,0.97)' : 'transparent',
        borderBottom: scrolled ? '1px solid #E5E7EB' : '1px solid transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        transition: 'all 0.3s ease',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 68, padding: '0 6vw', width: '100%' }}>
          <Link href="/" style={{ textDecoration: 'none' }}>
            <span style={{
              fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1.25rem',
              color: scrolled ? '#1E1F22' : 'white',
              letterSpacing: '-0.02em', transition: 'color 0.3s',
            }}>
              Stratiix
            </span>
          </Link>

          <div style={{ display: 'flex', alignItems: 'center', gap: 2 }} className="nav-desktop">
            {links.map(l => {
              const active = isActive(l.href)
              return (
                <Link key={l.href} href={l.href} style={{
                  position: 'relative',
                  padding: '8px 14px', borderRadius: 6,
                  fontSize: '0.875rem', fontWeight: active ? 700 : 500,
                  color: active
                    ? (scrolled ? '#046C5C' : 'white')
                    : (scrolled ? '#6B7280' : 'rgba(255,255,255,0.75)'),
                  textDecoration: 'none',
                  transition: 'all 0.2s',
                  background: active && scrolled ? 'rgba(4,108,92,0.08)' : 'transparent',
                }} className="nav-link">
                  {l.label}
                  {/* Active indicator — emerald dot below label */}
                  {active && (
                    <span style={{
                      position: 'absolute',
                      bottom: 2, left: '50%',
                      transform: 'translateX(-50%)',
                      width: 4, height: 4,
                      borderRadius: '50%',
                      background: '#046C5C',
                      display: 'block',
                    }} />
                  )}
                </Link>
              )
            })}
            <Link href="/contact" style={{
              marginLeft: 10, padding: '10px 22px',
              fontSize: '0.875rem', fontWeight: 700,
              background: '#046C5C', color: 'white',
              borderRadius: 8, textDecoration: 'none',
              fontFamily: 'var(--font-display)',
              transition: 'all 0.2s',
              boxShadow: '0 4px 16px rgba(4,108,92,0.25)',
            }}>
              Begin Diagnostic
            </Link>
          </div>

          <button onClick={() => setOpen(!open)} style={{ display: 'none', background: 'none', border: 'none', cursor: 'pointer', padding: 8 }} className="nav-mobile-btn" aria-label="Toggle menu">
            <div style={{ width: 22, height: 2, background: scrolled ? '#1E1F22' : 'white', marginBottom: 5, transition: 'all 0.2s', transform: open ? 'rotate(45deg) translate(5px, 5px)' : 'none' }} />
            <div style={{ width: 22, height: 2, background: scrolled ? '#1E1F22' : 'white', marginBottom: 5, opacity: open ? 0 : 1, transition: 'all 0.2s' }} />
            <div style={{ width: 22, height: 2, background: scrolled ? '#1E1F22' : 'white', transition: 'all 0.2s', transform: open ? 'rotate(-45deg) translate(5px, -5px)' : 'none' }} />
          </button>
        </div>
      </nav>

      {open && (
        <div style={{ position: 'fixed', top: 68, left: 0, right: 0, zIndex: 99, background: 'white', borderBottom: '1px solid #E5E7EB', padding: '16px 24px 24px', boxShadow: '0 8px 32px rgba(0,0,0,0.1)' }}>
          {links.map(l => {
            const active = isActive(l.href)
            return (
              <Link key={l.href} href={l.href} onClick={() => setOpen(false)} style={{
                display: 'flex', alignItems: 'center', gap: 10,
                padding: '12px 0', borderBottom: '1px solid #F3F4F6',
                color: active ? '#046C5C' : '#1E1F22',
                fontWeight: active ? 700 : 500,
                textDecoration: 'none',
                fontFamily: 'var(--font-display)',
              }}>
                {active && <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#046C5C', flexShrink: 0 }} />}
                {l.label}
              </Link>
            )
          })}
          <Link href="/contact" onClick={() => setOpen(false)} style={{
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            marginTop: 16, padding: '13px',
            background: '#046C5C', color: 'white',
            borderRadius: 10, textDecoration: 'none',
            fontWeight: 700, fontFamily: 'var(--font-display)',
          }}>
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
          color: #1E1F22 !important;
          background: #F3F4F6 !important;
        }
      `}</style>
    </>
  )
}