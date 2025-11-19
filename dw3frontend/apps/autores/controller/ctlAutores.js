const vwManutAutores = (req, res) => {
  res.render("autores/view/vwManutAutores.njk", {
    tituloPagina: "Manutenção de Autores",
  });
};

const vwFCrAutores = (req, res) => {
  res.render("autores/view/vwFCrAutores.njk", {
    tituloPagina: "Cadastro de Autor",
  });
};

const vwFRUDrAutores = (req, res) => {
  const autorid = req.query.autorid || 0;
  res.render("autores/view/vwFRUDrAutores.njk", {
    tituloPagina: "Alteração/Exclusão de Autor",
    autorid,
  });
};

module.exports = { vwManutAutores, vwFCrAutores, vwFRUDrAutores };
