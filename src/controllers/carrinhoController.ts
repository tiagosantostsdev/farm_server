import express from "express";
import {
  searchProdutos,
  updateProdutoCarrinho,
} from "../services/produtosService";
import {
  createCarrinho,
  deleteCarrinho,
  findCarrinho,
  findCarrinhoById,
  updateCarrinho,
} from "../services/carrinhoService";

export const CreateCarrinho = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const { nome } = req.body as {
      nome: string;
    };
    if (!nome) {
      return res
        .status(400)
        .send({ message: "Adicione o nome do produtos por favor" });
    }
    const produtos = await searchProdutos(nome);
    if (!produtos) {
      return res.status(404).send({ message: "Produto não encontrado" });
    }

    produtos.map((item) =>
      Carrinho({
        nome: item.nome,
        id: item.id,
        descricao: item.descricao,
        dosagem: item.dosagem,
        quantidade: item.quantidade,
        preco: item.preco,
      })
    );

    async function Carrinho(params: Record<string, any>) {
      const { quantidade } = req.body as { quantidade: number };
      if (!quantidade) {
        return res
          .status(400)
          .send({ message: "Por favor adicione a quantidade" });
      }

      if (
        quantidade > params.quantidade ||
        params.quantidade - quantidade < 0
      ) {
        return res.status(400).send({
          message: "Quantidade no estoque inferior a quantidade pretendida",
        });
      }

      let total: number = 0;
      total += quantidade * params.preco;

      const venda = await createCarrinho({
        nome: params.nome,
        Produto: params.id,
        quantidade: quantidade,
        descricao: params.descricao,
        dosagem: params.dosagem,
        total: total,
      });
      await updateProdutoCarrinho(params.id, (params.quantidade -= quantidade));
      if (!venda) {
        return res.status(400).send("Falha ao adicionar produto para venda");
      }
      res.status(200).send({ message: "Produto adicionado" });
    }
  } catch (error) {
    if (error instanceof Error) {
      console.log({ message: error.message });
      return res.status(500).send({ message: error.message });
    }
  }
};

export const FindCarrinho = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    let total: number = 0;
    const item = await findCarrinho();
    if (item.length === 0) {
      return res.status(400).send({ message: "Nenhum produto encontrado" });
    }

    item.forEach((item) => {
      total = total + item.total;
    });

    res.status(200).send({ item: item, total: total });
  } catch (error) {
    if (error instanceof Error) {
      console.log({ message: error.message });
      return res.status(400).send({ message: error.message });
    }
  }
};

export const DeleteCarrinho = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const { id } = req.params as { id: string };
    if (!id) {
      return res
        .status(400)
        .send({ message: "Insira o id do produto por favor" });
    }

    const item = await findCarrinhoById(id);
    if (!item) {
      return res.status(400).send({ message: "Produto não encontrado" });
    }

    const produto = await searchProdutos(item?.nome);
    produto.map((item) =>
      deletarActualizar({
        id: item.id,
        quantidade: item.quantidade,
      })
    );

    async function deletarActualizar(params: Record<string, any>) {
      await updateProdutoCarrinho(
        params.id,
        (params.quantidade += item?.quantidade)
      );
      await deleteCarrinho(id);
    }

    res.status(200).send({ message: "Produto deletado dos registros" });
  } catch (error) {
    if (error instanceof Error) {
      console.log({ message: error.message });
      return res.status(400).send({ message: error.message });
    }
  }
};

export const UpdateCarrinho = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const { id } = req.params as { id: string };

    if (!id) {
      return res
        .status(400)
        .send({ message: "Insira o id do produto por favor" });
    }

    const item: any = await findCarrinhoById(id);
    if (!item) {
      return res.status(400).send({ message: "Produto não encontrado" });
    }

    const produto = await searchProdutos(item.nome);
    if (!produto) {
      return res.status(400).send({ message: "Produto não encontrado" });
    }

    produto.map((item) =>
      buscarActualizar({
        id: item.id,
        quantidade: item.quantidade,
      })
    );

    async function buscarActualizar(params: Record<string, any>) {
      const { quantidade } = req.body as { quantidade: number };
      if (
        quantidade > params.quantidade ||
        params.quantidade - quantidade < 0
      ) {
        return res.status(400).send({
          message: "Quantidade no estoque inferior a quantidade pretendida",
        });
      }
      if (quantidade < item.quantidade) {
        await updateCarrinho(id, item.quantidade - quantidade);
        await updateProdutoCarrinho(params.id, params.quantidade + quantidade);
      } else {
        await updateCarrinho(id, item.quantidade + quantidade);
        await updateProdutoCarrinho(params.id, params.quantidade - quantidade);
      }
      res.status(200).send({ message: "Produto actualizado com sucesso" });
    }
  } catch (error) {
    if (error instanceof Error) {
      console.log({ message: error.message });
      return res.status(500).send({ message: error.message });
    }
  }
};
