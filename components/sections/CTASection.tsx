import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'

interface CTASectionProps {
  headline?: string
  subline?: string
  primaryCta?: { label: string; href: string }
  secondaryCta?: { label: string; href: string }
}

export function CTASection({
  headline = 'Tell KURO about the event.',
  subline = 'One short form. Reply within two working days.',
  primaryCta = { label: 'Start a brief', href: '/brief' },
  secondaryCta,
}: CTASectionProps) {
  return (
    <section className="bg-[#111111]" aria-label="Call to action">
      <Container>
        <div className="py-20 md:py-28">
          <p className="type-chapter text-[#FAFAFA] mb-6 max-w-2xl">{headline}</p>
          {subline && (
            <p className="type-body text-[#777777] mb-12 max-w-sm">{subline}</p>
          )}
          <div className="flex flex-wrap gap-4">
            <Button
              href={primaryCta.href}
              variant="secondary"
              className="!border-[#FAFAFA] !text-[#FAFAFA] hover:!bg-[#FAFAFA] hover:!text-[#111111]"
            >
              {primaryCta.label}
            </Button>
            {secondaryCta && (
              <Button
                href={secondaryCta.href}
                variant="ghost"
                className="!text-[#777777] hover:!text-[#FAFAFA]"
              >
                {secondaryCta.label}
              </Button>
            )}
          </div>
        </div>
      </Container>
    </section>
  )
}
