import { button } from "../../components/button";
import styles from  './editUserForm.module.css'
import {getInput} from "../../components/input";
import { getTextarea } from "../../components/textarea";
import { getInputFile } from "../../components/inputFile";
import { publicationData } from "../publicationForm/createPublicationDiv";
import { patchUser } from "../../api/patchUser";
import { userData } from "../loginForm/loginForm";
import { getInfo } from "../profileInfo/getInfo";
import { checkEmail } from "../checkEmail/checkEmail";
import { checkName } from "../checkName/checkName";

const editUser = (user) =>{
    const overlay = document.getElementById('overlay')
    if(!checkEmail(user.email)){
        alert('Почта введена неверно')
    }
    else if(!checkName(user.name) || !checkName(user.surname)){
        alert('Имя или фамилия введены неверно')
    }
    else{
        patchUser('users',user,user.id).then(
        result=>{
                displayProfileInfo(user);
                overlay.remove();
        }
        )
    }
    

}
export const getEditUserForm = (user) => {
    console.log(user.email)
    const form = document.createElement('form');
    const nameInput = getInput({type: 'text', inputTitle: 'Имя', callBack: null, id: 'nameInput', style: styles.input,inputText:'Имя'});
    const surnameInput = getInput({type: 'text', inputTitle: 'Фамилия', callBack: null, id: 'surnameInput', style: styles.input,inputText:'Фамилия'});
    const usernameInput = getInput({type: 'text', inputTitle: 'Псевдоним', callBack: null, id: 'usernameInput', style: styles.input,inputText:'Псевдоним'});
    const phoneInput = getInput({type: 'text', inputTitle: 'Телефон', callBack: null, id: 'phoneInput', style: styles.input,inputText:'Телефон'});
    const passwordInput = getInput({type: 'text', inputTitle: 'Пароль', callBack: null, id: 'passwordInput', style: styles.input,inputText:'Пароль'});
    const emailInput = getInput({type: 'email', inputTitle: 'Email', callBack: null, id: 'emailInput', style: styles.input,inputText:'Email'});
    const avaInput = getInputFile({id: 'avaInput', labelStyles: styles.label});
    const hatInput = getInputFile({id: 'hatInput', labelStyles: styles.label});
    userData.getId(user.id)
    nameInput.querySelector('input').value = user.name;
    userData.name = user.name
    surnameInput.querySelector('input').value = user.surname;
    userData.surname = user.surname
    usernameInput.querySelector('input').value = user.username;
    userData.username = user.username
    phoneInput.querySelector('input').value = user.phone;
    userData.phone = user.phone
    passwordInput.querySelector('input').value = user.password;
    userData.password = user.password
    emailInput.querySelector('input').value = user.email;
    userData.email = user.email

    nameInput.addEventListener('change', () => {
        userData.name = nameInput.querySelector('input').value;
        console.log(userData)
    });

    surnameInput.addEventListener('change', () => {
        userData.surname = surnameInput.querySelector('input').value;
        console.log(userData)
    });

    usernameInput.addEventListener('change', () => {
        userData.username = usernameInput.querySelector('input').value;
        console.log(userData)
    });

    phoneInput.addEventListener('change', () => {
        userData.phone = phoneInput.querySelector('input').value;
    });

    passwordInput.addEventListener('change', () => {
        userData.password = passwordInput.querySelector('input').value;
    });

    emailInput.addEventListener('change', () => {
        userData.email = emailInput.querySelector('input').value;
        console.log(userData)
    });
    avaInput.addEventListener('change', function(event) {
        console.log('привет')
        const file = event.target.files[0];
        const reader = new FileReader();
        reader.readAsDataURL(file); 
        reader.onload = function(event) {
                const base64String = event.target.result;
                userData.ava = base64String; 
                console.log(userData);
        };
        
    });
    hatInput.addEventListener('change', function(event) {
        console.log('пока')
        const file = event.target.files[0];
        const reader = new FileReader();
        reader.readAsDataURL(file); 
        reader.onload = function(event) {
                const base64String = event.target.result;
                userData.hat = base64String; 
                console.log(userData);
        };
        
    });
   

    const saveBtn = button({text: "Сохранить", style: styles.btn, callBack: () => editUser(userData)});
    
    form.classList.add(styles.editForm);
    form.append(
        nameInput,
        surnameInput,
        usernameInput,
        phoneInput,
        passwordInput,
        emailInput,
        avaInput,
        hatInput,
        saveBtn
    );
    console.log(form)
    return form;
};


export const displayProfileInfo = (user) => {
    console.log(user)
    const main = document.getElementById('main')
    const profileInfo = document.getElementById('profileInfo');
    console.log(profileInfo)
    const newProfileInfo = getInfo(user)
    main.replaceChild(newProfileInfo,profileInfo)

};