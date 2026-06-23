import { stats } from '../constants/data'
import StatItem from '../components/ui/StatItem'

export default function Stats() {
  return (
    <section className="py-16 border-y border-[#2a1a1a]">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((stat, i) => (
          <StatItem key={i} stat={stat} index={i} />
        ))}
      </div>
    </section>
  )
}
