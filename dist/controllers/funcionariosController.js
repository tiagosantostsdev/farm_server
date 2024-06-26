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
exports.RedefinirSenhaFunc = exports.SolicitarRedefinicaoSenhaFunc = exports.DeleteFuncionario = exports.UpdateFuncionario = exports.FindFuncionarioById = exports.FindFuncionario = exports.CreateFuncionario = void 0;
const funcionariosService_1 = require("../services/funcionariosService");
const bcrypt_1 = __importDefault(require("bcrypt"));
const ResetPasswordEmail_1 = require("../config/ResetPasswordEmail");
const CreateFuncionario = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { usuario, senha, nif, endereco, telemovel, email, genero, dataNascimento, } = req.body;
        if (!usuario ||
            !senha ||
            !nif ||
            !endereco ||
            !telemovel ||
            !genero ||
            !dataNascimento) {
            return res
                .status(400)
                .send({ message: "Por favor preencha todos os campos" });
        }
        const date = new Date();
        const hash = bcrypt_1.default.hashSync(senha, 10);
        const funcionario = yield (0, funcionariosService_1.createFuncionario)({
            usuario,
            senha: hash,
            nif,
            endereco,
            dataRegistro: date.toLocaleString("pt-AO", { timeZone: "Africa/Luanda",
                year: "numeric",
                month: "long",
                day: "numeric",
                hour: "numeric",
                minute: "numeric",
                second: "numeric",
            }),
            telemovel,
            email,
            genero,
            dataNascimento,
        });
        if (!funcionario) {
            return res
                .status(400)
                .send({ message: "Erro ao criar novo funcionário" });
        }
        res
            .status(201)
            .send({ message: "Novo funcionário adicionado com sucesso" });
    }
    catch (error) {
        if (error instanceof Error) {
            console.log({ message: error.message });
            return res.status(500).send({ message: error.message });
        }
    }
});
exports.CreateFuncionario = CreateFuncionario;
const FindFuncionario = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const funcionario = yield (0, funcionariosService_1.findFuncionarios)();
        if (funcionario.length === 0) {
            return res
                .status(404)
                .send({ message: "Nenhum funcionário foi encontrado" });
        }
        res.status(200).send(funcionario);
    }
    catch (error) {
        if (error instanceof Error) {
            console.log({ message: error.message });
            return res.status(500).send({ message: error.message });
        }
    }
});
exports.FindFuncionario = FindFuncionario;
const FindFuncionarioById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { funcionarioId } = req;
        const funcionario = yield (0, funcionariosService_1.findFuncionarioById)(funcionarioId);
        if (!funcionario) {
            return res.status(400).send({ message: "Funcionario não encontrado" });
        }
        res.status(200).send(funcionario);
    }
    catch (error) {
        if (error instanceof Error) {
            console.log({ message: error.message });
            return res.status(500).send({ message: error.message });
        }
    }
});
exports.FindFuncionarioById = FindFuncionarioById;
const UpdateFuncionario = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req;
        const { usuario, telemovel, endereco, email } = req.body;
        if (!usuario && !telemovel && !endereco && !email) {
            return res.status(400).send({
                message: "Por favor selecione ao menos um campo para ser alterado",
            });
        }
        yield (0, funcionariosService_1.updateFuncionario)(id, usuario, telemovel, endereco, email);
        res.status(200).send({ message: "Dados alterado com sucesso" });
    }
    catch (error) {
        if (error instanceof Error) {
            console.log({ message: error.message });
            return res.status(500).send({ message: error.message });
        }
    }
});
exports.UpdateFuncionario = UpdateFuncionario;
const DeleteFuncionario = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req;
        const funcionario = yield (0, funcionariosService_1.deleteFuncionario)(id);
        if (!funcionario) {
            return res.status(400).send({ message: "Erro ao deletar funcionario" });
        }
        res.status(200).send({ message: "Funcionario deletado com sucesso" });
    }
    catch (error) {
        if (error instanceof Error) {
            console.log({ message: error.message });
            return res.status(500).send({ message: error.message });
        }
    }
});
exports.DeleteFuncionario = DeleteFuncionario;
const SolicitarRedefinicaoSenhaFunc = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email } = req.body;
        if (!email) {
            return res
                .status(400)
                .send({ message: "Email de funcionário necessário" });
        }
        const funcionarios = yield (0, funcionariosService_1.findOneFuncionario)(email);
        if (!funcionarios) {
            return res.status(400).send({ message: "Funcionário não encontrado" });
        }
        const codigo = Math.floor(100000 + Math.random() * 900000).toString();
        funcionarios.codeVerify = codigo;
        yield funcionarios.save();
        (0, ResetPasswordEmail_1.sentEmailVerification)(String(funcionarios.email), codigo);
        res.status(200).send({ message: "Verifique o seu email por favor" });
    }
    catch (error) {
        if (error instanceof Error) {
            console.log({ message: error });
            return res.status(500).send({ message: error.message });
        }
    }
});
exports.SolicitarRedefinicaoSenhaFunc = SolicitarRedefinicaoSenhaFunc;
const RedefinirSenhaFunc = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email, codigo, senha } = req.body;
        if (!email || !codigo || !senha) {
            return res
                .status(400)
                .send({ message: "Email, codigo e nova senha obrigatório" });
        }
        const funcionario = yield (0, funcionariosService_1.findOneFuncionario)(email);
        if (!funcionario || funcionario.codeVerify !== codigo) {
            return res.status(400).send({ message: "Email ou código inválido" });
        }
        const hash = bcrypt_1.default.hashSync(senha, 10);
        funcionario.senha = hash;
        funcionario.codeVerify = undefined;
        yield funcionario.save();
        res.status(200).send({ message: "Senha de funcionário actualizado" });
    }
    catch (error) {
        if (error instanceof Error) {
            console.log({ message: error.message });
            return res.status(500).send({ message: error.message });
        }
    }
});
exports.RedefinirSenhaFunc = RedefinirSenhaFunc;
