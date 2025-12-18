import { AnimatePresence } from 'framer-motion'
import { Suspense, useEffect, useState } from 'react'
import Scene from './components/3d/Scene'
import About from './components/About'
import Contact from './components/Contact'
import Cursor from './components/Cursor'
import Experience from './components/Experience'
import Hero from './components/Hero'
import LoadingScreen from './components/LoadingScreen'
import Navbar from './components/Navbar'
import Skills from './components/Skills'

function App() {
  const [isMobile, setIsMobile] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  return (
    <div className="min-h-screen text-text-main font-sans selection:bg-primary/30 selection:text-white relative cursor-none">
      <AnimatePresence>
        {isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}
      </AnimatePresence>

      {!isLoading && (
        <>
            <Suspense fallback={null}>
                <Scene />
                <Cursor />
            </Suspense>

            <Navbar />
            
            <main className="relative z-10 w-full">
                <Hero />
                <About />
                <Experience />
                <Skills />
                <Contact />
            </main>
        </>
      )}
    </div>
  )
}

export default App
