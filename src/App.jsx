import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import Experience from './Experience'
import { Loader, Html, useProgress } from '@react-three/drei'
import Ui from './layout/Ui'

function App() {
  const progress = useProgress
  return (
    <>
      <Canvas
        shadows
        dpr={[1, 2]}
        gl={
          {
            // antialias: false
            // toneMapping: THREE.ACESFilmicToneMapping,
            // outputEncoding: THREE.LinearEncoding
          }
        }
        camera={{
          fov: 85,
          // zoom: 90,
          near: 0.1,
          far: 200,
          position: [0, 1, 4.5],
        }}
      >
        <Suspense
          fallback={
            <Html center style={{ backgroundColor: 'black' }}>
              <Loader
                containerStyles={{
                  backgroundColor: 'orange',
                }}
                innerStyles={{
                  backgroundColor: 'yello',
                }}
                barStyles={{ backgroundColor: 'orange' }}
                dataStyles={{
                  fontSize: '0,7rem',
                  textAlign: 'center',
                  backgroundColor: 'transparent',
                }}
                dataInterpolation={(p) => `Loading ${p.toFixed(0)}%`}
              />
            </Html>
          }
        >
          <Experience />
        </Suspense>
      </Canvas>
      <Ui />
    </>
  )
}

export default App
