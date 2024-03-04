import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { dbConnection } from "./database/dbConnection";

//enviroment variables
dotenv.config({ path: ".env" });

//Instance of express
const app = express();

//Database connection
dbConnection();

//App uses
app.use(express.json());
app.use(cors());

//App uses routes

//Server port
const port: number = Number(process.env.PORT || 2002);
app.listen(port, () => {
  console.log({ message: "Server running...", port: port });
});
