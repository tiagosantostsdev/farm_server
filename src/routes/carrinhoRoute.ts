import { Router } from "express";

import { CreateCarrinho, DeleteCarrinho, FindCarrinho, UpdateCarrinho } from "../controllers/CarrinhoController";

export const carrinhoRoute = Router()

carrinhoRoute.post("/create", CreateCarrinho)

carrinhoRoute.get("/", FindCarrinho)

carrinhoRoute.delete("/delete/:id", DeleteCarrinho)

carrinhoRoute.patch("/update/:id", UpdateCarrinho)