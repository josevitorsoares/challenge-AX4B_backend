import axios from "axios";
import { env } from "../../../env";
import { IApiProvider, IRequest } from "../Iapi-provider";

export default class AxiosProvider implements IApiProvider{
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    async get({ path, params }: IRequest): Promise<any> {
        try {
            const { data } = await axios.get(`${env.BASE_URL}${path}`, {
                params
            });
            return data;   
        } catch (error) {
            throw new Error("Error get JSONPlaceHolder data");
        }
    }
}