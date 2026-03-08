import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import TechStack from './components/TechStack'
import ProjectsGallery from './components/ProjectsGallery'
import Testimonials from './components/Testimonials'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <About />
        <TechStack />
        <ProjectsGallery />
        <Testimonials />
      </main>
      <Footer />
    </div>
  )
}
