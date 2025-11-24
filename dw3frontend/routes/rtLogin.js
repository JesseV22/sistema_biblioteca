const express = require("express");
const axios = require("axios");
const router = express.Router();

const BACKEND_URL = process.env.SERVIDOR_DW3Back;

console.log("BACKEND_URL:", BACKEND_URL);

router.get("/", (req, res) => {
  res.render("login/view/vwLogin.njk", { title: "Login" });
});

router.post("/", async (req, res) => {
  try {
    const { username, password } = req.body;
    console.log("Enviando para:", `${BACKEND_URL}/login`);
    
    const response = await axios.post(`${BACKEND_URL}/login`, {
      username,
      password
    });

    console.log("Resposta:", response.data);

    if (response.data.auth) {
      req.session.token = response.data.token;
      req.session.userName = username;
      return res.redirect("/");
    }
    
    res.render("login/view/vwLogin.njk", { 
      title: "Login", 
      error: response.data.message || "Credenciais inválidas" 
    });
  } catch (error) {
    console.error("Erro:", error.message);
    res.render("login/view/vwLogin.njk", { 
      title: "Login", 
      error: "Erro ao conectar: " + error.message 
    });
  }
});

module.exports = router;