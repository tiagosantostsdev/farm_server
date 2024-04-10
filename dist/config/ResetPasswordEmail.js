"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sentEmailVerification = void 0;
const nodemailer_1 = __importDefault(require("nodemailer"));
const sentEmailVerification = (email, codigo) => {
    const contentHtml = `
  <html>
  <body style="width:100%;">
      <h2>Digite o código de verificação para redefinir a senha de usuário.</h2>
      <p style="font-size: 1.5rem; text-align: center; border-radius: .5rem; letter-spacing: .6rem; font-weight: bold; padding: .2rem; background-color: rgb(128, 141, 126); width:50%">${codigo}</p>
  </body>
  </html>`;
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
        html: contentHtml,
    }, (error, info) => {
        if (error) {
            return console.log({ message: error === null || error === void 0 ? void 0 : error.message });
        }
        console.log({ message: "Email enviado", info });
    });
};
exports.sentEmailVerification = sentEmailVerification;
