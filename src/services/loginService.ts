import jwt from "jsonwebtoken";
import { Admin } from "../models/adminModel";

export const findAdminLogin = (admin: string) =>
  Admin.findOne({admin: admin}).select("+password");

export const generateToken = (id: string) => {
  const secretJWT: string = String(process.env.SECRET_JWT);
  return jwt.sign({id}, secretJWT, { expiresIn: "1d" });
};
