import { Produto } from "../models/produtoModel";

export const createProduto = (values: Record<string, any>) =>
  Produto.create(values);

export const findProdutos = () => Produto.find();

export const deleteProduto = (id: string) =>
  Produto.findOneAndDelete({ _id: id });

export const updateProduto = (
  id: string,
  nome: string,
  quantidade: number,
  dosagem: string,
  descricao: string,
  preco: string
) =>
  Produto.findOneAndUpdate(
    { _id: id },
    {
      nome: nome,
      quantidade: quantidade,
      dosagem: dosagem,
      descricao: descricao,
      preco: preco,
    }
  );
