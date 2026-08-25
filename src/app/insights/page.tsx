import Link from 'next/link'
import type { Metadata } from 'next'
import { posts, categories } from '@/lib/posts'

export const metadata: Metadata = {
  title: 'Insights — Transformation Thought Leadership',
  description: 'Stratiix Insights: thought leadership on transformation, leadership, governance, operational excellence, and Caribbean development.',
}

export default function InsightsPage() {
  const featured = posts[0]
  const rest = posts.slice(1)

  return (
    <>
      {/* Hero */}
      <section style={{
        background: 'linear-gradient(135deg, #050A14 0%, #062E35 100%)',
        paddingTop: 140, paddingBottom: 96,
        position: 'relative', overflow: 'hidden',
      }}>
        <div style={{ position: 'absolute', top: '20%', left: '5%', width: 400, height: 400, borderRadius: '50%', background: 'var(--path-design)', opacity: 0.08, filter: 'blur(80px)' }} />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <span className="eyebrow">Thought Leadership</span>
          <h1 style={{ color: 'white', maxWidth: 640, marginBottom: 24 }}>Insights</h1>
          <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: '1.15rem', maxWidth: 560, lineHeight: 1.8 }}>
            Perspectives on transformation, leadership, governance, and organizational capability from the Stratiix team.
          </p>
        </div>
      </section>

      {/* Featured Post */}
      <section className="section bg-white">
        <div className="container">
          <div style={{ marginBottom: 16 }}>
            <span className="eyebrow">Featured</span>
          </div>
          <Link href={`/insights/${featured.slug}`} style={{ textDecoration: 'none', display: 'block' }}>
            <div className="hover-teal-border" style={{
              display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64,
              padding: '48px', background: 'var(--slate)', borderRadius: 16,
              border: '1px solid var(--slate-mid)', alignItems: 'center', cursor: 'pointer',
            }}>
              <div>
                <span className="badge badge-teal" style={{ marginBottom: 20 }}>{featured.category}</span>
                <h2 style={{ marginBottom: 16, fontSize: '1.75rem' }}>{featured.title}</h2>
                <p style={{ color: 'var(--muted)', lineHeight: 1.75, marginBottom: 24 }}>{featured.excerpt}</p>
                <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
                  <span style={{ fontSize: '0.8rem', color: 'var(--muted)' }}>{featured.date}</span>
                  <span style={{ width: 4, height: 4, borderRadius: '50%', background: 'var(--slate-mid)', display: 'inline-block' }} />
                  <span style={{ fontSize: '0.8rem', color: 'var(--muted)' }}>{featured.readTime}</span>
                </div>
              </div>
              <div style={{
                height: 280, background: 'linear-gradient(135deg, var(--charcoal) 0%, var(--charcoal-mid) 100%)',
                borderRadius: 12, display: 'flex', alignItems: 'center', justifyContent: 'center',
                position: 'relative', overflow: 'hidden',
              }}>
                <div style={{ position: 'absolute', top: '20%', right: '10%', width: 120, height: 120, borderRadius: '50%', background: 'var(--teal)', opacity: 0.15, filter: 'blur(30px)' }} />
                <div style={{ fontFamily: 'var(--font-display)', fontSize: '0.75rem', fontWeight: 700, color: 'var(--teal)', letterSpacing: '0.15em', textTransform: 'uppercase', position: 'relative', zIndex: 1 }}>
                  Stratiix Insights
                </div>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* Categories */}
      <section style={{ padding: '0 0 48px' }}>
        <div className="container">
          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
            <span style={{ padding: '6px 16px', borderRadius: 100, background: 'var(--teal)', color: 'white', fontSize: '0.8rem', fontWeight: 600, cursor: 'pointer' }}>All</span>
            {categories.map(c => (
              <span key={c} style={{ padding: '6px 16px', borderRadius: 100, background: 'var(--slate)', color: 'var(--muted)', fontSize: '0.8rem', fontWeight: 500, cursor: 'pointer', border: '1px solid var(--slate-mid)' }}>
                {c}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Post Grid */}
      <section style={{ paddingBottom: 96 }}>
        <div className="container">
          <div className="grid-3">
            {rest.map(post => (
              <Link key={post.slug} href={`/insights/${post.slug}`} style={{ textDecoration: 'none' }}>
                <article className="hover-card" style={{
                  background: 'white', borderRadius: 12, border: '1px solid var(--slate-mid)',
                  overflow: 'hidden', height: '100%',
                  display: 'flex', flexDirection: 'column',
                }}>
                  <div style={{ height: 160, background: 'linear-gradient(135deg, var(--charcoal) 0%, var(--charcoal-mid) 100%)', position: 'relative', overflow: 'hidden' }}>
                    <div style={{ position: 'absolute', bottom: '15%', right: '10%', width: 80, height: 80, borderRadius: '50%', background: 'var(--teal)', opacity: 0.15, filter: 'blur(20px)' }} />
                  </div>
                  <div style={{ padding: '24px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                    <span className="badge badge-teal" style={{ marginBottom: 16, alignSelf: 'flex-start' }}>{post.category}</span>
                    <h3 style={{ fontSize: '1.05rem', marginBottom: 12, lineHeight: 1.4, flex: 1 }}>{post.title}</h3>
                    <p style={{ fontSize: '0.875rem', color: 'var(--muted)', lineHeight: 1.65, marginBottom: 20 }}>{post.excerpt}</p>
                    <div style={{ display: 'flex', gap: 12, alignItems: 'center', marginTop: 'auto' }}>
                      <span style={{ fontSize: '0.75rem', color: 'var(--muted)' }}>{post.date}</span>
                      <span style={{ width: 3, height: 3, borderRadius: '50%', background: 'var(--slate-mid)', display: 'inline-block' }} />
                      <span style={{ fontSize: '0.75rem', color: 'var(--muted)' }}>{post.readTime}</span>
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}