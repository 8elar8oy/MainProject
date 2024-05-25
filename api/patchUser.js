import { sendRequest } from './sendRequest';
const BASE_URL = 'http://localhost:3000';

export const patchUser = (pathName, user,id) => {
    return sendRequest({
        pathName:`${pathName}/${id}`,
        baseUrl: BASE_URL,
        method: 'PATCH',
        body: user
    });
};