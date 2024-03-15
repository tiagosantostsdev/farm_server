"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.dbConnection = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const dbConnection = () => {
    try {
        const mongodbURI = String(process.env.MONGODB_URI);
        mongoose_1.default.connect(mongodbURI);
        console.log({ message: "mongodb has been connected" });
    }
    catch (error) {
        if (error instanceof Error) {
            return console.error({ message: error.message });
        }
    }
};
exports.dbConnection = dbConnection;
