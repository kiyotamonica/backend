import prismaClient from "../../prisma";

interface DeletePetProps {
    id: string
}

class DeletePetService {
    async execute({ id }: DeletePetProps){

        const findPet = await prismaClient.pet.findFirst({
            where: {
                id: id
            }
        })

        if(!findPet){
            throw new Error("Pet não encontrado.")
        }

        await prismaClient.pet.delete({
            where: {
                id: findPet.id
            }
        })

        return {message: "Deletado com sucesso."}
    }
}

export { DeletePetService }