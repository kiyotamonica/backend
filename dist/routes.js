"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.routes = routes;
const CreateClienteController_1 = require("./controllers/Cliente/CreateClienteController");
const GetClienteController_1 = require("./controllers/Cliente/GetClienteController");
const DeleteClienteController_1 = require("./controllers/Cliente/DeleteClienteController");
const UpdateClienteController_1 = require("./controllers/Cliente/UpdateClienteController");
const CreatePetController_1 = require("./controllers/Pet/CreatePetController");
const GetPetController_1 = require("./controllers/Pet/GetPetController");
const DeletePetController_1 = require("./controllers/Pet/DeletePetController");
const UpdatePetController_1 = require("./controllers/Pet/UpdatePetController");
const CreateMedicaoController_1 = require("./controllers/Medicao/CreateMedicaoController");
const GetMedicaoController_1 = require("./controllers/Medicao/GetMedicaoController");
async function routes(fastify, options) {
    //--------------------------------ROTAS CLIENTE----------------------------------
    fastify.get("/clientes", async (request, reply) => {
        return new GetClienteController_1.GetClienteController().handle(request, reply);
    });
    fastify.post("/cliente", async (request, reply) => {
        return new CreateClienteController_1.CreateClienteController().handle(request, reply);
    });
    fastify.delete("/cliente", async (request, reply) => {
        return new DeleteClienteController_1.DeleteClienteController().handle(request, reply);
    });
    fastify.patch("/cliente", async (request, reply) => {
        return new UpdateClienteController_1.UpdateClienteController().handle(request, reply);
    });
    //---------------------------------ROTAS PET--------------------------------------
    fastify.post("/pet", async (request, reply) => {
        return new CreatePetController_1.CreatePetController().handle(request, reply);
    });
    fastify.get("/pets", async (request, reply) => {
        return new GetPetController_1.GetPetController().handle(request, reply);
    });
    fastify.delete("/pet", async (request, reply) => {
        return new DeletePetController_1.DeletePetController().handle(request, reply);
    });
    fastify.patch("/pet", async (request, reply) => {
        return new UpdatePetController_1.UpdatePetController().handle(request, reply);
    });
    //------------------------------ROTAS MEDICAO-------------------------------------
    fastify.post("/medicao", async (request, reply) => {
        return new CreateMedicaoController_1.CreateMedicaoController().handle(request, reply);
    });
    fastify.get("/medicoes", async (request, reply) => {
        return new GetMedicaoController_1.GetMedicaoController().handle(request, reply);
    });
}
