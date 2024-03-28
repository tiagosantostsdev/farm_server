import { Router } from "express";
import { authAdmin } from "../middlewares/authMiddleware";
import {
  CreateFornecedor,
  DeleteFornecedor,
  FindFornecedor,
  UpdateFornecedor,
} from "../controllers/fornecedoresController";
import { validId } from "../middlewares/globalMiddleware";

export const fornecedorRoute = Router();

fornecedorRoute.post("/novo", authAdmin, CreateFornecedor);

fornecedorRoute.get("/",authAdmin, FindFornecedor);

fornecedorRoute.patch("/update/:id", authAdmin,validId, UpdateFornecedor);

fornecedorRoute.delete("/delete/:id", authAdmin,validId, DeleteFornecedor);
