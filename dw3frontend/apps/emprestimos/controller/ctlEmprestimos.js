const axios = require("axios");
const moment = require("moment");

const getAllEmprestimos = async (req, res) => {
  const userName = req.session.userName;
  const token = req.session.token;

  try {
    const response = await axios.get(
      process.env.SERVIDOR_DW3Back + "/getAllEmprestimos",
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`
        }
      }
    );

    res.render("emprestimos/view/vwManutEmprestimos.njk", {
      title: "Manutenção de Empréstimos",
      data: response.data.registro,
      erro: null,
      userName: userName
    });
  } catch (error) {
    let errorMessage = "Erro ao buscar empréstimos";
    if (error.code === "ECONNREFUSED") {
      errorMessage = "Servidor indisponível";
    }

    res.render("emprestimos/view/vwManutEmprestimos.njk", {
      title: "Manutenção de Empréstimos",
      data: null,
      erro: errorMessage,
      userName: userName
    });
  }
};

const openInsertEmprestimo = async (req, res) => {
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

    res.render("emprestimos/view/vwFCrEmprestimos.njk", {
      title: "Cadastro de Empréstimo",
      data: null,
      livros: livros.data.registro,
      erro: null,
      userName: req.session.userName
    });
  } catch (error) {
    res.redirect("/emprestimos?erro=erro_carregar_dados");
  }
};

const insertEmprestimo = async (req, res) => {
  const regData = req.body;
  const token = req.session.token;

  try {
    const response = await axios.post(
      process.env.SERVIDOR_DW3Back + "/insertEmprestimos",
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
      msg: response.data.msg || "Empréstimo cadastrado com sucesso",
      data: response.data
    });
  } catch (error) {
    console.error("[ctlEmprestimos|insertEmprestimo] Erro:", error.message);
    res.json({
      status: "error",
      msg: error.message,
      data: null
    });
  }
};

const openUpdateEmprestimo = async (req, res) => {
  const id = req.params.id;
  const token = req.session.token;

  try {
    const response = await axios.post(
      process.env.SERVIDOR_DW3Back + "/getEmprestimoByID",
      { emprestimoid: id },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`
        }
      }
    );

    const livros = await axios.get(
      process.env.SERVIDOR_DW3Back + "/getAllLivros",
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`
        }
      }
    );

    if (response.data.status === "ok" && response.data.registro.length > 0) {
      const emprestimo = response.data.registro[0];
      emprestimo.dataemprestimo = moment(emprestimo.dataemprestimo).format("YYYY-MM-DD");
      emprestimo.datadevolucao = moment(emprestimo.datadevolucao).format("YYYY-MM-DD");

      res.render("emprestimos/view/vwFRUDrEmprestimos.njk", {
        title: "Editar Empréstimo",
        data: emprestimo,
        livros: livros.data.registro,
        disabled: false,
        userName: req.session.userName
      });
    } else {
      res.redirect("/emprestimos?erro=emprestimo_nao_encontrado");
    }
  } catch (error) {
    console.error("[ctlEmprestimos|openUpdateEmprestimo] Erro:", error.message);
    res.redirect("/emprestimos?erro=erro_buscar_emprestimo");
  }
};

// Atualizar empréstimo
const updateEmprestimo = async (req, res) => {
  const regData = req.body;
  const token = req.session.token;

  try {
    const response = await axios.post(
      process.env.SERVIDOR_DW3Back + "/updateEmprestimos",
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
      msg: response.data.msg || "Empréstimo atualizado com sucesso",
      data: response.data
    });
  } catch (error) {
    console.error("[ctlEmprestimos|updateEmprestimo] Erro:", error.message);
    res.json({
      status: "error",
      msg: error.message,
      data: null
    });
  }
};

const deleteEmprestimo = async (req, res) => {
  const regData = req.body;
  const token = req.session.token;

  try {
    const response = await axios.post(
      process.env.SERVIDOR_DW3Back + "/DeleteEmprestimos",
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
      msg: response.data.msg || "Empréstimo removido com sucesso",
      data: response.data
    });
  } catch (error) {
    console.error("[ctlEmprestimos|deleteEmprestimo] Erro:", error.message);
    res.json({
      status: "error",
      msg: error.message,
      data: null
    });
  }
};

module.exports = {
  getAllEmprestimos,
  openInsertEmprestimo,
  insertEmprestimo,
  openUpdateEmprestimo,
  updateEmprestimo,
  deleteEmprestimo
};
