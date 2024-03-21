import { Router } from "express";
import {
  CreateAdmin,
  FindAdmin,
  FindAdminById,
  RedefinirSenha,
  SolicitarRedefinicaoSenha,
  UpdateAdmin,
} from "../controllers/adminController";
import { authAdmin } from "../middlewares/authMiddleware";

export const adminRoute = Router();

adminRoute.post("/newadmin", CreateAdmin);

adminRoute.get("/findadmin", FindAdmin);

adminRoute.get("/findadminbyid/:id?", authAdmin, FindAdminById)

adminRoute.patch("/updateadmin/:id", UpdateAdmin);

adminRoute.post("/esqueci-a-senha", SolicitarRedefinicaoSenha);

adminRoute.post("/redefinir-senha", RedefinirSenha);
