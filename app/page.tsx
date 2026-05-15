import type { Metadata } from 'next'
import { buildMetadata } from '@/lib/metadata'
import { HeroSection } from '@/components/sections/HeroSection'
import { CTASection } from '@/components/sections/CTASection'
import { AnimatedReveal } from '@/components/ui/AnimatedReveal'
import { Container } from '@/components/ui/Container'
import { Rule } from '@/components/ui/Rule'
import { Button } from '@/components/ui/Button'
import { ImagePlaceholder } from '@/components/ui/ImagePlaceholder'

export const metadata: Metadata = buildMetadata({
  title: 'KURO — Black Label Jersey Studio',
  description:
    'Limited edition football jerseys made to remember. Designed and manufactured for festivals, tours, brand activations and live events.',
})

export default function HomePage() {
  return (
    <>
      {/* 01. HERO */}
      <HeroSection />

      {/* 02. POSITIONING — light contrast break */}
      <section className="bg-paper text-ink" aria-labelledby="positioning-heading">
        <Container>
          <div className="py-20 md:py-28">
            <AnimatedReveal>
              <Rule weight="heavy" theme="light" className="mb-10 md:mb-14 max-w-sm" />
            </AnimatedReveal>

            <div className="md:grid md:grid-cols-2 md:gap-24">
              <div>
                <AnimatedReveal delay={0.08}>
                  <h2
                    id="positioning-heading"
                    className="type-chapter text-ink mb-8"
                  >
                    The invisible partner behind the jersey.
                  </h2>
                </AnimatedReveal>
                <AnimatedReveal delay={0.16}>
                  <p className="type-body text-mid mb-3">
                    Studio, supply chain, infrastructure.
                  </p>
                  <p className="type-body text-mid">
                    Plugged into the event, working in the brand.
                  </p>
                </AnimatedReveal>
              </div>

              <div className="mt-10 md:mt-0">
                <AnimatedReveal delay={0.12}>
                  <p className="type-label text-mid mb-5">Department KURO</p>
                  <p className="type-body text-mid mb-4">
                    Department KURO is the operating model.
                  </p>
                  <p className="type-body text-mid">
                    A small dedicated unit for limited edition jerseys. The client gets
                    the department without building one.
                  </p>
                </AnimatedReveal>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 03. WHAT KURO MAKES — dark */}
      <section className="bg-ink" aria-labelledby="makes-heading">
        <Container>
          <div className="py-20 md:py-28">
            <AnimatedReveal>
              <Rule weight="hair" className="mb-10 md:mb-14" />
            </AnimatedReveal>

            <div className="md:grid md:grid-cols-2 md:gap-16 md:items-start mb-16 md:mb-20">
              {/* Left: editorial stacked heading */}
              <div className="mb-12 md:mb-0">
                <AnimatedReveal>
                  <h2
                    id="makes-heading"
                    className="text-white leading-[0.92] tracking-tight font-extrabold uppercase"
                    style={{ fontSize: 'clamp(2.5rem, 6vw, 5.5rem)' }}
                  >
                    <span className="block">WHAT</span>
                    <span className="block">KURO</span>
                    <span className="block text-mute">MAKES.</span>
                  </h2>
                </AnimatedReveal>
              </div>

              {/* Right: three modules */}
              <div className="space-y-0 divide-y divide-ash">
                <AnimatedReveal delay={0.1}>
                  <div className="py-8">
                    <p className="type-label text-mute mb-3">Limited edition.</p>
                    <p className="type-body text-hair">
                      Every design belongs to one event.
                    </p>
                  </div>
                </AnimatedReveal>
                <AnimatedReveal delay={0.18}>
                  <div className="py-8">
                    <p className="type-label text-mute mb-3">Retail standard.</p>
                    <p className="type-body text-hair">
                      Built properly. Not printed on blanks.
                    </p>
                  </div>
                </AnimatedReveal>
                <AnimatedReveal delay={0.26}>
                  <div className="py-8">
                    <p className="type-label text-mute mb-3">Designed for the event.</p>
                    <p className="type-body text-hair">
                      The jersey is the souvenir, the product, and the proof.
                    </p>
                  </div>
                </AnimatedReveal>
              </div>
            </div>

            {/* Image placeholder */}
            <AnimatedReveal>
              <ImagePlaceholder
                label="JERSEY LAB IMAGE"
                sublabel="PLACEHOLDER / 01"
                aspectRatio="aspect-[16/7]"
                className="w-full"
              />
            </AnimatedReveal>
          </div>
        </Container>
      </section>

      {/* 04. WHO IT IS FOR — darkest */}
      <section className="bg-black" aria-labelledby="who-heading">
        <Container>
          <div className="py-20 md:py-28">
            <AnimatedReveal>
              <p className="type-label text-ash mb-10 md:mb-14">
                EVENT PRODUCT / LIMITED DROP / GLOBAL REACH
              </p>
            </AnimatedReveal>

            <AnimatedReveal delay={0.08}>
              <h2 id="who-heading" className="type-chapter text-white mb-12 md:mb-16">
                Who it is for.
              </h2>
            </AnimatedReveal>

            <div className="grid grid-cols-2 md:grid-cols-4 border border-ash divide-y md:divide-y-0 md:divide-x divide-ash mb-12">
              {['Festivals', 'Tours', 'Brand activations', 'Live events'].map(
                (item, i) => (
                  <AnimatedReveal key={item} delay={0.08 * i}>
                    <div className="p-6 md:p-8">
                      <p className="type-label text-white">{item}</p>
                    </div>
                  </AnimatedReveal>
                )
              )}
            </div>

            <div className="md:grid md:grid-cols-2 md:gap-24">
              <AnimatedReveal>
                <p className="type-body text-mute">
                  Primary audience: live music and festivals globally.
                </p>
              </AnimatedReveal>
              <AnimatedReveal delay={0.08}>
                <p className="type-body text-mute mt-4 md:mt-0">
                  Also serves: entertainment IP, sports rights holders and brand teams.
                </p>
              </AnimatedReveal>
            </div>
          </div>
        </Container>
      </section>

      {/* 05. WHY KURO — dark, hard-talking */}
      <section className="bg-ink" aria-labelledby="why-heading">
        <Container>
          <div className="py-20 md:py-28">
            <AnimatedReveal>
              <Rule weight="hair" className="mb-10 md:mb-14" />
            </AnimatedReveal>

            <div className="md:grid md:grid-cols-2 md:gap-24">
              {/* Left: problem */}
              <div>
                <AnimatedReveal>
                  <h2 id="why-heading" className="type-chapter text-white mb-10">
                    Why KURO.
                  </h2>
                </AnimatedReveal>
                <AnimatedReveal delay={0.1}>
                  <div className="space-y-4 type-body text-mute">
                    <p>The standard route is a chain of vendors.</p>
                    <p>
                      A design agency. A factory overseas. A fulfilment partner.
                      Another handoff.
                    </p>
                    <p>Things slip. Costs rise. The jersey arrives late or off-brand.</p>
                    <p>It ends up in a charity shop.</p>
                  </div>
                </AnimatedReveal>
              </div>

              {/* Right: resolution */}
              <div className="mt-12 md:mt-0">
                <AnimatedReveal delay={0.08}>
                  <div className="border-l-[3px] border-white pl-8 mb-10">
                    <p className="type-lede text-white mb-4">KURO removes the chain.</p>
                    <p className="type-body text-mute">
                      One studio. One contract. One delivered outcome.
                    </p>
                  </div>
                </AnimatedReveal>
                <AnimatedReveal delay={0.16}>
                  <p className="type-body text-mute mb-3">
                    Commercial results that match the size of the event.
                  </p>
                  <p className="type-body text-mute mb-10">
                    Brand engagement that survives the weekend.
                  </p>
                </AnimatedReveal>
                <AnimatedReveal delay={0.22}>
                  <Rule weight="hair" className="mb-8" />
                  <p className="type-label text-ash mb-3">Department KURO</p>
                  <p className="type-body text-mute">
                    Department KURO exists for the teams that need the jersey handled
                    without building the department themselves.
                  </p>
                </AnimatedReveal>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 06. PACKAGES PREVIEW — graphite, technical modules */}
      <section className="bg-graphite border-t border-ash" aria-labelledby="packages-heading">
        <Container>
          <div className="py-20 md:py-28">
            <AnimatedReveal>
              <p className="type-label text-mute mb-10 md:mb-14">
                STUDIO / SUPPLY CHAIN / INFRASTRUCTURE
              </p>
            </AnimatedReveal>

            <AnimatedReveal delay={0.08}>
              <h2 id="packages-heading" className="type-chapter text-white mb-12 md:mb-16">
                Three ways to work with KURO.
              </h2>
            </AnimatedReveal>

            <div className="grid md:grid-cols-3 border border-ash divide-y md:divide-y-0 md:divide-x divide-ash mb-12">
              {[
                {
                  n: '01',
                  name: 'MADE',
                  desc: 'Designed and manufactured by KURO. Delivered to the client.',
                  status: 'AVAILABLE NOW',
                  available: true,
                },
                {
                  n: '02',
                  name: 'MADE + SELL',
                  desc: "The same, plus the storefront, built in the event's brand.",
                  status: 'COMING SOON',
                  available: false,
                },
                {
                  n: '03',
                  name: 'MADE + SELL + SHIP',
                  desc: 'The full chain. KURO designs, makes, sells and ships.',
                  status: 'COMING SOON',
                  available: false,
                },
              ].map((pkg, i) => (
                <AnimatedReveal key={pkg.n} delay={0.08 * i}>
                  <div className="p-7 md:p-8 h-full flex flex-col gap-6">
                    <div className="flex items-start justify-between">
                      <span className="type-label text-ash">{pkg.n}</span>
                      <span
                        className={
                          pkg.available ? 'type-label text-white' : 'type-label text-mute'
                        }
                      >
                        {pkg.status}
                      </span>
                    </div>
                    <div>
                      <p className="type-label text-white mb-4 tracking-widest">
                        {pkg.name}
                      </p>
                      <p className="type-body text-mute">{pkg.desc}</p>
                    </div>
                  </div>
                </AnimatedReveal>
              ))}
            </div>

            <AnimatedReveal delay={0.1}>
              <Button href="/packages" variant="secondary">
                See the packages
              </Button>
            </AnimatedReveal>
          </div>
        </Container>
      </section>

      {/* 07. FINAL CTA */}
      <CTASection />
    </>
  )
}
