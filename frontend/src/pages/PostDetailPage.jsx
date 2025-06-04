// Import React e altri hook necessari
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
// Importa il custom hook che contiene la logica di fetching e navigazione.
import usePostNavigation from '../hooks/usePostNavigation';

function PostDetailPage() {
  const { id } = useParams(); // Estrae l'ID del post dall'URL
  const navigate = useNavigate(); // Hook per navigare programmaticamente (es. per tornare alla lista)

  // Usa il custom hook per ottenere tutti i dati e le funzioni di navigazione.
  const { post, loading, error, prevPost, nextPost, goToPrevPost, goToNextPost } = usePostNavigation(id);

  // Gestione dello stato di caricamento.
  if (loading) {
    return <p className="text-center text-info my-5">Caricamento dettagli post...</p>;
  }

  // Gestione dello stato di errore.
  if (error) {
    return (
      <div className="alert alert-danger text-center my-5" role="alert">
        {error}
        <button onClick={() => navigate('/posts')} className="btn btn-primary mt-3 ms-2">Torna alla lista</button>
      </div>
    );
  }

  // Se il post non è stato trovato (es. ID non valido).
  if (!post) {
    return (
      <div className="text-center p-5 bg-white rounded shadow-sm my-5">
        <h2 className="text-warning">Post non trovato.</h2>
        <p>L'ID specificato non corrisponde a nessun post esistente.</p>
        <button onClick={() => navigate('/posts')} className="btn btn-primary mt-3">Torna alla lista</button>
      </div>
    );
  }

  // Rendering del dettaglio del post.
  return (
    <div className="p-4 bg-white rounded shadow-sm">
      <h1 className="mb-3 text-dark">{post.title}</h1>
      <p className="text-muted mb-4"><small>Pubblicato il: {post.date}</small></p>
      {/* whiteSpace: 'pre-wrap' per mantenere la formattazione del testo (es. a capo) */}
      <div className="lead mb-4" style={{ whiteSpace: 'pre-wrap' }}>{post.content}</div>

      {/* Sezione per la navigazione precedente/successivo (BONUS) */}
      <div className="d-flex justify-content-between mt-4">
        <button
          onClick={goToPrevPost}
          disabled={!prevPost} // Disabilita il bottone se non c'è un post precedente
          className="btn btn-outline-secondary"
        >
          &larr; Post Precedente
        </button>
        <button
          onClick={goToNextPost}
          disabled={!nextPost} // Disabilita il bottone se non c'è un post successivo
          className="btn btn-outline-secondary"
        >
          Post Successivo &rarr;
        </button>
      </div>

      {/* Bottone per tornare alla lista dei post */}
      <button onClick={() => navigate('/posts')} className="btn btn-primary mt-4">
        Torna alla lista dei Post
      </button>
    </div>
  );
}
export default PostDetailPage;

