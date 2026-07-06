import { useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

/**
 * Fades + slides up every element with the given selector inside containerRef,
 * staggered, as it enters the viewport. Call once per section component.
 */
export default function useScrollReveal(containerRef, selector = '.reveal', options = {}) {
  useEffect(() => {
    const ctx = gsap.context(() => {
      const els = containerRef.current?.querySelectorAll(selector)
      if (!els || els.length === 0) return

      gsap.fromTo(
        els,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power3.out',
          stagger: 0.12,
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 80%',
            once: true,
          },
          ...options,
        }
      )
    }, containerRef)

    return () => ctx.revert()
  }, [containerRef, selector, options])
}
