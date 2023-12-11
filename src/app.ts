import fastify from "fastify";
import cors from "@fastify/cors";
import { ZodError } from "zod";

import { appRoutes } from "./http/routes";

import { env } from "./env";

export const app = fastify();

app.register(appRoutes);

app.register(cors, {
    origin: "*",
    methods: ["GET"],
    allowedHeaders: [
        "Content-Type"
    ]
});

app.setErrorHandler((error, _, reply)=> {
    if (error instanceof ZodError) {
        return reply.status(400).send({
            message: "Validation Error",
            error: error.format()
        });
    }
    if (env.NODE_ENV === "development") {
        console.error(error);
    } 
    return reply.status(500).send({
        error: "Internal Server Error"
    });
});