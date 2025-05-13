"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdatePetController = void 0;
const UpdatePetService_1 = require("../../services/Pet/UpdatePetService");
class UpdatePetController {
    async handle(request, reply) {
        const { id, nome, idade, raca, especie } = request.body;
        const updatePetService = new UpdatePetService_1.UpdatePetService();
        const pet = await updatePetService.execute({
            id,
            nome,
            idade,
            raca,
            especie
        });
        reply.send(pet);
    }
}
exports.UpdatePetController = UpdatePetController;
