import type { Metadata } from 'next'
import { buildMetadata } from '@/lib/metadata'
import { Container } from '@/components/ui/Container'
import { CTASection } from '@/components/sections/CTASection'
import { AnimatedReveal } from '@/components/ui/AnimatedReveal'
import { MarqueeStrip } from '@/components/ui/MarqueeStrip'

export const metadata: Metadata = buildMetadata({
  title: 'Studio',
  description:
    'OBRA is a jersey studio for festivals, artists, creators and culture-led brands. Limited edition football jerseys, from concept to creation.',
})

export default function StudioPage() {
  return (
    <>
      {/* Header */}
      <section
        className="bg-cream text-ink relative tex-grain pt-32 md:pt-40"
        aria-labelledby="studio-heading"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-24 right-0 w-[460px] h-[460px] rounded-full bg-lilac/60 blur-3xl"
        />
        <Container className="relative">
          <div className="pb-16 md:pb-24 grid md:grid-cols-12 gap-10">
            <div className="md:col-span-9">
              <AnimatedReveal>
                <p className="type-tag text-coral mb-6">✶ STUDIO</p>
              </AnimatedReveal>
              <AnimatedReveal delay={0.08}>
                <h1 id="studio-heading" className="type-display">
                  A jersey studio.{' '}
                  <span className="type-serif text-coral normal-case font-normal italic">
                    For the event.
                  </span>
                </h1>
              </AnimatedReveal>
              <AnimatedReveal delay={0.16}>
                <p className="type-lede text-smoke mt-6 max-w-2xl">
                  OBRA designs and manufactures limited edition football jerseys for festivals,
                  artists, creators and culture-led brands.
                </p>
              </AnimatedReveal>
            </div>
          </div>
        </Container>
      </section>

      {/* Statement block: what OBRA is / is not */}
      <section className="bg-paper text-ink relative tex-grain">
        <Container>
          <div className="py-20 md:py-28 grid md:grid-cols-2 gap-6">
            <AnimatedReveal>
              <div className="bg-mint text-ink rounded-3xl p-8 md:p-10 h-full tex-grain relative overflow-hidden">
                <p className="type-tag mb-6">OBRA IS</p>
                <ul className="space-y-3 type-lede">
                  <li>— A jersey studio</li>
                  <li>— Specialist in limited edition product</li>
                  <li>— Plugged into the event</li>
                  <li>— A small dedicated department</li>
                  <li>— Designed to make things people keep</li>
                </ul>
              </div>
            </AnimatedReveal>

            <AnimatedReveal delay={0.08}>
              <div className="bg-ink text-cream on-dark rounded-3xl p-8 md:p-10 h-full tex-grain relative overflow-hidden">
                <p className="type-tag text-sun mb-6">OBRA IS NOT</p>
                <ul className="space-y-3 type-lede text-cream/85">
                  <li>— A merch agency</li>
                  <li>— A printer of blanks</li>
                  <li>— A stealth consultancy</li>
                  <li>— A fashion brand</li>
                  <li>— A football club supplier</li>
                </ul>
              </div>
            </AnimatedReveal>
          </div>
        </Container>
      </section>

      <MarqueeStrip
        tone="sun"
        size="lg"
        items={[
          'DEPARTMENT OBRA',
          'HAMPSHIRE',
          'GLOBAL REACH',
          'LIMITED EDITION',
          'CONCEPT TO CREATION',
        ]}
      />

      {/* Operating model + contact */}
      <section className="bg-cream text-ink relative tex-grain">
        <Container>
          <div className="py-20 md:py-28 grid md:grid-cols-12 gap-10">
            <div className="md:col-span-7">
              <AnimatedReveal>
                <p className="type-tag text-sea mb-6">✶ DEPARTMENT OBRA</p>
              </AnimatedReveal>
              <AnimatedReveal delay={0.08}>
                <h2 className="type-chapter mb-6">
                  A small dedicated jersey department, plugged into the event.
                </h2>
              </AnimatedReveal>
              <AnimatedReveal delay={0.16}>
                <div className="space-y-5 type-body text-smoke max-w-xl">
                  <p>
                    OBRA runs lean by design. One studio. Specialists added
                    when the project needs them.
                  </p>
                  <p>
                    Department OBRA sits beside the client&apos;s brand team, event team or
                    creative team — without adding more handoffs.
                  </p>
                  <p className="text-ink">
                    The client gets the department without building one.
                  </p>
                </div>
              </AnimatedReveal>
            </div>

            <AnimatedReveal delay={0.18} className="md:col-span-5">
              <div className="bg-bone border border-ink/10 rounded-3xl p-6 md:p-8">
                <p className="type-tag text-smoke mb-6">CONTACT</p>

                <div className="space-y-5">
                  <div>
                    <p className="type-tag text-dust mb-2">BASED</p>
                    <p className="type-body text-ink">Hampshire, UK</p>
                  </div>
                  <div>
                    <p className="type-tag text-dust mb-2">REACH</p>
                    <p className="type-body text-ink">Global</p>
                  </div>
                </div>

                <hr className="my-6 border-ink/10" />

                <div className="space-y-3">
                  <a
                    href="mailto:hello@obra.studio"
                    className="block type-body text-ink hover:text-ember transition-colors"
                  >
                    <span className="type-tag text-smoke block mb-1">EMAIL</span>
                    hello@obra.studio
                  </a>
                  <a
                    href="https://instagram.com/obrajersey"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block type-body text-ink hover:text-ember transition-colors"
                  >
                    <span className="type-tag text-smoke block mb-1">INSTAGRAM</span>
                    @obrajersey
                  </a>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block type-body text-ink hover:text-ember transition-colors"
                  >
                    <span className="type-tag text-smoke block mb-1">LINKEDIN</span>
                    OBRA Studio
                  </a>
                </div>
              </div>
            </AnimatedReveal>
          </div>
        </Container>
      </section>

      <CTASection tone="coral" />
    </>
  )
}
