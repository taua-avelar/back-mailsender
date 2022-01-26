const db = require("../db");

const cadastrarUsuario = (req, res) => {
  const { nome, email } = req.body;

  if (!nome || !email)
    return res.status(400).json("Nome e email são necessarios para cadastro.");

  const usuarioEncontrado = db.find((usuario) => usuario.email === email);
  if (usuarioEncontrado) return res.status(400).json("Email já cadastrado.");

  db.push({ nome, email });
  res.json("Usuario cadastrado com sucesso.");
};

module.exports = {
  cadastrarUsuario,
};
