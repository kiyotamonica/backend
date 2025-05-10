import { FastifyRequest, FastifyReply } from "fastify";
import { GetPetService } from "../../services/Pet/GetPetService";

class GetPetController {
    async handle(request: FastifyRequest, reply: FastifyReply){

        const getPetService = new GetPetService()

        const pets = await getPetService.execute()

        return pets;
    }
}

export { GetPetController }