import {getLoginForm} from "../loginForm/loginForm";
import styles from './registrationWindow.module.css'
import {image} from "../../components/image";

export const registrationWindow = () =>{
    const reg = document.createElement('div')
    const logo = image('../../images/logo.png')
    logo.classList.add(styles.logo)
    reg.classList.add(styles.container)
    reg.append(logo)
    reg.append(getLoginForm())
    return reg;
}