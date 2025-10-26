import prismaClient from "../../prisma"

interface CreatePetProps{
    nome: string,
    idade: number,
    raca: string,
    especie: string,
    idDono: string,
    urlFoto?: string;
    coleiraId?: string;
}

class CreatePetService {
    async execute({ nome, idade, raca, especie, idDono, urlFoto, coleiraId }: CreatePetProps){

        const pet = await prismaClient.pet.create({
            data:{
                nome,
                idade,
                raca,
                especie,
                idDono,
                urlFoto,
                coleiraId
            }
        })

        return pet
    }
}

export { CreatePetService }