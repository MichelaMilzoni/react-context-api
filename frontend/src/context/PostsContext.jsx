//* react import
import React, { createContext, useContext, useState, useEffect } from 'react';

//* axios import per chiamate API
import axios from 'axios';

//* createContext per il contesto dei post
const PostsContext = createContext(null); // O un valore predefinito vuoto/iniziale

//* definisco e esporto il Componente Provider per il contesto dei post
export const PostsProvider = ({ children }) => {
 
    // inserire logica con useState e useEffect per gestire i post

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