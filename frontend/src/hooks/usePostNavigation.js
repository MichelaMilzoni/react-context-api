// Questo custom hook incapsula la logica per recuperare un singolo post,
// la lista di tutti i post e la navigazione tra post precedenti/successivi.

import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const usePostNavigation = (postId) => {
  const navigate = useNavigate(); // Usato internamente per la navigazione
  const [post, setPost] = useState(null);
  const [allPosts, setAllPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPostAndAllPosts = async () => {
      setLoading(true);
      setError(null);
      try {
        // Recupera il singolo post per ID dal backend
        const postResponse = await axios.get(`http://localhost:4000/api/posts/${postId}`);
        setPost(postResponse.data);

        // Recupera TUTTI i post per la navigazione precedente/successivo
        // È importante che l'ordine dei post sia lo stesso del backend per una navigazione coerente.
        const allPostsResponse = await axios.get('http://localhost:4000/api/posts');
        setAllPosts(allPostsResponse.data);

      } catch (err) {
        console.error("Errore nel recupero del post:", err);
        setError("Impossibile caricare i dettagli del post. Potrebbe non esistere o il backend non è raggiungibile.");
        setPost(null); // Assicurati che il post sia null in caso di errore
      } finally {
        setLoading(false);
      }
    };

    fetchPostAndAllPosts();
  }, [postId]); // Riesegui l'effetto ogni volta che l'ID del post cambia nell'URL

  // Logica per la navigazione precedente/successivo (BONUS)
  // Trova l'indice del post corrente nella lista completa dei post.
  const currentIndex = allPosts.findIndex(p => p.id === parseInt(postId));
  // Determina il post precedente (se esiste).
  const prevPost = currentIndex > 0 ? allPosts[currentIndex - 1] : null;
  // Determina il post successivo (se esiste).
  const nextPost = currentIndex < allPosts.length - 1 ? allPosts[currentIndex + 1] : null;

  // Funzione per navigare al post precedente.
  const goToPrevPost = () => {
    if (prevPost) {
      navigate(`/posts/${prevPost.id}`);
    }
  };

  // Funzione per navigare al post successivo.
  const goToNextPost = () => {
    if (nextPost) {
      navigate(`/posts/${nextPost.id}`);
    }
  };

  // Il custom hook restituisce lo stato e le funzioni necessarie al componente che lo userà.
  return { post, allPosts, loading, error, prevPost, nextPost, goToPrevPost, goToNextPost };
};

export default usePostNavigation;