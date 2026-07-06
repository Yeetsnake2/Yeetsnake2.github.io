import { useRef, useMemo, useEffect } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import gsap from 'gsap'
import scrollState from '../hooks/scrollState'

// Ambient point cloud scattered in a large sphere around the model —
// gives the scene depth without competing with the wireframe subject.
function AmbientField({ count = 900 }) {
  const pointsRef = useRef()

  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      const r = 6 + Math.random() * 9
      const theta = Math.random() * Math.PI * 2
      const phi = Math.acos(2 * Math.random() - 1)
      arr[i * 3] = r * Math.sin(phi) * Math.cos(theta)
      arr[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta)
      arr[i * 3 + 2] = r * Math.cos(phi)
    }
    return arr
  }, [count])

  useFrame((state) => {
    if (!pointsRef.current) return
    pointsRef.current.rotation.y = state.clock.elapsedTime * 0.015
    pointsRef.current.rotation.x = state.clock.elapsedTime * 0.006
  })

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial size={0.035} color="#3ED6C4" transparent opacity={0.35} sizeAttenuation />
    </points>
  )
}

// The signature: a wireframe icosahedron built from an underlying particle
// lattice. It assembles on page load (scale + rotation spin-up) and its
// rotation speed / glow responds to how far the user has scrolled — the
// model is "driven" by engagement with the page, not just decorative.
function CoreLattice() {
  const groupRef = useRef()
  const wireRef = useRef()
  const pointsRef = useRef()

  const icosGeometry = useMemo(() => new THREE.IcosahedronGeometry(2.1, 1), [])
  const vertexPositions = useMemo(() => icosGeometry.attributes.position.array, [icosGeometry])

  useEffect(() => {
    if (!groupRef.current) return
    gsap.fromTo(
      groupRef.current.scale,
      { x: 0, y: 0, z: 0 },
      { x: 1, y: 1, z: 1, duration: 1.6, ease: 'elastic.out(1, 0.6)', delay: 0.3 }
    )
    gsap.fromTo(
      groupRef.current.rotation,
      { y: -Math.PI },
      { y: 0, duration: 1.8, ease: 'power3.out', delay: 0.3 }
    )
  }, [])

  useFrame((state) => {
    if (!groupRef.current) return
    const t = state.clock.elapsedTime
    const scrollBoost = scrollState.progress * 2.4 // scroll adds spin energy

    groupRef.current.rotation.y += 0.0022 + scrollBoost * 0.0016
    groupRef.current.rotation.x = Math.sin(t * 0.15) * 0.15 + scrollState.progress * 0.6

    // gentle bob
    groupRef.current.position.y = Math.sin(t * 0.6) * 0.12

    if (wireRef.current) {
      wireRef.current.material.opacity = 0.35 + scrollState.progress * 0.4
    }
    if (pointsRef.current) {
      pointsRef.current.material.size = 0.05 + scrollState.progress * 0.03
    }
  })

  return (
    <group ref={groupRef}>
      <mesh ref={wireRef} geometry={icosGeometry}>
        <meshBasicMaterial color="#3ED6C4" wireframe transparent opacity={0.35} />
      </mesh>
      <points ref={pointsRef}>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[vertexPositions, 3]} />
        </bufferGeometry>
        <pointsMaterial size={0.05} color="#E7ECEF" transparent opacity={0.9} sizeAttenuation />
      </points>
    </group>
  )
}

function Rig() {
  // subtle camera parallax on mouse move — cheap, restrained, not a whole orbit control
  useFrame((state) => {
    const { mouse, camera } = state
    camera.position.x += (mouse.x * 0.6 - camera.position.x) * 0.03
    camera.position.y += (mouse.y * 0.4 - camera.position.y) * 0.03
    camera.lookAt(0, 0, 0)
  })
  return null
}

export default function HeroScene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 7], fov: 45 }}
      dpr={[1, 1.8]}
      gl={{ antialias: true, alpha: true }}
      style={{ position: 'absolute', inset: 0 }}
    >
      <ambientLight intensity={0.4} />
      <pointLight position={[5, 5, 5]} intensity={0.6} color="#3ED6C4" />
      <CoreLattice />
      <AmbientField />
      <Rig />
    </Canvas>
  )
}
