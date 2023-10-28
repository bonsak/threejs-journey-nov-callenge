import { useRef, useState } from 'react'
import { Clouds, Cloud } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

export default function Mist() {
  const haze = useRef()
  const [hazeGrowth] = useState(() => Math.round(Math.random() * 8 + 1), [])

  useFrame((state) => {
    const time = state.clock.getElapsedTime()

    const hazeRotation = new THREE.Euler(0, time * 0.02, 0)
    haze.current.setRotationFromEuler(hazeRotation)
  })

  return (
    <>
      <Clouds ref={haze} material={THREE.MeshStandardMaterial}>
        <Cloud
          segments={150}
          bounds={[11, 2, 11]}
          //   concentrate='inside'
          volume={25}
          color='white'
          opacity={0.2}
          position={[0, 0, 0]}
          fade={110}
        />
      </Clouds>
    </>
  )
}
