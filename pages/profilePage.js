import { getUsers } from '../api/getUsers';
import {getPublications} from "../api/getPublications";
import { profile } from '../pages/profile';



export const profilePage = (/*id*/) => {
    const div = document.createElement('div');

    getUsers(`users/1`).then(
        user =>{ div.append(profile( user.data))}
    )



    return div;
};