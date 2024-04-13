import {registrationWindow} from "../feautures/registrationWindow/registrationWindow";
import styles from './registrationPage.module.css'
export const registrationPage = () =>{
    const div = document.createElement('div');
    div.classList.add(styles.regPg)
    div.append(registrationWindow())
    return div;
}