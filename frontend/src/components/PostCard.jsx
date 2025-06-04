// frontend/src/components/PostCard.jsx
import React from 'react';
import { Link } from 'react-router-dom';

/**
 * Componente PostCard
 * Visualizza i dettagli di un singolo post all'interno di una card Bootstrap.
 * Riceve un oggetto 'post' come prop.
 */
function PostCard({ post }) {
  // Se il post non è disponibile (es. null o undefined), non renderizzare nulla.
  if (!post) {
    return null;
  }

  return (
    // La card principale. mb-4 aggiunge un margine inferiore per separare le card.
    <div className="card mb-4 rounded-lg shadow-md">
      <div className="card-body p-4">
        {/* Titolo del post */}
        <h5 className="card-title text-xl font-semibold text-gray-800 mb-2">
          {post.title}
        </h5>
        {/* Sottotitolo per la data di pubblicazione */}
        <p className="card-subtitle text-sm text-gray-600 mb-3">
          Pubblicato il: {post.date}
        </p>
        {/* Puoi aggiungere un riassunto o un'introduzione del post qui se il tuo oggetto post lo include.
            Per ora, useremo un placeholder. */}
        <p className="card-text text-gray-700 mb-4">
          Un breve riassunto del post. Clicca per leggere l'articolo completo.
        </p>

        {/* Link per navigare alla pagina di dettaglio del post.
            Utilizza l'ID del post per creare l'URL dinamico. */}
        <Link
          to={`/posts/${post.id}`}
          // CORREZIONE QUI: Semplificate le classi CSS del pulsante a Bootstrap standard
          className="btn btn-primary"
        >
          Leggi di più
          {/* Icona freccia destra (temporaneamente rimossa per il debug) */}
          {/* <svg className="ml-2 h-4 w-4" width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
          </svg> */}
        </Link>
      </div>
    </div>
  );
}

export default PostCard;