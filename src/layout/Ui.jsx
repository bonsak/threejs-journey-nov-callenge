export default function Ui() {
  function handleSelector(event) {
    console.log(event.target.value)
  }
  const grumpkinNames = [
    'Harold Grumpkin',
    'Theodore Grumpkin',
    'Ebenezer Grumpkin',
    'Maximillian Grumpkin',
  ]
  return (
    <div className='container'>
      <div className='top-wrapper'>
        <div className='top-text'>
          November 2023 Threejs Journey Halloween Challenge
        </div>
        <h1 className='heading'>Meet the Grumpkins</h1>
        <div className='subtext'>Select a Grumpkin</div>
      </div>
      <div className='bottom-wrapper'>
        <div className='selector'>
          {grumpkinNames.map((grumpName) => (
            <button
              key={grumpName}
              className='button'
              onClick={(event) => console.log(event.target)}
            >
              {grumpName}
            </button>
          ))}
        </div>
        <button className='button'>SOUND ON</button>
        <div className='bottom-text'>Made by Bonsak 2023</div>
      </div>
    </div>
  )
}
