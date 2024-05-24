import { sendRequest } from './index';
const BASE_URL = 'http://localhost:3000';

export const removeUser = (pathName, id) => {
    return sendRequest({
        pathName: `${pathName}/${id}`,
        baseUrl: BASE_URL,
        method: 'DELETE',
    });
};