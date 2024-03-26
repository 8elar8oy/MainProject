import { sendRequest } from './sendRequest';
const BASE_URL = 'http://localhost:3000';

export const createUsers = (pathName, user) => {
    return sendRequest({
        pathName,
        baseUrl: BASE_URL,
        method: 'POST',
        body: user
    });
};