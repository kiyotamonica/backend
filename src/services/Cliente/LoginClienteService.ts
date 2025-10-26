import prismaClient from "../../prisma";

interface LoginClienteProps {
    email: string;
    senha: string;
}

class LoginClienteService {
    async execute({ email, senha }: LoginClienteProps) {
        
        const cliente = await prismaClient.cliente.findFirst({
            where: {
                email: email
            }
        });

        if (!cliente) {
            throw new Error("Email ou senha inválidos."); 
        }

        if (cliente.senha !== senha) {
             throw new Error("Email ou senha inválidos.");
        }
        
        const { senha: _, ...clienteSemSenha } = cliente;

        return clienteSemSenha;
    }
}

export { LoginClienteService };