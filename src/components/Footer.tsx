import Link from 'next/link'

const cols = [
  {
    title: 'Platform',
    links: [
      { href: '/the-tos', label: 'The TOS' },
      { href: '/diagnostic', label: 'Diagnostic' },
      { href: '/solutions', label: 'Solutions' },
      { href: '/results', label: 'Results' },
    ],
  },
  {
    title: 'Company',
    links: [
      { href: '/about', label: 'About' },
      { href: '/insights', label: 'Insights' },
      { href: '/contact', label: 'Contact' },
    ],
  },
  {
    title: 'Solutions',
    links: [
      { href: '/solutions#home-services', label: 'Home Services' },
      { href: '/solutions#trucking', label: 'Trucking & Logistics' },
      { href: '/solutions#professional', label: 'Professional Services' },
      { href: '/solutions#nonprofits', label: 'Nonprofits & Institutions' },
    ],
  },
]

export default function Footer() {
  return (
    <footer style={{ background: 'var(--footer-black)', color: 'rgba(255,255,255,0.5)', paddingTop: 64, paddingBottom: 40 }}>
      <div style={{ padding: '0 6vw' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', gap: 48, marginBottom: 64 }}>
          {/* Brand */}
          <div>
            <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1.35rem', color: 'white', marginBottom: 16, letterSpacing: '-0.02em' }}>
              Stratiix
            </div>
            <p style={{ fontSize: '0.875rem', lineHeight: 1.75, maxWidth: 280, marginBottom: 24 }}>
              Stratiix helps organizations turn strategy into capability and capability into results.
            </p>
            <div style={{ display: 'flex', gap: 8 }}>
              <span style={{ fontFamily: 'var(--font-display)', fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.1em', color: 'var(--teal)', textTransform: 'uppercase' }}>
                Diagnose. Activate. Accelerate.
              </span>
            </div>
          </div>

          {/* Nav Columns */}
          {cols.map(col => (
            <div key={col.title}>
              <div style={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.3)', marginBottom: 20 }}>
                {col.title}
              </div>
              <ul style={{ listStyle: 'none' }}>
                {col.links.map(l => (
                  <li key={l.href} style={{ marginBottom: 12 }}>
                    <Link href={l.href} style={{ color: 'rgba(255,255,255,0.55)', fontSize: '0.875rem', textDecoration: 'none', transition: 'color 0.2s' }}
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: 32, display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 16 }}>
          <p style={{ fontSize: '0.8rem' }}>
            © {new Date().getFullYear()} Stratiix Partners. All rights reserved.
          </p>
          <div style={{ display: 'flex', gap: 24 }}>
            {['Privacy Policy', 'Terms of Use'].map(t => (
              <Link key={t} href="/contact" style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.35)', textDecoration: 'none' }}>
                {t}
              </Link>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          footer > div > div:first-child { grid-template-columns: 1fr 1fr !important; }
          footer > div > div:first-child > div:first-child { grid-column: 1 / -1; }
        }
      `}</style>
    </footer>
  )
}