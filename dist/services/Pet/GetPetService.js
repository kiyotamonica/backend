"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetPetService = void 0;
const prisma_1 = __importDefault(require("../../prisma"));
class GetPetService {
    async execute() {
        const pets = await prisma_1.default.pet.findMany({
            include: {
                dono: true,
                medicoes: true
            }
        });
        return pets;
    }
}
exports.GetPetService = GetPetService;
