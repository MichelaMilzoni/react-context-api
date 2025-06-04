// file che definisce le rotte API per la risorsa posts
const express = require('express');
const router = express.Router();

//importo funzioni dei controller
const { getAllPosts, getPostById } = require('../controllers/postController');

//definisco le rotte per la risorsa posts
// e le monto su un prefisso (es. /api/posts) in server.js

// Rotta GET per recuperare tutti i post.
// Corrisponde a GET /api/posts (una volta montata in server.js).
router.get('/', getAllPosts);

// Rotta GET per recuperare un singolo post per ID.
// Corrisponde a GET /api/posts/:id (una volta montata in server.js).
router.get('/:id', getPostById);

// Esporta il router in modo che possa essere usato in server.js.
module.exports = router;