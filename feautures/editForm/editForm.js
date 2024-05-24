import { button } from "../../components/button";
import styles from  './editForm.module.css'
import {getInput} from "../../components/input";
import { getTextarea } from "../../components/textarea";
import { getInputFile } from "../../components/inputFile";
export const getEditPublicationForm = (publication) =>{
    console.log(publication)
    const form = document.createElement('form');
    form.classList.add(styles.editForm);
    form.append(
        getTextarea({rows:5,cols:40,textareaTitle:'Введите текст',callBack: null,id:'publicationTitle',style:styles.textarea}),
        getInputFile({id:'publicationImage',labelStyles:styles.label}),
        button({text:"Сохранить",style: styles.btn,callBack: null}),

    );

    return form
}

