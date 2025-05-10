import { FastifyRequest, FastifyReply } from "fastify"
import { DeleteClienteService } from "../../services/Cliente/DeleteClienteService"

class DeleteClienteController{
    async handle(request: FastifyRequest, reply: FastifyReply){
        const { id } = request.query as { id: string }

        const clienteService = new DeleteClienteService();

        const cliente = await clienteService.execute({ id });

        reply.send(cliente);

    }
}

export { DeleteClienteController }