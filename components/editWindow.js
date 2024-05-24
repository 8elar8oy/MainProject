import styles from "./editWindow.module.css";
import { button } from "./button";
import {getEditPublicationForm} from "../feautures/editForm/editForm";
const closeEditWindow = (edit,isOpen) =>{
    edit.remove();
    isOpen = false;
}
export const editPublicationWindow = (() =>{
    
    let isOpen = false;
    console.log(isOpen)
    return (publication) =>{
        console.log("все")
        if (isOpen == true){
            console.log('фиг вам')
            return;
        }
        else{
            console.log('ура')
            const edit = document.createElement('div')
            const closeBtn = button({text: "Закрыть",style: styles.btn,callBack:closeEditWindow})
            const app = document.querySelector('#app')
            edit.classList.add(styles.editWindow)
            edit.append(closeBtn)
            edit.append(getEditPublicationForm(publication))
            
            app.append(edit);
            isOpen = true;
        } 
        
        
    }
    
})();