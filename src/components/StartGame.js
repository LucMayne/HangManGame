import './StartGame.css'

function StartGame({ onPlay, pickWord }) {

    // sets play state to true and calls a function to pick a random word from the text file
    const handleClick = () => {
        onPlay();
        pickWord();
    }

    return (
        <div>
            <button id='start-button' onClick={handleClick}>PLAY</button>
        </div>
    );
}

export default StartGame;