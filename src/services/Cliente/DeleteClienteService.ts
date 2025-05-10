import { error } from "console";
import prismaClient from "../../prisma";

interface DeleteClienteProps{
    id: string;
}

class DeleteClienteService {
    async execute({id}: DeleteClienteProps){

        const findCliente = await prismaClient.cliente.findFirst({
            where:{
                id: id
            }
        })

        if(!findCliente){
            throw new Error("Cliente não existente.")
        }

        await prismaClient.cliente.delete({
            where:{
                id: findCliente.id
            }
        })

        return {message: "Deletado com sucesso."}

    }
}

export { DeleteClienteService }