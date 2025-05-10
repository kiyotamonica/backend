import prismaClient from "../../prisma";

interface CreateClienteProps{
    nome: string;
    email: string;
    senha: string;
}

class CreateClienteService{
    async execute({nome, email, senha}: CreateClienteProps){
    
        const cliente = await prismaClient.cliente.create({
            data:{
                nome,
                email,
                senha
            }
        })
        
        return cliente
    }
}

export {CreateClienteService}