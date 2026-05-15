import type { Metadata } from 'next'
import { buildMetadata } from '@/lib/metadata'
import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'
import { Rule } from '@/components/ui/Rule'
import { Button } from '@/components/ui/Button'

export const metadata: Metadata = buildMetadata({
  title: '404',
  description: 'The page is not here. The studio is.',
})

export default function NotFound() {
  return (
    <Section>
      <Container>
        <Rule weight="heavy" className="mb-10 md:mb-14" />
        <p className="type-display text-[#DDDDDD] mb-6">404</p>
        <h1 className="type-chapter text-[#111111] mb-6">
          The page is not here. The studio is.
        </h1>
        <Rule weight="hair" className="mb-10 max-w-xs" />
        <div className="flex flex-wrap gap-4">
          <Button href="/" variant="primary">
            Return to KURO
          </Button>
          <Button href="/brief" variant="secondary">
            Start a brief
          </Button>
        </div>
      </Container>
    </Section>
  )
}
