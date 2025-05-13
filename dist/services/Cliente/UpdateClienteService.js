"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateClienteService = void 0;
const prisma_1 = __importDefault(require("../../prisma"));
class UpdateClienteService {
    async execute({ id, nome, email, senha }) {
        const findCliente = await prisma_1.default.cliente.findFirst({
            where: {
                id: id
            }
        });
        if (!findCliente) {
            throw new Error("Cliente não encontrado");
        }
        const cliente = await prisma_1.default.cliente.update({
            where: { id },
            data: {
                nome,
                email,
                senha,
                updated_at: new Date()
            }
        });
        return cliente;
    }
}
exports.UpdateClienteService = UpdateClienteService;
