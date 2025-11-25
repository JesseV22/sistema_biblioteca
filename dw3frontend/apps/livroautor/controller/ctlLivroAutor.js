const axios = require("axios");

const getAllLivroAutor = async (req, res) => {
  const userName = req.session.userName;
  const token = req.session.token;

  try {
    const response = await axios.get(
      process.env.SERVIDOR_DW3Back + "/getAllLivroAutor",
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`
        }
      }
    );

    res.render("livroautor/view/vwManutLivroAutor.njk", {
      title: "Manutenção de Livro-Autor",
      data: response.data.registro,
      erro: null,
      userName: userName
    });
  } catch (error) {
    let errorMessage = "Erro ao buscar relações livro-autor";
    if (error.code === "ECONNREFUSED") {
      errorMessage = "Servidor indisponível";
    }

    res.render("livroautor/view/vwManutLivroAutor.njk", {
      title: "Manutenção de Livro-Autor",
      data: null,
      erro: errorMessage,
      userName: userName
    });
  }
};

const openInsertLivroAutor = async (req, res) => {
  const token = req.session.token;

  try {
    const livros = await axios.get(
      process.env.SERVIDOR_DW3Back + "/getAllLivros",
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`
        }
      }
    );

    const autores = await axios.get(
      process.env.SERVIDOR_DW3Back + "/getAllAutores",
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`
        }
      }
    );

    res.render("livroautor/view/vwFCrLivroAutor.njk", {
      title: "Cadastro de Livro-Autor",
      data: null,
      livros: livros.data.registro,
      autores: autores.data.registro,
      erro: null,
      userName: req.session.userName
    });
  } catch (error) {
    res.redirect("/livroautor?erro=erro_carregar_dados");
  }
};

const insertLivroAutor = async (req, res) => {
  const regData = req.body;
  const token = req.session.token;

  try {
    const response = await axios.post(
      process.env.SERVIDOR_DW3Back + "/insertLivroAutor",
      regData,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`
        },
        timeout: 5000
      }
    );

    res.json({
      status: response.data.status,
      msg: response.data.msg || "Relação cadastrada com sucesso",
      data: response.data
    });
  } catch (error) {
    console.error("[ctlLivroAutor|insertLivroAutor] Erro:", error.message);
    res.json({
      status: "error",
      msg: error.message,
      data: null
    });
  }
};

const deleteLivroAutor = async (req, res) => {
  const regData = req.body;
  const token = req.session.token;

  try {
    const response = await axios.post(
      process.env.SERVIDOR_DW3Back + "/DeleteLivroAutor",
      regData,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`
        },
        timeout: 5000
      }
    );

    res.json({
      status: response.data.status,
      msg: response.data.msg || "Relação removida com sucesso",
      data: response.data
    });
  } catch (error) {
    console.error("[ctlLivroAutor|deleteLivroAutor] Erro:", error.message);
    res.json({
      status: "error",
      msg: error.message,
      data: null
    });
  }
};

module.exports = {
  getAllLivroAutor,
  openInsertLivroAutor,
  insertLivroAutor,
  deleteLivroAutor
};
