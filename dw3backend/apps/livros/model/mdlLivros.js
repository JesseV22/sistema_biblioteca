const db = require("../../../database/databaseconfig");

// Retorna todos os livros não removidos
const getAllLivros = async () => {
  return (
    await db.query(
      "SELECT * FROM livros WHERE removido = false ORDER BY titulo ASC"
    )
  ).rows;
};

// Retorna um livro pelo ID
const getLivroByID = async (livroIDPar) => {
  return (
    await db.query(
      "SELECT * FROM livros WHERE livroid = $1 AND removido = false",
      [livroIDPar]
    )
  ).rows;
};

// Insere um novo livro
const insertLivros = async (livroREGPar) => {
  let linhasAfetadas;
  let msg = "ok";

  try {
    linhasAfetadas = (
      await db.query(
        "INSERT INTO livros " +
          "(titulo, categoria, preco, quantidade, removido) " +
          "VALUES ($1, $2, $3, $4, $5)",
        [
          livroREGPar.titulo,
          livroREGPar.categoria,
          livroREGPar.preco,
          livroREGPar.quantidade,
          livroREGPar.removido,
        ]
      )
    ).rowCount;
  } catch (error) {
    msg = "[mdlLivros|insertLivros] " + error.detail;
    linhasAfetadas = -1;
  }

  return { msg, linhasAfetadas };
};

// Atualiza um livro
const UpdateLivros = async (livroREGPar) => {
  let linhasAfetadas;
  let msg = "ok";

  try {
    linhasAfetadas = (
      await db.query(
        "UPDATE livros SET " +
          "titulo = $2, " +
          "categoria = $3, " +
          "preco = $4, " +
          "quantidade = $5, " +
          "removido = $6 " +
          "WHERE livroid = $1",
        [
          livroREGPar.livroid,
          livroREGPar.titulo,
          livroREGPar.categoria,
          livroREGPar.preco,
          livroREGPar.quantidade,
          livroREGPar.removido,
        ]
      )
    ).rowCount;
  } catch (error) {
    msg = "[mdlLivros|UpdateLivros] " + error.detail;
    linhasAfetadas = -1;
  }

  return { msg, linhasAfetadas };
};

// Soft delete (removido = true)
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
  } catch (error) {
    msg = "[mdlLivros|DeleteLivros] " + error.detail;
    linhasAfetadas = -1;
  }

  return { msg, linhasAfetadas };
};

module.exports = {
  getAllLivros,
  getLivroByID,
  insertLivros,
  UpdateLivros,
  DeleteLivros,
};
