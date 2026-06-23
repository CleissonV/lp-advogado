import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import type { Service } from '../../types'

interface Props {
  service: Service
  index: number
}

export default function ServiceCard({ service, index }: Props) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className="card-hover p-8 border border-[#2a1a1a] bg-[#150a0a] cursor-default"
    >
      <div className="w-12 h-12 border border-gold/30 flex items-center justify-center mb-6">
        <service.icon className="text-gold" size={20} />
      </div>
      <h3 className="font-serif text-xl text-[#f5f0e8] mb-3">{service.title}</h3>
      <p className="text-gray-500 text-sm leading-relaxed font-sans font-light">{service.desc}</p>
    </motion.div>
  )
}
