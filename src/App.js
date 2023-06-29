import { useSelector, useDispatch } from "react-redux";
import { setWord, setInitialState, } from "./store/hangmanState"
import { useState } from 'react';
import LoadWord from './components/LoadWord';
import StartGame from './components/StartGame';
import KeyboardButtons from './components/KeyboardButtons';
import ImageLoader from './components/ImageLoader';
import HelpGameInfo from './components/HelpGameInfo';
import './App.css';

function App() {

  const [gameOn, setGameOn] = useState(false);

  // set gameOn to true
  const playGame = () => {
    setGameOn(true);
  };

  // create dispatch
  const dispatch = useDispatch();
  // get the hangmanState
  const hangmanState = useSelector(state => state.hangmanState);
  
  // picks a random word from a text file
  const pickRandomWord = () => {
    dispatch(setWord());
  };
  
  // sets initial state and picks a random word from a text file
  const handleReset = () => {
    dispatch(setInitialState());
    pickRandomWord();
  }

  return (
    <div className='main-content'>
      <h1>HANGMAN</h1>
      {/* if game on is false display Play button */}
      {!gameOn && <StartGame onPlay={playGame} pickWord={pickRandomWord} />}

      {/* call each component for the game */}
      {gameOn && (
        <>
          <ImageLoader imageNumber={hangmanState.guesses+1}/>
          <LoadWord word={hangmanState.word} guessedLetters={hangmanState.guessedLetters} />
          <KeyboardButtons />
          <button id="reset-button" onClick={handleReset}>Reset</button>
          <HelpGameInfo />
        </>
      )}
    </div>
  );
}

export default App;
