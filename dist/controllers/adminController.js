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
exports.DeleteAdmin = exports.RedefinirSenha = exports.SolicitarRedefinicaoSenha = exports.UpdateAdmin = exports.FindAdminById = exports.FindAdmin = exports.CreateAdmin = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const adminService_1 = require("../services/adminService");
const ResetPasswordEmail_1 = require("../config/ResetPasswordEmail");
const CreateAdmin = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { admin, email, telemovel, password, avatar } = req.body;
        if (!admin || !email || !telemovel || !password) {
            return res.status(400).send({ message: "Please submit all field" });
        }
        const hash = bcrypt_1.default.hashSync(password, 10);
        const adm = yield (0, adminService_1.createAdmin)({
            admin: admin,
            email: email,
            telemovel: telemovel,
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
        const { admin, avatar, telemovel, email } = req.body;
        if (!admin && !avatar && !telemovel && !email) {
            return res
                .status(400)
                .send({ message: "Please submit at least one field" });
        }
        yield (0, adminService_1.updateAdmin)(id, admin, avatar, telemovel, email);
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
        (0, ResetPasswordEmail_1.sentEmailVerification)(admin.email, codigo);
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
        if (!email || !codigo || !password) {
            return res.status(400).send({ message: "Codigo, email, e nova senha obrigatório" });
        }
        const admin = yield (0, adminService_1.findOneAdmin)(email);
        if (!admin || admin.codeVerify !== codigo) {
            return res.status(400).send({ message: "código inválido" });
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
const DeleteAdmin = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        if (!id) {
            return res.status(400).send({ message: "Id necessário" });
        }
        const admin = yield (0, adminService_1.deleteAdmin)(id);
        if (!admin) {
            return res
                .status(400)
                .send({ message: "Erro ao eliminar administrador" });
        }
        res.status(200).send({ message: "Administardor eliminado" });
    }
    catch (error) {
        if (error instanceof Error) {
            console.log({ message: error.message });
            return res.status(500).send({ message: error.message });
        }
    }
});
exports.DeleteAdmin = DeleteAdmin;
