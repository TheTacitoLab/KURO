import type { Metadata } from 'next'
import { buildMetadata } from '@/lib/metadata'
import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'
import { ProcessTimeline } from '@/components/sections/ProcessTimeline'
import { SpecList } from '@/components/ui/SpecList'
import { CTASection } from '@/components/sections/CTASection'
import { AnimatedReveal } from '@/components/ui/AnimatedReveal'
import { MarqueeStrip } from '@/components/ui/MarqueeStrip'

export const metadata: Metadata = buildMetadata({
  title: 'Process',
  description:
    'Six stages. Brief to ship. How KURO runs a project from discovery to close.',
})

const timelineSpec = [
  { label: 'Discovery to brief', value: 'Within 7 days' },
  { label: 'Design rounds', value: '2 – 3 weeks' },
  { label: 'Sample turnaround', value: '10 – 14 days' },
  { label: 'Production', value: '3 – 6 weeks' },
  { label: 'Total standard run', value: '6 – 10 weeks from approved brief' },
  { label: 'Rush capacity', value: '4 weeks · premium applied' },
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
      <section
        className="bg-cream text-ink relative tex-grain pt-32 md:pt-40"
        aria-labelledby="process-page-heading"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-20 -left-20 w-[480px] h-[480px] rounded-full bg-mint/60 blur-3xl"
        />
        <Container className="relative">
          <div className="pb-16 md:pb-24 grid md:grid-cols-12 gap-10">
            <div className="md:col-span-8">
              <AnimatedReveal>
                <p className="type-tag text-sea mb-6">✶ PROCESS</p>
              </AnimatedReveal>
              <AnimatedReveal delay={0.08}>
                <h1 id="process-page-heading" className="type-display">
                  Brief.{' '}
                  <span className="type-serif text-sea normal-case font-normal italic">
                    to
                  </span>{' '}
                  ship.
                </h1>
              </AnimatedReveal>
              <AnimatedReveal delay={0.16}>
                <p className="type-lede text-smoke mt-6 max-w-xl">
                  Six stages. Always the same. Department KURO runs the whole chain.
                </p>
              </AnimatedReveal>
            </div>
          </div>
        </Container>
      </section>

      {/* Timeline */}
      <section className="bg-paper text-ink relative tex-grain" aria-label="Project stages">
        <Container>
          <div className="py-20 md:py-28">
            <AnimatedReveal>
              <p className="type-tag text-coral mb-8">✶ STAGES / 01 – 06</p>
            </AnimatedReveal>
            <AnimatedReveal delay={0.08}>
              <ProcessTimeline />
            </AnimatedReveal>
          </div>
        </Container>
      </section>

      <MarqueeStrip
        tone="sea"
        size="lg"
        items={[
          'DISCOVERY',
          'DESIGN',
          'PRODUCTION',
          'COMMERCE',
          'DELIVERY',
          'CLOSE',
        ]}
      />

      {/* Spec + requirements */}
      <section
        className="bg-cream text-ink relative tex-grain"
        aria-label="Timeline and requirements"
      >
        <Container>
          <div className="py-20 md:py-28 grid md:grid-cols-12 gap-10">
            <div className="md:col-span-6">
              <AnimatedReveal>
                <p className="type-tag text-olive mb-6">✶ TIMING</p>
              </AnimatedReveal>
              <AnimatedReveal delay={0.08}>
                <h2 className="type-chapter mb-10">Timeline spec.</h2>
              </AnimatedReveal>
              <AnimatedReveal delay={0.14}>
                <div className="bg-bone border border-ink/10 rounded-2xl p-6 md:p-8">
                  <SpecList items={timelineSpec} />
                </div>
              </AnimatedReveal>
            </div>

            <div className="md:col-span-6">
              <AnimatedReveal>
                <p className="type-tag text-coral mb-6">✶ REQUIREMENTS</p>
              </AnimatedReveal>
              <AnimatedReveal delay={0.08}>
                <h2 className="type-chapter mb-10">What KURO needs to start.</h2>
              </AnimatedReveal>
              <AnimatedReveal delay={0.14}>
                <ul className="space-y-3 mb-10">
                  {toStart.map((item, i) => (
                    <li
                      key={item}
                      className="flex items-start gap-4 bg-bone border border-ink/10 rounded-xl px-5 py-4"
                    >
                      <span
                        className="type-tag bg-ink text-cream px-2 py-1 rounded-full shrink-0 mt-0.5"
                        aria-hidden="true"
                      >
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <span className="type-body text-ink">{item}</span>
                    </li>
                  ))}
                </ul>
              </AnimatedReveal>

              <AnimatedReveal delay={0.2}>
                <div className="bg-sun text-ink rounded-2xl p-6 md:p-8 tex-grain">
                  <p className="type-tag mb-3">READY?</p>
                  <p className="type-headline mb-6">Send a brief. Get a reply.</p>
                  <Button href="/brief" variant="primary" size="lg">
                    Start a brief →
                  </Button>
                </div>
              </AnimatedReveal>
            </div>
          </div>
        </Container>
      </section>

      <CTASection tone="sun" />
    </>
  )
}
