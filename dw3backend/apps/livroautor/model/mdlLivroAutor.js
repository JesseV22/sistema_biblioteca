
const db = require("../../../database/databaseconfig");

// Todos os vínculos livro-autor (N:M) não removidos
const getAllLivroAutor = async () => {
  return (
    await db.query(
      "SELECT * FROM livro_autor WHERE removido = false ORDER BY livroautorid ASC"
    )
  ).rows;
};

// Busca vínculo por ID
const getLivroAutorByID = async (livroAutorIDPar) => {
  return (
    await db.query(
      "SELECT * FROM livro_autor WHERE livroautorid = $1 AND removido = false",
      [livroAutorIDPar]
    )
  ).rows;
};

// Insere um vínculo livro-autor
const insertLivroAutor = async (registroPar) => {
  let linhasAfetadas;
  let msg = "ok";

  try {
    linhasAfetadas = (
      await db.query(
        "INSERT INTO livro_autor " +
          "(livroid, autorid, removido) " +
          "VALUES ($1, $2, $3)",
        [registroPar.livroid, registroPar.autorid, registroPar.removido]
      )
    ).rowCount;
  } catch (error) {
    msg = "[mdlLivroAutor|insertLivroAutor] " + error.detail;
    linhasAfetadas = -1;
  }

  return { msg, linhasAfetadas };
};

// Atualiza vínculo livro-autor
const UpdateLivroAutor = async (registroPar) => {
  let linhasAfetadas;
  let msg = "ok";

  try {
    linhasAfetadas = (
      await db.query(
        "UPDATE livro_autor SET " +
          "livroid = $2, " +
          "autorid = $3, " +
          "removido = $4 " +
          "WHERE livroautorid = $1",
        [
          registroPar.livroautorid,
          registroPar.livroid,
          registroPar.autorid,
          registroPar.removido,
        ]
      )
    ).rowCount;
  } catch (error) {
    msg = "[mdlLivroAutor|UpdateLivroAutor] " + error.detail;
    linhasAfetadas = -1;
  }

  return { msg, linhasAfetadas };
};

// Soft delete
const DeleteLivroAutor = async (registroPar) => {
  let linhasAfetadas;
  let msg = "ok";

  try {
    linhasAfetadas = (
      await db.query(
        "UPDATE livro_autor SET removido = true WHERE livroautorid = $1",
        [registroPar.livroautorid]
      )
    ).rowCount;
  } catch (error) {
    msg = "[mdlLivroAutor|DeleteLivroAutor] " + error.detail;
    linhasAfetadas = -1;
  }

  return { msg, linhasAfetadas };
};

module.exports = {
  getAllLivroAutor,
  getLivroAutorByID,
  insertLivroAutor,
  UpdateLivroAutor,
  DeleteLivroAutor,
};
