import { Fornecedores } from "../models/fornecedorModel";

export const createFornecedores = (values: Record<string, any>) =>
  Fornecedores.create(values);

export const findFornecedores = () => Fornecedores.find();

export const deleteFornecedores = (id: string) =>
  Fornecedores.findOneAndDelete({ _id: id });

export const updateFornecedores = (
  id: string,
  nome: string,
  telefone: string,
  endereco: string
) =>
  Fornecedores.findOneAndUpdate(
    { _id: id },
    { nome: nome, telefone: telefone, endereco: endereco }
  );
