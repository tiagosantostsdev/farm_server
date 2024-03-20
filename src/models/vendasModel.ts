import mongoose from "mongoose";

const vendasSchema = new mongoose.Schema({
  nomeCliente: { type: String, required: true },
  produtos: { type: Array, required: true },
  valor: { type: Number },
  total: { type: Number },
  troco: { type: Number, default: 0 },
  Funcionario: { type: mongoose.Schema.Types.ObjectId, ref: "funcionarios" },
  dataVenda: { type: String, required: true },
});

export const Vendas = mongoose.model("vendas", vendasSchema);
