import {
  FaBalanceScale,
  FaShieldAlt,
  FaHandshake,
  FaBriefcase,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaWhatsapp,
  FaLinkedin,
  FaInstagram,
} from 'react-icons/fa'
import type { Service, Stat, Testimonial, SocialLink, ContactInfo } from '../types'

export const services: Service[] = [
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

export const stats: Stat[] = [
  { number: '15+', label: 'Anos de Experiência' },
  { number: '2.400+', label: 'Casos Resolvidos' },
  { number: '98%', label: 'Taxa de Sucesso' },
  { number: '500+', label: 'Clientes Ativos' },
]

export const testimonials: Testimonial[] = [
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

export const socialLinks: SocialLink[] = [
  { icon: FaWhatsapp, href: '#' },
  { icon: FaLinkedin, href: '#' },
  { icon: FaInstagram, href: '#' },
]

export const contactInfo: ContactInfo[] = [
  { icon: FaPhone, text: '(11) 3456-7890' },
  { icon: FaEnvelope, text: 'contato@ferreiraeassociados.com.br' },
  { icon: FaMapMarkerAlt, text: 'Av. Paulista, 1000, São Paulo - SP' },
]
