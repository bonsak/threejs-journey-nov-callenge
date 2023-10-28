import { useState } from 'react'
import { OrbitControls, Environment } from '@react-three/drei'
import Ground from './Ground'
import Grumpkin from './Grumpkin'

// import { Group } from 'three'

export default function Experience() {
  const [spriteIsPlaying, setSpriteIsPlaying] = useState(false)

  return (
    <>
      <Grumpkin grumptype={1} position={[-3, 0, 0]} swearingStartPoint={0} />
      <Grumpkin grumptype={2} position={[-1, 0, 0]} swearingStartPoint={0} />
      <Grumpkin grumptype={3} position={[1, 0, 0]} swearingStartPoint={0} />
      <Grumpkin grumptype={4} position={[3, 0, 0]} swearingStartPoint={0} />
      <OrbitControls
        makeDefault
        minDistance={4}
        maxDistance={16}
        maxPolarAngle={Math.PI / 3 + 0.6}
        enablePan={true}
        target={[0, 1, 0]}
      />
      <Environment
        files='./textures/env-v01.hdr'
        // preset='city'
        // background={false}
        // intensity={0.1}
        ground={{
          height: 10,
          radius: 50,
          scale: 20,
        }}
      ></Environment>
      <group name='lights'>
        <spotLight
          name='key-right'
          position={[6, 6, 0.5]}
          intensity={80}
          color={'orange'}
          castShadow
          penumbra={0.5}
        />
        <spotLight
          name='key-left'
          position={[-5, 4, 3]}
          intensity={30}
          color={'violet'}
          castShadow
          penumbra={0.5}
        />
        <spotLight
          name='blue-rim'
          position={[5, 5, -1]}
          intensity={200}
          color={'blue'}
          castShadow
          penumbra={0.5}
          // lookAt={[0, 0, 0]}
          // targetposition={[0, 0, 0]}
        />
      </group>
      <Ground groundScale={40} />
    </>
  )
}
