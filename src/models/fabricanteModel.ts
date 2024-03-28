import mongoose from "mongoose";

const fabricantesSchema = new mongoose.Schema({
  nome: { type: String, required: true, unique: true },
  nif: { type: String, required: true, unique: true },
  pais: { type: String, required: true },
  endereco: { type: String, required: true },
  telefone: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  dataRegistro: { type: String, required:true},
});

export const Fabricantes = mongoose.model("fabricantes", fabricantesSchema);
