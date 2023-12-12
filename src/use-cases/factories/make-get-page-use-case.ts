import AxiosProvider from "../../provider/api-provider/implementations/axios-provider";
import { GetPostWithCommentsUseCase } from "../get-post-with-comments";

export async function makeGetPostsWithCommentsUseCase() {
    const axiosProvider = new AxiosProvider();
    const useCase = new GetPostWithCommentsUseCase(axiosProvider);

    return useCase;
}