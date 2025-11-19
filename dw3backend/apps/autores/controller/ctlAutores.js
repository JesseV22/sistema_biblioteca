const mdlAutores = require("../model/mdlAutores");

const getAllAutores = (req, res) => {
  (async () => {
    let registro = await mdlAutores.getAllAutores();
    res.json({ status: "ok", registro });
  })();
};

const getAutorByID = (req, res) => {
  (async () => {
    const id = parseInt(req.body.autorid);
    let registro = await mdlAutores.getAutorByID(id);
    res.json({ status: "ok", registro });
  })();
};

const insertAutores = (req, res) => {
  (async () => {
    const autorREG = req.body;
    let { msg, linhasAfetadas } = await mdlAutores.insertAutores(autorREG);
    res.json({ status: msg, linhasAfetadas });
  })();
};

const updateAutores = (req, res) => {
  (async () => {
    const autorREG = req.body;
    let { msg, linhasAfetadas } = await mdlAutores.updateAutores(autorREG);
    res.json({ status: msg, linhasAfetadas });
  })();
};

const deleteAutores = (req, res) => {
  (async () => {
    const autorREG = req.body;
    let { msg, linhasAfetadas } = await mdlAutores.deleteAutores(autorREG);
    res.json({ status: msg, linhasAfetadas });
  })();
};

module.exports = {
  getAllAutores,
  getAutorByID,
  insertAutores,
  updateAutores,
  deleteAutores,
};
