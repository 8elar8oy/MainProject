import { button } from "../../components/button";
import styles from  './editForm.module.css'
import {getInput} from "../../components/input";
import { getTextarea } from "../../components/textarea";
import { getInputFile } from "../../components/inputFile";
import { publicationData } from "../publicationForm/createPublicationDiv";
import { patchPublication } from "../../api/patchPublication";
import { displayPublications } from "../publicationForm/createPublicationDiv";
import { getPublications } from "../../api/getPublications";
import { userData } from "../loginForm/loginForm";
import { openWindow,closeWindow } from "../windwowManager";
const editPublication = (user) =>{
    const edit = document.getElementById('edit')
    
    patchPublication('publications',publicationData,publicationData.id).then(
        result=>{
            getPublications('publications').then(data=>{
                const updatedPublications = data 
                displayPublications(updatedPublications.data, user);
                edit.remove();
            }  
            )
             
           
        }
    )

}
export const getEditPublicationForm = (publication,user) =>{

    const form = document.createElement('form');
    const textInput =  getTextarea({rows:5,cols:40,textareaTitle:'Введите текст',id:'publicationTitle',style:styles.textarea});
    textInput.value = publication.title
    publicationData.title = textInput.value;

    textInput.addEventListener('change', () => {
        publicationData.title = textInput.value;
       
    });
    publicationData.id = publication.id
    publicationData.userId = publication.userId
    const fileInput = getInputFile({id:'publicationImage',labelStyles:styles.label});
    const saveBtn = button({text:"Сохранить",style: styles.btn,callBack: () => editPublication(user)});
    form.classList.add(styles.editForm);
    form.append(
        textInput,
        fileInput,
        saveBtn

    );

    return form
}

