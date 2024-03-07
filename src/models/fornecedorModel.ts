import mongoose from "mongoose";

const fornecedoresSchema = new mongoose.Schema({
  nome: { type: String, required: true, unique: true },
  nif: { type: String, required: true, unique: true },
  telefone: { type: String, required: true },
  endereco: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  site: { type: String, unique: true },
  Admin: { type: mongoose.Types.ObjectId, ref: "admin" },
  dataRegistro: { type: Date, default: Date.now },
});

export const Fornecedores = mongoose.model("fornecedores", fornecedoresSchema)