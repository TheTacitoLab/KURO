import type { Metadata } from 'next'
import { buildMetadata } from '@/lib/metadata'
import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'
import { Rule } from '@/components/ui/Rule'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { Button } from '@/components/ui/Button'
import { ProcessTimeline } from '@/components/sections/ProcessTimeline'
import { SpecList } from '@/components/ui/SpecList'
import { CTASection } from '@/components/sections/CTASection'

export const metadata: Metadata = buildMetadata({
  title: 'Process',
  description:
    'Six stages. Brief to ship. Always the same. How KURO runs a project from discovery to close.',
})

const timelineSpec = [
  { label: 'Discovery to signed brief', value: 'Within 7 days' },
  { label: 'Design rounds', value: '2 to 3 weeks' },
  { label: 'Sample turnaround', value: '10 to 14 days' },
  { label: 'Production', value: '3 to 6 weeks' },
  { label: 'Total standard run', value: '6 to 10 weeks from approved brief' },
  { label: 'Rush capacity', value: '4 weeks. Premium applied.' },
]

const toStart = [
  'A creative brief or direction',
  'Brand assets',
  'Volume',
  'Target date',
  'Ship-to location',
]

export default function ProcessPage() {
  return (
    <>
      {/* Header */}
      <Section className="border-b border-[#DDDDDD]">
        <Container>
          <SectionLabel>Process</SectionLabel>
          <Rule weight="heavy" className="mb-10 md:mb-14" />
          <h1 className="type-chapter text-[#111111] mb-6 max-w-2xl">
            How KURO runs a project.
          </h1>
          <p className="type-lede text-[#777777] max-w-xl mb-8">
            Six stages. Brief to ship. Always the same.
          </p>
          <Rule weight="hair" className="mb-8 max-w-xs" />
          <p className="type-label text-[#777777]">Department KURO</p>
          <p className="type-body text-[#4A4A4A] mt-2 max-w-lg">
            Department KURO gives the client a small dedicated unit for the whole jersey chain.
          </p>
        </Container>
      </Section>

      {/* Timeline */}
      <Section>
        <Container>
          <SectionLabel>Stages</SectionLabel>
          <Rule weight="heavy" className="mb-2" />
          <ProcessTimeline />
        </Container>
      </Section>

      <Rule weight="hair" />

      {/* Spec table */}
      <Section>
        <Container>
          <div className="md:grid md:grid-cols-2 md:gap-24">
            <div>
              <SectionLabel>Timeline</SectionLabel>
              <Rule weight="heavy" className="mb-10 md:mb-14" />
              <h2 className="type-chapter text-[#111111] mb-10">
                Timeline spec.
              </h2>
              <SpecList items={timelineSpec} />
            </div>

            <div className="mt-16 md:mt-0">
              <SectionLabel>Requirements</SectionLabel>
              <Rule weight="heavy" className="mb-10 md:mb-14" />
              <h2 className="type-lede text-[#111111] mb-8">
                What KURO needs to start.
              </h2>
              <ul className="space-y-3">
                {toStart.map((item) => (
                  <li key={item} className="flex items-start gap-4">
                    <span
                      className="inline-block w-2 h-2 bg-[#111111] mt-2 shrink-0"
                      aria-hidden="true"
                    />
                    <span className="type-body text-[#4A4A4A]">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-12 border-t border-[#DDDDDD] pt-10">
                <p className="type-lede text-[#111111] mb-6">Ready to start?</p>
                <Button href="/brief" variant="primary">
                  Start a brief
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <CTASection />
    </>
  )
}
