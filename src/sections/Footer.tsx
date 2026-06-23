export default function Footer() {
  return (
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
  )
}
