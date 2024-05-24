

import {registrationPage} from '../../pages/registrationPage'
import { profilePage } from "../../pages/profilePage";
export const getLayout = () => {
    const div = document.querySelector('#app')
    const pathname = window.location.pathname;
    if (pathname === '/') {
        div.append(registrationPage());
    }
    if (pathname === '/profile') {
        const userId = localStorage.getItem('userId');
        console.log('usid',userId)
        if(userId){    
             div.innerHTML = ''; 
             profilePage(userId); 
        }
        else{
            window.location.pathname = '/';
        } 
    }

    return div
}