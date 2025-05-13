"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetPetController = void 0;
const GetPetService_1 = require("../../services/Pet/GetPetService");
class GetPetController {
    async handle(request, reply) {
        const getPetService = new GetPetService_1.GetPetService();
        const pets = await getPetService.execute();
        return pets;
    }
}
exports.GetPetController = GetPetController;
