
import { experience } from '../utils'
const Experience = () => {
  return (
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
                  <article key={item.title} className="experience-row glass-panel rounded-3xl p-5">
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
  )
}

export default Experience