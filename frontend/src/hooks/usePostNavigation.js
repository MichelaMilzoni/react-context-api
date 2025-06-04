// Questo custom hook incapsula la logica per recuperare un singolo post
// e la navigazione tra post precedenti/successivi, usando la lista completa dei post dal Context.

import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'; // Manteniamo Axios per la chiamata al singolo post

// Importa il custom hook usePosts per accedere alla lista completa dei post dal Context
import { usePosts } from '../context/PostsContext';

const usePostNavigation = (postId) => {
  const navigate = useNavigate();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true); // Loading per il singolo post
  const [error, setError] = useState(null);     // Errore per il singolo post

  // *** Ottieni la lista completa dei post dal PostsContext ***
  // Rinominato 'posts' da usePosts() a 'allPostsFromContext' per chiarezza in questo hook.
  // Anche 'contextLoading' e 'contextError' sono disponibili, ma qui ci concentriamo su 'allPosts'.
  const { posts: allPostsFromContext, loading: contextLoading, error: contextError } = usePosts();

  // Effetto per recuperare i dettagli del singolo post
  useEffect(() => {
    const fetchSinglePost = async () => {
      setLoading(true); // Imposta loading per il singolo post
      setError(null);   // Resetta errore per il singolo post
      try {
        // Recupera il singolo post per ID dal backend
        const response = await axios.get(`http://localhost:4000/api/posts/${postId}`);
        setPost(response.data);
      } catch (err) {
        console.error("Errore nel recupero del post:", err);
        setError("Impossibile caricare i dettagli del post. Potrebbe non esistere o il backend non è raggiungibile.");
        setPost(null);
      } finally {
        setLoading(false); // Imposta loading a false per il singolo post
      }
    };

    fetchSinglePost();
  }, [postId]); // Riesegui l'effetto solo quando l'ID del post cambia

  // Logica per la navigazione precedente/successivo
  // Questa logica ora usa allPostsFromContext che proviene dal Context.
  // È importante che allPostsFromContext sia disponibile (non in caricamento o errore dal Context).
  const currentIndex = allPostsFromContext.findIndex(p => p.id === parseInt(postId));
  const prevPost = currentIndex > 0 ? allPostsFromContext[currentIndex - 1] : null;
  const nextPost = currentIndex < allPostsFromContext.length - 1 ? allPostsFromContext[currentIndex + 1] : null;

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
  // allPosts ora proviene dal Context.
  return {
    post,
    allPosts: allPostsFromContext, // Fornisce la lista completa dei post dal Context
    loading, // Loading dello specifico post
    error,   // Errore dello specifico post
    prevPost,
    nextPost,
    goToPrevPost,
    goToNextPost
  };
};

export default usePostNavigation;