export default function About() {
  return (
    <section id="about" className="py-24 sm:py-32">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left — Text */}
          <div>
            <p className="text-sm font-mono text-indigo-400 mb-3 tracking-widest uppercase">
              About Me
            </p>
            <h2 className="section-heading">
              Building software that matters
            </h2>
            <div className="space-y-4 text-neutral-400 leading-relaxed">
              <p>
                I'm a Computer Science student at The Academic College of Tel-Aviv Yaffo with a
                deep passion for systems programming, artificial intelligence, and full-stack
                development. I love turning complex problems into elegant, performant solutions.
              </p>
              <p>
                My experience spans from low-level C/C++ systems (HTTP servers, game engines, MST
                algorithms) to modern web applications and deep learning research. I thrive at
                the intersection of theory and practice.
              </p>
              <p>
                When I'm not coding, I enjoy exploring new technologies, contributing to
                open-source projects, and building things that bring ideas to life.
              </p>
            </div>
          </div>

          {/* Right — Stats Cards */}
          <div className="grid grid-cols-2 gap-4">
            {[
              { value: '9+', label: 'Public Projects' },
              { value: '6+', label: 'Languages' },
              { value: 'CS', label: 'B.Sc. Student' },
              { value: '∞', label: 'Curiosity' },
            ].map((stat) => (
              <div key={stat.label} className="glass-card p-6 text-center hover:bg-white/[0.06] transition-colors duration-300">
                <div className="text-3xl font-bold gradient-text mb-2">{stat.value}</div>
                <div className="text-sm text-neutral-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
