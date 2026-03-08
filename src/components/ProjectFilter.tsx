interface ProjectFilterProps {
  categories: string[]
  active: string
  onChange: (category: string) => void
}

export default function ProjectFilter({ categories, active, onChange }: ProjectFilterProps) {
  return (
    <div className="flex flex-wrap gap-2" data-testid="project-filter">
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => onChange(cat)}
          data-testid={`filter-btn-${cat}`}
          className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
            active === cat
              ? 'bg-indigo-500 text-white shadow-lg shadow-indigo-500/25'
              : 'bg-white/[0.06] text-neutral-400 hover:bg-white/[0.12] hover:text-white border border-white/[0.06]'
          }`}
        >
          {cat}
        </button>
      ))}
    </div>
  )
}
