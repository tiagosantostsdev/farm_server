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
    const { valor } = req.body as { valor: number };
    let total:number = 0;

    if (!id || !valor) {
      return res
        .status(400)
        .send({ message: "Id de venda e Valor obrigatório" });
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

    const calc = await findVendaById(id);
    const produtos = calc?.produtos || [];
    
    produtos.forEach((item)=>{
      total = total + item.total
    })
    
    if (valor < total || valor - total < 0) {
      return res.status(400).send({ message: "Valor insuficiente" });
    }
    
    let troco: number = valor - total;
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
    if (vendas.length === 0) {
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
