import {getInput} from "../../components/input";
import {button} from "../../components/button";
import {getUsers} from "../../api/getUsers";
import styles from "./loginForm.module.css"
import { getLayout } from "../layout/layout";
import {createUsers} from "../../api/createUser";

export let userData = {
    id: '',
    name: null,
    surname: null,
    username: null,
    phone: null,
    image: [],
    getId(id) {
        this.id = id
    }
};
const changePage =(userId)=>{
    console.log('Button clicked',userData);
    localStorage.setItem('userId', userId);
    window.history.pushState({ path: '/profile' }, '', '/profile');
    getLayout();
}
const checkUser = (data,loginData) =>{
    if(userData.email && userData.password){
        return data.find(user =>user.email === loginData.email && user.password === loginData.password)
    }
    else{
        return null
    }
}
    
const getPassword = password => {
    userData.password = password;
};
const getEmail = email => {
    userData.email = email;
};
const getUserData = () => {
    getUsers('users').then(
        users => {
            console.log(users.data,userData.email); 
            const info = checkUser(users.data,userData); 
            return info}
    ).then(
        info =>{

            if(info){

                userData.getId(info.id)
                console.log(userData.id)
                alert('Авторизация успешна')
                changePage(userData.id)
            }
            else if(!userData.password || !userData.email){
                alert('Не оставляйте поля пустыми')
            }
            else{
                alert('неверный пароль')
            }
        }
    )
    return


};
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

export const getLoginForm = () => {
    const form = document.createElement('form');

    form.setAttribute('id','userId')
    form.classList.add(styles.form)
    form.append(
        getInput({ type: 'text', inputTitle: 'Email',id:'email',style: styles.input,callBack: getEmail }),
        getInput({ type: 'password', inputTitle: 'Пароль',id: 'password', style: styles.input, callBack:getPassword }),
        button({text:"Войти",style: styles.btn,callBack: getUserData}),
        button({text: 'Зарегистрироваться',style: styles.btn,callBack:createNewUser})
    );

    return form;
};