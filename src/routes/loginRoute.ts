import { Router } from "express";
import { AdminLogin, FuncionarioLogin } from "../controllers/loginController";

export const loginRoute = Router();

loginRoute.post("/admin", AdminLogin);

loginRoute.post("/funcionarios", FuncionarioLogin);
