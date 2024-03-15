"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Fabricantes = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const fabricantesSchema = new mongoose_1.default.Schema({
    nome: { type: String, required: true, unique: true },
    nif: { type: String, required: true, unique: true },
    pais: { type: String, required: true },
    endereco: { type: String, required: true },
    telefone: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    Admin: { type: mongoose_1.default.Types.ObjectId, ref: "admin" },
    dataRegistro: { type: Date, default: Date.now },
});
exports.Fabricantes = mongoose_1.default.model("fabricantes", fabricantesSchema);
