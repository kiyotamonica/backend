"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteClienteController = void 0;
const DeleteClienteService_1 = require("../../services/Cliente/DeleteClienteService");
class DeleteClienteController {
    async handle(request, reply) {
        const { id } = request.query;
        const clienteService = new DeleteClienteService_1.DeleteClienteService();
        const cliente = await clienteService.execute({ id });
        reply.send(cliente);
    }
}
exports.DeleteClienteController = DeleteClienteController;
