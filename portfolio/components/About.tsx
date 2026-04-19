import aboutImg from '../src/assets/aboutImg.png'

const About = () => {
  return (
    <section id="about" className="mt-16 md:mt-20 grid gap-6 md:gap-8 md:grid-cols-2 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div className="glass-panel overflow-hidden rounded-2xl md:rounded-3xl lg:rounded-4xl p-3 md:p-4">
            <img
              src={aboutImg}
              alt="Portrait or profile image"
              className="h-72 w-full md:h-80 lg:h-96 rounded-lg md:rounded-2xl lg:rounded-3xl object-cover"
            />
          </div>

          <div className="space-y-4 md:space-y-6">
            <div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-white">
                About
              </h2>
            </div>

            <p className="max-w-2xl text-base sm:text-lg leading-7 md:leading-8 text-slate-300">
              I'm a third-year student at Kenyatta University. I use Python and Django for solid backend foundations, build fast and accessible frontends with React, Next.js, and TypeScript, and develop on-chain with Move in the Sui ecosystem. I don't specialize in just one layer, I think across the full stack and build products end to end.
            </p>

            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              {[
                'Strong visual hierarchy and modern styling',
                'Fast, responsive layouts for real devices',
                'Scalable REST APIs with Django and Python',
                'Database design, authentication, and server-side logic',
              ].map((item) => (
                <div key={item} className="feature-card">
                  <span className="feature-dot" aria-hidden="true" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
  )
}

export default About