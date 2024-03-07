import express from "express";
import bcrypt from "bcrypt";
import { findAdminLogin, generateToken } from "../services/loginService";

export const AdminLogin = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const { admin, password } = req.body as {
      admin: string;
      password: string;
    };

    if (!admin || !password) {
      return res
        .status(400)
        .send({ message: "Por favor preencha todos os campos" });
    }
    const adm = await findAdminLogin( admin);
    if (!adm) {
      return res
        .status(400)
        .send({ messaage: "Usuário ou palavra passe inválido" });
    }
    const isValidPassword = bcrypt.compareSync(password, adm.password);
    if (!isValidPassword) {
      return res
        .status(400)
        .send({ messaage: "Usuário ou palavra passe inválido" });
    }
    const token = generateToken(adm.id);
    res.status(200).send(token);
  } catch (error) {
    if (error instanceof Error) {
      console.log({ message: error.message });
      return res.status(500).send({ message: error.message });
    }
  }
};
