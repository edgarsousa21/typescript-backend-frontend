"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express")); // TypeScript
const app = (0, express_1.default)();
app.get('/produtos', (req, res) => {
    return res.send('Já Se inscreveu no Canal?');
});
app.listen(3000, () => {
    console.log('servidor Rodando');
});
