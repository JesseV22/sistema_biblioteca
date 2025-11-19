const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.render("home/view/index.njk", {
    tituloPagina: "Sistema de Biblioteca",
  });
});

module.exports = router;
