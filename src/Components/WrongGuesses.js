function WrongGuesses({wrongLetters}) {

    return(
        <>
        <div>
        <p className="wrong-guesses"> Wrong guesses:   {wrongLetters.length}/6</p>
        <div className="wrong-letters">
        {wrongLetters.map((letter) => {
          return (
            <span key={letter}>{letter}</span>
          );
        })}
      </div>
      </div>
        </>
    )
}

export default WrongGuesses;