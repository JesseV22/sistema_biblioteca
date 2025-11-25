const mdlLivroAutor = require("../model/mdlLivroAutor");

// GET ALL
const getAllLivroAutor = (req, res) => {
  (async () => {
    let registro = await mdlLivroAutor.getAllLivroAutor();
    res.json({ status: "ok", registro });
  })();
};

// GET BY ID
const getLivroAutorByID = (req, res) => {
  (async () => {
    const id = parseInt(req.body.livroautorid);
    let registro = await mdlLivroAutor.getLivroAutorByID(id);
    res.json({ status: "ok", registro });
  })();
};

// INSERT
const insertLivroAutor = (req, res) => {
  (async () => {
    const reg = req.body;
    let { msg, linhasAfetadas } = await mdlLivroAutor.insertLivroAutor(reg);
    res.json({ status: msg, linhasAfetadas });
  })();
};

// UPDATE
const updateLivroAutor = (req, res) => {
  (async () => {
    const reg = req.body;
    let { msg, linhasAfetadas } = await mdlLivroAutor.UpdateLivroAutor(reg);
    res.json({ status: msg, linhasAfetadas });
  })();
};

// DELETE (soft)
const DeleteLivroAutor = (req, res) => {
  (async () => {
    const reg = req.body;
    let { msg, linhasAfetadas } = await mdlLivroAutor.DeleteLivroAutor(reg);
    res.json({ status: msg, linhasAfetadas });
  })();
};

module.exports = {
  getAllLivroAutor,
  getLivroAutorByID,
  insertLivroAutor,
  updateLivroAutor,
  DeleteLivroAutor,
};
