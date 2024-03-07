import { Fabricantes } from "../models/fabricanteModel";

export const createFabricantes = (values: Record<string, any>) =>
  Fabricantes.create(values);

export const findFabricantes = () => Fabricantes.find();

export const deleteFabricantes = (id: string) =>
  Fabricantes.findOneAndDelete({ _id: id });

export const updateFabricantes = (
  id: string,
  nome: string,
  telefone: string,
  endereco: string,
) =>
  Fabricantes.findOneAndUpdate(
    { _id: id },
    { nome: nome, telefone: telefone, endereco: endereco }
  );