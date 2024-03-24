import { Admin } from "../models/adminModel";

export const createAdmin = (values: Record<string, any>) =>
  Admin.create(values);

export const findAdmin = () => Admin.find();

export const findOneAdmin = (email: string) => Admin.findOne({ email: email });

export const findAdminById = (id: string) => Admin.findById(id);

export const updateAdmin = (
  id: string,
  admin: string,
  avatar: string,
  telemovel: string,
  email: string
) =>
  Admin.findOneAndUpdate(
    { _id: id },
    { admin: admin, avatar: avatar, telemovel: telemovel, email: email }
  );

export const deleteAdmin = (id: string) => Admin.findByIdAndDelete(id);
