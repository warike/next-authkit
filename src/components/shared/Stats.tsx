import { random } from 'lodash'
const stats = [
    { name: 'Total Users', value: random(30, 0) },
    { name: 'Registered Today', value: random(30, 0) },
    { name: 'Registered Last 7 Days', value: random(30, 0) },
    
  ]
  
export default function Stats() {
return (
    <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-2 sm:grid-cols-3">
          {stats.map((stat) => (
            <div key={stat.name} className="overflow-hidden rounded-lg bg-white px-4 py-6 sm:px-6 lg:px-8 shadow">
              <p className="overflow text-sm/6 font-medium text-gray-500">{stat.name}</p>
              <p className="mt-2 flex items-baseline gap-x-2">
                <span className="text-3xl font-semibold tracking-tight  text-gray-900">{stat.value}</span>
              </p>
            </div>
          ))}
        </div>
    </div>
)
}