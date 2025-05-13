"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateClienteService = void 0;
const prisma_1 = __importDefault(require("../../prisma"));
class CreateClienteService {
    async execute({ nome, email, senha }) {
        const cliente = await prisma_1.default.cliente.create({
            data: {
                nome,
                email,
                senha
            }
        });
        return cliente;
    }
}
exports.CreateClienteService = CreateClienteService;
