const vwLogin = (req, res) => {
  res.render("login/view/vwLogin.njk", {
    tituloPagina: "Login",
  });
};

module.exports = { vwLogin };
