import { Vendas } from "../models/vendasModel";

export const createVendas = (values: Record<string, any>) =>
  Vendas.create(values);

export const findVendas = () => Vendas.find();
