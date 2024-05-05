import express from "express";
import { deleteCarrinho, findCarrinho } from "../services/carrinhoService";
import {
  addProdutos,
  createVendas,
  deleteVendas,
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
      dataVenda: date.toLocaleString("pt-AO", {
        timeZone: "Africa/Luanda",
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
      }),
      Funcionario: funcionarioId,
    });
    if (!Vendas) {
      return res
        .status(400)
        .send({ message: "Não foi possivel efectuar Venda" });
    }
    res.status(200).send(Vendas.id);
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
    const { valor, total, troco } = req.body as {
      valor: number;
      total: number;
      troco: number;
    };

    if (!id || !valor || !total || !troco) {
      return res
        .status(400)
        .send({ message: "Id, Valor, total, troco obrigatório" });
    }

    const carrinho = await findCarrinho();
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

    if (valor < total || valor - total < 0) {
      return res.status(400).send({ message: "Valor insuficiente" });
    }

    const update = await updateVendaCalc(id, valor, total, troco);
    if (!update) {
      return res
        .status(400)
        .send({ message: "Falha ao vender e actualizar produtos" });
    }

    res.status(200).send({ message: "Produtos actualizados e vendidos" });
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
    const vendas = await findVendas();
    if (!vendas) {
     return res.status(404).send({ message: "Nenhuma Venda registrada" });
    }
    res.status(200).send(vendas);
  } catch (error) {
    if (error instanceof Error) {
      console.log({ message: error.message });
      return res.status(400).send({ message: error.message });
    }
  }
};

export const DeleteVendas = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const { id } = req.params as { id: string };
    const vendas = await deleteVendas(id);
    if (!vendas?.id) {
      res.status(400).send({ message: "Falha ao deletar vendas" });
    }
    res.status(200).send({ message: "Registro de venda deletada" });
  } catch (error) {
    if (error instanceof Error) {
      console.log({ message: error.message });
      return res.status(500).send({ message: error.message });
    }
  }
};
