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
exports.DeleteVendas = exports.FindVendas = exports.UpdateVendasById = exports.CreateVendas = void 0;
const carrinhoService_1 = require("../services/carrinhoService");
const vendasService_1 = require("../services/vendasService");
const CreateVendas = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { funcionarioId } = req;
        const { nomeCliente } = req.body;
        if (!nomeCliente) {
            return res
                .status(400)
                .send({ message: "Campo nome de cliente obrigatório" });
        }
        const date = new Date();
        const Vendas = yield (0, vendasService_1.createVendas)({
            nomeCliente: nomeCliente,
            dataVenda: date.toLocaleString("pt-AO", {
                timeZone: "Africa/Luanda",
                year: "numeric",
                month: "long",
                day: "numeric",
                hour: "numeric",
                minute: "numeric",
                second: "numeric",
            }),
            Funcionario: funcionarioId,
        });
        if (!Vendas) {
            return res
                .status(400)
                .send({ message: "Não foi possivel efectuar Venda" });
        }
        res.status(200).send(Vendas.id);
    }
    catch (error) {
        if (error instanceof Error) {
            console.log({ message: error.message });
            return res.status(500).send({ message: error.message });
        }
    }
});
exports.CreateVendas = CreateVendas;
const UpdateVendasById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const { valor, total, troco } = req.body;
        if (!id || !valor || !total || !troco) {
            return res
                .status(400)
                .send({ message: "Id, Valor, total, troco obrigatório" });
        }
        const carrinho = yield (0, carrinhoService_1.findCarrinho)();
        carrinho.map((item) => getProdutos({
            id: item.id,
            nome: item.nome,
            quantidade: item.quantidade,
            descricao: item.descricao,
            dosagem: item.dosagem,
            total: item.total,
        }));
        function getProdutos(params) {
            return __awaiter(this, void 0, void 0, function* () {
                const produtos = yield (0, vendasService_1.addProdutos)(id, params.nome, params.quantidade, params.descricao, params.dosagem, params.total);
                yield (0, carrinhoService_1.deleteCarrinho)(params.id);
                if (!produtos) {
                    return res
                        .status(400)
                        .send({ message: "Falha ao adicionar produtos para venda" });
                }
            });
        }
        if (valor < total || valor - total < 0) {
            return res.status(400).send({ message: "Valor insuficiente" });
        }
        const update = yield (0, vendasService_1.updateVendaCalc)(id, valor, total, troco);
        if (!update) {
            return res
                .status(400)
                .send({ message: "Falha ao vender e actualizar produtos" });
        }
        res.status(200).send({ message: "Produtos actualizados e vendidos" });
    }
    catch (error) {
        if (error instanceof Error) {
            console.log({ message: error.message });
            return res.status(500).send({ message: error.message });
        }
    }
});
exports.UpdateVendasById = UpdateVendasById;
const FindVendas = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const vendas = yield (0, vendasService_1.findVendas)();
        if (!vendas) {
            return res.status(404).send({ message: "Nenhuma Venda registrada" });
        }
        res.status(200).send(vendas);
    }
    catch (error) {
        if (error instanceof Error) {
            console.log({ message: error.message });
            return res.status(400).send({ message: error.message });
        }
    }
});
exports.FindVendas = FindVendas;
const DeleteVendas = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const vendas = yield (0, vendasService_1.deleteVendas)(id);
        if (!(vendas === null || vendas === void 0 ? void 0 : vendas.id)) {
            res.status(400).send({ message: "Falha ao deletar vendas" });
        }
        res.status(200).send({ message: "Registro de venda deletada" });
    }
    catch (error) {
        if (error instanceof Error) {
            console.log({ message: error.message });
            return res.status(500).send({ message: error.message });
        }
    }
});
exports.DeleteVendas = DeleteVendas;
