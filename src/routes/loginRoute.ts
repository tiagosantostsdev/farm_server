import { Router } from "express";
import { AdminLogin } from "../controllers/loginController";

export const loginRoute = Router()

loginRoute.post("/admin", AdminLogin)