import Nav from './sections/Nav'
import Hero from './sections/Hero'
import Stats from './sections/Stats'
import Services from './sections/Services'
import About from './sections/About'
import Testimonials from './sections/Testimonials'
import Contact from './sections/Contact'
import Footer from './sections/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-[#0a0505]">
      <Nav />
      <Hero />
      <Stats />
      <Services />
      <About />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  )
}
