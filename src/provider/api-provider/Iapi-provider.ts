export interface IRequest{
    path: string;
    params?: {
        postId: number;
    }
}

export interface IApiProvider {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    get({path, params}: IRequest): Promise<any>
}