import express from "express";
import {
  createFornecedores,
  deleteFornecedores,
  findFornecedores,
  updateFornecedores,
} from "../services/fornecedoresService";

export const CreateFornecedor = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const { nome, nif, endereco, telefone, email, site } = req.body as {
      nome: string;
      nif: string;
      endereco: string;
      telefone: string;
      email: string;
      site: string;
    };
    if (!nome || !nif || !endereco || !telefone || !email) {
      return res
        .status(400)
        .send({ message: "Por favor preencha todos os campos" });
    }

    const date = new Date();

    const fornecedor = await createFornecedores({
      nome,
      nif,
      endereco,
      telefone,
      email,
      site,
      dataRegistro: date.toLocaleString("pt-AO", {timeZone:"Africa/Luanda",
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
      }),
    });
    if (!fornecedor) {
      return res.status(400).send({ message: "Erro ao criar novo fornecedor" });
    }
    res.status(201).send({ message: "Novo fornecedor adicionado com sucesso" });
  } catch (error) {
    if (error instanceof Error) {
      console.log({ message: error.message });
      return res.status(500).send({ message: error.message });
    }
  }
};

export const FindFornecedor = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const fornecedor = await findFornecedores();
    if (!fornecedor) {
      return res
        .status(404)
        .send({ message: "Nenhuma fornecedor foi encontrado" });
    }
    res.status(200).send(fornecedor);
  } catch (error) {
    if (error instanceof Error) {
      console.log({ message: error.message });
      return res.status(500).send({ message: error.message });
    }
  }
};

export const UpdateFornecedor = async (req: any, res: express.Response) => {
  try {
    const { id } = req;
    const { nome, telefone, endereco, site } = req.body as {
      nome: string;
      telefone: string;
      endereco: string;
      site: string;
    };
    if (!nome && !telefone && !endereco && !site) {
      return res.status(400).send({
        message: "Por favor selecione ao menos um campo para ser alterado",
      });
    }
    await updateFornecedores(id, nome, telefone, endereco, site);
    res.status(200).send({ message: "Dados alterado com sucesso" });
  } catch (error) {
    if (error instanceof Error) {
      console.log({ message: error.message });
      return res.status(500).send({ message: error.message });
    }
  }
};

export const DeleteFornecedor = async (req: any, res: express.Response) => {
  try {
    const { id } = req;
    const fornecedor = await deleteFornecedores(id);
    if (!fornecedor) {
      return res.status(400).send({ message: "Erro ao deletar fornecedor" });
    }
    res.status(200).send({ message: "Fornecedor deletado com sucesso" });
  } catch (error) {
    if (error instanceof Error) {
      console.log({ message: error.message });
      return res.status(500).send({ message: error.message });
    }
  }
};
