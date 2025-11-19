const express = require("express");
const router = express.Router();
const ctlAutores = require("../apps/autores/controller/ctlAutores");

router.get("/Autores/ManutAutores", ctlAutores.vwManutAutores);
router.get("/Autores/FCrAutores", ctlAutores.vwFCrAutores);
router.get("/Autores/FRUDrAutores", ctlAutores.vwFRUDrAutores);

module.exports = router;
