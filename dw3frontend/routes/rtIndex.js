const express = require("express");
const router = express.Router();
const ctlLogin = require("../apps/login/controller/ctlLogin");

// Rota raiz - chama a tela de login
router.get("/", ctlLogin.Login);

// Rotas de autenticação
router.post("/loginprocess", ctlLogin.LoginProcess);
router.get("/logout", ctlLogin.Logout);

// Rota home (protegida)
router.get("/home", ctlLogin.AutenticaJWT, (req, res) => {
  res.render("home/view/vwHome.njk", {
    title: "Home",
    userName: req.session.userName
  });
});

module.exports = router;
