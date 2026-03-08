import { useState, useEffect } from 'react'

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Tech', href: '#tech' },
  { label: 'Projects', href: '#projects' },
  { label: 'Testimonials', href: '#testimonials' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-neutral-950/80 backdrop-blur-lg border-b border-white/[0.06]'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 h-16 flex items-center justify-between">
        <a href="#" className="text-xl font-bold gradient-text">
          OB
        </a>

        {/* Desktop */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm text-neutral-400 hover:text-white transition-colors duration-200"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="https://github.com/OriBraverman"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm px-4 py-2 rounded-lg bg-white/[0.06] hover:bg-white/[0.12] text-white transition-all duration-200"
            >
              GitHub
            </a>
          </li>
        </ul>

        {/* Mobile toggle */}
        <button
          aria-label="Toggle menu"
          className="md:hidden p-2 text-neutral-400 hover:text-white"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {mobileOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-neutral-950/95 backdrop-blur-lg border-b border-white/[0.06]">
          <ul className="px-6 py-4 space-y-3">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="block text-neutral-300 hover:text-white transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  )
}
