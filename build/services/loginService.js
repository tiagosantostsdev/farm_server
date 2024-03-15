"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateToken = exports.findFuncionarioLogin = exports.findAdminLogin = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const adminModel_1 = require("../models/adminModel");
const funcionarioModel_1 = require("./../models/funcionarioModel");
const findAdminLogin = (admin) => adminModel_1.Admin.findOne({ admin: admin }).select("+password");
exports.findAdminLogin = findAdminLogin;
const findFuncionarioLogin = (usuario) => funcionarioModel_1.Funcionario.findOne({ usuario: usuario }).select("+senha");
exports.findFuncionarioLogin = findFuncionarioLogin;
const generateToken = (id) => {
    const secretJWT = String(process.env.SECRET_JWT);
    return jsonwebtoken_1.default.sign({ id }, secretJWT, { expiresIn: "1d" });
};
exports.generateToken = generateToken;
