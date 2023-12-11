import { Post } from "../../types/Post";
import { PostRepository } from "../ipost.repository";

export class PostsRepository implements PostRepository {
    async getPost() {
        const post: Post[] = await fetch("https://jsonplaceholder.typicode.com/posts")
            .then((response) => {
                return response.json();
            });

        return post;
    }
}