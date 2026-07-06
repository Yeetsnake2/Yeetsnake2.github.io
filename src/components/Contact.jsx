import { useRef } from 'react'
import useScrollReveal from '../hooks/useScrollReveal'
import SectionLabel from './SectionLabel'
import { profile } from '../data/resumeData'

export default function Contact() {
  const ref = useRef(null)
  useScrollReveal(ref)

  return (
    <section id="contact" ref={ref} className="relative py-28 md:py-40 px-6 md:px-10 max-w-6xl mx-auto">
      <SectionLabel>contact</SectionLabel>
      <h2 className="reveal font-display text-3xl md:text-5xl text-text max-w-2xl leading-tight">
        Open to research collaborations, internships, and interesting robotics problems.
      </h2>

      <div className="reveal flex flex-wrap gap-4 mt-10">
        <a
          href={`mailto:${profile.email}`}
          className="font-mono text-xs uppercase tracking-widest2 bg-accent text-[color:#0B0E14] px-5 py-3 hover:brightness-110 transition"
        >
          {profile.email}
        </a>
        <a
          href={profile.github}
          target="_blank"
          rel="noreferrer"
          className="font-mono text-xs uppercase tracking-widest2 border border-line text-text px-5 py-3 hover:border-accent hover:text-accent transition"
        >
          GitHub
        </a>
        <a
          href={profile.linkedin}
          target="_blank"
          rel="noreferrer"
          className="font-mono text-xs uppercase tracking-widest2 border border-line text-text px-5 py-3 hover:border-accent hover:text-accent transition"
        >
          LinkedIn
        </a>
        <a
          href={`tel:${profile.phone.replace(/\s/g, '')}`}
          className="font-mono text-xs uppercase tracking-widest2 border border-line text-text px-5 py-3 hover:border-accent hover:text-accent transition"
        >
          {profile.phone}
        </a>
      </div>

      <div className="reveal font-mono text-[11px] text-muted mt-20 border-t border-line pt-6">
        © {new Date().getFullYear()} {profile.name} · Built with React Three Fiber &amp; GSAP
      </div>
    </section>
  )
}
