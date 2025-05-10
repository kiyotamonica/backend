import { FastifyInstance, FastifyPluginOptions, FastifyRequest, FastifyReply } from "fastify";
import { CreateClienteController } from "./controllers/Cliente/CreateClienteController";
import { GetClienteController } from "./controllers/Cliente/GetClienteController";
import { DeleteClienteController } from "./controllers/Cliente/DeleteClienteController";
import { UpdateClienteController } from "./controllers/Cliente/UpdateClienteController";

export async function routes(fastify: FastifyInstance, options: FastifyPluginOptions){
    fastify.get("/teste", async(request: FastifyRequest, reply: FastifyReply) => {
        return {ok: true}
    })

    fastify.get("/clientes", async(request: FastifyRequest, reply: FastifyReply) => {
        return new GetClienteController().handle(request, reply)
    })

    fastify.post("/cliente", async (request: FastifyRequest, reply: FastifyReply) => {
        return new CreateClienteController().handle(request, reply)
    })

    fastify.delete("/cliente", async(request: FastifyRequest, reply: FastifyReply) => {
        return new DeleteClienteController().handle(request, reply)
    })

    fastify.patch("/cliente", async (request: FastifyRequest, reply: FastifyReply) => {
        return new UpdateClienteController().handle(request, reply)
    })
}