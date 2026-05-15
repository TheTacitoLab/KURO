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
          <tr>
            <th className="text-left py-4 pr-8 type-label text-[#777777] font-normal border-b border-[#DDDDDD] w-1/2">
              Feature
            </th>
            {packages.map((pkg) => (
              <th
                key={pkg.name}
                className="text-left py-4 px-4 type-label text-[#111111] border-b border-[#DDDDDD]"
              >
                {pkg.name}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {features.map((feature, fi) => (
            <tr
              key={feature}
              className={cx(fi % 2 === 0 ? 'bg-transparent' : 'bg-[#F4F4F4]')}
            >
              <td className="py-4 pr-8 type-body text-[#4A4A4A] border-b border-[#DDDDDD]">
                {feature}
              </td>
              {packages.map((pkg) => (
                <td
                  key={pkg.name}
                  className="py-4 px-4 border-b border-[#DDDDDD]"
                >
                  {pkg.included[fi] ? (
                    <span
                      className="inline-block w-3 h-3 bg-[#111111]"
                      aria-label="Included"
                      role="img"
                    />
                  ) : (
                    <span
                      className="inline-block w-3 h-3 bg-[#DDDDDD]"
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
