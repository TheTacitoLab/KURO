import { cx } from '@/lib/utils'

interface ProcessStep {
  number: string
  title: string
  timeframe: string
  description: string
}

const steps: ProcessStep[] = [
  {
    number: '01',
    title: 'Discovery',
    timeframe: 'First contact to signed brief. Inside a week.',
    description:
      'A short call. Volume, timeline, budget, brand assets, design references. KURO writes a one-page brief. Client signs.',
  },
  {
    number: '02',
    title: 'Design',
    timeframe: 'Concept to approved sample.',
    description:
      'Creative direction. 3D mockups. Iteration with the client. Technical artwork. One physical sample. Approved before tooling.',
  },
  {
    number: '03',
    title: 'Production',
    timeframe: 'Approved sample to finished run.',
    description:
      'Cut-and-sew or sublimation, depending on the design. Production scheduled and monitored. Every jersey checked before dispatch.',
  },
  {
    number: '04',
    title: 'Commerce',
    timeframe: 'Storefront live, where applicable.',
    description:
      "For MADE + SELL and MADE + SELL + SHIP. Shopify storefront built in the event's brand.",
  },
  {
    number: '05',
    title: 'Delivery',
    timeframe: 'From factory to client or customer.',
    description:
      'MADE delivers to the client. MADE + SELL delivers the product and storefront. MADE + SELL + SHIP ships globally.',
  },
  {
    number: '06',
    title: 'Close',
    timeframe: 'Project documented. Case study built. Relationship banked.',
    description:
      'Every completed project closes with a written debrief. What sold. What did not. What the next drop could look like.',
  },
]

export function ProcessTimeline() {
  return (
    <ol aria-label="Project process stages">
      {steps.map((step) => (
        <li key={step.number}>
          <div
            className={cx(
              'border-b border-ash py-10 md:py-14 md:grid md:gap-16',
              'md:grid-cols-[140px_1fr]'
            )}
          >
            {/* Left: number + title */}
            <div className="flex items-baseline gap-4 mb-5 md:mb-0 md:flex-col md:gap-3 md:pt-1">
              <span className="type-label text-ash leading-none">{step.number}</span>
              <span className="type-label text-white leading-none">{step.title}</span>
            </div>

            {/* Right: timeframe + description */}
            <div>
              <p className="type-lede text-white mb-4">{step.timeframe}</p>
              <p className="type-body text-mute">{step.description}</p>
            </div>
          </div>
        </li>
      ))}
    </ol>
  )
}
