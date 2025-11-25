const mdlEmprestimos = require("../model/mdlEmprestimos");

// GET ALL
const getAllEmprestimos = (req, res) => {
  (async () => {
    let registro = await mdlEmprestimos.getAllEmprestimos();
    res.json({ status: "ok", registro });
  })();
};

// GET BY ID
const getEmprestimoByID = (req, res) => {
  (async () => {
    const id = parseInt(req.body.emprestimoid);
    let registro = await mdlEmprestimos.getEmprestimoByID(id);
    res.json({ status: "ok", registro });
  })();
};

// INSERT
const insertEmprestimos = (req, res) => {
  (async () => {
    const reg = req.body;
    let { msg, linhasAfetadas } = await mdlEmprestimos.insertEmprestimos(reg);
    res.json({ status: msg, linhasAfetadas });
  })();
};

// UPDATE
const updateEmprestimos = (req, res) => {
  (async () => {
    const reg = req.body;
    let { msg, linhasAfetadas } = await mdlEmprestimos.UpdateEmprestimos(reg);
    res.json({ status: msg, linhasAfetadas });
  })();
};

// DELETE (soft)
const DeleteEmprestimos = (req, res) => {
  (async () => {
    const reg = req.body;
    let { msg, linhasAfetadas } = await mdlEmprestimos.DeleteEmprestimos(reg);
    res.json({ status: msg, linhasAfetadas });
  })();
};

module.exports = {
  getAllEmprestimos,
  getEmprestimoByID,
  insertEmprestimos,
  updateEmprestimos,
  DeleteEmprestimos,
};
