"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetMedicaoService = void 0;
const prisma_1 = __importDefault(require("../../prisma"));
class GetMedicaoService {
    async execute(idPet) {
        const medicoes = await prisma_1.default.medicao.findMany({
            where: { idPet },
            orderBy: {
                timestamp: 'desc'
            }
        });
        return medicoes;
    }
}
exports.GetMedicaoService = GetMedicaoService;
