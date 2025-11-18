const db = require("../../../database/databaseconfig");

// Retorna todos os autores não removidos
const getAllAutores = async () => {
  return (
    await db.query(
      "SELECT * FROM autores WHERE removido = false ORDER BY nome ASC"
    )
  ).rows;
};

// Retorna um autor pelo ID
const getAutorByID = async (autorIDPar) => {
  return (
    await db.query(
      "SELECT * FROM autores WHERE autorid = $1 AND removido = false",
      [autorIDPar]
    )
  ).rows;
};

// Insere um novo autor
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

// Atualiza um autor
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

// Soft delete (removido = true)
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
