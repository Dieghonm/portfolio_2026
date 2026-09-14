import Header from "./componentes/Header"
import Hero from "./componentes/Hero"
import Skills from "./componentes/Skills"
import Projects from "./componentes/Projects"
import Contact from "./componentes/Contact"
import Footer from "./componentes/Footer"

import "./Portfolio2026.css"
import HowIDevelop from "./componentes/HowIDevelop"
import AboutMe from "./componentes/AboutMe"

function Portfolio2026() {
  return (
    <div className="container-2026">
      <Header />
      <Hero />
      <AboutMe />
      <Skills />
      <Projects />
      <HowIDevelop />
      <Contact />
      <Footer />
    </div>
  )
}

export default Portfolio2026
