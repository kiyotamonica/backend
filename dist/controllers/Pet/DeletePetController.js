"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeletePetController = void 0;
const DeletePetService_1 = require("../../services/Pet/DeletePetService");
class DeletePetController {
    async handle(request, reply) {
        const { id } = request.query;
        const deletePetService = new DeletePetService_1.DeletePetService();
        const pet = await deletePetService.execute({ id });
        reply.send(pet);
    }
}
exports.DeletePetController = DeletePetController;
