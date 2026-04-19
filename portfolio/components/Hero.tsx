import { FaArrowRight } from "react-icons/fa";
import profile2Img from '../src/assets/profile2.jpg'


const Hero = () => {
    return (
        <section className="grid items-center gap-8 md:gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14">
            <div className="space-y-6 md:space-y-8">
                <div className="space-y-4 md:space-y-5">
                    <h1 className="max-w-3xl text-2xl font-semibold leading-[1.1] text-white sm:text-3xl md:text-5xl lg:text-6xl">
                        Hi I am Stephen Karuru Kinyua
                    </h1>
                    <p className="max-w-2xl text-base leading-7 text-slate-300 sm:text-lg md:text-xl">
                        I'm a fullstack developer and blockchain builder crafting seamless digital experiences. From React interfaces to Sui smart contracts, I turn ideas into products that work.
                    </p>
                </div>
                <div className="flex flex-wrap gap-4">
                    <a className="secondary-button" href="#projects">
                        View projects
                        <FaArrowRight />
                    </a>
                    <a className="secondary-button" href="#contact">
                        Contact me
                    </a>
                </div>

                
            </div>

            <div className="relative">
                <div className="overflow-hidden rounded-2xl md:rounded-3xl lg:rounded-4xl p-3 md:p-4">
                    <div className="relative overflow-hidden rounded-xl md:rounded-2xl lg:rounded-3xl border border-white/10 bg-slate-950/80">
                        <img
                            src={profile2Img}
                            alt="Hero visual for the portfolio"
                            className="hero-image h-64 w-full object-cover sm:h-80 md:h-96 lg:h-130"
                        />
                        <div className="absolute inset-x-2 bottom-2 md:inset-x-4 md:bottom-4 rounded-lg md:rounded-2xl border border-white/10 bg-slate-950/75 p-3 md:p-4 backdrop-blur-xl">
                            <p className="text-xs uppercase tracking-[0.28em] text-cyan-100/80">
                                Core focus
                            </p>
                            <p className="mt-2 text-sm md:text-lg font-medium text-white">
                                From pixel-perfect React interfaces to robust Django backends and Sui smart contracts, I bring full-stack thinking to every project. 
                            </p>
                        </div>
                    </div>
                </div>

                
            </div>
        </section>

    )
}

export default Hero