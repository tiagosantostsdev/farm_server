"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Admin = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const adminSchema = new mongoose_1.default.Schema({
    admin: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    telemovel: { type: String, required: true, unique: true },
    password: { type: String, required: true, select: false },
    avatar: { type: String },
    codeVerify: { type: String, default: undefined }
});
exports.Admin = mongoose_1.default.model("admin", adminSchema);
