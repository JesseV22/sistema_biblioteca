const express = require("express");
const router = express.Router();
const ctlLogin = require("../apps/login/controller/ctlLogin");
const ctlLivroAutor = require("../apps/livroautor/controller/ctlLivroAutor");

// Todas as rotas requerem autenticação
router.use(ctlLogin.AutenticaJWT);

// Rotas de livro-autor
router.get("/", ctlLivroAutor.getAllLivroAutor);
router.get("/insert", ctlLivroAutor.openInsertLivroAutor);
router.post("/insert", ctlLivroAutor.insertLivroAutor);
router.post("/delete", ctlLivroAutor.deleteLivroAutor);

module.exports = router;
