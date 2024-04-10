import bcrypt from "bcrypt";
import express from "express";
import {
  createAdmin,
  deleteAdmin,
  findAdmin,
  findAdminById,
  findOneAdmin,
  updateAdmin,
} from "../services/adminService";
import { sentEmailVerification } from "../config/ResetPasswordEmail";

export const CreateAdmin = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const { admin, email, telemovel, password, avatar } = req.body as {
      admin: string;
      email: string;
      telemovel: string;
      password: string;
      avatar: string;
    };
    if (!admin || !email || !telemovel || !password) {
      return res.status(400).send({ message: "Please submit all field" });
    }
    const hash = bcrypt.hashSync(password, 10);
    const adm = await createAdmin({
      admin: admin,
      email: email,
      telemovel: telemovel,
      password: hash,
      avatar: avatar,
    });
    if (!adm) {
      return res
        .status(400)
        .send({ message: "Error creating new administrator" });
    }
    res
      .status(201)
      .send({ message: "New administrator has been created successful" });
  } catch (error) {
    if (error instanceof Error) {
      console.log({ message: error.message });
      return res.status(500).send({ message: error.message });
    }
  }
};

export const FindAdmin = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const adm = await findAdmin();
    if (!adm) {
      return res.status(404).send({ message: "No Administrator found" });
    }
    res.status(200).send(adm);
  } catch (error) {
    if (error instanceof Error) {
      console.log({ message: error.message });
      return res.status(500).send({ message: error.message });
    }
  }
};

export const FindAdminById = async (req: any, res: express.Response) => {
  try {
    const { adminId } = req;
    const admin = await findAdminById(adminId);
    if (!admin) {
      return res.status(400).send({ message: "Administrador não encoontrado" });
    }
    res.status(200).send(admin);
  } catch (error) {
    if (error instanceof Error) {
      console.log({ message: error.message });
      return res.status(500).send({ message: error.message });
    }
  }
};

export const UpdateAdmin = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const { id } = req.params as { id: string };
    const { admin, avatar, telemovel, email } = req.body as { admin: string; avatar: string, telemovel:string, email:string };
    if (!admin && !avatar && !telemovel && !email) {
      return res
        .status(400)
        .send({ message: "Please submit at least one field" });
    }
    await updateAdmin(id, admin, avatar, telemovel, email);
    res.status(200).send({ message: "Admin has been updated successful" });
  } catch (error) {
    if (error instanceof Error) {
      console.log({ message: error.message });
      return res.status(500).send({ message: error.message });
    }
  }
};

export const SolicitarRedefinicaoSenha = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const { email } = req.body as { email: string };
    if (!email) {
      return res
        .status(400)
        .send({ message: "Email de administrador necessário" });
    }

    const admin = await findOneAdmin(email);
    if (!admin) {
      return res.status(400).send({ message: "Administrador não encontrado" });
    }

    const codigo = Math.floor(100000 + Math.random() * 900000).toString();
    admin.codeVerify = codigo;
    await admin.save();
    sentEmailVerification(admin.email, codigo);

    res.status(200).send({ message: "Verifique o seu email por favor" });
  } catch (error) {
    if (error instanceof Error) {
      console.log({ message: error });
      return res.status(500).send({ message: error.message });
    }
  }
};

export const RedefinirSenha = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const { email, codigo, password } = req.body as {
      email: string;
      codigo: string;
      password: string;
    };

    if(!email || !codigo || !password){
      return res.status(400).send({message:"Codigo, email, e nova senha obrigatório"})
    }
    
    const admin = await findOneAdmin(email);
    if (!admin || admin.codeVerify !== codigo) {
      return res.status(400).send({ message: "código inválido" });
    }

    const hash = bcrypt.hashSync(password, 10);

    admin.password = hash;
    admin.codeVerify = undefined;
    await admin.save();

    res.status(200).send({ message: "Senha de administarador alterado" });
  } catch (error) {
    if (error instanceof Error) {
      console.log({ message: error.message });
      return res.status(500).send({ message: error.message });
    }
  }
};

export const DeleteAdmin = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const { id } = req.params as { id: string };
    if (!id) {
      return res.status(400).send({ message: "Id necessário" });
    }
    const admin = await deleteAdmin(id);
    if (!admin) {
      return res
        .status(400)
        .send({ message: "Erro ao eliminar administrador" });
    }
    res.status(200).send({ message: "Administardor eliminado" });
  } catch (error) {
    if (error instanceof Error) {
      console.log({ message: error.message });
      return res.status(500).send({ message: error.message });
    }
  }
};
