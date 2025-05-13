"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeletePetService = void 0;
const prisma_1 = __importDefault(require("../../prisma"));
class DeletePetService {
    async execute({ id }) {
        const findPet = await prisma_1.default.pet.findFirst({
            where: {
                id: id
            }
        });
        if (!findPet) {
            throw new Error("Pet não encontrado.");
        }
        await prisma_1.default.pet.delete({
            where: {
                id: findPet.id
            }
        });
        return { message: "Deletado com sucesso." };
    }
}
exports.DeletePetService = DeletePetService;
