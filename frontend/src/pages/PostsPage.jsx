//* componente pagina principale

// La sua responsabilità sarà quella di:
// 1_ Definire la struttura generale della pagina: 
  // Questo include elementi come un div contenitore con stili di base 
  // (come p-4 bg-white rounded shadow-sm che avevi prima) e, soprattutto, il titolo della pagina.
// 2_ Renderizzare il componente PostsList.jsx: 
  // PostsPage.jsx agirà come un "genitore" che include la lista dei post.

//* Importa React
import React from 'react';

//* Importa il componente PostsList
import PostsList from './PostsList';

function PostsPage() {
  return (
    // Questo div contiene gli stili generali della pagina (sfondo, ombreggiatura, padding).
    <div className="p-4 bg-white rounded shadow-sm">
      {/* Titolo della pagina, come richiesto dalla traccia */}
      <h1 className="mb-4 text-dark">Lista dei Post del Blog</h1>

      {/* Renderizza il componente PostsList, che ora si occupa di mostrare
          i post, il caricamento e gli errori, prendendo i dati dal Context. */}
      <PostsList />
    </div>
  );
}

export default PostsPage;