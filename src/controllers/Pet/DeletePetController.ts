import { FastifyRequest, FastifyReply } from "fastify";
import { DeletePetService } from "../../services/Pet/DeletePetService";

class DeletePetController {
    async handle(request: FastifyRequest, reply: FastifyReply){

        const { id } = request.query as { id: string }

        const deletePetService = new DeletePetService();

        const pet = await deletePetService.execute({ id })

        reply.send(pet)
    }
}

export { DeletePetController }