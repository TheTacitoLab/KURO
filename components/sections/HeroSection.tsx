'use client'

import Link from 'next/link'
import { motion, useReducedMotion } from 'framer-motion'
import { Button } from '@/components/ui/Button'
import { Container } from '@/components/ui/Container'

export function HeroSection() {
  const prefersReducedMotion = useReducedMotion()

  const duration = prefersReducedMotion ? 0 : 0.85
  const ease: [number, number, number, number] = [0.22, 1, 0.36, 1]

  const line = (delay: number) => ({
    initial: { opacity: 0, y: prefersReducedMotion ? 0 : 40 },
    animate: { opacity: 1, y: 0 },
    transition: { duration, ease, delay: prefersReducedMotion ? 0 : delay },
  })

  const fade = (delay: number) => ({
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: {
      duration: prefersReducedMotion ? 0 : 0.7,
      delay: prefersReducedMotion ? 0 : delay,
    },
  })

  return (
    <section
      className="relative bg-cream text-ink overflow-hidden tex-grain pt-24 md:pt-28"
      aria-label="Hero"
    >
      {/* Sun glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 -right-32 w-[640px] h-[640px] rounded-full bg-sun opacity-70 blur-2xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/3 -left-40 w-[420px] h-[420px] rounded-full bg-coral/40 blur-3xl"
      />

      <Container size="wide" className="relative">
        {/* Top meta row */}
        <motion.div
          {...fade(0.05)}
          className="flex items-center justify-between flex-wrap gap-3 pb-8"
        >
          <div className="flex items-center gap-3">
            <span className="type-tag bg-ink text-cream px-3 py-1.5 rounded-full">
              EDITION · 2026
            </span>
            <span className="type-tag text-smoke">
              DEPARTMENT KURO · HAMPSHIRE ↔ GLOBAL
            </span>
          </div>
          <span className="type-tag text-smoke hidden md:inline">
            ✶ FESTIVALS · TOURS · DROPS · LIVE EVENTS
          </span>
        </motion.div>

        {/* Main poster */}
        <div className="relative grid md:grid-cols-12 gap-6 md:gap-8 pb-16 md:pb-24">
          {/* Display headline */}
          <div className="md:col-span-12">
            <h1
              className="type-poster text-ink"
              aria-label="Limited edition football jerseys made to remember."
            >
              <motion.span {...line(0.15)} className="block">
                LIMITED
              </motion.span>

              <motion.span {...line(0.25)} className="block">
                <span className="text-coral">EDITION</span>{' '}
                <span className="type-serif text-ember normal-case font-normal italic tracking-tight">
                  football
                </span>
              </motion.span>

              <motion.span {...line(0.35)} className="block">
                JERSEYS
              </motion.span>

              <motion.span {...line(0.45)} className="block">
                <span className="text-smoke">MADE</span>{' '}
                <span className="text-sea">TO</span>{' '}
                <span className="text-ember">REMEMBER.</span>
              </motion.span>
            </h1>
          </div>

          {/* Lower row: jersey card + copy + cta */}
          <motion.div
            {...fade(0.6)}
            className="md:col-span-4 md:col-start-1 mt-6"
          >
            <p className="type-lede text-ink max-w-md">
              KURO designs and manufactures limited edition football jerseys for festivals,
              tours, brand activations and live events.
            </p>
            <p className="type-body text-smoke max-w-md mt-4">
              The event ends. The jersey stays.
            </p>

            <div className="flex flex-wrap items-center gap-4 mt-8">
              <Button href="/brief" variant="primary" size="lg">
                Start a brief
                <span aria-hidden="true">→</span>
              </Button>
              <Link
                href="/process"
                className="type-label text-ink hover:text-ember transition-colors underline underline-offset-4 decoration-2 decoration-ember/40 hover:decoration-ember"
              >
                See how KURO works
              </Link>
            </div>
          </motion.div>

          {/* Jersey poster card */}
          <motion.div
            {...fade(0.45)}
            className="md:col-span-5 md:col-start-8 -mt-12 md:-mt-44 relative z-10"
          >
            <div className="relative rotate-tilt-r animate-drift">
              <div
                className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-coral text-cream tex-grain shadow-[0_30px_60px_-20px_rgba(169,71,58,0.45)]"
                role="img"
                aria-label="KURO limited edition jersey 001"
              >
                {/* Stripes */}
                <div
                  aria-hidden="true"
                  className="absolute inset-0 opacity-30"
                  style={{
                    backgroundImage:
                      'repeating-linear-gradient(0deg, currentColor 0, currentColor 1px, transparent 1px, transparent 48px)',
                  }}
                />
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                  <span className="type-tag bg-cream/15 px-2 py-1 rounded-full backdrop-blur-sm">
                    KURO · LTD
                  </span>
                  <span className="type-tag">EDITION / 001</span>
                </div>
                <div
                  className="absolute inset-0 flex items-center justify-center"
                  aria-hidden="true"
                >
                  <span
                    className="font-extrabold leading-none"
                    style={{
                      fontSize: 'clamp(8rem, 30vw, 18rem)',
                      letterSpacing: '-0.06em',
                    }}
                  >
                    10
                  </span>
                </div>
                <div className="absolute left-0 right-0 bottom-0 p-5 border-t border-cream/20">
                  <p className="type-label">THE SUMMER JERSEY</p>
                  <p className="type-tag text-cream/70 mt-1">
                    HOMEMADE COTTON · TERRACOTTA · SUN
                  </p>
                </div>
              </div>

              {/* Sticker */}
              <div className="absolute -top-6 -left-6 w-20 h-20 rounded-full bg-sun text-ink grid place-items-center rotate-[-12deg] shadow-md">
                <div className="text-center">
                  <p className="type-tag">DROP</p>
                  <p className="font-extrabold text-lg leading-none mt-1">N°1</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Quote/serif moment */}
          <motion.div
            {...fade(0.75)}
            className="md:col-span-4 md:col-start-1 md:row-start-2 self-end mt-10 md:mt-0"
          >
            <p className="type-serif text-2xl md:text-3xl text-ink/80 leading-snug">
              &ldquo;Not every souvenir gets worn.&rdquo;
            </p>
          </motion.div>
        </div>
      </Container>
    </section>
  )
}
