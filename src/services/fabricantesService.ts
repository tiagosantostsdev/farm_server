import { Fabricantes } from "../models/fabricanteModel";

export const createFabricantes = (values: Record<string, any>) =>
  Fabricantes.create(values);

export const findFabricantes = () => Fabricantes.find();

export const deleteFabricantes = (id: string) =>
  Fabricantes.findOneAndDelete({ _id: id });

export const updateFabricantes = (
  id: string,
  telefone: string,
  endereco: string,
  nome: string
) =>
  Fabricantes.findOneAndUpdate(
    { _id: id },
    { telefone: telefone, endereco: endereco, nome: nome }
  );