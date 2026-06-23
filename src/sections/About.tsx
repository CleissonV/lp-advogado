import { FaAward, FaShieldAlt, FaStar } from 'react-icons/fa'
import SectionTitle from '../components/ui/SectionTitle'

export default function About() {
  return (
    <section id="sobre" className="py-32 bg-[#150a0a]">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <SectionTitle title="15 Anos de Excelência Jurídica" subtitle="Sobre o Escritório" />
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
                backgroundImage: 'radial-gradient(circle at 50% 50%, rgba(201,168,76,0.08) 0%, transparent 70%)',
              }}
            />
            <div className="relative z-10 p-8">
              <div className="text-center mb-8">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80&auto=format&fit=crop"
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
  )
}
