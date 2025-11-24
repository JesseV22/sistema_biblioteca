const express = require("express");
const router = express.Router();
const ctlLogin = require("../apps/login/controller/ctlLogin");
const ctlEmprestimos = require("../apps/emprestimos/controller/ctlEmprestimos");

// Todas as rotas requerem autenticação
router.use(ctlLogin.AutenticaJWT);

// Rotas de empréstimos
router.get("/", ctlEmprestimos.getAllEmprestimos);
router.get("/insert", ctlEmprestimos.openInsertEmprestimo);
router.post("/insert", ctlEmprestimos.insertEmprestimo);
router.get("/update/:id", ctlEmprestimos.openUpdateEmprestimo);
router.post("/update", ctlEmprestimos.updateEmprestimo);
router.post("/delete", ctlEmprestimos.deleteEmprestimo);

module.exports = router;
