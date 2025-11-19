const mdlLivros = require("../model/mdlLivros");

// GET ALL
const getAllLivros = (req, res) => {
  (async () => {
    let registro = await mdlLivros.getAllLivros();
    res.json({ status: "ok", registro });
  })();
};

// GET BY ID
const getLivroByID = (req, res) => {
  (async () => {
    const id = parseInt(req.body.livroid);
    let registro = await mdlLivros.getLivroByID(id);
    res.json({ status: "ok", registro });
  })();
};

// INSERT
const insertLivros = (req, res) => {
  (async () => {
    const livroREG = req.body;
    let { msg, linhasAfetadas } = await mdlLivros.insertLivros(livroREG);
    res.json({ status: msg, linhasAfetadas });
  })();
};

// UPDATE
const updateLivros = (req, res) => {
  (async () => {
    const livroREG = req.body;
    let { msg, linhasAfetadas } = await mdlLivros.UpdateLivros(livroREG);
    res.json({ status: msg, linhasAfetadas });
  })();
};

// DELETE
const deleteLivros = (req, res) => {
  (async () => {
    const livroREG = req.body;
    let { msg, linhasAfetadas } = await mdlLivros.DeleteLivros(livroREG);
    res.json({ status: msg, linhasAfetadas });
  })();
};

module.exports = {
  getAllLivros,
  getLivroByID,
  insertLivros,
  updateLivros,
  deleteLivros,
};
