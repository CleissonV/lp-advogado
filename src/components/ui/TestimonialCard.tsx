import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { FaStar } from 'react-icons/fa'
import type { Testimonial } from '../../types'

interface Props {
  testimonial: Testimonial
  index: number
}

export default function TestimonialCard({ testimonial, index }: Props) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className="p-8 border border-[#2a1a1a] bg-[#150a0a] relative"
    >
      <div className="absolute top-6 right-6 font-serif text-5xl text-gold/10">"</div>
      <div className="flex gap-1 mb-4">
        {Array(testimonial.stars).fill(0).map((_, j) => (
          <FaStar key={j} className="text-gold" size={12} />
        ))}
      </div>
      <p className="text-gray-400 text-sm leading-relaxed mb-6 font-sans font-light italic">"{testimonial.text}"</p>
      <div className="border-t border-[#2a1a1a] pt-4">
        <div className="font-sans font-medium text-[#f5f0e8] text-sm">{testimonial.name}</div>
        <div className="text-gold text-xs font-sans mt-1">{testimonial.role}</div>
      </div>
    </motion.div>
  )
}
