import { MetadataRoute } from 'next'
import { posts } from '@/lib/posts'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://stratiix.com'
  const staticPages = [
    { url: base, priority: 1.0, changeFrequency: 'weekly' as const },
    { url: `${base}/the-tos`, priority: 0.9, changeFrequency: 'monthly' as const },
    { url: `${base}/diagnostic`, priority: 0.9, changeFrequency: 'monthly' as const },
    { url: `${base}/solutions`, priority: 0.8, changeFrequency: 'monthly' as const },
    { url: `${base}/results`, priority: 0.8, changeFrequency: 'monthly' as const },
    { url: `${base}/insights`, priority: 0.8, changeFrequency: 'weekly' as const },
    { url: `${base}/about`, priority: 0.7, changeFrequency: 'monthly' as const },
    { url: `${base}/contact`, priority: 0.7, changeFrequency: 'monthly' as const },
  ]
  const postPages = posts.map(p => ({
    url: `${base}/insights/${p.slug}`,
    priority: 0.7,
    changeFrequency: 'monthly' as const,
    lastModified: new Date(p.date),
  }))
  return [...staticPages, ...postPages]
}