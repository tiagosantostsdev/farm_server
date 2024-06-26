"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateFuncionario = exports.deleteFuncionario = exports.findOneFuncionario = exports.findFuncionarioById = exports.findFuncionarios = exports.createFuncionario = void 0;
const funcionarioModel_1 = require("../models/funcionarioModel");
const createFuncionario = (values) => funcionarioModel_1.Funcionario.create(values);
exports.createFuncionario = createFuncionario;
const findFuncionarios = () => funcionarioModel_1.Funcionario.find();
exports.findFuncionarios = findFuncionarios;
const findFuncionarioById = (id) => funcionarioModel_1.Funcionario.findById(id);
exports.findFuncionarioById = findFuncionarioById;
const findOneFuncionario = (email) => funcionarioModel_1.Funcionario.findOne({ email: email });
exports.findOneFuncionario = findOneFuncionario;
const deleteFuncionario = (id) => funcionarioModel_1.Funcionario.findOneAndDelete({ _id: id });
exports.deleteFuncionario = deleteFuncionario;
const updateFuncionario = (id, usuario, telemovel, endereco, email) => funcionarioModel_1.Funcionario.findOneAndUpdate({ _id: id }, {
    usuario: usuario,
    telemovel: telemovel,
    endereco: endereco,
    email: email,
});
exports.updateFuncionario = updateFuncionario;
