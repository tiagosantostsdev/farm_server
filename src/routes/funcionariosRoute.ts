import { Router } from "express";
import { authAdmin, authFuncionario } from "../middlewares/authMiddleware";
import {
  CreateFuncionario,
  DeleteFuncionario,
  FindFuncionario,
  FindFuncionarioById,
  UpdateFuncionario,
} from "../controllers/funcionariosController";
import { validId } from "../middlewares/globalMiddleware";

export const funcionarioRoute = Router();

funcionarioRoute.post("/novo", authAdmin, CreateFuncionario);

funcionarioRoute.get("/", authAdmin, FindFuncionario);

funcionarioRoute.get("/findbyid", authFuncionario, FindFuncionarioById);

funcionarioRoute.patch("/update/:id", authAdmin, validId, UpdateFuncionario);

funcionarioRoute.delete("/delete/:id", authAdmin, validId, DeleteFuncionario);
