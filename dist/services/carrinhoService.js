"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findCarrinhoById = exports.deleteCarrinho = exports.findCarrinho = exports.createCarrinho = void 0;
const carrinhoModel_1 = require("../models/carrinhoModel");
const createCarrinho = (values) => carrinhoModel_1.Carrinho.create(values);
exports.createCarrinho = createCarrinho;
const findCarrinho = () => carrinhoModel_1.Carrinho.find().populate("Produto");
exports.findCarrinho = findCarrinho;
const deleteCarrinho = (id) => carrinhoModel_1.Carrinho.findByIdAndDelete(id);
exports.deleteCarrinho = deleteCarrinho;
const findCarrinhoById = (id) => carrinhoModel_1.Carrinho.findById(id);
exports.findCarrinhoById = findCarrinhoById;
// export const updateCarrinho = (id: string, quantidade: number) =>
//   Carrinho.findOneAndUpdate({ _id: id }, { quantidade: quantidade });
