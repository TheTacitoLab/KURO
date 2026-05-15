import type { Metadata } from 'next'
import { buildMetadata } from '@/lib/metadata'
import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'
import { Rule } from '@/components/ui/Rule'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { Button } from '@/components/ui/Button'
import { PackageCard } from '@/components/sections/PackageCard'
import { ComparisonTable } from '@/components/sections/ComparisonTable'
import { CTASection } from '@/components/sections/CTASection'

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
  {
    question: 'Do you already have a store?',
    answer: 'Start with MADE.',
  },
  {
    question: 'Do you need the drop sold through a dedicated site?',
    answer: 'Look at MADE + SELL.',
  },
  {
    question: 'Do you need the full chain handled?',
    answer: 'Look at MADE + SELL + SHIP.',
  },
]

export default function PackagesPage() {
  return (
    <>
      {/* Header */}
      <Section className="border-b border-[#DDDDDD]">
        <Container>
          <SectionLabel>Packages</SectionLabel>
          <Rule weight="heavy" className="mb-10 md:mb-14" />
          <h1 className="type-chapter text-[#111111] mb-6 max-w-2xl">
            Three ways to work with KURO.
          </h1>
          <p className="type-lede text-[#777777] max-w-xl mb-8">
            Start with the jersey. Add as much of the chain as needed.
          </p>
          <Rule weight="hair" className="mb-8 max-w-xs" />
          <p className="type-label text-[#777777]">Department KURO</p>
          <p className="type-body text-[#4A4A4A] mt-2 max-w-lg">
            Department KURO can sit beside the client&apos;s team as much or as little as
            the project needs.
          </p>
        </Container>
      </Section>

      {/* Comparison table */}
      <Section>
        <Container>
          <SectionLabel>Comparison</SectionLabel>
          <Rule weight="heavy" className="mb-10 md:mb-14" />
          <ComparisonTable />
        </Container>
      </Section>

      <Rule weight="hair" />

      {/* Packages */}
      <Section>
        <Container>
          <SectionLabel>Packages</SectionLabel>
          <Rule weight="heavy" className="mb-10 md:mb-14" />

          <div className="grid md:grid-cols-3 gap-6">
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
          </div>
        </Container>
      </Section>

      <Rule weight="hair" />

      {/* How to choose */}
      <Section>
        <Container>
          <SectionLabel>How to choose</SectionLabel>
          <Rule weight="heavy" className="mb-10 md:mb-14" />

          <div className="md:grid md:grid-cols-2 md:gap-24">
            <h2 className="type-chapter text-[#111111] mb-10 md:mb-0">
              How to choose.
            </h2>

            <div className="space-y-0 divide-y divide-[#DDDDDD]">
              {howToChoose.map(({ question, answer }) => (
                <div key={question} className="py-8">
                  <p className="type-body text-[#777777] mb-2">{question}</p>
                  <p className="type-label text-[#111111]">{answer}</p>
                </div>
              ))}

              <div className="py-8">
                <p className="type-body text-[#4A4A4A]">
                  Not sure? Tell KURO about the event. KURO will point to the package.
                </p>
                <div className="mt-6">
                  <Button href="/brief" variant="primary">
                    Start a brief
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <CTASection />
    </>
  )
}
