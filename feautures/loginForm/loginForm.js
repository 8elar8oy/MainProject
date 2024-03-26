import {getInput} from "../../components/input";
import {button} from "../../components/button";
import {getUsers} from "../../api/getUsers";
import styles from "./loginForm.module.css"
const changePage =()=>{
    console.log('Button clicked');
    window.location.pathname = '/profile'
}
export const userData = {
    id: '',
    getId(id) {
        this.id = id
    }
};
const checkUser = (data,loginData) =>{
    console.log('good',data.find(user =>user.email === loginData.email && user.password === loginData.password))
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
        users => {console.log(users.data)/*const info = checkUser(users.data,userData); return info*/}
    )
        //.then( data=> console.log(data))

        /*changePage*/
        // patchUsers('users',userData,userData.id ).then(data => console.log(data.data))

        cleanUserForm(getUserForm().id)
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
const cleanUserForm = (id) =>{
    const form1 = document.getElementById(id)
    form1.reset()

    userData.password = ''
    userData.email =''

}
export const getUserForm = () => {
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