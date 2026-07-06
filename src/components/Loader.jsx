import { useEffect, useState } from 'react'

export default function Loader({ onDone }) {
  const [progress, setProgress] = useState(0)
  const [hide, setHide] = useState(false)

  useEffect(() => {
    let raf
    const start = performance.now()
    const duration = 1100

    const tick = (now) => {
      const p = Math.min(1, (now - start) / duration)
      setProgress(p)
      if (p < 1) {
        raf = requestAnimationFrame(tick)
      } else {
        setTimeout(() => {
          setHide(true)
          onDone?.()
        }, 200)
      }
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [onDone])

  return (
    <div
      className={`fixed inset-0 z-[100] bg-base flex flex-col items-center justify-center transition-opacity duration-500 ${
        hide ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      <div className="font-mono text-xs text-muted tracking-widest2 mb-3">BOOTING_PORTFOLIO.SYS</div>
      <div className="w-56 h-[2px] bg-line overflow-hidden">
        <div
          className="h-full bg-accent transition-[width]"
          style={{ width: `${Math.floor(progress * 100)}%` }}
        />
      </div>
      <div className="font-mono text-xs text-accent mt-3">{Math.floor(progress * 100)}%</div>
    </div>
  )
}
