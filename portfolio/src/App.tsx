import heroImg from './assets/hero.png'
import './App.css'
import { experience, projects, skills } from '../utils/index'
import { FaArrowRight } from "react-icons/fa";
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import About from '../components/About'
import Projects from '../components/Projects'


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

        <section id="experience" className="mt-20 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="space-y-5">
            <p className="section-label">Experience</p>
            <h2 className="text-3xl font-semibold text-white sm:text-4xl">
              Experience that translates directly into product value.
            </h2>
            <p className="max-w-xl text-lg leading-8 text-slate-300">
              This portfolio frames web development experience in the way recruiters tend
              to scan it: what you build, how you build it, and why it matters.
            </p>
          </div>

          <div className="space-y-4">
            {experience.map((item, index) => (
              <article key={item.title} className="experience-row glass-panel rounded-[1.5rem] p-5">
                <div className="flex items-start gap-4">
                  <span className="timeline-marker mt-1" aria-hidden="true">
                    {index + 1}
                  </span>
                  <div>
                    <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                    <p className="mt-2 text-sm leading-7 text-slate-300">{item.text}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-20 grid gap-8 lg:grid-cols-[1fr_0.9fr]">
          <div className="glass-panel rounded-[1.75rem] p-6 sm:p-8">
            <p className="section-label">Toolbox</p>
            <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">
              A focused stack for shipping clean frontends.
            </h2>
            <div className="mt-6 flex flex-wrap gap-3">
              {skills.map((skill) => (
                <span key={skill} className="skill-pill">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div id="contact" className="glass-panel rounded-[1.75rem] p-6 sm:p-8">
            <p className="section-label">Contact</p>
            <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">
              Want to talk about a role or a project?
            </h2>
            <p className="mt-4 text-lg leading-8 text-slate-300">
              Replace the placeholders with your own links and email, then this section
              becomes the direct recruiter handoff.
            </p>
            <div className="mt-6 flex flex-wrap gap-4">
              <a className="primary-button" href="mailto:hello@yourname.dev">
                hello@yourname.dev
                <FaArrowRight />
              </a>
              <a className="secondary-button" href="#home">
                Back to top
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default App
