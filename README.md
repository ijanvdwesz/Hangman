# Hangman Game

## Game Rules
- The objective of the game is to guess the hidden word, one letter at a time.
- You have a maximum of **11 incorrect guesses** before the game is over.
- Each guessed letter is either revealed in the word (if correct) or counts as an incorrect guess (if incorrect).
- To win the game, guess all the letters in the word before reaching the maximum allowed incorrect guesses(11).
- The game can end in one of two statuses:
  - **Won:** All letters are guessed.
  - **Lost:** Maximum incorrect guesses are reached.

## Features
- Fully responsive on-screen QWERTY keyboard.
- Keyboard stroke detection: You can press physical keys to guess letters.
- Visual representation of incorrect guesses through a Hangman image.
- Dynamic game board updates to show correct and incorrect guesses.
- Reset button to restart the game at any time.
- Help section to display game instructions.

## Installation

### Prerequisites
- Node.js (version 18 or higher) and npm (Node Package Manager).
- A modern web browser (e.g., Chrome, Firefox, Edge).

### Steps
1. Clone the repository:
   ```bash
   git clone https://github.com/ijanvdwesz/hangman.git
   cd hangman-app
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm start
   ```
4. Open your browser and navigate to `http://localhost:3000` to play the game.

### Removing Node Modules
If you need to remove `node_modules` and reinstall dependencies:
```bash
rm -rf node_modules
npm install
```

## Usage
- Use the on-screen keyboard to click letters or type using your physical keyboard.
- The Hangman image updates dynamically to reflect incorrect guesses.
- Click the **Reset** button to restart the game at any time.
- Press the **Show Help** button for game instructions.

## Data Source
The word list used in this game is based on WordNet (r): A Lexical Database for English (https://wordnet.princeton.edu/) from the Cognitive Science Laboratory at Princeton University.

### WordNet License
This game uses a modified version of the original WordNet word list. The original data was distributed with the following terms:

- Permission is granted to use, copy, modify, and distribute the software and database for any purpose and without fee or royalty, provided the following conditions are met:
  - The copyright notice and disclaimers appear on all copies of the software, database, and documentation, including modifications.
  - The software and database are provided "AS IS," with no warranties of any kind, including merchantability or fitness for a particular purpose.
  - Princeton University does not endorse or guarantee the software or database.

For the complete license, refer to the file included in the `/dictionary.txt` source or visit the [WordNet site](https://wordnet.princeton.edu/).

## Contributions
Feel free to submit issues or pull requests to improve the game!

## License
This project is distributed under the same conditions as the WordNet database.

