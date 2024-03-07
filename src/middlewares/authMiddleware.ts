import express from "express";
import jwt from "jsonwebtoken";
import { findAdminById } from "../services/adminService";

export const authAdmin = async (
  req: any,
  res: express.Response,
  next: express.NextFunction
) => {
  try {
    const { authorization } = req.headers as { authorization: string };
    if (!authorization) {
      return res.sendStatus(401);
    }
    const parts = authorization.split(" ");
    if (parts.length !== 2) {
      return res.sendStatus(401);
    }
    const [schema, token] = parts;
    if (schema !== "Bearer") {
      return res.sendStatus(401);
    }
    const secretJWT: string = String(process.env.SECRET_JWT);
    jwt.verify(token, secretJWT, async (error, decoded: any) => {
      if (error instanceof Error) {
        console.log({ message: error.message });
        return res.sendStatus(401);
      }
      const admin = await findAdminById(decoded.id);
      if (!admin || !admin.id) {
        console.log({ message: "Token inválido" });
        return res.status(400).send({ message: "Token inválido" });
      }
      req.adminId = admin.id;
      next();
    });
  } catch (error) {
    if (error instanceof Error) {
      console.log({ message: error.message });
      return res.status(500).send({ message: error.message });
    }
  }
};
