import express from "express";
import {
  createProduto,
  deleteProduto,
  findProdutos,
  searchProdutos,
  updateProduto,
} from "../services/produtosService";

export const CreateProdutos = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const {
      codigo,
      nome,
      quantidade,
      dosagem,
      descricao,
      preco,
      fornecedor,
      fabricante,
    } = req.body as {
      codigo: string;
      nome: string;
      quantidade: number;
      dosagem: string;
      descricao: string;
      preco: string;
      fornecedor: string;
      fabricante: string;
    };
    if (
      !codigo ||
      !nome ||
      !quantidade ||
      !dosagem ||
      !preco ||
      !descricao ||
      !fornecedor ||
      !fabricante
    ) {
      return res.status(400).send({ message: "Please submit all field" });
    }
    const produtos = await createProduto({
      codigo,
      nome,
      quantidade,
      dosagem,
      descricao,
      preco,
      fornecedor,
      fabricante,
    });
    if (!produtos) {
      return res.status(400).send({ message: "Erro ao criar novos produtos" });
    }
    res.status(201).send({ message: "Novos produtos adicionado com sucesso" });
  } catch (error) {
    if (error instanceof Error) {
      console.log({ message: error.message });
      return res.status(500).send({ message: error.message });
    }
  }
};

export const FindProdutos = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const produtos = await findProdutos();
    if (!produtos) {
      return res.status(404).send({ message: "Nenhum produto foi encontrado" });
    }
    res.status(200).send(produtos);
  } catch (error) {
    if (error instanceof Error) {
      console.log({ message: error.message });
      return res.status(500).send({ message: error.message });
    }
  }
};

export const SearchProdutos = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const { codigo } = req.query as { codigo: string; nome: string };
    if (!codigo) {
      return res
        .status(400)
        .send({ message: "Por favor adicone o codigo do produto" });
    }
    const produtos = await searchProdutos(codigo);
    if (!produtos) {
      return res.status(404).send({ message: "Nenhum produto foi encontrado" });
    }
    res.status(200).send(produtos);
  } catch (error) {
    if (error instanceof Error) {
      console.log({ message: error.message });
      return res.status(500).send({ message: error.message });
    }
  }
};

export const UpdateProdutos = async (req: any, res: express.Response) => {
  try {
    const { id } = req;
    const { nome, quantidade, dosagem, descricao, preco } = req.body as {
      nome: string;
      quantidade: number;
      dosagem: string;
      descricao: string;
      preco: string;
    };
    if (!descricao && !dosagem && !nome && !descricao && !preco) {
      return res.status(400).send({
        message: "Por favor selecione ao menos um campo para ser alterado",
      });
    }
    await updateProduto(id, nome, quantidade, dosagem, descricao, preco);
    res.status(200).send({ message: "Dados alterado com sucesso" });
  } catch (error) {
    if (error instanceof Error) {
      console.log({ message: error.message });
      return res.status(500).send({ message: error.message });
    }
  }
};

export const DeleteProdutos = async (req: any, res: express.Response) => {
  try {
    const { id } = req;
    const produtos = await deleteProduto(id);
    if (!produtos) {
      return res.status(400).send({ message: "Erro ao deletar produtos" });
    }
    res.status(200).send({ message: "Produtos deletado com sucesso" });
  } catch (error) {
    if (error instanceof Error) {
      console.log({ message: error.message });
      return res.status(500).send({ message: error.message });
    }
  }
};
