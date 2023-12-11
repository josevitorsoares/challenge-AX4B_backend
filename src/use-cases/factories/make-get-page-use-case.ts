import { PostsRepository } from "../../repositories/repository/posts-repository";
import { GetPageUseCase } from "../get-page";

export async function makeGetPageUseCase() {
    const postsRepository = new PostsRepository();
    const useCase = new GetPageUseCase(postsRepository);

    return useCase;
}