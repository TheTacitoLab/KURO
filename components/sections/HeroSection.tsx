'use client'

import Link from 'next/link'
import { motion, useReducedMotion } from 'framer-motion'
import { Button } from '@/components/ui/Button'
import { Container } from '@/components/ui/Container'

export function HeroSection() {
  const prefersReducedMotion = useReducedMotion()

  const duration = prefersReducedMotion ? 0 : 0.8
  const ease: [number, number, number, number] = [0.22, 1, 0.36, 1]

  const line = (delay: number) => ({
    initial: { opacity: 0, y: prefersReducedMotion ? 0 : 32 },
    animate: { opacity: 1, y: 0 },
    transition: { duration, ease, delay: prefersReducedMotion ? 0 : delay },
  })

  const fade = (delay: number) => ({
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { duration: prefersReducedMotion ? 0 : 0.6, delay: prefersReducedMotion ? 0 : delay },
  })

  return (
    <section
      className="relative min-h-screen bg-black text-white flex flex-col overflow-hidden"
      aria-label="Hero"
    >
      {/* Subtle technical grid */}
      <div
        className="absolute inset-0 opacity-[0.035] pointer-events-none"
        aria-hidden="true"
        style={{
          backgroundImage:
            'linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)',
          backgroundSize: '80px 80px',
        }}
      />

      <Container className="flex-1 flex flex-col justify-end pb-16 md:pb-24 pt-32 md:pt-40">
        {/* Metadata line */}
        <motion.div {...fade(0.1)}>
          <p className="type-label text-ash mb-14 md:mb-20">
            <span>DEPARTMENT KURO</span>
            <span className="mx-3 text-steel" aria-hidden="true">/</span>
            <span>BLACK LABEL JERSEY STUDIO</span>
            <span className="mx-3 text-steel" aria-hidden="true">/</span>
            <span>EST. 2026</span>
          </p>
        </motion.div>

        {/* Display headline */}
        <h1 className="type-display mb-8 md:mb-12" aria-label="The jersey department for the event.">
          <motion.span {...line(0.2)} className="block">
            THE JERSEY
          </motion.span>
          <motion.span {...line(0.32)} className="block">
            DEPARTMENT
          </motion.span>
          <motion.span {...line(0.44)} className="block text-hair">
            FOR THE EVENT.
          </motion.span>
        </h1>

        {/* Rule */}
        <motion.div
          initial={{ scaleX: 0, originX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{
            duration: prefersReducedMotion ? 0 : 0.6,
            ease,
            delay: prefersReducedMotion ? 0 : 0.58,
          }}
          className="h-px bg-ash w-24 mb-8 md:mb-10"
          aria-hidden="true"
        />

        {/* Supporting copy */}
        <motion.p {...line(0.62)} className="type-lede text-hair max-w-lg mb-3">
          Limited edition football jerseys made to remember.
        </motion.p>
        <motion.p {...fade(0.72)} className="type-body text-mute max-w-md mb-12 md:mb-16">
          For festivals, tours, brand activations and live events.
        </motion.p>

        {/* CTAs */}
        <motion.div {...fade(0.8)} className="flex flex-wrap items-center gap-6">
          <Button href="/brief" variant="primary">
            Start a brief
          </Button>
          <Link
            href="/process"
            className="type-label text-mute hover:text-white transition-colors focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-white"
          >
            See the process →
          </Link>
        </motion.div>
      </Container>

      {/* Bottom border */}
      <div className="border-t border-ash/50" aria-hidden="true" />
    </section>
  )
}
