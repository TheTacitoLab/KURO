import type { Metadata } from 'next'
import { buildMetadata } from '@/lib/metadata'
import { Container } from '@/components/ui/Container'
import { Rule } from '@/components/ui/Rule'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { Button } from '@/components/ui/Button'
import { PackageCard } from '@/components/sections/PackageCard'
import { ComparisonTable } from '@/components/sections/ComparisonTable'
import { CTASection } from '@/components/sections/CTASection'
import { AnimatedReveal } from '@/components/ui/AnimatedReveal'

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
  { q: 'Do you already have a store?', a: 'Start with MADE.' },
  { q: 'Do you need the drop sold through a dedicated site?', a: 'Look at MADE + SELL.' },
  { q: 'Do you need the full chain handled?', a: 'Look at MADE + SELL + SHIP.' },
]

export default function PackagesPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-black border-b border-ash" aria-labelledby="packages-page-heading">
        <Container>
          <div className="py-20 md:py-28">
            <AnimatedReveal>
              <SectionLabel>Packages</SectionLabel>
              <Rule weight="heavy" className="mb-10 md:mb-14" />
            </AnimatedReveal>
            <AnimatedReveal delay={0.1}>
              <h1
                id="packages-page-heading"
                className="type-chapter text-white mb-5 max-w-2xl"
              >
                Three ways to work with KURO.
              </h1>
            </AnimatedReveal>
            <AnimatedReveal delay={0.18}>
              <p className="type-lede text-mute max-w-xl mb-8">
                Start with the jersey. Add as much of the chain as needed.
              </p>
            </AnimatedReveal>
            <AnimatedReveal delay={0.24}>
              <Rule weight="hair" className="mb-6 max-w-xs" />
              <p className="type-label text-ash mb-2">Department KURO</p>
              <p className="type-body text-mute max-w-lg">
                Department KURO can sit beside the client&apos;s team as much or as
                little as the project needs.
              </p>
            </AnimatedReveal>
          </div>
        </Container>
      </section>

      {/* Comparison table */}
      <section className="bg-ink border-b border-ash">
        <Container>
          <div className="py-20 md:py-28">
            <AnimatedReveal>
              <SectionLabel>Comparison</SectionLabel>
              <Rule weight="hair" className="mb-10 md:mb-14" />
            </AnimatedReveal>
            <AnimatedReveal delay={0.1}>
              <ComparisonTable />
            </AnimatedReveal>
          </div>
        </Container>
      </section>

      {/* Package cards */}
      <section className="bg-graphite border-b border-ash" aria-label="Package details">
        <Container>
          <div className="py-20 md:py-28">
            <AnimatedReveal>
              <SectionLabel>Detail</SectionLabel>
              <Rule weight="hair" className="mb-10 md:mb-14" />
            </AnimatedReveal>
            <div className="grid md:grid-cols-3 gap-5">
              <AnimatedReveal>
                <PackageCard
                  number="01"
                  name="MADE"
                  tagline="Designed. Made. Delivered."
                  description="Design and manufacture. KURO delivers finished jerseys. Client takes it from there."
                  status="available"
                  statusLabel="Available now."
                  includes={madeIncludes}
                  ctaLabel="Start a brief"
                  ctaHref="/brief"
                />
              </AnimatedReveal>
              <AnimatedReveal delay={0.1}>
                <PackageCard
                  number="02"
                  name="MADE + SELL"
                  tagline="Designed. Made. Sold."
                  description="Everything in MADE, plus the storefront. Built and managed in the event's brand."
                  status="soon"
                  statusLabel="Coming soon."
                  includes={madeSellIncludes}
                  ctaLabel="Join the waitlist"
                  ctaHref="/brief"
                />
              </AnimatedReveal>
              <AnimatedReveal delay={0.2}>
                <PackageCard
                  number="03"
                  name="MADE + SELL + SHIP"
                  tagline="Designed. Made. Sold. Shipped."
                  description="The full chain. One contract. One contact. One delivered outcome."
                  status="soon"
                  statusLabel="Coming soon."
                  includes={madeShipIncludes}
                  ctaLabel="Join the waitlist"
                  ctaHref="/brief"
                />
              </AnimatedReveal>
            </div>
          </div>
        </Container>
      </section>

      {/* How to choose */}
      <section className="bg-ink border-b border-ash" aria-labelledby="how-to-choose">
        <Container>
          <div className="py-20 md:py-28">
            <AnimatedReveal>
              <SectionLabel>How to choose</SectionLabel>
              <Rule weight="hair" className="mb-10 md:mb-14" />
            </AnimatedReveal>

            <div className="md:grid md:grid-cols-2 md:gap-24">
              <AnimatedReveal>
                <h2
                  id="how-to-choose"
                  className="type-chapter text-white mb-10 md:mb-0"
                >
                  How to choose.
                </h2>
              </AnimatedReveal>

              <div>
                <div className="space-y-0 divide-y divide-ash">
                  {howToChoose.map(({ q, a }, i) => (
                    <AnimatedReveal key={q} delay={0.06 * i}>
                      <div className="py-7">
                        <p className="type-body text-mute mb-2">{q}</p>
                        <p className="type-label text-white">{a}</p>
                      </div>
                    </AnimatedReveal>
                  ))}

                  <AnimatedReveal delay={0.2}>
                    <div className="py-7">
                      <p className="type-body text-mute mb-6">
                        Not sure where the project fits? Tell KURO about the event. KURO
                        will point to the package.
                      </p>
                      <Button href="/brief" variant="primary">
                        Start a brief
                      </Button>
                    </div>
                  </AnimatedReveal>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <CTASection />
    </>
  )
}
