import mongoose from "mongoose";

const vendasSchema = new mongoose.Schema({
  produtos: { type: String, required: true },
  valor: { type: Number, required: true },
  troco: { type: Number },
  total: { type: Number, required: true },
  Venda: { type: mongoose.Schema.Types.ObjectId, ref: "vendas" },
});

export const Vendas = mongoose.model("vendas", vendasSchema);
