import { Router } from "express";
import { authAdmin } from "../middlewares/authMiddleware";
import {
  CreateFabricante,
  DeleteFabricante,
  FindFabricante,
  UpdateFabricante,
} from "../controllers/fabricantesController";
import { validId } from "../middlewares/globalMiddleware";

export const fabricanteRoute = Router();

fabricanteRoute.post("/novo", authAdmin, CreateFabricante);

fabricanteRoute.get("/", FindFabricante);

fabricanteRoute.patch("/update/:id", authAdmin, validId, UpdateFabricante);

fabricanteRoute.delete("/delete/:id", authAdmin,validId, DeleteFabricante);
