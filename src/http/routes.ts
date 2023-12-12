import { FastifyInstance } from "fastify";
import { postWithCommentsController } from "./controllers/post-with-comments";

export async function appRoutes(app: FastifyInstance){
    app.get("/posts", postWithCommentsController);
}