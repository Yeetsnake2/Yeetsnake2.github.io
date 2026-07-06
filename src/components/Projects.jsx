import { useRef } from 'react'
import useScrollReveal from '../hooks/useScrollReveal'
import SectionLabel from './SectionLabel'
import { projects, publication } from '../data/resumeData'

export default function Projects() {
  const ref = useRef(null)
  useScrollReveal(ref)

  return (
    <section id="projects" ref={ref} className="relative py-28 md:py-36 px-6 md:px-10 max-w-6xl mx-auto">
      <SectionLabel>projects</SectionLabel>
      <h2 className="reveal font-display text-3xl md:text-4xl text-text mb-14">Selected Work</h2>

      <div className="grid md:grid-cols-2 gap-5">
        {projects.map((p) => (
          <a
            key={p.name}
            href={p.link || undefined}
            target={p.link ? '_blank' : undefined}
            rel={p.link ? 'noreferrer' : undefined}
            className={`reveal group border border-line bg-surface p-7 flex flex-col justify-between transition-colors duration-300 hover:border-accent hover:bg-surface2 ${
              p.link ? 'cursor-pointer' : 'cursor-default'
            }`}
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-display text-xl text-text">{p.name}</h3>
                {p.link && (
                  <span className="font-mono text-xs text-muted group-hover:text-accent transition-colors">↗</span>
                )}
              </div>
              <p className="font-body text-sm text-muted leading-relaxed">{p.description}</p>
            </div>
            <div className="flex flex-wrap gap-2 mt-6">
              {p.stack.map((s) => (
                <span
                  key={s}
                  className="font-mono text-[11px] uppercase tracking-wide text-accent border border-accent/30 px-2 py-1"
                >
                  {s}
                </span>
              ))}
            </div>
          </a>
        ))}
      </div>

      <a
        href={publication.link}
        target="_blank"
        rel="noreferrer"
        className="reveal block mt-6 border border-line bg-surface p-7 hover:border-accent hover:bg-surface2 transition-colors duration-300"
      >
        <div className="font-mono text-xs text-accent tracking-widest2 uppercase mb-2">Publication · {publication.venue}</div>
        <h3 className="font-display text-lg md:text-xl text-text">{publication.title}</h3>
        <div className="font-mono text-xs text-muted mt-2">doi:{publication.doi}</div>
      </a>
    </section>
  )
}
