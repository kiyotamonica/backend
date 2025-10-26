import { FastifyRequest, FastifyReply } from "fastify";
import { CreatePetService } from "../../services/Pet/CreatePetService";

class CreatePetController {
    async handle(request: FastifyRequest, reply: FastifyReply){

        const {nome, idade, raca, especie, idDono, urlFoto, coleiraId } = request.body as {
                nome: string, 
                idade: number, 
                raca: string, 
                especie: string, 
                idDono: string,
                urlFoto?: string;
                coleiraId?: string;
            }

        if (!nome || idade == null || !raca || !especie || !idDono || !coleiraId) {
          return reply.status(400).send({ message: "Dados incompletos para cadastro do pet, incluindo coleiraId." });
        }

        const createPetService = new CreatePetService()

        try {
          const pet = await createPetService.execute({ nome, idade, raca, especie, idDono, urlFoto, coleiraId })
          reply.send(pet)
        } catch (error: any) {
          // Tratar erro caso coleiraId já exista
          reply.status(400).send({ message: error.message || "Erro ao cadastrar pet." });
        }
    }
}

export { CreatePetController }