import { FastifyRequest, FastifyReply } from "fastify";
import { GetPetService } from "../../services/Pet/GetPetService";

class GetPetController {
  async handle(request: FastifyRequest, reply: FastifyReply) {
    const { idDono } = request.query as { idDono?: string };

    const getPetService = new GetPetService();

    const pets = await getPetService.execute({ idDono });

    return pets;
  }
}

export { GetPetController };
