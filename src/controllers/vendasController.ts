import express from "express";
import { deleteCarrinho, findCarrinho } from "../services/carrinhoService";
import {
  addProdutos,
  createVendas,
  findVendaById,
  findVendas,
  updateVendaCalc,
} from "../services/vendasService";

export const CreateVendas = async (req: any, res: express.Response) => {
  try {
    const { funcionarioId } = req;
    const { nomeCliente } = req.body as {
      nomeCliente: string;
    };
    if (!nomeCliente) {
      return res
        .status(400)
        .send({ message: "Campo nome de cliente obrigatório" });
    }
    const date = new Date();

    const Vendas = await createVendas({
      nomeCliente: nomeCliente,
      dataVenda: date.toLocaleString(),
      Funcionario: funcionarioId,
    });
    if (!Vendas) {
      return res
        .status(400)
        .send({ message: "Não foi possivel efectuar Venda" });
    }
    res.status(200).send({ message: "Dados inseriodos, actualize por favor" });
  } catch (error) {
    if (error instanceof Error) {
      console.log({ message: error.message });
      return res.status(500).send({ message: error.message });
    }
  }
};

export const UpdateVendasById = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const { id } = req.params as { id: string };
    if (!id) {
      return res
        .status(400)
        .send({ message: "Insira o id de venda por favor" });
    }
    const { valor } = req.body as { valor: number };
    if (!valor) {
      return res.status(400).send("Por favor adicione o valor");
    }

    var total: number = 0;

    const carrinho = await findCarrinho();
    if (carrinho.length === 0) {
      return res
        .status(400)
        .send({ message: "Sem produtos registrados na lista" });
    }
    carrinho.map((item) =>
      getProdutos({
        id: item.id,
        nome: item.nome,
        quantidade: item.quantidade,
        descricao: item.descricao,
        dosagem: item.dosagem,
        total: item.total,
      })
    );
    async function getProdutos(params: Record<string, any>) {
      const produtos = await addProdutos(
        id,
        params.nome,
        params.quantidade,
        params.descricao,
        params.dosagem,
        params.total
      );
      await deleteCarrinho(params.id);

      if (!produtos) {
        return res
          .status(400)
          .send({ message: "Falha ao adicionar produtos para venda" });
      }
    }

    const calc = await findVendaById(id);
    const produtos = calc?.produtos || [];

    produtos.map((item) =>
      getTotal({
        total: item.total,
      })
    );

    if (valor < total || valor - total < 0) {
      return res.status(400).send({ message: "Valor insuficiente" });
    }

    async function getTotal(params: Record<string, any>) {
      total = total + params.total;

      let troco: number;
      if (valor - total < 0) {
        return (troco = 0);
      }
      troco = valor - total;

      await updateVendaCalc(id, valor, total, troco);
    }

    return res
      .status(200)
      .send({ message: "Produtos actualizados e vendidos" });
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
      return res.status(404).send({ message: "Nenhuma Venda registrada" });
    }
    res.status(200).send(Vendas);
  } catch (error) {
    if (error instanceof Error) {
      console.log({ message: error.message });
      return res.status(400).send({ message: error.message });
    }
  }
};
