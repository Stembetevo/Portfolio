
import { experience } from '../utils'
const Experience = () => {
  return (
    <section id="experience" className="mt-16 md:mt-20 grid gap-6 md:gap-8 md:grid-cols-1 lg:grid-cols-[0.9fr_1.1fr]">
              <div className="space-y-3 md:space-y-5">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-white">
                  Experience 
                </h2>
                <p className="max-w-xl text-base sm:text-lg leading-7 md:leading-8 text-slate-300">
                  My journey in tech has moulded me into a curious and open-minded developer. Ready to try create solutions for real-world problems.
                </p>
              </div>
    
              <div className="space-y-3 md:space-y-4">
                {experience.map((item) => (
                  <article key={item.title} className="experience-row glass-panel rounded-3xl p-5">
                    <div className="flex items-start gap-4">
                      
                      <div className="space-y-3">
                        <h3 className="text-2xl font-semibold text-white">{item.title}</h3>
                        
                        {'text' in item && item.text ? (
                          <p className="rounded-2xl border border-white/10 bg-white/5 p-3 text-sm leading-7 text-slate-200">
                            {item.text}
                          </p>
                        ) : null}
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </section>
  )
}

export default Experience