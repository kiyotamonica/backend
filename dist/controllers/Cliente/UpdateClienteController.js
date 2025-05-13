"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateClienteController = void 0;
const UpdateClienteService_1 = require("../../services/Cliente/UpdateClienteService");
class UpdateClienteController {
    async handle(request, reply) {
        const { id, nome, email, senha } = request.body;
        const updateClienteService = new UpdateClienteService_1.UpdateClienteService();
        const cliente = await updateClienteService.execute({ id, nome, email, senha });
        reply.send(cliente);
    }
}
exports.UpdateClienteController = UpdateClienteController;
