import Fastify from 'fastify';
import cors from '@fastify/cors';
import { routes } from './routes';

const app = Fastify({logger: true});

const start = async () => {
    await app.register(cors);
    await app.register(routes);

    try{
        await app.listen({
            host: '0.0.0.0', 
            port: process.env.PORT ? Number(process.env.PORT) : 3131
        })
    }catch(err){
        process.exit(1)
    }

}

start();