"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Carrinho = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const carrinhoSchema = new mongoose_1.default.Schema({
    nome: { type: String, required: true },
    Produto: [
        { type: mongoose_1.default.Schema.Types.ObjectId, ref: "produtos", required: true },
    ],
    quantidade: { type: Number, required: true },
    descricao: { type: String, required: true },
    dosagem: { type: String, required: true },
    total: { type: Number, required: true },
    data: { type: Date, default: Date.now },
});
exports.Carrinho = mongoose_1.default.model("carrinho", carrinhoSchema);
