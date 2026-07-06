// A plain mutable object read inside useFrame() every animation frame.
// GSAP ScrollTrigger writes to it on scroll; the Three.js scene reads it
// without triggering React re-renders. This is what lets scrolling the
// page visibly drive the rotation/energy of the 3D model in the hero.
const scrollState = {
  progress: 0, // 0 -> 1 across the whole page
}

export default scrollState
