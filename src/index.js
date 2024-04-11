import React from 'react';
import "./utils/globals.css";
import ReactDOM from 'react-dom/client';
import Musicas from './pages/musicas/Musicas';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Musicas />
  </React.StrictMode>
);