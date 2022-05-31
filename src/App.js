import Header from './Components/Header';
import Hangman from './Components/Hangman';
import WordAndAlphabet from './Components/WordAndAlphabet';
import { useState } from "react";
import './App.css';

const words = ['research', 'application' , 'programming']
let selectedWord = words[Math.floor(Math.random() * words.length)];

function App() {
  
 
  const [correctLetters, setCorrectLetters] = useState([]);
  const [wrongLetters, setWrongLetters] = useState([]);
  const [playable, setPlayable] = useState(true)
  const [won, setWon] = useState(false)
  
 function playAgain(){
  setPlayable(true);
  setCorrectLetters([]);
  setWrongLetters([]);
  const buttons = document.querySelectorAll('button')
  buttons.forEach(button =>{
    button.disabled = false
   setWon(false)
   selectedWord = words[Math.floor(Math.random() * words.length)];
  })
  }
 

  return (
    <div className="App">
    <Header/>
    <Hangman wrongLetters={wrongLetters} playable={playable} playAgain={playAgain} won={won}/>
    <WordAndAlphabet word={selectedWord} wrongLetters={wrongLetters} setWrongLetters={setWrongLetters} correctLetters={correctLetters} setCorrectLetters={setCorrectLetters} setPlayable={setPlayable} playable={playable} won={won} setWon = {setWon}/>
    </div>
  );
}

export default App;
