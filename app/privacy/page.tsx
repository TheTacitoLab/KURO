import type { Metadata } from 'next'
import { buildMetadata } from '@/lib/metadata'
import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'
import { Rule } from '@/components/ui/Rule'
import { SectionLabel } from '@/components/ui/SectionLabel'

export const metadata: Metadata = buildMetadata({
  title: 'Privacy',
  description: 'How KURO handles your information.',
})

export default function PrivacyPage() {
  return (
    <Section>
      <Container>
        <SectionLabel>Privacy</SectionLabel>
        <Rule weight="heavy" className="mb-10 md:mb-14" />
        <h1 className="type-chapter text-[#111111] mb-12 max-w-xl">
          Privacy.
        </h1>

        <div className="max-w-lg space-y-0 divide-y divide-[#DDDDDD]">
          <div className="py-8">
            <p className="type-label text-[#777777] mb-3">Information collected</p>
            <p className="type-body text-[#4A4A4A]">
              KURO collects the information you provide through the brief form — name,
              role, email, event details, volume and message — solely to respond to
              your enquiry.
            </p>
          </div>

          <div className="py-8">
            <p className="type-label text-[#777777] mb-3">How it is used</p>
            <p className="type-body text-[#4A4A4A]">
              KURO uses your email to reply to your brief. Nothing else. Your
              information is not sold, shared with third parties, or used for marketing
              unless you have explicitly asked to be kept informed.
            </p>
          </div>

          <div className="py-8">
            <p className="type-label text-[#777777] mb-3">Analytics</p>
            <p className="type-body text-[#4A4A4A]">
              KURO may use Plausible Analytics — a privacy-focused, cookie-free
              analytics tool — if enabled. No personal data is collected or tracked.
            </p>
          </div>

          <div className="py-8">
            <p className="type-label text-[#777777] mb-3">Cookies</p>
            <p className="type-body text-[#4A4A4A]">
              This site does not use cookies for tracking or advertising purposes.
            </p>
          </div>

          <div className="py-8">
            <p className="type-label text-[#777777] mb-3">Contact</p>
            <p className="type-body text-[#4A4A4A]">
              Questions about this policy can be sent to{' '}
              <a
                href="mailto:hello@deptkuro.com"
                className="text-[#111111] underline underline-offset-4 hover:text-[#4A4A4A] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#111111]"
              >
                hello@deptkuro.com
              </a>
              .
            </p>
          </div>
        </div>
      </Container>
    </Section>
  )
}
