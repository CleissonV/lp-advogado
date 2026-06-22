import { useEffect, useRef, useState } from 'react'
import { motion, useInView, useScroll, useTransform, AnimatePresence } from 'framer-motion'
import { FaBalanceScale, FaShieldAlt, FaHandshake, FaPhone, FaEnvelope, FaMapMarkerAlt, FaLinkedin, FaInstagram, FaWhatsapp, FaChevronDown, FaStar, FaAward, FaUsers, FaBriefcase, FaTimes, FaBars } from 'react-icons/fa'

const Particles = () => {
  const particles = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    size: Math.random() * 4 + 1,
    x: Math.random() * 100,
    y: Math.random() * 100,
    duration: Math.random() * 8 + 6,
    delay: Math.random() * 4,
    opacity: Math.random() * 0.4 + 0.1,
  }))
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map(p => (
        <div
          key={p.id}
          className="particle"
          style={{
            width: p.size,
            height: p.size,
            left: `${p.x}%`,
            top: `${p.y}%`,
            opacity: p.opacity,
            animationDuration: `${p.duration}s`,
            animationDelay: `${p.delay}s`,
          }}
        />
      ))}
    </div>
  )
}

const NavLink = ({ href, children }) => (
  <a href={href} className="text-sm text-gray-400 hover:text-gold transition-colors duration-300 tracking-widest uppercase">
    {children}
  </a>
)

const SectionTitle = ({ children, subtitle }) => {
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
        {children}
      </motion.h2>
      <div className="section-divider" />
    </div>
  )
}

const services = [
  {
    icon: FaBalanceScale,
    title: 'Direito Civil',
    desc: 'Contratos, responsabilidade civil, família e sucessões. Proteção jurídica completa para suas relações civis.',
  },
  {
    icon: FaShieldAlt,
    title: 'Direito Empresarial',
    desc: 'Constituição de empresas, fusões, aquisições e compliance. Assessoria jurídica estratégica para sua empresa.',
  },
  {
    icon: FaBriefcase,
    title: 'Direito Trabalhista',
    desc: 'Defesa de empregados e empregadores. Prevenção de passivos trabalhistas e soluções extrajudiciais.',
  },
  {
    icon: FaHandshake,
    title: 'Mediação e Arbitragem',
    desc: 'Resolução de conflitos de forma rápida, confidencial e eficaz, sem desgaste de processos judiciais.',
  },
]

const stats = [
  { number: '15+', label: 'Anos de Experiência' },
  { number: '2.400+', label: 'Casos Resolvidos' },
  { number: '98%', label: 'Taxa de Sucesso' },
  { number: '500+', label: 'Clientes Ativos' },
]

const testimonials = [
  {
    name: 'Carlos Eduardo Mendes',
    role: 'CEO, TechBrasil',
    text: 'A equipe Ferreira & Associados foi fundamental na reestruturação da nossa empresa. Profissionalismo incomparável.',
    stars: 5,
  },
  {
    name: 'Ana Paula Rodrigues',
    role: 'Empresária',
    text: 'Resolvi em 3 meses um processo que estava parado há 2 anos. Atendimento excepcional e resultado acima do esperado.',
    stars: 5,
  },
  {
    name: 'Roberto Lima',
    role: 'Médico',
    text: 'Cuidaram do meu caso trabalhista com total dedicação. Recomendo sem hesitar a quem precisa de advocacia séria.',
    stars: 5,
  },
]

const StatItem = ({ s, i }) => {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className="text-center"
    >
      <div className="font-serif text-4xl md:text-5xl text-gold mb-2">{s.number}</div>
      <div className="text-gray-500 text-xs tracking-widest uppercase font-sans">{s.label}</div>
    </motion.div>
  )
}

