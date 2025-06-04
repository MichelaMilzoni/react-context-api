// Import React e altri hook necessari
import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Importa Axios per le chiamate API
import { Link } from 'react-router-dom'; // Importa Link per la navigazione

function PostsListPage() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setLoading(true);
        // Effettua una richiesta GET al tuo endpoint API del backend per recuperare la lista dei post
        const response = await axios.get('http://localhost:4000/api/posts');
        setPosts(response.data); // Aggiorna lo stato con i dati ricevuti
      } catch (err) {
        console.error("Errore nel recupero dei post:", err);
        setError("Impossibile caricare i post. Assicurati che il backend sia in esecuzione sulla porta 3000.");
      } finally {
        setLoading(false);
      }
    };

    fetchPosts(); // Esegui la funzione di recupero dati al mount del componente
  }, []); // L'array di dipendenze vuoto assicura che l'effetto si esegua solo una volta al mount

  if (loading) {
    return <p className="text-center text-info my-5">Caricamento post...</p>;
  }

  if (error) {
    return <div className="alert alert-danger text-center my-5" role="alert">Errore: {error}</div>;
  }

  return (
    <div className="p-4 bg-white rounded shadow-sm">
      <h1 className="mb-4 text-dark">Lista dei Post del Blog</h1>
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
export default PostsListPage;