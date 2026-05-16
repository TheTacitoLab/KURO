import type { Metadata } from 'next'

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://deptkuro.com'

export const siteMetadata = {
  siteName: 'KURO',
  baseUrl: BASE_URL,
  defaultTitle: 'KURO — Limited Edition Football Jerseys',
  defaultDescription:
    'KURO designs and manufactures limited edition football jerseys for festivals, tours, brand activations and live events. Made to remember.',
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
      title: siteMetadata.defaultTitle,
      description: siteMetadata.defaultDescription,
      images: [
        {
          url: siteMetadata.ogImage,
          width: 1200,
          height: 630,
          alt: 'KURO — Limited Edition Football Jerseys',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      site: siteMetadata.twitter,
      title: siteMetadata.defaultTitle,
      description: siteMetadata.defaultDescription,
    },
    robots: {
      index: true,
      follow: true,
    },
    ...overrides,
  }
}
