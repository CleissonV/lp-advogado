import { motion } from 'framer-motion'
import { useScroll, useTransform } from 'framer-motion'
import { FaChevronDown } from 'react-icons/fa'
import Particles from '../components/ui/Particles'

export default function Hero() {
  const { scrollYProgress } = useScroll()
  const heroY = useTransform(scrollYProgress, [0, 0.3], [0, -100])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <video
        autoPlay loop muted playsInline
        poster="https://images.unsplash.com/photo-1505663912202-ac22d4cb3707?w=1920&q=80&auto=format&fit=crop"
        className="absolute inset-0 w-full h-full object-cover opacity-40"
      >
        <source src="/hero.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-gradient-to-b from-[#1a0a0a]/90 via-[#0a0505]/85 to-[#0a0505]" />
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: 'radial-gradient(ellipse at 50% 0%, rgba(201,168,76,0.12) 0%, transparent 60%)',
        }}
      />
      <Particles />
      <motion.div style={{ y: heroY }} className="relative z-10 text-center max-w-5xl mx-auto px-6">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-gold tracking-[0.4em] uppercase text-xs mb-6 font-sans"
        >
          Advocacia Premium · Desde 2009
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="font-serif text-5xl md:text-7xl lg:text-8xl mb-6 leading-none"
        >
          <span
            style={{
              background: 'linear-gradient(135deg, #c9a84c, #f5d78e, #c9a84c)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundSize: '200% 200%',
              animation: 'shimmer 3s ease infinite',
            }}
          >
            Ferreira &amp;
          </span>
          <br />
          <span className="text-[#f5f0e8]">Associados</span>
        </motion.h1>
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="w-24 h-px bg-gold mx-auto mb-8"
        />
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-12 font-sans font-light"
        >
          Excelência jurídica com mais de 15 anos protegendo pessoas e empresas. Sua causa, nossa missão.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="#contato"
            className="px-10 py-4 bg-gold text-[#0a0505] font-sans font-medium text-sm tracking-widest uppercase hover:bg-gold-light transition-all duration-300"
          >
            Consulta Gratuita
          </a>
          <a
            href="#servicos"
            className="px-10 py-4 border border-[#2a1a1a] text-gray-400 font-sans text-sm tracking-widest uppercase hover:border-gold hover:text-gold transition-all duration-300"
          >
            Ver Serviços
          </a>
        </motion.div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <FaChevronDown className="text-gold animate-bounce" size={16} />
      </motion.div>
    </section>
  )
}
