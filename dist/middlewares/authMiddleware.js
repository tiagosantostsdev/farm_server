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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authFuncionario = exports.authAdmin = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const adminService_1 = require("../services/adminService");
const funcionariosService_1 = require("../services/funcionariosService");
const authAdmin = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { authorization } = req.headers;
        if (!authorization) {
            return res.sendStatus(401);
        }
        const parts = authorization.split(" ");
        if (parts.length !== 2) {
            return res.sendStatus(401);
        }
        const [schema, token] = parts;
        if (schema !== "Bearer") {
            return res.sendStatus(401);
        }
        const secretJWT = String(process.env.SECRET_JWT);
        jsonwebtoken_1.default.verify(token, secretJWT, (error, decoded) => __awaiter(void 0, void 0, void 0, function* () {
            if (error instanceof Error) {
                console.log({ message: error.message });
                return res.status(401).send({ message: error.message });
            }
            const admin = yield (0, adminService_1.findAdminById)(decoded.id);
            if (!admin || !admin.id) {
                console.log({ message: "Token inválido" });
                return res.status(400).send({ message: "Token inválido" });
            }
            req.adminId = admin.id;
            next();
        }));
    }
    catch (error) {
        if (error instanceof Error) {
            console.log({ message: error.message });
            return res.status(500).send({ message: error.message });
        }
    }
});
exports.authAdmin = authAdmin;
const authFuncionario = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { authorization } = req.headers;
        if (!authorization) {
            return res.sendStatus(401);
        }
        const parts = authorization.split(" ");
        if (parts.length !== 2) {
            return res.sendStatus(401);
        }
        const [schema, token] = parts;
        if (schema !== "Bearer") {
            return res.sendStatus(401);
        }
        const secretJWT = String(process.env.SECRET_JWT);
        jsonwebtoken_1.default.verify(token, secretJWT, (error, decoded) => __awaiter(void 0, void 0, void 0, function* () {
            if (error instanceof Error) {
                console.log({ message: error.message });
                return res.status(400).send({ message: error.message });
            }
            const funcionario = yield (0, funcionariosService_1.findFuncionarioById)(decoded.id);
            if (!funcionario || !funcionario.id) {
                console.log({ message: "Token inválido" });
                return res.status(404).send({ message: "Token inválido" });
            }
            req.funcionarioId = funcionario.id;
            next();
        }));
    }
    catch (error) {
        if (error instanceof Error) {
            console.log({ message: error.message });
            return res.status(500).send({ message: error.message });
        }
    }
});
exports.authFuncionario = authFuncionario;
