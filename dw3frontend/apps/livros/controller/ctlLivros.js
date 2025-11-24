const axios = require("axios");

// Listar todos os livros
const getAllLivros = async (req, res) => {
  const userName = req.session.userName;
  const token = req.session.token;

  try {
    const response = await axios.get(
      process.env.SERVIDOR_DW3Back + "/getAllLivros",
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`
        }
      }
    );

    res.render("livros/view/vwManutLivros.njk", {
      title: "Manutenção de Livros",
      data: response.data.registro,
      erro: null,
      userName: userName
    });
  } catch (error) {
    let errorMessage = "Erro ao buscar livros";
    if (error.code === "ECONNREFUSED") {
      errorMessage = "Servidor indisponível";
    } else if (error.response && error.response.status === 401) {
      errorMessage = "Sessão expirada";
    }

    res.render("livros/view/vwManutLivros.njk", {
      title: "Manutenção de Livros",
      data: null,
      erro: errorMessage,
      userName: userName
    });
  }
};

// Abrir formulário de inserção
const openInsertLivro = (req, res) => {
  res.render("livros/view/vwFCrLivros.njk", {
    title: "Cadastro de Livro",
    data: null,
    erro: null,
    userName: req.session.userName
  });
};

// Inserir novo livro
const insertLivro = async (req, res) => {
  const regData = req.body;
  const token = req.session.token;

  try {
    const response = await axios.post(
      process.env.SERVIDOR_DW3Back + "/insertLivros",
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
      msg: response.data.msg || "Livro cadastrado com sucesso",
      data: response.data
    });
  } catch (error) {
    console.error("[ctlLivros|insertLivro] Erro:", error.message);
    res.json({
      status: "error",
      msg: error.message,
      data: null
    });
  }
};

// Abrir formulário de edição
const openUpdateLivro = async (req, res) => {
  const id = req.params.id;
  const token = req.session.token;

  try {
    const response = await axios.post(
      process.env.SERVIDOR_DW3Back + "/getLivroByID",
      { livroid: id },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`
        }
      }
    );

    if (response.data.status === "ok" && response.data.registro.length > 0) {
      res.render("livros/view/vwFRUDrLivros.njk", {
        title: "Editar Livro",
        data: response.data.registro[0],
        disabled: false,
        userName: req.session.userName
      });
    } else {
      res.redirect("/livros?erro=livro_nao_encontrado");
    }
  } catch (error) {
    console.error("[ctlLivros|openUpdateLivro] Erro:", error.message);
    res.redirect("/livros?erro=erro_buscar_livro");
  }
};

// Atualizar livro
const updateLivro = async (req, res) => {
  const regData = req.body;
  const token = req.session.token;

  try {
    const response = await axios.post(
      process.env.SERVIDOR_DW3Back + "/updateLivros",
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
      msg: response.data.msg || "Livro atualizado com sucesso",
      data: response.data
    });
  } catch (error) {
    console.error("[ctlLivros|updateLivro] Erro:", error.message);
    res.json({
      status: "error",
      msg: error.message,
      data: null
    });
  }
};

// Visualizar livro
const viewLivro = async (req, res) => {
  const id = req.params.id;
  const token = req.session.token;

  try {
    const response = await axios.post(
      process.env.SERVIDOR_DW3Back + "/getLivroByID",
      { livroid: id },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`
        }
      }
    );

    if (response.data.status === "ok" && response.data.registro.length > 0) {
      res.render("livros/view/vwFRUDrLivros.njk", {
        title: "Visualizar Livro",
        data: response.data.registro[0],
        disabled: true,
        userName: req.session.userName
      });
    } else {
      res.redirect("/livros?erro=livro_nao_encontrado");
    }
  } catch (error) {
    console.error("[ctlLivros|viewLivro] Erro:", error.message);
    res.redirect("/livros?erro=erro_buscar_livro");
  }
};

// Deletar livro
const deleteLivro = async (req, res) => {
  const regData = req.body;
  const token = req.session.token;

  try {
    const response = await axios.post(
      process.env.SERVIDOR_DW3Back + "/DeleteLivros",
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
      msg: response.data.msg || "Livro removido com sucesso",
      data: response.data
    });
  } catch (error) {
    console.error("[ctlLivros|deleteLivro] Erro:", error.message);
    res.json({
      status: "error",
      msg: error.message,
      data: null
    });
  }
};

module.exports = {
  getAllLivros,
  openInsertLivro,
  insertLivro,
  openUpdateLivro,
  updateLivro,
  viewLivro,
  deleteLivro
};
