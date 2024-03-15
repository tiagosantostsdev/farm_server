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
exports.UpdateCarrinho = exports.DeleteCarrinho = exports.FindCarrinho = exports.CreateCarrinho = void 0;
const produtosService_1 = require("../services/produtosService");
const carrinhoService_1 = require("../services/carrinhoService");
const CreateCarrinho = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { nome } = req.body;
        if (!nome) {
            return res
                .status(400)
                .send({ message: "Adicione o nome do produtos por favor" });
        }
        const produtos = yield (0, produtosService_1.searchProdutos)(nome);
        if (!produtos) {
            return res.status(404).send({ message: "Produto não encontrado" });
        }
        produtos.map((item) => Carrinho({
            nome: item.nome,
            id: item.id,
            descricao: item.descricao,
            dosagem: item.dosagem,
            quantidade: item.quantidade,
            preco: item.preco,
        }));
        function Carrinho(params) {
            return __awaiter(this, void 0, void 0, function* () {
                const { quantidade } = req.body;
                if (!quantidade) {
                    return res
                        .status(400)
                        .send({ message: "Por favor adicione a quantidade" });
                }
                if (quantidade > params.quantidade ||
                    params.quantidade - quantidade < 0) {
                    return res.status(400).send({
                        message: "Quantidade no estoque inferior a quantidade pretendida",
                    });
                }
                let total = 0;
                total += quantidade * params.preco;
                const venda = yield (0, carrinhoService_1.createCarrinho)({
                    nome: params.nome,
                    Produto: params.id,
                    quantidade: quantidade,
                    descricao: params.descricao,
                    dosagem: params.dosagem,
                    total: total,
                });
                yield (0, produtosService_1.updateProdutoCarrinho)(params.id, (params.quantidade -= quantidade));
                if (!venda) {
                    return res.status(400).send("Falha ao adicionar produto para venda");
                }
                res.status(200).send({ message: "Produto adicionado" });
            });
        }
    }
    catch (error) {
        if (error instanceof Error) {
            console.log({ message: error.message });
            return res.status(500).send({ message: error.message });
        }
    }
});
exports.CreateCarrinho = CreateCarrinho;
const FindCarrinho = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const venda = yield (0, carrinhoService_1.findCarrinho)();
        if (venda.length === 0) {
            return res.status(400).send({ message: "Nenhum produto encontrado" });
        }
        res.status(200).send(venda);
    }
    catch (error) {
        if (error instanceof Error) {
            console.log({ message: error.message });
            return res.status(400).send({ message: error.message });
        }
    }
});
exports.FindCarrinho = FindCarrinho;
const DeleteCarrinho = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        if (!id) {
            return res
                .status(400)
                .send({ message: "Insira o id do produto por favor" });
        }
        const item = yield (0, carrinhoService_1.findCarrinhoById)(id);
        if (!item) {
            return res.status(400).send({ message: "Produto não encontrado" });
        }
        const produto = yield (0, produtosService_1.searchProdutos)(item.nome);
        produto.map((item) => deletarActualizar({
            id: item.id,
            quantidade: item.quantidade,
        }));
        function deletarActualizar(params) {
            return __awaiter(this, void 0, void 0, function* () {
                yield (0, produtosService_1.updateProdutoCarrinho)(params.id, (params.quantidade += item.quantidade));
                yield (0, carrinhoService_1.deleteCarrinho)(id);
            });
        }
        res.status(200).send({ message: "Produto deletado dos registros" });
    }
    catch (error) {
        if (error instanceof Error) {
            console.log({ message: error.message });
            return res.status(400).send({ message: error.message });
        }
    }
});
exports.DeleteCarrinho = DeleteCarrinho;
const UpdateCarrinho = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        if (!id) {
            return res
                .status(400)
                .send({ message: "Insira o id do produto por favor" });
        }
        const item = yield (0, carrinhoService_1.findCarrinhoById)(id);
        if (!item) {
            return res.status(400).send({ message: "Produto não encontrado" });
        }
        const produto = yield (0, produtosService_1.searchProdutos)(item.nome);
        if (!produto) {
            return res.status(400).send({ message: "Produto não encontrado" });
        }
        produto.map((item) => buscarActualizar({
            id: item.id,
            quantidade: item.quantidade,
        }));
        function buscarActualizar(params) {
            return __awaiter(this, void 0, void 0, function* () {
                const { quantidade } = req.body;
                if (quantidade > params.quantidade ||
                    params.quantidade - quantidade < 0) {
                    return res.status(400).send({
                        message: "Quantidade no estoque inferior a quantidade pretendida",
                    });
                }
                if (quantidade < item.quantidade) {
                    yield (0, carrinhoService_1.updateCarrinho)(id, item.quantidade - quantidade);
                    yield (0, produtosService_1.updateProdutoCarrinho)(params.id, params.quantidade + quantidade);
                }
                else {
                    yield (0, carrinhoService_1.updateCarrinho)(id, item.quantidade + quantidade);
                    yield (0, produtosService_1.updateProdutoCarrinho)(params.id, params.quantidade - quantidade);
                }
                res.status(200).send({ message: "Produto actualizado com sucesso" });
            });
        }
    }
    catch (error) {
        if (error instanceof Error) {
            console.log({ message: error.message });
            return res.status(500).send({ message: error.message });
        }
    }
});
exports.UpdateCarrinho = UpdateCarrinho;
