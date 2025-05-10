import { FastifyRequest, FastifyReply } from "fastify";
import {CreateClienteService} from '../../services/Cliente/CreateClienteService';

class CreateClienteController{
    async handle(request: FastifyRequest, reply: FastifyReply){
        const {nome, email, senha} = request.body as {nome: string, email: string, senha: string}

        const clienteService = new CreateClienteService()

        const cliente = await clienteService.execute({nome, email, senha});

        reply.send(cliente)
    }
}

export{CreateClienteController}