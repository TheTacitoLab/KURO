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
    included: [true, true, true, true, false, false, false, false, false, false, false],
  },
  {
    name: 'MADE + SELL',
    included: [true, true, true, true, true, true, true, false, false, false, false],
  },
  {
    name: 'MADE + SELL + SHIP',
    included: [true, true, true, true, true, true, true, true, true, true, true],
  },
]

export function ComparisonTable() {
  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse" aria-label="Package comparison">
        <thead>
          <tr className="border-b border-ash">
            <th className="text-left py-5 pr-8 type-label text-mute font-normal w-1/2">
              Feature
            </th>
            {packages.map((pkg) => (
              <th key={pkg.name} className="text-left py-5 px-4 type-label text-white">
                {pkg.name}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {features.map((feature, fi) => (
            <tr
              key={feature}
              className={cx(
                'border-b border-ash',
                fi % 2 === 1 ? 'bg-steel/30' : ''
              )}
            >
              <td className="py-4 pr-8 type-body text-mute">{feature}</td>
              {packages.map((pkg) => (
                <td key={pkg.name} className="py-4 px-4">
                  {pkg.included[fi] ? (
                    <span
                      className="inline-block w-3 h-3 bg-white"
                      aria-label="Included"
                      role="img"
                    />
                  ) : (
                    <span
                      className="inline-block w-3 h-3 bg-ash"
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
