// frontend/src/pages/PostsList.jsx (Corretto)
import React from 'react';
import { Link } from 'react-router-dom'; // Per i link "Leggi di più"

// Importa il custom hook usePosts per accedere ai post dal Context
import { usePosts } from '../context/PostsContext';

function PostsList() {
  // *** CHIAMATA CORRETTA DELL'HOOK: Direttamente nel corpo del componente ***
  const { posts, loading, error } = usePosts();

  // Non c'è più bisogno di useEffect o useState qui, perché i dati arrivano dal Context.

  if (loading) {
    return <p className="text-center text-info my-5">Caricamento post...</p>;
  }

  if (error) {
    // Puoi mostrare error.message se l'errore è un oggetto
    return <div className="alert alert-danger text-center my-5" role="alert">Errore: {error.message || "Impossibile caricare i post."}</div>;
  }

  return (
    // Rimosso il div con p-4 bg-white rounded shadow-sm e il titolo h1.
    // Questi andranno nel componente PostsPage.jsx
    <div>
      {posts.length === 0 ? (
        <div className="alert alert-info text-center" role="alert">
          Nessun post disponibile al momento.
        </div>
      ) : (
        <ul className="list-group">
          {posts.map(post => (
            <li key={post.id} className="list-group-item d-flex justify-content-between align-items-center mb-3">
              <div>
                <h2 className="h5 text-info mb-1">{post.title}</h2>
                <p className="text-muted mb-0"><small>Pubblicato il: {post.date}</small></p>
              </div>
              {/* Link al dettaglio del post */}
              <Link to={`/posts/${post.id}`} className="btn btn-sm btn-outline-primary">
                Leggi di più
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

// *** Esportazione corretta del componente ***
export default PostsList;