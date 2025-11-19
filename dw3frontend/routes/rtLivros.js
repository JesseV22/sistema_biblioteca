const express = require('express');
const router = express.Router();
const ctlLivros = require('../apps/livros/controller/ctlLivros');

// Certifique-se de que ctlLivros.listar existe
router.get('/', ctlLivros.listar);
router.post('/', ctlLivros.criar);

module.exports = router;
