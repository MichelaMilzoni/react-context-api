//* react import
import React, { createContext, useContext, useState, useEffect } from 'react';

//* axios import per chiamate API
import axios from 'axios';

//* createContext per il contesto dei post
const PostsContext = createContext(null); // O un valore predefinito vuoto/iniziale

//* definisco e esporto il Componente Provider per il contesto dei post
export const PostsProvider = ({ children }) => {
 
    // inserire logica con useState e useEffect per gestire i post
    //* creo 3 stati per: post, caricamento ed errore
  const [posts, setPosts] = useState([]); // Stato per i post
  const [loading, setLoading] = useState(true); // Stato per il caricamento
  const [error, setError] = useState(null); // Stato per l'errore

  //* uso useEffect per effettuare la chiamata API quando il componente viene montato
  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true); // Imposto il caricamento a true prima della chiamata
      setError(null); // Resetta l'errore prima della chiamata
      try {
        const response = await axios.get('http://localhost:4000/api/posts');
        setPosts(response.data); // Imposto i post ricevuti dalla risposta
      } catch (err) {
        setError(err); // Imposto l'errore se la chiamata fallisce
        console.error('Errore nel recupero dei post:', err); // Log dell'errore
      } finally {
        setLoading(false); // Imposto il caricamento a false dopo la chiamata
      }
    };

    fetchPosts(); // Chiamo la funzione per ottenere i post
  }, 
  []); // L'array vuoto significa che l'effetto viene eseguito solo al montaggio del componente
  

  return (
    <PostsContext.Provider value={{ posts, loading, error }}>
      {children}
    </PostsContext.Provider>
  );
};

//* definisco il custom hook per utilizzare il contesto dei post (per evitare di usare useContext direttamente)
export const usePosts = () => {
  const context = useContext(PostsContext);
  //* aggiungo un controllo per l'errore se l'hook viene usato al di fuori del provider
    // se il contesto è null, significa che l'hook è stato usato al di fuori del provider
  if (!context) {
    throw new Error('usePosts deve essere utilizzato all`interno di un PostsProvider');
  }
  return context;
};