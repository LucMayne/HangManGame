import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { updateGuesses, addGuessedLetter, setHasWon } from "../store/hangmanState"
import './KeyboardButtons.css';

// create 2 rows for the alphabet
const alphabetFirst = "ABCDEFGHIJKLM".split("");
const alphabetSecond = "NOPQRSTUVWXYZ".split("");

// displays the alphabet buttons and checks if the user has won or lost
function KeyboardButtons() {
  const dispatch = useDispatch();
  // get the hangman state and word
  const hangmanState = useSelector(state => state.hangmanState);
  const hangmanWord = useSelector(state => state.hangmanState.word).toUpperCase();

  // handles a button being clicked
  const handleClick = (letter) => {
    // if the user has won lock the buttons
    if (hangmanState.hasWon) {
      return;
    }
    // if the user has lost lock the buttons
    else if (hangmanState.guesses === 10) {
      return;
    }
    // if the letter is not part of the guessedLetters array, add it
    if (!hangmanState.guessedLetters.includes(letter)) {
      dispatch(addGuessedLetter(letter));
      // if the letter is not part of the word then update the guesses
      if (!hangmanWord.includes(letter)) {
        dispatch(updateGuesses());
      }
    }
  };

  // check if the user has won
  useEffect(() => {
    let splitWord = hangmanWord.toUpperCase().split("");
    // remove space from the end
    splitWord.pop();

    const correctLetters = [];

    // add the letters and _ to the array
    splitWord.forEach((letter) => {
      correctLetters.push(hangmanState.guessedLetters.includes(letter) ? letter : "_")
    });

    // Check if the hangmanWord is the same as the letters in correctLetters
    if (correctLetters.join() === splitWord.join()) {
      dispatch(setHasWon());
    }
    // update when guessedLetters changes
  }, [hangmanState.guessedLetters, dispatch, hangmanWord]);

  return (
    <div className='keyboard-container'>
      {/* decide what to print */}
      {hangmanState.hasWon && <h2>You Win!</h2>}
      {hangmanState.guesses === 10 && <h2>You have Lost!</h2>}
      <div>
        {/* display each letter in the alphabet */}
        {alphabetFirst.map((letter) => (
          <button
            // assign a class depending on if the letter is in the word or not
            className={`button-key ${hangmanState.guessedLetters.includes(letter) ? 'clicked-button' : ''} 
            ${hangmanWord.includes(letter) & hangmanState.guessedLetters.includes(letter) ? 'word-button' : ''}`}
            key={letter}
            onClick={() => handleClick(letter)}
          >
            {letter}
          </button>
        ))}
      </div>
      <div>
        {/* display each letter in the alphabet */}
        {alphabetSecond.map((letter) => (
          <button
            // assign a class depending on if the letter is in the word or not
            className={`button-key ${hangmanState.guessedLetters.includes(letter) ? 'clicked-button' : ''} 
            ${hangmanWord.includes(letter) & hangmanState.guessedLetters.includes(letter) ? 'word-button' : ''}`}
            key={letter}
            onClick={() => handleClick(letter)}
          >
            {letter}
          </button>
        ))}
      </div>
    </div>
  );
}

export default KeyboardButtons;
