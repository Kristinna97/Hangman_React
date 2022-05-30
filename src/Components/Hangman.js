import WrongGuesses from './WrongGuesses';
function Hangman({wrongLetters}) {



    
   return (
       <>
       <div className='main'>
        <p className="hangman"><img src={require(`../images/${wrongLetters.length}.png`)}></img></p>
        <WrongGuesses wrongLetters={wrongLetters}/>
        </div>
        </>
      )
}

export default Hangman;