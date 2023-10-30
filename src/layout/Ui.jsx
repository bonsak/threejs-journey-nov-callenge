import { useState } from 'react'

export default function Ui() {
  const [grumpkin, setGrumpkin] = useState('Harold')
  const grumpkinNames = ['Harold', 'Theodore', 'Ebenezer', 'Maximillian']
  function handleSelector(event) {
    console.log(event.target.value)
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
        {/* <div className='description'>
          Harold Grumpkin, the formidable pumpkin boss of Harvestville, was a
          commanding figure amidst the rows of cheerful gourds. With his
          imposing size and commanding presence, he stood as the undisputed
          leader of the pumpkin patch. Adorned with a regal, rich orange hue and
          a finely chiseled, toothy grin, he exuded an air of authority and
          wisdom. His sprawling vines weaved a protective canopy over the patch,
          sheltering the smaller pumpkins from the elements and pests. Harold's
          deep-set, thoughtful eyes held the secrets of countless seasons, and
          his reputation for fairness and guidance earned him the trust of both
          pumpkins and townsfolk alike. A symbol of strength and unity in
          Harvestville, Harold Grumpkin reigned as the benevolent overseer,
          ensuring that the spirit of autumn thrived in his vibrant domain.
        </div> */}
        <fieldset>
          {/* <div className='selector'> */}
          {grumpkinNames.map((option) => (
            <div key={option} className='selectorButton'>
              <input
                className='selectGrumpkin'
                type='radio'
                name='grumpkin'
                key={option}
                id={option}
                value={option}
                checked={option === grumpkin}
                onChange={(event) => {
                  setGrumpkin(event.target.value)
                  // console.log(event)
                }}
              />
              <label htmlFor={option}>{option}</label>
            </div>
          ))}
        </fieldset>
        {/* {grumpkinNames.map((grumpName) => (
            <button
              key={grumpName}
              className='button'
              onClick={(event) => console.log(event)}
            >
              {grumpName}
            </button>
          ))} */}
        {/* </div> */}
        <button className='button'>SOUND ON</button>
        <div className='bottom-text'>Made by Bonsak 2023</div>
      </div>
    </div>
  )
}
