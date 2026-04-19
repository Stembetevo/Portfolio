
import { projects } from '../utils'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'

const Projects = () => {
  return (
    <section id="projects" className="mt-16 md:mt-20 space-y-6 md:space-y-8">
          <div className="max-w-3xl">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-white">
              Projects
            </h2>
          </div>

          <div className="grid gap-4 md:gap-6 sm:grid-cols-2 lg:grid-cols-3">
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

                <div className="mt-6 flex gap-3">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 rounded-lg border border-cyan-200/30 bg-cyan-200/10 px-4 py-2 text-sm font-medium text-cyan-100 transition hover:bg-cyan-200/20"
                    >
                      <FaExternalLinkAlt className="h-4 w-4" />
                      Live
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 rounded-lg border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium text-slate-200 transition hover:bg-white/20"
                    >
                      <FaGithub className="h-4 w-4" />
                      Source
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>
        </section>
  )
}

export default Projects