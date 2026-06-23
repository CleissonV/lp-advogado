import SectionTitle from '../components/ui/SectionTitle'
import { contactInfo, socialLinks } from '../constants/data'

export default function Contact() {
  return (
    <section id="contato" className="py-32 bg-[#150a0a]">
      <div className="max-w-7xl mx-auto px-6">
        <SectionTitle title="Consulta Gratuita" subtitle="Entre em Contato" />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <div className="space-y-6 mb-8">
              {contactInfo.map((item, i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className="w-10 h-10 border border-gold/30 flex items-center justify-center flex-shrink-0">
                    <item.icon className="text-gold" size={14} />
                  </div>
                  <span className="text-gray-400 font-sans font-light text-sm">{item.text}</span>
                </div>
              ))}
            </div>
            <div className="flex gap-4">
              {socialLinks.map((s, i) => (
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
  )
}
