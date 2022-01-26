const db = require("../db");
const transport = require("../nodeMailer");

const enviarEmail = (req, res) => {
  const {
    primeiraNoticia,
    segundaNoticia,
    terceiraNoticia,
    quartaNoticia,
    quintaNoticia,
  } = req.body;

  db.forEach(async (usuario) => {
    let email = {
      from: "newsLetter@email.com",
      to: `${usuario.email}`,
      subject: "Newsletter",
      template: "newsletter",
      context: {
        nome: `${usuario.nome}`,
        primeiraNoticia,
        segundaNoticia,
        terceiraNoticia,
        quartaNoticia,
        quintaNoticia,
      },
    };

    transport.sendMail(email);
  });
  res.json("emails enviados");
};

module.exports = {
  enviarEmail,
};
