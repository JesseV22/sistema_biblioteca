console.log("🔵 router.js carregado!");

const express = require("express");
const routerApp = express.Router();

const appLogin = require("../apps/login/controller/ctlLogin");

// Login / Logout
routerApp.post("/Login", appLogin.Login);
routerApp.post("/Logout", appLogin.Logout);

// LIVROS
routerApp.get("/getAllLivros", appLogin.AutenticaJWT, appLivros.getAllLivros);
routerApp.post("/getLivroByID", appLogin.AutenticaJWT, appLivros.getLivroByID);
routerApp.post("/insertLivros", appLogin.AutenticaJWT, appLivros.insertLivros);
routerApp.post("/updateLivros", appLogin.AutenticaJWT, appLivros.updateLivros);
routerApp.post("/DeleteLivros", appLogin.AutenticaJWT, appLivros.deleteLivros);

// AUTORES
routerApp.get("/getAllAutores", appLogin.AutenticaJWT, appAutores.getAllAutores);
routerApp.post("/getAutorByID", appLogin.AutenticaJWT, appAutores.getAutorByID);
routerApp.post("/insertAutores", appLogin.AutenticaJWT, appAutores.insertAutores);
routerApp.post("/updateAutores", appLogin.AutenticaJWT, appAutores.updateAutores);
routerApp.post("/deleteAutores", appLogin.AutenticaJWT, appAutores.deleteAutores);


// LIVRO_AUTOR (N:M)
routerApp.get(
  "/getAllLivroAutor",
  appLogin.AutenticaJWT,
  appLivroAutor.getAllLivroAutor
);
routerApp.post(
  "/getLivroAutorByID",
  appLogin.AutenticaJWT,
  appLivroAutor.getLivroAutorByID
);
routerApp.post(
  "/insertLivroAutor",
  appLogin.AutenticaJWT,
  appLivroAutor.insertLivroAutor
);
routerApp.post(
  "/updateLivroAutor",
  appLogin.AutenticaJWT,
  appLivroAutor.updateLivroAutor
);
routerApp.post(
  "/DeleteLivroAutor",
  appLogin.AutenticaJWT,
  appLivroAutor.DeleteLivroAutor
);

// EMPRESTIMOS (1:N)
routerApp.get(
  "/getAllEmprestimos",
  appLogin.AutenticaJWT,
  appEmprestimos.getAllEmprestimos
);
routerApp.post(
  "/getEmprestimoByID",
  appLogin.AutenticaJWT,
  appEmprestimos.getEmprestimoByID
);
routerApp.post(
  "/insertEmprestimos",
  appLogin.AutenticaJWT,
  appEmprestimos.insertEmprestimos
);
routerApp.post(
  "/updateEmprestimos",
  appLogin.AutenticaJWT,
  appEmprestimos.updateEmprestimos
);
routerApp.post(
  "/DeleteEmprestimos",
  appLogin.AutenticaJWT,
  appEmprestimos.DeleteEmprestimos
);

module.exports = routerApp;
