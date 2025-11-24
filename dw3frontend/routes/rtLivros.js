const express = require("express");
const router = express.Router();
const ctlLogin = require("../apps/login/controller/ctlLogin");
const ctlLivros = require("../apps/livros/controller/ctlLivros");

// Todas as rotas requerem autenticação
router.use(ctlLogin.AutenticaJWT);

// Rotas de livros
router.get("/", ctlLivros.getAllLivros);
router.get("/insert", ctlLivros.openInsertLivro);
router.post("/insert", ctlLivros.insertLivro);
router.get("/update/:id", ctlLivros.openUpdateLivro);
router.post("/update", ctlLivros.updateLivro);
router.get("/view/:id", ctlLivros.viewLivro);
router.post("/delete", ctlLivros.deleteLivro);

module.exports = router;
