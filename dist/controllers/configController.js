"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sentEmailVerification = void 0;
const nodemailer_1 = __importDefault(require("nodemailer"));
const sentEmailVerification = (email, codigo) => {
    const transporter = nodemailer_1.default.createTransport({
        host: "smtp.gmail.com",
        service: "gmail",
        port: 587,
        auth: {
            user: "devsangola5@gmail.com",
            pass: "hryy upwd vpew ixcw",
        },
    });
    transporter.sendMail({
        from: "devsangola5@gmail.com",
        to: email,
        subject: "Redefinição de palavra passe",
        text: `Este é o código de redefinição da palavra passe: ${codigo}`,
    }, (error, info) => {
        if (error) {
            return console.log({ message: error === null || error === void 0 ? void 0 : error.message });
        }
        console.log({ message: "Email enviado", info });
    });
};
exports.sentEmailVerification = sentEmailVerification;
