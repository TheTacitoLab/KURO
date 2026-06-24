import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'
import { AnimatedReveal } from '@/components/ui/AnimatedReveal'

interface CTASectionProps {
  headline?: string
  subline?: string
  primaryCta?: { label: string; href: string }
  email?: boolean
  tone?: 'sun' | 'coral' | 'sea' | 'ink' | 'cream'
}

// Tone keys kept stable for call sites. Former gold ("sun") CTAs become electric —
// it punches harder on near-black than the peach highlight.
const toneMap = {
  sun: 'bg-electric text-white on-dark',
  coral: 'bg-coral text-white on-dark',
  sea: 'bg-electric text-white on-dark',
  ink: 'bg-obsidian text-white on-dark',
  cream: 'bg-void text-white on-dark border-t border-line',
}

export function CTASection({
  headline = 'Tell KURO about the event.',
  subline = 'One short form. Reply within two working days.',
  primaryCta = { label: 'Start a brief', href: '/brief' },
  email = true,
  tone = 'sun',
}: CTASectionProps) {
  // On the electric-filled CTAs a coral button contrasts; elsewhere the electric primary button does.
  const buttonVariant = tone === 'sun' || tone === 'sea' ? 'coral' : 'primary'
  return (
    <section
      className={`${toneMap[tone]} relative overflow-hidden tex-grain`}
      aria-label="Call to action"
    >
      <Container>
        <div className="py-24 md:py-36 grid md:grid-cols-12 gap-10 items-end">
          <div className="md:col-span-9">
            <AnimatedReveal>
              <p className="type-tag mb-6 opacity-80">
                ✶ ONE FORM · TWO DAY REPLY
              </p>
            </AnimatedReveal>
            <AnimatedReveal delay={0.08}>
              <h2 className="type-display">{headline}</h2>
            </AnimatedReveal>
            {subline && (
              <AnimatedReveal delay={0.16}>
                <p className="type-lede mt-6 max-w-xl opacity-90">{subline}</p>
              </AnimatedReveal>
            )}
          </div>

          <AnimatedReveal delay={0.22} className="md:col-span-3">
            <div className="flex flex-col gap-5 md:items-end">
              <Button
                href={primaryCta.href}
                variant={buttonVariant}
                size="lg"
              >
                {primaryCta.label}
                <span aria-hidden="true">→</span>
              </Button>
              {email && (
                <a
                  href="mailto:hello@deptkuro.com"
                  className="type-label underline underline-offset-4 hover:opacity-100 transition-opacity opacity-80"
                >
                  hello@deptkuro.com
                </a>
              )}
            </div>
          </AnimatedReveal>
        </div>
      </Container>
    </section>
  )
}
