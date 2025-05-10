import prismaClient from "../../prisma";

interface UpdatePetProps {
    id: string,
    nome? :string,
    idade?: number,
    raca?: string,
    especie?: string
}

class UpdatePetService {
    async execute({ id, nome, idade, raca, especie }: UpdatePetProps){

        const findPet = await prismaClient.pet.findFirst({
            where: {
                id: id
            }
        })

        if(!findPet){
            throw new Error("Pet não encontrado.")
        }

        const pet = await prismaClient.pet.update({
            where: { id },
            data: {
                nome,
                idade,
                raca,
                especie
            }
        })

        return pet
    }
}

export { UpdatePetService }