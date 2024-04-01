import { Carrinho } from "../models/carrinhoModel";

export const createCarrinho = (values: Record<string, any>) =>
  Carrinho.create(values);

export const findCarrinho = () => Carrinho.find().populate("Produto");

export const deleteCarrinho = (id: string) => Carrinho.findByIdAndDelete(id);

export const findCarrinhoById = (id: string) => Carrinho.findById(id);

export const updateCarrinho = (id: string, quantidade: number) =>
  Carrinho.findOneAndUpdate({ _id: id }, { quantidade: quantidade });
