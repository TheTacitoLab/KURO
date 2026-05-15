import type { Metadata } from 'next'
import { buildMetadata } from '@/lib/metadata'
import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'
import { Rule } from '@/components/ui/Rule'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { CTASection } from '@/components/sections/CTASection'

export const metadata: Metadata = buildMetadata({
  title: 'Studio',
  description:
    'KURO is a black label jersey studio. Two operators. One studio. Specialists added per project.',
})

export default function StudioPage() {
  return (
    <>
      <Section className="border-b border-[#DDDDDD]">
        <Container>
          <SectionLabel>Studio</SectionLabel>
          <Rule weight="heavy" className="mb-10 md:mb-14" />
          <h1 className="type-chapter text-[#111111] mb-10 max-w-xl">
            The studio.
          </h1>

          <div className="md:grid md:grid-cols-2 md:gap-24">
            <div className="space-y-4 type-body text-[#4A4A4A]">
              <p>KURO is a black label jersey studio.</p>
              <p>
                It designs and manufactures limited edition football jerseys for
                festivals, tours, brand activations and live events.
              </p>
            </div>

            <div className="mt-8 md:mt-0 space-y-4 type-body text-[#777777]">
              <p>KURO runs lean by design.</p>
              <p>Two operators. One studio. Specialists added per project.</p>
            </div>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="md:grid md:grid-cols-2 md:gap-24">
            <div>
              <Rule weight="hair" className="mb-10 md:mb-14" />
              <p className="type-label text-[#777777] mb-4">Department KURO</p>
              <p className="type-body text-[#4A4A4A] mb-4">
                Department KURO is the working model.
              </p>
              <p className="type-body text-[#777777]">
                A small dedicated unit, built to plug into the client&apos;s brand team,
                event team or creative team.
              </p>
            </div>

            <div className="mt-10 md:mt-0">
              <Rule weight="hair" className="mb-10 md:mb-14" />
              <div className="space-y-2 type-body">
                <p className="type-label text-[#777777] mb-6">Contact</p>
                <p>
                  <span className="type-label text-[#777777] mr-2">Based:</span>
                  <span className="text-[#4A4A4A]">Hampshire, UK.</span>
                </p>
                <p>
                  <span className="type-label text-[#777777] mr-2">Reach:</span>
                  <span className="text-[#4A4A4A]">Global.</span>
                </p>
              </div>

              <div className="mt-8 space-y-2">
                <a
                  href="mailto:hello@deptkuro.com"
                  className="type-label text-[#777777] hover:text-[#111111] transition-colors block focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#111111]"
                >
                  Email. hello@deptkuro.com
                </a>
                <a
                  href="https://instagram.com/deptkuro"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="type-label text-[#777777] hover:text-[#111111] transition-colors block focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#111111]"
                >
                  Instagram. @deptkuro
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="type-label text-[#777777] hover:text-[#111111] transition-colors block focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#111111]"
                >
                  LinkedIn. KURO Studio
                </a>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <CTASection />
    </>
  )
}
