import express from "express";
import { createAdmin, findAdmin, updateAdmin } from "../services/adminService";

export const CreateAdmin = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const { admin, email, password, avatar } = req.body as {
      admin: string;
      email: string;
      password: string;
      avatar: string;
    };
    if (!admin || !email || !password) {
      return res.status(400).send({ message: "Please submit all field" });
    }
    const adm = createAdmin({ admin, email, password, avatar });
    if (!adm) {
      return res
        .status(400)
        .send({ message: "Error creating new administrator" });
    }
    res
      .status(201)
      .send({ message: "New administrator has been created successful" });
  } catch (error) {
    if (error instanceof Error) {
      console.log({ message: error.message });
      return res.status(500).send({ message: error.message });
    }
  }
};

export const FindAdmin = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const adm = await findAdmin();
    if (!adm) {
      return res.status(404).send({ message: "No Administrator found" });
    }
    res.status(200).send(adm);
  } catch (error) {
    if (error instanceof Error) {
      console.log({ message: error.message });
      return res.status(500).send({ message: error.message });
    }
  }
};

export const UpdateAdmin = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const { id } = req.params as { id: string };
    const { admin, avatar } = req.body as { admin: string; avatar: string };
    if (!admin && !avatar) {
      return res
        .status(400)
        .send({ message: "Please submit at least one field" });
    }
    await updateAdmin(id, admin, avatar);
    res.status(200).send({ message: "Admin has been updated successful" });
  } catch (error) {
    if (error instanceof Error) {
      console.log({ message: error.message });
      return res.status(500).send({ message: error.message });
    }
  }
};
