import { IApiProvider } from "../provider/api-provider/Iapi-provider";
import { Post } from "../types/Post";

export class GetPostWithCommentsUseCase {
    constructor(
        private apiProvider: IApiProvider
    ) { }

    async execute(page: number) {

        const posts: [Post] = await this.apiProvider.get({ path: "/posts" });

        const postWithComments = await Promise.all(posts.map(async post => {
            const comments = await this.apiProvider.get({
                path: "/comments",
                params: { postId: post.id }
            });

            post.comments = comments;
            return post;
        }));

        return postWithComments.slice((page - 1) * 20, page * 20);
    }
}