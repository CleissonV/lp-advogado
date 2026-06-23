import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

interface Props {
  title: string
  subtitle?: string
  light?: boolean
}

export default function SectionTitle({ title, subtitle, light }: Props) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })
  return (
    <div ref={ref} className="text-center mb-16">
      <motion.p
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.6 }}
        className="text-gold tracking-[0.3em] uppercase text-xs mb-4 font-sans"
      >
        {subtitle}
      </motion.p>
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="font-serif text-4xl md:text-5xl text-[#f5f0e8] mb-4"
      >
        {title}
      </motion.h2>
      <div className="section-divider" />
    </div>
  )
}
