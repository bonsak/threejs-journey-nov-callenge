import useSoundStore from '../stores/useSound'
import useGrumpkinStore from '../stores/useGrumpkin'

export default function Ui() {
  const { soundIsOn, toggleSound } = useSoundStore()
  const { grumpkinType, setGrumpkinType } = useGrumpkinStore()
  const grumpkinNames = ['Harold', 'Theodore', 'Ebenezer', 'Maximillian']
  const grumpkins = [
    { gName: 'Harold', active: false },
    { gName: 'Theodore', active: false },
    { gName: 'Ebenezer', active: false },
    { gName: 'Maximillian', active: false },
  ]

  grumpkins.map((grumpkin, index) => {
    if (parseInt(grumpkinType) === index + 1) {
      grumpkin.active = true
    }
    console.log(index + 1, grumpkin.gName, grumpkin.active)
  })

  const handleSoundToogle = () => {
    toggleSound()
  }

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
              <button
                value={index + 1}
                key={grumpkin.gName}
                onClick={(e) => setGrumpkinType(e.currentTarget.value)}
                className={
                  grumpkin.active
                    ? 'button grumpkinBtn active'
                    : 'button grumpkinBtn'
                }
              >
                {grumpkin.gName}
              </button>
            )
          })}
          {grumpkinType}
        </div>
        <button
          onClick={handleSoundToogle}
          className={!soundIsOn ? 'button sound sound-off' : 'button sound'}
        >
          {!soundIsOn ? 'SOUND ON' : 'SOUND OFF'}
        </button>
        <div className='bottom-text'>Made by Bonsak 2023</div>
      </div>
    </div>
  )
}
