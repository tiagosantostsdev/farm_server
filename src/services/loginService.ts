import jwt from "jsonwebtoken";
import { Admin } from "../models/adminModel";
import { Funcionario } from "./../models/funcionarioModel";

export const findAdminLogin = (admin: string) =>
  Admin.findOne({ admin: admin }).select("+password");

export const findFuncionarioLogin = (usuario: string) =>
  Funcionario.findOne({ usuario: usuario }).select("+senha");

export const generateToken = (id: string) => {
  const secretJWT: string = String(process.env.SECRET_JWT);
  return jwt.sign({ id }, secretJWT, { expiresIn: "1d" });
};
