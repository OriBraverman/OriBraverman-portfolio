import { useState, lazy, Suspense } from 'react'
import ProjectFilter from './ProjectFilter'
import projectsData from '../data/projects.json'

interface Project {
  id: number
  name: string
  description: string
  technologies: string[]
  categories: string[]
  github: string
  live: string | null
  image: string
  stars: number
}

const LazyImage = lazy(() => import('./LazyImage'))

const projects: Project[] = projectsData

export const categories = ['All', ...Array.from(new Set(projects.flatMap((p) => p.categories)))]

export function filterProjects(projects: Project[], category: string): Project[] {
  if (category === 'All') return projects
  return projects.filter((p) => p.categories.includes(category))
}

export default function ProjectsGallery() {
  const [activeFilter, setActiveFilter] = useState('All')

  const filtered = filterProjects(projects, activeFilter)

  return (
    <section id="projects" className="py-24 sm:py-32">
      <div className="section-container">
        <p className="text-sm font-mono text-indigo-400 mb-3 tracking-widest uppercase">
          Projects
        </p>
        <h2 className="section-heading">Featured Work</h2>
        <p className="section-subheading">
          A selection of projects showcasing my range — from systems programming to web apps and
          machine learning.
        </p>

        <ProjectFilter
          categories={categories}
          active={activeFilter}
          onChange={setActiveFilter}
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {filtered.map((project, i) => (
            <article
              key={project.id}
              className="glass-card overflow-hidden group hover:bg-white/[0.06] transition-all duration-300"
              style={{ animationDelay: `${i * 80}ms` }}
              data-testid="project-card"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden bg-neutral-800">
                <Suspense
                  fallback={
                    <div className="w-full h-full bg-neutral-800 animate-pulse" />
                  }
                >
                  <LazyImage
                    src={project.image}
                    alt={project.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </Suspense>
                {project.stars > 0 && (
                  <div className="absolute top-3 right-3 flex items-center gap-1 px-2 py-1 rounded-full bg-black/60 backdrop-blur-sm text-xs text-yellow-400">
                    <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    {project.stars}
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-lg font-semibold text-white mb-2">{project.name}</h3>
                <p className="text-sm text-neutral-400 mb-4 line-clamp-3 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 text-xs rounded-full bg-white/[0.06] text-neutral-300 border border-white/[0.06]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex items-center gap-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-neutral-400 hover:text-white transition-colors flex items-center gap-1.5"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                    Code
                  </a>
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-neutral-400 hover:text-white transition-colors flex items-center gap-1.5"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                      Live
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="text-center text-neutral-500 mt-12">No projects found for this filter.</p>
        )}
      </div>
    </section>
  )
}
