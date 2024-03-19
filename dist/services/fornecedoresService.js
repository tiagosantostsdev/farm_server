"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateFornecedores = exports.deleteFornecedores = exports.findFornecedores = exports.createFornecedores = void 0;
const fornecedorModel_1 = require("../models/fornecedorModel");
const createFornecedores = (values) => fornecedorModel_1.Fornecedores.create(values);
exports.createFornecedores = createFornecedores;
const findFornecedores = () => fornecedorModel_1.Fornecedores.find();
exports.findFornecedores = findFornecedores;
const deleteFornecedores = (id) => fornecedorModel_1.Fornecedores.findOneAndDelete({ _id: id });
exports.deleteFornecedores = deleteFornecedores;
const updateFornecedores = (id, nome, telefone, endereco) => fornecedorModel_1.Fornecedores.findOneAndUpdate({ _id: id }, { nome: nome, telefone: telefone, endereco: endereco });
exports.updateFornecedores = updateFornecedores;