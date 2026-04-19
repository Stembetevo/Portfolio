import './App.css'

import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import About from '../components/About'
import Projects from '../components/Projects'
import Experience from '../components/Experience'
import Footer from '../components/Footer'

function App() {
  return (
    <div className="relative min-h-screen overflow-hidden text-slate-100">
      <div className="ambient-orb orb-one" aria-hidden="true" />
      <div className="ambient-orb orb-two" aria-hidden="true" />

      <header className="mx-auto max-w-7xl px-4 pt-4 sm:px-6 lg:px-8">
        <Navbar />
      </header>

      <main id="home" className="mx-auto max-w-7xl px-4 pb-16 pt-10 sm:px-6 lg:px-8 lg:pt-16">
        <Hero />

        <About />

        <Projects />

        <Experience />

        <Footer />
        
      </main>
    </div>
  )
}

export default App
