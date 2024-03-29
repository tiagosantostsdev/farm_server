import express from "express";
import { createFuncionario, deleteFuncionario, findFuncionarios, updateFuncionario } from "../services/funcionariosService";

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
      return res.status(400).send({ message: "Por favor preencha todos os campos" });
    }
    const funcionario = await createFuncionario({
      usuario,
      senha,
      nif,
      endereco,
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
    if (!funcionario) {
      return res.status(404).send({ message: "Nenhuma funcionário foi encontrado" });
    }
    res.status(200).send(funcionario);
  } catch (error) {
    if (error instanceof Error) {
      console.log({ message: error.message });
      return res.status(500).send({ message: error.message });
    }
  }
};

export const UpdateFuncionario = async (
  req: any,
  res: express.Response
) => {
  try {
    const { id } = req;
    const { telemovel, endereco } = req.body as { telemovel: string; endereco: string };
    if (!telemovel && !endereco) {
      return res
        .status(400)
        .send({ message: "Por favor selecione ao menos um campo para ser alterado" });
    }
    await updateFuncionario(id, telemovel, endereco);
    res.status(200).send({ message: "Dados alterado com sucesso" });
  } catch (error) {
    if (error instanceof Error) {
      console.log({ message: error.message });
      return res.status(500).send({ message: error.message });
    }
  }
};

export const DeleteFuncionario = async (
  req: any,
  res: express.Response
) => {
  try {
    const { id } = req;
    const funcionario = await deleteFuncionario(id)
    if(!funcionario){
        return res.status(400).send({message: "Erro ao deletar funcionario"})
    }
    res.status(200).send({ message: "Funcionario deletado com sucesso" });
  } catch (error) {
    if (error instanceof Error) {
      console.log({ message: error.message });
      return res.status(500).send({ message: error.message });
    }
  }
};

