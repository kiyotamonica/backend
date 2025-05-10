import prismaClient from "../../prisma";

interface UpdateClienteProps{
    id: string;
    nome?: string;
    email?: string;
    senha?: string;
}

class UpdateClienteService {
    async execute({id, nome, email, senha}: UpdateClienteProps){
        const findCliente = await prismaClient.cliente.findFirst({
            where:{
                id: id
            }
        })

        if(!findCliente){
            throw new Error("Cliente não encontrado")
        }

        const cliente = await prismaClient.cliente.update({
            where:{ id },
            data: {
                nome,
                email,
                senha,
                updated_at: new Date()
            }
        })

        return cliente
    }
}

export { UpdateClienteService }