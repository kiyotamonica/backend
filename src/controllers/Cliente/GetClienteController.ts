import { FastifyRequest, FastifyReply } from "fastify";
import { GetClienteService } from "../../services/Cliente/GetClienteService";

class GetClienteController{
    async handle(request: FastifyRequest, reply: FastifyReply){
        const getClienteService = new GetClienteService();

        const clientes = await getClienteService.execute();

        reply.send(clientes);
    }
}

export { GetClienteController }