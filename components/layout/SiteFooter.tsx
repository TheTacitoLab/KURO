import Link from 'next/link'
import { Container } from '@/components/ui/Container'
import { MarqueeStrip } from '@/components/ui/MarqueeStrip'

export function SiteFooter() {
  return (
    <footer className="bg-obsidian text-white relative on-dark">
      <MarqueeStrip
        tone="sun"
        size="lg"
        items={[
          'KURO',
          'LIMITED EDITION',
          'MADE TO REMEMBER',
          'FESTIVALS',
          'TOURS',
          'BRAND ACTIVATIONS',
          'LIVE EVENTS',
        ]}
      />

      <Container>
        <div className="py-16 md:py-20 grid gap-12 md:grid-cols-12">
          {/* Brand block */}
          <div className="md:col-span-5">
            <Link href="/" className="inline-flex items-center gap-3 mb-6">
              <span
                aria-hidden="true"
                className="w-9 h-9 rounded-full bg-coral grid place-items-center text-white text-sm font-extrabold"
              >
                K
              </span>
              <span className="font-extrabold text-2xl tracking-tight">KURO</span>
            </Link>
            <p className="type-headline max-w-md">
              The jersey studio for events worth keeping.
            </p>
            <p className="type-body text-white/70 mt-4 max-w-md">
              Department KURO — a dedicated jersey department for the event.
            </p>
          </div>

          {/* Contact */}
          <div className="md:col-span-3">
            <p className="type-label text-white/60 mb-5">Contact</p>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:hello@deptkuro.com"
                  className="type-body text-white hover:text-flare transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  hello@deptkuro.com
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com/deptkuro"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="type-body text-white hover:text-flare transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  @deptkuro
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="type-body text-white hover:text-flare transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  KURO Studio · LinkedIn
                </a>
              </li>
            </ul>
          </div>

          {/* Nav */}
          <div className="md:col-span-2">
            <p className="type-label text-white/60 mb-5">Studio</p>
            <ul className="space-y-3">
              {[
                { href: '/packages', label: 'Packages' },
                { href: '/process', label: 'Process' },
                { href: '/studio', label: 'Studio' },
                { href: '/brief', label: 'Start a brief' },
              ].map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="type-body text-white hover:text-flare transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Meta */}
          <div className="md:col-span-2 flex flex-col gap-3 md:items-end">
            <p className="type-label text-white/60">Based</p>
            <p className="type-body">Hampshire, UK</p>
            <p className="type-label text-white/60 mt-2">Reach</p>
            <p className="type-body">Global</p>
          </div>
        </div>

        <div className="border-t border-white/15 py-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <p className="type-label text-white/60">© 2026 KURO · DEPARTMENT KURO</p>
          <div className="flex items-center gap-6">
            <Link
              href="/privacy"
              className="type-label text-white/70 hover:text-flare transition-colors"
            >
              Privacy
            </Link>
            <span className="type-label text-white/40">
              A jersey department for the event.
            </span>
          </div>
        </div>
      </Container>
    </footer>
  )
}
