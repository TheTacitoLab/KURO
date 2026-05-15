import Link from 'next/link'
import { Container } from '@/components/ui/Container'
import { Rule } from '@/components/ui/Rule'

export function SiteFooter() {
  return (
    <footer className="bg-paper border-t border-[#DDDDDD]">
      <Container>
        <div className="py-10 md:py-14">
          <Rule weight="heavy" className="mb-10 md:mb-14" />

          <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
            <div>
              <p className="type-label text-[#111111] mb-1">
                <span className="text-[#777777] mr-2">黒 ·</span>KURO
              </p>
              <p className="type-label text-[#777777]">© 2026</p>
            </div>

            <div className="flex flex-col gap-2">
              <a
                href="mailto:hello@deptkuro.com"
                className="type-label text-[#777777] hover:text-[#111111] transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#111111]"
              >
                Email. hello@deptkuro.com
              </a>
              <a
                href="https://instagram.com/deptkuro"
                target="_blank"
                rel="noopener noreferrer"
                className="type-label text-[#777777] hover:text-[#111111] transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#111111]"
              >
                Instagram. @deptkuro
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="type-label text-[#777777] hover:text-[#111111] transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#111111]"
              >
                LinkedIn. KURO Studio
              </a>
            </div>
          </div>

          <Rule weight="hair" className="mt-10 mb-6" />

          <div className="flex flex-col gap-2 md:flex-row md:justify-between md:items-center">
            <p className="type-label text-[#777777]">
              Department KURO. A dedicated department for limited edition jerseys.
            </p>
            <div className="flex gap-6">
              <Link
                href="/privacy"
                className="type-label text-[#777777] hover:text-[#111111] transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#111111]"
              >
                Privacy
              </Link>
            </div>
          </div>

          <p className="type-label text-[#DDDDDD] mt-6">KURO. 黒.</p>
        </div>
      </Container>
    </footer>
  )
}
