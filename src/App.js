//Imports the Necessary components 
import React, { useState, useEffect } from 'react';/*UseState to keep track ,and useEffect to fetch the word*/
import GameBoard from './GameBoard'; //The word with guessed letters
import Keyboard from './Keyboard'; //The clickable keyboard for user input
import HangmanImage from './HangmanImage'; //The hangman image based on incorrect guesses
import GameStatus from './GameStatus'; //The current game status (win/loss)
import Help from './Help'; //The help instructions
import './Styles/App.css'; //The stylesheet for styling

const App = () => {
  // State variables that manages the game status
  const [word, setWord] = useState(''); // The word to guess, initialized as an empty string
  const [guessedLetters, setGuessedLetters] = useState([]); // Array that stores the guessed letters
  const [incorrectGuesses, setIncorrectGuesses] = useState(0); // Tracks the number of incorrect guesses
  const [gameStatus, setGameStatus] = useState('playing'); // Tracks the game status: 'playing', 'won', 'lost'
  const [showHelp, setShowHelp] = useState(false); // Controls the visibility of the help section

  const maxLives = 11; // Maximum allowed incorrect guesses before the game is lost

  // Fetches a random word from dictionary.txt
  const fetchRandomWord = () => {
    fetch('/dictionary.txt')
      .then((response) => response.text()) // Fetches the content of dictionary.txt
      .then((text) => {
        const words = text.split('\n').map((word) => word.trim()); // Splits the text into words and trims any extra spaces
        setWord(words[Math.floor(Math.random() * words.length)]); // Sets a random word from the list
      });
  };

  // Loads a random word when the component mounts
  useEffect(() => {
    fetchRandomWord(); // Initial fetch of the random word
  }, []); // Empty dependency array ensures this only runs once when the component mounts

  // Function that handles a letter guess
  const handleGuess = (letter) => {
    const normalizedLetter = letter.toLowerCase(); // Normalizes the guessed letter to lowercase for consistency
  
    // Skips the guess if the letter has already been guessed or the game is not in 'playing' state
    if (guessedLetters.includes(normalizedLetter) || gameStatus !== 'playing') return;
  
    // Adds the guessed letter to the list of guessed letters
    const newGuessedLetters = [...guessedLetters, normalizedLetter];
    setGuessedLetters(newGuessedLetters);
  
    // Checks if the guessed letter is in the word
    if (!word.toLowerCase().includes(normalizedLetter)) {
      const newIncorrectGuesses = incorrectGuesses + 1; // Increments the incorrect guess count
      setIncorrectGuesses(newIncorrectGuesses);
  
      // If the max number of incorrect guesses is reached, sets the game status to 'lost'
      if (newIncorrectGuesses === maxLives) {
        setGameStatus('lost');
      }
    } else {
      // Checks if all letters in the word have been guessed correctly
      const allLettersGuessed = word.toLowerCase().split('').every((char) =>
        newGuessedLetters.includes(char.toLowerCase()) // Normalizes each letter to lowercase for comparison
      );
      if (allLettersGuessed) {
        setGameStatus('won'); // If all letters are guessed, set the game status to 'won'
      }
    }
  };

  // Function that restarts the game
  const restartGame = () => {
    setGuessedLetters([]); // Resets guessed letters
    setIncorrectGuesses(0); // Resets incorrect guesses
    setGameStatus('playing'); // Sets the game status back to 'playing'
    setShowHelp(false); // Hides the help section upon restarting the game

    fetchRandomWord(); // Fetches a new random word when restarting
  };

  return (
    <div className="app">
      <h1>Hangman</h1> {/* Displays the main game title */}
      <HangmanImage incorrectGuesses={incorrectGuesses} /> {/* Displays the hangman image based on incorrect guesses */}
      <GameBoard word={word} guessedLetters={guessedLetters} /> {/* Shows the word with guessed letters */}
      <Keyboard guessedLetters={guessedLetters} onGuess={handleGuess} restartGame={restartGame} /> {/* Keyboard for letter guesses */}

      {/* Displays game status (win/loss) and a restart button */}
      <GameStatus
        gameStatus={gameStatus}
        restartGame={restartGame}
        incorrectGuesses={incorrectGuesses}
        maxLives={maxLives}
        word={word} // Passes the word to GameStatus component for display
      />
      {/* Help button that toggles visibility of the help section */}
      <button className="help-button" onClick={() => setShowHelp(!showHelp)}>
        {showHelp ? 'Hide Help' : 'Show Help'} {/* Toggle button text based on the current help visibility */}
      </button>
      {showHelp && <Help />} {/* Conditionally renders the Help component if 'showHelp' is true */}
    </div>
  );
};
//Exports the App components
export default App;
