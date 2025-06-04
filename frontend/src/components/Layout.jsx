// frontend/src/components/Layout.jsx
import React from 'react';
// Outlet è un componente di React Router DOM che indica dove le rotte figlie devono essere renderizzate.
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar'; // Importa la Navbar

function Layout() {
  return (
    // d-flex, flex-column, min-vh-100 creano un layout flexbox che occupa almeno il 100% dell'altezza della viewport,
    // utile per un footer "sticky" in basso.
    <div className="d-flex flex-column min-vh-100">
      <Navbar /> {/* La Navbar è qui, comune a tutte le pagine */}
      {/* main è il contenitore principale del contenuto delle pagine.
          container: centra il contenuto e imposta una larghezza massima.
          my-4: margin-top e margin-bottom di 4 unità Bootstrap.
          flex-grow-1: fa sì che il main occupi tutto lo spazio disponibile tra navbar e footer. */}
      <main className="container my-4 flex-grow-1">
        <Outlet /> {/* Qui verranno renderizzate le pagine (HomePage, PostsListPage, AboutPage, PostDetailPage) */}
      </main>
      {/* Footer semplice di Bootstrap. mt-auto lo spinge in basso. */}
      <footer className="footer py-3 bg-light mt-auto shadow-sm">
        <div className="container text-center text-muted">
          &copy; {new Date().getFullYear()} Il Mio Blog React - Powered by Bootstrap
        </div>
      </footer>
    </div>
  );
}
export default Layout;