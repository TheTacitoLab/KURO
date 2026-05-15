import type { Metadata } from 'next'

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://deptkuro.com'

export const siteMetadata = {
  siteName: 'KURO',
  baseUrl: BASE_URL,
  defaultTitle: 'KURO — Black Label Jersey Studio',
  defaultDescription:
    'Limited edition football jerseys made to remember. Designed and manufactured for festivals, tours, brand activations and live events.',
  ogImage: `${BASE_URL}/images/og-image.jpg`,
  twitter: '@deptkuro',
}

export function buildMetadata(overrides?: Partial<Metadata>): Metadata {
  return {
    metadataBase: new URL(BASE_URL),
    title: {
      default: siteMetadata.defaultTitle,
      template: `%s — KURO`,
    },
    description: siteMetadata.defaultDescription,
    openGraph: {
      type: 'website',
      siteName: siteMetadata.siteName,
      title: 'KURO — Black Label Jersey Studio',
      description: 'A dedicated department for limited edition football jerseys.',
      images: [
        {
          url: siteMetadata.ogImage,
          width: 1200,
          height: 630,
          alt: 'KURO — Black Label Jersey Studio',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      site: siteMetadata.twitter,
      title: 'KURO — Black Label Jersey Studio',
      description: 'A dedicated department for limited edition football jerseys.',
    },
    robots: {
      index: true,
      follow: true,
    },
    ...overrides,
  }
}
