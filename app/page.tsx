import type { Metadata } from 'next'
import { buildMetadata } from '@/lib/metadata'
import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'
import { Rule } from '@/components/ui/Rule'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { Button } from '@/components/ui/Button'
import { MetadataLine } from '@/components/ui/MetadataLine'
import { ImagePlaceholder } from '@/components/ui/ImagePlaceholder'
import { CTASection } from '@/components/sections/CTASection'

export const metadata: Metadata = buildMetadata({
  title: 'KURO — Black Label Jersey Studio',
  description:
    'Limited edition football jerseys made to remember. Designed and manufactured for festivals, tours, brand activations and live events.',
})

export default function HomePage() {
  return (
    <>
      {/* 01. Hero */}
      <section className="min-h-[90vh] flex flex-col justify-center border-b border-[#DDDDDD]" aria-label="Hero">
        <Container>
          <div className="py-20 md:py-28">
            <MetadataLine
              items={['BLACK LABEL JERSEY STUDIO', 'DEPARTMENT KURO', 'EST. 2026']}
              className="mb-10 md:mb-14"
            />

            <h1 className="type-display text-[#111111] mb-8 md:mb-12">
              KURO
            </h1>

            <Rule weight="hair" className="mb-8 md:mb-12 max-w-xs" />

            <p className="type-lede text-[#111111] max-w-xl mb-4">
              Limited edition football jerseys made to remember.
            </p>
            <p className="type-body text-[#777777] max-w-lg mb-12 md:mb-16">
              For festivals, tours, brand activations and live events.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button href="/brief" variant="primary">
                Start a brief
              </Button>
            </div>

            <p className="type-label text-[#DDDDDD] mt-12">
              A dedicated jersey department, plugged into the event.
            </p>
          </div>
        </Container>
      </section>

      {/* 02. Positioning */}
      <Section>
        <Container>
          <div className="md:grid md:grid-cols-2 md:gap-24">
            <div>
              <SectionLabel number="02">Positioning</SectionLabel>
              <Rule weight="heavy" className="mb-10 md:mb-14" />
              <p className="type-lede text-[#111111] mb-8">
                KURO is the invisible partner behind the jersey.
              </p>
              <p className="type-body text-[#777777] mb-4">
                Studio, supply chain, infrastructure.
              </p>
              <p className="type-body text-[#777777]">
                Plugged into the event, working in the brand.
              </p>
            </div>
            <div className="mt-12 md:mt-0">
              <p className="type-label text-[#777777] mb-6">Department KURO</p>
              <p className="type-body text-[#4A4A4A] mb-4">
                Department KURO is the operating model.
              </p>
              <p className="type-body text-[#777777]">
                A small dedicated unit for limited edition jerseys. Built to sit beside the
                event team, brand team or creative team.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      <Rule weight="hair" />

      {/* 03. What KURO makes */}
      <Section>
        <Container>
          <SectionLabel number="03">What KURO makes</SectionLabel>
          <Rule weight="heavy" className="mb-10 md:mb-14" />

          <div className="md:grid md:grid-cols-2 md:gap-24 md:items-start">
            <div className="space-y-0 divide-y divide-[#DDDDDD] mb-12 md:mb-0">
              <h2 className="type-chapter text-[#111111] pb-10">
                What KURO makes.
              </h2>

              <div className="py-8">
                <p className="type-label text-[#777777] mb-3">Limited edition.</p>
                <p className="type-body text-[#4A4A4A]">
                  Every design is unique to the event it belongs to.
                </p>
              </div>

              <div className="py-8">
                <p className="type-label text-[#777777] mb-3">Retail standard.</p>
                <p className="type-body text-[#4A4A4A]">
                  Built to the construction quality of high-end retail. Not printed on blanks.
                </p>
              </div>

              <div className="py-8">
                <p className="type-label text-[#777777] mb-3">Designed for the event.</p>
                <p className="type-body text-[#4A4A4A]">
                  The jersey is the souvenir, the product, and the proof.
                </p>
              </div>
            </div>

            <ImagePlaceholder
              label="JERSEY IMAGE / PLACEHOLDER"
              aspectRatio="aspect-[4/5]"
            />
          </div>
        </Container>
      </Section>

      <Rule weight="hair" />

      {/* 04. Who it is for */}
      <Section>
        <Container>
          <SectionLabel number="04">Who it is for</SectionLabel>
          <Rule weight="heavy" className="mb-10 md:mb-14" />

          <h2 className="type-chapter text-[#111111] mb-12 md:mb-16">
            Who it is for.
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-0 divide-x divide-[#DDDDDD] border border-[#DDDDDD]">
            {['Festivals', 'Tours', 'Brand activations', 'Live events'].map((item) => (
              <div key={item} className="p-6 md:p-8">
                <p className="type-label text-[#111111]">{item}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 md:grid md:grid-cols-2 md:gap-24">
            <p className="type-body text-[#777777]">
              Primary audience: live music and festivals globally.
            </p>
            <p className="type-body text-[#777777] mt-4 md:mt-0">
              Also serves: entertainment IP, sports rights holders and brand teams.
            </p>
          </div>
        </Container>
      </Section>

      <Rule weight="hair" />

      {/* 05. Why KURO */}
      <Section>
        <Container>
          <SectionLabel number="05">Why KURO</SectionLabel>
          <Rule weight="heavy" className="mb-10 md:mb-14" />

          <div className="md:grid md:grid-cols-2 md:gap-24">
            <div>
              <h2 className="type-chapter text-[#111111] mb-10">
                Why KURO.
              </h2>
              <div className="space-y-4 type-body text-[#777777]">
                <p>
                  The standard route to event merchandise is a chain of vendors.
                </p>
                <p>
                  A design agency. A factory overseas. A separate fulfilment partner.
                </p>
                <p>
                  Things slip. Costs rise. The jersey arrives late or off-brand.
                </p>
                <p>
                  It ends up in a charity shop.
                </p>
              </div>
            </div>

            <div className="mt-10 md:mt-0">
              <div className="border-l-[3px] border-[#111111] pl-8 mb-10">
                <p className="type-lede text-[#111111]">
                  KURO removes that chain.
                </p>
                <p className="type-body text-[#777777] mt-4">
                  One studio. One contract. One delivered outcome.
                </p>
              </div>
              <p className="type-body text-[#777777] mb-4">
                Commercial results that match the size of the event.
              </p>
              <p className="type-body text-[#777777] mb-10">
                Brand engagement that survives the weekend.
              </p>
              <Rule weight="hair" className="mb-8" />
              <p className="type-label text-[#777777] mb-3">Department KURO</p>
              <p className="type-body text-[#4A4A4A]">
                Department KURO exists for the teams that need the jersey handled without
                building the department themselves.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      <Rule weight="hair" />

      {/* 06. Packages preview */}
      <Section>
        <Container>
          <SectionLabel number="06">Packages</SectionLabel>
          <Rule weight="heavy" className="mb-10 md:mb-14" />

          <h2 className="type-chapter text-[#111111] mb-12 md:mb-16">
            How to work with KURO.
          </h2>

          <div className="grid md:grid-cols-3 gap-0 divide-y md:divide-y-0 md:divide-x divide-[#DDDDDD] border border-[#DDDDDD]">
            <div className="p-8">
              <p className="type-label text-[#777777] mb-4">01</p>
              <p className="type-label text-[#111111] mb-6">MADE</p>
              <p className="type-body text-[#4A4A4A] mb-4">
                Designed and manufactured by KURO. Delivered to the client.
              </p>
              <p className="type-label text-[#111111]">Available now.</p>
            </div>

            <div className="p-8">
              <p className="type-label text-[#777777] mb-4">02</p>
              <p className="type-label text-[#111111] mb-6">MADE + SELL</p>
              <p className="type-body text-[#4A4A4A] mb-4">
                The same, plus the storefront, built in the event&apos;s brand.
              </p>
              <p className="type-label text-[#777777]">Coming soon.</p>
            </div>

            <div className="p-8">
              <p className="type-label text-[#777777] mb-4">03</p>
              <p className="type-label text-[#111111] mb-6">MADE + SELL + SHIP</p>
              <p className="type-body text-[#4A4A4A] mb-4">
                The full chain. KURO designs, makes, sells and ships.
              </p>
              <p className="type-label text-[#777777]">Coming soon.</p>
            </div>
          </div>

          <div className="mt-10">
            <Button href="/packages" variant="secondary">
              See the packages
            </Button>
          </div>
        </Container>
      </Section>

      {/* 07. Final CTA */}
      <CTASection />
    </>
  )
}
