"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FuncionarioLogin = exports.AdminLogin = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const loginService_1 = require("../services/loginService");
const AdminLogin = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { admin, password } = req.body;
        if (!admin || !password) {
            return res
                .status(400)
                .send({ message: "Por favor preencha todos os campos" });
        }
        const adm = yield (0, loginService_1.findAdminLogin)(admin);
        if (!adm) {
            return res
                .status(400)
                .send({ messaage: "Usuário ou palavra passe inválido" });
        }
        const isValidPassword = bcrypt_1.default.compareSync(password, adm.password);
        if (!isValidPassword) {
            return res
                .status(400)
                .send({ messaage: "Usuário ou palavra passe inválido" });
        }
        const token = (0, loginService_1.generateToken)(adm.id);
        res.status(200).send(token);
    }
    catch (error) {
        if (error instanceof Error) {
            console.log({ message: error.message });
            return res.status(500).send({ message: error.message });
        }
    }
});
exports.AdminLogin = AdminLogin;
const FuncionarioLogin = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { usuario, senha } = req.body;
        if (!usuario || !senha) {
            return res
                .status(400)
                .send({
                message: "Por favor digite o usuario e senha para iniciar sessão",
            });
        }
        const funcionario = yield (0, loginService_1.findFuncionarioLogin)(usuario);
        if (!funcionario) {
            return res
                .status(400)
                .send({ message: "Usuario ou senha de usuário inválido" });
        }
        const isValidSenha = bcrypt_1.default.compareSync(senha, funcionario.senha);
        if (!isValidSenha) {
            return res
                .status(400)
                .send({ message: "Usuario ou senha de usuário inválido" });
        }
        const token = (0, loginService_1.generateToken)(funcionario.id);
        res.status(200).send(token);
    }
    catch (error) {
        if (error instanceof Error) {
            console.log({ message: error.message });
            return res.status(400).send({ message: error.message });
        }
    }
});
exports.FuncionarioLogin = FuncionarioLogin;
