// frontend/src/components/Navbar.jsx
import React from 'react';
// NavLink è un componente di React Router DOM che aggiunge automaticamente una classe 'active'
// quando il link corrisponde all'URL corrente, utile per lo styling.
import { NavLink } from 'react-router-dom';
// Importa alcune icone da react-icons per un aspetto più professionale.
// Assicurati di aver installato 'react-icons' con 'npm install react-icons'.
import { FaHome, FaInfoCircle, FaNewspaper, FaReact } from 'react-icons/fa';

function Navbar() {
  return (
    // Navbar di Bootstrap: navbar-dark per testo chiaro, bg-dark per sfondo scuro,
    // fixed-top per fissarla in alto, shadow per un'ombra leggera.
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top shadow">
      <div className="container-fluid">
        {/* Brand del blog: un link alla homepage con un'icona React */}
        <NavLink className="navbar-brand d-flex align-items-center" to="/">
          <FaReact className="me-2 text-info" size="1.5em" /> {/* Icona React */}
          My React Blog
        </NavLink>
        {/* Bottone per il menu a scomparsa su schermi piccoli (mobile) */}
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        {/* Contenuto della navbar che collassa su schermi piccoli */}
        <div className="collapse navbar-collapse" id="navbarNav">
          {/* Lista dei link della navbar, ms-auto allinea a destra */}
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              {/* NavLink per la Home Page */}
              <NavLink
                to="/"
                end // La prop 'end' è cruciale per la rotta '/' per non essere sempre attiva
                // La funzione nel className gestisce l'aggiunta della classe 'active' di Bootstrap
                // e un colore personalizzato quando il link è attivo.
                className={({ isActive }) => `nav-link ${isActive ? 'active text-info' : ''}`}
              >
                <FaHome className="me-1" /> Home
              </NavLink>
            </li>
            <li className="nav-item">
              {/* NavLink per la Lista dei Post */}
              <NavLink
                to="/posts"
                className={({ isActive }) => `nav-link ${isActive ? 'active text-info' : ''}`}
              >
                <FaNewspaper className="me-1" /> Post
              </NavLink>
            </li>
            <li className="nav-item">
              {/* NavLink per la pagina Chi Siamo */}
              <NavLink
                to="/about"
                className={({ isActive }) => `nav-link ${isActive ? 'active text-info' : ''}`}
              >
                <FaInfoCircle className="me-1" /> Chi Siamo
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
export default Navbar;