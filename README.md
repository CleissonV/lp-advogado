<h1 align="center">Escritório de Advocacia</h1>

<p align="center">
  Landing page para escritório de advocacia com tema escuro dourado, animações elegantes e seções completas de serviços, equipe e contato.
  <br /><br />
  <a href="https://lp-advogado.vercel.app"><strong>🔗 Ver Demo</strong></a>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/React-18-61DAFB?style=flat-square&logo=react&logoColor=white" />
  <img src="https://img.shields.io/badge/TypeScript-5-3178C6?style=flat-square&logo=typescript&logoColor=white" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-3-38BDF8?style=flat-square&logo=tailwindcss&logoColor=white" />
  <img src="https://img.shields.io/badge/Framer_Motion-11-FF0055?style=flat-square&logo=framer&logoColor=white" />
  <img src="https://img.shields.io/badge/Vite-5-646CFF?style=flat-square&logo=vite&logoColor=white" />
</p>

---

## Sobre o Projeto

Landing page profissional para escritório de advocacia. Design sóbrio com paleta dourada sobre fundo escuro, transmitindo autoridade e confiança. Hero com vídeo em loop, partículas animadas via CSS e seções bem definidas para converter visitantes em clientes.

## Funcionalidades

- Hero com vídeo fullscreen e partículas CSS animadas
- Seção de estatísticas com contagem animada
- Cards de serviços com áreas de atuação
- Seção de depoimentos de clientes
- Formulário de contato integrado
- Design responsivo e acessível

## Stack

- **React 18 + TypeScript** — componentes tipados e reutilizáveis
- **Tailwind CSS 3** — estilização utility-first
- **Framer Motion 11** — animações de entrada suaves
- **Vite 5** — build e dev server rápidos
- **react-icons** — ícones da biblioteca Font Awesome

## Instalação

```bash
git clone https://github.com/CleissonV/lp-advogado
cd lp-advogado
npm install
npm run dev
```

## Estrutura

```
src/
├── constants/
│   └── data.ts         # serviços, stats, depoimentos
├── types/
│   └── index.ts        # interfaces TypeScript
├── components/
│   └── ui/
│       ├── Particles.tsx
│       ├── SectionTitle.tsx
│       ├── ServiceCard.tsx
│       ├── TestimonialCard.tsx
│       └── StatItem.tsx
├── sections/
│   ├── Nav.tsx
│   ├── Hero.tsx
│   ├── Stats.tsx
│   ├── Services.tsx
│   ├── About.tsx
│   ├── Testimonials.tsx
│   ├── Contact.tsx
│   └── Footer.tsx
└── App.tsx
```

---

Desenvolvido por [Cleisson Vilela](https://github.com/CleissonV)
