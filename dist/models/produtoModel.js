"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Produto = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const produtosSchema = new mongoose_1.default.Schema({
    nome: { type: String, required: true },
    quantidade: { type: Number, required: true, default: 0 },
    dosagem: { type: String, required: true },
    descricao: { type: String, required: true },
    preco: { type: Number, required: true },
    fornecedor: { type: String, required: true },
    fabricante: { type: String, required: true },
    dataRegistro: { type: String, required: true }
});
exports.Produto = mongoose_1.default.model("produtos", produtosSchema);
