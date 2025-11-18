const db = require("../../../database/databaseconfig");

const getAllLivros = async () => {
  return (
    await db.query(
      "SELECT * FROM livros WHERE removido = false ORDER BY titulo ASC"
    )
  ).rows;
};

const getLivroByID = async (livroidPar) => {
  return (
    await db.query(
      "SELECT * FROM livros WHERE livroid = $1 AND removido = false",
      [livroidPar]
    )
  ).rows;
};

const insertLivros = async (livroREGPar) => {
  let linhasAfetadas;
  let msg = "ok";

  try {
    linhasAfetadas = (
      await db.query(
        "INSERT INTO livros (titulo, categoria, preco, quantidade, removido) VALUES ($1, $2, $3, $4, $5)",
        [
          livroREGPar.titulo,
          livroREGPar.categoria,
          livroREGPar.preco,
          livroREGPar.quantidade,
          livroREGPar.removido ?? false
        ]
      )
    ).rowCount;
  } catch (err) {
    msg = "[mdlLivros|insertLivros] " + err.detail;
    linhasAfetadas = -1;
  }

  return { msg, linhasAfetadas };
};

const UpdateLivros = async (livroREGPar) => {
  let linhasAfetadas;
  let msg = "ok";

  try {
    linhasAfetadas = (
      await db.query(
        "UPDATE livros SET titulo = $2, categoria = $3, preco = $4, quantidade = $5, removido = $6 WHERE livroid = $1",
        [
          livroREGPar.livroid,
          livroREGPar.titulo,
          livroREGPar.categoria,
          livroREGPar.preco,
          livroREGPar.quantidade,
          livroREGPar.removido
        ]
      )
    ).rowCount;
  } catch (err) {
    msg = "[mdlLivros|UpdateLivros] " + err.detail;
    linhasAfetadas = -1;
  }

  return { msg, linhasAfetadas };
};

const DeleteLivros = async (livroREGPar) => {
  let linhasAfetadas;
  let msg = "ok";

  try {
    linhasAfetadas = (
      await db.query(
        "UPDATE livros SET removido = true WHERE livroid = $1",
        [livroREGPar.livroid]
      )
    ).rowCount;
  } catch (err) {
    msg = "[mdlLivros|DeleteLivros] " + err.detail;
    linhasAfetadas = -1;
  }

  return { msg, linhasAfetadas };
};

module.exports = {
  getAllLivros,
  getLivroByID,
  insertLivros,
  UpdateLivros,
  DeleteLivros
};
