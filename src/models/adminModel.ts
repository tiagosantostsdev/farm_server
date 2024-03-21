import mongoose from "mongoose";
import bcrypt from "bcrypt";

const adminSchema = new mongoose.Schema({
  admin: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true, select: false},
  avatar: { type: String },
  codeVerify:{type:String, default:undefined}
});

export const Admin = mongoose.model("admin", adminSchema);
