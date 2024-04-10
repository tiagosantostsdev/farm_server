"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Funcionario = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const funcionariosSchema = new mongoose_1.default.Schema({
    usuario: { type: String, required: true, unique: true },
    senha: { type: String, required: true, select: false },
    nif: { type: String, rqueired: true },
    endereco: { type: String, required: true },
    dataRegistro: { type: String, required: true },
    telemovel: { type: String, required: true },
    email: { type: String, rquired: true },
    genero: { type: String, rquired: true },
    dataNascimento: { type: String, required: true },
    Admin: { type: mongoose_1.default.Types.ObjectId, ref: "admin" },
    codeVerify: { type: String, default: undefined },
});
exports.Funcionario = mongoose_1.default.model("funcionarios", funcionariosSchema);
