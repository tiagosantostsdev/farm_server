import { Funcionario } from "../models/funcionarioModel";

export const createFuncionario = (values: Record<string, any>) =>
  Funcionario.create(values);

export const findFuncionarios = () => Funcionario.find();

export const findFuncionarioById = (id: string) => Funcionario.findById(id);

export const deleteFuncionario = (id: string) =>
  Funcionario.findOneAndDelete({ _id: id });

export const updateFuncionario = (
  id: string,
  usuario: string,
  telemovel: string,
  endereco: string,
  email: string
) =>
  Funcionario.findOneAndUpdate(
    { _id: id },
    {
      usuario: usuario,
      telemovel: telemovel,
      endereco: endereco,
      email: email,
    }
  );
