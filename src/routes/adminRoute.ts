import { Router } from "express";
import {
  CreateAdmin,
  FindAdmin,
  RedefinirSenha,
  SolicitarRedefinicaoSenha,
  UpdateAdmin,
} from "../controllers/adminController";

export const adminRoute = Router();

adminRoute.post("/newadmin", CreateAdmin);

adminRoute.get("/findadmin", FindAdmin);

adminRoute.patch("/updateadmin/:id", UpdateAdmin);

adminRoute.post("/esqueci-a-senha", SolicitarRedefinicaoSenha);

adminRoute.post("/redefinir-senha", RedefinirSenha);
