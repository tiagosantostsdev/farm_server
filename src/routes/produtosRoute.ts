import { Router } from "express";
import { authAdmin } from "../middlewares/authMiddleware";
import {
  CreateProdutos,
  DeleteProdutos,
  FindProdutos,
  SearchProdutos,
  UpdateProdutos,
} from "../controllers/produtosController";
import { validId } from "../middlewares/globalMiddleware";

export const produtosRoute = Router();

produtosRoute.post("/novo", authAdmin, CreateProdutos);

produtosRoute.get("/", FindProdutos);

produtosRoute.get("/search", SearchProdutos);

produtosRoute.patch("/update/:id", authAdmin, validId, UpdateProdutos);

produtosRoute.delete("/delete/:id", authAdmin, validId, DeleteProdutos);
