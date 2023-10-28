import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { useState } from 'react'

export default function Swearing({
  opacity = 0,
  wireframe,
  scale = 1,
  startPoint = 0,
}) {
  const { nodes } = useGLTF('./models/swearing-v01.glb')
  const [counter, setCounter] = useState(0)

  const randomRange = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min
  }

  useFrame(() => {
    setCounter((startPoint + counter + 1) % 28)
  })

  return (
    <>
      <mesh
        geometry={Object.values(nodes)[counter].geometry}
        scale={scale}
        position={Object.values(nodes)[counter].position}
      >
        <meshBasicMaterial
          scale={randomRange(0.9, 5)}
          transparent={true}
          opacity={opacity}
          wireframe={wireframe}
          color={'white'}
        />
      </mesh>
    </>
  )
}
