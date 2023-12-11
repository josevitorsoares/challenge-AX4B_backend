import fastify from "fastify";
import cors from "@fastify/cors";
import { appRoutes } from "./http/routes";

export const app = fastify();

app.register(appRoutes);

app.register(cors, {
    origin: "*",
    methods: ["GET"],
    allowedHeaders: [
        "Content-Type"
    ]
});