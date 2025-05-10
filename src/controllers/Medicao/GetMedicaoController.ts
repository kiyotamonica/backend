import { FastifyRequest, FastifyReply } from "fastify";
import { GetMedicaoService } from "../../services/Medicao/GetMedicaoService";

class GetMedicaoController {
    async handle(request: FastifyRequest, reply: FastifyReply){
        const { idPet } = request.query as {  idPet: string}

        const getMedicaoService = new GetMedicaoService()

        const medicoes = await getMedicaoService.execute(idPet)

        reply.send(medicoes);
    }
}

export { GetMedicaoController }