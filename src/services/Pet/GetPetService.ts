import prismaClient from "../../prisma";

class GetPetService {
    async execute(){
        
        const pets = await prismaClient.pet.findMany({
            include: {
                dono: true,
                medicoes: true
            }
        })

        return pets;
    }
}

export { GetPetService }