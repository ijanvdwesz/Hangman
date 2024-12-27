//Imports React
import React from 'react';
//HangmanImage component with incorrectGuesses prop
const HangmanImage = ({ incorrectGuesses }) => {
  //Sets incorrect guesses to start from state1.GIF and ensures it doesn't exceed the max number of states (11)
  const adjustedState = Math.min(incorrectGuesses + 1, 11); // Uses Math.min to prevent exceeding 11 stages (max lives)
  
  // Constructs the image path based on the current incorrect guesses
  const imagePath = `/hangmandrawings/state${adjustedState}.GIF`;

  return (
    <div className="hangman-image">
      {/* Renders the Hangman image corresponding to the current game state */}
      <img src={imagePath} alt={`Hangman stage ${adjustedState}`} />
    </div>
  );
};
//Exports the HangmanImage component
export default HangmanImage;
//Images are from HyperionDrives Hangman folder