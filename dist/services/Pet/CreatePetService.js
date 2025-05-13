"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreatePetService = void 0;
const prisma_1 = __importDefault(require("../../prisma"));
class CreatePetService {
    async execute({ nome, idade, raca, especie, idDono }) {
        const pet = await prisma_1.default.pet.create({
            data: {
                nome,
                idade,
                raca,
                especie,
                idDono
            }
        });
        return pet;
    }
}
exports.CreatePetService = CreatePetService;
