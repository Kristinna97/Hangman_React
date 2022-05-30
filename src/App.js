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

  return (
    <div className="App">
    <Header/>
    <Hangman wrongLetters={wrongLetters}/>
    <WordAndAlphabet word={selectedWord} wrongLetters={wrongLetters} setWrongLetters={setWrongLetters} correctLetters={correctLetters} setCorrectLetters={setCorrectLetters}/>
    </div>
  );
}

export default App;
