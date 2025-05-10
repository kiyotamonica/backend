import prismaClient from "../../prisma";

class GetClienteService {
    async execute(){

        const clientes = await prismaClient.cliente.findMany({
            include: {
                pets: true
            }
        })

        return clientes;
    }
}

export { GetClienteService }