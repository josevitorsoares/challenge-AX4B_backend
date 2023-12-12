import { FastifyReply, FastifyRequest } from "fastify";
import { makeGetPostsWithCommentsUseCase } from "../../use-cases/factories/make-get-page-use-case";

export async function postWithCommentsController(request: FastifyRequest, reply: FastifyReply) {
    try {
        const { page } = request.query as { page: number };
        const useCase = await makeGetPostsWithCommentsUseCase();
        const postWithComments = await useCase.execute(page);

        return reply.send(postWithComments);
    } catch (error) {
        return reply.send(error);
    }

}