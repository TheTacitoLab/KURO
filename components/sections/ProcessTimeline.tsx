import { Rule } from '@/components/ui/Rule'

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
      'For MADE + SELL and MADE + SELL + SHIP. Shopify storefront built in the event\'s brand.',
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
    <ol className="relative" aria-label="Project process steps">
      {steps.map((step, i) => (
        <li key={step.number} className="relative">
          {i > 0 && <Rule weight="hair" />}
          <div className="py-10 md:py-14 md:grid md:grid-cols-[120px_1fr] md:gap-12">
            <div className="flex items-start gap-4 mb-4 md:mb-0 md:flex-col md:gap-2">
              <span className="type-label text-[#777777]">{step.number}</span>
              <h3 className="type-label text-[#111111]">{step.title}</h3>
            </div>
            <div>
              <p className="type-lede text-[#111111] mb-3">{step.timeframe}</p>
              <p className="type-body text-[#777777]">{step.description}</p>
            </div>
          </div>
        </li>
      ))}
    </ol>
  )
}
