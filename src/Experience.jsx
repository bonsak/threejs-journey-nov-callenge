import { OrbitControls, Environment } from '@react-three/drei'
import Ground from './Ground'
import Grumpkin from './Grumpkin'
import Lights from './Lights'
import useGrumpkinStore from './stores/useGrumpkin'

export default function Experience() {
  const { grumpkinType, setGrumpkinType } = useGrumpkinStore()

  return (
    <>
      <Grumpkin
        grumptype={grumpkinType}
        position={[0, 0, 0]}
        swearingStartPoint={0}
        // rotation={[0, 0, 0.1]}
      />
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
        // preset='city'
        // background={false}
        // intensity={0.1}
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
