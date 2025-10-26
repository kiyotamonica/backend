import Fastify from 'fastify';
import cors from '@fastify/cors';
import { routes } from './routes';
import multipart from "@fastify/multipart";
import path from "path";
import fastifyStatic from '@fastify/static';


const app = Fastify({logger: true});

const start = async () => {
    await app.register(cors);

    await app.register(multipart, {
      attachFieldsToBody: true,
      limits: {
        fileSize: 20 * 1024 * 1024, // Limite de 5MB por arquivo de foto
      },
    });

    await app.register(fastifyStatic, {
      root: path.join(__dirname, '..', 'uploads'),
      prefix: '/uploads/',
    });

    await app.register(routes);

    try{
        await app.listen({port: 3131})
    }catch(err){
        process.exit(1)
    }

}

start();