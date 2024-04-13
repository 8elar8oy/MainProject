import {getInput} from "../../components/input";
import {button} from "../../components/button";
import {getUsers} from "../../api/getUsers";
import styles from "./loginForm.module.css"
import { getLayout } from "../layout/layout";

export let userData = {
    id: '',
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
    return data.find(user =>user.email === loginData.email && user.password === loginData.password)
}
const getPassword = password => {
    userData.password = password;
};
const getEmail = email => {
    userData.email = email;
};
const getUserData = () => {
    getUsers('users').then(
        users => {console.log(users.data,userData); const info = checkUser(users.data,userData); return info}
    ).then(
        info =>{

            if(info){

                userData.getId(info.id)
                console.log(userData.id)
                alert('Авторизация успешна')
                changePage(userData.id)
            }
            else{
                alert('неверный пароль')
            }
        }

    )
        return
    if (!userData.name||!userData.email||!userData.username){
        return
    }
    // createUsers('users', userData)
    //     .then(data => {
    //         const users = document.getElementById('userContainer');
    //         users.append(userCard(data.data));
    //         cleanUserForm(getUserForm().id)
    //     })
    //     .catch(null);
};
//  .
export const getLoginForm = () => {
    const form = document.createElement('form');

    form.setAttribute('id','userId')
    form.classList.add(styles.form)
    form.append(
        getInput({ type: 'text', inputTitle: 'Email',id:'email',style: styles.input,callBack: getEmail }),
        getInput({ type: 'password', inputTitle: 'Пароль',id: 'password', style: styles.input, callBack:getPassword }),
        button({text:"Войти",style: styles.btn,callBack: getUserData}),
        button({text: 'Зарегистрироваться',style: styles.btn})
    );

    return form;
};