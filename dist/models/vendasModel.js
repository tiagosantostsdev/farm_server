"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Vendas = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const vendasSchema = new mongoose_1.default.Schema({
    nomeCliente: { type: String, required: true },
    produtos: { type: Array, required: true },
    valor: { type: Number, default: 0 },
    total: { type: Number, default: 0 },
    troco: { type: Number, default: 0 },
    Funcionario: { type: mongoose_1.default.Schema.Types.ObjectId, ref: "funcionarios" },
    dataVenda: { type: String, required: true },
});
exports.Vendas = mongoose_1.default.model("vendas", vendasSchema);
