import { Html, useProgress } from '@react-three/drei'

export default function Loading() {
  const { progress } = useProgress()

  //   console.log(progress)
  return (
    <Html>
      <span className='canvas-load'></span>
      <p
        style={{
          fontSize: 14,
          color: '#f1f1f1',
          fontWeight: 800,
          marginTop: 40,
        }}
      >
        {progress.toFixed(0)}%
      </p>
    </Html>
  )
}
