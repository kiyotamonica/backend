import prismaClient from "../../prisma";

class GetMedicaoService {
    async execute(idPet: string){
        const medicoes = await prismaClient.medicao.findMany({
            where: { idPet },
            orderBy: {
                timestamp: 'desc'
            }
        })

        return medicoes;
    }
}

export { GetMedicaoService }