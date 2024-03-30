
import {profilePage} from "../pages/profilePage";
import {registrationPage} from "../pages/registrationPage";
import {userData} from "../feautures/loginForm/loginForm";

export const getLayout = () => {
    const div = document.querySelector('#app')

    if (window.location.pathname === '/') {
        div.append(registrationPage());
    }

    if (window.location.pathname === '/profile') {
        console.log(userData)

        //div.append(profilePage(userData.id))
    }

    return div
}