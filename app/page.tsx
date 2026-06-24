import type { Metadata } from 'next'
import { buildMetadata } from '@/lib/metadata'
import { HeroSection } from '@/components/sections/HeroSection'
import { CTASection } from '@/components/sections/CTASection'
import { AnimatedReveal } from '@/components/ui/AnimatedReveal'
import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'
import { ImagePlaceholder } from '@/components/ui/ImagePlaceholder'
import { MarqueeStrip } from '@/components/ui/MarqueeStrip'
import { GraphicTile } from '@/components/ui/GraphicTile'
import { StatusTag } from '@/components/ui/StatusTag'

export const metadata: Metadata = buildMetadata({
  title: 'KURO — Limited Edition Football Jerseys',
  description:
    'KURO designs and manufactures limited edition football jerseys for festivals, tours, brand activations and live events. Made to remember.',
})

export default function HomePage() {
  return (
    <>
      {/* 01. HERO */}
      <HeroSection />

      {/* Marquee strip */}
      <MarqueeStrip
        tone="ink"
        size="lg"
        items={[
          'FOR THE DROP',
          'FOR THE AFTER',
          'FOR THE MEMORY',
          'FOR THE EVENT',
          'FOR THE WEEKEND',
        ]}
      />

      {/* 02. POSITIONING */}
      <section
        className="bg-void text-white relative tex-grain"
        aria-labelledby="positioning-heading"
      >
        <Container>
          <div className="py-24 md:py-36 grid md:grid-cols-12 gap-10 items-end">
            <div className="md:col-span-7">
              <AnimatedReveal>
                <p className="type-tag text-coral mb-6">✶ POSITIONING / 01</p>
              </AnimatedReveal>
              <AnimatedReveal delay={0.08}>
                <h2 id="positioning-heading" className="type-display">
                  The jersey that{' '}
                  <span className="type-serif text-coral normal-case font-normal lowercase">
                    outlives
                  </span>{' '}
                  the event.
                </h2>
              </AnimatedReveal>
            </div>

            <AnimatedReveal delay={0.16} className="md:col-span-5">
              <div className="space-y-5 type-lede text-white/80">
                <p>
                  KURO designs and manufactures limited edition football jerseys for the
                  moments people remember.
                </p>
                <p className="type-body text-ash">
                  Festivals. Tours. Brand activations. Live events.
                </p>
                <p className="type-body text-ash">
                  The event gets the drop.{' '}
                  <span className="text-white">The crowd gets the jersey.</span> The jersey
                  gets kept.
                </p>
              </div>
            </AnimatedReveal>
          </div>
        </Container>
      </section>

      {/* 03. WHAT KURO MAKES — three colored tiles */}
      <section
        className="bg-obsidian text-white relative tex-grain"
        aria-labelledby="makes-heading"
      >
        <Container>
          <div className="py-24 md:py-32">
            <div className="grid md:grid-cols-12 gap-8 mb-12 md:mb-16">
              <div className="md:col-span-7">
                <AnimatedReveal>
                  <p className="type-tag text-electric mb-6">✶ WHAT KURO MAKES / 02</p>
                </AnimatedReveal>
                <AnimatedReveal delay={0.1}>
                  <h2 id="makes-heading" className="type-display">
                    Not merch.{' '}
                    <span className="type-serif text-electric normal-case font-normal">
                      A memory.
                    </span>
                  </h2>
                </AnimatedReveal>
              </div>
              <AnimatedReveal delay={0.18} className="md:col-span-5 md:pt-2">
                <p className="type-body text-ash max-w-md">
                  Three things make a KURO jersey what it is. Edition. Build. Intent.
                </p>
              </AnimatedReveal>
            </div>

            <div className="grid md:grid-cols-3 gap-5">
              <AnimatedReveal>
                <GraphicTile
                  number="01"
                  label="EDITION"
                  title="Limited edition."
                  description="Every design belongs to one event. Made once. Not restocked."
                  tone="coral"
                  pattern="stripes"
                />
              </AnimatedReveal>
              <AnimatedReveal delay={0.08}>
                <GraphicTile
                  number="02"
                  label="BUILD"
                  title="Built properly."
                  description="Retail-standard construction. Cut-and-sew or sublimation. Not printed on blanks."
                  tone="sun"
                  pattern="pitch"
                />
              </AnimatedReveal>
              <AnimatedReveal delay={0.16}>
                <GraphicTile
                  number="03"
                  label="INTENT"
                  title="Made to keep."
                  description="The jersey is the souvenir, the product, and the proof."
                  tone="sea"
                  pattern="dots"
                />
              </AnimatedReveal>
            </div>

            {/* Image strip */}
            <div className="grid md:grid-cols-12 gap-5 mt-14">
              <AnimatedReveal className="md:col-span-5">
                <ImagePlaceholder
                  tone="terracotta"
                  number="9"
                  label="THE FESTIVAL JERSEY"
                  sublabel="EDITION / 002"
                />
              </AnimatedReveal>
              <AnimatedReveal delay={0.08} className="md:col-span-4">
                <ImagePlaceholder
                  tone="mint"
                  number="7"
                  label="THE TOUR SHIRT"
                  sublabel="EDITION / 003"
                  aspectRatio="aspect-[4/5]"
                />
              </AnimatedReveal>
              <AnimatedReveal delay={0.16} className="md:col-span-3">
                <ImagePlaceholder
                  tone="lilac"
                  number="11"
                  label="THE AFTER"
                  sublabel="EDITION / 004"
                  aspectRatio="aspect-[3/5]"
                />
              </AnimatedReveal>
            </div>
          </div>
        </Container>
      </section>

      {/* 04. WHO IT IS FOR — colourful blocks */}
      <section
        className="bg-void text-white relative tex-grain"
        aria-labelledby="who-heading"
      >
        <Container>
          <div className="py-24 md:py-32">
            <div className="grid md:grid-cols-12 gap-8 mb-12">
              <div className="md:col-span-8">
                <AnimatedReveal>
                  <p className="type-tag text-violet mb-6">✶ WHO IT IS FOR / 03</p>
                </AnimatedReveal>
                <AnimatedReveal delay={0.1}>
                  <h2 id="who-heading" className="type-display">
                    One event.{' '}
                    <span className="text-coral">One jersey.</span>{' '}
                    <span className="text-electric">One keeper.</span>
                  </h2>
                </AnimatedReveal>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
              {[
                { label: 'Festivals', tone: 'coral', icon: '✶' },
                { label: 'Tours', tone: 'electric', icon: '✦' },
                { label: 'Brand activations', tone: 'magenta', icon: '✺' },
                { label: 'Live events', tone: 'violet', icon: '✷' },
              ].map((item, i) => (
                <AnimatedReveal key={item.label} delay={0.06 * i}>
                  <div
                    className={`
                      relative aspect-[4/5] rounded-2xl p-5 md:p-6 flex flex-col justify-between overflow-hidden tex-grain
                      ${
                        item.tone === 'coral'
                          ? 'bg-coral text-white'
                          : item.tone === 'electric'
                          ? 'bg-electric text-white'
                          : item.tone === 'magenta'
                          ? 'bg-magenta text-white'
                          : 'bg-violet text-white'
                      }
                    `}
                  >
                    <span className="text-3xl md:text-5xl">{item.icon}</span>
                    <div>
                      <p className="type-tag opacity-70 mb-2">FOR</p>
                      <p className="type-headline">{item.label}</p>
                    </div>
                  </div>
                </AnimatedReveal>
              ))}
            </div>

            <div className="grid md:grid-cols-2 gap-8 mt-12 max-w-3xl">
              <AnimatedReveal>
                <p className="type-body text-ash">
                  <span className="type-label text-white block mb-2">Primary audience</span>
                  Live music and festivals globally.
                </p>
              </AnimatedReveal>
              <AnimatedReveal delay={0.06}>
                <p className="type-body text-ash">
                  <span className="type-label text-white block mb-2">Also serves</span>
                  Entertainment IP, sports rights holders and culture-led brand teams.
                </p>
              </AnimatedReveal>
            </div>
          </div>
        </Container>
      </section>

      {/* 05. WHY KURO — big statement */}
      <section className="bg-obsidian text-white on-dark relative tex-grain" aria-labelledby="why-heading">
        <Container>
          <div className="py-24 md:py-36 grid md:grid-cols-12 gap-10">
            <div className="md:col-span-7">
              <AnimatedReveal>
                <p className="type-tag text-flare mb-6">✶ WHY KURO / 04</p>
              </AnimatedReveal>
              <AnimatedReveal delay={0.1}>
                <h2 id="why-heading" className="type-display">
                  The shirt from the summer.
                </h2>
              </AnimatedReveal>
              <AnimatedReveal delay={0.18}>
                <p className="type-display text-white/60 mt-2">
                  <span className="type-serif text-flare normal-case font-normal">
                    The one
                  </span>{' '}
                  that never gets thrown away.
                </p>
              </AnimatedReveal>
            </div>

            <AnimatedReveal delay={0.22} className="md:col-span-5 md:pt-4">
              <div className="space-y-5 type-lede text-white/80">
                <p>
                  Most event merch gets made like an afterthought. KURO does the
                  opposite.
                </p>
                <p className="type-body text-white/70">
                  KURO removes the usual chain of agencies, suppliers and handoffs.
                </p>
                <p className="type-body text-white/70">
                  The result is simple: a jersey that looks right, feels right, arrives
                  right — and gets kept.
                </p>
              </div>

              <div className="mt-10 grid grid-cols-2 gap-4">
                <div className="bg-white/5 border border-white/15 rounded-2xl p-5">
                  <p className="type-tag text-flare mb-2">CHAIN</p>
                  <p className="type-headline">Removed.</p>
                </div>
                <div className="bg-white/5 border border-white/15 rounded-2xl p-5">
                  <p className="type-tag text-flare mb-2">OUTCOME</p>
                  <p className="type-headline">One thing.</p>
                </div>
              </div>
            </AnimatedReveal>
          </div>
        </Container>
      </section>

      {/* 06. PACKAGES PREVIEW */}
      <section
        className="bg-obsidian text-white relative tex-grain"
        aria-labelledby="packages-heading"
      >
        <Container>
          <div className="py-24 md:py-32">
            <div className="grid md:grid-cols-12 gap-8 mb-12 md:mb-16">
              <div className="md:col-span-8">
                <AnimatedReveal>
                  <p className="type-tag text-coral mb-6">✶ HOW TO WORK WITH KURO / 05</p>
                </AnimatedReveal>
                <AnimatedReveal delay={0.1}>
                  <h2 id="packages-heading" className="type-display">
                    Start with the jersey.{' '}
                    <span className="type-serif text-coral normal-case font-normal">
                      Add the chain.
                    </span>
                  </h2>
                </AnimatedReveal>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-5">
              {[
                {
                  n: '01',
                  name: 'MADE',
                  tag: 'Designed. Made. Delivered.',
                  desc: 'Design and manufacture. KURO delivers finished jerseys. Client takes it from there.',
                  status: 'available' as const,
                  statusLabel: 'AVAILABLE NOW',
                  tone: 'coral',
                  bg: 'bg-coral text-white',
                },
                {
                  n: '02',
                  name: 'MADE + SELL',
                  tag: 'Designed. Made. Sold.',
                  desc: "Everything in MADE, plus the storefront. Built in the event's brand.",
                  status: 'soon' as const,
                  statusLabel: 'COMING SOON',
                  tone: 'electric',
                  bg: 'bg-electric text-white',
                },
                {
                  n: '03',
                  name: 'MADE + SELL + SHIP',
                  tag: 'Designed. Made. Sold. Shipped.',
                  desc: 'The full chain. KURO designs, makes, sells and ships.',
                  status: 'soon' as const,
                  statusLabel: 'COMING SOON',
                  tone: 'magenta',
                  bg: 'bg-magenta text-white',
                },
              ].map((pkg, i) => (
                <AnimatedReveal key={pkg.n} delay={0.08 * i}>
                  <article
                    className={`${pkg.bg} relative rounded-2xl p-6 md:p-8 h-full flex flex-col gap-6 tex-grain overflow-hidden`}
                  >
                    <div className="flex items-start justify-between">
                      <span className="type-tag opacity-80">{pkg.n}</span>
                      <StatusTag variant={pkg.status}>{pkg.statusLabel}</StatusTag>
                    </div>
                    <div className="mt-auto">
                      <h3 className="type-headline mb-2">{pkg.name}</h3>
                      <p className="type-body opacity-90 mb-3">{pkg.tag}</p>
                      <p className="type-body opacity-75">{pkg.desc}</p>
                    </div>
                  </article>
                </AnimatedReveal>
              ))}
            </div>

            <AnimatedReveal delay={0.18} className="mt-12">
              <Button href="/packages" variant="primary" size="lg">
                See the packages
                <span aria-hidden="true">→</span>
              </Button>
            </AnimatedReveal>
          </div>
        </Container>
      </section>

      {/* 07. CTA */}
      <CTASection
        tone="sun"
        headline="Tell KURO about the event."
        subline="One short form. Reply within two working days. Department KURO starts here."
      />
    </>
  )
}
