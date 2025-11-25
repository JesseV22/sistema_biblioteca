const axios = require("axios");

const getAllAutores = async (req, res) => {
  const userName = req.session.userName;
  const token = req.session.token;

  try {
    const response = await axios.get(
      process.env.SERVIDOR_DW3Back + "/getAllAutores",
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`
        }
      }
    );

    res.render("autores/view/vwManutAutores.njk", {
      title: "Manutenção de Autores",
      data: response.data.registro,
      erro: null,
      userName: userName
    });
  } catch (error) {
    let errorMessage = "Erro ao buscar autores";
    if (error.code === "ECONNREFUSED") {
      errorMessage = "Servidor indisponível";
    } else if (error.response && error.response.status === 401) {
      errorMessage = "Sessão expirada";
    }

    res.render("autores/view/vwManutAutores.njk", {
      title: "Manutenção de Autores",
      data: null,
      erro: errorMessage,
      userName: userName
    });
  }
};

const openInsertAutor = (req, res) => {
  res.render("autores/view/vwFCrAutores.njk", {
    title: "Cadastro de Autor",
    data: null,
    erro: null,
    userName: req.session.userName
  });
};

const insertAutor = async (req, res) => {
  const regData = req.body;
  const token = req.session.token;

  try {
    const response = await axios.post(
      process.env.SERVIDOR_DW3Back + "/insertAutores",
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
      msg: response.data.msg || "Autor cadastrado com sucesso",
      data: response.data
    });
  } catch (error) {
    console.error("[ctlAutores|insertAutor] Erro:", error.message);
    res.json({
      status: "error",
      msg: error.message,
      data: null
    });
  }
};

const openUpdateAutor = async (req, res) => {
  const id = req.params.id;
  const token = req.session.token;

  try {
    const response = await axios.post(
      process.env.SERVIDOR_DW3Back + "/getAutorByID",
      { autorid: id },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`
        }
      }
    );

    if (response.data.status === "ok" && response.data.registro.length > 0) {
      res.render("autores/view/vwFRUDrAutores.njk", {
        title: "Editar Autor",
        data: response.data.registro[0],
        disabled: false,
        userName: req.session.userName
      });
    } else {
      res.redirect("/autores?erro=autor_nao_encontrado");
    }
  } catch (error) {
    console.error("[ctlAutores|openUpdateAutor] Erro:", error.message);
    res.redirect("/autores?erro=erro_buscar_autor");
  }
};

const updateAutor = async (req, res) => {
  const regData = req.body;
  const token = req.session.token;

  try {
    const response = await axios.post(
      process.env.SERVIDOR_DW3Back + "/updateAutores",
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
      msg: response.data.msg || "Autor atualizado com sucesso",
      data: response.data
    });
  } catch (error) {
    console.error("[ctlAutores|updateAutor] Erro:", error.message);
    res.json({
      status: "error",
      msg: error.message,
      data: null
    });
  }
};

const viewAutor = async (req, res) => {
  const id = req.params.id;
  const token = req.session.token;

  try {
    const response = await axios.post(
      process.env.SERVIDOR_DW3Back + "/getAutorByID",
      { autorid: id },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`
        }
      }
    );

    if (response.data.status === "ok" && response.data.registro.length > 0) {
      res.render("autores/view/vwFRUDrAutores.njk", {
        title: "Visualizar Autor",
        data: response.data.registro[0],
        disabled: true,
        userName: req.session.userName
      });
    } else {
      res.redirect("/autores?erro=autor_nao_encontrado");
    }
  } catch (error) {
    console.error("[ctlAutores|viewAutor] Erro:", error.message);
    res.redirect("/autores?erro=erro_buscar_autor");
  }
};

const deleteAutor = async (req, res) => {
  const regData = req.body;
  const token = req.session.token;

  try {
    const response = await axios.post(
      process.env.SERVIDOR_DW3Back + "/deleteAutores",
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
      msg: response.data.msg || "Autor removido com sucesso",
      data: response.data
    });
  } catch (error) {
    console.error("[ctlAutores|deleteAutor] Erro:", error.message);
    res.json({
      status: "error",
      msg: error.message,
      data: null
    });
  }
};

module.exports = {
  getAllAutores,
  openInsertAutor,
  insertAutor,
  openUpdateAutor,
  updateAutor,
  viewAutor,
  deleteAutor
};
