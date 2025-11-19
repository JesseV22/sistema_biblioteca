const express = require("express");
const router = express.Router();
const ctlLivroAutor = require("../apps/livroautor/controller/ctlLivroAutor");

router.get("/LivroAutor/ManutLivroAutor", ctlLivroAutor.vwManutLivroAutor);
router.get("/LivroAutor/FCrLivroAutor", ctlLivroAutor.vwFCrLivroAutor);
router.get("/LivroAutor/FRUDrLivroAutor", ctlLivroAutor.vwFRUDrLivroAutor);

module.exports = router;
