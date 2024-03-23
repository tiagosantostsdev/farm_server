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
exports.RedefinirSenha = exports.SolicitarRedefinicaoSenha = exports.UpdateAdmin = exports.FindAdminById = exports.FindAdmin = exports.CreateAdmin = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const adminService_1 = require("../services/adminService");
const configController_1 = require("./configController");
const CreateAdmin = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { admin, email, password, avatar } = req.body;
        if (!admin || !email || !password) {
            return res.status(400).send({ message: "Please submit all field" });
        }
        const hash = bcrypt_1.default.hashSync(password, 10);
        const adm = yield (0, adminService_1.createAdmin)({
            admin: admin,
            email: email,
            password: hash,
            avatar: avatar,
        });
        if (!adm) {
            return res
                .status(400)
                .send({ message: "Error creating new administrator" });
        }
        res
            .status(201)
            .send({ message: "New administrator has been created successful" });
    }
    catch (error) {
        if (error instanceof Error) {
            console.log({ message: error.message });
            return res.status(500).send({ message: error.message });
        }
    }
});
exports.CreateAdmin = CreateAdmin;
const FindAdmin = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const adm = yield (0, adminService_1.findAdmin)();
        if (!adm) {
            return res.status(404).send({ message: "No Administrator found" });
        }
        res.status(200).send(adm);
    }
    catch (error) {
        if (error instanceof Error) {
            console.log({ message: error.message });
            return res.status(500).send({ message: error.message });
        }
    }
});
exports.FindAdmin = FindAdmin;
const FindAdminById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { adminId } = req;
        const admin = yield (0, adminService_1.findAdminById)(adminId);
        if (!admin) {
            return res.status(400).send({ message: "Administrador não encoontrado" });
        }
        res.status(200).send(admin);
    }
    catch (error) {
        if (error instanceof Error) {
            console.log({ message: error.message });
            return res.status(500).send({ message: error.message });
        }
    }
});
exports.FindAdminById = FindAdminById;
const UpdateAdmin = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const { admin, avatar } = req.body;
        if (!admin && !avatar) {
            return res
                .status(400)
                .send({ message: "Please submit at least one field" });
        }
        yield (0, adminService_1.updateAdmin)(id, admin, avatar);
        res.status(200).send({ message: "Admin has been updated successful" });
    }
    catch (error) {
        if (error instanceof Error) {
            console.log({ message: error.message });
            return res.status(500).send({ message: error.message });
        }
    }
});
exports.UpdateAdmin = UpdateAdmin;
const SolicitarRedefinicaoSenha = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email } = req.body;
        if (!email) {
            return res
                .status(400)
                .send({ message: "Email de administrador necessário" });
        }
        const admin = yield (0, adminService_1.findOneAdmin)(email);
        if (!admin) {
            return res.status(400).send({ message: "Administrador não encontrado" });
        }
        const codigo = Math.floor(100000 + Math.random() * 900000).toString();
        admin.codeVerify = codigo;
        yield admin.save();
        (0, configController_1.sentEmailVerification)(admin.email, codigo);
        res.status(200).send({ message: "Verifique o seu email por favor" });
    }
    catch (error) {
        if (error instanceof Error) {
            console.log({ message: error });
            return res.status(500).send({ message: error.message });
        }
    }
});
exports.SolicitarRedefinicaoSenha = SolicitarRedefinicaoSenha;
const RedefinirSenha = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email, codigo, password } = req.body;
        const admin = yield (0, adminService_1.findOneAdmin)(email);
        if (!admin || admin.codeVerify !== codigo) {
            return res.status(400).send({ message: "Código inválido" });
        }
        const hash = bcrypt_1.default.hashSync(password, 10);
        admin.password = hash;
        admin.codeVerify = undefined;
        yield admin.save();
        res.status(200).send({ message: "Senha de administarador alterado" });
    }
    catch (error) {
        if (error instanceof Error) {
            console.log({ message: error.message });
            return res.status(500).send({ message: error.message });
        }
    }
});
exports.RedefinirSenha = RedefinirSenha;
