import { useRef } from 'react'
import useScrollReveal from '../hooks/useScrollReveal'
import SectionLabel from './SectionLabel'
import { awards, leadership } from '../data/resumeData'

export default function Awards() {
  const ref = useRef(null)
  useScrollReveal(ref)

  return (
    <section id="awards" ref={ref} className="relative py-28 md:py-36 px-6 md:px-10 max-w-6xl mx-auto">
      <SectionLabel>honors_and_leadership</SectionLabel>

      <div className="grid md:grid-cols-2 gap-16">
        <div>
          <h2 className="reveal font-display text-2xl md:text-3xl text-text mb-8">Honors &amp; Awards</h2>
          <ul className="space-y-5">
            {awards.map((a) => (
              <li key={a.title} className="reveal flex gap-4 items-start">
                <span className="mt-1.5 w-2 h-2 rounded-full bg-gold flex-shrink-0" />
                <div>
                  <div className="font-body text-text text-sm md:text-[1rem] leading-snug">{a.title}</div>
                  {a.detail && <div className="font-body text-xs text-muted mt-0.5">{a.detail}</div>}
                  <div className="font-mono text-[11px] text-gold mt-1">{a.year}</div>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="reveal font-display text-2xl md:text-3xl text-text mb-8">Leadership</h2>
          <ul className="space-y-6">
            {leadership.map((l) => (
              <li key={l.org} className="reveal">
                <div className="font-mono text-xs text-accent tracking-wide">{l.period}</div>
                <div className="font-display text-[1rem] md:text-lg text-text mt-1">{l.org}</div>
                <div className="font-body text-sm text-muted">{l.role}</div>
                <p className="font-body text-sm text-muted mt-1 leading-relaxed">{l.detail}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
