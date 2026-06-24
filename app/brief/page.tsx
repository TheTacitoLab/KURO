import type { Metadata } from 'next'
import { buildMetadata } from '@/lib/metadata'
import { Container } from '@/components/ui/Container'
import { BriefForm } from '@/components/forms/BriefForm'
import { AnimatedReveal } from '@/components/ui/AnimatedReveal'

export const metadata: Metadata = buildMetadata({
  title: 'Start a brief',
  description:
    'Tell OBRA about your drop. One short form. Reply within two working days.',
})

export default function BriefPage() {
  return (
    <section
      className="bg-cream text-ink relative tex-grain min-h-screen pt-32 md:pt-40 pb-24 md:pb-32"
      aria-labelledby="brief-heading"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-20 right-0 w-[520px] h-[520px] rounded-full bg-sun/60 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 -left-32 w-[420px] h-[420px] rounded-full bg-coral/30 blur-3xl"
      />

      <Container className="relative">
        <div className="grid md:grid-cols-12 gap-12 md:gap-16">
          {/* Left: pitch */}
          <div className="md:col-span-5 md:sticky md:top-32 md:self-start">
            <AnimatedReveal>
              <p className="type-tag text-coral mb-6">✶ START A BRIEF</p>
            </AnimatedReveal>
            <AnimatedReveal delay={0.08}>
              <h1 id="brief-heading" className="type-display">
                Tell OBRA{' '}
                <span className="type-serif text-ember normal-case font-normal italic">
                  about
                </span>{' '}
                your drop.
              </h1>
            </AnimatedReveal>
            <AnimatedReveal delay={0.16}>
              <p className="type-lede text-smoke mt-6">
                One short form. Reply within two working days.
              </p>
            </AnimatedReveal>

            <AnimatedReveal delay={0.22}>
              <div className="mt-10 bg-bone border border-ink/10 rounded-2xl p-6">
                <p className="type-tag text-smoke mb-3">DEPARTMENT OBRA</p>
                <p className="type-body text-ink/80">
                  A dedicated jersey department for the event. Starts here.
                </p>
              </div>
            </AnimatedReveal>

            <AnimatedReveal delay={0.28}>
              <div className="mt-6 space-y-2">
                <a
                  href="mailto:hello@obra.studio"
                  className="type-body text-ink hover:text-ember transition-colors block"
                >
                  hello@obra.studio
                </a>
                <a
                  href="https://instagram.com/obrajersey"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="type-body text-smoke hover:text-ink transition-colors block"
                >
                  @obrajersey
                </a>
              </div>
            </AnimatedReveal>
          </div>

          {/* Right: form */}
          <div className="md:col-span-7">
            <AnimatedReveal delay={0.16}>
              <BriefForm />
            </AnimatedReveal>
          </div>
        </div>
      </Container>
    </section>
  )
}
