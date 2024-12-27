// Imports React
import React from 'react';

// Defines the GameStatus component, which receives gameStatus, incorrectGuesses, maxLives, and word as props
const GameStatus = ({ gameStatus, incorrectGuesses, maxLives, word }) => {
  return (
    <div className="game-status">
      {/* Displays the lives remaining if the game is in progress (status 'playing') */}
      {gameStatus === 'playing' && (
        <p>
          Lives Remaining: {maxLives - incorrectGuesses}/{maxLives} {/* Calculates and displays remaining lives */}
        </p>
      )}

      {/* Displays a "You Won!" message if the game status is 'won' */}
      {gameStatus === 'won' && <p>🎉 You Won! 🎉</p>}

      {/* Displays a "You Lost!" message if the game status is 'lost' along with the correct word */}
      {gameStatus === 'lost' && <p>💀 You Lost! The word was: {word}</p>}
    </div>
  );
};

// Exports the GameStatus component for use in other parts of the app
export default GameStatus;
