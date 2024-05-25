import styles from "./editWindow.module.css";
import { button } from "./button";
import {getEditPublicationForm} from "../feautures/editPublicationForm/editPublicationForm";

export const editPublicationWindow = (form) =>{
    
   
    //return () =>{
        
            const overlay = document.createElement('div')
            overlay.classList.add(styles.overlay)
            const edit = document.createElement('div')
            const closeBtn = button({text: "Закрыть",style: styles.btn,callBack:() => {
                //closeWindow();
                overlay.remove();
            }})
            
            const app = document.querySelector('#app')
            edit.classList.add(styles.editWindow)
            overlay.setAttribute('id','overlay')
            edit.append(closeBtn)
            edit.append(form)
            overlay.append(edit)
            app.append(overlay);
           
     
        
        
    //}
    
}//)//();