'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { AnimatePresence, motion } from 'framer-motion'
import { Container } from '@/components/ui/Container'
import { cx } from '@/lib/utils'

const navLinks = [
  { href: '/packages', label: 'Packages' },
  { href: '/process', label: 'Process' },
  { href: '/studio', label: 'Studio' },
]

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
  }, [pathname])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  return (
    <>
      <header
        className={cx(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
          scrolled || menuOpen
            ? 'bg-cream/90 backdrop-blur-md border-b border-ink/10'
            : 'bg-transparent border-b border-transparent'
        )}
      >
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 type-label bg-ink text-cream px-4 py-2 rounded-full z-10"
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
              className="flex items-center gap-2 text-ink hover:opacity-80 transition-opacity focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-ink"
              aria-label="OBRA — home"
            >
              <span
                aria-hidden="true"
                className="w-7 h-7 rounded-full bg-coral grid place-items-center text-cream text-[11px] font-extrabold"
              >
                O
              </span>
              <span className="font-extrabold tracking-tight text-lg leading-none">
                OBRA
              </span>
              <span className="hidden sm:inline type-tag text-smoke ml-1">
                @obrajersey
              </span>
            </Link>

            {/* Desktop nav */}
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map(({ href, label }) => {
                const active = pathname === href
                return (
                  <Link
                    key={href}
                    href={href}
                    className={cx(
                      'type-label px-4 py-2.5 rounded-full transition-colors focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-ink',
                      active
                        ? 'bg-ink text-cream'
                        : 'text-ink/70 hover:text-ink hover:bg-ink/5'
                    )}
                  >
                    {label}
                  </Link>
                )
              })}
              <Link
                href="/brief"
                className="ml-3 inline-flex items-center gap-2 type-label bg-coral text-cream pl-5 pr-4 py-3 rounded-full hover:bg-ember transition-colors focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-ink"
              >
                Start a brief
                <span aria-hidden="true">→</span>
              </Link>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden type-label text-ink px-4 py-2 rounded-full bg-ink/5 hover:bg-ink/10 transition-colors focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-ink"
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={menuOpen}
              aria-controls="mobile-nav"
            >
              {menuOpen ? 'CLOSE' : 'MENU'}
            </button>
          </nav>
        </Container>
      </header>

      {/* Mobile full-screen overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="mobile-nav"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="fixed inset-0 z-40 bg-coral text-cream flex flex-col tex-grain"
            aria-modal="true"
            role="dialog"
            aria-label="Navigation menu"
          >
            <div className="flex-1 flex flex-col justify-center px-6 pt-20">
              <motion.nav
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: {},
                  visible: {
                    transition: { staggerChildren: 0.06, delayChildren: 0.1 },
                  },
                }}
                aria-label="Mobile navigation"
                className="space-y-2"
              >
                {[...navLinks, { href: '/brief', label: 'Start a brief →' }].map(
                  ({ href, label }) => (
                    <motion.div
                      key={href}
                      variants={{
                        hidden: { opacity: 0, x: -24 },
                        visible: {
                          opacity: 1,
                          x: 0,
                          transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] },
                        },
                      }}
                    >
                      <Link
                        href={href}
                        className="type-display block py-2 hover:text-sun transition-colors"
                        onClick={() => setMenuOpen(false)}
                      >
                        {label}
                      </Link>
                    </motion.div>
                  )
                )}
              </motion.nav>
            </div>

            <div className="px-6 py-8 border-t border-cream/20 flex items-center justify-between flex-wrap gap-4">
              <a
                href="mailto:hello@obra.studio"
                className="type-label hover:text-sun transition-colors"
              >
                hello@obra.studio
              </a>
              <span className="type-label text-cream/70">@obrajersey</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
