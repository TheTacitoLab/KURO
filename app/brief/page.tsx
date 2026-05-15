import type { Metadata } from 'next'
import { buildMetadata } from '@/lib/metadata'
import { Container } from '@/components/ui/Container'
import { Rule } from '@/components/ui/Rule'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { BriefForm } from '@/components/forms/BriefForm'
import { AnimatedReveal } from '@/components/ui/AnimatedReveal'

export const metadata: Metadata = buildMetadata({
  title: 'Start a brief',
  description:
    'Tell KURO about the event. One short form. Reply within two working days.',
})

export default function BriefPage() {
  return (
    <section className="bg-ink min-h-screen" aria-labelledby="brief-heading">
      <Container>
        <div className="py-20 md:py-28">
          <AnimatedReveal>
            <SectionLabel>Brief</SectionLabel>
            <Rule weight="heavy" className="mb-10 md:mb-14" />
          </AnimatedReveal>

          <div className="md:grid md:grid-cols-2 md:gap-24">
            <div>
              <AnimatedReveal delay={0.1}>
                <h1 id="brief-heading" className="type-chapter text-white mb-4">
                  Tell KURO about the event.
                </h1>
              </AnimatedReveal>
              <AnimatedReveal delay={0.18}>
                <p className="type-lede text-mute mb-6">
                  One short form. Reply within two working days.
                </p>
              </AnimatedReveal>
              <AnimatedReveal delay={0.24}>
                <Rule weight="hair" className="mb-6 max-w-[120px]" />
                <p className="type-label text-ash">Department KURO starts here.</p>
              </AnimatedReveal>
            </div>
          </div>

          <div className="mt-12 md:mt-16 md:max-w-xl">
            <AnimatedReveal delay={0.2}>
              <BriefForm />
            </AnimatedReveal>
          </div>
        </div>
      </Container>
    </section>
  )
}
