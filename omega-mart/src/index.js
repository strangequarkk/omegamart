import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.js';
import reportWebVitals from './reportWebVitals';

// const winWidth  = window.innerWidth || document.documentElement.clientWidth || 
// document.body.clientWidth;
// if(winWidth > 800){
//   import './css/tablet.css';
// }

// if(winWidth > 1280){
//   import './css/desktop.css';
// }

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
