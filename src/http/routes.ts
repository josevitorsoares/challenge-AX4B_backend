import { FastifyInstance } from "fastify";
import { page } from "./controllers/page/page";

export async function appRoutes(app: FastifyInstance){
    app.get("/page", page);
}