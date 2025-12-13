import { Suspense, useEffect, useState } from 'react'
import Scene from './components/3d/Scene'
import About from './components/About'
import Contact from './components/Contact'
import Experience from './components/Experience'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Skills from './components/Skills'

function App() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    // Simple check to disable complex 3D on very old devices if needed, 
    // but for now we just track resize to maybe disable particles on tiny screens?
    // Actually, react-three fiver is efficient. Let's keep it everywhere but make sure it sits behind.
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  return (
    <div className="bg-secondary min-h-screen text-text-main font-sans selection:bg-primary/30 selection:text-white relative">
      <Suspense fallback={null}>
        <Scene />
      </Suspense>

      <Navbar />
      
      <main className="relative z-10 w-full">
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Contact />
      </main>
    </div>
  )
}

export default App
