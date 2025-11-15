const db = require("../../../database/databaseconfig");

// Todos os empréstimos não removidos
const getAllEmprestimos = async () => {
  return (
    await db.query(
      "SELECT * FROM emprestimos WHERE removido = false ORDER BY data_emprestimo DESC"
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
          "(livroid, leitor, data_emprestimo, data_prevista, data_devolucao, valor_multa, removido) " +
          "VALUES ($1, $2, $3, $4, $5, $6, $7)",
        [
          registroPar.livroid,
          registroPar.leitor,
          registroPar.data_emprestimo,
          registroPar.data_prevista,
          registroPar.data_devolucao,
          registroPar.valor_multa,
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
          "leitor = $3, " +
          "data_emprestimo = $4, " +
          "data_prevista = $5, " +
          "data_devolucao = $6, " +
          "valor_multa = $7, " +
          "removido = $8 " +
          "WHERE emprestimoid = $1",
        [
          registroPar.emprestimoid,
          registroPar.livroid,
          registroPar.leitor,
          registroPar.data_emprestimo,
          registroPar.data_prevista,
          registroPar.data_devolucao,
          registroPar.valor_multa,
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
