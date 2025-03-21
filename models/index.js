const mongoose = require("mongoose");

const PedidoSchema = require("./pedido.js");
const PerfilSchema = require("./perfil.js");

const Pedido = mongoose.model("Pedido", PedidoSchema);
const Perfil = mongoose.model("Perfil", PerfilSchema);

const connect = () => {
  mongoose.connect("mongodb://localhost:27017/ebacpizza");
};

module.exports = {
  connect,
  Pedido,
  Perfil,
};
