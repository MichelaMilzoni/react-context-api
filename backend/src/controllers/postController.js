// file che contiene le funzioni per gestire i post
const postsData = [
  { id: 1, title: "Post 1", content: "Contenuto del primo post.", date: "2023-10-01" },
  { id: 2, title: "Post 2", content: "Contenuto del secondo post.", date: "2023-10-02" },
  { id: 3, title: "Post 3", content: "Contenuto del terzo post.", date: "2023-10-03" },
  { id: 4, title: "Post 4", content: "Contenuto del quarto post.", date: "2023-10-04" }
];

// Funzione per ottenere tutti i post
const getAllPosts = (req, res) => {
  // Invia la lista di post (solo ID, titolo, data per la lista)
  const simplifiedPosts = postsData.map(({ id, title, date }) => ({ 
    id, 
    title, 
    date 
  }));
  res.json(simplifiedPosts);
};

// Funzione per ottenere un post specifico
const getPostById = (req, res) => {
  const postId = parseInt(req.params.id, 10);
  const post = postsData.find(p => p.id === postId);
  
  if (!post) {
    return res.status(404).json({ error: "Post non trovato" });
  }
  
  res.json(post);
};

// esporta le funzioni per essere utilizzate in altre parti dell'applicazione
module.exports = {
  getAllPosts,
  getPostById
};