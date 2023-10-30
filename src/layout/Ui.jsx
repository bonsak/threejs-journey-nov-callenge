import useSoundStore from '../stores/useSound'
import useGrumpkinStore from '../stores/useGrumpkin'
import useSpriteStore from '../stores/useSprite'

import { motion } from 'framer-motion'

export default function Ui() {
  const { soundIsOn, toggleSound } = useSoundStore()
  const { spriteIsOn, toggleSprite } = useSpriteStore()
  const { grumpkinType, setGrumpkinType } = useGrumpkinStore()

  const grumpkins = [
    { gName: 'Harold', active: false },
    { gName: 'Theodore', active: false },
    { gName: 'Maximillian', active: false },
    { gName: 'Ebenezer', active: false },
  ]

  grumpkins.map((grumpkin, index) => {
    if (parseInt(grumpkinType) === index + 1) {
      grumpkin.active = true
    }
    // console.log(index + 1, grumpkin.gName, grumpkin.active)
  })

  return (
    <div className='container'>
      <div className='top-wrapper'>
        <div className='top-text'>
          November 2023 Threejs Journey Halloween Challenge
        </div>
        <h1 className='heading'>Meet the Grumpkins</h1>
        <div className='subtext'>
          The Grumpkins, a notorious quartet of thieving pumpkin brothers, were
          the bane of Harvestville, known for their clever schemes and penchant
          for pilfering the town's most prized autumn treasures.
        </div>
      </div>
      <div className='bottom-wrapper'>
        <div className='selector'>
          {grumpkins.map((grumpkin, index) => {
            return (
              <motion.button
                whileHover={{
                  scale: 1.15,
                }}
                whileTap={{ scale: 0.9 }}
                disabled={spriteIsOn}
                value={index + 1}
                key={grumpkin.gName}
                onClick={(e) => setGrumpkinType(e.currentTarget.value)}
                className={grumpkin.active ? 'button activeGrump' : 'button'}
              >
                {grumpkin.gName}
              </motion.button>
            )
          })}
          {/* {grumpkinType} */}
        </div>
        <motion.button
          whileHover={{
            scale: 1.15,
          }}
          whileTap={{ scale: 0.9 }}
          onClick={toggleSound}
          className={!soundIsOn ? 'button sound sound-off' : 'button sound'}
        >
          {!soundIsOn ? 'SOUND ON' : 'SOUND OFF'}
        </motion.button>
        <div className='bottom-text'>Made by Bonsak 2023</div>
      </div>
    </div>
  )
}
