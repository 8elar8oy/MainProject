
import {profilePage} from "../pages/profilePage";
import {registrationPage} from "../pages/registrationPage";
import {userData} from "../feautures/loginForm/loginForm";

export const getLayout = (/*userId,pathName*/) => {
    const div = document.querySelector('#app')
    const pathname = window.location.pathname;
    //console.log(pathName)
    if (pathname === '/') {
        div.append(registrationPage());
    }

    if (pathname === '/profile') {
        const userId = localStorage.getItem('userId');
        if(userId){
            //window.location.pathname = '/profile'
             div.innerHTML = ''; 
            div.append(profilePage(userId)); // Передача userId на страницу профиля
        }
        else{
            window.location.pathname = '/';
        }
            //console.log(userId,'abc')
           
        
        
    }

    return div
}