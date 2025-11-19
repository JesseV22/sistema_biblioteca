const mdlEmprestimos = require("../model/mdlEmprestimos");

const getAllEmprestimos = (req, res) => {
  (async () => {
    let registro = await mdlEmprestimos.getAllEmprestimos();
    res.json({ status: "ok", registro });
  })();
};

const getEmprestimoByID = (req, res) => {
  (async () => {
    const id = parseInt(req.body.emprestimoid);
    let registro = await mdlEmprestimos.getEmprestimoByID(id);
    res.json({ status: "ok", registro });
  })();
};

const insertEmprestimos = (req, res) => {
  (async () => {
    const reg = req.body;
    let { msg, linhasAfetadas } = await mdlEmprestimos.insertEmprestimos(reg);
    res.json({ status: msg, linhasAfetadas });
  })();
};

const updateEmprestimos = (req, res) => {
  (async () => {
    const reg = req.body;
    let { msg, linhasAfetadas } = await mdlEmprestimos.UpdateEmprestimos(reg);
    res.json({ status: msg, linhasAfetadas });
  })();
};


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
