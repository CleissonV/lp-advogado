import type { IconType } from 'react-icons'

export interface Service {
  icon: IconType
  title: string
  desc: string
}

export interface Stat {
  number: string
  label: string
}

export interface Testimonial {
  name: string
  role: string
  text: string
  stars: number
}

export interface SocialLink {
  icon: IconType
  href: string
}

export interface ContactInfo {
  icon: IconType
  text: string
}
