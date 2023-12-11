import { Comment } from "../types/Comment";

export async function getComments(postId: number): Promise<Comment[]> {
    const comments = await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`)
        .then((response) => {
            return response.json();
        });

    return comments;
}