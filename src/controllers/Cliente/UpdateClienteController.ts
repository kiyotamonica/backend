import { FastifyRequest, FastifyReply } from "fastify";
import { UpdateClienteService } from "../../services/Cliente/UpdateClienteService";

class UpdateClienteController {
    async handle(request: FastifyRequest, reply: FastifyReply){
        const { id, nome, email, senha } = request.body as {
            id: string,
            nome?: string,
            email?: string,
            senha?: string
        }

        const updateClienteService = new UpdateClienteService()

        const cliente = await updateClienteService.execute({ id, nome, email, senha })

        reply.send(cliente)
    }
}

export { UpdateClienteController }