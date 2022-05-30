import { useState } from "react";

const letters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

function WordAndAlphabet({
  word,
  correctLetters,
  setCorrectLetters,
  setWrongLetters,
  wrongLetters,
}) {
  const wordLetters = [...word.toUpperCase()];

  function checkLetter(event, clickedLetter) {
    event.target.disabled = true;
    if (wordLetters.includes(clickedLetter.letter)) {
      setCorrectLetters([clickedLetter.letter, ...correctLetters]);
    } else {
      setWrongLetters([clickedLetter.letter, ...wrongLetters]);
    }
  }

  const displayWord = wordLetters
    .map((letter) => (correctLetters.includes(letter) ? letter : "_"))
    .join(" ");

  return (
    <>
      <p className="word"> {displayWord} </p>
      <div className="alphabet">
        {letters.map((letter) => {
          return (
            <button
              disabled={false}
              key={letter}
              onClick={(event) => checkLetter(event, { letter })}
            >
              {letter}
            </button>
          );
        })}
      </div>
    </>
  );
}

export default WordAndAlphabet;
