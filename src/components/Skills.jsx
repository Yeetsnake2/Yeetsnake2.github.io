import { useRef } from 'react'
import useScrollReveal from '../hooks/useScrollReveal'
import SectionLabel from './SectionLabel'
import { skills } from '../data/resumeData'

export default function Skills() {
  const ref = useRef(null)
  useScrollReveal(ref)

  return (
    <section id="skills" ref={ref} className="relative py-28 md:py-36 px-6 md:px-10 max-w-6xl mx-auto">
      <SectionLabel>stack</SectionLabel>
      <h2 className="reveal font-display text-3xl md:text-4xl text-text mb-14">Skills</h2>

      <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-5">
        {skills.map((group) => (
          <div key={group.category} className="reveal border border-line bg-surface p-6">
            <div className="font-mono text-xs text-accent tracking-widest2 uppercase mb-4">{group.category}</div>
            <ul className="space-y-2">
              {group.items.map((item) => (
                <li key={item} className="font-body text-sm text-muted">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
