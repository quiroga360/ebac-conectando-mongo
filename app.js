const express = require("express");
const path = require("path");

const routerPrincipal = require("./routes/principal.js");
const routerPedidos = require("./routes/pedidos.js");
const routerPerfil = require("./routes/perfil.js");
const { connect } = require("./models");

const app = express();
const porta = 3000;

// EJS
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// routers
app.use("/perfil", routerPerfil);
app.use("/pedidos", routerPedidos);
app.use("/", routerPrincipal);

app.listen(porta, () => {
  connect();
  console.log(`Servidor ouvindo na porta ${porta}.`);
});
