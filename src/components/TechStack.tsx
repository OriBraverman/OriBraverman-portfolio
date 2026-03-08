const techCategories = [
  {
    title: 'Languages',
    items: [
      { name: 'C++', icon: '⚡' },
      { name: 'Python', icon: '🐍' },
      { name: 'Java', icon: '☕' },
      { name: 'JavaScript', icon: '🟨' },
      { name: 'TypeScript', icon: '🔷' },
      { name: 'C', icon: '🔧' },
    ],
  },
  {
    title: 'Web & Frameworks',
    items: [
      { name: 'React', icon: '⚛️' },
      { name: 'Node.js', icon: '🟢' },
      { name: 'HTML/CSS', icon: '🎨' },
      { name: 'Tailwind CSS', icon: '💨' },
      { name: 'Vite', icon: '⚡' },
      { name: 'REST APIs', icon: '🔗' },
    ],
  },
  {
    title: 'AI & Data',
    items: [
      { name: 'PyTorch', icon: '🔥' },
      { name: 'Deep Learning', icon: '🧠' },
      { name: 'NLP', icon: '📝' },
      { name: 'Computer Vision', icon: '👁️' },
      { name: 'Algorithms', icon: '📊' },
      { name: 'Data Structures', icon: '🌲' },
    ],
  },
  {
    title: 'Tools & Systems',
    items: [
      { name: 'Git', icon: '📦' },
      { name: 'Linux', icon: '🐧' },
      { name: 'Arduino', icon: '🤖' },
      { name: 'Networking', icon: '🌐' },
      { name: 'Multithreading', icon: '🧵' },
      { name: 'VS Code', icon: '🖥️' },
    ],
  },
]

export default function TechStack() {
  return (
    <section id="tech" className="py-24 sm:py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-indigo-500/[0.02] to-transparent pointer-events-none" />

      <div className="section-container relative">
        <p className="text-sm font-mono text-indigo-400 mb-3 tracking-widest uppercase">
          Tech Stack
        </p>
        <h2 className="section-heading">Technologies I work with</h2>
        <p className="section-subheading">
          A diverse toolkit spanning systems programming, web development, and machine learning.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {techCategories.map((cat) => (
            <div key={cat.title} className="glass-card p-6 hover:bg-white/[0.06] transition-all duration-300">
              <h3 className="text-sm font-semibold text-white mb-4 uppercase tracking-wide">
                {cat.title}
              </h3>
              <div className="space-y-3">
                {cat.items.map((tech) => (
                  <div
                    key={tech.name}
                    className="flex items-center gap-3 text-neutral-300 hover:text-white transition-colors duration-200"
                  >
                    <span className="text-lg">{tech.icon}</span>
                    <span className="text-sm">{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
