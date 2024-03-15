import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { dbConnection } from "./database/dbConnection";
import { adminRoute } from "./routes/adminRoute";
import { loginRoute } from "./routes/loginRoute";
import { fabricanteRoute } from "./routes/fabricantesRoute";
import { fornecedorRoute } from "./routes/fornecedoresRoute";
import { funcionarioRoute } from "./routes/funcionariosRoute";
import { produtosRoute } from "./routes/produtosRoute";
import { carrinhoRoute} from "./routes/carrinhoRoute";
import { vendasRoute } from './routes/vendasRoute';

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
app.use("/admin", adminRoute);
app.use("/auth", loginRoute);
app.use("/fabricantes", fabricanteRoute);
app.use("/fornecedores", fornecedorRoute);
app.use("/funcionarios", funcionarioRoute);
app.use("/produtos", produtosRoute);
app.use("/carrinho", carrinhoRoute)
app.use("/vendas", vendasRoute)

//Server port
const port: number = Number(process.env.PORT || 2002);
app.listen(port, () => {
  console.log({ message: "Server running...", port: port });
});