const ServiceCard = ({ s, i }) => {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className="card-hover p-8 border border-[#2a1a1a] bg-[#150a0a] cursor-default"
    >
      <div className="w-12 h-12 border border-gold/30 flex items-center justify-center mb-6">
        <s.icon className="text-gold" size={20} />
      </div>
      <h3 className="font-serif text-xl text-[#f5f0e8] mb-3">{s.title}</h3>
      <p className="text-gray-500 text-sm leading-relaxed font-sans font-light">{s.desc}</p>
    </motion.div>
  )
}

const TestimonialCard = ({ t, i }) => {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className="p-8 border border-[#2a1a1a] bg-[#150a0a] relative"
    >
      <div className="absolute top-6 right-6 font-serif text-5xl text-gold/10">"</div>
      <div className="flex gap-1 mb-4">
        {Array(t.stars).fill(0).map((_, j) => (
          <FaStar key={j} className="text-gold" size={12} />
        ))}
      </div>
      <p className="text-gray-400 text-sm leading-relaxed mb-6 font-sans font-light italic">"{t.text}"</p>
      <div className="border-t border-[#2a1a1a] pt-4">
        <div className="font-sans font-medium text-[#f5f0e8] text-sm">{t.name}</div>
        <div className="text-gold text-xs font-sans mt-1">{t.role}</div>
      </div>
    </motion.div>
  )
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { scrollYProgress } = useScroll()
  const heroY = useTransform(scrollYProgress, [0, 0.3], [0, -100])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div className="min-h-screen bg-[#0a0505]">
      {/* Progress bar */}
      <motion.div
        className="fixed top-0 left-0 h-0.5 bg-gold z-50"
        style={{ scaleX: scrollYProgress, transformOrigin: '0%' }}
      />

      {/* Nav */}
      <nav
        className={`fixed w-full z-40 transition-all duration-500 ${
          scrolled ? 'bg-[#0a0505]/95 backdrop-blur-md border-b border-[#2a1a1a] py-4' : 'py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <a href="#" className="font-serif text-xl text-[#f5f0e8]">
            F<span className="text-gold">&</span>A
          </a>
          <div className="hidden md:flex items-center gap-8">
            <NavLink href="#servicos">Serviços</NavLink>
            <NavLink href="#sobre">Sobre</NavLink>
            <NavLink href="#cases">Cases</NavLink>
            <NavLink href="#contato">Contato</NavLink>
            <a
              href="#contato"
              className="px-6 py-2 border border-gold text-gold text-xs tracking-widest uppercase hover:bg-gold hover:text-[#0a0505] transition-all duration-300 font-sans"
            >
              Consulta Gratuita
            </a>
          </div>
          <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden text-gold">
            {menuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
          </button>
        </div>
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-[#150a0a] border-t border-[#2a1a1a]"
            >
              <div className="flex flex-col gap-4 p-6">
                {['Serviços', 'Sobre', 'Cases', 'Contato'].map(item => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    onClick={() => setMenuOpen(false)}
                    className="text-gray-400 hover:text-gold text-sm tracking-widest uppercase"
                  >
                    {item}
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <video
          autoPlay loop muted playsInline
          poster="https://images.unsplash.com/photo-1674826272758-e5c26d177cf2?w=1920&q=80&auto=format&fit=crop"
          className="absolute inset-0 w-full h-full object-cover opacity-25"
        >
          <source src="https://assets.mixkit.co/videos/41541/41541-1080.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-[#1a0a0a]/90 via-[#0a0505]/85 to-[#0a0505]" />
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              'radial-gradient(ellipse at 50% 0%, rgba(201,168,76,0.12) 0%, transparent 60%)',
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
            Excelência jurídica com mais de 15 anos protegendo pessoas e empresas. Sua causa, nossa
            missão.
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

      {/* Stats */}
      <section className="py-16 border-y border-[#2a1a1a]">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s, i) => (
            <StatItem key={i} s={s} i={i} />
          ))}
        </div>
      </section>

      {/* Services */}
      <section id="servicos" className="py-32 max-w-7xl mx-auto px-6">
        <SectionTitle subtitle="Áreas de Atuação">Nossa Expertise Jurídica</SectionTitle>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((s, i) => (
            <ServiceCard key={i} s={s} i={i} />
          ))}
        </div>
      </section>

      {/* About */}
      <section id="sobre" className="py-32 bg-[#150a0a]">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <SectionTitle subtitle="Sobre o Escritório">15 Anos de Excelência Jurídica</SectionTitle>
            <div className="space-y-4 text-gray-400 font-sans font-light leading-relaxed text-left">
              <p>
                Fundado em 2009, Ferreira & Associados consolidou-se como referência em advocacia
                empresarial e cível no Brasil. Nossa equipe de especialistas oferece soluções jurídicas
                estratégicas e personalizadas.
              </p>
              <p>
                Combinamos profundo conhecimento técnico com visão de negócios, garantindo não apenas a
                defesa dos seus direitos, mas o melhor resultado possível para cada situação.
              </p>
              <p>
                Atendemos clientes em todo o território nacional, com escritórios em São Paulo, Rio de
                Janeiro e Belo Horizonte.
              </p>
            </div>
            <div className="flex flex-wrap gap-4 mt-8 mb-8">
              <div className="flex items-center gap-2 text-gold text-sm font-sans">
                <FaAward size={14} /> OAB Certificado
              </div>
              <div className="flex items-center gap-2 text-gold text-sm font-sans">
                <FaShieldAlt size={14} /> LGPD Compliant
              </div>
              <div className="flex items-center gap-2 text-gold text-sm font-sans">
                <FaStar size={14} /> Top 10 SP 2024
              </div>
            </div>
            <img
              src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800&q=80&auto=format&fit=crop"
              alt="escritório"
              className="w-full h-64 object-cover rounded-lg opacity-80"
            />
          </div>
          <div className="relative">
            <div className="bg-[#0a0505] border border-[#2a1a1a] relative overflow-hidden">
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage:
                    'radial-gradient(circle at 50% 50%, rgba(201,168,76,0.08) 0%, transparent 70%)',
                }}
              />
              <div className="relative z-10 p-8">
                <div className="text-center mb-8">
                  <img
                    src="https://images.unsplash.com/photo-1560250097-0dc405e5be4c?w=400&q=80&auto=format&fit=crop"
                    alt="Dr. Ricardo Ferreira"
                    className="w-32 h-32 object-cover rounded-full mx-auto mb-4 border-2 border-gold/30"
                  />
                  <div className="font-serif text-2xl text-[#f5f0e8]">Dr. Ricardo Ferreira</div>
                  <div className="text-gold text-xs tracking-widest uppercase mt-2 font-sans">
                    Sócio Fundador · OAB/SP 234.891
                  </div>
                  <div className="w-12 h-px bg-gold mx-auto my-4" />
                  <p className="text-gray-500 text-sm font-light leading-relaxed font-sans">
                    Mestre em Direito Empresarial pela USP. 15 anos de experiência em grandes transações
                    corporativas.
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-4 border-t border-[#2a1a1a] pt-6">
                  <div className="text-center">
                    <img
                      src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80&auto=format&fit=crop"
                      alt="Dra. Ana Beatriz"
                      className="w-16 h-16 object-cover rounded-full mx-auto mb-2 border border-gold/20"
                    />
                    <div className="text-[#f5f0e8] text-xs font-sans">Dra. Ana Beatriz</div>
                    <div className="text-gold text-[10px] font-sans mt-1">Direito Civil</div>
                  </div>
                  <div className="text-center">
                    <img
                      src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80&auto=format&fit=crop"
                      alt="Dr. Marcus Oliveira"
                      className="w-16 h-16 object-cover rounded-full mx-auto mb-2 border border-gold/20"
                    />
                    <div className="text-[#f5f0e8] text-xs font-sans">Dr. Marcus Oliveira</div>
                    <div className="text-gold text-[10px] font-sans mt-1">Direito Empresarial</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 border border-gold/20" />
            <div className="absolute -top-4 -left-4 w-16 h-16 border border-gold/20" />
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="cases" className="py-32 max-w-7xl mx-auto px-6">
        <SectionTitle subtitle="Depoimentos">O Que Dizem Nossos Clientes</SectionTitle>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <TestimonialCard key={i} t={t} i={i} />
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contato" className="py-32 bg-[#150a0a]">
        <div className="max-w-7xl mx-auto px-6">
          <SectionTitle subtitle="Entre em Contato">Consulta Gratuita</SectionTitle>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <div className="space-y-6 mb-8">
                {[
                  { icon: FaPhone, text: '(11) 3456-7890' },
                  { icon: FaEnvelope, text: 'contato@ferreiraeassociados.com.br' },
                  { icon: FaMapMarkerAlt, text: 'Av. Paulista, 1000, São Paulo - SP' },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <div className="w-10 h-10 border border-gold/30 flex items-center justify-center flex-shrink-0">
                      <item.icon className="text-gold" size={14} />
                    </div>
                    <span className="text-gray-400 font-sans font-light text-sm">{item.text}</span>
                  </div>
                ))}
              </div>
              <div className="flex gap-4">
                {[
                  { icon: FaWhatsapp, href: '#' },
                  { icon: FaLinkedin, href: '#' },
                  { icon: FaInstagram, href: '#' },
                ].map((s, i) => (
                  <a
                    key={i}
                    href={s.href}
                    className="w-10 h-10 border border-[#2a1a1a] flex items-center justify-center text-gray-500 hover:border-gold hover:text-gold transition-all duration-300"
                  >
                    <s.icon size={16} />
                  </a>
                ))}
              </div>
            </div>
            <form className="space-y-4" onSubmit={e => e.preventDefault()}>
              {[
                { label: 'Nome Completo', type: 'text', placeholder: 'Dr. João Silva' },
                { label: 'E-mail', type: 'email', placeholder: 'joao@empresa.com.br' },
                { label: 'Telefone', type: 'tel', placeholder: '(11) 99999-9999' },
              ].map((field, i) => (
                <div key={i}>
                  <label className="block text-xs tracking-widest uppercase text-gray-600 mb-2 font-sans">
                    {field.label}
                  </label>
                  <input
                    type={field.type}
                    placeholder={field.placeholder}
                    className="w-full bg-[#0a0505] border border-[#2a1a1a] px-4 py-3 text-[#f5f0e8] text-sm font-sans font-light placeholder-gray-700 focus:border-gold focus:outline-none transition-colors duration-300"
                  />
                </div>
              ))}
              <div>
                <label className="block text-xs tracking-widest uppercase text-gray-600 mb-2 font-sans">
                  Mensagem
                </label>
                <textarea
                  rows={4}
                  placeholder="Descreva brevemente sua situação jurídica..."
                  className="w-full bg-[#0a0505] border border-[#2a1a1a] px-4 py-3 text-[#f5f0e8] text-sm font-sans font-light placeholder-gray-700 focus:border-gold focus:outline-none transition-colors duration-300 resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full py-4 bg-gold text-[#0a0505] font-sans font-medium text-sm tracking-widest uppercase hover:bg-gold-light transition-all duration-300"
              >
                Solicitar Consulta Gratuita
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-[#2a1a1a]">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="font-serif text-[#f5f0e8]">
            F<span className="text-gold">&</span>A
          </div>
          <p className="text-gray-600 text-xs font-sans text-center">
            © 2024 Ferreira & Associados. OAB/SP 234.891. Todos os direitos reservados.
          </p>
          <div className="flex gap-6">
            <a
              href="#"
              className="text-gray-600 hover:text-gold text-xs font-sans tracking-widest uppercase transition-colors"
            >
              Privacidade
            </a>
            <a
              href="#"
              className="text-gray-600 hover:text-gold text-xs font-sans tracking-widest uppercase transition-colors"
            >
              Termos
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}
