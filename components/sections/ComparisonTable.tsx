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

// Package accents after remap: 01 coral, 02 electric, 03 magenta.
const packages = [
  {
    name: 'MADE',
    accent: 'bg-coral text-white',
    included: [true, true, true, true, false, false, false, false, false, false, false],
  },
  {
    name: 'MADE + SELL',
    accent: 'bg-electric text-white',
    included: [true, true, true, true, true, true, true, false, false, false, false],
  },
  {
    name: 'MADE + SELL + SHIP',
    accent: 'bg-magenta text-white',
    included: [true, true, true, true, true, true, true, true, true, true, true],
  },
]

export function ComparisonTable() {
  return (
    <div className="overflow-x-auto rounded-2xl border border-line bg-slate">
      <table className="w-full border-collapse min-w-[640px]" aria-label="Package comparison">
        <thead>
          <tr className="border-b border-line">
            <th className="text-left py-5 px-5 md:px-7 type-label text-ash font-normal w-1/2">
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
                'border-b border-line last:border-b-0',
                fi % 2 === 1 ? 'bg-white/5' : ''
              )}
            >
              <td className="py-4 px-5 md:px-7 type-body text-white">{feature}</td>
              {packages.map((pkg) => (
                <td key={pkg.name} className="py-4 px-4">
                  {pkg.included[fi] ? (
                    <span
                      className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-white text-void text-sm font-bold"
                      aria-label="Included"
                      role="img"
                    >
                      ✓
                    </span>
                  ) : (
                    <span
                      className="inline-block w-7 h-7 rounded-full border border-line"
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
