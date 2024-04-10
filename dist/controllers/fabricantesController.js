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
exports.DeleteFabricante = exports.UpdateFabricante = exports.FindFabricante = exports.CreateFabricante = void 0;
const fabricantesService_1 = require("../services/fabricantesService");
const CreateFabricante = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { nome, nif, pais, endereco, telefone, email } = req.body;
        if (!nome || !nif || !pais || !endereco || !email || !telefone) {
            return res
                .status(400)
                .send({ message: "Por favor preencha todos os campos" });
        }
        const date = new Date();
        const fabricante = yield (0, fabricantesService_1.createFabricantes)({
            nome,
            nif,
            pais,
            endereco,
            telefone,
            email,
            dataRegistro: date.toLocaleString("pt-AO", {
                year: "numeric",
                month: "long",
                day: "numeric",
                hour: "numeric",
                minute: "numeric",
                second: "numeric",
            }),
        });
        if (!fabricante) {
            return res.status(400).send({ message: "Erro ao criar novo fabricante" });
        }
        res.status(201).send({ message: "Novo fabricante adicionado com sucesso" });
    }
    catch (error) {
        if (error instanceof Error) {
            console.log({ message: error.message });
            return res.status(500).send({ message: error.message });
        }
    }
});
exports.CreateFabricante = CreateFabricante;
const FindFabricante = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const fabricante = yield (0, fabricantesService_1.findFabricantes)();
        if (!fabricante) {
            return res
                .status(404)
                .send({ message: "Nenhum fabricante foi encontrado" });
        }
        res.status(200).send(fabricante);
    }
    catch (error) {
        if (error instanceof Error) {
            console.log({ message: error.message });
            return res.status(500).send({ message: error.message });
        }
    }
});
exports.FindFabricante = FindFabricante;
const UpdateFabricante = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req;
        const { nome, telefone, endereco } = req.body;
        if (!nome && !endereco && !telefone) {
            return res.status(400).send({
                message: "Por favor selecione ao menos um campo para ser alterado",
            });
        }
        yield (0, fabricantesService_1.updateFabricantes)(id, nome, telefone, endereco);
        res.status(200).send({ message: "Dados alterado com sucesso" });
    }
    catch (error) {
        if (error instanceof Error) {
            console.log({ message: error.message });
            return res.status(500).send({ message: error.message });
        }
    }
});
exports.UpdateFabricante = UpdateFabricante;
const DeleteFabricante = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req;
        const fabricante = yield (0, fabricantesService_1.deleteFabricantes)(id);
        if (!fabricante) {
            return res.status(400).send({ message: "Erro ao deletar fabricante" });
        }
        res.status(200).send({ message: "Fabricante deletado com sucesso" });
    }
    catch (error) {
        if (error instanceof Error) {
            console.log({ message: error.message });
            return res.status(500).send({ message: error.message });
        }
    }
});
exports.DeleteFabricante = DeleteFabricante;
