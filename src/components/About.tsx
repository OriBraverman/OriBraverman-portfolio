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
                I am an M.Sc. Computer Science graduate from Bar-Ilan University with a deep passion 
                for systems programming, artificial intelligence, and full-stack development. 
                I thrive on transforming complex technical challenges into elegant, high-performance 
                solutions.
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
            <div className="mt-8">
              <a
                href="CV_Ori_Braverman.pdf"
                download="CV_Ori_Braverman.pdf"
                className="inline-flex items-center gap-2 text-indigo-400 hover:text-indigo-300 font-medium transition-colors"
              >
                Download my full CV
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Right — Stats Cards */}
          <div className="grid grid-cols-2 gap-4">
            {[
              { value: '10+', label: 'Public Projects' },
              { value: '6+', label: 'Languages' },
              { value: 'MS', label: 'M.Sc. Graduate' },
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
