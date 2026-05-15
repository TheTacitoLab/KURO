import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'
import { AnimatedReveal } from '@/components/ui/AnimatedReveal'

interface CTASectionProps {
  headline?: string
  subline?: string
  primaryCta?: { label: string; href: string }
  email?: boolean
}

export function CTASection({
  headline = 'Tell KURO about the event.',
  subline = 'One short form. Reply within two working days.',
  primaryCta = { label: 'Start a brief', href: '/brief' },
  email = true,
}: CTASectionProps) {
  return (
    <section className="bg-black border-t border-ash" aria-label="Call to action">
      <Container>
        <div className="py-20 md:py-28">
          <AnimatedReveal>
            <p className="type-chapter text-white mb-4 max-w-2xl">{headline}</p>
          </AnimatedReveal>
          <AnimatedReveal delay={0.1}>
            {subline && (
              <p className="type-body text-mute mb-10">{subline}</p>
            )}
          </AnimatedReveal>
          <AnimatedReveal delay={0.18}>
            <div className="flex flex-wrap items-center gap-6">
              <Button href={primaryCta.href} variant="primary">
                {primaryCta.label}
              </Button>
              {email && (
                <a
                  href="mailto:hello@deptkuro.com"
                  className="type-label text-ash hover:text-white transition-colors focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-white"
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
