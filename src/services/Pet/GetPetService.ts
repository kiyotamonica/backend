import prismaClient from "../../prisma";

class GetPetService {
    async execute(){
        
        const pets = await prismaClient.pet.findMany({
            include: {
                dono: true
            }
        })

        return pets;
    }
}

export { GetPetService }