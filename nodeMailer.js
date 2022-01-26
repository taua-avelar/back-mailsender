const nodemailer = require("nodemailer");
const handlebars = require("nodemailer-express-handlebars");

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "0c30aa0e34f0b4",
    pass: "bcee4f3b765f09",
  },
});

transport.use(
  "compile",
  handlebars({
    viewEngine: {
      extname: ".handlebars",
      defaultLayout: false,
    },
    viewPath: "./views/",
  })
);

module.exports = transport;
