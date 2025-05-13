"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateMedicaoService = void 0;
const prisma_1 = __importDefault(require("../../prisma"));
class CreateMedicaoService {
    async execute({ idPet, frequencia_cardiaca, oximetria }) {
        const medicao = await prisma_1.default.medicao.create({
            data: {
                idPet,
                frequencia_cardiaca,
                oximetria,
                timestamp: new Date()
            }
        });
        return medicao;
    }
}
exports.CreateMedicaoService = CreateMedicaoService;
