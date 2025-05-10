import prismaClient from "../../prisma";

interface CreateMedicaoProps {
    idPet: string,
    frequencia_cardiaca: number,
    oximetria: number
}

class CreateMedicaoService {
    async execute({ idPet, frequencia_cardiaca, oximetria }: CreateMedicaoProps){

        const medicao = await prismaClient.medicao.create({
            data: {
                idPet,
                frequencia_cardiaca,
                oximetria,
                timestamp: new Date()
            }
        })

        return medicao;
    }   
}

export { CreateMedicaoService }