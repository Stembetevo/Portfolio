
import { projects } from '../utils'

const Projects = () => {
  return (
    <section id="projects" className="mt-20 space-y-8">
          <div className="max-w-3xl">
            <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">
              Projects
            </h2>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {projects.map((project) => (
              <article key={project.title} className="project-card glass-panel flex h-full flex-col rounded-[1.75rem] p-6">
                <p className="text-xs uppercase tracking-[0.28em] text-cyan-100/70">
                  Featured project
                </p>
                <h3 className="mt-4 text-2xl font-semibold text-white">{project.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-300">{project.description}</p>

                <div className="mt-5 rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-slate-200">
                  {project.impact}
                </div>

                <div className="mt-5 flex flex-wrap gap-2">
                  {project.stack.map((item) => (
                    <span key={item} className="tag-pill">
                      {item}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>
  )
}

export default Projects