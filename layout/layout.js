
import {profilePage} from "../pages/profilePage";
import {registrationPage} from "../pages/registrationPage";

export const getLayout = () => {
    const div = document.querySelector('#app')

    if (window.location.pathname === '/') {
        div.append(registrationPage());
    }

    if (window.location.pathname === '/profile') {
        div.append(profilePage())
    }

    return div
}