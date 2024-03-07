import express from "express";
import {
  createFabricantes,
  deleteFabricantes,
  findFabricantes,
  updateFabricantes,
} from "../services/fabricantesService";

export const CreateFabricante = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const { nome, nif, pais, endereco, telefone, email } = req.body as {
      nome: string;
      nif: string;
      pais: string;
      endereco: string;
      telefone: string;
      email: string;
    };
    if (!nome || !nif || !pais || !endereco || !email || !telefone) {
      return res
        .status(400)
        .send({ message: "Por favor preencha todos os campos" });
    }
    const fabricante = createFabricantes({
      nome,
      nif,
      pais,
      endereco,
      telefone,
      email,
    });
    if (!fabricante) {
      return res.status(400).send({ message: "Erro ao criar novo fabricante" });
    }
    res.status(201).send({ message: "Novo fabricante adicionado com sucesso" });
  } catch (error) {
    if (error instanceof Error) {
      console.log({ message: error.message });
      return res.status(500).send({ message: error.message });
    }
  }
};

export const FindFabricante = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const fabricante = await findFabricantes();
    if (!fabricante) {
      return res
        .status(404)
        .send({ message: "Nenhum fabricante foi encontrado" });
    }
    res.status(200).send(fabricante);
  } catch (error) {
    if (error instanceof Error) {
      console.log({ message: error.message });
      return res.status(500).send({ message: error.message });
    }
  }
};

export const UpdateFabricante = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const { id } = req.params as { id: string };
    const { nome, endereco, telefone } = req.body as {
      nome: string;
      endereco: string;
      telefone: string;
    };
    if (!nome && !endereco && !telefone) {
      return res.status(400).send({
        message: "Por favor selecione ao menos um campo para ser alterado",
      });
    }
    await updateFabricantes(id, nome, endereco, telefone);
    res.status(200).send({ message: "Dados alterado com sucesso" });
  } catch (error) {
    if (error instanceof Error) {
      console.log({ message: error.message });
      return res.status(500).send({ message: error.message });
    }
  }
};

export const DeleteFabricante = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const { id } = req.params as { id: string };
    const fabricante = await deleteFabricantes(id);
    if (!fabricante) {
      return res.status(400).send({ message: "Erro ao deletar fabricante" });
    }
    res.status(200).send({ message: "Fabricante deletado com sucesso" });
  } catch (error) {
    if (error instanceof Error) {
      console.log({ message: error.message });
      return res.status(500).send({ message: error.message });
    }
  }
};
