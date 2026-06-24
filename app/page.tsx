import type { Metadata } from 'next'
import { buildMetadata } from '@/lib/metadata'
import { HeroSection } from '@/components/sections/HeroSection'
import { CTASection } from '@/components/sections/CTASection'
import { AnimatedReveal } from '@/components/ui/AnimatedReveal'
import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'
import { MarqueeStrip } from '@/components/ui/MarqueeStrip'

export const metadata: Metadata = buildMetadata({
  title: 'OBRA — Limited Edition Football Jerseys',
  description:
    'OBRA creates limited edition football jerseys for festivals, artists, creators and culture-led brands. From concept to creation.',
})

const deliverables = [
  'Design concept',
  'Artwork direction',
  'Jersey mockups',
  'Tech pack',
  'Sample',
  'Production',
  'Packaging',
]

export default function HomePage() {
  return (
    <>
      {/* 01. HERO */}
      <HeroSection />

      {/* 02. WHO IT'S FOR */}
      <section
        className="bg-paper text-ink relative tex-grain"
        aria-labelledby="who-heading"
      >
        <Container>
          <div className="py-24 md:py-36">
            <AnimatedReveal>
              <p className="type-tag text-coral mb-8">✶ WHO IT'S FOR</p>
            </AnimatedReveal>
            <AnimatedReveal delay={0.08}>
              <h2 id="who-heading" className="type-display max-w-4xl">
                For festivals, artists, creators and culture-led brands{' '}
                <span className="type-serif text-coral normal-case font-normal italic">
                  with a crowd.
                </span>
              </h2>
            </AnimatedReveal>
          </div>
        </Container>
      </section>

      {/* 03. WHAT YOU GET */}
      <section
        className="bg-cream text-ink relative tex-grain"
        aria-labelledby="what-heading"
      >
        <Container>
          <div className="py-24 md:py-36 grid md:grid-cols-12 gap-12 md:gap-16">
            <div className="md:col-span-5 md:sticky md:top-32 md:self-start">
              <AnimatedReveal>
                <p className="type-tag text-sea mb-8">✶ WHAT YOU GET</p>
              </AnimatedReveal>
              <AnimatedReveal delay={0.08}>
                <h2 id="what-heading" className="type-chapter">
                  A full jersey drop, handled in one place.
                </h2>
              </AnimatedReveal>
            </div>

            <AnimatedReveal delay={0.14} className="md:col-span-7">
              <ul aria-label="Deliverables" className="divide-y divide-ink/10">
                {deliverables.map((item, i) => (
                  <li key={item} className="flex items-center gap-6 py-5">
                    <span className="type-tag text-haze shrink-0 w-6">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <span className="type-lede">{item}</span>
                  </li>
                ))}
              </ul>
            </AnimatedReveal>
          </div>
        </Container>
      </section>

      {/* Marquee */}
      <MarqueeStrip
        tone="ink"
        size="lg"
        items={['BRIEF', 'DESIGN', 'MOCKUP', 'SAMPLE', 'PRODUCTION', 'DELIVERY']}
      />

      {/* 04. THE PROCESS */}
      <section
        className="bg-paper text-ink relative tex-grain"
        aria-labelledby="process-heading"
      >
        <Container>
          <div className="py-24 md:py-36 grid md:grid-cols-12 gap-12 items-center">
            <div className="md:col-span-8">
              <AnimatedReveal>
                <p className="type-tag text-olive mb-8">✶ THE PROCESS</p>
              </AnimatedReveal>
              <AnimatedReveal delay={0.08}>
                <h2 id="process-heading" className="type-display">
                  Brief. Design. Mockup. Sample. Production.{' '}
                  <span className="type-serif text-olive normal-case font-normal italic">
                    Delivery.
                  </span>
                </h2>
              </AnimatedReveal>
            </div>

            <AnimatedReveal delay={0.18} className="md:col-span-4">
              <p className="type-lede text-smoke mb-8">
                A clear process from first idea to finished product.
              </p>
              <Button href="/process" variant="secondary" size="lg">
                See the process →
              </Button>
            </AnimatedReveal>
          </div>
        </Container>
      </section>

      {/* 05. WHY OBRA */}
      <section
        className="bg-ink text-cream on-dark relative tex-grain"
        aria-labelledby="why-heading"
      >
        <Container>
          <div className="py-24 md:py-36 grid md:grid-cols-12 gap-12">
            <div className="md:col-span-7">
              <AnimatedReveal>
                <p className="type-tag text-sun mb-8">✶ WHY OBRA</p>
              </AnimatedReveal>
              <AnimatedReveal delay={0.08}>
                <h2 id="why-heading" className="type-display">
                  Not print-on-demand.{' '}
                  <span className="type-serif text-sun normal-case font-normal italic">
                    Not teamwear.
                  </span>
                </h2>
              </AnimatedReveal>
            </div>

            <AnimatedReveal delay={0.18} className="md:col-span-5 md:pt-4">
              <div className="space-y-5">
                <p className="type-lede text-cream/80">
                  This is not print-on-demand, teamwear or a blank shirt with a logo on it.
                </p>
                <p className="type-body text-cream/70">
                  OBRA is a football jersey studio creating unique, retail-ready jerseys
                  designed to tell your story.
                </p>
              </div>
            </AnimatedReveal>
          </div>
        </Container>
      </section>

      {/* 06. CTA */}
      <CTASection
        tone="sun"
        headline="Tell OBRA about your drop."
        subline="One short form. Reply within two working days."
      />
    </>
  )
}
