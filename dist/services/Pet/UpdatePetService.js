"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdatePetService = void 0;
const prisma_1 = __importDefault(require("../../prisma"));
class UpdatePetService {
    async execute({ id, nome, idade, raca, especie }) {
        const findPet = await prisma_1.default.pet.findFirst({
            where: {
                id: id
            }
        });
        if (!findPet) {
            throw new Error("Pet não encontrado.");
        }
        const pet = await prisma_1.default.pet.update({
            where: { id },
            data: {
                nome,
                idade,
                raca,
                especie
            }
        });
        return pet;
    }
}
exports.UpdatePetService = UpdatePetService;
