import WrongGuesses from './WrongGuesses';
function Hangman({wrongLetters, playable, playAgain ,won }) {



    
   return (
       <>
       <div className='main'>
        <p className="hangman"><img src={require(`../images/${wrongLetters.length}.png`)}></img></p>
        <WrongGuesses wrongLetters={wrongLetters} playable={playable}  playAgain={playAgain} won={won}/>
        </div>
        {/* <p className='description'>Guess the {category} </p> */}
        </>
      )
}

export default Hangman;