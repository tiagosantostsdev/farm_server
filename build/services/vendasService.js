"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findVendas = exports.findVendaById = exports.updateVendaCalc = exports.addProdutos = exports.createVendas = void 0;
const vendasModel_1 = require("../models/vendasModel");
const createVendas = (values) => vendasModel_1.Vendas.create(values);
exports.createVendas = createVendas;
const addProdutos = (id, nome, quantidade, descricao, dosagem, total) => vendasModel_1.Vendas.findOneAndUpdate({ _id: id }, { $push: { produtos: { nome, quantidade, descricao, dosagem, total } } });
exports.addProdutos = addProdutos;
const updateVendaCalc = (id, valor, total, troco) => vendasModel_1.Vendas.findOneAndUpdate({ _id: id }, { valor: valor, total: total, troco: troco });
exports.updateVendaCalc = updateVendaCalc;
const findVendaById = (id) => vendasModel_1.Vendas.findById(id);
exports.findVendaById = findVendaById;
const findVendas = () => vendasModel_1.Vendas.find();
exports.findVendas = findVendas;
