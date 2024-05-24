import { sendRequest } from "./sendRequest";
const BASE_URL = 'http://localhost:3000';

export const removeElement = (pathName, id) => {
    return sendRequest({
        pathName: `${pathName}/${id}`,
        baseUrl: BASE_URL,
        method: 'DELETE',
    });
};