const mongoose = require("mongoose");
const { Schema } = mongoose;

const perfilSchema = new Schema({
  nome: {
    type: String,
    required: true,
  },
  idade: {
    type: Number,
    required: true,
  },
}, {
  collection: 'perfil' // Aqui força o nome correto da coleção
});

module.exports = Perfil;
