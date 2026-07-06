import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import HeroScene from './HeroScene'
import { profile } from '../data/resumeData'

export default function Hero() {
  const textRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.4 })
      tl.fromTo(
        '.hero-line',
        { opacity: 0, y: 24 },
        { opacity: 1, y: 0, duration: 0.9, ease: 'power3.out', stagger: 0.14 }
      )
    }, textRef)
    return () => ctx.revert()
  }, [])

  return (
    <section id="top" className="relative min-h-screen w-full overflow-hidden bg-base">
      <HeroScene />

      {/* HUD coordinate readout - a lab/telemetry detail, not decoration */}
      <div className="hero-line absolute top-20 left-6 md:left-10 font-mono text-[11px] text-muted tracking-wide hidden sm:block">
        LAT 34.15°N · LON 73.21°E
        <br />
        STATUS: ONLINE
      </div>

      <div
        ref={textRef}
        className="relative z-10 min-h-screen flex flex-col justify-center px-6 md:px-10 max-w-6xl mx-auto"
      >
        <div className="hero-line font-mono text-xs md:text-sm text-accent tracking-widest2 uppercase mb-5">
          BS Computer Science · LUMS · GPA 4.0
        </div>
        <h1 className="hero-line font-display font-semibold text-4xl sm:text-5xl md:text-7xl leading-[1.05] text-text max-w-4xl">
          {profile.name}
        </h1>
        <p className="hero-line font-body text-[1rem] md:text-xl text-muted mt-6 max-w-2xl">
          {profile.tagline}
        </p>

        <div className="hero-line flex flex-wrap gap-4 mt-10">
          <a
            href="#projects"
            className="font-mono text-xs uppercase tracking-widest2 bg-accent text-[color:#0B0E14] px-5 py-3 hover:brightness-110 transition"
          >
            View Work
          </a>
          <a
            href="#contact"
            className="font-mono text-xs uppercase tracking-widest2 border border-line text-text px-5 py-3 hover:border-accent hover:text-accent transition"
          >
            Get in Touch
          </a>
        </div>
      </div>

      <div className="hero-line absolute bottom-8 left-1/2 -translate-x-1/2 font-mono text-[10px] text-muted tracking-widest2 uppercase">
        scroll ↓
      </div>
    </section>
  )
}
