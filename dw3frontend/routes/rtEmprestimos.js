const express = require("express");
const router = express.Router();
const ctlEmprestimos = require("../apps/emprestimos/controller/ctlEmprestimos");

router.get("/Emprestimos/ManutEmprestimos", ctlEmprestimos.vwManutEmprestimos);
router.get("/Emprestimos/FCrEmprestimos", ctlEmprestimos.vwFCrEmprestimos);
router.get("/Emprestimos/FRUDrEmprestimos", ctlEmprestimos.vwFRUDrEmprestimos);

module.exports = router;
