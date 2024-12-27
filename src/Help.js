// Imports React
import React from 'react';

// Help component displaying instructions for the game
const Help = () => (
  <div className="help">
    {/* Title of the help section */}
    <h2>How to Play</h2>
    
    {/* Instructions for the game */}
    <p>
      Guess the hidden word by selecting letters. Each incorrect guess brings
      the hangman closer to hanging. You lose when the hangman is dead,
      but you win if you guess the word first! 
      {/* Additional advice to players */}
      Good luck! Most words have some vowels in them.
    </p>
  </div>
);

// Exports the Help component
export default Help;
