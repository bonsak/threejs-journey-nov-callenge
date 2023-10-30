import useSoundStore from '../stores/useSound'
import useGrumpkinStore from '../stores/useGrumpkin'

export default function Ui() {
  const { soundIsOn, toggleSound } = useSoundStore()
  const { grumpkinType, setGrumpkinType } = useGrumpkinStore()
  const grumpkinNames = ['Harold', 'Theodore', 'Ebenezer', 'Maximillian']

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
          {grumpkinNames.map((grumpName, index) => (
            <button
              value={index + 1}
              key={grumpName}
              className='button grumpkinBtn'
              onClick={(e) => {
                setGrumpkinType(e.currentTarget.value)
              }}
            >
              {grumpName}
            </button>
          ))}
        </div>
        <button
          onClick={handleSoundToogle}
          className={!soundIsOn ? 'button sound' : 'button sound sound-off'}
        >
          {!soundIsOn ? 'SOUND OFF' : 'SOUND ON'}
        </button>
        <div className='bottom-text'>Made by Bonsak 2023</div>
      </div>
    </div>
  )
}
