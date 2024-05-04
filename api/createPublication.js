import { sendRequest } from './sendRequest';
const BASE_URL = 'http://localhost:3000';

export const createPublication = (pathName, publication) => {
    return sendRequest({
        pathName,
        baseUrl: BASE_URL,
        method: 'POST',
        body: publication
    });
};