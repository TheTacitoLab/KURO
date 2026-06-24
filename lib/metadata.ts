import type { Metadata } from 'next'

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://obra.studio'

export const siteMetadata = {
  siteName: 'OBRA',
  baseUrl: BASE_URL,
  defaultTitle: 'OBRA — Limited Edition Football Jerseys',
  defaultDescription:
    'OBRA creates limited edition football jerseys for festivals, artists, creators and culture-led brands. From concept to creation.',
  ogImage: `${BASE_URL}/images/og-image.jpg`,
  twitter: '@obrajersey',
}

export function buildMetadata(overrides?: Partial<Metadata>): Metadata {
  return {
    metadataBase: new URL(BASE_URL),
    title: {
      default: siteMetadata.defaultTitle,
      template: `%s — OBRA`,
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
          alt: 'OBRA — Limited Edition Football Jerseys',
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
