const express = require("express");
const path = require("path");
const nunjucks = require("nunjucks");
require("dotenv").config({ path: "srvDW3Front.env" });

const rtIndex = require("./routes/rtIndex");
const rtLogin = require("./routes/rtLogin");
const rtAutores = require("./routes/rtAutores");
const rtLivros = require("./routes/rtLivros");
const rtLivroAutor = require("./routes/rtLivroAutor");
const rtEmprestimos = require("./routes/rtEmprestimos");

const app = express();
const port = process.env.FRONT_PORT || 30000;

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use("/public", express.static(path.join(__dirname, "public")));

nunjucks.configure("apps", {
  autoescape: true,
  express: app,
});

app.set("view engine", "njk");

app.use("/", rtIndex);
app.use("/", rtLogin);
app.use("/", rtAutores);
app.use("/", rtLivros);
app.use("/", rtLivroAutor);
app.use("/", rtEmprestimos);

app.listen(port, () => {
  console.log("Frontend rodando na porta " + port);
});
