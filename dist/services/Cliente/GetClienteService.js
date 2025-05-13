"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetClienteService = void 0;
const prisma_1 = __importDefault(require("../../prisma"));
class GetClienteService {
    async execute() {
        const clientes = await prisma_1.default.cliente.findMany({
            include: {
                pets: true
            }
        });
        return clientes;
    }
}
exports.GetClienteService = GetClienteService;
