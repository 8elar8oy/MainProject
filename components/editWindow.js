import styles from "./editWindow.module.css";
import { button } from "./button";
import {getEditPublicationForm} from "../feautures/editForm/editForm";
import { isWindowOpen,openWindow,closeWindow } from "../feautures/windwowManager";
export const editPublicationWindow = (() =>{
    
   
    return (publication,user) =>{
        console.log(isWindowOpen())
        console.log(user)
        if (isWindowOpen()){
            console.log(isWindowOpen())
            console.log('о нет')
            return;
        }
        else{
            console.log('ура')
            const edit = document.createElement('div')
            const closeBtn = button({text: "Закрыть",style: styles.btn,callBack:() => {
                closeWindow();
                edit.remove();
            }})
            
            const app = document.querySelector('#app')
            edit.classList.add(styles.editWindow)
            edit.setAttribute('id','edit')
            edit.append(closeBtn)
            edit.append(getEditPublicationForm(publication,user))
            app.append(edit);
            openWindow()
            
        } 
        
        
    }
    
})();