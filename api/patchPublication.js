import { sendRequest } from "./sendRequest";
const BASE_URL = 'http://localhost:3000';

export const patchPublication = (pathName, publication,id) => {
    return sendRequest({
        pathName:`${pathName}/${id}`,
        baseUrl: BASE_URL,
        method: 'PATCH',
        body: publication
    });
};