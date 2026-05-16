import { cx } from '@/lib/utils'

const features = [
  'Design and creative direction',
  '3D mockups and sample',
  'Production and QC',
  'Delivery to client',
  'Branded storefront',
  'Storefront management',
  'Product photography',
  'Global fulfilment',
  'Customer service',
  'Returns and refunds',
  'Inventory storage',
]

const packages = [
  {
    name: 'MADE',
    accent: 'bg-coral text-cream',
    included: [true, true, true, true, false, false, false, false, false, false, false],
  },
  {
    name: 'MADE + SELL',
    accent: 'bg-sea text-cream',
    included: [true, true, true, true, true, true, true, false, false, false, false],
  },
  {
    name: 'MADE + SELL + SHIP',
    accent: 'bg-olive text-cream',
    included: [true, true, true, true, true, true, true, true, true, true, true],
  },
]

export function ComparisonTable() {
  return (
    <div className="overflow-x-auto rounded-2xl border border-ink/10 bg-bone">
      <table className="w-full border-collapse min-w-[640px]" aria-label="Package comparison">
        <thead>
          <tr className="border-b border-ink/10">
            <th className="text-left py-5 px-5 md:px-7 type-label text-smoke font-normal w-1/2">
              Feature
            </th>
            {packages.map((pkg) => (
              <th key={pkg.name} className="text-left py-4 px-4">
                <span
                  className={cx(
                    'inline-block type-label px-3 py-1.5 rounded-full',
                    pkg.accent
                  )}
                >
                  {pkg.name}
                </span>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {features.map((feature, fi) => (
            <tr
              key={feature}
              className={cx(
                'border-b border-ink/10 last:border-b-0',
                fi % 2 === 1 ? 'bg-cream/40' : ''
              )}
            >
              <td className="py-4 px-5 md:px-7 type-body text-ink">{feature}</td>
              {packages.map((pkg) => (
                <td key={pkg.name} className="py-4 px-4">
                  {pkg.included[fi] ? (
                    <span
                      className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-ink text-cream text-sm font-bold"
                      aria-label="Included"
                      role="img"
                    >
                      ✓
                    </span>
                  ) : (
                    <span
                      className="inline-block w-7 h-7 rounded-full border border-ink/15"
                      aria-label="Not included"
                      role="img"
                    />
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
