const db = require("../../../database/databaseconfig");

const getAllAutores = async () => {
  return (
    await db.query(
      "SELECT * FROM autores WHERE removido = false ORDER BY nome ASC"
    )
  ).rows;
};

const getAutorByID = async (autorIDPar) => {
  return (
    await db.query(
      "SELECT * FROM autores WHERE autorid = $1 AND removido = false",
      [autorIDPar]
    )
  ).rows;
};

const insertAutores = async (autorREGPar) => {
  let linhasAfetadas;
  let msg = "ok";

  try {
    linhasAfetadas = (
      await db.query(
        "INSERT INTO autores (nome, nacionalidade, removido) VALUES ($1, $2, $3)",
        [autorREGPar.nome, autorREGPar.nacionalidade, autorREGPar.removido]
      )
    ).rowCount;
  } catch (error) {
    msg = "[mdlAutores|insertAutores] " + error.detail;
    linhasAfetadas = -1;
  }

  return { msg, linhasAfetadas };
};

const updateAutores = async (autorREGPar) => {
  let linhasAfetadas;
  let msg = "ok";

  try {
    linhasAfetadas = (
      await db.query(
        "UPDATE autores SET nome = $2, nacionalidade = $3, removido = $4 WHERE autorid = $1",
        [
          autorREGPar.autorid,
          autorREGPar.nome,
          autorREGPar.nacionalidade,
          autorREGPar.removido,
        ]
      )
    ).rowCount;
  } catch (error) {
    msg = "[mdlAutores|updateAutores] " + error.detail;
    linhasAfetadas = -1;
  }

  return { msg, linhasAfetadas };
};

// Soft delete 
const deleteAutores = async (autorREGPar) => {
  let linhasAfetadas;
  let msg = "ok";

  try {
    linhasAfetadas = (
      await db.query(
        "UPDATE autores SET removido = true WHERE autorid = $1",
        [autorREGPar.autorid]
      )
    ).rowCount;
  } catch (error) {
    msg = "[mdlAutores|deleteAutores] " + error.detail;
    linhasAfetadas = -1;
  }

  return { msg, linhasAfetadas };
};

module.exports = {
  getAllAutores,
  getAutorByID,
  insertAutores,
  updateAutores,
  deleteAutores,
};
