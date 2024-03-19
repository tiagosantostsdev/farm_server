"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Funcionario = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const funcionariosSchema = new mongoose_1.default.Schema({
    usuario: { type: String, required: true, unique: true },
    senha: { type: String, required: true, select: false },
    nif: { type: String, rqueired: true },
    endereco: { type: String, required: true },
    dataRegistro: { type: Date, default: Date.now },
    telemovel: { type: String, required: true },
    email: { type: String },
    genero: { type: String, rquired: true },
    dataNascimento: { type: String, required: true },
    Admin: { type: mongoose_1.default.Types.ObjectId, ref: "admin" },
});
funcionariosSchema.pre("save", function () {
    this.senha = bcrypt_1.default.hashSync(this.senha, 10);
});
exports.Funcionario = mongoose_1.default.model("funcionarios", funcionariosSchema);
