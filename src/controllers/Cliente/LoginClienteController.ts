import { FastifyRequest, FastifyReply } from "fastify";
import { LoginClienteService } from '../../services/Cliente/LoginClienteService';

class LoginClienteController {
    async handle(request: FastifyRequest, reply: FastifyReply) {
        const { email, senha } = request.body as { email: string, senha: string };

        if (!email || !senha) {
            return reply.code(400).send({ message: "É necessário fornecer email e senha." });
        }

        try {
            const loginClienteService = new LoginClienteService();
            
            // Executa o serviço de login
            const cliente = await loginClienteService.execute({ email, senha });

            // Retorna o cliente (sem a senha) e status 200 OK
            return reply.send(cliente);

        } catch (error: any) {
            // Se o serviço lançar um erro
            return reply.code(401).send({ message: error.message || "Erro de autenticação." });
        }
    }
}

export { LoginClienteController };
