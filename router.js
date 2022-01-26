const express = require("express");
const usuarios = require("./controllers/usuarios");
const email = require("./controllers/email");

router = express();

router.post("/usuarios", usuarios.cadastrarUsuario);

router.post("/email", email.enviarEmail);

module.exports = router;
