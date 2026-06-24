import type { Metadata } from 'next'
import { Inter, Space_Mono } from 'next/font/google'
import { SiteHeader } from '@/components/layout/SiteHeader'
import { SiteFooter } from '@/components/layout/SiteFooter'
import { buildMetadata } from '@/lib/metadata'
import '@/styles/globals.css'

// Body + lede sans.
const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

// Small labels + technical type — club/flyer monospace.
const spaceMono = Space_Mono({
  subsets: ['latin'],
  weight: ['400', '700'],
  display: 'swap',
  variable: '--font-mono',
})

// TODO: load Breul Grotesk via next/font/local for display/chapter/headline type once the
// font files exist at /public/fonts (.woff2 preferred). Then expose it as --font-display.
// No files are present yet, so display type falls back to the sans (see tailwind fontFamily.display).

export const metadata: Metadata = buildMetadata()

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceMono.variable}`}>
      <body className="bg-void text-white font-sans antialiased">
        <SiteHeader />
        <main id="main-content" tabIndex={-1}>
          {children}
        </main>
        <SiteFooter />
        {process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN && (
          <script
            defer
            data-domain={process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN}
            src="https://plausible.io/js/script.js"
          />
        )}
      </body>
    </html>
  )
}
