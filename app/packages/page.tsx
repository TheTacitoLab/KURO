import type { Metadata } from 'next'
import { buildMetadata } from '@/lib/metadata'
import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'
import { PackageCard } from '@/components/sections/PackageCard'
import { ComparisonTable } from '@/components/sections/ComparisonTable'
import { CTASection } from '@/components/sections/CTASection'
import { AnimatedReveal } from '@/components/ui/AnimatedReveal'
import { MarqueeStrip } from '@/components/ui/MarqueeStrip'

export const metadata: Metadata = buildMetadata({
  title: 'Packages',
  description:
    'Three ways to work with KURO. Start with the jersey. Add as much of the chain as needed.',
})

const madeIncludes = [
  'Creative direction and concept development',
  '3D mockups and design iterations',
  'Technical artwork and production specification',
  'Physical sample',
  'Full production run, retail-grade construction',
  'Quality control and packaging',
  'Delivery to client address',
]

const madeSellIncludes = [
  'Everything in MADE',
  "Branded Shopify storefront, built in the event's identity",
  'Product photography, lifestyle and flat-lay',
  'Pre-order, drop, or stock-and-ship configuration',
  'Payment, currency and tax handling',
  'Storefront management through the event window',
  'Sales reporting and performance updates',
  'Post-event close-out or handover',
]

const madeShipIncludes = [
  'Everything in MADE + SELL',
  'Global fulfilment from regional hubs',
  'Branded packaging and dispatch materials',
  "Customer service, white-labelled in the event's brand",
  'Returns processing and refund handling',
  'Customs, duties and tax management',
  'Inventory storage post-event',
  'Reverse logistics and unsold stock handling',
]

const howToChoose = [
  { q: 'Already have a store?', a: 'Start with MADE.', tone: 'coral' },
  { q: 'Need the drop sold through a dedicated site?', a: 'Look at MADE + SELL.', tone: 'sea' },
  { q: 'Need the full chain handled?', a: 'Look at MADE + SELL + SHIP.', tone: 'olive' },
]

