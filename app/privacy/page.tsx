import type { Metadata } from 'next'
import { buildMetadata } from '@/lib/metadata'
import { Container } from '@/components/ui/Container'

export const metadata: Metadata = buildMetadata({
  title: 'Privacy',
  description: 'How OBRA handles your information.',
})

const items = [
  {
    label: 'Information collected',
    body: 'OBRA collects the information you provide through the brief form — name, role, email, event details, volume and message — solely to respond to your enquiry.',
  },
  {
    label: 'How it is used',
    body: 'OBRA uses your email to reply to your brief. Your information is not sold, shared with third parties, or used for marketing unless you have explicitly asked to be kept informed.',
  },
  {
    label: 'Analytics',
    body: 'OBRA may use Plausible Analytics — a privacy-focused, cookie-free analytics tool — if enabled. No personal data is collected or tracked.',
  },
  {
    label: 'Cookies',
    body: 'This site does not use cookies for tracking or advertising purposes.',
  },
]

export default function PrivacyPage() {
  return (
    <section
      className="bg-cream text-ink relative tex-grain pt-32 md:pt-40 pb-24 md:pb-32 min-h-screen"
      aria-labelledby="privacy-heading"
    >
      <Container>
        <p className="type-tag text-coral mb-6">✶ PRIVACY</p>
        <h1 id="privacy-heading" className="type-display mb-12 max-w-2xl">
          Privacy.
        </h1>

        <div className="max-w-2xl space-y-4">
          {items.map((item) => (
            <div
              key={item.label}
              className="bg-bone border border-ink/10 rounded-2xl p-6 md:p-8"
            >
              <p className="type-label text-smoke mb-3">{item.label}</p>
              <p className="type-body text-ink/85">{item.body}</p>
            </div>
          ))}

          <div className="bg-sun text-ink rounded-2xl p-6 md:p-8 tex-grain">
            <p className="type-label mb-3">CONTACT</p>
            <p className="type-body">
              Questions about this policy can be sent to{' '}
              <a
                href="mailto:hello@obra.studio"
                className="underline underline-offset-4 font-semibold hover:text-ember transition-colors"
              >
                hello@obra.studio
              </a>
              .
            </p>
          </div>
        </div>
      </Container>
    </section>
  )
}
