import { Post } from "../models/Post";

export interface PostRepository {
    getPost(): Promise<Post[]>;
}