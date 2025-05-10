import prismaClient from "../../prisma"

interface CreatePetProps{
    nome: string,
    idade: number,
    raca: string,
    especie: string,
    idDono: string
}

class CreatePetService {
    async execute({ nome, idade, raca, especie, idDono }: CreatePetProps){

        const pet = await prismaClient.pet.create({
            data:{
                nome,
                idade,
                raca,
                especie,
                idDono
            }
        })

        return pet
    }
}

export { CreatePetService }