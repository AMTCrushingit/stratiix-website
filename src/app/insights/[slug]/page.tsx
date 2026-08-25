import Link from 'next/link'
import type { Metadata } from 'next'
import { posts, getPost } from '@/lib/posts'
import { notFound } from 'next/navigation'

export async function generateStaticParams() {
  return posts.map(p => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = getPost(params.slug)
  if (!post) return {}
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: { title: post.title, description: post.excerpt, type: 'article' },
  }
}

function renderBody(body: string) {
  return body
    .trim()
    .split('\n\n')
    .map((block, i) => {
      if (block.startsWith('## ')) {
        return <h2 key={i} style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', fontWeight: 700, color: 'var(--charcoal)', margin: '2.5rem 0 1rem' }}>{block.replace('## ', '')}</h2>
      }
      if (block.startsWith('# ')) {
        return <h1 key={i} style={{ fontFamily: 'var(--font-display)', fontSize: '2rem', fontWeight: 700, color: 'var(--charcoal)', margin: '2.5rem 0 1rem' }}>{block.replace('# ', '')}</h1>
      }
      return <p key={i} style={{ color: 'var(--body-text)', lineHeight: 1.85, marginBottom: '1.5rem', fontSize: '1.05rem' }}>{block}</p>
    })
}

export default function PostPage({ params }: { params: { slug: string } }) {
  const post = getPost(params.slug)
  if (!post) notFound()

  const related = posts.filter(p => p.slug !== post.slug && p.category === post.category).slice(0, 2)

  return (
    <>
      {/* Hero */}
      <section style={{
        background: 'linear-gradient(135deg, #050A14 0%, #062E35 100%)',
        paddingTop: 140, paddingBottom: 80,
        position: 'relative', overflow: 'hidden',
      }}>
        <div style={{ position: 'absolute', top: '20%', right: '10%', width: 300, height: 300, borderRadius: '50%', background: 'var(--teal)', opacity: 0.08, filter: 'blur(60px)' }} />
        <div className="container" style={{ position: 'relative', zIndex: 1, maxWidth: 800 }}>
          <Link href="/insights" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, color: 'rgba(255,255,255,0.5)', fontSize: '0.875rem', marginBottom: 24, textDecoration: 'none' }}>
            ← Back to Insights
          </Link>
          <span className="badge badge-teal" style={{ marginBottom: 20 }}>{post.category}</span>
          <h1 style={{ color: 'white', marginBottom: 24, lineHeight: 1.2 }}>{post.title}</h1>
          <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
            <span style={{ fontSize: '0.875rem', color: 'rgba(255,255,255,0.5)' }}>{post.date}</span>
            <span style={{ width: 4, height: 4, borderRadius: '50%', background: 'rgba(255,255,255,0.2)', display: 'inline-block' }} />
            <span style={{ fontSize: '0.875rem', color: 'rgba(255,255,255,0.5)' }}>{post.readTime}</span>
          </div>
        </div>
      </section>

      {/* Article */}
      <section className="section bg-white">
        <div className="container" style={{ maxWidth: 800 }}>
          <p style={{ fontSize: '1.2rem', color: 'var(--charcoal)', lineHeight: 1.75, marginBottom: '2.5rem', fontWeight: 500 }}>
            {post.excerpt}
          </p>
          <div style={{ width: '100%', height: 1, background: 'var(--slate-mid)', marginBottom: '2.5rem' }} />
          <div>{renderBody(post.body)}</div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '64px 0', background: 'var(--slate)' }}>
        <div className="container" style={{ maxWidth: 800 }}>
          <div style={{ padding: '40px', background: 'var(--charcoal)', borderRadius: 16, display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 24 }}>
            <div>
              <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, color: 'white', fontSize: '1.15rem', marginBottom: 8 }}>
                Ready to begin your transformation?
              </div>
              <p style={{ color: 'rgba(255,255,255,0.55)', margin: 0, fontSize: '0.9rem' }}>
                The Diagnostic is where every transformation begins.
              </p>
            </div>
            <Link href="/diagnostic" className="btn btn-primary">Begin with the Diagnostic →</Link>
          </div>
        </div>
      </section>

      {/* Related */}
      {related.length > 0 && (
        <section style={{ padding: '64px 0 96px', background: 'white' }}>
          <div className="container" style={{ maxWidth: 800 }}>
            <h3 style={{ marginBottom: 32 }}>Related Insights</h3>
            <div className="grid-2">
              {related.map(r => (
                <Link key={r.slug} href={`/insights/${r.slug}`} style={{ textDecoration: 'none' }}>
                  <div className="hover-teal-border" style={{ padding: '24px', background: 'var(--slate)', borderRadius: 12, border: '1px solid var(--slate-mid)' }}>
                    <span className="badge badge-teal" style={{ marginBottom: 12 }}>{r.category}</span>
                    <h4 style={{ fontSize: '1rem', marginBottom: 8, lineHeight: 1.4 }}>{r.title}</h4>
                    <p style={{ fontSize: '0.82rem', color: 'var(--muted)', margin: 0, lineHeight: 1.6 }}>{r.excerpt}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  )
}