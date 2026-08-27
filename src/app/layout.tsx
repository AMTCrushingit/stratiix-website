import type { Metadata } from 'next'
import '../styles/globals.css'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: {
    default: 'Stratiix — Diagnose. Activate. Accelerate.',
    template: '%s | Stratiix',
  },
  description: 'Stratiix helps organizations turn strategy into capability and capability into results. Through the Transformation Operating System™, we diagnose what limits performance, architect the future state, and install the capabilities required for lasting improvement.',
  keywords: ['transformation', 'strategy execution', 'organizational capability', 'TOS', 'Caribbean', 'business transformation', 'operational excellence'],
  authors: [{ name: 'Stratiix Partners' }],
  creator: 'Stratiix Partners',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://stratiix.com',
    siteName: 'Stratiix',
    title: 'Stratiix — Diagnose. Activate. Accelerate.',
    description: 'Stratiix helps organizations turn strategy into capability and capability into results.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Stratiix — Diagnose. Activate. Accelerate.',
    description: 'Stratiix helps organizations turn strategy into capability and capability into results.',
  },
  robots: { index: true, follow: true },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'Stratiix Partners',
              url: 'https://stratiix.com',
              description: 'Stratiix helps organizations turn strategy into capability and capability into results.',
              slogan: 'Diagnose. Activate. Accelerate.',
            }),
          }}
        />
      </head>
      <body>
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}