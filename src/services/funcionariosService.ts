import { Funcionario } from "../models/funcionarioModel";

export const createFuncionario = (values: Record<string, any>) =>
  Funcionario.create(values);

export const findFuncionarios = () => Funcionario.find();

export const findFuncionarioById = (id: string) => Funcionario.findById(id);

export const deleteFuncionario = (id: string) =>
  Funcionario.findOneAndDelete({ _id: id });

export const updateFuncionario = (
  id: string,
  telemovel: string,
  endereco: string
) =>
  Funcionario.findOneAndUpdate(
    { _id: id },
    { telemovel: telemovel, endereco: endereco }
  );
