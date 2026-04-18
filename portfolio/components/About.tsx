import profile2Img from '../src/assets/profile2.jpg'


const About = () => {
  return (
    <section id="about" className="mt-20 grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div className="glass-panel overflow-hidden rounded-4xl p-4">
            <img
              src={profile2Img}
              alt="Portrait or profile image"
              className="h-90 w-full rounded-2xl object-cover"
            />
          </div>

          <div className="space-y-6">
            <div>
              
              <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">
                About
              </h2>
            </div>

            <p className="max-w-2xl text-lg leading-8 text-slate-300">
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