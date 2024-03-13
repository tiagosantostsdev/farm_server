import mongoose from "mongoose";

const carrinhoSchema = new mongoose.Schema({
  nome: {type:String, required:true},
  Produto: [
    { type: mongoose.Schema.Types.ObjectId, ref: "produtos", required: true },
  ],
  quantidade: { type: Number, required: true },
  total: { type: Number, required: true },
  data: { type: Date, default: Date.now },
});

export const Carrinho = mongoose.model("carrinho", carrinhoSchema);
