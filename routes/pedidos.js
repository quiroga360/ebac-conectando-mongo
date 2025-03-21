const express = require("express");

const { Pedido } = require("../models");

const router = express.Router();

router.get("/", (_, res) => {
  Pedido.find({}).then((pedidos) => {
    res.render("pedidos/index", {
      nomeDoUsuario: "Pablo",
      pedidos: pedidos,
    });
  });
});

module.exports = router;
