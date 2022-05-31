function WrongGuesses({ wrongLetters, playable, playAgain , won}) {
  if (!playable && won === false) {      
    return (
      <div className="game-over">
        <h2>Game Over</h2>
        <button className="reset" onClick={() => playAgain()}>
          Reset
        </button>
      </div>
    );
  } else if (!playable && won === true) {      
    return (
      <div className="you-won">
        <h2>That's correct !</h2>
        <button className="reset" onClick={() => playAgain()}>
          Reset
        </button>
      </div>
    );
  } 
  else {
    return (
      <>
        <div>
          <p className="wrong-guesses">
            {" "}
            Wrong guesses: {wrongLetters.length}/6
          </p>
          <div className="wrong-letters">
            {wrongLetters.map((letter) => {
              return <span key={letter}>{letter}</span>;
            })}
          </div>
        </div>
      </>
    );
  }
}

export default WrongGuesses;
