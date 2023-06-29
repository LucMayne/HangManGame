import { createSlice } from "@reduxjs/toolkit";

let words = [];

// add every word in the text file to the words array
fetch('/hangmanWords.txt')
  .then(response => response.text())
  .then(text => words = text.split('\n'))

// create a hangman slice
export const hangmanState = createSlice({
    name: "hangmanState",

    // keep track of the word, total guesses, every letter guessed, and has won
    initialState: {
        word: "",
        guesses: 0,
        guessedLetters: [],
        hasWon: false,
    },

    reducers: {
        // set a random word from words array
        setWord(state) {
            // get a random index in the words array
            const randomIndex = Math.floor(Math.random() * words.length);
            state.word = words[randomIndex];
        },

        // update the guesses
        updateGuesses(state) {
            if (state.guesses < 10) {
                state.guesses++;
            }
        },

        // add a letter to the array
        addGuessedLetter(state, action) {
            state.guessedLetters.push(action.payload);
        },

        // set state values to default
        setInitialState(state) {
            state.word = "";
            state.guesses = 0;
            state.guessedLetters = [];
            state.hasWon = false;
        },    
        
        // set has won to true
        setHasWon(state) {
            state.hasWon = true;
        }
    }
}); 

// export the reducers
export const { setWord, updateGuesses, addGuessedLetter, setInitialState, setHasWon } = hangmanState.actions;

export default hangmanState.reducer;