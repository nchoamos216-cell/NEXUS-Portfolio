
import { useEffect, useState } from 'react'

import Navbar from './components/Navbar'
import Footer from './components/Footer'

import Hero from './sections/Hero'
import About from './sections/About'
import Skills from './sections/Skills'
import Projects from './sections/Projects'
import Startups from './sections/Startups'
import Services from './sections/Services'
import Contact from './sections/Contact'
import Appointment from './sections/Appointment'
import FAQ from './sections/FAQ'

function App() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('amos-theme') || 'dark'
  })

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('amos-theme', theme)
  }, [theme])

  const toggleTheme = () => {
    setTheme((currentTheme) =>
      currentTheme === 'dark' ? 'light' : 'dark'
    )
  }

  useEffect(() => {
    const elements = document.querySelectorAll(
      '.section-heading, .about-grid, .skills-grid, .projects-grid, .startups-grid, .services-grid, .contact-grid, .appointment-container, .appointment-form, .project-card, .startup-card, .skill-card, .service-card, .about-card'
    )

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      {
        threshold: 0.15,
      }
    )

    elements.forEach((element) => {
      element.classList.add('reveal-on-scroll')
      observer.observe(element)
    })

    return () => observer.disconnect()
  }, [])

  return (
  <>
      <div className="nexus-nebula" aria-hidden="true" />
    <div className="nexus-energy-wave" aria-hidden="true" />

       <Navbar theme={theme} toggleTheme={toggleTheme} />

      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Startups />
        <Services />
        <FAQ />
        <Appointment />
        <Contact />
      </main>

      <Footer />
    </>
  )
}

export default App





