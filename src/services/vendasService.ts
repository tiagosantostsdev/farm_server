import { Vendas } from "../models/vendasModel";

export const createVendas = (values: Record<string, any>) =>
  Vendas.create(values);

export const addProdutos = (
  id: string,
  nome: string,
  quantidade: number,
  descricao: string,
  dosagem: string,
  total: number
) =>
  Vendas.findOneAndUpdate(
    { _id: id },
    { $push: { produtos: { nome, quantidade, descricao, dosagem, total } } }
  );

export const updateVendaCalc = (
  id: string,
  valor: number,
  total: number,
  troco: number
) =>
  Vendas.findOneAndUpdate(
    { _id: id },
    { valor: valor, total: total, troco: troco }
  );

export const findVendaById = (id: string) => Vendas.findById(id);

export const findVendas = () => Vendas.find();
