import {Router} from "express";
import { CreateAdmin, FindAdmin, UpdateAdmin } from "../controllers/adminController";

export const adminRoute = Router();

adminRoute.post("/newadmin", CreateAdmin)

adminRoute.get("/findadmin", FindAdmin)

adminRoute.patch("/updateadmin", UpdateAdmin)