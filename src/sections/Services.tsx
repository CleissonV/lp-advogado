import { services } from '../constants/data'
import SectionTitle from '../components/ui/SectionTitle'
import ServiceCard from '../components/ui/ServiceCard'

export default function Services() {
  return (
    <section id="servicos" className="py-32 max-w-7xl mx-auto px-6">
      <SectionTitle title="Nossa Expertise Jurídica" subtitle="Áreas de Atuação" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {services.map((service, i) => (
          <ServiceCard key={i} service={service} index={i} />
        ))}
      </div>
    </section>
  )
}
