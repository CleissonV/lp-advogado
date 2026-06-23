import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import type { Stat } from '../../types'

interface Props {
  stat: Stat
  index: number
}

export default function StatItem({ stat, index }: Props) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className="text-center"
    >
      <div className="font-serif text-4xl md:text-5xl text-gold mb-2">{stat.number}</div>
      <div className="text-gray-500 text-xs tracking-widest uppercase font-sans">{stat.label}</div>
    </motion.div>
  )
}
