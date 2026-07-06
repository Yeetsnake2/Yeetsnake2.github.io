import { useRef } from 'react'
import useScrollReveal from '../hooks/useScrollReveal'
import SectionLabel from './SectionLabel'
import { education, profile } from '../data/resumeData'

export default function About() {
  const ref = useRef(null)
  useScrollReveal(ref)

  return (
    <section id="about" ref={ref} className="relative py-28 md:py-36 px-6 md:px-10 max-w-6xl mx-auto">
      <SectionLabel>about</SectionLabel>
      <div className="grid md:grid-cols-5 gap-12">
        <div className="md:col-span-3">
          <p className="reveal font-display text-2xl md:text-3xl leading-snug text-text">
            I build systems that sit between machine learning and the physical world —
            training models on medical images and EEG signals, then getting robots to
            act on what they learn.
          </p>
          <p className="reveal font-body text-muted mt-6 leading-relaxed max-w-xl">
            Currently a sophomore in Computer Science at LUMS, based in {profile.location}.
            My work spans diagnostic imaging (chest CT, X-ray, tumor detection), imitation
            learning for robotic manipulation, and competitive physics — including a first-ever
            Gold Medal for Pakistan at the International Nuclear Science Olympiad.
          </p>
        </div>

        <div className="md:col-span-2 space-y-6">
          {education.map((ed) => (
            <div key={ed.school} className="reveal border-l border-line pl-5 py-1">
              <div className="font-mono text-xs text-accent tracking-wide">{ed.period}</div>
              <div className="font-display text-lg text-text mt-1">{ed.school}</div>
              <div className="font-body text-sm text-muted mt-1">{ed.degree}</div>
              <div className="font-body text-sm text-muted">{ed.detail}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
