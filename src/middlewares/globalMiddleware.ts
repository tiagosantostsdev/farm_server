import mongoose from "mongoose";
import express from "express";

export const validId = async (
  req: any,
  res: express.Response,
  next: express.NextFunction
) => {
  try {
    const { id } = req.params as { id: string };
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).send({ message: "Id inválido" });
    }
    req.id = id;
    next();
  } catch (error) {
    if (error instanceof Error) {
      console.log({ message: error.message });
      return res.status(500).send({ message: error.message });
    }
  }
};
