import {getUserForm} from "../feautures/loginForm/loginForm";
import styles from './registrationWindow.module.css'
import {image} from "../components/image";

export const registrationWindow = () =>{
    const reg = document.createElement('div')
    reg.classList.add(styles.container)
    reg.append(image('/logo.png'))
    reg.append(getUserForm())
    return reg;
}