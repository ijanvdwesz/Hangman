// Imports React to build components
import React from 'react';
// Imports ReactDOM to render the React components into the DOM
import ReactDOM from 'react-dom/client';
// Imports CSS file for styling the app
import './index.css';
// Imports the main App component that contains the game logic and UI
import App from './App';
// Imports the reportWebVitals function for measuring performance
import reportWebVitals from './reportWebVitals';//This was automatically added by CRA

// Gets the root element from the HTML file (index.html) where the React app will be rendered
const root = ReactDOM.createRoot(document.getElementById('root'));

// Renders the App component inside the root element with StrictMode enabled
// StrictMode is a wrapper that helps identify potential problems in the app during development
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// This function logs performance metrics such as FCP, LCP, and CLS.
reportWebVitals();
