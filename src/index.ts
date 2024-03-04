import express from "express";
import dotenv from "dotenv";
import cors from "cors";

//enviroment variables
dotenv.config({ path: "./src/.env" });

//Instance of express
const app = express();

//App uses
app.use(express.json());
app.use(cors());

//App uses routes

//Server port
const port: number = Number(process.env.PORT || 2002);
app.listen(port, () => {
  console.log({ message: "Server running...", port: port });
});
