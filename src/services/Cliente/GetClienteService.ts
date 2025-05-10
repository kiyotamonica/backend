import prismaClient from "../../prisma";

class GetClienteService {
    async execute(){

        const clientes = await prismaClient.cliente.findMany()

        return clientes;
    }
}

export { GetClienteService }