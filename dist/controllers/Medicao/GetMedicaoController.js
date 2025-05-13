"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetMedicaoController = void 0;
const GetMedicaoService_1 = require("../../services/Medicao/GetMedicaoService");
class GetMedicaoController {
    async handle(request, reply) {
        const { idPet } = request.query;
        const getMedicaoService = new GetMedicaoService_1.GetMedicaoService();
        const medicoes = await getMedicaoService.execute(idPet);
        reply.send(medicoes);
    }
}
exports.GetMedicaoController = GetMedicaoController;
