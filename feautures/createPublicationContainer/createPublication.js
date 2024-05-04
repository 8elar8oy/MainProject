import styles from './createPublicationDiv.module.css'
import { getInput } from '../../components/input'
import { button } from '../../components/button'
import { getInputFile } from '../../components/inputFile'
import { getPublications } from '../../api/getPublications'
import { createPublication } from '../../api/createPublication'
export let publicationData = {
    id: '',
    text: null,
    image: null,
    getId(id) {
        this.id = id
    }
};
export const getCreatePublicationDiv = () =>{
    const createPublicationDiv = document.createElement('div')
    createPublicationDiv.classList.add(styles.create)
    const publicateForm = document.createElement('form')
    publicateForm.setAttribute('id','userId')
    publicateForm.classList.add(styles.publicateForm)
    publicateForm.append(
        getInputFile({ id:'publicationPhoto'}),
        getInput({ type: 'text', inputTitle: 'Введите текст',id: 'publicationText', style: styles.input, callBack:null }),
        button({text:"Опубликовать",style: styles.btn,callBack: createNewPublication}),

    );
    createPublicationDiv.append(publicateForm)
    return createPublicationDiv
}
const createNewPublication = () =>{
    getPublications('publications').then(data =>
    {
        console.log(data.data.length)
    }
    )
    const input = document.getElementById('publicationText')
    console.log(input.value)
    //createPublication('publications',input.value)
}
const createNewUser = () =>{
    getUsers('users').then(data =>
    {
        console.log(data.data.length)
        const info = checkUser(data.data,userData);  
        return {
            id:`${data.data.length + 1}`,
            info: info
        }
    }).then(
        result =>{
            if(result.info ){
                alert('Пользователь уже существует')
            }
            else if(!userData.password || !userData.email){
                alert('Не оставляйте поля пустыми')
            }
            else{
                userData.getId(result.id)
                console.log(userData)
                createUsers('users', userData)
                .then(data =>{
                    changePage(userData.id)
                }) 
            }
        }
    )
}
   