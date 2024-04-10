import express from "express";
import {
  createFuncionario,
  deleteFuncionario,
  findFuncionarioById,
  findFuncionarios,
  findOneFuncionario,
  updateFuncionario,
} from "../services/funcionariosService";
import bcrypt from "bcrypt";
import { sentEmailVerification } from "../config/ResetPasswordEmail";

export const CreateFuncionario = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const {
      usuario,
      senha,
      nif,
      endereco,
      telemovel,
      email,
      genero,
      dataNascimento,
    } = req.body as {
      usuario: string;
      senha: string;
      nif: string;
      endereco: string;
      telemovel: string;
      email: string;
      genero: string;
      dataNascimento: string;
    };
    if (
      !usuario ||
      !senha ||
      !nif ||
      !endereco ||
      !telemovel ||
      !genero ||
      !dataNascimento
    ) {
      return res
        .status(400)
        .send({ message: "Por favor preencha todos os campos" });
    }

    const date = new Date();
    const hash = bcrypt.hashSync(senha, 10);
    const funcionario = await createFuncionario({
      usuario,
      senha: hash,
      nif,
      endereco,
      dataRegistro: date.toLocaleString("pt-AO", {
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
      }),
      telemovel,
      email,
      genero,
      dataNascimento,
    });
    if (!funcionario) {
      return res
        .status(400)
        .send({ message: "Erro ao criar novo funcionário" });
    }
    res
      .status(201)
      .send({ message: "Novo funcionário adicionado com sucesso" });
  } catch (error) {
    if (error instanceof Error) {
      console.log({ message: error.message });
      return res.status(500).send({ message: error.message });
    }
  }
};

export const FindFuncionario = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const funcionario = await findFuncionarios();
    if (funcionario.length === 0) {
      return res
        .status(404)
        .send({ message: "Nenhum funcionário foi encontrado" });
    }
    res.status(200).send(funcionario);
  } catch (error) {
    if (error instanceof Error) {
      console.log({ message: error.message });
      return res.status(500).send({ message: error.message });
    }
  }
};

export const FindFuncionarioById = async (req: any, res: express.Response) => {
  try {
    const { funcionarioId } = req;
    const funcionario = await findFuncionarioById(funcionarioId);
    if (!funcionario) {
      return res.status(400).send({ message: "Funcionario não encontrado" });
    }
    res.status(200).send(funcionario);
  } catch (error) {
    if (error instanceof Error) {
      console.log({ message: error.message });
      return res.status(500).send({ message: error.message });
    }
  }
};

export const UpdateFuncionario = async (req: any, res: express.Response) => {
  try {
    const { id } = req;
    const { usuario, telemovel, endereco, email } = req.body as {
      usuario: string;
      telemovel: string;
      endereco: string;
      email: string;
    };
    if (!usuario && !telemovel && !endereco && !email) {
      return res.status(400).send({
        message: "Por favor selecione ao menos um campo para ser alterado",
      });
    }

    await updateFuncionario(id, usuario, telemovel, endereco, email);
    res.status(200).send({ message: "Dados alterado com sucesso" });
  } catch (error) {
    if (error instanceof Error) {
      console.log({ message: error.message });
      return res.status(500).send({ message: error.message });
    }
  }
};

export const DeleteFuncionario = async (req: any, res: express.Response) => {
  try {
    const { id } = req;
    const funcionario = await deleteFuncionario(id);
    if (!funcionario) {
      return res.status(400).send({ message: "Erro ao deletar funcionario" });
    }
    res.status(200).send({ message: "Funcionario deletado com sucesso" });
  } catch (error) {
    if (error instanceof Error) {
      console.log({ message: error.message });
      return res.status(500).send({ message: error.message });
    }
  }
};

export const SolicitarRedefinicaoSenhaFunc = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const { email } = req.body as { email: string };
    if (!email) {
      return res
        .status(400)
        .send({ message: "Email de funcionário necessário" });
    }

    const funcionarios = await findOneFuncionario(email);
    if (!funcionarios) {
      return res.status(400).send({ message: "Funcionário não encontrado" });
    }

    const codigo = Math.floor(100000 + Math.random() * 900000).toString();
    funcionarios.codeVerify = codigo;
    await funcionarios.save();
    sentEmailVerification(String(funcionarios.email), codigo);

    res.status(200).send({ message: "Verifique o seu email por favor" });
  } catch (error) {
    if (error instanceof Error) {
      console.log({ message: error });
      return res.status(500).send({ message: error.message });
    }
  }
};

export const RedefinirSenhaFunc = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const { email, codigo, senha } = req.body as {
      email: string;
      codigo: string;
      senha: string;
    };

    if (!email || !codigo || !senha) {
      return res
        .status(400)
        .send({ message: "Email, codigo e nova senha obrigatório" });
    }

    const funcionario = await findOneFuncionario(email)
    if(!funcionario || funcionario.codeVerify !== codigo){
      return res.status(400).send({message: "Email ou código inválido"})
    }

    const hash = bcrypt.hashSync(senha, 10)
    funcionario.senha = hash
    funcionario.codeVerify = undefined
    await funcionario.save()

    res.status(200).send({message: "Senha de funcionário actualizado"});
  } catch (error) {
    if (error instanceof Error) {
      console.log({ message: error.message });
      return res.status(500).send({ message: error.message });
    }
  }
};
