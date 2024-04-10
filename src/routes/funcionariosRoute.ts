import { Router } from "express";
import { authAdmin, authFuncionario } from "../middlewares/authMiddleware";
import {
  CreateFuncionario,
  DeleteFuncionario,
  FindFuncionario,
  FindFuncionarioById,
  RedefinirSenhaFunc,
  SolicitarRedefinicaoSenhaFunc,
  UpdateFuncionario,
} from "../controllers/funcionariosController";
import { validId } from "../middlewares/globalMiddleware";

export const funcionarioRoute = Router();

funcionarioRoute.post("/novo", authAdmin, CreateFuncionario);

funcionarioRoute.post("/esqueci-a-senha", SolicitarRedefinicaoSenhaFunc);

funcionarioRoute.post("/redefinir-senha", RedefinirSenhaFunc);

funcionarioRoute.get("/", authAdmin, FindFuncionario);

funcionarioRoute.get("/findbyid", authFuncionario, FindFuncionarioById);

funcionarioRoute.patch("/update/:id", authAdmin, validId, UpdateFuncionario);

funcionarioRoute.delete("/delete/:id", authAdmin, validId, DeleteFuncionario);
