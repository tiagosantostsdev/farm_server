"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const cors_1 = __importDefault(require("cors"));
const dbConnection_1 = require("./database/dbConnection");
const adminRoute_1 = require("./routes/adminRoute");
const loginRoute_1 = require("./routes/loginRoute");
const fabricantesRoute_1 = require("./routes/fabricantesRoute");
const fornecedoresRoute_1 = require("./routes/fornecedoresRoute");
const funcionariosRoute_1 = require("./routes/funcionariosRoute");
const produtosRoute_1 = require("./routes/produtosRoute");
const carrinhoRoute_1 = require("./routes/carrinhoRoute");
const vendasRoute_1 = require("./routes/vendasRoute");
//enviroment variables
dotenv_1.default.config({ path: ".env" });
//Instance of express
const app = (0, express_1.default)();
//Database connection
(0, dbConnection_1.dbConnection)();
//App uses
app.use(express_1.default.json());
app.use((0, cors_1.default)());
//App uses routes
app.use("/admin", adminRoute_1.adminRoute);
app.use("/auth", loginRoute_1.loginRoute);
app.use("/fabricantes", fabricantesRoute_1.fabricanteRoute);
app.use("/fornecedores", fornecedoresRoute_1.fornecedorRoute);
app.use("/funcionarios", funcionariosRoute_1.funcionarioRoute);
app.use("/produtos", produtosRoute_1.produtosRoute);
app.use("/carrinho", carrinhoRoute_1.carrinhoRoute);
app.use("/vendas", vendasRoute_1.vendasRoute);
//Server port
const port = Number(process.env.PORT || 2002);
app.listen(port, () => {
    console.log({ message: "Server running...", port: port });
});
