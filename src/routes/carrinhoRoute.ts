import { Router } from "express";

import { CreateCarrinho, DeleteCarrinho, FindCarrinho, UpdateCarrinho } from "./../controllers/carrinhoController";
import { authFuncionario } from "../middlewares/authMiddleware";

export const carrinhoRoute = Router()

carrinhoRoute.post("/create", authFuncionario, CreateCarrinho)

carrinhoRoute.get("/", FindCarrinho)

carrinhoRoute.delete("/delete/:id",authFuncionario, DeleteCarrinho)

carrinhoRoute.patch("/update/:id",authFuncionario, UpdateCarrinho)