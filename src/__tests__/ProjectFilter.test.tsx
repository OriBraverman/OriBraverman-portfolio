import { describe, it, expect } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import ProjectFilter from '../components/ProjectFilter'
import { categories, filterProjects, Project } from '../components/ProjectsGallery'
import projectsDataRaw from '../data/projects.json'

const projectsData = projectsDataRaw as Project[]

describe('filterProjects', () => {
  it('returns all projects when filter is "All"', () => {
    const result = filterProjects(projectsData, 'All')
    expect(result).toHaveLength(projectsData.length)
  })

  it('returns only Web projects when filter is "Web"', () => {
    const result = filterProjects(projectsData, 'Web')
    expect(result.every((p) => p.categories.includes('Web'))).toBe(true)
    expect(result.length).toBeGreaterThan(0)
  })

  it('returns only Games projects when filter is "Games"', () => {
    const result = filterProjects(projectsData, 'Games')
    expect(result.every((p) => p.categories.includes('Games'))).toBe(true)
    expect(result.length).toBeGreaterThan(0)
  })

  it('returns only ML projects when filter is "ML"', () => {
    const result = filterProjects(projectsData, 'ML')
    expect(result.every((p) => p.categories.includes('ML'))).toBe(true)
    expect(result.length).toBeGreaterThan(0)
  })

  it('returns only Systems projects when filter is "Systems"', () => {
    const result = filterProjects(projectsData, 'Systems')
    expect(result.every((p) => p.categories.includes('Systems'))).toBe(true)
    expect(result.length).toBeGreaterThan(0)
  })

  it('returns empty array for nonexistent category', () => {
    const result = filterProjects(projectsData, 'Nonexistent')
    expect(result).toHaveLength(0)
  })
})

describe('categories', () => {
  it('starts with "All"', () => {
    expect(categories[0]).toBe('All')
  })

  it('contains unique values', () => {
    const unique = new Set(categories)
    expect(unique.size).toBe(categories.length)
  })

  it('contains expected categories', () => {
    expect(categories).toContain('Web')
    expect(categories).toContain('Games')
    expect(categories).toContain('ML')
    expect(categories).toContain('Systems')
  })
})

describe('ProjectFilter component', () => {
  it('renders all category buttons', () => {
    render(
      <ProjectFilter categories={categories} active="All" onChange={() => {}} />
    )
    categories.forEach((cat) => {
      expect(screen.getByTestId(`filter-btn-${cat}`)).toBeInTheDocument()
    })
  })

  it('highlights the active filter button', () => {
    render(
      <ProjectFilter categories={categories} active="Web" onChange={() => {}} />
    )
    const webBtn = screen.getByTestId('filter-btn-Web')
    expect(webBtn.className).toContain('bg-indigo-500')
  })

  it('calls onChange when a filter button is clicked', () => {
    let selected = ''
    render(
      <ProjectFilter
        categories={categories}
        active="All"
        onChange={(cat) => { selected = cat }}
      />
    )
    fireEvent.click(screen.getByTestId('filter-btn-Games'))
    expect(selected).toBe('Games')
  })

  it('does not highlight inactive buttons with active style', () => {
    render(
      <ProjectFilter categories={categories} active="All" onChange={() => {}} />
    )
    const gamesBtn = screen.getByTestId('filter-btn-Games')
    expect(gamesBtn.className).not.toContain('bg-indigo-500')
  })
})
