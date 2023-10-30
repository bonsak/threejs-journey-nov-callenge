import { useGLTF, useTexture, SpriteAnimator } from '@react-three/drei'
import * as THREE from 'three'
import Swearing from './Swearing'
import { useState } from 'react'
import { motion } from 'framer-motion-3d'
import useSpriteStore from './stores/useSprite'

export default function Grumpkin({
  grumptype = 1,
  position = [-2, 0, 1],
  swearingStartPoint = 0,
  rotation = [0, 0, 0],
}) {
  const { spriteIsOn, toggleSprite } = useSpriteStore()
  // const [spriteIsPlaying, setSpriteIsPlaying] = useState(false)
  const [pointerOverMesh, setPionterOverMesh] = useState()

  const { nodes } = useGLTF('./models/grumpkins-v07.glb')

  const grumpkin_color_texture = useTexture(
    './textures/grumpkin-texture-v03-desat.jpg'
  )
  grumpkin_color_texture.flipY = false

  const [ao_01, ao_02, ao_03, ao_04] = useTexture([
    './textures/grumpkin_01_AO.jpg',
    './textures/grumpkin_02_AO.jpg',
    './textures/grumpkin_03_AO.jpg',
    './textures/grumpkin_04_AO.jpg',
  ])
  ao_01.flipY = false
  ao_02.flipY = false
  ao_03.flipY = false
  ao_04.flipY = false

  const SpriteSwearing = ({ spriteRef, position, texture, json }) => {
    return (
      <SpriteAnimator
        alphaTest={0.2}
        position={position}
        scale={3.5}
        fps={24}
        startFrame={0}
        scaleFactor={0.125}
        autoPlay={false}
        loop={false}
        play={spriteIsOn}
        numberOfFrames={24}
        zIndexRange={-1000}
        textureImageURL={'./sprites/pumpkin-sprites-v01.png'}
        textureDataURL={'./sprites/pumpkin-sprites-v01.json'}
        onEnd={() => toggleSprite(false)}
      />
    )
  }
  return (
    <>
      <motion.group
        name='grumpkinGroup'
        scale={[1, 1, 1]}
        position={position}
        rotation={rotation}
        transition={{
          type: 'spring',
          stiffness: 300,
          damping: spriteIsOn ? 10 : 35,
        }}
        animate={{
          rotateX: spriteIsOn ? -0.35 : 0,
          rotateY: spriteIsOn ? Math.PI * 0.1 : 0,
          y: spriteIsOn ? 0.5 : 0,
        }}
        // whileHover={() => console.log('hover')}
        // whileTap={() => console.log('tap')}
      >
        <Swearing
          opacity={spriteIsOn ? 1 : 0}
          wireframe
          scale={1.5}
          startPoint={swearingStartPoint}
        />
        <pointLight
          name={'grumpkin_inside_pumpkin'}
          castShadow={true}
          receiveShadow={true}
          position={[0, 1, 0]}
          intensity={25}
          color='#e97100'
        />
        <mesh
          onPointerOver={() => setPionterOverMesh(true)}
          onPointerOut={() => setPionterOverMesh(false)}
          onClick={() => {
            toggleSprite(true)
          }}
          castShadow
          geometry={nodes[`grumpkin_0${grumptype}`].geometry}
        >
          <meshStandardMaterial
            map={grumpkin_color_texture}
            aoMap={ao_01}
            color={new THREE.Color('rgb(255, 163, 255)')}
            roughness={0.45}
          />
        </mesh>
        <SpriteSwearing position={[0, 1, 0]} opacity={0} />
      </motion.group>
    </>
  )
}
