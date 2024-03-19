"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Fornecedores = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const fornecedoresSchema = new mongoose_1.default.Schema({
    nome: { type: String, required: true, unique: true },
    nif: { type: String, required: true, unique: true },
    telefone: { type: String, required: true },
    endereco: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    site: { type: String, unique: true },
    Admin: { type: mongoose_1.default.Types.ObjectId, ref: "admin" },
    dataRegistro: { type: Date, default: Date.now },
});
exports.Fornecedores = mongoose_1.default.model("fornecedores", fornecedoresSchema);
