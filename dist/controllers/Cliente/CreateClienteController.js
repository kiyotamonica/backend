"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateClienteController = void 0;
const CreateClienteService_1 = require("../../services/Cliente/CreateClienteService");
class CreateClienteController {
    async handle(request, reply) {
        const { nome, email, senha } = request.body;
        const clienteService = new CreateClienteService_1.CreateClienteService();
        const cliente = await clienteService.execute({ nome, email, senha });
        reply.send(cliente);
    }
}
exports.CreateClienteController = CreateClienteController;
