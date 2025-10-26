import prismaClient from "../../prisma";

interface GetPetProps {
  idDono?: string;
}

class GetPetService {
  async execute({ idDono }: GetPetProps) {
    
    const whereClause = idDono ? { idDono: idDono } : {};

    const pets = await prismaClient.pet.findMany({
      where: whereClause,
      include: {
        dono: true,
        medicoes: true,
      },
    });

    return pets;
  }
}

export { GetPetService };