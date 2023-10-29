import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import Experience from './Experience'
import Loading from './Loading'
import { Loader, Html, useProgress } from '@react-three/drei'
import Overlay from './layout/Overlay'

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
            // toneMapping: THREE.ACESFilmicToneMapping
            // outputEncoding: THREE.LinearEncoding
          }
        }
        // orthographic
        camera={{
          fov: 65,
          // zoom: 90,
          near: 0.1,
          far: 200,
          position: [0, 1, 7],
        }}
      >
        {/* <fog attach='fog' args={['#f7eded', 0, 20]} /> */}
        <Suspense
          fallback={
            <Html center style={{ backgroundColor: 'black' }}>
              <Loader
                containerStyles={{
                  // display: 'flex-box',
                  // alignItems: 'center',
                  // justifyContent: 'center',
                  backgroundColor: 'orange',
                }}
                innerStyles={{
                  // textAlign: 'center',
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
      <Overlay />
    </>
  )
}

export default App
