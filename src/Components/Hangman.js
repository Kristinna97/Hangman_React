import WrongGuesses from './WrongGuesses';
function Hangman() {



    
   return (
       <>
       <div className='main'>
        <p className="hangman"><img src={require("../images/0.png")}></img></p>
        <WrongGuesses/>
        </div>
        </>
      )
}

export default Hangman;