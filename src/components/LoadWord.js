import React from "react";
import './LoadWord.css';

function LoadWord({ word, guessedLetters }) {

  // split the word into separate letters
  let splitWord = word.toUpperCase().split("");
  // remove space from the end
  splitWord.pop();

  return (
    <div className="letter-container">
      {/* map over the letters and check if the letter has been guessed to decide what to display */}
      {splitWord.map((letter, index) => (
        <span key={index}>{guessedLetters.includes(letter) ? letter : " _ "}</span>
      ))}
    </div>
  );
}

export default LoadWord;
  