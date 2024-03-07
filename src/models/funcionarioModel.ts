import mongoose from "mongoose";
import bcrypt from "bcrypt";

const funcionariosSchema = new mongoose.Schema({
  usuario: { type: String, required: true, unique: true },
  senha: { type: String, required: true, select: false },
  nif: { type: String, rqueired: true },
  endereco: { type: String, required: true },
  dataRegistro: { type: Date, default: Date.now },
  telemovel: { type: String, required: true },
  email: { type: String },
  genero: { type: String, rquired: true },
  dataNascimento: { type: String, required: true },
  Admin: { type: mongoose.Types.ObjectId, ref: "admin" },
});

funcionariosSchema.pre("save", function () {
  this.senha = bcrypt.hashSync(this.senha, 10);
});

export const Funcionario = mongoose.model("funcionarios", funcionariosSchema);
