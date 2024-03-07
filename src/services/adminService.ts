import { Admin } from "../models/adminModel";

export const createAdmin = (values: Record<string, any>) => Admin.create(values);

export const findAdmin = () => Admin.find();

export const findAdminById = (id:string)=> Admin.findById(id)

export const updateAdmin = (id:string, admin:string, avatar:string) => Admin.findOneAndUpdate({_id: id}, {admin:admin, avatar:avatar}) 