import type { Metadata } from 'next'
import { buildMetadata } from '@/lib/metadata'
import { Container } from '@/components/ui/Container'
import { Rule } from '@/components/ui/Rule'
import { Button } from '@/components/ui/Button'

export const metadata: Metadata = buildMetadata({
  title: '404',
  description: 'The page is not here. The studio is.',
})

export default function NotFound() {
  return (
    <section className="bg-black min-h-screen flex items-center" aria-labelledby="notfound-heading">
      <Container>
        <div className="py-20 md:py-28">
          <p className="type-display text-steel mb-6" aria-hidden="true">
            404
          </p>
          <Rule weight="heavy" className="mb-10 max-w-[80px]" />
          <h1 id="notfound-heading" className="type-chapter text-white mb-10 max-w-xl">
            The page is not here. The studio is.
          </h1>
          <div className="flex flex-wrap gap-4">
            <Button href="/" variant="primary">
              Return to KURO
            </Button>
            <Button href="/brief" variant="secondary">
              Start a brief
            </Button>
          </div>
        </div>
      </Container>
    </section>
  )
}
