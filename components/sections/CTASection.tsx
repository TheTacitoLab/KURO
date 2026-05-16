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

const toneMap = {
  sun: 'bg-sun text-ink',
  coral: 'bg-coral text-cream',
  sea: 'bg-sea text-cream',
  ink: 'bg-ink text-cream on-dark',
  cream: 'bg-cream text-ink border-t border-ink/10',
}

export function CTASection({
  headline = 'Tell KURO about the event.',
  subline = 'One short form. Reply within two working days.',
  primaryCta = { label: 'Start a brief', href: '/brief' },
  email = true,
  tone = 'sun',
}: CTASectionProps) {
  const dark = tone === 'coral' || tone === 'sea' || tone === 'ink'
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
                variant={tone === 'sun' ? 'primary' : tone === 'ink' ? 'sun' : 'primary'}
                size="lg"
              >
                {primaryCta.label}
                <span aria-hidden="true">→</span>
              </Button>
              {email && (
                <a
                  href="mailto:hello@deptkuro.com"
                  className={`type-label underline underline-offset-4 hover:opacity-100 transition-opacity ${dark ? 'opacity-80' : 'opacity-70'}`}
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
