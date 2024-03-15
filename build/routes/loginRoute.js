"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginRoute = void 0;
const express_1 = require("express");
const loginController_1 = require("../controllers/loginController");
exports.loginRoute = (0, express_1.Router)();
exports.loginRoute.post("/admin", loginController_1.AdminLogin);
exports.loginRoute.post("/funcionarios", loginController_1.FuncionarioLogin);
