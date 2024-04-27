import styles from './createPublicationDiv.module.css'
import { getInput } from '../../components/input'
import { button } from '../../components/button'
export const getCreatePublicationDiv = () =>{
    const createPublicationDiv = document.createElement('div')
    createPublicationDiv.classList.add(styles.create)
    const publicateForm = document.createElement('form')
    publicateForm.setAttribute('id','userId')
    publicateForm.classList.add(styles.publicateForm)
    publicateForm.append(
        // getInputFile({ type: 'file', inputTitle: 'Выберите фото',id:'publicationPhoto',style: styles.customFileUpload,callBack: null }),
        getInput({ type: 'text', inputTitle: 'Введите текст',id: 'publicationText', style: styles.input, callBack:null }),
        button({text:"Опубликовать",style: styles.btn,callBack: null}),

    );
    createPublicationDiv.append(publicateForm)
    return createPublicationDiv
}