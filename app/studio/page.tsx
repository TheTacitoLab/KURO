import type { Metadata } from 'next'
import { buildMetadata } from '@/lib/metadata'
import { Container } from '@/components/ui/Container'
import { Rule } from '@/components/ui/Rule'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { CTASection } from '@/components/sections/CTASection'
import { AnimatedReveal } from '@/components/ui/AnimatedReveal'

export const metadata: Metadata = buildMetadata({
  title: 'Studio',
  description:
    'KURO is a black label jersey studio. Two operators. One studio. Specialists added per project.',
})

export default function StudioPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-black border-b border-ash" aria-labelledby="studio-heading">
        <Container>
          <div className="py-20 md:py-28">
            <AnimatedReveal>
              <SectionLabel>Studio</SectionLabel>
              <Rule weight="heavy" className="mb-10 md:mb-14" />
            </AnimatedReveal>
            <AnimatedReveal delay={0.1}>
              <h1 id="studio-heading" className="type-chapter text-white mb-10 max-w-xl">
                The studio.
              </h1>
            </AnimatedReveal>

            <div className="md:grid md:grid-cols-2 md:gap-24">
              <AnimatedReveal delay={0.15}>
                <div className="space-y-4 type-body text-hair">
                  <p>KURO is a black label jersey studio.</p>
                  <p>
                    It designs and manufactures limited edition football jerseys for
                    festivals, tours, brand activations and live events.
                  </p>
                </div>
              </AnimatedReveal>

              <AnimatedReveal delay={0.22}>
                <div className="mt-8 md:mt-0 space-y-4 type-body text-mute">
                  <p>KURO runs lean by design.</p>
                  <p>Two operators. One studio. Specialists added per project.</p>
                </div>
              </AnimatedReveal>
            </div>
          </div>
        </Container>
      </section>

      {/* Model + contact */}
      <section className="bg-ink border-b border-ash" aria-label="Operating model and contact">
        <Container>
          <div className="py-20 md:py-28">
            <div className="md:grid md:grid-cols-2 md:gap-24">
              <div>
                <AnimatedReveal>
                  <Rule weight="hair" className="mb-10 md:mb-14" />
                  <p className="type-label text-mute mb-5">Department KURO</p>
                  <p className="type-body text-hair mb-4">
                    Department KURO is the working model.
                  </p>
                  <p className="type-body text-mute">
                    A small dedicated unit, built to plug into the client&apos;s brand
                    team, event team or creative team.
                  </p>
                </AnimatedReveal>
              </div>

              <div className="mt-10 md:mt-0">
                <AnimatedReveal delay={0.1}>
                  <Rule weight="hair" className="mb-10 md:mb-14" />
                  <div className="space-y-3 mb-8">
                    <p className="type-label text-mute mb-6">Contact</p>
                    <p className="type-body">
                      <span className="type-label text-ash mr-3">Based</span>
                      <span className="text-hair">Hampshire, UK.</span>
                    </p>
                    <p className="type-body">
                      <span className="type-label text-ash mr-3">Reach</span>
                      <span className="text-hair">Global.</span>
                    </p>
                  </div>

                  <div className="space-y-2 pt-8 border-t border-ash">
                    <a
                      href="mailto:hello@deptkuro.com"
                      className="type-label text-mute hover:text-white transition-colors block focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                    >
                      Email. hello@deptkuro.com
                    </a>
                    <a
                      href="https://instagram.com/deptkuro"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="type-label text-mute hover:text-white transition-colors block focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                    >
                      Instagram. @deptkuro
                    </a>
                    <a
                      href="https://linkedin.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="type-label text-mute hover:text-white transition-colors block focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                    >
                      LinkedIn. KURO Studio
                    </a>
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
