import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// We remove all Router, Routes, and Route imports here because 
// App.jsx is now the "Source of Truth" for your layout and navigation.

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
