import { useGLTF, useTexture, SpriteAnimator } from '@react-three/drei'
import * as THREE from 'three'
import Swearing from './Swearing'
import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion-3d'
import useSpriteStore from './stores/useSprite'
import useSoundStore from './stores/useSound'

export default function Grumpkin({
  grumptype = 1,
  position = [-2, 0, 1],
  swearingStartPoint = 0,
}) {
  const { soundIsOn, toggleSound } = useSoundStore()
  const { spriteIsOn, toggleSprite } = useSpriteStore()
  // const [pointerOverMesh, setPionterOverMesh] = useState()

  const [hovered, setHovered] = useState(false)

  useEffect(() => {
    document.body.style.cursor = hovered ? 'pointer' : 'auto'
    return () => (document.body.style.cursor = 'auto')
  }, [hovered])

  const { nodes } = useGLTF('./models/grumpkins-v07.glb')
  const grumpRef = useRef()

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

  const grumpScream = [
    new Audio('./audio/212764__qubodup__lion-roar.mp3'),
    new Audio('./audio/435651__wakerone__zombie-demon-scream.mp3'),
    new Audio('./audio/442816__qubodup__goblin-scream.mp3'),
    new Audio('./audio/618483__foleyhaven__piglet_squeal_01.mp3'),
  ]

  const grumpkinColors = [
    new THREE.Color('rgb(255, 220, 67)'),
    new THREE.Color('rgb(216, 255, 179)'),
    new THREE.Color('rgb(174, 203, 255)'),
    new THREE.Color('rgb(204, 129, 255)'),
  ]

  const animConfig = [
    {
      rotateX: spriteIsOn ? 0.2 : 0,
      rotateY: spriteIsOn ? Math.PI * 0.1 : 0,
      z: spriteIsOn ? 0.35 : 0,
      y: spriteIsOn ? 0.5 : 0,
    },
    {
      rotateX: spriteIsOn ? -0.35 : 0,
      rotateY: spriteIsOn ? Math.PI * 0.1 : 0,
      z: spriteIsOn ? -1.5 : 0,
      y: spriteIsOn ? 0.25 : 0,
    },
    {
      rotateX: spriteIsOn ? -0.5 : 0,
      rotateY: spriteIsOn ? Math.PI * -0.1 : 0,
      rotateZ: spriteIsOn ? 0.75 : 0,
      y: spriteIsOn ? 0.5 : 0,
    },
    {
      rotateX: spriteIsOn ? -0.35 : 0,
      rotateY: spriteIsOn ? Math.PI * 0.1 : 0,
      y: spriteIsOn ? 0.65 : 0,
    },
  ]
  const dampingConfig = [
    {
      type: 'spring',
      stiffness: 300,
      damping: spriteIsOn ? 10 : 35,
    },
    {
      type: 'spring',
      stiffness: 300,
      damping: spriteIsOn ? 10 : 35,
    },
    {
      type: 'spring',
      stiffness: 600,
      damping: spriteIsOn ? 10 : 35,
    },
    {
      type: 'spring',
      stiffness: 150,
      damping: spriteIsOn ? 10 : 35,
    },
  ]

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

  const variants = {
    start: { scale: 1, duration: 0.2 },
    hover: { scale: 1.1, duration: 0.2 },
  }

  function handleAudio() {
    if (soundIsOn) {
      grumpScream[grumptype - 1].play()
    }
  }

  return (
    <>
      <motion.group
        name='grumpkinGroup'
        scale={[1, 1, 1]}
        position={position}
        transition={dampingConfig[grumptype - 1]}
        animate={animConfig[grumptype - 1]}
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
          intensity={spriteIsOn ? 100 : 25}
          color='#e97100'
        />
        <mesh
          onPointerOver={() => setHovered(true)}
          onPointerOut={() => setHovered(false)}
          onClick={() => {
            toggleSprite(true)
            handleAudio()
          }}
          castShadow
          geometry={nodes[`grumpkin_0${grumptype}`].geometry}
        >
          <meshStandardMaterial
            map={grumpkin_color_texture}
            aoMap={ao_01}
            color={grumpkinColors[grumptype - 1]}
            roughness={0.45}
          />
        </mesh>
        <SpriteSwearing position={[0, 1, 0]} opacity={0} />
      </motion.group>
    </>
  )
}
