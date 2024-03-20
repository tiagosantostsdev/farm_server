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
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateAdmin = exports.FindAdmin = exports.CreateAdmin = void 0;
const adminService_1 = require("../services/adminService");
const CreateAdmin = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { admin, email, password, avatar } = req.body;
        if (!admin || !email || !password) {
            return res.status(400).send({ message: "Please submit all field" });
        }
        const adm = yield (0, adminService_1.createAdmin)({ admin, email, password, avatar });
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
