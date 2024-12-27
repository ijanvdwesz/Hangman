// Imports React and useEffect hook for side effects
import React, { useEffect,UseCallback } from 'react';

// Defines the Keyboard component, which receives guessedLetters, onGuess, and restartGame as props
const Keyboard = ({ guessedLetters, onGuess, restartGame }) => {
  // Defines an array of uppercase letters for the keyboard
  const letters = 'QWERTYUIOPASDFGHJKLZXCVBNM'.split('');

  // Defines rows based on a QWERTY keyboard layout
  const rows = [
    'QWERTYUIOP', // First row of keys
    'ASDFGHJKL',  // Second row of keys
    'ZXCVBNM',    // Third row of keys
  ];

  // Handles key click: Normalizes letter and triggers onGuess if the letter hasn't been guessed
  const handleKeyClick = (letter) => {
    const normalizedLetter = letter.toLowerCase(); // Normalizes the letter to lowercase
    if (!guessedLetters.includes(normalizedLetter)) {
      onGuess(normalizedLetter); // Passes the normalized letter to the onGuess function
    }
  };

  // Handles key press event (triggered by physical keypress)
 const handleKeyPress = useCallback(
    (event) => {
      const pressedKey = event.key.toUpperCase();
      if (letters.includes(pressedKey)) {
        handleKeyClick(pressedKey);
      }
    },
    [guessedLetters, letters] // Includes dependencies used inside the callback
  );

  //Event listener for keypress
  useEffect(() => {
    window.addEventListener('keydown', handleKeyPress); // Adds event listener for keypress
    return () => {
      window.removeEventListener('keydown', handleKeyPress); // Cleans up event listener on unmount
    };
  },[handleKeyPress]);

  return (
    <div className="keyboard">
      {/* Maps through rows to create the layout of the keyboard */}
      {rows.map((row, rowIndex) => (
        <div key={rowIndex} className="keyboard-row">
          {/* Splits each row string into individual letters */}
          {row.split('').map((letter) => {
            const normalizedLetter = letter.toLowerCase(); // Normalizes letter to lowercase for comparison
            const isGuessed = guessedLetters.includes(normalizedLetter); // Checks if the letter is guessed
            return (
              <button
                key={normalizedLetter} // Uses normalized letter as key for uniqueness
                className={`key ${isGuessed ? 'disabled' : ''}`} // Adds 'disabled' class if the letter is guessed
                onClick={() => handleKeyClick(letter)} // Handles click event for the key
                disabled={isGuessed} // Disables the button if the letter has been guessed
              >
                {letter} {/* Displays the letter on the button */}
              </button>
            );
          })}
        </div>
      ))}

      {/* Special row for the reset button */}
      <div className="keyboard-row row-special">
        <button
          className="key key-reset" // Applies reset key class
          onClick={restartGame} // Triggers the restartGame function when clicked
        >
          Reset {/* Reset button text */}
        </button>
      </div>
    </div>
  );
};

// Exports the Keyboard component
export default Keyboard;
