import express from "express";
import { findCarrinho } from "../services/carrinhoService";
import { createVendas, findVendas } from "../services/vendasService";

export const CreateVendas = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const Carrinho = await findCarrinho();

    Carrinho.map((item) =>
      compra({
        produtos: item.nome,
        total: item.total,
      })
    );

    async function compra(params: Record<string, any>) {
      const { valor } = req.body as { valor: number };
      if (!valor) {
        return res.status(400).send({ message: "Adicione o valor por favor" });
      }

      let total: number = 0;
      total += params.total;

      if (valor < total) {
        return res.status(400).send({ message: "Valor insuficiente" });
      }

      let troco: number = valor - total;

      const Vendas = await createVendas({
        produtos: params.produtos,
        total: total,
        valor: valor,
        troco: troco,
      });

      if (!Vendas) {
        return res
          .status(400)
          .send({ message: "Não foi possivel efectuar compra" });
      }
      res.status(200).send({ message: "Compra efectuada com sucesso" });
    }
  } catch (error) {
    if (error instanceof Error) {
      console.log({ message: error.message });
      return res.status(500).send({ message: error.message });
    }
  }
};

export const FindVendas = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const Vendas = await findVendas();
    if (Vendas.length === 0) {
      return res.status(404).send({ message: "Nenhuma compra registrada" });
    }
    res.status(200).send(Vendas);
  } catch (error) {
    if (error instanceof Error) {
      console.log({ message: error.message });
      return res.status(400).send({ message: error.message });
    }
  }
};
