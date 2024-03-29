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
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteFuncionario = exports.UpdateFuncionario = exports.FindFuncionario = exports.CreateFuncionario = void 0;
const funcionariosService_1 = require("../services/funcionariosService");
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
            return res.status(400).send({ message: "Por favor preencha todos os campos" });
        }
        const funcionario = yield (0, funcionariosService_1.createFuncionario)({
            usuario,
            senha,
            nif,
            endereco,
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
        if (!funcionario) {
            return res.status(404).send({ message: "Nenhuma funcionário foi encontrado" });
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
const UpdateFuncionario = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req;
        const { telemovel, endereco } = req.body;
        if (!telemovel && !endereco) {
            return res
                .status(400)
                .send({ message: "Por favor selecione ao menos um campo para ser alterado" });
        }
        yield (0, funcionariosService_1.updateFuncionario)(id, telemovel, endereco);
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
