"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteClienteService = void 0;
const prisma_1 = __importDefault(require("../../prisma"));
class DeleteClienteService {
    async execute({ id }) {
        const findCliente = await prisma_1.default.cliente.findFirst({
            where: {
                id: id
            }
        });
        if (!findCliente) {
            throw new Error("Cliente não existente.");
        }
        await prisma_1.default.cliente.delete({
            where: {
                id: findCliente.id
            }
        });
        return { message: "Deletado com sucesso." };
    }
}
exports.DeleteClienteService = DeleteClienteService;
