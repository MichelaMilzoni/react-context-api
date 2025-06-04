// Import React e altri hook necessari
// frontend/src/App.jsx
import React from 'react';
// Importa i componenti necessari da React Router DOM per la gestione del routing.
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Importa i componenti delle pagine del tuo blog.
import HomePage from './pages/HomePage';
import PostsListPage from './pages/PostsListPage';
import PostDetailPage from './pages/PostDetailPage'; // Importa la nuova pagina di dettaglio
import AboutPage from './pages/AboutPage';

// Importa il componente Layout che contiene la Navbar e il footer comuni.
import Layout from './components/Layout';

function App() {
  return (
    // BrowserRouter avvolge l'intera applicazione per abilitare il routing basato sulla cronologia del browser.
    <Router>
      {/* Routes è un contenitore per tutte le definizioni delle rotte. */}
      <Routes>
        {/* La Route principale usa il componente Layout.
            Questo significa che la Navbar e il footer definiti in Layout saranno presenti su tutte le pagine figlie. */}
        <Route path="/" element={<Layout />}>
          {/* Route 'index' indica la rotta predefinita per il percorso padre ("/").
              Quando l'URL è "/", HomePage verrà renderizzata nell'Outlet del Layout. */}
          <Route index element={<HomePage />} />
          {/* Rotta per la lista dei post. */}
          <Route path="posts" element={<PostsListPage />} />
          {/* Rotta per il dettaglio del singolo post.
              :id è un parametro dinamico che verrà letto con useParams in PostDetailPage.jsx */}
          <Route path="posts/:id" element={<PostDetailPage />} />
          {/* Rotta per la pagina Chi Siamo. */}
          <Route path="about" element={<AboutPage />} />

          {/* Rotta catch-all per gestire URL non trovati (pagina 404).
              Il "*" indica che questa rotta corrisponderà a qualsiasi URL non corrispondente alle rotte precedenti. */}
          <Route path="*" element={
            <div className="text-center p-5 bg-white rounded shadow-sm">
              <h1 className="display-4 text-danger">404</h1>
              <p className="lead">Pagina Non Trovata!</p>
              {/* Link per tornare alla Home Page */}
              <a href="/" className="btn btn-primary mt-3">Torna alla Home</a>
            </div>
          } />
        </Route>
      </Routes>
    </Router>
  );
}
export default App;