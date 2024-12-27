// Imports React
import React from 'react';

// Defines the GameBoard component, which receives 'word' and 'guessedLetters' as props
const GameBoard = ({ word, guessedLetters }) => {
  // Function that renders the word, showing guessed letters and underscores for unguessed ones
  const renderWord = () => {
    return word.split('').map((letter, index) => (
      <span key={index} className="letter">
        {/* Checks if the letter has been guessed, displays the letter if guessed or an underscore if not */}
        {guessedLetters.includes(letter.toLowerCase()) ? letter : '_'}
      </span>
    ));
  };

  return (
    <div className="game-board">
      {/* Displays the word with guessed letters revealed */}
      <div className="word">{renderWord()}</div>
    </div>
  );
};

// Exports the GameBoard component
export default GameBoard;
