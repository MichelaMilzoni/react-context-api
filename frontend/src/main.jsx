// frontend/src/main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css'; // Qui importa il CSS di Bootstrap

// Importa il bundle JavaScript di Bootstrap.
// Questo è necessario per i componenti Bootstrap che hanno interazioni JS (es. il toggler della navbar).
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

// Renderizza l'applicazione React nel DOM.
ReactDOM.createRoot(document.getElementById('root')).render(
  // React.StrictMode attiva controlli aggiuntivi in sviluppo per rilevare potenziali problemi.
  <React.StrictMode>
    <App /> {/* Il componente radice della tua applicazione */}
  </React.StrictMode>,
);