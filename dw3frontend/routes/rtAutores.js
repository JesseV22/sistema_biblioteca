const express = require("express");
const router = express.Router();
const ctlLogin = require("../apps/login/controller/ctlLogin");
const ctlAutores = require("../apps/autores/controller/ctlAutores");

// Todas as rotas requerem autenticação
router.use(ctlLogin.AutenticaJWT);

// Rotas de autores
router.get("/", ctlAutores.getAllAutores);
router.get("/insert", ctlAutores.openInsertAutor);
router.post("/insert", ctlAutores.insertAutor);
router.get("/update/:id", ctlAutores.openUpdateAutor);
router.post("/update", ctlAutores.updateAutor);
router.get("/view/:id", ctlAutores.viewAutor);
router.post("/delete", ctlAutores.deleteAutor);

module.exports = router;
