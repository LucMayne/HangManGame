import { useState } from 'react';
import './HelpGameInfo.css';

function HelpGameInfo() {

    // create a state for if the Help button has been clicked
    const [showInfo, setShowInfo] = useState(false);

    // set showInfo to true if it is false
    const showDetails = () => {
        if (showInfo) {
            setShowInfo(false);
        }
        else {
            setShowInfo(true);
        }
    }

    // button that displays help info when clicked and hides it when clicked again
    return (
        <div>
            {/* check what text to display depending on showInfo state */}
            <button id='help-button' onClick={showDetails}>
                {showInfo ? "Hide" : "Help"}
            </button>
            {showInfo && (
                <div className='help-container'>
                    <p>How to Play:</p>
                    <ul id='ul-container'>
                        <li>You get 10 Guesses</li>
                        <li>If the letter turns Green its part of the word.</li>
                        <li>If the letter turns Red its an incorrect guess.</li>
                        <li>You Win if you guess the word.</li>
                        <li>You Lose if you guess 10 incorrect letters.</li>
                    </ul>
                </div>
            )}
        </div>
    );
}

export default HelpGameInfo;
