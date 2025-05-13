"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateMedicaoController = void 0;
const CreateMedicaoService_1 = require("../../services/Medicao/CreateMedicaoService");
class CreateMedicaoController {
    async handle(request, reply) {
        const { idPet, frequencia_cardiaca, oximetria } = request.body;
        const createMedicaoService = new CreateMedicaoService_1.CreateMedicaoService();
        const medicao = await createMedicaoService.execute({
            idPet,
            frequencia_cardiaca,
            oximetria
        });
        reply.send(medicao);
    }
}
exports.CreateMedicaoController = CreateMedicaoController;
