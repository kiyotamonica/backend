"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreatePetController = void 0;
const CreatePetService_1 = require("../../services/Pet/CreatePetService");
class CreatePetController {
    async handle(request, reply) {
        const { nome, idade, raca, especie, idDono } = request.body;
        const createPetService = new CreatePetService_1.CreatePetService();
        const pet = await createPetService.execute({ nome, idade, raca, especie, idDono });
        reply.send(pet);
    }
}
exports.CreatePetController = CreatePetController;
