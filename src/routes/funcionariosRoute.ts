import { Router } from "express";
import { authAdmin } from "../middlewares/authMiddleware";
import { CreateFuncionario, DeleteFuncionario, FindFuncionario, UpdateFuncionario } from "../controllers/funcionariosController";
import { validId } from "../middlewares/globalMiddleware";

export const funcionarioRoute = Router();

funcionarioRoute.post("/novo", authAdmin, CreateFuncionario);

funcionarioRoute.get("/", FindFuncionario);

funcionarioRoute.patch("/update/:id", authAdmin,validId, UpdateFuncionario);

funcionarioRoute.delete("/delete/:id", authAdmin,validId, DeleteFuncionario);
