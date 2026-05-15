import type { Metadata } from 'next'
import { buildMetadata } from '@/lib/metadata'
import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'
import { Rule } from '@/components/ui/Rule'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { BriefForm } from '@/components/forms/BriefForm'

export const metadata: Metadata = buildMetadata({
  title: 'Start a brief',
  description:
    'Tell KURO about the event. One short form. Reply within two working days.',
})

export default function BriefPage() {
  return (
    <Section>
      <Container>
        <SectionLabel>Brief</SectionLabel>
        <Rule weight="heavy" className="mb-10 md:mb-14" />

        <div className="md:grid md:grid-cols-2 md:gap-24">
          <div>
            <h1 className="type-chapter text-[#111111] mb-4">
              Tell KURO about the event.
            </h1>
            <p className="type-lede text-[#777777] mb-6">
              One short form. Reply within two working days.
            </p>
            <Rule weight="hair" className="mb-6 max-w-xs" />
            <p className="type-label text-[#777777]">Department KURO starts here.</p>
          </div>
        </div>

        <div className="mt-12 md:mt-16 md:max-w-xl">
          <BriefForm />
        </div>
      </Container>
    </Section>
  )
}
