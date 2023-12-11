import { FastifyReply, FastifyRequest } from "fastify";
import { makeGetPageUseCase } from "../../../use-cases/factories/make-get-page-use-case";

export async function page(request: FastifyRequest, reply: FastifyReply) {
    try {
        const pageUseCase = await makeGetPageUseCase();
        const postWithComments = await pageUseCase.execute();

        return reply.send(postWithComments);
    } catch (error) {
        return reply.send(error);
    }
    
}