
const Navbar = () => {
  return (
    <nav className="glass-panel flex flex-wrap items-center justify-between gap-4 rounded-full px-5 py-4">
          

          <div className="ml-auto flex flex-wrap items-center gap-3 text-sm text-slate-300">
            <a className="nav-link" href="#about">
              About
            </a>
            <a className="nav-link" href="#projects">
              Projects
            </a>
            <a className="nav-link" href="#experience">
              Experience
            </a>
            <a className="nav-link" href="#contact">
              Contact
            </a>
          </div>
        </nav>
  )
}

export default Navbar