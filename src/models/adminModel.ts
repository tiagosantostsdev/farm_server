import mongoose from "mongoose";
import bcrypt from "bcrypt";

const adminSchema = new mongoose.Schema({
  admin: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true, select: false },
  avatar: { type: String },
});

adminSchema.pre("save", function () {
  this.password = bcrypt.hashSync(this.password, 10);
});

export const Admin = mongoose.model("admin", adminSchema);
