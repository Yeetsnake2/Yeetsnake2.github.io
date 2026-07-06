import { useRef } from 'react'
import useScrollReveal from '../hooks/useScrollReveal'
import SectionLabel from './SectionLabel'
import { experience } from '../data/resumeData'

export default function Experience() {
  const ref = useRef(null)
  useScrollReveal(ref)

  return (
    <section id="experience" ref={ref} className="relative py-28 md:py-36 px-6 md:px-10 max-w-6xl mx-auto">
      <SectionLabel>experience_log</SectionLabel>
      <h2 className="reveal font-display text-3xl md:text-4xl text-text mb-14">Experience</h2>

      <div className="relative border-l border-line ml-2">
        {experience.map((job) => (
          <div key={job.org} className="reveal relative pl-8 pb-14 last:pb-0">
            <span className="absolute -left-[5px] top-1.5 w-[9px] h-[9px] rounded-full bg-accent" />
            <div className="font-mono text-xs text-accent tracking-wide mb-2">{job.period}</div>
            <h3 className="font-display text-xl md:text-2xl text-text">{job.org}</h3>
            <div className="font-body text-sm text-muted mt-1 mb-4">{job.role}</div>
            <ul className="space-y-2">
              {job.points.map((p, i) => (
                <li key={i} className="font-body text-sm md:text-[1rem] text-muted leading-relaxed flex gap-3">
                  <span className="text-accent">›</span>
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
