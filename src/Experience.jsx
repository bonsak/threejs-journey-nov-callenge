import { OrbitControls, Environment, CameraControls } from '@react-three/drei'
import Ground from './Ground'
import Grumpkin from './Grumpkin'
import Lights from './Lights'
import useSoundStore from './stores/useSound'
import useGrumpkinStore from './stores/useGrumpkin'
import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'

const contentum = new Audio('./audio/contentum.mp3')
contentum.loop = true

export default function Experience() {
  const { soundIsOn, toggleSound } = useSoundStore()
  const { grumpkinType, setGrumpkinType } = useGrumpkinStore()
  const cameraRef = useRef()

  if (soundIsOn) {
    contentum.play()
  } else {
    contentum.pause()
  }

  return (
    <>
      <Grumpkin
        grumptype={grumpkinType}
        position={[0, 0, 0]}
        swearingStartPoint={0}
      />
      {/* <CameraControls
        ref={cameraRef}
        minDistance={3}
        maxDistance={12}
        maxPolarAngle={Math.PI / 3 + 0.5}
        enablePan={false}
        dollyToCursor={false}
        // enabled={enabled}
        // verticalDragToForward={verticalDragToForward}
        // infinityDolly={infinityDolly}
      /> */}
      <OrbitControls
        makeDefault
        minDistance={3}
        maxDistance={12}
        maxPolarAngle={Math.PI / 3 + 0.6}
        enablePan={false}
        target={[0, 1.25, 0]}
      />
      <Environment
        files='./textures/env-v01.hdr'
        ground={{
          height: 10,
          radius: 50,
          scale: 20,
        }}
      ></Environment>
      <Lights />
      <Ground groundScale={40} />
    </>
  )
}
