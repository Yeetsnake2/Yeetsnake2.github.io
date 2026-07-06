import { useEffect, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Loader from './components/Loader'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Awards from './components/Awards'
import Contact from './components/Contact'
import scrollState from './hooks/scrollState'

gsap.registerPlugin(ScrollTrigger)

export default function App() {
  const [loaded, setLoaded] = useState(false)

  // Drives scrollState.progress (0 -> 1 across the full page height).
  // HeroScene reads this every frame to link the 3D model's motion to scroll.
  useEffect(() => {
    const trigger = ScrollTrigger.create({
      trigger: document.documentElement,
      start: 'top top',
      end: 'bottom bottom',
      onUpdate: (self) => {
        scrollState.progress = self.progress
      },
    })
    return () => trigger.kill()
  }, [])

  return (
    <>
      <Loader onDone={() => setLoaded(true)} />
      <div className={`transition-opacity duration-700 ${loaded ? 'opacity-100' : 'opacity-0'}`}>
        <Navbar />
        <main className="bg-base">
          <Hero />
          <About />
          <Experience />
          <Projects />
          <Skills />
          <Awards />
          <Contact />
        </main>
      </div>
    </>
  )
}
