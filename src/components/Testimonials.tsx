const testimonials = [
  {
    quote:
      "Ori distinguished himself as an outstanding student in my Computational Complexity course. Complexity is widely regarded as one of the most rigorous and intellectually demanding subjects in the undergraduate curriculum, yet Ori consistently demonstrated the highest academic standards. He is a serious, deep-thinking, and highly dedicated individual. I am confident he will achieve great success in his advanced studies, and I recommend him with the highest praise.",
    name: "Dr. Omer Berkman",
    role: "Senior Lecturer, Academic College of Tel-Aviv Yaffo",
    avatar: "👨‍🏫",
  },
  {
    quote:
      "Ori demonstrated a remarkable ability to master complex software development concepts in a highly demanding environment. He has a sharp analytical mind, consistently identifying edge cases and system design flaws that others miss. His deep technical understanding, combined with a strong drive for independent investigation, makes him highly capable of tackling the most challenging engineering tasks.",
    name: "Aviad Cohen",
    role: "Lecturer of Java-Based Software Development, Academic College of Tel-Aviv Yaffo",
    avatar: "💻",
  },
  {
    quote:
      "Ori is a highly intelligent developer who distinguished himself in the top 2% of students I have taught. His work in Computer Vision and Neural Networks demonstrated a remarkable ability to research and deploy complex analysis into high-quality code. He consistently goes well beyond requirements, bringing both strong analytical skills and a great, dedicated mindset.",
    name: "Yoni Chechik",
    role: "AI & Computer Vision Consultant & Lecturer",
    avatar: "💻",
  },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 sm:py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-500/[0.02] to-transparent pointer-events-none" />

      <div className="section-container relative">
        <p className="text-sm font-mono text-indigo-400 mb-3 tracking-widest uppercase">
          Testimonials
        </p>
        <h2 className="section-heading">What people say</h2>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="glass-card p-8 hover:bg-white/[0.06] transition-all duration-300 flex flex-col"
            >
              {/* Quote icon */}
              <svg
                className="w-8 h-8 text-indigo-500/40 mb-4 flex-shrink-0"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>

              <p className="text-neutral-300 text-sm leading-relaxed mb-6 flex-1">
                "{t.quote}"
              </p>

              <div className="flex items-center gap-3 pt-4 border-t border-white/[0.06]">
                <span className="text-2xl">{t.avatar}</span>
                <div>
                  <div className="text-sm font-medium text-white">{t.name}</div>
                  <div className="text-xs text-neutral-500">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
