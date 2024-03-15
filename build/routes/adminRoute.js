"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.adminRoute = void 0;
const express_1 = require("express");
const adminController_1 = require("../controllers/adminController");
exports.adminRoute = (0, express_1.Router)();
exports.adminRoute.post("/newadmin", adminController_1.CreateAdmin);
exports.adminRoute.get("/findadmin", adminController_1.FindAdmin);
exports.adminRoute.patch("/updateadmin/:id", adminController_1.UpdateAdmin);
