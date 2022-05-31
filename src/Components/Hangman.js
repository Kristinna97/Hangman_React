import GameOutcome from './GameOutcome';
function Hangman({wrongLetters, playable, playAgain ,won, word }) {



    
   return (
       <>
       <div className='main'>
        <p className="hangman"><img alt={require(`${wrongLetters.length}-step-img`)} src={require(`../images/${wrongLetters.length}.png`)}></img></p>
        <GameOutcome wrongLetters={wrongLetters} playable={playable}  playAgain={playAgain} won={won} word={word}/>
        </div>
        </>
      )
}

export default Hangman;