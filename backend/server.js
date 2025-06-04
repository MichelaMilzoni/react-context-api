// Importa dotenv per gestire le variabili d'ambiente (come la porta del server)
require('dotenv').config(); // Carica le variabili d'ambiente da .env
// Importa il modulo express per creare l'applicazione server
const express = require('express');
const cors = require('cors'); // Importa il middleware CORS

// Importa le rotte dei post dal file postRoutes.js
const postRoutes = require('../backend/src/routes/postRoutes');

const app = express();
const PORT = process.env.PORT || 3000; // Porta del server, prende da .env o usa 3000

// Middleware globali
app.use(cors()); // Abilita CORS per tutte le richieste (per permettere al frontend di comunicare)
app.use(express.json()); // Abilita il parsing del corpo delle richieste in formato JSON

// rotta di base  
app.get('/', (req, res) => {
  res.send('Benvenuto nel Backend del tuo blog!');
});

// Monto le rotte dei post sotto il prefisso '/api/posts'.
// Tutte le rotte definite in postRoutes.js saranno accessibili tramite /api/posts/...
// Ad esempio, router.get('/') in postRoutes.js diventerà GET /api/posts.
// E router.get('/:id') in postRoutes.js diventerà GET /api/posts/:id.
app.use('/api/posts', postRoutes);



// Avvia il server
app.listen(PORT, () => {
  console.log(`Backend server in esecuzione su http://localhost:${PORT}`);
  console.log(`Ambiente: ${process.env.NODE_ENV || 'sviluppo'}`);
});

module.exports = app; // Esporta l'app per poterla testare o utilizzare in altri moduli