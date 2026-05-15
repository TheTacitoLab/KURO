import Link from 'next/link'
import { Container } from '@/components/ui/Container'

export function SiteFooter() {
  return (
    <footer className="bg-black border-t border-ash">
      <Container>
        <div className="py-10 md:py-14">
          <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
            <div>
              <p className="type-label text-white mb-1">
                <span className="text-mute mr-2" aria-hidden="true">
                  黒 ·
                </span>
                KURO
              </p>
              <p className="type-label text-ash">© 2026</p>
            </div>

            <div className="flex flex-col gap-2">
              <a
                href="mailto:hello@deptkuro.com"
                className="type-label text-mute hover:text-white transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Email. hello@deptkuro.com
              </a>
              <a
                href="https://instagram.com/deptkuro"
                target="_blank"
                rel="noopener noreferrer"
                className="type-label text-mute hover:text-white transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Instagram. @deptkuro
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="type-label text-mute hover:text-white transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                LinkedIn. KURO Studio
              </a>
            </div>
          </div>

          <div className="border-t border-ash mt-10 pt-6 flex flex-col gap-4 md:flex-row md:justify-between md:items-center">
            <p className="type-label text-ash">
              Department KURO. A dedicated department for limited edition jerseys.
            </p>
            <Link
              href="/privacy"
              className="type-label text-mute hover:text-white transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Privacy
            </Link>
          </div>

          <p className="type-label text-ash/40 mt-8">KURO. 黒.</p>
        </div>
      </Container>
    </footer>
  )
}
