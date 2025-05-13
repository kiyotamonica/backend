"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetClienteController = void 0;
const GetClienteService_1 = require("../../services/Cliente/GetClienteService");
class GetClienteController {
    async handle(request, reply) {
        const getClienteService = new GetClienteService_1.GetClienteService();
        const clientes = await getClienteService.execute();
        reply.send(clientes);
    }
}
exports.GetClienteController = GetClienteController;
