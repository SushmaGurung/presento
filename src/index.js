import {  BrowserRouter as Router, } from 'react-router-dom';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import ThemeContextProvider from './context/themeContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <Router>
        <ThemeContextProvider>

    <App />
        </ThemeContextProvider>
      </Router>
  </React.StrictMode>
);
