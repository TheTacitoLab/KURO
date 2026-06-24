import type { Metadata } from 'next'
import Link from 'next/link'
import { buildMetadata } from '@/lib/metadata'
import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'

export const metadata: Metadata = buildMetadata({
  title: '404',
  description: 'The page is not here. The studio is.',
})

export default function NotFound() {
  return (
    <section
      className="bg-coral text-white min-h-screen flex items-center relative overflow-hidden tex-grain pt-32"
      aria-labelledby="notfound-heading"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 -right-20 w-[520px] h-[520px] rounded-full bg-flare/70 blur-3xl"
      />
      <Container className="relative">
        <p className="type-tag mb-6">✶ ERROR</p>
        <p
          className="font-extrabold leading-none tracking-tight mb-8 select-none"
          style={{ fontSize: 'clamp(8rem, 26vw, 22rem)' }}
          aria-hidden="true"
        >
          404
        </p>
        <h1 id="notfound-heading" className="type-chapter mb-10 max-w-2xl">
          The page is not here. The studio is.
        </h1>
        <div className="flex flex-wrap gap-4">
          <Button href="/" variant="sun" size="lg">
            Return to KURO →
          </Button>
          <Link
            href="/brief"
            className="inline-flex items-center type-label rounded-full px-8 py-4 border border-white text-white hover:bg-white hover:text-void transition-colors focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-white"
          >
            Start a brief
          </Link>
        </div>
      </Container>
    </section>
  )
}
