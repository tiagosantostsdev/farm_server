import {Router} from "express";
import { authFuncionario } from "../middlewares/authMiddleware";
import { CreateVendas, FindVendas, UpdateVendasById } from "../controllers/vendasController";

export const vendasRoute = Router()

vendasRoute.post("/create", authFuncionario, CreateVendas)

vendasRoute.patch("/update/:id", authFuncionario, UpdateVendasById)

vendasRoute.get("/", FindVendas)