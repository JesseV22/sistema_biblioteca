const express = require("express");
const router = express.Router();
const ctlLogin = require("../apps/login/controller/ctlLogin");

router.get("/Login", ctlLogin.vwLogin);

module.exports = router;
