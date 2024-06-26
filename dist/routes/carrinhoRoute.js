"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.carrinhoRoute = void 0;
const express_1 = require("express");
const carrinhoController_1 = require("./../controllers/carrinhoController");
const authMiddleware_1 = require("../middlewares/authMiddleware");
exports.carrinhoRoute = (0, express_1.Router)();
exports.carrinhoRoute.post("/create", authMiddleware_1.authFuncionario, carrinhoController_1.CreateCarrinho);
exports.carrinhoRoute.get("/", authMiddleware_1.authFuncionario, carrinhoController_1.FindCarrinho);
exports.carrinhoRoute.delete("/delete/:id", authMiddleware_1.authFuncionario, carrinhoController_1.DeleteCarrinho);
exports.carrinhoRoute.patch("/update/:id", authMiddleware_1.authFuncionario, carrinhoController_1.UpdateCarrinho);
