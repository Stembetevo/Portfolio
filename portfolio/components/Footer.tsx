import { skills } from '../utils'
import { FaArrowRight } from "react-icons/fa";

const Footer = () => {
  return (
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
              You can reach me by sending an email to this address
            </p>
            <div className="mt-6 flex flex-wrap gap-4">
              <a className="secondary-button" href="mailto:hello@yourname.dev">
                stephenkaruru05@gmail.com
                <FaArrowRight />
              </a>
              <a className="secondary-button" href="#home">
                Back to top
              </a>
            </div>
          </div>
        </section>
  )
}

export default Footer