import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaTimes, FaBars } from 'react-icons/fa'
import { useScroll } from 'framer-motion'

interface NavLinkProps {
  href: string
  children: React.ReactNode
}

function NavLink({ href, children }: NavLinkProps) {
  return (
    <a href={href} className="text-sm text-gray-400 hover:text-gold transition-colors duration-300 tracking-widest uppercase">
      {children}
    </a>
  )
}

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { scrollYProgress } = useScroll()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 h-0.5 bg-gold z-50"
        style={{ scaleX: scrollYProgress, transformOrigin: '0%' }}
      />
      <nav
        className={`fixed w-full z-40 transition-all duration-500 ${
          scrolled ? 'bg-[#0a0505]/95 backdrop-blur-md border-b border-[#2a1a1a] py-4' : 'py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2.5 font-serif text-xl text-[#f5f0e8]">
            <svg viewBox="0 0 32 32" className="w-6 h-6" fill="none" stroke="#c9a84c" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
              <path d="M16 5v22" /><path d="M7 9h18" /><path d="M7 9l-4 7h8z" /><path d="M25 9l-4 7h8z" /><path d="M11 27h10" />
            </svg>
            <span>F<span className="text-gold">&</span>A</span>
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
    </>
  )
}
