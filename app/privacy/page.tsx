import type { Metadata } from 'next'
import { buildMetadata } from '@/lib/metadata'
import { Container } from '@/components/ui/Container'
import { Rule } from '@/components/ui/Rule'
import { SectionLabel } from '@/components/ui/SectionLabel'

export const metadata: Metadata = buildMetadata({
  title: 'Privacy',
  description: 'How KURO handles your information.',
})

export default function PrivacyPage() {
  return (
    <section className="bg-ink min-h-screen" aria-labelledby="privacy-heading">
      <Container>
        <div className="py-20 md:py-28">
          <SectionLabel>Privacy</SectionLabel>
          <Rule weight="heavy" className="mb-10 md:mb-14" />
          <h1 id="privacy-heading" className="type-chapter text-white mb-12 max-w-xl">
            Privacy.
          </h1>

          <div className="max-w-lg space-y-0 divide-y divide-ash">
            <div className="py-8">
              <p className="type-label text-mute mb-3">Information collected</p>
              <p className="type-body text-hair">
                KURO collects the information you provide through the brief form — name,
                role, email, event details, volume and message — solely to respond to
                your enquiry.
              </p>
            </div>

            <div className="py-8">
              <p className="type-label text-mute mb-3">How it is used</p>
              <p className="type-body text-hair">
                KURO uses your email to reply to your brief. Your information is not
                sold, shared with third parties, or used for marketing unless you have
                explicitly asked to be kept informed.
              </p>
            </div>

            <div className="py-8">
              <p className="type-label text-mute mb-3">Analytics</p>
              <p className="type-body text-hair">
                KURO may use Plausible Analytics — a privacy-focused, cookie-free
                analytics tool — if enabled. No personal data is collected or tracked.
              </p>
            </div>

            <div className="py-8">
              <p className="type-label text-mute mb-3">Cookies</p>
              <p className="type-body text-hair">
                This site does not use cookies for tracking or advertising purposes.
              </p>
            </div>

            <div className="py-8">
              <p className="type-label text-mute mb-3">Contact</p>
              <p className="type-body text-hair">
                Questions about this policy can be sent to{' '}
                <a
                  href="mailto:hello@deptkuro.com"
                  className="text-white underline underline-offset-4 hover:text-hair transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  hello@deptkuro.com
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
