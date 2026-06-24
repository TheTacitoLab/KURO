import Link from 'next/link'
import { Container } from '@/components/ui/Container'
import { MarqueeStrip } from '@/components/ui/MarqueeStrip'

export function SiteFooter() {
  return (
    <footer className="bg-ink text-cream relative on-dark">
      <MarqueeStrip
        tone="sun"
        size="lg"
        items={[
          'OBRA',
          'LIMITED EDITION',
          'FOOTBALL JERSEYS',
          'FESTIVALS',
          'ARTISTS',
          'CREATORS',
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
                className="w-9 h-9 rounded-full bg-coral grid place-items-center text-cream text-sm font-extrabold"
              >
                O
              </span>
              <span className="font-extrabold text-2xl tracking-tight">OBRA</span>
            </Link>
            <p className="type-headline max-w-md">
              Limited edition football jerseys, from concept to creation.
            </p>
            <p className="type-body text-cream/70 mt-4 max-w-md">
              Department OBRA — a dedicated jersey studio for festivals, artists and creators.
            </p>
          </div>

          {/* Contact */}
          <div className="md:col-span-3">
            <p className="type-label text-cream/60 mb-5">Contact</p>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:hello@obra.studio"
                  className="type-body text-cream hover:text-sun transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cream"
                >
                  hello@obra.studio
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com/obrajersey"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="type-body text-cream hover:text-sun transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cream"
                >
                  @obrajersey
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="type-body text-cream hover:text-sun transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cream"
                >
                  OBRA Studio · LinkedIn
                </a>
              </li>
            </ul>
          </div>

          {/* Nav */}
          <div className="md:col-span-2">
            <p className="type-label text-cream/60 mb-5">Studio</p>
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
                    className="type-body text-cream hover:text-sun transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cream"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Meta */}
          <div className="md:col-span-2 flex flex-col gap-3 md:items-end">
            <p className="type-label text-cream/60">Based</p>
            <p className="type-body">Hampshire, UK</p>
            <p className="type-label text-cream/60 mt-2">Reach</p>
            <p className="type-body">Global</p>
          </div>
        </div>

        <div className="border-t border-cream/15 py-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <p className="type-label text-cream/60">© 2026 OBRA · Department OBRA</p>
          <div className="flex items-center gap-6">
            <Link
              href="/privacy"
              className="type-label text-cream/70 hover:text-sun transition-colors"
            >
              Privacy
            </Link>
            <span className="type-label text-cream/40">
              A jersey studio for the drop.
            </span>
          </div>
        </div>
      </Container>
    </footer>
  )
}
