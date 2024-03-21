import express from "express";
import bcrypt from "bcrypt";
import {
  findAdminLogin,
  findFuncionarioLogin,
  generateToken,
} from "../services/loginService";

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
    const adm = await findAdminLogin(admin);
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
    res.status(200).send({token: token});
  } catch (error) {
    if (error instanceof Error) {
      console.log({ message: error.message });
      return res.status(500).send({ message: error.message });
    }
  }
};

export const FuncionarioLogin = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const { usuario, senha } = req.body as { usuario: string; senha: string };
    if (!usuario || !senha) {
      return res
        .status(400)
        .send({
          message: "Por favor digite o usuario e senha para iniciar sessão",
        });
    }
    const funcionario = await findFuncionarioLogin(usuario);
    if (!funcionario) {
      return res
        .status(400)
        .send({ message: "Usuario ou senha de usuário inválido" });
    }
    const isValidSenha = bcrypt.compareSync(senha, funcionario.senha);
    if (!isValidSenha) {
      return res
        .status(400)
        .send({ message: "Usuario ou senha de usuário inválido" });
    }
    const token = generateToken(funcionario.id);
    res.status(200).send({token: token});
  } catch (error) {
    if (error instanceof Error) {
      console.log({ message: error.message });
      return res.status(400).send({ message: error.message });
    }
  }
};
