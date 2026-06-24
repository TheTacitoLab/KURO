import type { Metadata } from 'next'
import { buildMetadata } from '@/lib/metadata'
import { Container } from '@/components/ui/Container'
import { CTASection } from '@/components/sections/CTASection'
import { AnimatedReveal } from '@/components/ui/AnimatedReveal'
import { MarqueeStrip } from '@/components/ui/MarqueeStrip'

export const metadata: Metadata = buildMetadata({
  title: 'Studio',
  description:
    'KURO is a jersey studio for festivals, tours, brand activations and live events. Two operators. One studio. Specialists added per project.',
})

export default function StudioPage() {
  return (
    <>
      {/* Header */}
      <section
        className="bg-void text-white relative tex-grain pt-32 md:pt-40"
        aria-labelledby="studio-heading"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-24 right-0 w-[460px] h-[460px] rounded-full bg-violet/60 blur-3xl"
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
                  <span className="type-serif text-coral normal-case font-normal">
                    For the event.
                  </span>
                </h1>
              </AnimatedReveal>
              <AnimatedReveal delay={0.16}>
                <p className="type-lede text-ash mt-6 max-w-2xl">
                  KURO designs and manufactures limited edition football jerseys made to
                  remember.
                </p>
              </AnimatedReveal>
            </div>
          </div>
        </Container>
      </section>

      {/* Statement block: what KURO is / is not */}
      <section className="bg-obsidian text-white relative tex-grain">
        <Container>
          <div className="py-20 md:py-28 grid md:grid-cols-2 gap-6">
            <AnimatedReveal>
              <div className="bg-electric text-white rounded-3xl p-8 md:p-10 h-full tex-grain relative overflow-hidden">
                <p className="type-tag mb-6">KURO IS</p>
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
              <div className="bg-obsidian text-white on-dark rounded-3xl p-8 md:p-10 h-full tex-grain relative overflow-hidden border border-line">
                <p className="type-tag text-flare mb-6">KURO IS NOT</p>
                <ul className="space-y-3 type-lede text-white/85">
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
          'DEPARTMENT KURO',
          'HAMPSHIRE',
          'GLOBAL REACH',
          'TWO OPERATORS',
          'SPECIALISTS ADDED PER PROJECT',
        ]}
      />

      {/* Operating model + contact */}
      <section className="bg-void text-white relative tex-grain">
        <Container>
          <div className="py-20 md:py-28 grid md:grid-cols-12 gap-10">
            <div className="md:col-span-7">
              <AnimatedReveal>
                <p className="type-tag text-electric mb-6">✶ DEPARTMENT KURO</p>
              </AnimatedReveal>
              <AnimatedReveal delay={0.08}>
                <h2 className="type-chapter mb-6">
                  A small dedicated jersey department, plugged into the event.
                </h2>
              </AnimatedReveal>
              <AnimatedReveal delay={0.16}>
                <div className="space-y-5 type-body text-ash max-w-xl">
                  <p>
                    KURO runs lean by design. Two operators. One studio. Specialists added
                    when the project needs them.
                  </p>
                  <p>
                    Department KURO sits beside the client&apos;s brand team, event team or
                    creative team — without adding more handoffs.
                  </p>
                  <p className="text-white">
                    The client gets the department without building one.
                  </p>
                </div>
              </AnimatedReveal>
            </div>

            <AnimatedReveal delay={0.18} className="md:col-span-5">
              <div className="bg-slate border border-line rounded-3xl p-6 md:p-8">
                <p className="type-tag text-ash mb-6">CONTACT</p>

                <div className="space-y-5">
                  <div>
                    <p className="type-tag text-mute mb-2">BASED</p>
                    <p className="type-body text-white">Hampshire, UK</p>
                  </div>
                  <div>
                    <p className="type-tag text-mute mb-2">REACH</p>
                    <p className="type-body text-white">Global</p>
                  </div>
                </div>

                <hr className="my-6 border-line" />

                <div className="space-y-3">
                  <a
                    href="mailto:hello@deptkuro.com"
                    className="block type-body text-white hover:text-coral transition-colors"
                  >
                    <span className="type-tag text-ash block mb-1">EMAIL</span>
                    hello@deptkuro.com
                  </a>
                  <a
                    href="https://instagram.com/deptkuro"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block type-body text-white hover:text-coral transition-colors"
                  >
                    <span className="type-tag text-ash block mb-1">INSTAGRAM</span>
                    @deptkuro
                  </a>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block type-body text-white hover:text-coral transition-colors"
                  >
                    <span className="type-tag text-ash block mb-1">LINKEDIN</span>
                    KURO Studio
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
