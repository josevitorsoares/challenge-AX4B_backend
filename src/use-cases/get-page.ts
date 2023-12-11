import { PostRepository } from "../repositories/ipost.repository";
import { getComments } from "../utils/get-comments";

export class GetPageUseCase {
    constructor(
        private postRepository: PostRepository,
    ){}

    async execute() {
        const posts = await this.postRepository.getPost();

        const postWithComments = await Promise.all(posts.map(async post => {
            const comments = await getComments(post.id);
            
            post.comments = comments;
            return post;
        }));

        return postWithComments;
    }
}