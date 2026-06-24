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
            ? 'bg-void/90 backdrop-blur-md border-b border-line'
            : 'bg-transparent border-b border-transparent'
        )}
      >
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 type-label bg-white text-void px-4 py-2 rounded-full z-10"
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
              className="flex items-center gap-2 text-white hover:opacity-80 transition-opacity focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-white"
              aria-label="KURO — home"
            >
              <span
                aria-hidden="true"
                className="w-7 h-7 rounded-full bg-coral grid place-items-center text-white text-[11px] font-extrabold"
              >
                K
              </span>
              <span className="font-extrabold tracking-tight text-lg leading-none">
                KURO
              </span>
              <span className="hidden sm:inline type-tag text-ash ml-1">
                @deptkuro
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
                      'type-label px-4 py-2.5 rounded-full transition-colors focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-white',
                      active
                        ? 'bg-white text-void'
                        : 'text-white/70 hover:text-white hover:bg-white/5'
                    )}
                  >
                    {label}
                  </Link>
                )
              })}
              <Link
                href="/brief"
                className="ml-3 inline-flex items-center gap-2 type-label bg-coral text-white pl-5 pr-4 py-3 rounded-full hover:brightness-110 transition-all focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-white"
              >
                Start a brief
                <span aria-hidden="true">→</span>
              </Link>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden type-label text-white px-4 py-2 rounded-full bg-white/5 hover:bg-white/10 transition-colors focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-white"
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
            className="fixed inset-0 z-40 bg-coral text-white flex flex-col tex-grain"
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
                        className="type-display block py-2 hover:text-flare transition-colors"
                        onClick={() => setMenuOpen(false)}
                      >
                        {label}
                      </Link>
                    </motion.div>
                  )
                )}
              </motion.nav>
            </div>

            <div className="px-6 py-8 border-t border-white/20 flex items-center justify-between flex-wrap gap-4">
              <a
                href="mailto:hello@deptkuro.com"
                className="type-label hover:text-flare transition-colors"
              >
                hello@deptkuro.com
              </a>
              <span className="type-label text-white/70">@deptkuro</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
