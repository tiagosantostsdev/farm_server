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
exports.DeleteProdutos = exports.UpdateProdutos = exports.SearchProdutos = exports.FindProdutos = exports.CreateProdutos = void 0;
const produtosService_1 = require("../services/produtosService");
const CreateProdutos = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { nome, quantidade, dosagem, descricao, preco, fornecedor, fabricante, } = req.body;
        if (!nome ||
            !quantidade ||
            !dosagem ||
            !preco ||
            !descricao ||
            !fornecedor ||
            !fabricante) {
            return res.status(400).send({ message: "Please submit all field" });
        }
        const date = new Date();
        const produtos = yield (0, produtosService_1.createProduto)({
            nome,
            quantidade,
            dosagem,
            descricao,
            preco,
            fornecedor,
            fabricante,
            dataRegistro: date.toLocaleString("pt-AO", { timeZone: "Africa/Luanda",
                year: "numeric",
                month: "long",
                day: "numeric",
                hour: "numeric",
                minute: "numeric",
                second: "numeric",
            }),
        });
        if (!produtos) {
            return res.status(400).send({ message: "Erro ao criar novos produtos" });
        }
        res.status(201).send({ message: "Novos produtos adicionado com sucesso" });
    }
    catch (error) {
        if (error instanceof Error) {
            console.log({ message: error.message });
            return res.status(500).send({ message: error.message });
        }
    }
});
exports.CreateProdutos = CreateProdutos;
const FindProdutos = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const produtos = yield (0, produtosService_1.findProdutos)();
        if (produtos.length === 0) {
            return res.status(404).send({ message: "Nenhum produto foi encontrado" });
        }
        res.status(200).send(produtos);
    }
    catch (error) {
        if (error instanceof Error) {
            console.log({ message: error.message });
            return res.status(500).send({ message: error.message });
        }
    }
});
exports.FindProdutos = FindProdutos;
const SearchProdutos = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { nome } = req.query;
        if (!nome) {
            return res
                .status(400)
                .send({ message: "Por favor adicione o nome do produto" });
        }
        const produtos = yield (0, produtosService_1.searchProdutos)(nome);
        if (!produtos) {
            return res.status(404).send({ message: "Nenhum produto foi encontrado" });
        }
        res.status(200).send(produtos);
    }
    catch (error) {
        if (error instanceof Error) {
            console.log({ message: error.message });
            return res.status(500).send({ message: error.message });
        }
    }
});
exports.SearchProdutos = SearchProdutos;
const UpdateProdutos = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req;
        const { nome, quantidade, dosagem, descricao, preco } = req.body;
        if (!nome && !quantidade && !dosagem && !descricao && !preco) {
            return res.status(400).send({
                message: "Por favor selecione ao menos um campo para ser alterado",
            });
        }
        yield (0, produtosService_1.updateProdutoAdmin)(id, nome, quantidade, dosagem, descricao, preco);
        res.status(200).send({ message: "Dados alterado com sucesso" });
    }
    catch (error) {
        if (error instanceof Error) {
            console.log({ message: error.message });
            return res.status(500).send({ message: error.message });
        }
    }
});
exports.UpdateProdutos = UpdateProdutos;
const DeleteProdutos = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req;
        const produtos = yield (0, produtosService_1.deleteProduto)(id);
        if (!produtos) {
            return res.status(400).send({ message: "Erro ao deletar produtos" });
        }
        res.status(200).send({ message: "Produtos deletado com sucesso" });
    }
    catch (error) {
        if (error instanceof Error) {
            console.log({ message: error.message });
            return res.status(500).send({ message: error.message });
        }
    }
});
exports.DeleteProdutos = DeleteProdutos;
