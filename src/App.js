import Header from "./Components/Header";
import Hangman from "./Components/Hangman";
import WordAndAlphabet from "./Components/WordAndAlphabet";
import { useState } from "react";
import { words } from "./wordBank";
import "./App.css";

let selectedWord = words[Math.floor(Math.random() * words.length)];

function App() {
  const [correctLetters, setCorrectLetters] = useState([]);
  const [wrongLetters, setWrongLetters] = useState([]);
  const [playable, setPlayable] = useState(true);
  const [won, setWon] = useState(false);

  function playAgain() {
    setPlayable(true);
    setCorrectLetters([]);
    setWrongLetters([]);
    selectedWord = words[Math.floor(Math.random() * words.length)];
    setWon(false);
    const buttons = document.querySelectorAll("button");
    buttons.forEach((button) => {
      button.disabled = false; 
    });
  }

  return (
    <div className="App">
      <Header />
      <Hangman
        wrongLetters={wrongLetters}
        playable={playable}
        playAgain={playAgain}
        won={won}
        word = {selectedWord}
      />
      <WordAndAlphabet
        word={selectedWord}
        wrongLetters={wrongLetters}
        setWrongLetters={setWrongLetters}
        correctLetters={correctLetters}
        setCorrectLetters={setCorrectLetters}
        setPlayable={setPlayable}
        playable={playable}
        setWon={setWon}
        
      />
    </div>
  );
}

export default App;
