import { FastifyRequest, FastifyReply } from "fastify";
import { CreateMedicaoService } from "../../services/Medicao/CreateMedicaoService";

class CreateMedicaoController {
    async handle(request: FastifyRequest, reply: FastifyReply){

        const { idPet, frequencia_cardiaca, oximetria } = request.body as {
            idPet: string,
            frequencia_cardiaca: number,
            oximetria: number
        }

        const createMedicaoService = new CreateMedicaoService()

        const medicao = await createMedicaoService.execute({
            idPet,
            frequencia_cardiaca,
            oximetria
        })

        reply.send(medicao)
    }
}

export { CreateMedicaoController }