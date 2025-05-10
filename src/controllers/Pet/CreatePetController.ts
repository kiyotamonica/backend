import { FastifyRequest, FastifyReply } from "fastify";
import { CreatePetService } from "../../services/Pet/CreatePetService";

class CreatePetController {
    async handle(request: FastifyRequest, reply: FastifyReply){

        const {nome, idade, raca, especie, idDono } = request.body as {
                nome: string, 
                idade: number, 
                raca: string, 
                especie: string, 
                idDono: string 
            }

        const createPetService = new CreatePetService()

        const pet = await createPetService.execute({ nome, idade, raca, especie, idDono })

        reply.send(pet)
    }
}

export { CreatePetController }