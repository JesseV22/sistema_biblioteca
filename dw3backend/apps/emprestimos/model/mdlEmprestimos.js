const db = require("../../../database/databaseconfig");

// Todos os empréstimos não removidos
const getAllEmprestimos = async () => {
  return (
    await db.query(
      "SELECT * FROM emprestimos WHERE removido = false ORDER BY dataemprestimo DESC"
    )
  ).rows;
};

// Empréstimo por ID
const getEmprestimoByID = async (emprestimoIDPar) => {
  return (
    await db.query(
      "SELECT * FROM emprestimos WHERE emprestimoid = $1 AND removido = false",
      [emprestimoIDPar]
    )
  ).rows;
};

// Inserir empréstimo
const insertEmprestimos = async (registroPar) => {
  let linhasAfetadas;
  let msg = "ok";

  try {
    linhasAfetadas = (
      await db.query(
        "INSERT INTO emprestimos " +
          "(livroid, nomecliente, dataemprestimo, datadevolucao, removido) " +
          "VALUES ($1, $2, $3, $4, $5)",
        [
          registroPar.livroid,
          registroPar.nomecliente,
          registroPar.dataemprestimo,
          registroPar.datadevolucao,
          registroPar.removido,
        ]
      )
    ).rowCount;
  } catch (error) {
    msg = "[mdlEmprestimos|insertEmprestimos] " + error.detail;
    linhasAfetadas = -1;
  }

  return { msg, linhasAfetadas };
};

// Atualizar empréstimo
const UpdateEmprestimos = async (registroPar) => {
  let linhasAfetadas;
  let msg = "ok";

  try {
    linhasAfetadas = (
      await db.query(
        "UPDATE emprestimos SET " +
          "livroid = $2, " +
          "nomecliente = $3, " +
          "dataemprestimo = $4, " +
          "datadevolucao = $5, " +
          "removido = $6 " +
          "WHERE emprestimoid = $1",
        [
          registroPar.emprestimoid,
          registroPar.livroid,
          registroPar.nomecliente,
          registroPar.dataemprestimo,
          registroPar.datadevolucao,
          registroPar.removido,
        ]
      )
    ).rowCount;
  } catch (error) {
    msg = "[mdlEmprestimos|UpdateEmprestimos] " + error.detail;
    linhasAfetadas = -1;
  }

  return { msg, linhasAfetadas };
};

// Soft delete
const DeleteEmprestimos = async (registroPar) => {
  let linhasAfetadas;
  let msg = "ok";

  try {
    linhasAfetadas = (
      await db.query(
        "UPDATE emprestimos SET removido = true WHERE emprestimoid = $1",
        [registroPar.emprestimoid]
      )
    ).rowCount;
  } catch (error) {
    msg = "[mdlEmprestimos|DeleteEmprestimos] " + error.detail;
    linhasAfetadas = -1;
  }

  return { msg, linhasAfetadas };
};

module.exports = {
  getAllEmprestimos,
  getEmprestimoByID,
  insertEmprestimos,
  UpdateEmprestimos,
  DeleteEmprestimos,
};
