import { cx } from '@/lib/utils'

interface ProcessStep {
  number: string
  title: string
  timeframe: string
  description: string
  tone: 'sun' | 'coral' | 'sea' | 'mint' | 'olive' | 'lilac'
}

const steps: ProcessStep[] = [
  {
    number: '01',
    title: 'Discovery',
    timeframe: 'First contact to signed brief.',
    description:
      'A short call. Volume, timeline, budget, brand, references. OBRA writes a one-page brief. Client signs.',
    tone: 'sun',
  },
  {
    number: '02',
    title: 'Design',
    timeframe: 'Concept to approved sample.',
    description:
      'Creative direction. 3D mockups. Iteration with the client. Technical artwork. One physical sample. Approved before tooling.',
    tone: 'coral',
  },
  {
    number: '03',
    title: 'Production',
    timeframe: 'Approved sample to finished run.',
    description:
      'Cut-and-sew or sublimation, depending on the design. Production scheduled and monitored. Every jersey checked before dispatch.',
    tone: 'sea',
  },
  {
    number: '04',
    title: 'Commerce',
    timeframe: 'Storefront live, where applicable.',
    description:
      "For MADE + SELL and MADE + SELL + SHIP. Shopify storefront built in the event's brand.",
    tone: 'lilac',
  },
  {
    number: '05',
    title: 'Delivery',
    timeframe: 'From factory to client or customer.',
    description:
      'MADE delivers to the client. MADE + SELL delivers the product and storefront. MADE + SELL + SHIP ships globally.',
    tone: 'mint',
  },
  {
    number: '06',
    title: 'Close',
    timeframe: 'Project documented. Relationship carried forward.',
    description:
      'Every completed project closes with a written debrief. What sold. What did not. What the next drop could look like.',
    tone: 'olive',
  },
]

const toneMap = {
  sun: 'bg-sun text-ink',
  coral: 'bg-coral text-cream',
  sea: 'bg-sea text-cream',
  mint: 'bg-mint text-ink',
  olive: 'bg-olive text-cream',
  lilac: 'bg-lilac text-ink',
}

export function ProcessTimeline() {
  return (
    <ol aria-label="Project process stages" className="space-y-5">
      {steps.map((step, i) => (
        <li key={step.number}>
          <div
            className={cx(
              'relative rounded-2xl border border-ink/10 overflow-hidden tex-grain bg-bone',
              'grid md:grid-cols-[160px_1fr_auto] gap-6 md:gap-10 p-6 md:p-8',
              i % 2 === 1 && 'md:translate-x-6'
            )}
          >
            <div className="flex items-center gap-4 md:flex-col md:items-start md:gap-3">
              <span
                className={cx(
                  'inline-grid place-items-center w-14 h-14 md:w-20 md:h-20 rounded-full font-extrabold text-2xl md:text-3xl',
                  toneMap[step.tone]
                )}
              >
                {step.number}
              </span>
              <span className="type-label text-smoke md:mt-2">STAGE</span>
            </div>

            <div className="md:pt-2">
              <h3 className="type-headline text-ink mb-2">{step.title}</h3>
              <p className="type-lede text-ink/80 mb-3 max-w-xl">{step.timeframe}</p>
              <p className="type-body text-smoke max-w-2xl">{step.description}</p>
            </div>

            <div className="hidden md:flex items-center self-stretch">
              <span className="type-tag text-smoke rotate-90 origin-center whitespace-nowrap">
                OBRA · STAGE {step.number}
              </span>
            </div>
          </div>
        </li>
      ))}
    </ol>
  )
}
