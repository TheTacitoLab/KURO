'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Container } from '@/components/ui/Container'
import { cx } from '@/lib/utils'

const navLinks = [
  { href: '/packages', label: 'Packages' },
  { href: '/process', label: 'Process' },
  { href: '/studio', label: 'Studio' },
]

export function SiteHeader() {
  const pathname = usePathname()

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-paper/95 backdrop-blur-sm border-b border-[#DDDDDD]">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 type-label bg-[#111111] text-[#FAFAFA] px-4 py-2"
      >
        Skip to content
      </a>
      <Container>
        <nav
          className="flex items-center justify-between h-16 md:h-20"
          aria-label="Main navigation"
        >
          <Link
            href="/"
            className="type-label text-[#111111] hover:text-[#4A4A4A] transition-colors focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#111111]"
            aria-label="KURO — home"
          >
            <span aria-hidden="true" className="text-[#777777] mr-2">黒 ·</span>
            <span>KURO</span>
          </Link>

          <div className="flex items-center gap-8">
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={cx(
                  'type-label transition-colors focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#111111] hidden md:inline-flex',
                  'relative after:absolute after:bottom-0 after:left-0 after:h-px after:bg-[#111111] after:transition-all after:duration-200',
                  pathname === href
                    ? 'text-[#111111] after:w-full'
                    : 'text-[#777777] hover:text-[#111111] after:w-0 hover:after:w-full'
                )}
              >
                {label}
              </Link>
            ))}
            <Link
              href="/brief"
              className="type-label bg-[#111111] text-[#FAFAFA] px-5 py-3 hover:bg-[#000000] transition-colors focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#111111]"
            >
              Start a brief
            </Link>
          </div>
        </nav>
      </Container>
    </header>
  )
}
