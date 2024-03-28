import mongoose from "mongoose";

const produtosSchema = new mongoose.Schema({
  nome: { type: String, required: true },
  quantidade: { type: Number, required: true, default: 0 },
  dosagem: { type: String, required: true },
  descricao: { type: String, required: true },
  preco: { type: Number, required: true },
  fornecedor: { type: String, required: true },
  fabricante: { type: String, required: true },
  dataRegistro: {type:String, required:true}
});

export const Produto = mongoose.model("produtos", produtosSchema);
    