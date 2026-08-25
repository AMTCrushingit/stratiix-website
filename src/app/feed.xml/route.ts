import { posts } from '@/lib/posts'

export async function GET() {
  const base = 'https://stratiix.com'
  const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Stratiix Insights</title>
    <link>${base}/insights</link>
    <description>Thought leadership on transformation, leadership, governance, and organizational capability from Stratiix.</description>
    <language>en-us</language>
    <atom:link href="${base}/feed.xml" rel="self" type="application/rss+xml"/>
    ${posts.map(p => `
    <item>
      <title><![CDATA[${p.title}]]></title>
      <link>${base}/insights/${p.slug}</link>
      <guid>${base}/insights/${p.slug}</guid>
      <description><![CDATA[${p.excerpt}]]></description>
      <pubDate>${new Date(p.date).toUTCString()}</pubDate>
      <category>${p.category}</category>
    </item>`).join('')}
  </channel>
</rss>`

  return new Response(rss, {
    headers: { 'Content-Type': 'application/xml', 'Cache-Control': 'public, max-age=3600' },
  })
}