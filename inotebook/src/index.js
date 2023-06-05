import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import reportWebVitals from './reportWebVitals'; //new// commented because showing error.

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

// reportWebVitals(); // we commented this line because of this error: index.js:17 Uncaught TypeError: _reportWebVitals__WEBPACK_IMPORTED_MODULE_4___default(...) is not a function at ./src/index.js (index.js:17:1)
