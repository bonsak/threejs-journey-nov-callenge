import * as THREE from 'three'
export default function Lights() {
  return (
    <group name='lights'>
      <spotLight
        name='key-right'
        position={[6, 6, 1]}
        intensity={100}
        color={new THREE.Color('rgb(243, 180, 108)')}
        castShadow
        penumbra={0.5}
      />
      <spotLight
        name='key-left'
        position={[-5, 4, 3]}
        intensity={30}
        color={new THREE.Color('rgb(200, 152, 245)')}
        castShadow
        penumbra={0.5}
      />
      <spotLight
        name='rim'
        position={[0, 5, -1]}
        intensity={25}
        color={new THREE.Color('rgb(71, 193, 250)')}
        castShadow
        penumbra={1}
      />
    </group>
  )
}
