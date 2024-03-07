import { Router } from "express";
import { authAdmin } from "../middlewares/authMiddleware";
import {
  CreateFornecedor,
  DeleteFornecedor,
  FindFornecedor,
  UpdateFornecedor,
} from "../controllers/fornecedoresController";

export const fornecedorRoute = Router();

fornecedorRoute.post("/novo", authAdmin, CreateFornecedor);

fornecedorRoute.get("/", FindFornecedor);

fornecedorRoute.patch("/update/:id", authAdmin, UpdateFornecedor);

fornecedorRoute.delete("/delete/:id", authAdmin, DeleteFornecedor);
