import { useEffect, useState } from 'react'

const links = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'awards', label: 'Awards' },
  { id: 'contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-300 ${
        scrolled ? 'bg-base/80 backdrop-blur-md border-b border-line' : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 md:px-10 h-16 flex items-center justify-between">
        <a href="#top" className="font-display font-semibold text-text tracking-wide">
          M<span className="text-accent">T</span>B
        </a>
        <div className="hidden md:flex items-center gap-8 font-mono text-xs uppercase tracking-widest2 text-muted">
          {links.map((l) => (
            <a key={l.id} href={`#${l.id}`} className="hover:text-accent transition-colors">
              {l.label}
            </a>
          ))}
        </div>
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noreferrer"
          className="font-mono text-xs uppercase tracking-widest2 border border-accent text-accent px-3 py-2 hover:bg-accent hover:text-[color:#0B0E14] transition-colors"
        >
          Resume
        </a>
      </div>
    </nav>
  )
}
