import mongoose from "mongoose";

const funcionariosSchema = new mongoose.Schema({
  usuario: { type: String, required: true, unique: true },
  senha: { type: String, required: true, select: false },
  nif: { type: String, rqueired: true },
  endereco: { type: String, required: true },
  dataRegistro: { type: String, required: true },
  telemovel: { type: String, required: true },
  email: { type: String, rquired:true },
  genero: { type: String, rquired: true },
  dataNascimento: { type: String, required: true },
  Admin: { type: mongoose.Types.ObjectId, ref: "admin" },
  codeVerify: { type: String, default: undefined },
});

export const Funcionario = mongoose.model("funcionarios", funcionariosSchema);
