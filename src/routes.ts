import { FastifyInstance, FastifyPluginOptions, FastifyRequest, FastifyReply } from "fastify";
import { CreateClienteController } from "./controllers/Cliente/CreateClienteController";
import { GetClienteController } from "./controllers/Cliente/GetClienteController";
import { DeleteClienteController } from "./controllers/Cliente/DeleteClienteController";
import { UpdateClienteController } from "./controllers/Cliente/UpdateClienteController";
import { CreatePetController } from "./controllers/Pet/CreatePetController";
import { GetPetController } from "./controllers/Pet/GetPetController";
import { DeletePetController } from "./controllers/Pet/DeletePetController";
import { UpdatePetController } from "./controllers/Pet/UpdatePetController";
import { CreateMedicaoController } from "./controllers/Medicao/CreateMedicaoController";
import { GetMedicaoController } from "./controllers/Medicao/GetMedicaoController";

export async function routes(fastify: FastifyInstance, options: FastifyPluginOptions){

    //--------------------------------ROTAS CLIENTE----------------------------------

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

    //---------------------------------ROTAS PET--------------------------------------

    fastify.post("/pet", async (request: FastifyRequest, reply: FastifyReply) => {
        return new CreatePetController().handle(request, reply)
    })

    fastify.get("/pets", async(request: FastifyRequest, reply: FastifyReply) => {
        return new GetPetController().handle(request, reply)
    })

    fastify.delete("/pet", async(request: FastifyRequest, reply: FastifyReply) => {
        return new DeletePetController().handle(request, reply)
    })

    fastify.patch("/pet", async(request: FastifyRequest, reply: FastifyReply) => {
        return new UpdatePetController().handle(request, reply)
    })

    //------------------------------ROTAS MEDICAO-------------------------------------

    fastify.post("/medicao", async(request: FastifyRequest, reply: FastifyReply) => {
        return new CreateMedicaoController().handle(request, reply)
    })

    fastify.get("/medicoes", async(request: FastifyRequest, reply: FastifyReply) => {
        return new GetMedicaoController().handle(request, reply)
    })
}