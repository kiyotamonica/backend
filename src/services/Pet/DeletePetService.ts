import prismaClient from "../../prisma";

interface DeletePetProps {
    id: string
}

class DeletePetService {
    async execute({ id }: DeletePetProps){

        const findPet = await prismaClient.pet.findFirst({
            where: { id }
        })

        if(!findPet){
            throw new Error("Pet não encontrado.")
        }

        await prismaClient.medicao.deleteMany({
            where: {
                idPet: id
            }
        })

        await prismaClient.pet.delete({
            where: {
                id: id
            }
        })

        return {message: "Pet deletado com sucesso."}
    }
}

export { DeletePetService }