// Import React e altri hook necessari
// frontend/src/App.jsx
import React from 'react';
// Importa i componenti necessari da React Router DOM per la gestione del routing.
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Importa i componenti delle pagine del tuo blog.
import HomePage from './pages/HomePage';
import PostsPage from './pages/PostsPage'; // Assicurati che sia PostsPage (al plurale)
import PostDetailPage from './pages/PostDetailPage'; // Importa la nuova pagina di dettaglio
import AboutPage from './pages/AboutPage';

//* importo PostsProvider
import { PostsProvider } from './context/PostsContext';

// Importa il componente Layout che contiene la Navbar e il footer comuni.
import Layout from './components/Layout';

function App() {
  return (
  <PostsProvider>
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>

          <Route index element={<HomePage />} />

          <Route path="posts" element={<PostsPage />} />

          <Route path="posts/:id" element={<PostDetailPage />} />

          <Route path="about" element={<AboutPage />} />

          <Route path="*" element={
            <div className="text-center p-5 bg-white rounded shadow-sm">
              <h1 className="display-4 text-danger">404</h1>
              <p className="lead">Pagina Non Trovata!</p>
              <a href="/" className="btn btn-primary mt-3">Torna alla Home</a>
            </div>
          } />
        </Route>
      </Routes>
    </Router>
  </PostsProvider>
  );
}
export default App;