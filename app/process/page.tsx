import type { Metadata } from 'next'
import { buildMetadata } from '@/lib/metadata'
import { Container } from '@/components/ui/Container'
import { Rule } from '@/components/ui/Rule'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { Button } from '@/components/ui/Button'
import { ProcessTimeline } from '@/components/sections/ProcessTimeline'
import { SpecList } from '@/components/ui/SpecList'
import { CTASection } from '@/components/sections/CTASection'
import { AnimatedReveal } from '@/components/ui/AnimatedReveal'

export const metadata: Metadata = buildMetadata({
  title: 'Process',
  description:
    'Six stages. Brief to ship. Always the same. How KURO runs a project from discovery to close.',
})

const timelineSpec = [
  { label: 'Discovery to brief', value: 'Within 7 days' },
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
      <section className="bg-black border-b border-ash" aria-labelledby="process-page-heading">
        <Container>
          <div className="py-20 md:py-28">
            <AnimatedReveal>
              <SectionLabel>Process</SectionLabel>
              <Rule weight="heavy" className="mb-10 md:mb-14" />
            </AnimatedReveal>
            <AnimatedReveal delay={0.1}>
              <h1
                id="process-page-heading"
                className="type-chapter text-white mb-5 max-w-2xl"
              >
                How KURO runs a project.
              </h1>
            </AnimatedReveal>
            <AnimatedReveal delay={0.18}>
              <p className="type-lede text-mute max-w-xl mb-8">
                Six stages. Brief to ship. Always the same.
              </p>
            </AnimatedReveal>
            <AnimatedReveal delay={0.24}>
              <Rule weight="hair" className="mb-6 max-w-xs" />
              <p className="type-label text-ash mb-2">Department KURO</p>
              <p className="type-body text-mute max-w-lg">
                Department KURO gives the client a dedicated operating unit for the
                jersey chain.
              </p>
            </AnimatedReveal>
          </div>
        </Container>
      </section>

      {/* Timeline */}
      <section className="bg-ink border-b border-ash" aria-label="Project stages">
        <Container>
          <div className="py-20 md:py-28">
            <AnimatedReveal>
              <SectionLabel>Stages</SectionLabel>
              <Rule weight="hair" className="mb-2" />
            </AnimatedReveal>
            <AnimatedReveal delay={0.1}>
              <ProcessTimeline />
            </AnimatedReveal>
          </div>
        </Container>
      </section>

      {/* Spec + requirements */}
      <section className="bg-graphite border-b border-ash" aria-label="Timeline and requirements">
        <Container>
          <div className="py-20 md:py-28">
            <div className="md:grid md:grid-cols-2 md:gap-24">
              <div>
                <AnimatedReveal>
                  <SectionLabel>Timeline</SectionLabel>
                  <Rule weight="hair" className="mb-10 md:mb-14" />
                  <h2 className="type-chapter text-white mb-10">Timeline spec.</h2>
                </AnimatedReveal>
                <AnimatedReveal delay={0.1}>
                  <SpecList items={timelineSpec} />
                </AnimatedReveal>
              </div>

              <div className="mt-16 md:mt-0">
                <AnimatedReveal>
                  <SectionLabel>Requirements</SectionLabel>
                  <Rule weight="hair" className="mb-10 md:mb-14" />
                  <h2 className="type-lede text-white mb-8">
                    What KURO needs to start.
                  </h2>
                </AnimatedReveal>
                <AnimatedReveal delay={0.1}>
                  <ul className="space-y-4">
                    {toStart.map((item) => (
                      <li key={item} className="flex items-start gap-4">
                        <span
                          className="inline-block w-1.5 h-1.5 bg-mute mt-2 shrink-0"
                          aria-hidden="true"
                        />
                        <span className="type-body text-mute">{item}</span>
                      </li>
                    ))}
                  </ul>
                </AnimatedReveal>

                <AnimatedReveal delay={0.18}>
                  <div className="mt-12 pt-10 border-t border-ash">
                    <p className="type-lede text-white mb-6">Ready to start?</p>
                    <Button href="/brief" variant="primary">
                      Start a brief
                    </Button>
                  </div>
                </AnimatedReveal>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <CTASection />
    </>
  )
}
