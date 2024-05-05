import { Router } from "express";
import { authAdmin, authFuncionario } from "../middlewares/authMiddleware";
import {
  CreateVendas,
  DeleteVendas,
  FindVendas,
  UpdateVendasById,
} from "../controllers/vendasController";
import { validId } from "../middlewares/globalMiddleware";

export const vendasRoute = Router();

vendasRoute.post("/create", authFuncionario, CreateVendas);

vendasRoute.patch("/update/:id", authFuncionario, UpdateVendasById);

vendasRoute.get("/", FindVendas);

vendasRoute.delete("/delete/:id",authAdmin, validId, DeleteVendas);