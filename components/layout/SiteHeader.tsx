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
    const onScroll = () => setScrolled(window.scrollY > 60)
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
          'fixed top-0 left-0 right-0 z-50 transition-all duration-400',
          scrolled || menuOpen
            ? 'bg-ink/96 backdrop-blur-md border-b border-ash'
            : 'bg-transparent border-b border-transparent'
        )}
      >
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 type-label bg-white text-ink px-4 py-2 z-10"
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
              className="type-label text-white hover:text-hair transition-colors focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-white"
              aria-label="KURO — home"
            >
              <span className="text-mute mr-2" aria-hidden="true">黒 ·</span>
              KURO
            </Link>

            {/* Desktop nav */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  className={cx(
                    'type-label transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-white',
                    'relative after:absolute after:-bottom-0.5 after:left-0 after:h-px after:bg-white after:transition-all after:duration-200',
                    pathname === href
                      ? 'text-white after:w-full'
                      : 'text-mute hover:text-white after:w-0 hover:after:w-full'
                  )}
                >
                  {label}
                </Link>
              ))}
              <Link
                href="/brief"
                className="type-label bg-white text-ink px-5 py-3 hover:bg-hair transition-colors focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-white"
              >
                Start a brief
              </Link>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden type-label text-white hover:text-hair transition-colors focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-white"
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
            transition={{ duration: 0.2, ease: 'easeInOut' }}
            className="fixed inset-0 z-40 bg-black flex flex-col"
            aria-modal="true"
            role="dialog"
            aria-label="Navigation menu"
          >
            <div className="flex-1 flex flex-col justify-center px-8 pt-20">
              <motion.nav
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: {},
                  visible: {
                    transition: { staggerChildren: 0.07, delayChildren: 0.1 },
                  },
                }}
                aria-label="Mobile navigation"
                className="space-y-8"
              >
                {[...navLinks, { href: '/brief', label: 'Start a brief' }].map(
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
                        className="type-chapter text-white hover:text-hair transition-colors block"
                        onClick={() => setMenuOpen(false)}
                      >
                        {label}
                      </Link>
                    </motion.div>
                  )
                )}
              </motion.nav>
            </div>

            <div className="px-8 py-10 border-t border-ash flex items-center justify-between">
              <a
                href="mailto:hello@deptkuro.com"
                className="type-label text-mute hover:text-white transition-colors focus-visible:outline-2 focus-visible:outline-white"
              >
                hello@deptkuro.com
              </a>
              <span className="type-label text-ash">@deptkuro</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
