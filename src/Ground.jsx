import { useTexture } from '@react-three/drei'

export default function Ground(groundScale) {
  // Load ground textures
  const [groundColorMap, groundAlphaMap] = useTexture([
    './textures/ground-color.jpg',
    './textures/ground-alpha.jpg',
  ])
  return (
    <mesh receiveShadow scale={25} rotation={[-Math.PI * 0.5, 0, 0]}>
      <planeGeometry />
      <meshStandardMaterial
        map={groundColorMap}
        alphaMap={groundAlphaMap}
        transparent
      />
    </mesh>
  )
}
