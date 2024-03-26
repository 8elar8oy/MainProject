import {getInput} from "../../components/input";
import {button} from "../../components/button";
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

const getPassword = password => {
    userData.password = password;

};

const getEmail = email => {
    userData.email = email;
};

const getUserData = () => {

    if (userData.id){
        /*changePage*/
        // patchUsers('users',userData,userData.id ).then(data => console.log(data.data))

        cleanUserForm(getUserForm().id)
        return
    }
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
        getInput({ type: 'text', inputTitle: 'Email',id:'login',style: styles.input }),
        getInput({ type: 'password', inputTitle: 'Пароль',id: 'email', style: styles.input }),
        button({text:"Войти",style: styles.btn,callBack: changePage/*getUserData()*/}),
        button({text: 'Зарегистрироваться',style: styles.btn})
    );

    return form;
};