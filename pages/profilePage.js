import { getUsers } from '../api/getUsers';
import {getPublications} from "../api/getPublications";
import { profile } from '../feautures/profile/profile';
import { userData } from '../feautures/loginForm/loginForm';


export const profilePage = (id) => {
    const div = document.querySelector('#app');
    
    getUsers(`users/${id}`).then(
        user =>{
            div.append(profile(user.data))
        }
    )



    return div;
};