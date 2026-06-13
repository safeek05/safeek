'use client'

import Navbar from './components/Navbar'
import Hero from './components/Hero'
import TrustSignals from './components/TrustSignals'
import About from './components/About'
import Stats from './components/Stats'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Journey from './components/Journey'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <Hero />
        <TrustSignals />
        <About />
        <Stats />
        <Projects />
        <Skills />
        <Journey />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
