const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const mdlLogin = require("../model/mdlLogin");

const Login = (req, res) => {
  (async () => {
    const user = req.body;

    const dados = await mdlLogin.GetCredencial(user);

    if (dados.length === 0) {
      return res.status(403).json({ auth: false, message: "Usuário não encontrado" });
    }

    const senhaOK = bcrypt.compareSync(user.password, dados[0].password);
    if (!senhaOK) {
      return res.status(403).json({ auth: false, message: "Senha incorreta" });
    }

    const token = jwt.sign(
      { username: dados[0].username },
      process.env.SECRET_API,
      { expiresIn: 120 * 60 }
    );

    res.json({ auth: true, token });
  })();
};

const AutenticaJWT = (req, res, next) => {
  const header = req.headers["authorization"];
  if (!header) return res.status(401).json({ auth: false, message: "Token não informado" });

  const token = header.split(" ")[1];

  jwt.verify(token, process.env.SECRET_API, (err) => {
    if (err) return res.status(403).json({ auth: false, message: "Token inválido" });
    next();
  });
};

const Logout = (req, res) => {
  res.json({ auth: false, token: null });
};

module.exports = { Login, Logout, AutenticaJWT };
