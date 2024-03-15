"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateProdutoCarrinho = exports.updateProdutoAdmin = exports.deleteProduto = exports.searchProdutos = exports.findProdutos = exports.createProduto = void 0;
const produtoModel_1 = require("../models/produtoModel");
const createProduto = (values) => produtoModel_1.Produto.create(values);
exports.createProduto = createProduto;
const findProdutos = () => produtoModel_1.Produto.find();
exports.findProdutos = findProdutos;
const searchProdutos = (nome) => produtoModel_1.Produto.find({ nome: { $regex: `${nome || ""}`, $options: "i" } });
exports.searchProdutos = searchProdutos;
const deleteProduto = (id) => produtoModel_1.Produto.findOneAndDelete({ _id: id });
exports.deleteProduto = deleteProduto;
const updateProdutoAdmin = (id, nome, quantidade, dosagem, descricao, preco) => produtoModel_1.Produto.findOneAndUpdate({ _id: id }, {
    nome: nome,
    quantidade: quantidade,
    dosagem: dosagem,
    descricao: descricao,
    preco: preco,
});
exports.updateProdutoAdmin = updateProdutoAdmin;
const updateProdutoCarrinho = (id, quantidade) => produtoModel_1.Produto.findOneAndUpdate({ _id: id }, { quantidade: quantidade });
exports.updateProdutoCarrinho = updateProdutoCarrinho;
