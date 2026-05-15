'use client'

import { motion, useInView, useReducedMotion } from 'framer-motion'
import { useRef } from 'react'

interface AnimatedRevealProps {
  children: React.ReactNode
  delay?: number
  className?: string
}

export function AnimatedReveal({
  children,
  delay = 0,
  className,
}: AnimatedRevealProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-6% 0px' })
  const prefersReducedMotion = useReducedMotion()

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 28 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: prefersReducedMotion ? 0 : 0.75,
        ease: [0.22, 1, 0.36, 1],
        delay: prefersReducedMotion ? 0 : delay,
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
