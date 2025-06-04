// frontend/src/pages/PostsList.jsx
import React from 'react';
// Non abbiamo più bisogno di Link qui, perché Link è ora in PostCard.jsx
// import { Link } from 'react-router-dom';

// Importa il custom hook usePosts per accedere ai post dal Context
import { usePosts } from '../context/PostsContext';

// Importa il nuovo componente PostCard
import PostCard from '../components/PostCard'; // Percorso corretto per PostCard

function PostsList() {
  const { posts, loading, error } = usePosts();

  if (loading) {
    return <p className="text-center text-info my-5">Caricamento post...</p>;
  }

  if (error) {
    return <div className="alert alert-danger text-center my-5" role="alert">Errore: {error.message || "Impossibile caricare i post."}</div>;
  }

  return (
    <div>
      {posts.length === 0 ? (
        <div className="alert alert-info text-center" role="alert">
          Nessun post disponibile al momento.
        </div>
      ) : (
        // Sostituiamo l'<ul> e <li> con un div che conterrà le PostCard.
        // Utilizziamo flexbox di Tailwind/Bootstrap per un layout a griglia/colonna.
        <div className="d-flex flex-column gap-4"> {/* Aggiunto gap per spaziatura tra le card */}
          {posts.map(post => (
            // Ogni PostCard riceve l'oggetto 'post' e una 'key' unica.
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      )}
    </div>
  );
}

export default PostsList;