export default function PackagesPage() {
  return (
    <>
      {/* Header */}
      <section
        className="bg-cream text-ink relative tex-grain pt-32 md:pt-40"
        aria-labelledby="packages-page-heading"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-20 right-0 w-[480px] h-[480px] rounded-full bg-sun/60 blur-3xl"
        />
        <Container className="relative">
          <div className="pb-16 md:pb-24 grid md:grid-cols-12 gap-10">
            <div className="md:col-span-8">
              <AnimatedReveal>
                <p className="type-tag text-coral mb-6">✶ PACKAGES</p>
              </AnimatedReveal>
              <AnimatedReveal delay={0.08}>
                <h1 id="packages-page-heading" className="type-display">
                  Three ways to work{' '}
                  <span className="type-serif text-ember normal-case font-normal italic">
                    with KURO.
                  </span>
                </h1>
              </AnimatedReveal>
              <AnimatedReveal delay={0.16}>
                <p className="type-lede text-smoke mt-6 max-w-xl">
                  Start with the jersey. Add as much of the chain as needed.
                </p>
              </AnimatedReveal>
            </div>

            <AnimatedReveal delay={0.22} className="md:col-span-4">
              <div className="bg-bone border border-ink/10 rounded-2xl p-6">
                <p className="type-tag text-smoke mb-3">DEPARTMENT KURO</p>
                <p className="type-body text-ink/80">
                  Department KURO can sit beside the client&apos;s team as much or as
                  little as the project needs.
                </p>
              </div>
            </AnimatedReveal>
          </div>
        </Container>
      </section>

      {/* Package cards */}
      <section className="bg-paper text-ink relative tex-grain" aria-label="Package details">
        <Container>
          <div className="py-20 md:py-28">
            <AnimatedReveal>
              <p className="type-tag text-sea mb-8">✶ DETAIL</p>
            </AnimatedReveal>
            <div className="grid md:grid-cols-3 gap-6">
              <AnimatedReveal>
                <PackageCard
                  number="01"
                  name="MADE"
                  tagline="Designed. Made. Delivered."
                  description="Design and manufacture. KURO delivers finished jerseys. Client takes it from there."
                  status="available"
                  statusLabel="AVAILABLE NOW"
                  includes={madeIncludes}
                  ctaLabel="Start a brief"
                  ctaHref="/brief"
                  tone="coral"
                />
              </AnimatedReveal>
              <AnimatedReveal delay={0.08}>
                <PackageCard
                  number="02"
                  name="MADE + SELL"
                  tagline="Designed. Made. Sold."
                  description="Everything in MADE, plus the storefront. Built and managed in the event's brand."
                  status="soon"
                  statusLabel="COMING SOON"
                  includes={madeSellIncludes}
                  ctaLabel="Join the waitlist"
                  ctaHref="/brief"
                  tone="sea"
                />
              </AnimatedReveal>
              <AnimatedReveal delay={0.16}>
                <PackageCard
                  number="03"
                  name="MADE + SELL + SHIP"
                  tagline="Designed. Made. Sold. Shipped."
                  description="The full chain. One contract. One contact. One delivered outcome."
                  status="soon"
                  statusLabel="COMING SOON"
                  includes={madeShipIncludes}
                  ctaLabel="Join the waitlist"
                  ctaHref="/brief"
                  tone="olive"
                />
              </AnimatedReveal>
            </div>
          </div>
        </Container>
      </section>

      <MarqueeStrip
        tone="coral"
        size="lg"
        items={['MADE', 'MADE + SELL', 'MADE + SELL + SHIP']}
      />

      {/* Comparison table */}
      <section className="bg-cream text-ink relative tex-grain">
        <Container>
          <div className="py-20 md:py-28">
            <div className="grid md:grid-cols-12 gap-8 mb-10">
              <div className="md:col-span-8">
                <AnimatedReveal>
                  <p className="type-tag text-olive mb-6">✶ COMPARISON</p>
                </AnimatedReveal>
                <AnimatedReveal delay={0.08}>
                  <h2 className="type-chapter">What sits inside each package.</h2>
                </AnimatedReveal>
              </div>
            </div>
            <AnimatedReveal delay={0.14}>
              <ComparisonTable />
            </AnimatedReveal>
          </div>
        </Container>
      </section>

      {/* How to choose */}
      <section
        className="bg-paper text-ink relative tex-grain"
        aria-labelledby="how-to-choose"
      >
        <Container>
          <div className="py-20 md:py-28 grid md:grid-cols-12 gap-10">
            <div className="md:col-span-5">
              <AnimatedReveal>
                <p className="type-tag text-coral mb-6">✶ HOW TO CHOOSE</p>
              </AnimatedReveal>
              <AnimatedReveal delay={0.08}>
                <h2 id="how-to-choose" className="type-display">
                  Where does the project sit?
                </h2>
              </AnimatedReveal>
              <AnimatedReveal delay={0.18}>
                <p className="type-body text-smoke mt-6 max-w-md">
                  Not sure? Tell KURO about the event. KURO will point to the package.
                </p>
                <div className="mt-6">
                  <Button href="/brief" variant="primary" size="lg">
                    Start a brief →
                  </Button>
                </div>
              </AnimatedReveal>
            </div>

            <div className="md:col-span-7 space-y-4">
              {howToChoose.map(({ q, a, tone }, i) => (
                <AnimatedReveal key={q} delay={0.06 * i}>
                  <div
                    className={`relative rounded-2xl p-6 md:p-8 tex-grain ${
                      tone === 'coral'
                        ? 'bg-coral text-cream'
                        : tone === 'sea'
                        ? 'bg-sea text-cream'
                        : 'bg-olive text-cream'
                    }`}
                  >
                    <p className="type-tag opacity-80 mb-3">Q.0{i + 1}</p>
                    <p className="type-headline mb-3">{q}</p>
                    <p className="type-body opacity-90">→ {a}</p>
                  </div>
                </AnimatedReveal>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <CTASection
        tone="coral"
        headline="One brief. One reply. The right package."
      />
    </>
  )
}
