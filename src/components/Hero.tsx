export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-indigo-500/10 rounded-full blur-[120px]" />
        <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[120px]" />
      </div>

      <div className="section-container relative z-10 text-center">
        <div className="animate-fade-in">
          <p className="text-sm font-mono text-indigo-400 mb-6 tracking-widest uppercase">
            Software Engineer
          </p>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight mb-6">
            <span className="text-white">Hi, I'm </span>
            <span className="gradient-text">Ori Braverman</span>
          </h1>

          <p className="text-lg sm:text-xl text-neutral-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            I build robust systems, intelligent applications, and engaging web experiences.
            Passionate about algorithms, deep learning, and clean code.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#projects"
              className="px-8 py-3.5 rounded-xl bg-indigo-500 hover:bg-indigo-400 text-white font-semibold transition-all duration-200 shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40"
            >
              View Projects
            </a>
            <a
              href="https://github.com/OriBraverman"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3.5 rounded-xl bg-white/[0.06] hover:bg-white/[0.12] text-white font-semibold transition-all duration-200 border border-white/[0.08]"
            >
              GitHub Profile
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-neutral-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  )
}
