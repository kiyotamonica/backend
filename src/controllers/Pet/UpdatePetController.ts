import { FastifyRequest, FastifyReply } from "fastify";
import { UpdatePetService } from "../../services/Pet/UpdatePetService";

class UpdatePetController {
    async handle(request: FastifyRequest, reply: FastifyReply){
        const { id, nome, idade, raca, especie } = request.body as {
            id: string,
            nome?: string,
            idade?: number,
            raca?: string,
            especie?: string
        }

        const updatePetService = new UpdatePetService()

        const pet = await updatePetService.execute({
            id,
            nome,
            idade,
            raca,
            especie
        })

        reply.send(pet)
    }
}

export { UpdatePetController }