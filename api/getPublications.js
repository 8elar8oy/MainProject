import { sendRequest } from './sendRequest';
const BASE_URL = 'http://localhost:3000';

export const getPublications = pathName => {
    return sendRequest({ pathName, baseUrl: BASE_URL });
};