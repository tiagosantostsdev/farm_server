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
exports.DeleteFornecedor = exports.UpdateFornecedor = exports.FindFornecedor = exports.CreateFornecedor = void 0;
const fornecedoresService_1 = require("../services/fornecedoresService");
const CreateFornecedor = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { nome, nif, endereco, telefone, email, site } = req.body;
        if (!nome || !nif || !endereco || !telefone || !email) {
            return res
                .status(400)
                .send({ message: "Por favor preencha todos os campos" });
        }
        const fornecedor = yield (0, fornecedoresService_1.createFornecedores)({
            nome,
            nif,
            endereco,
            telefone,
            email,
            site,
        });
        if (!fornecedor) {
            return res.status(400).send({ message: "Erro ao criar novo fornecedor" });
        }
        res.status(201).send({ message: "Novo fornecedor adicionado com sucesso" });
    }
    catch (error) {
        if (error instanceof Error) {
            console.log({ message: error.message });
            return res.status(500).send({ message: error.message });
        }
    }
});
exports.CreateFornecedor = CreateFornecedor;
const FindFornecedor = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const fornecedor = yield (0, fornecedoresService_1.findFornecedores)();
        if (!fornecedor) {
            return res
                .status(404)
                .send({ message: "Nenhuma fornecedor foi encontrado" });
        }
        res.status(200).send(fornecedor);
    }
    catch (error) {
        if (error instanceof Error) {
            console.log({ message: error.message });
            return res.status(500).send({ message: error.message });
        }
    }
});
exports.FindFornecedor = FindFornecedor;
const UpdateFornecedor = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req;
        const { nome, telefone, endereco } = req.body;
        if (!nome && !telefone && !endereco) {
            return res
                .status(400)
                .send({
                message: "Por favor selecione ao menos um campo para ser alterado",
            });
        }
        yield (0, fornecedoresService_1.updateFornecedores)(id, nome, telefone, endereco);
        res.status(200).send({ message: "Dados alterado com sucesso" });
    }
    catch (error) {
        if (error instanceof Error) {
            console.log({ message: error.message });
            return res.status(500).send({ message: error.message });
        }
    }
});
exports.UpdateFornecedor = UpdateFornecedor;
const DeleteFornecedor = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req;
        const fornecedor = yield (0, fornecedoresService_1.deleteFornecedores)(id);
        if (!fornecedor) {
            return res.status(400).send({ message: "Erro ao deletar fornecedor" });
        }
        res.status(200).send({ message: "Fornecedor deletado com sucesso" });
    }
    catch (error) {
        if (error instanceof Error) {
            console.log({ message: error.message });
            return res.status(500).send({ message: error.message });
        }
    }
});
exports.DeleteFornecedor = DeleteFornecedor;
